import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = fileURLToPath(new URL("..", import.meta.url));
const failures = [];

const requiredFiles = [
  "index.html",
  "vite.config.ts",
  "tsconfig.app.json",
  "src/main.tsx",
  "src/App.tsx",
  "src/data/courses.ts",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) failures.push(`Missing required file: ${file}`);
}

const indexHtml = readFileSync(join(root, "index.html"), "utf8");
if (!indexHtml.includes("/src/main.tsx")) {
  failures.push("index.html does not load /src/main.tsx");
}

function collectSourceFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return collectSourceFiles(path);
    return /\.(ts|tsx)$/.test(entry) && !entry.endsWith(".d.ts") ? [path] : [];
  });
}

const sourceFiles = collectSourceFiles(join(root, "src"));

for (const file of sourceFiles) {
  const source = readFileSync(file, "utf8");
  const result = ts.transpileModule(source, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
  });
  for (const diagnostic of result.diagnostics ?? []) {
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
    failures.push(`${relative(root, file)}: ${message}`);
  }
}

if (failures.length > 0) {
  console.error(`Smoke test failed with ${failures.length} problem(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`Smoke test passed: ${sourceFiles.length} source files parsed, required files present.`);

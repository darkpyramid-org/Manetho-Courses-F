import { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/features/theme/ThemeProvider";

/** Toggle between papyrus (light) and obsidian (dark). */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [title, setTitle] = useState("Switch theme");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        toggleTheme();
        setTitle(theme === "dark" ? "Switch to dark mode" : "Switch to light mode");
      }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={title}
      className="h-9 w-9 rounded-sm text-muted-foreground hover:text-foreground"
    >
      {theme === "dark" ? (
        <Sun className="h-4.5 w-4.5" aria-hidden="true" />
      ) : (
        <Moon className="h-4.5 w-4.5" aria-hidden="true" />
      )}
    </Button>
  );
}

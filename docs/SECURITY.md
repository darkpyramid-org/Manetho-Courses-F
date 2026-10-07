# Security Guidelines

This document outlines security considerations and best practices for the Manetho Courses project.

## Security Features

### Type Safety
- Full TypeScript with strict mode enabled
- Type-checked components and functions
- Prevents many common runtime errors

### Input Validation
- Validate all user inputs
- Sanitize data before rendering
- Use React's built-in XSS protection

### Dependencies
- Regularly updated dependencies
- Security audits via `npm audit`
- Dependabot automated updates

## Best Practices

### For Developers

#### 1. Never Commit Secrets
```bash
# WRONG - Never commit secrets
const API_KEY = "sk_live_abc123";

# RIGHT - Use environment variables
const API_KEY = process.env.VITE_API_KEY;
```

#### 2. Input Validation
```tsx
// Always validate user input
function handleInput(value: string) {
  if (typeof value !== 'string') return;
  if (value.length > 1000) return; // Limit input size
  
  // Process safely
  processData(value);
}
```

#### 3. XSS Prevention
```tsx
// React escapes by default - GOOD
<div>{userInput}</div>

// AVOID - Only use if absolutely necessary
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

#### 4. Environment Variables
Create `.env.local` (never commit):
```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_secret_key
```

Use in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

### For Contributors

- Keep dependencies updated
- Review dependency licenses
- Use `npm audit` before committing
- Follow code review process
- Run linting and type checks
- Test thoroughly before PRs

## Dependency Management

### Checking for Vulnerabilities
```bash
# Check for known vulnerabilities
npm audit

# Fix automatically (use with caution)
npm audit fix

# Show detailed report
npm audit --json
```

### Updating Dependencies
```bash
# Update packages safely
npm update

# Check what can be updated
npm outdated

# Use Dependabot for automated updates
# See .github/dependabot.yml
```

## Reporting Security Issues

**IMPORTANT**: Do NOT open public issues for security vulnerabilities.

See [SECURITY.md](../SECURITY.md) in the root directory for reporting procedures.

## Security Headers

When deploying, ensure these headers:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000
Content-Security-Policy: default-src 'self'
```

## HTTPS Only

Always use HTTPS in production:
```tsx
// GOOD
const url = 'https://api.example.com/data';

// BAD
const url = 'http://api.example.com/data';
```

## Sensitive Data

### Do NOT Store Client-Side
- Passwords
- API keys
- Tokens
- Personal information
- Credit card data

### Store Server-Side Only
- Use secure authentication
- Hash passwords
- Encrypt sensitive data
- Follow GDPR guidelines

## Third-Party Scripts

Carefully review any third-party libraries:
- Check GitHub reputation
- Review dependencies
- Check license compatibility
- Monitor for vulnerabilities

## Audit Trail

Keep records of:
- Security incidents
- Vulnerability reports
- Fixes applied
- Dependency updates

## Regular Reviews

Conduct regular security reviews:
- Monthly: Run `npm audit`
- Quarterly: Review dependencies
- Annually: Full security audit

## Contact

For security concerns: **security@manetho-courses.dev**

---

See [../SECURITY.md](../SECURITY.md) for vulnerability reporting.

# Security Policy

## Reporting Security Vulnerabilities

**DO NOT** open a public GitHub issue for security vulnerabilities.

Instead, please report security issues via email to: **security@manetho-courses.dev**

Include:
- Description of the vulnerability
- Steps to reproduce (if applicable)
- Impact assessment
- Suggested fix (if available)

We will acknowledge your report within 48 hours and work to resolve the issue.

## Supported Versions

| Version | Status | Support Until |
|---------|--------|----------------|
| 1.x     | Active | Current        |

Security updates are released as soon as they are available.

## Security Best Practices

### For Users
- Keep dependencies updated
- Use strong, unique passwords
- Enable two-factor authentication
- Report suspicious activity immediately

### For Developers
- Run `npm audit` regularly
- Check for known vulnerabilities: `npm audit --production`
- Keep dependencies updated: `npm update`
- Follow OWASP guidelines
- Use TypeScript strict mode
- Validate all user inputs

## Known Issues

None currently reported.

## Security Headers

When deploying, ensure these security headers are set:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
```

## Dependency Security

We use:
- ESLint for code quality
- TypeScript strict mode for type safety
- Regular dependency audits
- Automated security scanning (via GitHub)

## Privacy

- No personal data is collected by the application itself
- User data handling follows GDPR guidelines
- See Privacy Policy for details (if applicable)

## Compliance

This project follows:
- OWASP Security Guidelines
- WCAG 2.1 Accessibility Standards
- Industry best practices

## Questions?

Contact: **security@manetho-courses.dev**

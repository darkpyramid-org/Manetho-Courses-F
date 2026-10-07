# Contributing Guide

Thank you for your interest in contributing to Manetho Courses! We welcome contributions of all kinds.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Manetho-Courses-F.git
   cd Manetho-Courses-F
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/darkpyramid-org/Manetho-Courses-F.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```

## Development Workflow

### Branch Naming
Use descriptive branch names:
- `feature/add-quiz-system`
- `fix/mobile-nav-layout`
- `docs/update-setup-guide`
- `refactor/component-structure`

### Before Committing
```bash
npm run lint        # Fix linting issues
npm run typecheck   # Check TypeScript errors
npm run test        # Run smoke tests
```

### Commit Messages
Use clear, descriptive messages:
```
feat: Add quiz submission feature
fix: Resolve mobile menu alignment
docs: Update component documentation
refactor: Simplify course data structure
```

## Pull Request Process

1. **Update your fork**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push to your fork**:
   ```bash
   git push origin YOUR_BRANCH_NAME
   ```

3. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what was changed and why
   - Reference to related issues (if any)
   - Screenshots (for UI changes)

4. **Address feedback** from reviewers

5. **Ensure CI passes** - All checks must pass before merging

## Code Standards

### TypeScript
- Use strict mode
- Define interfaces for data structures
- Add JSDoc comments for complex functions

### React Components
- Use functional components with hooks
- Keep components focused and reusable
- Add prop interfaces

### Styling
- Use Tailwind CSS utilities
- Follow mobile-first approach
- Maintain consistent spacing and colors

### Testing
- Test your changes manually
- Consider edge cases
- Update documentation if needed

## Types of Contributions

### 🐛 Bug Reports
- Describe the issue clearly
- Include steps to reproduce
- Share expected vs actual behavior
- Add screenshots if applicable

### ✨ Features
- Discuss major features in an issue first
- Follow the coding standards
- Include documentation updates
- Add examples in component comments

### 📚 Documentation
- Fix typos and unclear explanations
- Add examples and use cases
- Improve architecture documentation
- Update API documentation

### 🎨 Design & UI
- Suggest improvements with mockups
- Report accessibility issues
- Test on multiple devices
- Consider mobile-first design

## Documentation Updates

When making changes:

1. Update relevant documentation files in `docs/`
2. Update `README.md` if needed
3. Add code comments for complex logic
4. Include examples in component documentation

## Need Help?

- 💬 Ask in [Discussions](https://github.com/darkpyramid-org/Manetho-Courses-F/discussions)
- 📖 Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- 🤔 Check [docs/FAQ.md](docs/FAQ.md)

## Code of Conduct

Please see [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) - we expect all contributors to follow it.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

Thank you for contributing! 🎉

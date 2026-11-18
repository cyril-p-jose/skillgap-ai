# Contributing to SkillGap AI

Thank you for your interest in contributing to **SkillGap AI**! 🎉

SkillGap AI is an open-source project built for Kerala college students to check their placement skill gap in 2 minutes. Contributions from students, beginners, and experienced developers are always welcome.

This document explains how to contribute to this project in a simple way.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Make Changes](#how-to-make-changes)
- [Pull Request Process](#pull-request-process)
- [Good First Issues](#good-first-issues)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Message Format](#commit-message-format)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)
- [Questions](#questions)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and friendly environment for all contributors.

- Be kind and respectful to others
- Welcome newcomers and help them learn
- No harassment, hate speech, or trolling
- Focus on learning and helping students

If you see any issue, please open an issue to report it.

---

## Ways to Contribute

You can contribute in many ways, not only code:

1. **Code** - Fix bugs, add features, improve UI
2. **Design** - Improve layout, colors, mobile responsiveness
3. **Documentation** - Improve README, add screenshots, fix typos
4. **Testing** - Test on mobile, tablet, desktop and report issues
5. **Ideas** - Suggest new companies, new branches, new questions
6. **Language Support** - Add Malayalam translation

---

## Getting Started

### 1. Fork the Repository

Click the **Fork** button at the top right of this repository.

This creates your own copy: `YOUR-USERNAME/skillgap-ai`

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/skillgap-ai.git
cd skillgap-ai-final
```

### 3. Add Original Repo as Upstream

```bash
git remote add upstream https://github.com/cyril-p-jose/skillgap-ai.git
```

To get latest changes later:

```bash
git fetch upstream
git merge upstream/main
```

---

## Development Setup

### Prerequisites

- Node.js 18 or above
- npm (comes with Node.js)
- Git
- VS Code (recommended)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

This creates `dist/` folder.

---

## How to Make Changes

### 1. Create a New Branch

Never work directly on `main` branch.

```bash
# For new feature
git checkout -b feature/your-feature-name

# For bug fix
git checkout -b fix/bug-description

# Examples:
git checkout -b feature/add-dark-mode
git checkout -b feature/add-malayalam-support
git checkout -b fix/mobile-report-overlap
```

### 2. Make Your Changes

Project flow is: **Home -> Select -> Skills -> Test -> Report**

Main files:
- `src/App.jsx` - Controls page flow
- `src/components/Home.jsx` - Landing page
- `src/components/SelectPage.jsx` - Branch & Company selection
- `src/components/SkillsPage.jsx` - Skill selection
- `src/components/TestPage.jsx` - 5 Questions test
- `src/components/ReportPage.jsx` - Score & 7-Day Plan

**Important Rules:**
- Don't break existing flow
- Test your change on Mobile, Tablet, Desktop
- Use Tailwind CSS for styling
- Keep components small and reusable

### 3. Test Your Changes

- Run `npm run dev` and test manually
- Check all pages: Home, Select, Test, Report
- Check WhatsApp share button
- Check mobile view in Chrome DevTools

---

## Pull Request Process

### 1. Commit Your Changes

```bash
git add .
git commit -m "feat: add dark mode toggle in navbar"
```

### 2. Push to Your Fork

```bash
git push origin feature/add-dark-mode
```

### 3. Open Pull Request

1. Go to original repo: https://github.com/cyril-p-jose/skillgap-ai
2. Click **Pull requests** -> **New Pull Request**
3. Select: `base: main` <- `compare: YOUR-USERNAME/feature/your-branch`
4. Add title and description

**PR Description Template:**

```markdown
## What I Changed
- Added dark mode toggle button in Navbar
- Used Tailwind dark: class for styling

## Screenshots
Add before/after screenshots here

## Testing
- Tested on mobile view
- Tested on desktop view
- All pages working: Home, Test, Report

## Related Issue
Closes #issue-number
```

### 4. Wait for Review

Maintainer will review your PR. Please respond to feedback and update your branch if needed.

Once approved, your PR will be merged and you will be added to contributors list!

---

## Good First Issues

New to open source? Start with these easy issues:

1. **Add new companies** - Add Zoho, UST, IBS in SelectPage
2. **Add Malayalam language support** - Add toggle on Home page
3. **Add Certificate Download** - Add download button in Report page
4. **Fix mobile responsiveness** - Fix Report page overlap on small phones
5. **Improve UI spacing** - Improve card spacing on Home page
6. **Add more branches** - Add branches like AI & DS, IT, etc.
7. **Fix typos** - Improve README and UI text

Look for label: `good first issue`

---

## Code Style Guidelines

### React
- Use functional components only
- Use Hooks like `useState` for state
- Component name in PascalCase: `ReportPage.jsx`
- Keep one component per file

### Tailwind CSS
- Use utility classes, don't write custom CSS
- Use responsive classes: `grid-cols-1 md:grid-cols-3`
- Use project colors: Dark Blue `#0F2B4D`, Light Blue `#DCE9F7`
- Don't use inline `style={{}}` unless necessary

### JavaScript
- Use `const` and `let`, not `var`
- Use arrow functions where suitable
- Add comments for complex logic like score calculation

### File Structure
- Don't create unnecessary files
- Put new components in `src/components/`
- Keep App.jsx clean, only flow control

---

## Commit Message Format

Use simple and clear commit messages:

```
feat: add new feature
fix: fix mobile bug
docs: update README
style: improve UI spacing
refactor: simplify test logic
chore: update dependencies

Examples:
feat: add WhatsApp share button
fix: fix score calculation for TCS
docs: add contributing guide
```

---

## Reporting Bugs

Before opening a bug issue, check if it already exists.

**Bug Report Template:**

```markdown
**Describe the bug**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
Add screenshots if possible.

**Device Info**
- Device: Mobile / Desktop
- Browser: Chrome / Firefox
- Screen size: 
```

---

## Requesting Features

**Feature Request Template:**

```markdown
**Is your feature request related to a problem?**
Please describe the problem.

**Describe the solution you'd like**
Clear description of what you want.

**Describe alternatives you've considered**
Other solutions you thought about.

**Additional context**
Any other info or screenshots.
```

---

## Questions

If you have any question:

1. Check existing Issues first
2. Open a new Issue with label `question`
3. Be clear and add screenshots if needed

We will try to help as soon as possible.

---

## License

By contributing to SkillGap AI, you agree that your contributions will be licensed under the **MIT License**.

---

## Thank You!

Thank you for helping make SkillGap AI better for Kerala students! ❤️

Every contribution matters, whether it's code, design, or just reporting a typo.

**Happy Contributing!**

---

<p align="center">
  <b>SkillGap AI - Open Source for Students</b><br>
  <a href="https://skillgap-ai-jet.vercel.app/">Live Demo</a> |
  <a href="https://github.com/cyril-p-jose/skillgap-ai">GitHub Repo</a>
</p>

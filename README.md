# learning-testcafe

Today's class contents
- What is TestCafe
- What programming language is needed.
- Pre-requisite of TestCafe
- Download and install node
- Download VS Code IDE
- Initiate a TestCafe project
- Write basics testcases with testcafe
- Tips 

## What is TestCafe
TestCafe: Automation testing framework for web application.

Free and open source

Supports windows, linux and mac OS

Easy Setup

Multiple browser supports

Runs on Node.js

Test can be created with JavaScript or TypeScript, CoffeeScript

## Features:
1. Test Recording.
2. Parallel run on multiple browsers.
3. Local and remote run.
4. Automatic page load wait time.
5. Page object model support.
6. CI/CD integrations.
7. TestCafe Studio 

## Pre-requisite of TestCafe

1. Install Node and NPM :  
   [https://nodejs.org/en/download](https://nodejs.org/en/download)

   How to check node and npm version:
   ```
   node --version
   npm --version
   ```

2. Install IDE : vscode  
   [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

## Project Setup

1. Install TestCafe

   a) Open VS Code

   b) Open your project folder

   c) Open terminal and run:
   ```
   npm init -y
   npm install testcafe --save-dev
   ```

   - At first, "package.json" file will be created (node project) 
   - package.json gets updated 
   - node_modules and package-lock.json are created 

2. (Optional) Install HTML Reporter for TestCafe:
   ```
   npm install --save-dev testcafe-reporter-html
   ```

## TestCafe - Write 1st Testcase

a) Create a new folder named `tests` and create a file `test1.js`

b) Create a fixture and test section

TestCafe test files consist of fixtures and tests

A fixture is a group of tests that share the same starting URL.

## TestCafe - Executing Testcase

If TestCafe is installed locally (as a dev dependency), use npx to run it:
```
npx testcafe chrome .\tests\test1.js
```
Or for headless mode:
```
npx testcafe chrome:headless .\tests\test1.js
```

If you want to use a reporter (like HTML):
```
npx testcafe chrome:headless tests/ --reporter html:tests/reports/report.html
```

## Common Issues & Solutions

- **'testcafe' is not recognized as the name of a cmdlet...**
  - This means TestCafe is not installed globally. Use `npx testcafe ...` instead of just `testcafe ...` when running from the terminal.
  - Or install globally: `npm install -g testcafe` (not recommended for CI/CD).

- **Reporter not found error:**
  - Install the reporter with: `npm install --save-dev testcafe-reporter-html`

- **Google blocks automation:**
  - Use demo sites like [https://demoqa.com/text-box](https://demoqa.com/text-box) or [https://trytestingthis.netlify.app/](https://trytestingthis.netlify.app/) for practice.

## GitHub Actions CI Integration

- Example workflow file: `.github/workflows/github-actions.yml`
- Runs tests on push/pull request to main/master
- Installs dependencies and runs TestCafe with HTML reporter
- Uploads test reports as artifacts

## Useful Commands

- Check Node.js and npm version:
  ```
  node --version
  npm --version
  ```
- Install dependencies:
  ```
  npm ci
  ```
- Run tests:
  ```
  npx testcafe chrome tests/
  ```
- Run tests with HTML report:
  ```
  npx testcafe chrome:headless tests/ --reporter html:tests/reports/report.html
  ```

---
**Summary of what was done:**
- Installed Node.js, npm, and VS Code
- Initialized a Node.js project and installed TestCafe
- Created test files and wrote basic tests
- Learned to run tests with npx
- Installed and used HTML reporter
- Handled common errors (like command not found)
- Used demo sites for testing
- Set up GitHub Actions for CI/CD
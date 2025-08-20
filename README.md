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
```https://nodejs.org/en/download```

how to check node and npm version

	node --version
	npm --version

2. Install IDE : vscode
```https://code.visualstudio.com/download ```

## Project Setup
1. Install TestCafe

	a) vs code 

	b) open folder

	c) terminal : 

		npm init -y
		npm install testcafe --save-dev


-> at first "package.json" file will be created (node project) 

-> package.json gets updated 

-> and node-module, package-lock.json got created 



## TestCafe - Write 1st Testcase
a) create a new folder for "tests" and create a file "test1.js"

b) Create a fixture and test section

TestCafe test files consist of fixtures and tests

A fixture is a groups of tests that share the same starting URL.

## TestCafe - Executing Testcase

	testcafe chrome .\tests\test1.js


## To run with reporter
Install the dependencies
npm install --save-dev testcafe-reporter-html

and execute the folowing 
testcafe chrome:headless tests/ --reporter html:tests/reports/report.html
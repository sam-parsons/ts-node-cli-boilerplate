# ts-node-cli-boilerplate

> Boilerplate for quickly creating a Node.js CLI with TypeScript, Jest, and CI with Github Actions.

## Getting started

**Click the "Use this template" button.**

Alternatively, create a new directory and then run:

```
$ curl -fsSL https://github.com/sam-parsons/ts-node-cli-boilerplate/archive/main.tar.gz | tar -xz --strip-components=1
```

## Usage

development

```json
// creates sym-link in global node_modules folder,
// pointing to the local repo
$ npm link

// we can now immediately invoke the package globally
$ your-package arg1 arg2

// run typsescript compilation to update global command
$ npm run build
```

dependency

```json
$ npm install --global your-package

$ your-package arg1 arg2
```

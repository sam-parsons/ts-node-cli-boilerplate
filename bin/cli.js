#!/usr/bin/env node

const lib = require('../dist/index.js').default;

console.log('lib return value', lib(process.argv[2]));

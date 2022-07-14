const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const render = require('./src/generate-site');
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

fs.writeFileSync(outputPath, render(team), 'utf-8')
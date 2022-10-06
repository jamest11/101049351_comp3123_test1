// COMP 3123 Lab Test 1 - Question 3
// add.js

const process = require('process')
const fs = require('fs');
const path = require('path');

const logsPath = path.join(__dirname, 'logs');

if (!fs.existsSync(logsPath)) {
    fs.mkdirSync(logsPath);
}

process.chdir(logsPath);

for(let i = 0; i < 10; i++) {
    let filename = `log${i}.txt`;
    let content = `This is file called ${filename}`;

    fs.writeFileSync(filename, content);
    console.log(`created ${filename}`);
}
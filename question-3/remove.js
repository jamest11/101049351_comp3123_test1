// COMP 3123 Lab Test 1 - Question 3
// remove.js

const fs = require('fs');
const path = require('path');
const process = require('process');

const logsPath = path.join(__dirname, 'logs');

if (fs.existsSync(logsPath)) {
    process.chdir(logsPath);

    const filenames = fs.readdirSync('.');
    filenames.forEach(filename => {
        fs.rmSync(filename);
        console.log(`deleted ${filename}`);
    });

    if(fs.readdirSync(logsPath).length == 0) {
        process.chdir(path.join(logsPath, '..'));
        
        fs.rmdirSync(logsPath);
        console.log('deleted logs folder');
    }
}
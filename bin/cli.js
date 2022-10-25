#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync('${command}', { stdio: 'inherit' })
    } catch (e) {
        console.error('Failed to execute ${command}', e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = 'git clone --depth=1 https://github.com/miguelgargallo/create-pylar-app ${repoName}';

console.log('Cloning repository with name ${repoName}');
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(code: -1);

console.log("Congratulations! You're ready to go!");
console.log('cd ${repoName} && ./runApp');

/* console.log('Hello World')
console.log(process.platform)
console.log(process.env.USER)
console.log('Hello World') */

console.log('---------------------------------- 1')

/* const { readFile, readFileSync } = require('fs');
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt)
console.log('do this ASAP') */

console.log('---------------------------------- 2')

/* readFile('./hello.txt', 'utf8', (err, txt2) => {
    console.log(txt2)
});
console.log('do this ASAP again') */

console.log('---------------------------------- 3')

const { readFile } = require('fs').promises;
/* async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
} */

console.log('---------------------------------- 4')

const myModule = require('./my-module');
console.log(myModule)

console.log('---------------------------------- 5')
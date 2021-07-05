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

//Function Statement
function makeBread(qty) {
    const bread = '🍞'.repeat(qty);

    // task or side-effect
    console.log(bread);

    // return value
    return bread;
}

const loaves = makeBread(7);
console.log(loaves);

//Function Expression
const makeBeer = function(qty) {
    return '🍺'.repeat(qty);
}

const beers = makeBeer(7);

console.log(beers);

//immediately invoked function expression

(function() {
    const x = 23
})();

console.log('---------------------------------- 6')

// Arguments
// Positional
function makeBreakfast (main, side, drink) {
    console.log(arguments);
    return `Breakfast includes ${main}, ${side}, and ${drink}`;
}

const breakfast = makeBreakfast('🥞', '🥓', '🥛');

console.log(breakfast);

console.log('---------------------------------- 7')

function makeLunch (opts) {
    const { main, side, drink } = opts;
    return `Lunch includes ${main}, ${side}, and ${drink}`;
}

makeLunch({ main: '🌯', side: '🍟', drink: '🥤'});

console.log(makeLunch({ main: '🌯', side: '🍟', drink: '🥤'}));

console.log('---------------------------------- 8')

//Rest params
function makeDinner (...args) {
    return `Dinner includes the following items: ${args.join('')}.`;


}
makeDinner('🍜','🥘','🍙','🥠','🍑');
console.log(makeDinner('🍜','🥘','🍙','🥠','🍑'));

console.log('---------------------------------- 9')



console.log('----------------------------------10')
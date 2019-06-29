const readline = require('readline-sync');
console.log('This is the calculator!');

console.log('Please enter a number:');
const strnum1 = readline.prompt();
const num1 = +strnum1;

console.log('Please enter another number:');
const strnum2 = readline.prompt();
const num2 = +strnum2;

const answer = num1 * num2;

console.log('The product of these numbers is ' + answer + '.');

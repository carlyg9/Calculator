const readline = require('readline-sync');
console.log('This is the calculator!');

console.log('Please enter an operator:');
const operator = readline.prompt();

console.log('Please enter a number:');
const strnum1 = readline.prompt();
const num1 = +strnum1;

console.log('Please enter another number:');
const strnum2 = readline.prompt();
const num2 = +strnum2;

let answer = 0;
if (operator == '+'){
    answer = num1 + num2;
} else if (operator == '-'){
    answer = num1 - num2;
} else if (operator == '*'){
    answer = num1 * num2;
} else if (operator == '/'){
    answer = num1 / num2;
} else {
    console.log(operator + ' is an invalid operator.');
    answer = 'undefined';
}


console.log('The answer is ' + answer + '.');

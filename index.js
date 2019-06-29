const readline = require('readline-sync');
console.log('This is the calculator!');

console.log('Please enter an operator:');
const operator = readline.prompt();

console.log('How many numbers do you want to ' + operator + '?')
const arraysize = readline.prompt();
var arr = Array(+arraysize)

for (var i=0; i<arr.length; i++ ){
    console.log('Please enter number ' + (i+1) + ':');
    arr[i] = +readline.prompt();
    }
let answer = arr[0];
switch(operator){
    case '+':
        for (var i=1; i<arr.length; i++ ){
            answer += arr[i]
            }
        break;
    case '-':
        for (var i=1; i<arr.length; i++ ){
            answer -= arr[i]
            }
        break;
    case '*':
        for (var i=1; i<arr.length; i++ ){
            answer *= arr[i]
            }
        break;
    case '/':
        for (var i=1; i<arr.length; i++ ){
            answer /= arr[i]
            }
        break;
    default:
        console.log(operator + ' is an invalid operator.');
        answer = 'undefined';
        break;
}


console.log('The answer is ' + answer + '.');

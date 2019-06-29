const readline = require('readline-sync');

function printWelcomeMessage(){
    console.log('This is the calculator!');
}

function howManyNumbers(op){
    console.log('How many numbers do you want to ' + op + '?')
    const arraysize = readline.prompt();
    var arr = Array(+arraysize);
    return arr
}

function chooseOperator(){
    console.log('Please enter an operator:');
    const operator = readline.prompt();
    return operator
}

function printAnswer(answer){
    console.log('The answer is ' + answer + '.');
}

function enterNumber(arr, index){
    console.log('Please enter number ' + (index+1) + ':');
    let response = readline.prompt();
    number = +response;
    while (isNaN(number)){
        console.log('Please enter number ' + (index+1) + ':');
        response = readline.prompt();
        number = +response;
    }
    arr[index] = number;
    return arr;
}

function errorMessage(operator){
    console.log(operator + ' is an invalid operator.');
    answer = 'undefined';
    return answer;
}


function performOneCalculation(){
    var operator = chooseOperator()
    var arr = howManyNumbers(operator)

    for (var i=0; i<arr.length; i++ ){
        arr = enterNumber(arr, i);
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
            answer = errorMessage(operator);
    }
    printAnswer(answer);
}



printWelcomeMessage()
while (true)
    performOneCalculation();



// Creating the initial math functions for our calculator: 
let add = function(a, b) {
    return a + b
}

let subtract = function(a, b){
    return a - b
}

let divide = function(a, b){
    return a / b
}

let multiply = function(a, b){
    return a * b
}

// Defining an operator function:

let operate = function(a, anOperator, b){
    if (anOperator == '+'){return add(a,b)}
    else if (anOperator == '-'){return subtract(a,b)}
    else if (anOperator == '*'){return multiply(a,b)}
    else if (anOperator == '/'){return divide(a, b)}
    else {return 'ERROR!!!!!!!'}
}

//Adding the number buttons

let numberDiv = document.querySelector('.number-buttons')
console.log(numberDiv)
for (let i = 0; i < 9; i++){
    newButton = document.createElement('button')
    newButton.classList.add('num-but')
    newButton.textContent = 9 - i
    numberDiv.appendChild(newButton)

}

let myEquals = document.createElement('button')
myEquals.classList.add('num-but')
myEquals.textContent = '='
numberDiv.appendChild(myEquals)

let myPeriod = document.createElement('button')
myPeriod.classList.add('num-but')
myPeriod.textContent = '.'
numberDiv.appendChild(myPeriod)

let myZero = document.createElement('button')
myZero.classList.add('num-but')
myZero.textContent = 0
numberDiv.appendChild(myZero)
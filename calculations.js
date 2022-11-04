// Creating the initial math functions for our calculator: 
let add = function(a, b) {
    return Number(a) + Number(b)
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
    else if (anOperator == 'x'){return multiply(a,b)}
    else if (anOperator == '÷'){return divide(a, b)}
    else {return 'ERROR!!!!!!!'}
}

//Adding the number buttons

let numberDiv = document.querySelector('.number-buttons')
for (let i = 0; i < 9; i++){
    newButton = document.createElement('button')
    newButton.classList.add('num-but')
    newButton.textContent = 9 - i
    numberDiv.appendChild(newButton)

}

//Adding some more buttons:

let myExp = document.createElement('button')
myExp.classList.add('num-but')
myExp.textContent = ' exp '
numberDiv.appendChild(myExp)

let myPeriod = document.createElement('button')
myPeriod.classList.add('period')
myPeriod.textContent = '.'
numberDiv.appendChild(myPeriod)

let myZero = document.createElement('button')
myZero.classList.add('num-but')
myZero.textContent = '0'
numberDiv.appendChild(myZero)

let myBackspace = document.createElement('button')
myBackspace.classList.add('backspace')
myBackspace.textContent = 'backspace'
numberDiv.appendChild(myBackspace)

let myClear = document.createElement('button')
myClear.classList.add('clearer')
myClear.textContent = 'clear'
numberDiv.appendChild(myClear)

//

let outputBar = document.querySelector('.output-bar')

let onClick = function(event){
    buttonText = event.target.textContent
    outputBar.textContent += buttonText
    outputBar.setAttribute('style', 'font-size: 2vw')
}

let onOpClick = function(event){
    buttonText = event.target.textContent
    outputBar.textContent += buttonText
    outputBar.setAttribute('style', 'font-size: 2vw')
    myPeriod.addEventListener('click', onPeriodClick)
}

let onPeriodClick = function(event){
    let newOutput =   outputBar.textContent.trim()
    newOutput += '.'
    outputBar.textContent = newOutput
    myPeriod.removeEventListener('click', onPeriodClick)
}

let allNums = document.querySelectorAll('.num-but')
Array.from(allNums).forEach(numBut => {
    numBut.addEventListener('click', onClick)
})

let allOps = document.querySelectorAll('.operator')
Array.from(allOps).forEach(opBut => {
    opBut.addEventListener('click', onOpClick)
})


myPeriod.addEventListener('click', onPeriodClick)

let onEquals = function(event){
    let numberString = outputBar.textContent
    numberString = numberString.trim()
    numberString = numberString.replaceAll(',',' ')
    let numberList = numberString.split(' ')
    console.log(numberList)
    if (numberList.length == 3){
        outputBar.textContent = operate(...numberList)
        return
    }
    else if (numberList.length > 3){

        outputBar.textContent = operate(...numberList.slice(0,3)) + ' ' + numberList.slice(3).toString()
        console.log(outputBar.textContent)
        onEquals(event)
    }
    else{
        return 
    }
}

myEquals = document.querySelector('.equal')
myEquals.addEventListener('click', onEquals)
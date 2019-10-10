const btnNumber = document.getElementsByClassName("btnNumber"); //selecting all the number buttons
const btnMath = document.getElementsByClassName("btnMath"); //selecting all the math buttons
const outputValue = document.getElementById("outputValue") //select the field to display our output
const btnClear = document.getElementById("btnClear"); //select the C button
const btnFunc = document.getElementById("btnFunc"); //select the euquals button
let finalValue = undefined; //create a final value that is undefined

function resetAll() {
    finalValue = undefined;
    outputValue.innerHTML = "";
}

function onNumberPress() {
     let value = outputValue.innerHTML;
     value = value + this.childNodes[1].innerHTML;
     outputValue.innerHTML = value;
     finalValue = value;

}

function keyEvent() {
    if (event.key == 'Enter') {
        finalOutput = eval(finalValue);
        outputValue.innerHTML = finalOutput;
    } else {
        if (event.key == '/' || event.key == '+' || event.key == '-' || event.key == '*' || !(isNaN(event.key))) {
            let value = outputValue.innerHTML;
            value = value + event.key;
            outputValue.innerHTML = value;
            finalValue = value;
        } else {
            if (event.key == 'Backspace') {
                resetAll();
            }
        } 
    }
}

function calcValue() {
   finalOutput = eval(finalValue);
   outputValue.innerHTML = finalOutput;
}

for (let i = 0; i < 10; i++) {
    btnNumber[i].addEventListener("click", onNumberPress);
   
}

for (let i = 0; i < btnMath.length; i++) {
    btnMath[i].addEventListener("click", onNumberPress);
}

btnClear.addEventListener("click", resetAll);
btnFunc.addEventListener("click", calcValue);
document.addEventListener('keydown', keyEvent);


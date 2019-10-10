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
   //add the event of click to all the div's containing numbers.
   //we call our function onNumberPress
}

for (let i = 0; i < btnMath.length; i++) {
    btnMath[i].addEventListener("click", onNumberPress);
    //add the event of click to all the div's with math values.
   //we call our function onNumberPress
}

btnClear.addEventListener("click", resetAll);
//add the event of click to the C button(div) and call resetAll
btnFunc.addEventListener("click", calcValue);
//add the event of click to the = button(div) and call calcValue
document.addEventListener('keydown', keyEvent);
////add the event of click to the document for any keypress of the keyboard

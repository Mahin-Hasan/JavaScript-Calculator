//1st add event listener to the Addition button
/*
document.getElementById('btn_add').addEventListener('click', function () {
    //2nd get input field value of 1st number 
    const inputFieldFirst = document.getElementById('first_input');
    const newInputAmountStringFirst = inputFieldFirst.value;
    const newInputAmountFirst = parseFloat(newInputAmountStringFirst);
    //3rd get input field value of 2nd number 
    const inputFieldSecond = document.getElementById('second_input');
    const newInputAmountStringSecond = inputFieldSecond.value;
    const newInputAmountSecond = parseFloat(newInputAmountStringSecond);

    // Perform add operations
    const additionResult = newInputAmountFirst + newInputAmountSecond;

    // set the result in Result box
    const resultField = document.getElementById('result_field');
    resultField.value = additionResult;

    // clearing the input
    inputFieldFirst.value = '';
    inputFieldSecond.value = '';
})
*/

function getFirstInputNumbers(){
    const inputFieldFirst = document.getElementById('first_input');
    const newInputAmountStringFirst = inputFieldFirst.value;
    const newInputAmountFirst = parseFloat(newInputAmountStringFirst);
    return newInputAmountFirst;

}
function getSecondInputNumber(){
    const inputFieldSecond = document.getElementById('second_input');
    const newInputAmountStringSecond = inputFieldSecond.value;
    const newInputAmountSecond = parseFloat(newInputAmountStringSecond);
    return newInputAmountSecond;
}  
// Add Operation
function onAddButtonClick() {
    let firstNumber = getFirstInputNumbers();
    let secondNumber = getSecondInputNumber();
    addResult=addNumbers(firstNumber,secondNumber);
    const resultField = document.getElementById('result_field');
    resultField.value = addResult;
}
function onSubButtonClick() {
    let firstNumber = getFirstInputNumbers();
    let secondNumber = getSecondInputNumber();
    addResult=subNumbers(firstNumber,secondNumber);
    const resultField = document.getElementById('result_field');
    resultField.value = addResult;
}
function onMulButtonClick() {
    let firstNumber = getFirstInputNumbers();
    let secondNumber = getSecondInputNumber();
    addResult=mulNumbers(firstNumber,secondNumber);
    const resultField = document.getElementById('result_field');
    resultField.value = addResult;
}
function onDivButtonClick() {
    let firstNumber = getFirstInputNumbers();
    let secondNumber = getSecondInputNumber();
    addResult=divNumbers(firstNumber,secondNumber);
    const resultField = document.getElementById('result_field');
    resultField.value = addResult;
}

function addNumbers(value1, value2){
    return value1 + value2;
}

function subNumbers(value1, value2){
    return value1 - value2;
}
function mulNumbers(value1, value2){
    return value1 * value2;
}
function divNumbers(value1, value2){
    return value1 / value2;
}

// Clearing the fields.
function clearField(){
    const inputFieldFirst = document.getElementById('first_input');
    const inputFieldSecond = document.getElementById('second_input');
    const resultField = document.getElementById('result_field');

    inputFieldFirst.value = '';
    inputFieldSecond.value = '';
    resultField.value = '';
}
function getInput(inputId){
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const input =  parseFloat(inputFieldString);
  inputField.value = '';
  return input;
}

function getAmount(amountId){
    const amountTotal = document.getElementById(amountId);
    const amountTotalString = amountTotal.innerText;
    const amount = parseInt(amountTotalString);
    return amount;
}
function setValue(inputId,amountId){
    const valueTotal = document.getElementById(inputId);
    valueTotal.innerText = amountId;
}
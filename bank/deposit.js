

document.getElementById('deposit-field').addEventListener('click', function(){

    const inputField=document.getElementById('deposit-input-field');
    const addInputField=parseFloat(inputField.value);

    // bbalance
    const  balance = document.getElementById('balance');
    const balanceValue = parseFloat(balance.innerText);

    const addContent=document.getElementById('add-deposit');
    const newBalance=parseFloat(addContent.innerText);

    const newDeposit=newBalance+addInputField;
    addContent.innerText=newDeposit;

    const newBalanceValue = balanceValue+addInputField;
    balance.innerText=newBalanceValue


    inputField.value=' '
})
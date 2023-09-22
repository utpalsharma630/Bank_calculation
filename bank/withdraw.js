document.getElementById('withdraw-field').addEventListener('click', function(){
    const newWithdraw=document.getElementById('withdraw-input-field');
    const addWithdraw=parseFloat(newWithdraw.value);

    const withdrawContent=document.getElementById('add-withdraw');
    const totalWithdraw=parseFloat(withdrawContent.innerText)

    const addNewWithdraw=totalWithdraw+addWithdraw;
    withdrawContent.innerText=addNewWithdraw;
    newWithdraw.value=''
})
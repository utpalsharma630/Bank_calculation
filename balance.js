// document.getElementById('deposit-field').addEventListener('click', function(){
//     const addBalance=documnet.getElementById('deposit-input-field');
    
   
 
    
// })




document.getElementById('withdraw-field').addEventListener('click', function(){
    const newWithdraw=document.getElementById('withdraw-input-field');
    const withdrawValue = parseFloat(newWithdraw.value);

    
 

    const withdrawContent=document.getElementById('balance');
    const totalWithdraw=parseFloat(withdrawContent.innerText);

    const addNewWithdraw=totalWithdraw-withdrawValue;
    console.log(addNewWithdraw);
    withdrawContent.innerText=addNewWithdraw;
    // newWithdraw.value=' '
})
























// // //-----------------------------------
// // document.getElementById('deposit-field').addEventListener('click', function(){

// //     const inputField=document.getElementById('deposit-input-field');
// //     const addInputField=parseFloat(inputField.value);
// //     console.log()

// //     // const addBalance=document.getElementById('balance');
// //     // // const newBalance=parseFloat(addBalance.innerText);

// //     // const totalBalance=addBalance+addInputField;
// //     // addContent.innerText=totalBalance;

// //     // inputField.value=' '
// // })
// // addInputField()
function handleCostKeydown(event){
    if(event.key === 'Enter'){
        calculateTotalAmount();
       }
}

function calculateTotalAmount(){
    let totalAmount = Number(document.querySelector('.js-inputAmount').value);

    if(totalAmount < 40){
        document.querySelector('.error-msg').innerHTML = '';
        document.querySelector('.total-amount').innerHTML = '';

        if(totalAmount<0){
            document.querySelector('.error-msg').innerHTML = 'Error : Cost can not be less than $0';
        }
        else{
            totalAmount = (totalAmount*100 + 1000)/100;               //if cost is decimal number
            document.querySelector('.total-amount').innerHTML = totalAmount;

        }
    }
    else{
        document.querySelector('.error-msg').innerHTML = '';
        document.querySelector('.total-amount').innerHTML = '';


        document.querySelector('.total-amount').innerHTML = totalAmount; 
    }
}

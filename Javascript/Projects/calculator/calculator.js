let calculation = localStorage.getItem('calculation') || '';

//whenever page loads it should display calculation
calculationDisplay();

    function updateCalculation(value){

        if(value === '+' || value === '-' || value === '*' || value ==='/'){
            calculation = calculation+' '+value+' ';
        }
        else{
            calculation += value;
        }

        //storing calculation data into localstorage
        localStorage.setItem('calculation', calculation);

        calculationDisplay();
    }

    function calculationDisplay(){
            
        document.querySelector('.js-calculation-display')
            .innerHTML = calculation;
    }
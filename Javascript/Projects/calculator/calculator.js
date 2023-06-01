let calculation = '';

        function updateCalculation(value){
            calculation += value;

            //storing calculation data into localstorage
            localStorage.setItem('calculation', calculation);
            
            calculationDisplay();
        }

        function calculationDisplay(){
            document.querySelector('.js-calculation-display')
                .innerHTML = calculation;
        }
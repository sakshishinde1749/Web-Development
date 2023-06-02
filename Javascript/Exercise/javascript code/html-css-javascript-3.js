function toggleWord(mainSelector, restSelector1, restSelector2){
    const mainButton = document.querySelector(mainSelector);
    const restFirstButton = document.querySelector(restSelector1);
    const restSecondButton = document.querySelector(restSelector2);


    //toggle means ON/OFF
        if(!mainButton.classList.contains('is-toggled')){
            mainButton.classList.add('is-toggled');

            if(restFirstButton.classList.contains('is-toggled')){
                restFirstButton.classList.remove('is-toggled');
    
            }
            if(restSecondButton.classList.contains('is-toggled')){
                restSecondButton.classList.remove('is-toggled');
            }
        
        }
}
let score = JSON.parse(localStorage.getItem('score')) || {Win : 0, Looses : 0, Tie : 0};

        /*if(!score){
            score = {
                Win : 0,
                Looses : 0,
                Tie : 0
            };
        }*/

        updateScoreElement();

        
        function pickComputerMove(){

            let randomNumber = Math.random();          //this funciton will choose number between 0 and 1
            let computerMove = '';

            if(randomNumber > 0 && randomNumber < 1/3 ){
                computerMove = 'Rock';
            }
            else if(randomNumber > 1/3 && randomNumber < 2/3 ){
                computerMove = 'Paper';
            }
            else{
                computerMove = 'Scissors';
            }

            return computerMove;
        
        }

        function playGame(playerMove){
            
            let computerMove = pickComputerMove();

            if(playerMove === 'Rock'){

                if(computerMove === 'Rock'){
                    result = 'Tie';
                }
                else if(computerMove === 'Paper'){
                    result = 'You Lose';
                }
                else{
                    result = 'You Win';
                }

            }
            else if(playerMove === 'Paper'){

                if(computerMove === 'Rock'){
                    result = 'You Win';
                }
                else if(computerMove === 'Paper'){
                    result = 'Tie';
                }
                else{
                    result = 'You Lose';
                }

            }
            else{
                if(computerMove === 'Rock'){
                    result = 'You Lose';
                }
                else if(computerMove === 'Paper'){
                    result = 'You Win';
                }
                else{
                    result = 'Tie';
                }

            }
            document.querySelector('.js-result')
                .innerHTML = `${result}`;

            document.querySelector('.js-move')
                .innerHTML = `Your Move <img class="rock-img" src="../../../../html/Static/rock-paper-scissors_game/${playerMove}-emoji.png" alt="">  <img class="rock-img" src="../../../../html/Static/rock-paper-scissors_game/${computerMove}-emoji.png" alt="">  Computer's move`;

            
            
            if(result === 'You Lose'){
                score.Looses ++;
            }
            else if(result === 'You Win'){
                score.Win ++;
            }
            else{
                score.Tie ++;
            }

            updateScoreElement();

            localStorage.setItem('score', JSON.stringify(score));     /*here we are storing the score values in local storage, local storage only suppports strings that's why we have converted object to the string.*/

            
        }

        function updateScoreElement(){

            document.querySelector('.js-score')
                .innerHTML = `Win : ${score.Win}, Looses : ${score.Looses}, Tie : ${score.Tie}`;
        }

        
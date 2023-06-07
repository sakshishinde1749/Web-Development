const score = JSON.parse(localStorage.getItem('score')) || {Win : 0, Losses : 0};
        
        function playGame(guess){
            let randomNumber = Math.random();
            let computerMove = '';
            let result = '';

            if(randomNumber < 1/2){
                computerMove = 'Heads';
            }
            else{
                computerMove = 'Tails';
            }

            if(computerMove === guess){
                result = 'Yeee You win';
                console.log(result);
                score.Win ++;
            }
            else{
                result = 'You lose';
                console.log(result);
                score.Losses ++;
            }
            localStorage.setItem('Score', JSON.stringify(score));
            console.log(score);

        }
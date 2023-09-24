
let score = JSON.parse(localStorage.getItem('score')) ||
{
         Wins: 0,
         Losses: 0,
         Ties: 0,
        

};

    function play (usermove){
       
        let result = '';
        let computerMove = computerMoveFunction(); 

        if (usermove == 'Rock' ){
            if (computerMove == 'Rock'){
                result = 'Tie';

            }else if(computerMove == 'Paper'){
            result = 'You Lose';   
            }else if (computerMove == 'Scissors'){
                result = 'You Won';
            }
        }
        else if (usermove == 'Paper' ){
            if (computerMove == 'Paper'){
                result = 'Tie';

            }else if(computerMove == 'Rock'){
            result = 'You Won';   
            }else if (computerMove == 'Scissors'){
                result = 'You Lose';
            }
        }
        else if (usermove === 'Scissors' ){
            if (computerMove === 'Scissors'){
                result = 'Tie';

            }else if(computerMove === 'Paper'){
            result = 'You Won';   
            }else if (computerMove === 'Rock'){
                result = 'You Lose';
            }
        }

        if (result === 'You Won'){
            score.Wins += 1;
        }else if(result === 'You Lose'){
            score.Losses += 1;
        }else if (result === 'Tie'){
            score.Ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        
        updatescoreElement();
        

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-move').innerHTML = `Your Move <img src="/images/${usermove}-emoji.png" class = "move"> <img src="/images/${computerMove}-emoji.png" class = "move">Computer Move`
        {/* //  `Your Move <img src="images/${usermove}-emoji.png"> <img src="images/${computerMove}-emoji.png">Computer Move `
        `Your move <img src="${usermove}-emoji.png" class="move"> <img src="${computerMove}-emoji.png" class="move">Computer move`; */}

   

}
    function updatescoreElement(){
        document.querySelector('.js-score').innerHTML = 
        `Wins:  ${score.Wins}
           Loss:  ${score.Losses}
            Tie:   ${score.Ties}`;

    }
    function computerMoveFunction(){

    const computerNumber = Math.random();
    let computerMove = " ";

    if (computerNumber >= 0 && computerNumber  < 1/3){
    computerMove ='Rock';
    }
    else if (computerNumber >= 1/3 && computerNumber < 2/3 )
    {
        computerMove = 'Paper';
    }
    else if(computerNumber >= 2/3 &&  computerNumber <= 1)
    {
        computerMove = 'Scissors';
    } 

    return computerMove;
}

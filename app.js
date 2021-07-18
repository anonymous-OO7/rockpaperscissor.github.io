let userScore =0 ;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const  scissors_div =  document.getElementById("s");


//userScore_span.innerHTML="chal rga";

function getComputerChoice()
{

    const choices = ['r' ,'p','s'];
        const randomNumber = Math.floor(Math.random()*3);

        return choices[randomNumber];
}

//console.log(getComputerChoice());


function convertToWord(letter){

    if(letter  === "r") return "rock";
    if(letter === "p") return "paper";
    if(letter === "s") return "scissor";
}

function win(userChoice ,computerChoice)
{
    userScore++;
   // computerScore_span.innerHTML = computerScore;
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    result_p.innerHTML =`
     ${convertToWord( userChoice)}   beats ${ convertToWord(computerChoice)} .You winn!!`;


}

function lose(userChoice,computerChoice)
{
    computerScore++;
    // computerScore_span.innerHTML = computerScore;
     console.log("comp score"+computerScore);
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML =`
      ${convertToWord( computerChoice)}   beats ${ convertToWord(userChoice)} .You lost!--!`;
 

}

function draw(userChoice, computerChoice)
{
     result_p.innerHTML =`
      ${convertToWord( userChoice)}   equals ${ convertToWord(computerChoice)} .its a draww!!`;
 

}



function game(userChoice)
{
 //   console.log("JDHJD   " + userChoice);

    const computerChoice = getComputerChoice();

    console.log(computerChoice);
    console.log(userChoice);

    switch(userChoice+ computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
           // console.log("USER WONS");
            win(userChoice , computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            //console.log("user loses !!!");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            //console.log("DRAWW!!!");
            draw(userChoice,computerChoice);
            break;

    }

}


function main(){
        rock_div.addEventListener('click' , function(){
        // console.log("HEYY YOU CLICKED ROCK");
            game("r");
        })

        paper_div.addEventListener('click' , function(){
        // console.log("HEYY YOU CLICKED paper");
        game("p");
        })

        scissors_div.addEventListener('click' , function(){
        //  console.log("HEYY YOU CLICKED scissors");

        game("s");
        })

}

main();
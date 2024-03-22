let userScore= 0;
let botScore=0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const botScorePara=document.querySelector("#bot-score");

const genBotChoice=()=>{
    const option = ["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoice, botChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor="green";
    }else{
        botScore++;
        botScorePara.innerText=botScore;
        msg.innerText=`You lose. ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame =(userChoice)=>{
    console.log("user choice =", userChoice);
    const botChoice=genBotChoice();
    console.log("Bot choice=", botChoice);

    if(userChoice===botChoice){
        //Draw
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin=botChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock, scissors
            userWin=botChoice==="scissor"?false:true;
        }else{
            //rock, paper
            userWin=botChoice==="rock"?false:true;

        }
        showWinner(userWin, userChoice, botChoice);
    }
   
    //Generate Bot choice
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
    
});

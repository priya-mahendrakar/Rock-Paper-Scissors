let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#userscore");
let compscorepara = document.querySelector("#compscore");


choices.forEach( function(choice){
    choice.addEventListener("click",function(){
       // console.log("choice was clicked");

        const playerchoice = choice.getAttribute("id");
        playturn(playerchoice);
    });
});

function playturn(playerchoice){
    //console.log("player chose=",playerchoice);

    compchoice = compturn();
    //console.log("comp chose=",compchoice);

    if(playerchoice === compchoice){
        gamedraw();
    }else{
        let userwin = true;
       if(playerchoice === "rock"){
        //paper scissors
        userwin = compchoice === "paper" ? false: true ;
       }else if(playerchoice === "paper"){
        //rock scissors
        userwin = compchoice === "scissors"? false :true;
        }else{
        userwin = compchoice === "rock"? false :true;   
        }
       showwinner(userwin, playerchoice, compchoice);
    }
};

function compturn(){
    const options =["rock","paper","scissors"];
   const idx = Math.floor(Math.random()*3);
   return options[idx];
};

function gamedraw(){
    //console.log("Game was draw");
};

let userchoice = 0;
let computerchoice = 0;

function showwinner(userwin, playerchoice,compchoice ){
 if(userwin){
   userchoice++;
   userscore.innerText = userchoice;
   msg.innerText=`You Win! Your ${playerchoice} beats ${compchoice}`;
   msg.style.backgroundColor = "green";
 }else{
   computerchoice++;
   compscorepara.innerText = computerchoice;
   msg.innerText=`You lose! Comp's ${compchoice} beats ${playerchoice}`;
   msg.style.backgroundColor = "red";
};
};
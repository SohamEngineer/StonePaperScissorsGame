let you=0;
let computer=0;
//Score Section-----------
let score1=document.querySelector("#sc1");
let score2=document.querySelector("#sc2");


//-----------Screen massage------------------
let msg=document.querySelector("#move");

// function Win(){
//     console.log("you win")
//     body.style.backgroundColor="yellow"
//     msg.innerText= `You Win. ${userchoice} beats ${comchoice}`;
// }



const choise=document.querySelectorAll(".box1");
let body=document.querySelector("body");
//computer generating function
const comgenerate=()=>{
    let option=["Rock","Paper","Scissors"]
   const random= Math.floor(Math.random()*3);
   return option[random]
}
// draw function
const drawgame=()=>{
    // console.log("The game was draw");
    body.style.backgroundColor="tomato"
}
//user generating function
let  playgame=(userchoice)=>{
console.log("user choice",userchoice);
// generate computer
let comchoice=comgenerate();
console.log("computer choice",comchoice);
if(userchoice===comchoice){
    drawgame();
    msg.innerText="Game is Draw Play again!";

}
else {
    if(userchoice==="Rock" && comchoice==="Scissors" ){
        userwin=true;
        // console.log("you win")
        body.style.backgroundColor="yellow"
        msg.innerText=  `You Win `;
        // Win();
        // let i=0;
        you++;
        score1.innerText=you;
        msg.innerText=`You Win ${userchoice} beate ${comchoice}`;
    }
     else if(userchoice==="Paper" && comchoice==="Rock"){
        userwin=true;
        // console.log("you win")
        body.style.backgroundColor="yellow"
        msg.innerText="You Win";
        // let you=0;
        you++;
        score1.innerText=you; 
        msg.innerText=`You Win ${userchoice} beate ${comchoice}`;
        // Win();

    }
     else if(userchoice==="Scissors" && comchoice==="Paper" ){
       userwin=true;
        // console.log("you win");
        body.style.backgroundColor="yellow"
        msg.innerText="You Win";
        // let you=0;
        you++;
        score1.innerText=you;
        msg.innerText=`You Win ${userchoice} beate ${comchoice}`;
    // Win();

    }
    else{
        // console.log("lost")
        body.style.backgroundColor="green"
        msg.innerText=`You Lose ${userchoice} beats ${comchoice}`;
        
        computer++;
        score2.innerText=computer;
    }

}}
choise.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        // console.log("choice Are clicked",userchoice)
    playgame(userchoice);
    // comgenerate();
    })
})
var score;

var  iteration={
  num:0,
   turn:1
}

//Team 1 details
var team1={
    name:"Angullia",
    goals:0,
    shot:0
}
//Team 2 details
var team2={
    name:"Armenia",
    goals:0,
    shot:0
}

var selectTurn = (turn)=>{
    if(turn===0){
        turn=1;
        iteration.turn=turn;
      team2.shot=team2.shot+1;
    }
    else{
        turn = 0;
        iteration.turn=turn;
      team1.shot=team1.shot+1;
    }
    iteration.num=iteration.num+1;
}
window.onload=()=>{
  updateButtonText();
}
let updateButtonText=()=>{
    var button=document.getElementById("striker-button");
    button.textContent=`Shoot ${iteration.turn === 1 ?team1.name: team2.name}`;
  var result=document.getElementById("result");
    result.style.visibilty="";
    if(team1.shot === 5 && team2.shot ===5){
        button.remove(); 
        result.textContent = team1.goals===team2.goals? `Match Draw`: `${ team1.goals > team2.goals ? team1.name: team2.name} Wins`;
    }
}
var ButtonClick=()=>{
    calculateGoal();
    selectTurn(iteration.turn);
    updateButtonText();
}
let calculateGoal=()=>{
  score = Math.round(Math.random());
  if(iteration.turn===1 && score===1){
      team1.goals=team1.goals+1; 
  }
  else if(score===1){
    team2.goals=team2.goals+1;
  }
  changeColor(score);
}
 
 
let changeColor=(score)=>{
  if(iteration.turn===1){
    var blackelements = document.getElementsByClassName("round1");
    if(score===1){
        blackelements[team1.shot].style.backgroundColor ="green";
     }
    else{
      blackelements[team1.shot].style.backgroundColor ="red";
    }
  }
  else{
    var blackelements = document.getElementsByClassName("round2");
    if(score===1){
        blackelements[team2.shot].style.backgroundColor ="green";
     }
    else{
      blackelements[team2.shot].style.backgroundColor ="red";
    }
  }
}
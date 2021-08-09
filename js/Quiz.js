class Quiz {
  constructor(){
  
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();
    
    background("Yellow")
    textSize(30)
    text("This Is A Quiz",120,300)
    getContestantInfo();
    if(allContestants !== undefined){

    fill("Blue");
    textSize(20);
    text("*Note Contestant who answered correctly are highlitghted in green Color",130,230)

    }

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns ="2";
      if(correctAns === allContestants[plr].answer)
      fill("Green")
      else
      fill("Red");
    }
  }

}

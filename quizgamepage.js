function addUser() {
    player1_name = document.getElementById("p1_name_input").value;
    player2_name = document.getElementById("p2_name_input").value;
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
      window.location = "quizgamepage.html";
  }

  
player1_name = localStorage.getItem("player1_name");

player1_score = 0;

player2_name = localStorage.getItem("player2_name");

player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;



document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;

document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
  number = document.getElementById("number").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number) * parseInt(number2);
  console.log(actual_answer);

  question_number = "<h4>" + number + "X" + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_number + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number").value = "";
document.getElementById("number2").value = "";
}

question_turn = "player1_name";
answer_turn = "player2_name";

function check()
{
get_answer = document.getElementById("input_check_box").value;                                                                       

if(get_answer==actual_answer) 
{
    if(answer_turn == "player1_name")
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else 
    {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
if(question_turn == "player1_name")
{
    question_turn = "player2_name"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
}
else 
{
    question_turn = "player1_name"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
}

if(answer_turn == "player1_name")
{
    answer_turn = "player2_name"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
}
else 
{
    answer_turn = "player1_name"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
}

document.getElementById("output").innerHTML="";
}
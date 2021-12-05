setInterval(function(){
    if (screen.width < 960){
        document.getElementById("Number1").style.width="50%";
        document.getElementById("Number2").style.width="50%"; 
    }
    else {
        document.getElementById("Number1").style.width="30%";
        document.getElementById("Number2").style.width="30%"; 
    }
}, 100);

var player1 = localStorage.getItem("User1");
var player2 = localStorage.getItem("User2");
var score1 = 0;
var score2 = 0;
var qt = "player1";
var at = "player2";

document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2;

function Send(){
    num1 = document.getElementById("No1").value;
    num2 = document.getElementById("No2").value;
    ans = parseInt(num1) * parseInt(num2);

    document.getElementById("ques").innerHTML = num1 + " x " + num2;
    document.getElementById("No1").value = "";
    document.getElementById("No2").value = "";
}

function Check(){
    answer = document.getElementById("Answer").value;
    console.log(answer);
    console.log(ans);
    if (answer == ans){
        if (at == "player1"){
            score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
            document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
            alert("Correct Answer! Now it is " + player2 + "'s turn to answer");
        }

        if (at == "player2"){
            score2 = score2 + 1;
            document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
            document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
            alert("Correct Answer! Now it is " + player1 + "'s turn to answer");
        }
    }
    else {
        alert("Ooops! You entered the wrong answer... Try next time! Next player's turn.");
    }

    if (qt == "player1"){
        qt = "player2";
        at = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2;
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1;
    }
    else {
        qt = "player1";
        at = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1;
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2;
    }

    document.getElementById("ques").innerHTML = "Question displayed here";
    document.getElementById("Answer").value = "";
}
function AddUser(){
    console.log("User Added");
    var User1 = document.getElementById("user1").value;
    var User2 = document.getElementById("user2").value;
    localStorage.setItem("User1", User1);
    localStorage.setItem("User2", User2);
    window.location = "main_index.html";
}

setInterval(function(){
    if (screen.width < 960){
        document.getElementById("USER1").style.width="80%";
        document.getElementById("USER2").style.width="80%"; 
        document.getElementById("Log").style.width="80%"; 
    }
    else {
        document.getElementById("USER1").style.width="30%";
        document.getElementById("USER2").style.width="30%"; 
        document.getElementById("Log").style.width="30%";
    }
}, 100);

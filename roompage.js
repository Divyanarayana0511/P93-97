var firebaseConfig = {
    apiKey: "AIzaSyA8mid_9H7tzE9562ZQZu2QFbVsQC3ghZs",
    authDomain: "tanish-d830e.firebaseapp.com",
    databaseURL: "https://tanish-d830e-default-rtdb.firebaseio.com",
    projectId: "tanish-d830e",
    storageBucket: "tanish-d830e.appspot.com",
    messagingSenderId: "539779934368",
    appId: "1:539779934368:web:318bad77d3c89d6f3401c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location.replace("loginpage.html");
}

function getname() {
    username = localStorage.getItem("username");
    document.getElementById("getname").innerHTML = username;
}

function addroom() {
    console.log("moving to chatpage");
    roomname = document.getElementById("roomname").value;
    
    firebase.database().ref("/").child(roomname).update({
        purpose : "adding room name"
      });
      localStorage.setItem("roomname", roomname);
    window.location="chatpage.html";
}


getData();
function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
 //Start code
        roomname= console.log("roomname",Room_names);
         row="<div class='roomname' id='"+Room_names+"' onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
 //End code
    });});}

function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location="chatpage.html";

}
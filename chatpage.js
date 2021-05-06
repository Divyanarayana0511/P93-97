
// Your web app's Firebase configuration
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

//YOUR FIRE BASE LINKS

//YOUR FIRE BASE LINKS

  username = localStorage.getItem("username");
  roomname = localStorage.getItem("roomname");

function getroom(){
  document.getElementById("room").innerHTML=roomname;
}
function send()
{
  if(document.getElementById("msg").value!=""){
msg = document.getElementById("msg").value;
firebase.database().ref(roomname).push({
  name:username,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
       console.log(firebase_message_id);
       console.log(message_data);
       name1 = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'></h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;       
      document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes  
 });

}

function logout() {
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location.replace("loginpage.html");
}
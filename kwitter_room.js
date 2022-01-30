
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBsoAjAt-CZE_vfHfwnZNmWBWGVK6qK5gU",
      authDomain: "kwitter-test-14df4.firebaseapp.com",
      databaseURL: "https://kwitter-test-14df4-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-14df4",
      storageBucket: "kwitter-test-14df4.appspot.com",
      messagingSenderId: "359817861764",
      appId: "1:359817861764:web:9293a11665be76762680d1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row = "<div class = 'room name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_room.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name , name");
      window.location = "kwitter_page.html";
}
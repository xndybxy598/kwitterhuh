
//ADD YOUR FIREBASE LINKS HERE

      var firebaseConfig = {
      apiKey: "AIzaSyAJUNN1i4d6QLxcziUoIE4njRVkidb0ZsE",
      authDomain: "kwitter2-632ca.firebaseapp.com",
      databaseURL: "https://kwitter2-632ca-default-rtdb.firebaseio.com",
      projectId: "kwitter2-632ca",
      storageBucket: "kwitter2-632ca.appspot.com",
      messagingSenderId: "526415928287",
      appId: "1:526415928287:web:808e996286762f827d426a"
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

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
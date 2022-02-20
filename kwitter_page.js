//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
   
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];

      name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
      message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
      like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+" value ="+like+" onclick = 'update_like(this.id)'>";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:" + like + "</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function update_like(message_id){
      console.log("clicked on the like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes 
      });
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

//how to update database - either create new database or update rules (from false to true)
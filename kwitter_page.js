//YOUR FIREBASE LINKS
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

//End code
      } });  }); }
getData();


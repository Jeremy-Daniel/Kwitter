
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBYVjxF_TIvDSfhekytBrvVSzXCmyT-SI0",
      authDomain: "classtest-39f75.firebaseapp.com",
      projectId: "classtest-39f75",
      storageBucket: "classtest-39f75.appspot.com",
      messagingSenderId: "536446279568",
      appId: "1:536446279568:web:5b6b2f2ca95fbefb9b1d15"
    };
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

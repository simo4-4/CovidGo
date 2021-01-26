
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCzABbVlIBj6r1blxCjkFHW7DCIwqhfSNg",
    authDomain: "covidgo-57265.firebaseapp.com",
    projectId: "covidgo-57265",
    storageBucket: "covidgo-57265.appspot.com",
    messagingSenderId: "183183543596",
    appId: "1:183183543596:web:067c1498d283927a797089",
    measurementId: "G-P80GWGF52S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();



  function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    promise = firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
   }

   function signIn(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed In " + email.value);

    //Take user to a different or home page
   }

   
   function signOut(){
  
    firebase.auth().signOut();
    alert("Signed Out ");
   }
  


   //if(!loggedIn){
    firebase.auth().onAuthStateChanged(function(user){

        if(user){


          var email = user.email;

          
          alert("Active User: " + email + " " + window.location);

          if (confirm('Log in or stay logged in? Press OK to LOGIN and CANCEL to LOGOUT')) {
            // Save it!
            window.location = "map.html";
            console.log('User logged in');
          } else {
            // Do nothing!
            signOut();
            console.log('User logged out');
          }
          

          
          //firebase.Unsubscribe;
          //is signed in
        }

        else{


          alert("No Active User");
          //no user is signed in
        }




    });
   //}
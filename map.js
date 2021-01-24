
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


  function signOut(){
  
    firebase.auth().signOut();
    alert("Signed Out ");
    window.location = "login.html";
    alert(window.location=="file:///Users/simohamed/Desktop/McGill%20Material/Web%20Dev/CovidGo/map.html");


   }

   // Initialize and add the map
   function initMap() {
    // The location of Uluru
    const montreal = { lat: 45.498667, lng: -73.595394};
    // The map, centered at montreal
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: montreal,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: montreal,
      map: map,
    });
  }
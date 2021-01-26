
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

   //let map, infoWindow;

   function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 45.5017, lng: -73.5673 },
      zoom: 14,
      mapTypeId: "roadmap",
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
          alert("current location 2");
          initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          map.setCenter(initialLocation,1);

          new google.maps.Marker({
            position: initialLocation,
            map,
            title: "Current location",
          });
      });
    }
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
          
        };
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
  
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }

        

        //sleep(2);

        
        if (confirm('See Rating for ' + place.name + '?')) {
          // Save it!
          map.fitBounds(bounds);
          
          window.location = "place.html";
          document.getElementById("placeName").innerHTML = 56;
          
          //window.location = "place.html";
          alert("go to rating....");
          
          console.log('Press on a place');
        } else {
          // Do nothing!
          map.fitBounds(bounds);
          signOut();
          console.log('User logged out');
        }
        



      });
      //map.fitBounds(bounds);


      



    });

    
  }

       
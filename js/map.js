// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
var map;

function initMap() {
  var marker1 = {lat: 52.166890, lng: 5.340858};
  var marker2 = {lat: 52.332806, lng: 5.519431};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: marker1,
    //mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // Adds a marker on the map.
  addMarker(marker1);
  addMarker(marker2);
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  
}
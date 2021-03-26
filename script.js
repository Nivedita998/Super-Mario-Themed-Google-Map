/* Map ID: f7493128490e4587 */
/* Type: JavaScript - Raster */
/* api key -" AIzaSyCqSo3z0c6wdoH5NF63fSK8ktBgYv8hhZw " */

//function to create a google map
function initMap() {
  //this google map object  will load the map centering around latitude and longitude listed
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.66796553411628, lng: 135.43056241294664 },
    zoom: 17,
    mapId: "f7493128490e4587",
    myTypeControl: false,
    fullScreenControl: false,
    streetViewControl: false,
  });

  //for multiple markers
  // name
  // lattitude , longitude
  // Image URL
  // scaledSize width , height
  const markers = [
    [
      "Yoshi's House",
      34.668079953485474,
      135.43139922650113,
      "yoshi_house.svg",
      38,
      31,
    ],
    [
      "You are Here",
      34.66762110162742,
      135.4285024407084,
      "pointer.svg",
      30,
      47.8,
    ],
    [
      "Ghost House",
      34.66772699074331,
      135.4251550439636,
      "ghosthouse.svg",
      40,
      48,
    ],
    ["Castle", 34.67058594571242, 135.42794454125092, "castle.svg", 38, 31],
    [
      "You are at Hill with eyes",
      34.670264837341385,
      135.4266818103493,

      "hill_with_eyes.svg",
      38,
      47.5,
    ],
    ["pipe here", 34.66539771820258, 135.4266818103493, "pipe.svg", 40, 57.8],
    ["I am star", 34.66553982792327, 135.42396051735764, "star.svg", 39, 44.8],
  ];
  // iterate over markers object to get every marker
  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    //marker documentation
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}

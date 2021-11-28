

var cartodyssee = L.map('mapid').setView([ 32, -130],5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(cartodyssee);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
//     id: 'mapbox/satellite-v9',
//     tileSize: 512,
//     zoomOffset: -1
// }).addTo(cartodyssee);

var bounds = L.latLngBounds([[ 32, -130], [ 13, -100]]);
L.rectangle(bounds);//.addTo(cartodyssee);
cartodyssee.fitBounds(bounds);
var overlay = L.imageOverlay( imageUrl, bounds, {
  opacity: 0.8
});
var videoUrls = [
  'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
  'https://www.mapbox.com/bites/00188/patricia_nasa.mp4'
];

var bounds = L.latLngBounds([[ 32, -130], [ 13, -100]]);

var videoOverlay = L.videoOverlay( videoUrls, bounds).addTo(cartodyssee);



});
// var geojson=[];
// // Affichage des objets initiaux
// fetch('../php/objet.php')
// .then(result => result.json())
// .then(result => {
//      console.log(result);
//   });





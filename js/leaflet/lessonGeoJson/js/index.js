let mymap = L.map('mapid').setView([41.424551, 69.526089], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// GeoJSON ma'lumotlarini yuklash
let geojsonFeature = {
  "type": "Feature",
  "properties": {
    "name": "Darchan",
    "popupContent": "Darchan, Tashkent viloyati, O'zbekiston"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [69.526089, 41.424551]
  }
};

// Popup ochish
let popup = L.popup()
    .setLatLng([geojsonFeature.geometry.coordinates[1], geojsonFeature.geometry.coordinates[0]])
    .setContent(`<h1>${geojsonFeature.properties.popupContent} ${geojsonFeature.geometry.coordinates}</h1>`)
    .openOn(mymap);

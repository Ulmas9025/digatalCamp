 
 let mymap = document.getElementById('mapid');
 
 mymap = L.map('mapid').setView([41.424551, 69.526089], 13); // Toshkent, O'zbekiston

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  // Routemashine.js bilan routelarni yaratish
  L.Routing.control({
    waypoints: [
      L.latLng(41.424551, 69.526089), // Boshlang'ich nuqta (Toshkent, O'zbekiston)
      L.latLng(41.31664, 69.28386)  // O'zgarish nuqtasi (Maslaxat ko'chasi, Toshkent, O'zbekiston)
    ],
    routeWhileDragging: true
  }).addTo(mymap);
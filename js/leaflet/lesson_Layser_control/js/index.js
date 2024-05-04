  // Xarita elementini tanlash
  var mymap = L.map('mapid').setView([41.424551, 69.526089], 13);

  // Xarita mozaiklarini o'rnatish
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  // Maxsus ikonni yaratish
  var myIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62]
  });

  // Markerni qo'shish va maxsus ikonni qo'yish
  L.marker([41.424551, 69.526089], {icon: myIcon}).addTo(mymap)
    .bindPopup("<b>Assalomu alaykum!</b><br>Darxan, Toshkent viloyati, O'zbekiston").openPopup();
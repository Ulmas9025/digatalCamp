var iframe = document.querySelector('iframe');
  iframe.width = "1300";
  iframe.height = "350";
  iframe.src = "https://www.openstreetmap.org/export/embed.html?bbox=69.52439188957216%2C41.42398659880604%2C69.5269024372101%2C41.425289851047644&amp;layer=mapnik&amp;marker=41.424638228196514%2C69.52564716339111";
  iframe.style.border = "1px solid black";

  // mapContainer nomli div elementiga iframe ni qo'shish
  document.getElementById('mapContainer').appendChild(iframe);

  // Boshqa karta manziliga ssilka qo'shish
  var link = document.createElement('small');
  link.innerHTML = '<a href="https://www.openstreetmap.org/?mlat=41.42464&amp;mlon=69.52565#map=19/41.42464/69.52565">Посмотреть более крупную карту</a>';
  document.getElementById('mapContainer').appendChild(link);
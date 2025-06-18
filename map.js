const map = L.map('map').setView([0,0],1);
L.tileLayer('https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=CTac4F40CFxGfMEKyHnu').addTo(map);
const DohaMarker = L.marker([25.276987, 51.520008]).addTo(map)
DohaMarker.bindPopup('<b>Hello</b>')
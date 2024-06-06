// Initialize the map
var map = L.map('map').setView([3.896, 11.521], 30);

// Add a basemap (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load your shapefile data (replace with your own GeoJSON URL)
var shapefileUrl = 'path/to/your/shapefile.geojson';

// Fetch the GeoJSON data
fetch(shapefileUrl)
  .then(response => response.json())
  .then(data => {
    // Create a GeoJSON layer and add it to the map
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        // Customize pop-up content (use properties from your shapefile)
        layer.bindPopup('<b>' + feature.properties.name + '</b><br>' + feature.properties.description);
      }
    }).addTo(map);
  })
  .catch(error => console.error('Error loading shapefile:', error));

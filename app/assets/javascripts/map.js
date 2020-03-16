$(document).ready(function(){
    // Init map
    if ($('#mapid').length === 0) return;
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
    // ----------------------------
    
    var lmarker = L.marker([51.5, -0.09]).addTo(mymap)
    lmarker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
    
    var popup = L.popup()
    
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent('<p>I am a standalone popup.</p>')
        .openOn(mymap);
    }
    
    mymap.on('click', onMapClick);
    });



var mymap = L.map('mapid');
      
var options = { 
    key: geocoder_api_key,
    limit: 10
};

L.MakiMarkers.accessToken = "pk.eyJ1IjoicmZyZWVkOSIsImEiOiJjbDlyNHFzbzEwZDJuM3BxbWRkbWtjOHg1In0.F56pnzbTYLLWvdairiMZfA"

/*var control = L.Control.openCageSearch(options).addTo(mymap);
/*

/* Tile Layer coming from Mapbox 

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: mykey,
}).addTo(mymap);
*/

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap)


var tajMahal_icon = L.MakiMarkers.icon({
    icon: "religious-muslim",
    color: "#3285a8", /* light blue */
    size: "m"
})
var tajMahal_marker = L.marker([27.174961, 78.042385], {icon: tajMahal_icon}).addTo(mymap);

var greatWall_icon = L.MakiMarkers.icon({
    icon: "historic",
    color: "red",
    size: "m"
})
var greatWall_marker = L.marker([40.334245, 116.477652], {icon: greatWall_icon}).addTo(mymap);

var petra_icon = L.MakiMarkers.icon({
    icon: "city",
    color: "#8132a8", /* purple */
    size: "m"
})
var petra_marker = L.marker([30.328611, 35.441944], {icon: petra_icon}).addTo(mymap);

var redeemer_icon = L.MakiMarkers.icon({
    icon: "religious-christian",
    color: "green",
    size: "m"
})
var redeemer_marker = L.marker([-22.951389, -43.2108334], {icon: redeemer_icon}).addTo(mymap);

var machuPicchu_icon = L.MakiMarkers.icon({ 
    icon: "mountain",
    color: "orange",
    size: "m"
})
var machuPicchu_marker = L.marker([-13.163056, -72.545556], {icon: machuPicchu_icon}).addTo(mymap);

var chichenItza_icon = L.MakiMarkers.icon({
    icon: "triangle",
    color: "#a89532",
    size: "m"
})
var chichenItza_marker = L.marker([20.682778, -88.569167], {icon: chichenItza_icon}).addTo(mymap);

var colosseum_icon = L.MakiMarkers.icon({
    icon: "stadium",
    color: "#a83262",
    size: "m"
})
var colosseum_marker = L.marker([41.890169, 12.492269], {icon: colosseum_icon}).addTo(mymap);

/*
var circle = L.circle([51.508, -0.11], { 
    color: 'red', 
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

var polyline = L.polyline([
    [51.506, -0.08],
    [51.502, -0.06],
    [51.507, -0.047]
]).addTo(mymap)

circle.on('click', function(e){ 
    mymap.setView(e.latlng, 13);
});

polygon.on('click', function(e){ 
    mymap.setView(e.latlng, 13);
});

circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
*/

var ZoomViewer = L.Control.extend({ 
    onAdd: function(){ 
        var gauge = L.DomUtil.create('div');
        gauge.style.width = '200px';
        gauge.style.background = 'rgba(255,255,255,0.5)';
        gauge.style.textAlign = 'left';
        mymap.on('zoomstart zoom zoomend', function(ev){ 
            gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
        })
        return gauge;
    }
});

(new ZoomViewer).addTo(mymap);

mymap.setView([0, 0], 1);
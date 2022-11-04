
var mymap = L.map('mapid', { 
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: 'bottomleft' } 
});
      
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

/* Taj Mahal Content  */
var tajMahal_icon = L.MakiMarkers.icon({
    icon: "religious-muslim",
    color: "#3285a8", /* light blue */
    size: "m"
})
var tajMahal_marker = L.marker([27.174961, 78.042385], {icon: tajMahal_icon}).addTo(mymap);
var tajMahal_popup = L.popup({
    content: `<b> Taj Mahal </b> <p style='text-align:center;'><br/><img src='http://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg' 
             width='150', height='100'></p><p> An immense mausoleum of white marble, 
             built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, 
             the Taj Mahal is the jewel of Muslim art in India and one of the universally 
             admired masterpieces of the world's heritage. </p>`,
    closeButton: true,
    maxWidth: '300',
    autoClose: true,
    className: "tajMahal-popup"
})
tajMahal_marker.bindPopup(tajMahal_popup).openPopup()

/* Great Wall Content  */
var greatWall_icon = L.MakiMarkers.icon({
    icon: "square",
    color: "red",
    size: "m"
})
var greatWall_marker = L.marker([40.334245, 116.477652], {icon: greatWall_icon}).addTo(mymap);
var greatWall_popup = L.popup({
    content: `<b> Great Wall of China </b> <p style='text-align:center;'><br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg' 
            width='150', height='100'></p><p> In c. 220 B.C., under Qin Shi Huang, sections of earlier fortifications 
            were joined together to form a united defence system against invasions from the north. 
            Construction continued up to the Ming dynasty (1368-1644), when the Great Wall 
            became the world's largest military structure. 
            Its historic and strategic importance is matched only by its architectural significance. </p>`,
    closeButton: true,
    maxWidth: '300',
    autoClose: true,
    className: "greatWall-popup"
})
greatWall_marker.bindPopup(greatWall_popup).openPopup()

/* Petra Content */
var petra_icon = L.MakiMarkers.icon({
    icon: "city",
    color: "#8132a8", /* purple */
    size: "m"
})
var petra_marker = L.marker([30.328611, 35.441944], {icon: petra_icon}).addTo(mymap);
var petra_popup = L.popup({
    content: `<b> Petra in Jordan </b> <p style='text-align:center;'><br/><img src='https://velvetescape.com/wp-content/uploads/2011/11/IMG_1953-1280x920.jpg' 
            width='150', height='100'></p><p> Inhabited since prehistoric times, this Nabataean caravan-city, 
            situated between the Red Sea and the Dead Sea, was an important crossroads between Arabia, 
            Egypt and Syria-Phoenicia. Petra is half-built, half-carved into the rock, and is surrounded by mountains 
            riddled with passages and gorges. It is one of the world's most famous archaeological sites, w
            here ancient Eastern traditions blend with Hellenistic architecture. </p>`,
    closeButton: true,
    autoClose: true,
    className: "petra-popup"
})
petra_marker.bindPopup(petra_popup).openPopup()

/* Redeemer Content */ 
var redeemer_icon = L.MakiMarkers.icon({
    icon: "religious-christian",
    color: "green",
    size: "m"
})
var redeemer_marker = L.marker([-22.951389, -43.2108334], {icon: redeemer_icon}).addTo(mymap);
var redeemer_popup = L.popup({
    content: `<b> Rio de Janeiro's Statue of Christ the Redeemer </b> <p style='text-align:center;'><br/><img src='https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg' 
    width='150', height='100'></p><p> The site consists of an exceptional urban setting encompassing the key natural elements 
    that have shaped and inspired the development of the city: from the highest points of the Tijuca National Park's 
    mountains down to the sea. </p>`,
    closeButton: true,
    autoClose: true,
    className: "redeemer-popup"
})
redeemer_marker.bindPopup(redeemer_popup).openPopup()


/* Machu Picchu Content */ 
var machuPicchu_icon = L.MakiMarkers.icon({ 
    icon: "mountain",
    color: "orange",
    size: "m"
})
var machuPicchu_marker = L.marker([-13.163056, -72.545556], {icon: machuPicchu_icon}).addTo(mymap);
var machuPicchu_popup = L.popup({
    content: `<b> Machu Picchu </b> <p style='text-align:center;'><br/><img src='https://whc.unesco.org/uploads/thumbs/site_0274_0011-750-750-20151105151613.jpg' 
    width='150', height='100'></p><p>Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest,
    in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height;
    its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. 
    The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna.
    </p>`,
    closeButton: true,
    autoClose: true,
    className: "machuPicchu-popup"
})
machuPicchu_marker.bindPopup(petra_popup).openPopup()

/* ChichenItza Content */
var chichenItza_icon = L.MakiMarkers.icon({
    icon: "triangle",
    color: "#a89532",
    size: "m"
})
var chichenItza_marker = L.marker([20.682778, -88.569167], {icon: chichenItza_icon}).addTo(mymap);
var chichenItza_popup = L.popup({
    content: `<b> Chichen Itza </b> <p style='text-align:center;'><br/><img src='https://whc.unesco.org/uploads/thumbs/site_0483_0005-1000-750-20090916173750.jpg' 
    width='150', height='100'></p><p>This sacred site was one of the greatest Mayan centres of the Yucatán peninsula. 
    Throughout its nearly 1,000-year history, different peoples have left their mark on the city. 
    The Maya and Toltec vision of the world and the universe is revealed in their stone monuments and artistic works. 
    </p>`,
    closeButton: true,
    autoClose: true,
    className: "chichenItza-popup"
})
chichenItza_marker.bindPopup(chichenItza_popup).openPopup()

/* Colosseum Content */ 
var colosseum_icon = L.MakiMarkers.icon({
    icon: "stadium",
    color: "#a83262",
    size: "m"
})
var colosseum_marker = L.marker([41.890169, 12.492269], {icon: colosseum_icon}).addTo(mymap);
var colosseum_popup = L.popup({
    content: `<b> Roman Colosseum </b> <p style='text-align:center;'><br/><img src='https://whc.unesco.org/uploads/thumbs/site_0091_0061-750-750-20140709164150.jpg' 
    width='150', height='100'></p><p>Founded, according to legend, by Romulus and Remus in 753 BC, Rome was first the centre 
    of the Roman Republic, then of the Roman Empire, and it became the capital of the Christian world in the 4th century. 
    The World Heritage site, extended in 1990 to the walls of Urban VIII, includes some of the major monuments of antiquity
    such as the Forums, the Mausoleum of Augustus, the Mausoleum of Hadrian, the Pantheon, Trajan's Column and the Column of 
    Marcus Aurelius, as well as the religious and public buildings of papal Rome.
    </p>`,
    closeButton: true,
    autoClose: true,
    className: "colosseum-popup"
})
colosseum_marker.bindPopup(colosseum_popup).openPopup()

/* Zoom Viewer Element */
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
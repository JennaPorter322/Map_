let myMap;
let canvas;
let mappa = new Mappa('Leaflet');
let data;

let options = {
  lat: 34.0522,
  lng: -118.2437,
  zoom: 9,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  
}


function setup(){
  canvas = createCanvas(700,600);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 

  myMap.onChange(callbackFunction);
}

function draw(){
}

function callbackFunction(){
  // Clear the canvas
  clear();

			
      if (myMap.map.getBounds().contains({lat: options.lat, lng: options.lng})) {
        // Transform lat/lng to pixel position
				let la = myMap.latLngToPixel(options.lat, options.lng);
  
  
				fill(0,255,0);
        noStroke();

        ellipse(la.x, la.y, 10, 10);
      }

}



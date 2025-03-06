document.addEventListener("DOMContentLoaded", () => {
  console.log("Up and running!");
});

function initMap() {
  const iit = { lat: 41.837831, lng: -87.626453 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: iit,
    mapTypeId: 'hybrid'
  });

  map.setTilt(45);

  const marker = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology",
  });

  const infoWindow = new google.maps.InfoWindow({
	  content: "<img src='media/iit.png' width=63%><a target=_blank href= https://www.google.com/maps/dir//Illinois+Institute+of+Technology,+10+W+35th+St,+Chicago,+IL+60616/@41.8579362,-87.6546515,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880e2c72d3e9a80f:0x91cbe4661afb6f1a!2m2!1d-87.6259602!2d41.83671!3e0?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D><h2>Visit Illinois Tech!</h2></a>",
	});
  
	marker.addListener("mouseover", () => {
	  infoWindow.open(map, marker);
	});

}
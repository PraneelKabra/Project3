document.addEventListener("DOMContentLoaded", () => {
  console.log("Up and running!");

  const images = [
    { src: "media/fp1.jpeg", alt: "B&W film photo of a tree" },
    { src: "media/fp3.jpeg", alt: "B&W film photo of an old banyan tree" },
    { src: "media/fp4.jpeg", alt: "B&W film photo of 2 stray dogs standing" },
    { src: "media/fp5.jpeg", alt: "B&W film photo of a stray dog sitting" },
    { src: "media/fp6.jpeg", alt: "B&W film photo of dogs receiving treats at a dog shelter/rescue center" },
    { src: "media/fp7.jpeg", alt: "B&W film photo of a puppy waiting obediently for food" },
    { src: "media/fp8.jpeg", alt: "B&W film photo of a mother and daughter" },
    { src: "media/fp10.jpeg", alt: "B&W film photo of a mother and daughter" },
    { src: "media/fp11.jpeg", alt: "B&W film photo of a tree and building" },
    { src: "media/fp13.jpeg", alt: "B&W photo of a stone sculpture" }
  ];

  let currentIndex = 0;
  const galleryImage = document.getElementById("galleryImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevMobBtn = document.getElementById("prevMobBtn");
  const nextMobBtn = document.getElementById("nextMobBtn")


  function updateImage() {
    galleryImage.src = images[currentIndex].src;
    galleryImage.alt = images[currentIndex].alt;
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  prevMobBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextMobBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  updateImage();

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
    content: "<img src='media/iit.png' width=63%><a target=_blank href='https://www.google.com/maps/dir//Illinois+Institute+of+Technology,+10+W+35th+St,+Chicago,+IL+60616/'><h2>Visit Illinois Tech!</h2></a>",
  });

  marker.addListener("mouseover", () => {
    infoWindow.open(map, marker);
  });

}
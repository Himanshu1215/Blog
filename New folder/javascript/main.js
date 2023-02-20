var gallery = document.getElementById("gallery");
var images = gallery.getElementsByTagName("img");
var current = 0;

setInterval(function() {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  current = (current + 1) % images.length;
  images[current].style.display = "block";
}, 3000);
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

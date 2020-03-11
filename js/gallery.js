images = ["img1.png", "img2.png", "img3.jpg", "img4.jpg"];

slideIndex = 0;

function changeSlide(change) {
  if(slideIndex == 0 && change == -1) {
    slideIndex = images.length - 1 ;
  }  
  else if(slideIndex == images.length - 1 && change == 1) {
    slideIndex = 0;
  }
  else {
    slideIndex += change;
  }
  var d = new Date();

  document.getElementById("gallerySlide").src("media/gallery/" = images[slideIndex] + d.getMilliseconds());
}
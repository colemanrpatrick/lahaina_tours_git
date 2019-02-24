console.log("gallery.js ready");

var slideIndex;

var slides = document.getElementsByClassName("banner");

var galBtn = document.getElementsByClassName("button-current");

slideIndex = 1;

gallerySlider(slideIndex);

/*========*/
function sliderCurrent(num){

  gallerySlider(slideIndex = num);

}
function sliderPlus(num){

  gallerySlider(slideIndex += num);

}
/*========*/
function gallerySlider(num){

  if(num > slides.length){
    slideIndex = 1;
  }

  if(num < 1){
    slideIndex = slides.length;
  }

  for (var i = 0; i < galBtn.length; i++) {

    galBtn[i].classList = "button-current";

  }

  for (var i = 0; i < slides.length; i++) {

    slides[i].classList = "banner";

  }

  slides[slideIndex-1].classList = "banner active";

  galBtn[slideIndex-1].classList = "button-current active";

}
/*========*/

window.onload = function() {
 
var slideIndex = 1;
(function () {
   
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var dots = document.querySelectorAll('.dot');
var prev = document.querySelectorAll('.prev');
var next = document.querySelectorAll('.next');

[...prev].forEach((p)=>{
  p.addEventListener( 'click', function() {
plusSlides(-1);
  });
});

[...next].forEach((p)=>{
  p.addEventListener( 'click', function() {
plusSlides(1);
  });
});

dots.forEach((item, index) => { 
      item.addEventListener('click', arrow => {
      currentSlide(index);
})})



})();



   };
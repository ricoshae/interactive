window.onload = function() {
 
 
var cards = document.querySelectorAll('.card-body');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
   };
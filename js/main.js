// JavaScript

$(document).ready(function(){

  window.sr = ScrollReveal();
sr.reveal('.description');
sr.reveal('.special');
sr.reveal('.found__header');
sr.reveal('.found__header-year');

$('.special__food').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    dots:true,
    autoplay:true,
    centerMode:true,
    cssEase:"ease-in-out",
    speed:1000
  }); 

});

  //the image model
  function OpenModel(num){
    console.log(num);
    
  }
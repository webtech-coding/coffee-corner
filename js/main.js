// JavaScript

$(document).ready(function(){

  /*
  window.sr = ScrollReveal();
sr.reveal('.description');
sr.reveal('.special');
sr.reveal('.found__header');
sr.reveal('.found__header-year');
*/

AOS.init();

$('.special__food').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    dots:true,
    autoplay:true,
    centerMode:true,
    cssEase:"ease-in-out",
    speed:1000,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: false,
          
          slidesToShow: 2,
          autoplaySpeed:1500,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
         
          slidesToShow: 1,
          autoplaySpeed:1500,
        }
      }
    ]
  }); 

});

  
  function OpenModel(num){

    if(document.querySelector(".model__box").style.display="none"){
      document.querySelector(".model__box").style.display="block";
    }
    var img="../img/gallery"+num+".jpg";
    document.querySelector(".model__box--img").src=img;  

    document.querySelector(".model__box").addEventListener("touchmove", function(ev){
      ev.preventDefault();
      console.log("mouse enter");
      
    }, false);

    document.querySelector(".model__box--close").addEventListener("click", function(){
      document.querySelector(".model__box").style.display="none";
    });
    document.querySelector(".model__box").addEventListener("click", function(){
      this.style.display="none";
    });
    
  }
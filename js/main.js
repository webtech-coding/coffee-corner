// JavaScript
window.sr = ScrollReveal();
sr.reveal('.description');
sr.reveal('.special');

$('.special__food').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

// JavaScript
window.sr = ScrollReveal();
sr.reveal('.description');
sr.reveal('.special');
sr.reveal('.found__header');
sr.reveal('.found__header-year');

$('.special__food').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

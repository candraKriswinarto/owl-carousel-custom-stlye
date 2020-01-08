const nextIcon = '<img src="./right-arrow.svg" alt="right">';
const prevIcon = '<img src="./left-arrow.svg" alt="left" >';

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
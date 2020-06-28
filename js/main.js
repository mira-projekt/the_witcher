var mySwiper = new Swiper('.swiper-container', {
  slidesPerView:1,
  loop: true,
  navigation: {
    nextEl: '.arrow',    
  },
  breakpoints: {
    540: {
      slidesPerView: 2,      
    }
  }
});

var menuButton = document.querySelector('.line');
var menu = document.querySelector('.header-item');
menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
})

// $('a').click(function () {
//   $(this).toggleClass('active');
//   return false;
// });
// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import '../../Hoyt Integrative Health/css';
let swiper1 = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);

function changeSearchIcon() {
  let winSize = window.matchMedia('(min-width: 1200px)');
  if (winSize.matches) {
    document.querySelector('.search-icon img').src = 'images/search-icon.png';
  } else {
    document.querySelector('.search-icon img').src = 'images/search-icon-dark.png';
  }
}

changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});


// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();
// function to initialize SwiperJS
function initializeSwiperJS() {
    var swiper = new Swiper('.swiper-container', {
      // Configure autoplay with a delay of 5 seconds
      autoplay: {
        delay: 5000,
      },
  
      // Configure navigation buttons
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
  
      // Configure pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
}
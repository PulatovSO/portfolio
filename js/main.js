
let menu = document.querySelector('home__menu');
let menuLeft = document.querySelector('.navigation__left');
let menuRight = document.querySelector('.navigation__right');

// document.querySelector('bg-video').defaultPlaybackRate = 0.5;
// document.querySelector('video').play();

document.querySelector('video').playbackRate = 0.7;


function toggleMenu() {
  menuLeft.classList.toggle('menu-left__show');
  menuRight.classList.toggle('menu-right__show');
}





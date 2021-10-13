
let menu = document.querySelector('home__menu');
let menuLeft = document.querySelector('.navigation__left');
let menuRight = document.querySelector('.navigation__right');

document.querySelector('video').playbackRate = 0.7;

function toggleMenu() {
  menuLeft.classList.toggle('menu-left__show');
  menuRight.classList.toggle('menu-right__show');
}

let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

document.addEventListener('click', () => {
  cursor.classList.add('expand')

  setTimeout(() => {
    cursor.classList.remove('expand')
  }, 500)
})


let aboutBtn = document.querySelector('.about-hidden');
let portfolioBtn = document.querySelector('.works-hidden')

function menuClick() {
  let navBar = document.querySelector('.menu');
  navBar.classList.toggle('nav-show')
}

function aboutDrag() {
  aboutBtn.classList.toggle('show-page')
  portfolioBtn.classList.remove('show-page')
}
function portfolioDrag() {
  portfolioBtn.classList.toggle('show-page')
  aboutBtn.classList.remove('show-page')

}

function homeBtn () {
  aboutBtn.classList.remove('show-page')
  portfolioBtn.classList.remove('show-page')
}


// cursor
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


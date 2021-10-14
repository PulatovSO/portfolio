let aboutBtn = document.querySelector('.about-hidden');
let portfolioBtn = document.querySelector('.works-hidden')
let contactsBtn = document.querySelector('.contacts-hidden')

function menuClick() {
  let navBar = document.querySelector('.menu');
  navBar.classList.toggle('nav-show')
}

function aboutDrag() {
  aboutBtn.classList.toggle('show-page')
  portfolioBtn.classList.remove('show-page')
  contactsBtn.classList.remove('show-page')
}
function portfolioDrag() {
  portfolioBtn.classList.toggle('show-page')
  aboutBtn.classList.remove('show-page')
  contactsBtn.classList.remove('show-page')
}
function contactsDrag() {
  aboutBtn.classList.remove('show-page')
  portfolioBtn.classList.remove('show-page')
  contactsBtn.classList.toggle('show-page')
}

function homeBtn () {
  aboutBtn.classList.remove('show-page')
  portfolioBtn.classList.remove('show-page')
  contactsBtn.classList.remove('show-page')
}


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 0)+"px; left: "+(e.pageX - 0)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


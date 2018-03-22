// Practical CSS Animations Workshop
// Javascript
// Add your Javascript code here

const SlideNodeCollection = document.querySelectorAll('.Slide')
Array.from(SlideNodeCollection).forEach((node, index) => {
  node.id = `slide-${index}`
})



const deactiveStaggerOnAll = () => {
  const staggerNodes = document.querySelectorAll('.ax-List.stagger')
  Array.from(staggerNodes)
    .forEach(n => n.classList.remove('active'))

  Array.from(SlideNodeCollection)
    .forEach(n => n.classList.remove('active'))
}
const activateStagger = (slideIndex) => {
  deactiveStaggerOnAll()
  const currentSlideNode = document.querySelector(`#slide-${slideIndex}`)
  const staggerNodes = currentSlideNode.querySelectorAll('.ax-List.stagger')

  Array.from(staggerNodes)
    .forEach(child => {
      child.classList.add('active')
    })

  currentSlideNode.classList.add('active')
}



const wheelNavigate = (event) => {
  event.preventDefault()
  if (event.deltaY < 0) {
    goSlidePrev()
  }
  if (event.deltaY > 0) {
    goSlideNext()
  }
}
document.addEventListener('wheel', wheelNavigate)


const KEYS = {
  h: 72,
  j: 74,
  k: 75,
  l: 76,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  space: 32
}
const keyNavigate = (event) => {
  const keyCode = event.keyCode
  if (
    keyCode === KEYS.up ||
    keyCode === KEYS.left ||
    keyCode === KEYS.k ||
    keyCode === KEYS.h
  ) {
    event.preventDefault()
    return goSlidePrev()
  }
  if (
    keyCode === KEYS.down ||
    keyCode === KEYS.right ||
    keyCode === KEYS.j ||
    keyCode === KEYS.l
  ) {
    event.preventDefault()
    return goSlideNext()
  }
  if (
    keyCode === KEYS.space
  ) {
    event.preventDefault()
    if (event.shiftKey) {
      return goSlidePrev()
    } else {
      return goSlideNext()
    }
  }
}
document.addEventListener('keydown', keyNavigate)


const getCurrentSlide = () => {
  const currentSlide = document.location.hash.replace('#slide-', '')
  if (!!currentSlide) {
    return parseInt(currentSlide.replace('#slide-', ''), 10)
  } else {
    return 0
  }
}
const goSlideNext = () => {
  const currentSlide = getCurrentSlide()
  const max = SlideNodeCollection.length - 1
  const nextSlide = currentSlide >= max ?
    max : currentSlide + 1

  goToSlide(nextSlide)
}
const goSlidePrev = () => {
  const currentSlide = getCurrentSlide()
  const prevSlide = currentSlide <= 0 ?
    0 : currentSlide - 1

  goToSlide(prevSlide)
}

const goToSlide = (slideIndex) => {
  location.hash = `#slide-${slideIndex}`
  activateStagger(slideIndex)
}

const startSlide = () => {
  goToSlide(getCurrentSlide())
}
window.addEventListener('load', startSlide)

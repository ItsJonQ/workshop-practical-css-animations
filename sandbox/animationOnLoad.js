const animateOnLoad = () => {
  const animationComponents = document.querySelectorAll('.ax-El, .ax-List')
  Array.from(animationComponents).forEach(node => node.classList.toggle('active'))
}

window.addEventListener('load', animateOnLoad)

const activeOnVisible = (node) => {
  const bufferOffset = window.innerHeight / 3
  const visiblyScrolled = window.scrollY + window.innerHeight
  if (visiblyScrolled >= (node.offsetTop + bufferOffset)) {
    node.classList.add('active')
  }
}


const activeOnScroll = () => {
  const nodes = Array.from(document.querySelectorAll('.ax-activeOnScroll'))

  const targetNodes = nodes.filter(n => !n.classList.contains('active'))
  if (!targetNodes.length) {
    window.removeEventListener('scroll', activeOnScroll)
  }

  targetNodes.forEach(activeOnVisible)
}

window.addEventListener('scroll', activeOnScroll)
window.addEventListener('load', activeOnScroll)

// Practical CSS Animations Workshop
// Javascript

// A tiny bit of Javascript to help trigger your animations.
document.addEventListener('click', (event) => {
  // This is the thing you clicked.
  const element = event.target
  // Trying to see if you've specified an animation target
  const targetSelector = element.getAttribute('data-target')
  // If not, don't do anything.
  if (!targetSelector) return

  // Otherwise, find your targets.
  const target = document.querySelectorAll(targetSelector)
  // Finally, toggle the "active" class on them to play your animations!
  Array.from(target).forEach(el => el.classList.toggle('active'))
})

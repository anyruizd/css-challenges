const trigger = document.querySelector('.hamburger')
trigger.addEventListener('click', (event) => {
  const clickedElement = event.target.closest('.hamburger')
  clickedElement.classList.remove('animation-off')
  if (clickedElement.classList.contains('menu--open')) {
    clickedElement.classList.add('menu--close')
    clickedElement.classList.remove('menu--open')
  } else {
    clickedElement.classList.add('menu--open')
    clickedElement.classList.remove('menu--close')
  }
})
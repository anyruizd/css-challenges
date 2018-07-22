const trigger = document.querySelector('.hamburger')
trigger.addEventListener('click', (event) => {
  const clickedElement = event.target.closest('.hamburger')
  clickedElement.classList.remove('animation--off')
  clickedElement.classList.toggle('menu--open')
})
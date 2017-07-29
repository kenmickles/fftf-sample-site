import Siema from 'siema'

let sliderInterval

const slider = new Siema({
  loop: true,
  duration: 500,
  easing: 'ease-in-out',
  onInit() {
    resetSliderInterval()
  },
  onChange() {
    resetSliderInterval()
  }
})

function resetSliderInterval() {
  return
  clearInterval(sliderInterval)
  sliderInterval = setInterval(() => {
    slider.next()
  }, 5000)
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.prev').addEventListener('click', () => slider.prev())

  document.querySelector('.next').addEventListener('click', () => slider.next())
})

console.log('Loaded!')
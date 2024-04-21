const burger = document.querySelector('.burger')
const offScreenMenu = document.querySelector('.off-screen-menu')
const cross = document.querySelector('.cross')
const shadow = document.querySelector('.shadow')

const orderFiltersBtn = document.getElementById('orderFilters')
const orderFiltersBtnMobile = document.getElementById('orderFiltersMobile')
const orderFiltersShadow = document.querySelector('.order-filter-shadow')
const orderFiltersOffScreen = document.querySelector('.order-filters')



burger.addEventListener('click', () => {
  offScreenMenu.classList.toggle('active')
  burger.classList.toggle('active')
  shadow.classList.toggle('active')
  document.body.classList.toggle('scroll-lock')
  cross.classList.toggle('active')
})
cross.addEventListener('click', () => {
  offScreenMenu.classList.toggle('active')
  burger.classList.toggle('active')
  cross.classList.toggle('active')
  shadow.classList.toggle('active')
  document.body.classList.toggle('scroll-lock')

})
shadow.addEventListener('click', () => {
  offScreenMenu.classList.remove('active')
  burger.classList.remove('active')
  cross.classList.remove('active')
  shadow.classList.remove('active')
  document.body.classList.toggle('scroll-lock')
})

orderFiltersBtn.addEventListener('click', () => {
  orderFiltersOffScreen.classList.toggle('active')
  orderFiltersShadow.classList.toggle('active')
  document.body.classList.toggle('scroll-lock')
})
orderFiltersBtnMobile.addEventListener('click', () => {
  orderFiltersOffScreen.classList.toggle('active')
  orderFiltersShadow.classList.toggle('active')
  document.body.classList.toggle('scroll-lock')
})
orderFiltersShadow.addEventListener('click', () => {
  orderFiltersOffScreen.classList.toggle('active')
  orderFiltersShadow.classList.toggle('active')
  document.body.classList.toggle('scroll-lock')
})



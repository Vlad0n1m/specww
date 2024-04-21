const filterBtn = document.querySelector('.mobile-filter-btn')
const filterShadow = document.querySelector('.filter-shadow')
const filterOffScreen = document.querySelector('.filter-wrapper')


filterBtn.addEventListener('click', () => {
    filterOffScreen.classList.toggle('active')
    filterShadow.classList.toggle('active')
    document.body.classList.toggle('scroll-lock')
})


filterShadow.addEventListener('click', () => {
    filterOffScreen.classList.toggle('active')
    filterShadow.classList.toggle('active')
    document.body.classList.toggle('scroll-lock')
})



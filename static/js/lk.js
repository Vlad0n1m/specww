const linkTags = document.querySelectorAll('.sidebar-link');
const lkPanels = document.querySelectorAll('.sidebar-panel');
const pageSelect = document.querySelectorAll('.page-select');
const createAnketBtn = document.getElementById('create-anket-btn');
const createAnketPanel = document.getElementById('create-anket-panel');
const editOrderBtn = document.getElementById('edit-order-btn');
const createOrderPanel = document.getElementById('create-order-panel');
const returBackAnketBtn = document.getElementById('return-back-anket');
const returnBackOrderBtn = document.getElementById('return-back-order');
const editDonationsBtn = document.querySelectorAll('#edit-donations-btn');

returBackAnketBtn.addEventListener('click', () => {
    turnOffACtive(1);
    linkTags[1].classList.add('active')
    lkPanels[1].classList.add('active')
})
returnBackOrderBtn.addEventListener('click', () => {
    turnOffACtive(2);
    linkTags[2].classList.add('active')
    lkPanels[2].classList.add('active')
})
createAnketBtn.addEventListener('click', (event) => {
    for (let i = 0; i < linkTags.length; i++) {
        lkPanels[i].classList.remove('active')
    }
    console.log(event.target.id);
    createAnketPanel.classList.add('active')
})
for (let i = 0; i < editDonationsBtn.length; i++) {
    editDonationsBtn[i].addEventListener('click', () => {
        for (let i = 0; i < linkTags.length; i++) {
            lkPanels[i].classList.remove('active')
        }
        createOrderPanel.classList.add('active')
    })
}
turnOffACtive = (activePage) => {
    for (let i = 0; i < lkPanels.length; i++) {
        lkPanels[i].classList.remove('active')
    }
    for (let i = 0; i < linkTags.length; i++) {
        linkTags[i].classList.remove('active')
    }
    for (let i = 0; i < pageSelect.length; i++) {
        pageSelect[i].selectedIndex = activePage
    }
}

for (let i = 0; i < linkTags.length - 1; i++) {
    linkTags[i].addEventListener('click', () => {
        turnOffACtive(i)
        linkTags[i].classList.add('active')
        lkPanels[i].classList.add('active')
    })

}
for (let i = 0; i < linkTags.length - 1; i++) {
    pageSelect[i].addEventListener("change", (event) => {
        turnOffACtive(pageSelect[i].options.selectedIndex)
        linkTags[pageSelect[i].options.selectedIndex].classList.add('active')
        lkPanels[pageSelect[i].options.selectedIndex].classList.add('active')
    });
}



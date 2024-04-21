const linkTags = document.querySelectorAll('.sidebar-link');
const lkPanels = document.querySelectorAll('.sidebar-panel');
const pageSelect = document.querySelectorAll('.page-select');





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



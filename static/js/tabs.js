const tabs = document.querySelectorAll('.tab');
const tab_icon = document.querySelectorAll('.tab-icon');
const tabsMenuMobile = document.querySelectorAll(".tab-menu-mobile");
const tabMenu = document.querySelector(".tab-menu");

const turnOffAll = () => {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active')
        tabsMenuMobile[i].classList.remove('active')
        for (let j = 0; j < tab_icon[i].children.length; j++) {
            tab_icon[i].children[j].attributes['fill'].value = '#2E41F4'
        }
    }    
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        turnOffAll();
        tabs[i].classList.add('active');
        tabsMenuMobile[i].classList.add('active')
        tabMenu.querySelector('.title').textContent = tabs[i].querySelector('.tab-text').textContent
        for (let j = 0; j < tab_icon[i].children.length; j++) {
            tab_icon[i].children[j].attributes['fill'].value = 'white'
        }
    })
}

tabs[0].classList.add('active');
tabsMenuMobile[0].classList.add('active')
tabMenu.querySelector('.title').textContent = tabs[0].querySelector('.tab-text').textContent
turnOffAll();

// tab_icon.children[1].attributes[1].value = 'blue'
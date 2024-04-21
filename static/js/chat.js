const contacts = document.querySelectorAll(".contact");
const messagesContainer = document.getElementById("messages-container");
const dialogContainer = document.getElementById("dialog-container");
const contactsSidebar = document.getElementById("contacts-sidebar");
const arrowBack = document.getElementById("arrow-left-icon");

const popupConfirm = document.getElementById("popup-confirm");
const popupConfirmBtn = document.getElementById("popup-confirm-btn");
const popupBackConfirmBtn = document.getElementById("popup-confirm-back");
const popupConfirmCross = document.getElementById("popup-confirm-cross");

const popupReport = document.getElementById("popup-report");
const popupReportBtn = document.getElementById("popup-report-btn");
const popupBackReportBtn = document.getElementById("popup-report-back");
const popupReportCross = document.getElementById("popup-report-cross");

const popupDecline = document.getElementById("popup-decline");
const popupDeclineBtn = document.getElementById("popup-decline-btn");
const popupBackDeclineBtn = document.getElementById("popup-decline-back");
const popupDeclineCross = document.getElementById("popup-decline-cross");

const actionSidebar = document.getElementById("action-sidebar");
const actionSidebarBtn = document.getElementById("action-sidebar-btn");

messagesContainer.scrollTop = messagesContainer.scrollHeight;
dialogContainer.classList.add('mobile-hidden');

arrowBack.addEventListener('click', () => {
    dialogContainer.classList.add('mobile-hidden');
    contactsSidebar.classList.remove('mobile-hidden');
})

const turnOffAll = () => {
    for (let i = 0; i < contacts.length; i++) {
        contacts[i].classList.remove('active');
    }
}

for (let i = 0; i < contacts.length; i++) {
    contacts[i].addEventListener('click', () => {
        turnOffAll();
        contacts[i].classList.add('active');
        dialogContainer.classList.remove('mobile-hidden');
        contactsSidebar.classList.add('mobile-hidden');
    })
}

shadow.addEventListener('click', () => {
    shadow.classList.remove('active');
    popupConfirm.classList.remove('shown');
    popupDecline.classList.remove('shown');
    popupReport.classList.remove('shown');
})



popupConfirmBtn.addEventListener('click', () => {
    popupConfirm.classList.add('shown');
    shadow.classList.add('active');
})

popupConfirmCross.addEventListener('click', () => {
    shadow.classList.remove('active');
    popupConfirm.classList.remove('shown');
})

popupBackConfirmBtn.addEventListener('click', () => {
    shadow.classList.remove('active');
    popupConfirm.classList.remove('shown');
})



popupReportBtn.addEventListener('click', () => {
    popupReport.classList.add('shown');
    shadow.classList.add('active');
})

popupBackReportBtn.addEventListener('click', () => {
    shadow.classList.remove('active');
    popupReport.classList.remove('shown');
})

popupReportCross.addEventListener('click', () => {
    shadow.classList.remove('active');
    popupReport.classList.remove('shown');
})



popupDeclineBtn.addEventListener('click', () => {
    popupDecline.classList.add('shown');
    shadow.classList.add('active');
})

popupDeclineCross.addEventListener('click', () => {
    shadow.classList.remove('active');
    popupDecline.classList.remove('shown');
})

popupBackDeclineBtn.addEventListener('click', () => {
    shadow.classList.remove('active');
    popupDecline.classList.remove('shown');
})


const toggleActionSidebar = () => {
    let buttonRect = actionSidebarBtn.getBoundingClientRect();
    let topPosition = buttonRect.top + window.scrollY;
    let rightPosition = window.innerWidth - buttonRect.right + window.scrollX;

    if (actionSidebar.style.display === 'none') {
        actionSidebar.style.top = topPosition + 'px';
        actionSidebar.style.right = (rightPosition + 15) + 'px';
        actionSidebar.style.display = 'flex';
        document.addEventListener('click', hideElementOutside);
    } else {
        actionSidebar.style.display = 'none';
        document.removeEventListener('click', hideElementOutside);
    }
}

function hideElementOutside(event) {
    if (event.target !== actionSidebarBtn && event.target !== actionSidebar && !actionSidebar.contains(event.target)) {
        actionSidebar.style.display = 'none';
        document.removeEventListener('click', hideElementOutside);
    }
}

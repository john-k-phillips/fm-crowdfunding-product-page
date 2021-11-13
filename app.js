let isOpen = true;

const toggleMenu = () => {
    const dropdownList = document.querySelector('.dropdown-list');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const hamburgerButton = document.querySelector('.hamburger-btn');

    if (isOpen) {
        dropdownList.style.display = 'block';
        hamburgerIcon.src = './images/icon-close-menu.svg';
        hamburgerButton.ariaExpanded = "true";
        setTimeout(() => {
            dropdownList.style.opacity = 1;
        }, 200);
    } else {
        dropdownList.style.opacity = 0;
        hamburgerIcon.src = './images/icon-hamburger.svg';
        hamburgerButton.ariaExpanded = "false";
        setTimeout(() => {
            dropdownList.style.display = 'none';
        }, 200);
    }
    isOpen = !isOpen
}
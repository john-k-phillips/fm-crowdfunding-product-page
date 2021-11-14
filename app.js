let isOpen = true;
let isBookmarked = true;
let isModalOpen = true;

const glassEffect = document.querySelector('.glass-effect');

// NAVIGATION
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

// MASTERCRAFT SECTION
const toggleBookmark = () => {
    const bookmarkBtn = document.querySelector('.bookmark-btn');
    const bookmarkText = document.querySelector('.bookmark-value');
    const bookmarkImg = document.querySelector('.bookmark-img');

    if (isBookmarked) {
        bookmarkBtn.ariaChecked = true;
        bookmarkText.innerHTML = 'Bookmarked';
        bookmarkText.style.color = "#147A73";
        bookmarkImg.src = "./images/icon-bookmark-green.svg";
        isBookmarked = !isBookmarked;
    } else {
        bookmarkBtn.ariaChecked = false;
        bookmarkText.innerHTML = 'Bookmark';
        bookmarkText.style.color = "#7A7A7A";
        bookmarkImg.src = "./images/icon-bookmark.svg";
        isBookmarked = !isBookmarked;
    }
}


const openBackModal = () => {
    const modal = document.querySelector('.back-project-modal');
    if (isModalOpen) {
        modal.style.display = 'block';
        glassEffect.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = 1;
            glassEffect.style.opacity = 1;
        }, 200);
        isModalOpen = !isModalOpen;
    }
}

const closeBackModal = () => {
    const modal = document.querySelector('.back-project-modal');
    if (!isModalOpen) {
        modal.style.opacity = 0;
        glassEffect.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
            glassEffect.style.display = 'none';
        }, 200);
        isModalOpen = !isModalOpen;
    }
}
let isOpen = true;
let isBookmarked = true;

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
    let bookmarkBtn = document.querySelector('.bookmark-btn');
    let bookmarkText = document.querySelector('.bookmark-value');
    let bookmarkImg = document.querySelector('.bookmark-img');

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
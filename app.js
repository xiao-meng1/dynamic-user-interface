const addEvents = () => {
    const dropdownNavbar = document.querySelector('nav.dropdown');
    const menuIcon = document.querySelector('img.menu-icon');
    const sidebar = document.querySelector('div.sidebar');
    const photoSlider = document.querySelector('.photo-slider')

    addDropDownEvents(dropdownNavbar);
    addSidebarEvents(menuIcon, sidebar);
    addPhotoSliderEvents(photoSlider);
};

const addDropDownEvents = (dropdownNavbar) => {
    const dropdown = document.querySelector('nav.dropdown');
    const dropdownHeader = dropdown.querySelector('li.dropdown-header');
    const dropdownItems = dropdown.querySelectorAll('li.dropdown-item');
    const expandMoreIcon = dropdown.querySelector('.expand-more');
    const expandLessIcon = dropdown.querySelector('.expand-less');

    dropdownHeader.addEventListener('click', () => {
        expandMoreIcon.classList.add('hidden');
        expandLessIcon.classList.remove('hidden');
        dropdownItems.forEach((dropdown) => {
            dropdown.classList.remove('hidden');
        });
    });

    dropdownHeader.addEventListener('mouseover', () => {
        expandMoreIcon.classList.add('hidden');
        expandLessIcon.classList.remove('hidden');
        dropdownItems.forEach((dropdown) => {
            dropdown.classList.remove('hidden');
        });
    });

    dropdownNavbar.addEventListener('mouseleave', () => {
        expandMoreIcon.classList.remove('hidden');
        expandLessIcon.classList.add('hidden');
        dropdownItems.forEach((dropdown) => {
            dropdown.classList.add('hidden');
        });
    });
}

const addSidebarEvents = (menuIcon, sidebar) => {
    const body = document.querySelector('body');
    let hideSidebar;

    menuIcon.addEventListener('mouseup', () => {
        sidebar.classList.remove('hidden');
        body.addEventListener('mousedown', hideSidebar);
    });

    hideSidebar = (e) => {
        if (!sidebar.contains(e.target)) {
            sidebar.classList.add('hidden');
            body.removeEventListener('mousedown', hideSidebar);
        }
    };
};

const addPhotoSliderEvents = (photoSlider) => {
    const backArrow = photoSlider.querySelector("img.back-arrow");
    const forwardArrow = photoSlider.querySelector("img.forward-arrow");
    const photos = photoSlider.querySelectorAll("img.photo");
    const navigationDots = photoSlider.querySelectorAll(".navigation-dot");
    let currentPhotoIndex = 0;
    let renderPhoto;
    let styleNavigationDots;
    let incrementPhoto;

    renderPhoto = () => {
        photos.forEach((photo) => {
            if (photo.dataset.index === currentPhotoIndex.toString()) {
                photo.classList.remove("hidden");
            } else {
                photo.classList.add("hidden");
            }
        })
    };

    styleNavigationDots = () => {
        navigationDots.forEach((navigationDot) => {
            if (navigationDot.dataset.index === currentPhotoIndex.toString()) {
                navigationDot.classList.add("active");
            } else {
                navigationDot.classList.remove("active");
            }
        });
    };

    backArrow.addEventListener("click", () => {
        if (currentPhotoIndex === 0) {
            currentPhotoIndex = 3;
        } else {
            currentPhotoIndex--;
        }

        renderPhoto();
        styleNavigationDots();
    });


    forwardArrow.addEventListener("click", () => {
        if (currentPhotoIndex === 3) {
            currentPhotoIndex = 0;
        } else {
            currentPhotoIndex++;
        }

        renderPhoto();
        styleNavigationDots();
    });

    navigationDots.forEach((navigationDot) => {
        navigationDot.addEventListener("click", () => {
            currentPhotoIndex = navigationDot.dataset.index;
            renderPhoto();
            styleNavigationDots();
        });
    });

    incrementPhoto = () => {
        if (currentPhotoIndex === 3) {
            currentPhotoIndex = 0;
        } else {
            currentPhotoIndex++;
        }

        renderPhoto();
        styleNavigationDots();
    };

    setInterval(incrementPhoto, 5000);
};

addEvents();


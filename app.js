const addEvents = () => {
    const dropdownNavbar = document.querySelector('nav.dropdown');
    const menuIcon = document.querySelector('img.menu-icon');
    const sidebar = document.querySelector('div.sidebar');

    addDropDownEvents(dropdownNavbar);
    addSidebarEvents(menuIcon, sidebar);
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

addEvents();
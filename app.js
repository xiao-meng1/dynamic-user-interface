const addEvents = () => {
    const dropdownNavbar = document.querySelector("nav.dropdown");

    addDropDownEvents(dropdownNavbar);
};

const addDropDownEvents = (dropdownNavbar) => {
    const dropdown = document.querySelector("nav.dropdown");
    const dropdownHeader = dropdown.querySelector("li.dropdown-header");
    const dropdownItems = dropdown.querySelectorAll("li.dropdown-item");
    const expandMoreIcon = dropdown.querySelector(".expand-more");
    const expandLessIcon = dropdown.querySelector(".expand-less");

    dropdownHeader.addEventListener("click", () => {
        expandMoreIcon.classList.add("hidden");
        expandLessIcon.classList.remove("hidden");
        dropdownItems.forEach((dropdown) => {
            dropdown.classList.remove("hidden");
        });
    });

    dropdownHeader.addEventListener("mouseover", () => {
        expandMoreIcon.classList.add("hidden");
        expandLessIcon.classList.remove("hidden");
        dropdownItems.forEach((dropdown) => {
            dropdown.classList.remove("hidden");
        });
    });

    dropdownNavbar.addEventListener("mouseleave", () => {
        expandMoreIcon.classList.remove("hidden");
        expandLessIcon.classList.add("hidden");
        dropdownItems.forEach((dropdown) => {
            dropdown.classList.add("hidden");
        });
    });
}

addEvents();
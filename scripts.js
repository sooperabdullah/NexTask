document.addEventListener("DOMContentLoaded", function () {
    const searchContainer = document.querySelector(".search-container");
    const searchIcon = document.querySelector(".fa-search");
    const searchInput = document.querySelector(".search-input");

    // Toggle search input visibility when clicking the icon
    searchIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        searchContainer.classList.toggle("active");
        if (searchContainer.classList.contains("active")) {
            searchInput.focus();
        }
    });

    // Close search input when clicking outside
    document.addEventListener("click", (e) => {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove("active");
        }
    });

    // Close search input when pressing the Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            searchContainer.classList.remove("active");
            searchInput.blur();
        }
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropdownMenu = document.querySelector(".dropdown_menu");

    // Toggle menu open/close
    toggleBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent this click from triggering the document click event
        if (dropdownMenu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!dropdownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
            closeMenu();
        }
    });

    // Function to open the menu
    function openMenu() {
        dropdownMenu.classList.add("open");
        toggleBtnIcon.className = "fa-solid fa-xmark"; // Change to close icon
        dropdownMenu.style.transform = "translateX(-300px)"; // Slide into view
    }
    const closeBtn = document.querySelector(".close_btn");

closeBtn.addEventListener("click", () => {
    closeMenu(); // Use the same `closeMenu` function to hide the menu
});
    // Function to close the menu
    function closeMenu() {
        dropdownMenu.classList.remove("open");
        toggleBtnIcon.className = "fa-solid fa-bars-progress"; // Change back to menu icon
        dropdownMenu.style.transform = "translateX(0)"; // Slide out of view
    }
});







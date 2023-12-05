document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.createElement("div");
    menuButton.className = "menu-button";
    menuButton.innerHTML = "&#9776;";
    document.body.appendChild(menuButton);

    menuButton.addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("show");
    });
});

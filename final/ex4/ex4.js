let vegetarianOnly = false;

function filterMenu() {
    const items = document.getElementsByClassName("menu-item");
    vegetarianOnly = !vegetarianOnly;

    for (let i = 0; i < items.length; i++) {
        if (vegetarianOnly) {
            if (!items[i].classList.contains("vegetarian")) {
                items[i].style.display = "none";
            }
        } else {
            items[i].style.display = "list-item";
        }
    }
}

let showVegetarianOnly = false;

function filterMenu() {
    const items = document.getElementsByClassName("menu-item");

    showVegetarianOnly = !showVegetarianOnly;

    for (let i = 0; i < items.length; i++) {
        if (showVegetarianOnly) {
            if (!items[i].classList.contains("vegetarian")) {
                items[i].style.display = "none";
            }
        } else {
            items[i].style.display = "list-item";
        }
    }
}

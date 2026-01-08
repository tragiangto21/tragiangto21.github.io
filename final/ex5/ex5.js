function switchTab(tabId, element) {
    const tabs = document.getElementsByClassName("tab");
    const contents = document.getElementsByClassName("tab-content");

    // Remove active state from all tabs and contents
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        contents[i].classList.remove("active");
        tabs[i].innerHTML = tabs[i].innerHTML.replace("→ ", "");
    }

    // Add active state to selected tab and content
    element.classList.add("active");
    element.innerHTML = "→ " + element.innerHTML;

    document.getElementById(tabId).classList.add("active");
}

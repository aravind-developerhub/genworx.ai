function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

window.addEventListener("load", () => {
document.body.classList.add("loaded");
});

const loader = document.createElement("div");

loader.id = "loading-screen";

loader.innerHTML = `
<svg viewBox="25 25 50 50">
    <circle r="20" cy="50" cx="50"></circle>
</svg>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(loader);
});

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.remove();
        }, 300); // fade-out time
    }, 500); // wait 500ms before removing loader
});
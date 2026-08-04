const loader = document.createElement("div");

loader.id = "loading-screen";

loader.innerHTML = `
<div class="loader-content">
    <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
    </svg>
    <p>Loading... Depending on your internet and device, this may take a while...</p>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(loader);
});

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.remove();
        }, 400); // fade-out time
    }, 400); // wait 1.5 seconds before hiding
});
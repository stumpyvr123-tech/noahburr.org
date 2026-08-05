// Only run on magic8ball.html
if (window.location.pathname.endsWith("/magic8ball.html") ||
    window.location.pathname === "/magic8ball.html") {

    const loader = document.createElement("div");

    loader.id = "loading-screen";

    loader.innerHTML = `
    <div class="loader-content">
        <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
        <p>Loading Magic 8 Ball...</p>
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
            }, 300);
        }, 3000);
    });
}
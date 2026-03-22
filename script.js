const btn = document.getElementById("startBtn");
const container = document.getElementById("flowerContainer");
const message = document.getElementById("message");
const music = document.getElementById("music");
const petalsContainer = document.getElementById("petals");

// Función corazón ❤️
function heart(t) {
    return {
        x: 16 * Math.pow(Math.sin(t), 3),
        y: -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t))
    };
}

// Iniciar animación
btn.addEventListener("click", () => {
    btn.style.display = "none";

    // Activar música (necesario en celulares)
    music.play();

    // Crear corazón de flores
    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            let t = Math.PI * 2 * (i / 70);
            let pos = heart(t);

            let flower = document.createElement("div");
            flower.className = "flower";
            flower.innerHTML = "🌼";

            flower.style.left = `calc(50% + ${pos.x * 10}px)`;
            flower.style.top = `calc(40% + ${pos.y * 10}px)`;

            container.appendChild(flower);
        }, i * 70);
    }

    // Mostrar mensaje
    setTimeout(() => {
        message.style.opacity = "1";
    }, 4000);

    // Pétalos cayendo 🌸
    setInterval(() => {
        let petal = document.createElement("div");
        petal.className = "petal";
        petal.innerHTML = "🌸";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (3 + Math.random() * 5) + "s";

        petalsContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 8000);

    }, 300);
});
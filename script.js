const btn = document.getElementById("startBtn");
const container = document.getElementById("flowerContainer");
const message = document.getElementById("message");
const music = document.getElementById("music");
const petalsContainer = document.getElementById("petals");

// Función matemática del corazón ❤️
function heart(t) {
    return {
        x: 16 * Math.pow(Math.sin(t), 3),
        y: -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t))
    };
}

// Iniciar animación
btn.addEventListener("click", () => {
    btn.style.display = "none";

    // Activar música de forma segura para celulares
    music.play().catch(error => {
        console.log("El navegador requiere interacción para el audio:", error);
    });

    // Crear corazón de flores centrado
    const totalFlowers = 70;
    for (let i = 0; i < totalFlowers; i++) {
        setTimeout(() => {
            let t = Math.PI * 2 * (i / totalFlowers);
            let pos = heart(t);

            let flower = document.createElement("div");
            flower.className = "flower";
            flower.innerHTML = "🌼";

            // Multiplicador ajustado a 12 para una escala perfecta y centrada
            flower.style.left = `${pos.x * 12}px`;
            flower.style.top = `${pos.y * 12}px`;

            container.appendChild(flower);
        }, i * 60);
    }

    // Mostrar mensaje fluidamente
    setTimeout(() => {
        message.style.opacity = "1";
    }, 4000);

    // Pétalos cayendo 🌸
    setInterval(() => {
        let petal = document.createElement("div");
        petal.className = "petal";
        petal.innerHTML = "🌸";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (3 + Math.random() * 4) + "s";

        petalsContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 7000);

    }, 300);
});

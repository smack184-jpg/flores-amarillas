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
    // Transición suave para ocultar el botón
    btn.style.opacity = "0";
    setTimeout(() => {
        btn.style.display = "none";
    }, 300);

    // Activar música manejando políticas del navegador
    music.play().catch(error => console.log("Audio autoplay bloqueado:", error));

    // Variedad de flores para mayor dinamismo visual
    const flowerTypes = ["🌻", "🌼", "💛", "✨"];

    // Crear corazón de flores de manera fluida
    const totalFlowers = 75;
    for (let i = 0; i < totalFlowers; i++) {
        setTimeout(() => {
            let t = Math.PI * 2 * (i / totalFlowers);
            let pos = heart(t);

            let flower = document.createElement("div");
            flower.className = "flower";
            
            // Asigna un emoji aleatorio para enriquecer el diseño
            flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];

            // Ajuste de escala para centrar y dimensionar el corazón en pantalla
            flower.style.left = `calc(50% + ${pos.x * 14}px)`;
            flower.style.top = `calc(42% + ${pos.y * 14}px)`;

            container.appendChild(flower);
        }, i * 45); // Intervalo más fluido
    }

    // Mostrar mensaje con animación de desplazamiento suave
    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 3500);

    // Lluvia de pétalos / destellos cayendo de fondo
    setInterval(() => {
        let petal = document.createElement("div");
        petal.className = "petal";
        petal.innerHTML = Math.random() > 0.5 ? "🌸" : "✨";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (4 + Math.random() * 4) + "s";
        petal.style.fontSize = (14 + Math.random() * 10) + "px";

        petalsContainer.appendChild(petal);

        // Limpieza de elementos DOM para optimizar memoria
        setTimeout(() => {
            petal.remove();
        }, 8000);

    }, 250);
});

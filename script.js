const btn = document.getElementById("startBtn");
const container = document.getElementById("flowerContainer");
const message = document.getElementById("message");
const music = document.getElementById("music");

// Función de distribución en forma de arco/ramo superior
function getArchPosition(i, total) {
    // Crea una curva elegante simulando los tallos y la caída del arreglo del video
    let angle = (i / total) * Math.PI; // Semicírculo superior
    let radiusX = 140;
    let radiusY = 90;
    
    let x = Math.cos(angle) * radiusX;
    let y = -Math.sin(angle) * radiusY - 40;
    
    return { x, y };
}

// Iniciar animación al hacer clic en el botón
btn.addEventListener("click", () => {
    btn.style.display = "none";

    // Reproducir música
    music.play().catch(error => console.log("Reproducción automática bloqueada:", error));

    // Generar las flores formando el arreglo
    const totalFlowers = 24;
    for (let i = 0; i < totalFlowers; i++) {
        setTimeout(() => {
            let pos = getArchPosition(i, totalFlowers);

            let flower = document.createElement("div");
            flower.className = "flower";
            // Alternamos entre elementos de flores amarillas y hojas verdes para imitar el diseño
            flower.innerHTML = (i % 3 === 0) ? "🌿" : "🌻";

            flower.style.left = `calc(50% + ${pos.x}px)`;
            flower.style.top = `calc(45% + ${pos.y}px)`;

            container.appendChild(flower);
        }, i * 100);
    }

    // Mostrar mensaje romántico después de que aparezcan las flores
    setTimeout(() => {
        message.style.opacity = "1";
    }, 2500);
});

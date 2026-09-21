const btn = document.getElementById("startBtn");
const container = document.getElementById("flowerContainer");
const message = document.getElementById("message");
const music = document.getElementById("music");

// Función para distribuir las flores y hojas en forma de arco superior (como el arreglo del video)
function getArchPosition(i, total) {
    let angle = (i / (total - 1)) * Math.PI; // Semicírculo superior
    let radiusX = 130;
    let radiusY = 80;
    
    let x = Math.cos(angle) * radiusX;
    let y = -Math.sin(angle) * radiusY - 20;
    
    return { x, y };
}

// Iniciar animación al hacer clic
btn.addEventListener("click", () => {
    btn.style.opacity = "0";
    setTimeout(() => {
        btn.style.display = "none";
    }, 300);

    // Reproducción de audio compatible con navegadores móviles
    music.play().catch(error => {
        console.log("Reproducción automática bloqueada por el navegador:", error);
    });

    // Generar flores y hojas en forma de ramo
    const totalItems = 22;
    for (let i = 0; i < totalItems; i++) {
        setTimeout(() => {
            let pos = getArchPosition(i, totalItems);

            let element = document.createElement("div");
            element.className = "flower";
            
            // Alternamos entre hojas verdes y girasoles/flores amarillas para imitar el diseño
            if (i % 4 === 0 || i % 4 === 3) {
                element.innerHTML = "🌿";
            } else {
                element.innerHTML = "🌻";
            }

            element.style.left = `${pos.x}px`;
            element.style.top = `${pos.y}px`;

            container.appendChild(element);
        }, i * 80);
    }

    // Mostrar el mensaje romántico después de que florezca el arreglo
    setTimeout(() => {
        message.style.opacity = "1";
    }, 2200);
});

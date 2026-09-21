const btn = document.getElementById("startBtn");
const container = document.getElementById("flowerContainer");
const message = document.getElementById("message");
const music = document.getElementById("music");

// Cantidad de pétalos por anillo
const OUTER_PETALS = 18;
const INNER_PETALS = 14;

// Crea un div con clase y variables CSS opcionales
function makeEl(className, vars = {}) {
    const el = document.createElement("div");
    el.className = className;
    for (const [key, value] of Object.entries(vars)) {
        el.style.setProperty(key, value);
    }
    return el;
}

function buildFlower() {
    container.innerHTML = "";

    // 1) Tallo y hojas (detrás de la flor)
    container.appendChild(makeEl("stem"));

    const leafRight = makeEl("leaf right");
    leafRight.style.top = "22vh";
    leafRight.style.animationDelay = "0.9s";
    container.appendChild(leafRight);

    const leafLeft = makeEl("leaf left");
    leafLeft.style.top = "31vh";
    leafLeft.style.animationDelay = "1.2s";
    container.appendChild(leafLeft);

    // 2) Cabeza de la flor: los pétalos se reparten en 360° completos
    const head = makeEl("head");

    // Anillo exterior
    for (let i = 0; i < OUTER_PETALS; i++) {
        const angle = (360 / OUTER_PETALS) * i;
        head.appendChild(
            makeEl("petal", {
                "--a": `${angle}deg`,
                "--d": `${1.0 + i * 0.06}s`
            })
        );
    }

    // Anillo interior (desfasado medio paso para que llene los huecos)
    for (let i = 0; i < INNER_PETALS; i++) {
        const angle = (360 / INNER_PETALS) * i + 360 / INNER_PETALS / 2;
        head.appendChild(
            makeEl("petal inner", {
                "--a": `${angle}deg`,
                "--d": `${1.8 + i * 0.07}s`
            })
        );
    }

    // Centro del girasol
    head.appendChild(makeEl("core"));

    container.appendChild(head);
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

    buildFlower();

    // Mostrar el mensaje cuando la flor ya floreció
    setTimeout(() => {
        message.style.opacity = "1";
    }, 3600);
});

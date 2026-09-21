/* =========================================
   ELEMENTOS
========================================= */

const btn =
    document.getElementById("startBtn");

const music =
    document.getElementById("music");

const loveCard =
    document.getElementById("loveCard");

const message =
    document.getElementById("message");

const petalsContainer =
    document.getElementById("petals");


/* =========================================
   BOTÓN PRINCIPAL
========================================= */

btn.addEventListener("click", function () {


    /* Ocultar botón */

    btn.style.opacity = "0";

    btn.style.transform =
        "scale(0)";

    setTimeout(() => {

        btn.style.display =
            "none";

    }, 500);


    /* =====================================
       ACTIVAR MÚSICA

       El navegador permite reproducir
       audio porque el usuario acaba
       de tocar el botón.
    ===================================== */

    music.play().catch(error => {

        console.log(
            "No se pudo reproducir la música:",
            error
        );

    });


    /* =====================================
       APARECER TARJETA
    ===================================== */

    setTimeout(() => {

        loveCard.classList.add("show");

    }, 1500);


    /* =====================================
       DESAPARECER TARJETA
    ===================================== */

    setTimeout(() => {

        loveCard.classList.remove("show");

    }, 5000);


    /* =====================================
       MOSTRAR MENSAJE
    ===================================== */

    setTimeout(() => {

        message.classList.add("show");

    }, 6000);


    /* =====================================
       CREAR PÉTALOS
    ===================================== */

    iniciarPetalos();

});


/* =========================================
   FUNCIÓN PARA CREAR PÉTALOS
========================================= */

function crearPetalo() {


    const petal =
        document.createElement("div");


    petal.className =
        "petal";


    /* Usamos flores amarillas */

    const flores = [
        "🌼",
        "🌻",
        "💛",
        "🌸"
    ];


    petal.innerHTML =
        flores[
            Math.floor(
                Math.random()
                * flores.length
            )
        ];


    /* Posición horizontal */

    petal.style.left =
        Math.random() * 100 + "vw";


    /* Tamaño */

    const size =
        12 +
        Math.random() * 15;


    petal.style.fontSize =
        size + "px";


    /* Duración */

    const duration =
        5 +
        Math.random() * 5;


    petal.style.animationDuration =
        duration + "s";


    /* Agregar */

    petalsContainer.appendChild(
        petal
    );


    /* Eliminar */

    setTimeout(() => {

        petal.remove();

    }, duration * 1000);

}


/* =========================================
   INICIAR PÉTALOS
========================================= */

function iniciarPetalos() {


    /* Crear algunos inmediatamente */

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            crearPetalo();

        }, i * 200);

    }


    /* Continuar creando */

    setInterval(() => {

        crearPetalo();

    }, 500);

}

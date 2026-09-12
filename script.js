/* ==========================================
   BANDERA DE MÉXICO
   CONTROL RGB + HEX + COLOR PICKER
   HIMNO NACIONAL
========================================== */


/* ==========================================
   COLORES ORIGINALES
========================================== */

const DEFAULT_GREEN = {
    r: 0,
    g: 104,
    b: 71
};

const DEFAULT_RED = {
    r: 206,
    g: 17,
    b: 38
};


/* ==========================================
   BANDERA
========================================== */

const flag =
    document.getElementById("mexicanFlag");

const greenStripe =
    document.getElementById("greenStripe");

const redStripe =
    document.getElementById("redStripe");


/* ==========================================
   VERDE
========================================== */

const greenR =
    document.getElementById("greenR");

const greenG =
    document.getElementById("greenG");

const greenB =
    document.getElementById("greenB");


const greenRValue =
    document.getElementById("greenRValue");

const greenGValue =
    document.getElementById("greenGValue");

const greenBValue =
    document.getElementById("greenBValue");


const greenHex =
    document.getElementById("greenHex");

const greenRGB =
    document.getElementById("greenRGB");

const greenColorPicker =
    document.getElementById("greenColorPicker");

const greenPreview =
    document.getElementById("greenPreview");

const resetGreen =
    document.getElementById("resetGreen");


/* ==========================================
   ROJO
========================================== */

const redR =
    document.getElementById("redR");

const redG =
    document.getElementById("redG");

const redB =
    document.getElementById("redB");


const redRValue =
    document.getElementById("redRValue");

const redGValue =
    document.getElementById("redGValue");

const redBValue =
    document.getElementById("redBValue");


const redHex =
    document.getElementById("redHex");

const redRGB =
    document.getElementById("redRGB");

const redColorPicker =
    document.getElementById("redColorPicker");

const redPreview =
    document.getElementById("redPreview");

const resetRed =
    document.getElementById("resetRed");


/* ==========================================
   FUNCIONES
========================================== */

function clamp(value) {

    return Math.min(
        255,
        Math.max(
            0,
            Number(value)
        )
    );

}


function componentToHex(value) {

    return clamp(value)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

}


function rgbToHex(r, g, b) {

    return (
        "#" +
        componentToHex(r) +
        componentToHex(g) +
        componentToHex(b)
    );

}


function hexToRgb(hex) {

    if (!hex) {
        return null;
    }

    let clean =
        hex
            .trim()
            .replace("#", "");

    if (clean.length === 3) {

        clean =
            clean
                .split("")
                .map(
                    character =>
                        character +
                        character
                )
                .join("");

    }

    if (
        !/^[0-9A-Fa-f]{6}$/.test(
            clean
        )
    ) {

        return null;

    }

    return {

        r:
            parseInt(
                clean.substring(0, 2),
                16
            ),

        g:
            parseInt(
                clean.substring(2, 4),
                16
            ),

        b:
            parseInt(
                clean.substring(4, 6),
                16
            )

    };

}


function parseRGB(text) {

    if (!text) {
        return null;
    }

    const clean =
        text
            .replace(/rgb/gi, "")
            .replace(/[()]/g, "");

    const values =
        clean
            .split(",")
            .map(
                value =>
                    Number(
                        value.trim()
                    )
            );

    if (
        values.length !== 3
    ) {

        return null;

    }

    if (
        values.some(
            value =>
                Number.isNaN(value) ||
                value < 0 ||
                value > 255
        )
    ) {

        return null;

    }

    return {

        r: values[0],
        g: values[1],
        b: values[2]

    };

}


/* ==========================================
   ANIMACIÓN
========================================== */

let animationTimeout;


function animateFlag() {

    flag.classList.remove(
        "is-changing"
    );

    void flag.offsetWidth;

    flag.classList.add(
        "is-changing"
    );

    clearTimeout(
        animationTimeout
    );

    animationTimeout =
        setTimeout(
            () => {

                flag.classList.remove(
                    "is-changing"
                );

            },
            350
        );

}


/* ==========================================
   ACTUALIZAR VERDE
========================================== */

function updateGreen(
    animate = true
) {

    const r =
        clamp(
            greenR.value
        );

    const g =
        clamp(
            greenG.value
        );

    const b =
        clamp(
            greenB.value
        );

    const rgb =
        `rgb(${r}, ${g}, ${b})`;

    const hex =
        rgbToHex(
            r,
            g,
            b
        );

    greenStripe.style.backgroundColor =
        rgb;

    greenPreview.style.backgroundColor =
        rgb;

    greenRValue.textContent =
        r;

    greenGValue.textContent =
        g;

    greenBValue.textContent =
        b;

    greenHex.value =
        hex;

    greenRGB.value =
        `${r}, ${g}, ${b}`;

    greenColorPicker.value =
        hex;

    document
        .documentElement
        .style
        .setProperty(
            "--mexico-green",
            hex
        );

    if (animate) {

        animateFlag();

    }

}


/* ==========================================
   ACTUALIZAR ROJO
========================================== */

function updateRed(
    animate = true
) {

    const r =
        clamp(
            redR.value
        );

    const g =
        clamp(
            redG.value
        );

    const b =
        clamp(
            redB.value
        );

    const rgb =
        `rgb(${r}, ${g}, ${b})`;

    const hex =
        rgbToHex(
            r,
            g,
            b
        );

    redStripe.style.backgroundColor =
        rgb;

    redPreview.style.backgroundColor =
        rgb;

    redRValue.textContent =
        r;

    redGValue.textContent =
        g;

    redBValue.textContent =
        b;

    redHex.value =
        hex;

    redRGB.value =
        `${r}, ${g}, ${b}`;

    redColorPicker.value =
        hex;

    document
        .documentElement
        .style
        .setProperty(
            "--mexico-red",
            hex
        );

    if (animate) {

        animateFlag();

    }

}


/* ==========================================
   SLIDERS
========================================== */

greenR.addEventListener(
    "input",
    () => updateGreen()
);

greenG.addEventListener(
    "input",
    () => updateGreen()
);

greenB.addEventListener(
    "input",
    () => updateGreen()
);


redR.addEventListener(
    "input",
    () => updateRed()
);

redG.addEventListener(
    "input",
    () => updateRed()
);

redB.addEventListener(
    "input",
    () => updateRed()
);


/* ==========================================
   HEX VERDE
========================================== */

greenHex.addEventListener(
    "change",
    () => {

        const color =
            hexToRgb(
                greenHex.value
            );

        if (!color) {

            alert(
                "Código HEX inválido.\nEjemplo: #006847"
            );

            updateGreen(false);

            return;

        }

        greenR.value =
            color.r;

        greenG.value =
            color.g;

        greenB.value =
            color.b;

        updateGreen();

    }
);


/* ==========================================
   HEX ROJO
========================================== */

redHex.addEventListener(
    "change",
    () => {

        const color =
            hexToRgb(
                redHex.value
            );

        if (!color) {

            alert(
                "Código HEX inválido.\nEjemplo: #CE1126"
            );

            updateRed(false);

            return;

        }

        redR.value =
            color.r;

        redG.value =
            color.g;

        redB.value =
            color.b;

        updateRed();

    }
);


/* ==========================================
   RGB VERDE
========================================== */

greenRGB.addEventListener(
    "change",
    () => {

        const color =
            parseRGB(
                greenRGB.value
            );

        if (!color) {

            alert(
                "Valor RGB inválido.\nEjemplo: 0, 104, 71"
            );

            updateGreen(false);

            return;

        }

        greenR.value =
            color.r;

        greenG.value =
            color.g;

        greenB.value =
            color.b;

        updateGreen();

    }
);


/* ==========================================
   RGB ROJO
========================================== */

redRGB.addEventListener(
    "change",
    () => {

        const color =
            parseRGB(
                redRGB.value
            );

        if (!color) {

            alert(
                "Valor RGB inválido.\nEjemplo: 206, 17, 38"
            );

            updateRed(false);

            return;

        }

        redR.value =
            color.r;

        redG.value =
            color.g;

        redB.value =
            color.b;

        updateRed();

    }
);


/* ==========================================
   SELECTOR VISUAL
========================================== */

greenColorPicker.addEventListener(
    "input",
    () => {

        const color =
            hexToRgb(
                greenColorPicker.value
            );

        greenR.value =
            color.r;

        greenG.value =
            color.g;

        greenB.value =
            color.b;

        updateGreen();

    }
);


redColorPicker.addEventListener(
    "input",
    () => {

        const color =
            hexToRgb(
                redColorPicker.value
            );

        redR.value =
            color.r;

        redG.value =
            color.g;

        redB.value =
            color.b;

        updateRed();

    }
);


/* ==========================================
   RESTAURAR
========================================== */

resetGreen.addEventListener(
    "click",
    () => {

        greenR.value =
            DEFAULT_GREEN.r;

        greenG.value =
            DEFAULT_GREEN.g;

        greenB.value =
            DEFAULT_GREEN.b;

        updateGreen();

    }
);


resetRed.addEventListener(
    "click",
    () => {

        redR.value =
            DEFAULT_RED.r;

        redG.value =
            DEFAULT_RED.g;

        redB.value =
            DEFAULT_RED.b;

        updateRed();

    }
);


/* ==========================================
   HIMNO
========================================== */

const anthemAudio =
    document.getElementById(
        "anthemAudio"
    );

const anthemButton =
    document.getElementById(
        "anthemButton"
    );

const anthemIcon =
    document.getElementById(
        "anthemIcon"
    );

const anthemText =
    document.getElementById(
        "anthemText"
    );

const lyricsArea =
    document.getElementById(
        "lyricsArea"
    );

const currentLyric =
    document.getElementById(
        "currentLyric"
    );

const nextLyric =
    document.getElementById(
        "nextLyric"
    );

const secondNextLyric =
    document.getElementById(
        "secondNextLyric"
    );


/* ==========================================
   LETRAS SINCRONIZADAS
   MP3 ≈ 81.12 segundos
========================================== */

const lyrics = [

    {
        time: 3.9,
        text:
            "Mexicanos, al grito de guerra"
    },

    {
        time: 8.1,
        text:
            "el acero aprestad y el bridón"
    },

    {
        time: 12.3,
        text:
            "y retiemble en sus centros la tierra"
    },

    {
        time: 16.7,
        text:
            "al sonoro rugir del cañón."
    },

    {
        time: 22.8,
        text:
            "Ciña ¡oh Patria! tus sienes de oliva"
    },

    {
        time: 27.1,
        text:
            "de la paz el arcángel divino"
    },

    {
        time: 31.6,
        text:
            "que en el cielo tu eterno destino"
    },

    {
        time: 36.0,
        text:
            "por el dedo de Dios se escribió."
    },

    {
        time: 41.5,
        text:
            "Mas si osare un extraño enemigo"
    },

    {
        time: 45.8,
        text:
            "profanar con su planta tu suelo"
    },

    {
        time: 50.0,
        text:
            "piensa ¡oh Patria querida! que el cielo"
    },

    {
        time: 54.4,
        text:
            "un soldado en cada hijo te dio."
    },

    {
        time: 60.5,
        text:
            "Mexicanos, al grito de guerra"
    },

    {
        time: 64.8,
        text:
            "el acero aprestad y el bridón"
    },

    {
        time: 69.1,
        text:
            "y retiemble en sus centros la tierra"
    },

    {
        time: 73.7,
        text:
            "al sonoro rugir del cañón."
    }

];


/* ==========================================
   OBTENER LÍNEA ACTUAL
========================================== */

function getCurrentLyricIndex() {

    const currentTime =
        anthemAudio.currentTime;

    let currentIndex = -1;

    for (
        let i = 0;
        i < lyrics.length;
        i++
    ) {

        if (
            currentTime >=
            lyrics[i].time
        ) {

            currentIndex = i;

        } else {

            break;

        }

    }

    return currentIndex;

}


/* ==========================================
   ACTUALIZAR LETRAS
========================================== */

let previousLyricIndex = -1;


function updateLyrics() {

    const index =
        getCurrentLyricIndex();

    if (
        index ===
        previousLyricIndex
    ) {

        return;

    }

    previousLyricIndex =
        index;


    if (
        index === -1
    ) {

        currentLyric.textContent =
            "";

        nextLyric.textContent =
            lyrics[0]?.text || "";

        secondNextLyric.textContent =
            lyrics[1]?.text || "";

        return;

    }


    currentLyric.style.animation =
        "none";

    void currentLyric.offsetWidth;

    currentLyric.style.animation =
        "lyricEnter 0.45s ease";


    currentLyric.textContent =
        lyrics[index]?.text || "";

    nextLyric.textContent =
        lyrics[index + 1]?.text || "";

    secondNextLyric.textContent =
        lyrics[index + 2]?.text || "";

}


/* ==========================================
   CICLO SINCRONIZACIÓN
========================================== */

let lyricAnimationFrame;


function lyricLoop() {

    if (
        !anthemAudio.paused &&
        !anthemAudio.ended
    ) {

        updateLyrics();

        lyricAnimationFrame =
            requestAnimationFrame(
                lyricLoop
            );

    }

}


/* ==========================================
   BOTÓN HIMNO
========================================== */

anthemButton.addEventListener(
    "click",
    async () => {

        if (
            anthemAudio.paused
        ) {

            try {

                await anthemAudio.play();

            } catch (error) {

                alert(
                    "No fue posible reproducir el audio.\n\nVerifica que el archivo se llame:\nhimno-nacional.mp3"
                );

            }

        } else {

            anthemAudio.pause();

        }

    }
);


/* ==========================================
   PLAY
========================================== */

anthemAudio.addEventListener(
    "play",
    () => {

        anthemButton.classList.add(
            "playing"
        );

        anthemIcon.textContent =
            "❚❚";

        anthemText.textContent =
            "Pausar";

        lyricsArea.classList.add(
            "visible"
        );

        previousLyricIndex =
            -2;

        updateLyrics();

        cancelAnimationFrame(
            lyricAnimationFrame
        );

        lyricLoop();

    }
);


/* ==========================================
   PAUSA
========================================== */

anthemAudio.addEventListener(
    "pause",
    () => {

        cancelAnimationFrame(
            lyricAnimationFrame
        );

        if (
            anthemAudio.ended
        ) {

            return;

        }

        anthemButton.classList.remove(
            "playing"
        );

        anthemIcon.textContent =
            "▶";

        anthemText.textContent =
            "Continuar";

        lyricsArea.classList.remove(
            "visible"
        );

    }
);


/* ==========================================
   SEEK
========================================== */

anthemAudio.addEventListener(
    "seeked",
    () => {

        previousLyricIndex =
            -2;

        updateLyrics();

    }
);


/* ==========================================
   FIN
========================================== */

anthemAudio.addEventListener(
    "ended",
    () => {

        cancelAnimationFrame(
            lyricAnimationFrame
        );

        anthemButton.classList.remove(
            "playing"
        );

        anthemIcon.textContent =
            "▶";

        anthemText.textContent =
            "Reproducir";

        lyricsArea.classList.remove(
            "visible"
        );

        previousLyricIndex =
            -1;

        currentLyric.textContent =
            "";

        nextLyric.textContent =
            "";

        secondNextLyric.textContent =
            "";

    }
);


/* ==========================================
   CARGA INICIAL
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        greenR.value =
            DEFAULT_GREEN.r;

        greenG.value =
            DEFAULT_GREEN.g;

        greenB.value =
            DEFAULT_GREEN.b;


        redR.value =
            DEFAULT_RED.r;

        redG.value =
            DEFAULT_RED.g;

        redB.value =
            DEFAULT_RED.b;


        updateGreen(false);

        updateRed(false);


        anthemAudio.currentTime =
            0;

        lyricsArea.classList.remove(
            "visible"
        );

        anthemButton.classList.remove(
            "playing"
        );

        anthemIcon.textContent =
            "▶";

        anthemText.textContent =
            "Reproducir";

        currentLyric.textContent =
            "";

        nextLyric.textContent =
            "";

        secondNextLyric.textContent =
            "";

        previousLyricIndex =
            -1;

    }
);
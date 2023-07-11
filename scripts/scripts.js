const sketchSpace = document.querySelector(`.sketch-space`);
const startButton = document.querySelector(`.make-a-book`);

startButton.addEventListener(`click`, () => {
    startButton.remove();
});

document.addEventListener(`DOMContentLoaded`, () => {
    console.log(`dom content loaded`)
    for (let j =0; j < 4; j++) {
        col = document.createElement(`div`);
        col.setAttribute(`class`, `sketch-col`)
        sketchSpace.appendChild(col)
        console.log(`it made a row`);
        for (let i = 0; i < 4; i++) {
            sqr = document.createElement(`div`);
            sqr.setAttribute(`class`, `sketch-square`);
            sqr.setAttribute(`id`, `sqr${j}:${i}`);
            col.appendChild(sqr)
            console.log(`it made a square`);
        }
    }
});


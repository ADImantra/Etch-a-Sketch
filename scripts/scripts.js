


const gridSpace = document.querySelector(`.sketch-pad`)
const sketchSpace = document.querySelector(`.sketch-space`);
const startButton = document.querySelector(`.make-a-book`);
const color = document.getElementById(`color-select`);
const sizeSelect = document.querySelectorAll(`input[name="size-select"]`)

document.addEventListener(`DOMContentLoaded`, initialize);
startButton.addEventListener(`click`, painter)

gridSpace.addEventListener(`mousedown`, () => {
    mDown = true;
})

gridSpace.addEventListener(`mouseup` , () => {
    mDown = false;
})

let mDown = false;

//just a set up screen
function initialize() {
    sketchSpace.remove();
    color.value = `black`;
}

//sets size of 
function getCanvasSize() {
    for (const sizeButton of sizeSelect) {
        if (sizeButton.checked) {
            if (sizeButton.value === `small`) {
                return 16;
            } else if (sizeButton.value === `medium`) {
                return 32;
            } else {
                return 64;
            };
        };
    };
};

//actually builds grid and allows for "painting"
function painter() {
    //builds the box
    gridSpace.appendChild(sketchSpace);
    startButton.remove();
    for (let j =0; j < getCanvasSize(); j++) {

        col = document.createElement(`div`);
        col.setAttribute(`class`, `sketch-col`);
        sketchSpace.appendChild(col);

        for (let i = 0; i < getCanvasSize(); i++) {

            sqr = document.createElement(`div`);
            sqr.setAttribute(`class`, `sketch-square`);
            sqr.setAttribute(`id`, `sqr${j}:${i}`);
            col.appendChild(sqr);

        };
    };

    //creates the sketchpad object
    const squares = document.querySelectorAll(`.sketch-square`)

    /*
    using the on-click/hold listener above, this make's a 
    paintbrush effect by allowing the user to "paint" with the 
    mouse held down.
    */
    squares.forEach(square => square.addEventListener(`mouseover` , () => {
        if (mDown === true) {
            console.log(`paintbrush`)
            square.style.backgroundColor = color.value;
        }

    }));
};





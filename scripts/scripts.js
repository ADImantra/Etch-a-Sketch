


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

function getPalleteSize() {
    for (const sizeButton of sizeSelect) {
        if (sizeButton.checked) {
            if (sizeButton.value === `small`) {
                console.log(sizeButton.value)
                return 16;
            } else if (sizeButton.value === `medium`) {
                console.log(sizeButton.value)
                return 32;
            } else {
                console.log(sizeButton.value)
                return 64;
            };
        };
    };
};



//just a set up screen
function initialize() {
    sketchSpace.remove();
    color.value = `black`;
}

function palleteSetter(size) {
    if (size === `small`) {
        palleteSize = 32;
        
    }
};

//actually builds grid and allows for "painting"
function painter() {
    //builds the box
    gridSpace.appendChild(sketchSpace);
    startButton.remove();
    for (let j =0; j < getPalleteSize(); j++) {

        col = document.createElement(`div`);
        col.setAttribute(`class`, `sketch-col`);
        sketchSpace.appendChild(col);

        for (let i = 0; i < getPalleteSize(); i++) {

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



/*

small square
2x2sqr = 4x80px
4x4sqr = 16x20px
8x8sqr = 32x5px


big square
1x1sqr = 1x640px
2x2sqr = 4x160px
4x4sqr = 16x40px
8x8sqr = 64x10px
80x80sqr = 640x1px

really big square
1x1sqr = 1x1024px
2x2sqr = 4x256px
4x4sqr = 16x64px
8x8sqr = 64x16px
16x16sqr = 1024x1pxsqr

*/







//sets HTML items as objects for us to use
const gridSpace = document.querySelector(`.sketch-pad`)
const sketchSpace = document.querySelector(`.sketch-space`);
const startButton = document.querySelector(`.make-a-book`);
const color = document.getElementById(`color-select`);
const sizeSelect = document.querySelectorAll(`input[name="size-select"]`);
const rainbow = document.getElementById(`randomizer`);

//triggers the webpage on DOM load in
document.addEventListener(`DOMContentLoaded`, initialize);
startButton.addEventListener(`click`, painter)

/*globally tracks whether the mouse is being pressed for use in the
"painter" function.
*/
let mDown = false;

gridSpace.addEventListener(`mousedown`, () => {
    mDown = true;
    console.log(color.value);
})

gridSpace.addEventListener(`mouseup` , () => {
    mDown = false;
})



//just a set up screen
function initialize() {
    sketchSpace.remove();
    color.value = `black`;
}

//sets size of "canvas"
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
    squares.forEach(square => square.addEventListener(`mouseover`, () => {
        if (mDown && rainbow.checked) {
            gridSpace.addEventListener(`mousemove`, () => {
                let num = Math.floor(Math.random() * 11);
                let colorArr = [`#000000`, `#241f31`, `#3d3846`, `#5e5c64`, `#77767b`,
                            `#9a9996`, `#c0bfbc`, `#c0bfbc`, `#deddda`, `#f6f5f4`,
                            `#ffffff`];
                square.style.backgroundColor = colorArr[num];
            });
        } else if (mDown && !(rainbow.checked)) {
            square.style.backgroundColor = color.value;
        } else {
            //pass
        };
    }));
};

/*
colors

#000000
#241f31
#3d3846
#5e5c64
#77767b
#9a9996
#c0bfbc
#deddda
#f6f5f4
#ffffff

*/
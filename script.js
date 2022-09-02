let leftslides = document.querySelector(".left-slide")
let rightslides = document.querySelector(".right-slide")
let downbutton = document.querySelector(".down-button")
let upbutton = document.querySelector(".up-button");
let slidercontainer = document.querySelector(".slider-container");
let slidelength = rightslides.querySelectorAll("div").length;



leftslides.style.top = `-${(slidelength - 1) * 100}vh`;
let activeslideindex = 0;


upbutton.addEventListener("click", () => changeslide("up"))
downbutton.addEventListener("click", () => changeslide("down"));


// function changeslide(params) {
//     const sliderheight = slidercontainer.clientHeight
//     if (params === "up") {
//         activeslideindex++
//         if (activeslideindex > slidelength - 1) {
//             activeslideindex = 0
//         }

//         rightslides.style.transform = `translateY(-${(slidelength - 1) * sliderheight}px`
//     }
// }
const changeslide = (params) => {
    const sliderheight = slidercontainer.clientHeight;

    if (params === "up") {
        activeslideindex++;
        if (activeslideindex > slidelength - 1) {
            activeslideindex = 0;
        }

        rightslides.style.transform = `translateY(-${activeslideindex * sliderheight}px`;
        leftslides.style.transform = `translateY(${activeslideindex * sliderheight}px`;
    } else if (params === "down") {
        activeslideindex--;
        if (activeslideindex < 0) {
            activeslideindex = slidelength - 1;
        }

        rightslides.style.transform = `translateY(-${activeslideindex * sliderheight}px`;
        leftslides.style.transform = `translateY(${activeslideindex * sliderheight}px`;


    }
};
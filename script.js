let logo = document.querySelector(".logo");

// Image sources for the two logos

const img1 = "bnd.png";
const img2 = "bnd2.png";

// let intervalId;
// let showingFirst = true;

// logo.addEventListener("mouseenter", () => {
//     intervalId = setInterval(() => {
//         logo.src = showingFirst ? img2 : img1;
//         showingFirst = !showingFirst;
//     }, 400); // toggle every 500 ms
// });

// logo.addEventListener("mouseleave", () => {
//     clearInterval(intervalId);
//     showingFirst = true;
// });

//theme toggle
let themeIcon = document.querySelector(".theme");
let timer= document.querySelector(".timer");
let startBtn = document.querySelector("#start")
let resetBtn = document.querySelector("#reset")
let isdark = true;

themeIcon.addEventListener("click", () => {
    if (themeIcon.src.includes("darktheme.png")) {
        themeIcon.src = "lighttheme.png";
        document.body.style.backgroundColor = "#c79a66";
        timer.style.color= "#5f3723";
        startBtn.style.backgroundColor= "#5f3723";
        startBtn.style.color= "#c79a66";
        resetBtn.style.backgroundColor= "#c79a66";
        resetBtn.style.color= "#5f3723";
        resetBtn.style.borderColor= "#5f3723";
    } else {
        themeIcon.src = "darktheme.png";
        document.body.style.backgroundColor = "#5f3723";
        timer.style.color= "#c79a66";
        startBtn.style.backgroundColor= "#c79a66";
        startBtn.style.color= "#5f3723";
        resetBtn.style.backgroundColor= "#5f3723";
        resetBtn.style.color= "#c79a66";
        resetBtn.style.borderColor= "#c79a66";
    }
    isdark = !isdark;
});
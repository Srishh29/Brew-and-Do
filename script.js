let logo = document.querySelector(".logo");

// Image sources for the two logos

const img1 = "bnd.png";
const img2 = "bnd2.png";

let intervalId;
let showingFirst = true;

logo.addEventListener("mouseenter", () => {
    intervalId = setInterval(() => {
        logo.src = showingFirst ? img2 : img1;
        showingFirst = !showingFirst;
    }, 400); // toggle every 500 ms
});

logo.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    showingFirst = true;
});

//theme toggle
let themeIcon = document.querySelector(".theme");
let isdark = true;

themeIcon.addEventListener("click", () => {
    themeIcon.src = isdark ? "lighttheme.png" : "darktheme.png";
    document.body.style.backgroundColor = isdark ? "#c79a66" : "#5f3723";
    isdark = !isdark;
});
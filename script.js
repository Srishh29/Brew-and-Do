let logo = document.querySelector(".logo");

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
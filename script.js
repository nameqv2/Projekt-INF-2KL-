const images = [
    "zdj/Slide_Blue_Pill.jpg",
    "zdj/Slide_Green_Pill.jpg",
    "zdj/Slide_Purple_Pill.jpg",
    "zdj/Slide_Red_Pill.jpg"
];

let index = 0;
const slideImage = document.getElementById("slideImage");

function changeSlide() {
    index = (index + 1) % images.length;
    slideImage.style.opacity = "0";

    setTimeout(() => {
        slideImage.src = images[index];
        slideImage.style.opacity = "1";
    }, 500);
}

setInterval(changeSlide, 3900);

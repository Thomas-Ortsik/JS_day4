import { getRandomIntInclusive } from "../helper.js";
document.querySelectorAll(".clickable").forEach(clickable => {
    clickable.addEventListener("click", () => {
        clickable.src = "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878";
        document.body.style.backgroundColor = randomColor();
    })
})


function randomColor(){
    return `rgb(${getRandomIntInclusive(0,255)},${getRandomIntInclusive(0,255)},${getRandomIntInclusive(0,255)})`;
}

  
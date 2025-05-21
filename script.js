let img = document.querySelector("#head")
let btn = document.querySelector("#btn")
let type = document.querySelector("#type")

images = ["https://github.com/Ayoub788jf/coinflip/blob/3055e2069741b92a9c3ba45dc2614667d4d44bb7/resources/heads.svg", "https://github.com/Ayoub788jf/coinflip/blob/3055e2069741b92a9c3ba45dc2614667d4d44bb7/resources/tails.svg"]
// console.log(img.src)

btn.onclick = function () {
    img.style.animation = "none";
    img.offsetHeight; // Trigger reflow
    img.style.animation = "anim 1s ease";
    setTimeout(() => {
        let random = Math.floor(Math.random() * 2);
        img.src = images[random];
        // console.log(random);
        if (random == 0) {
            type.textContent = "head" 
        } else {
            type.textContent = "tail" 
            
        }
    }, 500); 
}
img.addEventListener("animationend", () => {
    img.style.animationPlayState = "paused";
});


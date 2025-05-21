let img = document.querySelector("#head")
let btn = document.querySelector("#btn")
let type = document.querySelector("#type")

images = ["https://raw.githubusercontent.com/Ayoub788jf/coinflip/main/resources/heads.svg", "https://raw.githubusercontent.com/Ayoub788jf/coinflip/main/resources/tails.svg"]
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


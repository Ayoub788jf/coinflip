let img = document.querySelector("#head")
let btn = document.querySelector("#btn")
let type = document.querySelector("#type")

images = ["http://127.0.0.1:3000/resources/heads.svg", "http://127.0.0.1:3000/resources/tails.svg"]
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


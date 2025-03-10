const textElement = document.querySelector(".changing-text");
const texts = ["A Web Developer", "A Teacher", "A Learner and Explorer"];
let index = 0;

setInterval(() => {
    textElement.style.opacity = "0"; 
    setTimeout(() => {
        index = (index + 1) % texts.length; 
        textElement.textContent = texts[index];
        textElement.style.opacity = "1"; 
    }, 500); 
}, 3000); 
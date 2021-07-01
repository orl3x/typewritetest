var meCura = new Audio("./audio/mecura.mp3");
console.log("Antes de reproducir")


document.body.addEventListener("mousemove", function () {
    meCura.play();
})
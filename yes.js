var two = new Audio("./audio/twoofus.mp3");


function playAudio(){
    setTimeout(()=>{
        two.play()
    }, 300)
}

playAudio();

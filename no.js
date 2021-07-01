var mienteme = new Audio("./audio/culpable.mp3");


function playAudio(){
    setTimeout(()=>{
        mienteme.play()
    }, 300)
}

playAudio();

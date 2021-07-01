var meCura = new Audio("./audio/mecura.mp3");


function playAudio(){
    setTimeout(()=>{
        meCura.play()
    }, 300)
}

playAudio();

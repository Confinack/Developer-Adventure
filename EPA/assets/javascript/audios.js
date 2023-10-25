const videoPlayer = document.querySelector(".videoPlayer");
const audio = document.querySelector("audio");
let ON = false;

videoPlayer.addEventListener("click", function(){
    if(!ON){
        ON = true;

        videoPlayer.style.backgroundImage = "URL('../assets/img/som.png')";
        
        audio.play();
        audio.volume = 0.6;
    }else {
        videoPlayer.style.backgroundImage = "URL('../assets/img/mudo.png')";

        audio.pause();
        audio.currentTime = 0;
        ON = false;
    }
})

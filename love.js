
function playMusic(musicUrl) {
    const audioPlayer = document.getElementById("audio-player");
    const currentMusicName = document.getElementById("current-music-name");

    if (musicUrl === currentMusic) {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    } else {
        currentMusic = musicUrl;
        audioPlayer.src = musicUrl;
        audioPlayer.play();
    }

    audioPlayer.addEventListener("play", function() {
        currentMusicName.textContent = getMusicName(musicUrl);
        currentMusicName.classList.add("current-music");
    });

    audioPlayer.addEventListener("pause", function() {
        currentMusicName.classList.remove("current-music");
    });
}

function getMusicName(musicUrl) {
    const fileName = musicUrl.substring(musicUrl.lastIndexOf("/") + 1);
    return fileName.substring(0, fileName.lastIndexOf("."));
}
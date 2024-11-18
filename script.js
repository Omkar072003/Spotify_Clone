let album = [
    {songName : 'Let me love you', filePath : 'songs/1.mp3', coverPath : 'covers/1.jpg'}
]

let audioElement = new Audio('songs/1.mp3');
let albumAudio = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songPlay = document.getElementById('songPlay');

myProgressBar.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTme<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

songPlay.addEventListener('click', () => {
    if (albumAudio.paused || albumAudio.currentTime<=0) {
        albumAudio.play();
        songPlay.classList.remove('fa-play');
        songPlay.classList.add('fa-pause');
    }else{
        albumAudio.pause();
        songPlay.classList.remove('fa-pause');
        songPlay.classList.add('fa-play');
    }
})

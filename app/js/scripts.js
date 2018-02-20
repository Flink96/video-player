let toggle = document.querySelector('.toggle');
let video = document.querySelector('.viewer');
let skipBtns = document.querySelectorAll('.player__button');
let progressLine = document.querySelector('.progress__filled');
let progressParent = document.querySelector('.progress');
let playerSliders = document.querySelectorAll('.player__slider');

function togglePlay() {
    let method = video.paused ? 'play' : 'pause'
    video[method]();
}


function togglePlayButton() {
    let icon = video.paused ? '❚ ❚' : '►';
    toggle.innerHTML = icon;
}

// document.addEventListener('keydown', keyDown);

// function keyDown() {
//    console.log(keyDown);
// }


function skip() {
    if (this.dataset != 0) {
        video.currentTime += parseFloat(this.dataset.skip);
    }
}

function progress() {
    const persent = (video.currentTime / video.duration) * 100;
    progressLine.style.flexBasis = `${persent}%`;

}

function handleProgress(ev) {
    let current = (ev.offsetX / progressParent.offsetWidth) * video.duration;
    video.currentTime = current;
}

function rangeUpdate() {
    video[this.name] = this.value;
}

video.addEventListener('click', togglePlay);

toggle.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
video.addEventListener('timeupdate', progress);

progressParent.addEventListener('mousedown', handleProgress);
// progressParent.addEventListener('mouseup', handleProgress);
// progressParent.addEventListener('mousemove', handleProgress);

skipBtns.forEach(btn => btn.addEventListener('click', skip));
playerSliders.forEach(slider => slider.addEventListener('change', rangeUpdate));
playerSliders.forEach(slider => slider.addEventListener('mousemove', rangeUpdate));
// Get the video player element
const videoPlayer = document.querySelector('video');

// Get the buttons
    playButton = document.querySelector('.play');
    pauseButton = document.querySelector('.pause');
    backButton = document.querySelector('.rewind');
    forwardButton = document.querySelector('.fast-forward');
    volumeUpButton = document.querySelector('.volume-up');
    volumeDownButton = document.querySelector('.volume-down');
    subtitleButton = document.querySelector('.subtitle');

// Play and pause the video
function togglePlay() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');
  } else {
    videoPlayer.pause();
    playButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');
  }
}

// Rewind video by 5 seconds
function rewindVideo() {
  videoPlayer.currentTime -= 5;
}

// Fast forward video by 5 seconds
function fastForwardVideo() {
  videoPlayer.currentTime += 5;
}

// Increase volume by 10%
function increaseVolume() {
  if (videoPlayer.volume < 0.9) {
    videoPlayer.volume += 0.1;
  } else {
    videoPlayer.volume = 1;
  }
}

// Decrease volume by 10%
function decreaseVolume() {
  if (videoPlayer.volume > 0.1) {
    videoPlayer.volume -= 0.1;
  } else {
    videoPlayer.volume = 0;
  }
}

// Toggle subtitle visibility
function toggleSubtitle() {
  videoPlayer.textTracks[0].mode = (videoPlayer.textTracks[0].mode == 'hidden') ? 'showing' : 'hidden';
  subtitleButton.classList.toggle('active');
}

// Add event listeners only if the button exists
if (playButton) {
  playButton.addEventListener('click', togglePlay);
}

if (pauseButton) {
  pauseButton.addEventListener('click', togglePlay);
}

if (backButton) {
  backButton.addEventListener('click', rewindVideo);
}

if (forwardButton) {
  forwardButton.addEventListener('click', fastForwardVideo);
}

if (volumeUpButton) {
  volumeUpButton.addEventListener('click', increaseVolume);
}

if (volumeDownButton) {
  volumeDownButton.addEventListener('click', decreaseVolume);
}

if (subtitleButton) {
  subtitleButton.addEventListener('click', toggleSubtitle);
}
// Get the media player element
const player = document.querySelector('audio, video');

// Get the buttons
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const backButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.fast-forward');
const volumeUpButton = document.querySelector('.volume-up');
const volumeDownButton = document.querySelector('.volume-down');
const subtitleButton = document.querySelector('.subtitle');
const transcriptButton = document.querySelector('.transcript');
const transcript = document.querySelector('.transcript-content');

// Play and pause the media
function togglePlay() {
  if (player.paused) {
    player.play();
    playButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');
  } else {
    player.pause();
    playButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');
  }
}

// Rewind media by 5 seconds
function rewindMedia() {
  player.currentTime -= 5;
}

// Fast forward media by 5 seconds
function fastForwardMedia() {
  player.currentTime += 5;
}

// Increase volume by 10%
function increaseVolume() {
  if (player.volume < 0.9) {
    player.volume += 0.1;
  } else {
    player.volume = 1;
  }
}

// Decrease volume by 10%
function decreaseVolume() {
  if (player.volume > 0.1) {
    player.volume -= 0.1;
  } else {
    player.volume = 0;
  }
}

// Toggle subtitle/caption visibility
function toggleSubtitle() {
  if (player.textTracks[0]) {
    player.textTracks[0].mode = (player.textTracks[0].mode == 'hidden') ? 'showing' : 'hidden';
    subtitleButton.classList.toggle('active');
  }
}

// Toggle transcript visibility
function toggleTranscript() {
  transcript.classList.toggle('hidden');
}

// Add event listeners only if the button exists
if (playButton) {
  playButton.addEventListener('click', togglePlay);
}

if (pauseButton) {
  pauseButton.addEventListener('click', togglePlay);
}

if (backButton) {
  backButton.addEventListener('click', rewindMedia);
}

if (forwardButton) {
  forwardButton.addEventListener('click', fastForwardMedia);
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

if (transcriptButton) {
  transcriptButton.addEventListener('click', toggleTranscript);
}
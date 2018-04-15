const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop if we don't have a corresponding key
  audio.currentTime = 0; // make the sound start over if the key is pressed again
  audio.play();

  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.add('playing');
};

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

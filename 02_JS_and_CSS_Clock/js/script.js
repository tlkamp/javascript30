const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  handleFlicker(secondHand, secondsDegrees);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  handleFlicker(minuteHand, minsDegrees);
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  handleFlicker(hourHand, hoursDegrees);
  hourHand.style.transform =`rotate(${hoursDegrees}deg)`;
};

const handleFlicker = (hand, degrees) => {
  if(degrees === 90) {
    hand.style.transition = 'all 0.0s';
  } else {
    hand.style.transition = 'all 0.2s';
  }
};

setInterval(setDate, 1000);
setDate();

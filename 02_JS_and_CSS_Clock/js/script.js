const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();

  const second = now.getSeconds();
  // The second hand has a hard jump, so we don't need to adjust for anything else.
  const secondDegrees = (second / 60) * 360 + 90;
  handleFlicker(secondHand, secondDegrees);
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minute = now.getMinutes();
  // The minute hand will move slightly when the second hand updates.
  const minuteDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90;
  handleFlicker(minuteHand, minuteDegrees);
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  // The hour hand will move sightly when the minute hand updates.
  const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
  handleFlicker(hourHand, hourDegrees);
  hourHand.style.transform =`rotate(${hourDegrees}deg)`;
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

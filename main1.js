const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const time = document.getElementById('time')

// msec = 0;
// sec=0;
// min=0;
// hour=0;

// function timer(){
//   msec += 1;
//   if (msec > 99) {
//     mesc = 0;
//     sec += 1;
//   }
//   if (sec > 59) {
//     sec=0;
//     min+=1;
//   }
//   if (min > 59) {
//     min=0;
//     hour+=1;
//   }
//   if (hour > 99){
//     msec=0;
//     sec=0;
//     min=0;
//     hour=0;
//   }
// }

let startTime;
let showTime;
let stopTime;
let elapsedTime = 0;
let holdTime = 0;

function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-1).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(2, '0');

  time.textContent = `${h}:${m}:${s}.${ms}`;
  showTime = setTimeout(displayTime, 10);
}

//Startボタン押下
//タイマーが動く
// startボタンが押せなくなる
// stop,resetボタンがおせる
startButton.addEventListener('click', function() {
  startTime = Date.now()
  displayTime()
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
});

// Stopボタン押下
//タイマーが止まる
// Stopボタンが押せなくなる
// Start,resetボタンがおせる

// Resetボタン押下
// タイマーがゼロになる
// Reset、Stopが押せなくなる
// Startボタンが押せる
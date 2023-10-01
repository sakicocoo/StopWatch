const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const showTime = document.getElementById('time');

let timer;
let startTime;
let elapsedTime = 0;
let holdTime = 0;

function displayTime() {
  timer= setTimeout(function() {
    elapsedTime=Date.now()- startTime+holdTime;
    showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 22);
    displayTime();
  },10);
}

//Startボタン押下
//タイマーが動く
// startボタンが押せなくなる
// stop,resetボタンがおせる
startBtn.addEventListener('click', function() {
  startTime = Date.now();
  displayTime();
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
});

// Stopボタン押下
//タイマーが止まる
// Stopボタンが押せなくなる
// Start,resetボタンがおせる

stopBtn.addEventListener('click', function() {
  clearInterval(timer);
  holdTime += Date.now() - startTime;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
});

// Resetボタン押下
// タイマーがゼロになる
// Reset、Stopが押せなくなる
// Startボタンが押せる

resetBtn.addEventListener('click', function() {
  clearInterval(timer);
  elapsedTime=0;
  holdTime=0;
  showTime.textContent="00:00:00";
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
});
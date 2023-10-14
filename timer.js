const timerText = document.getElementById("timer-text");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");


let count = 0
let intervalId;

btnStart.addEventListener('click',function(){
  if (!intervalId){
  intervalId = setInterval(function(){
    count += 1
    timerText.textContent = count
  }, 1000)
}
})

btnPause.addEventListener("click", function(){
  clearInterval(intervalId)
  intervalId = null
})

btnStop.addEventListener('click',function(){
  clearInterval(intervalId)
  intervalId = null
  count = 0
  timerText.textContent = count
})


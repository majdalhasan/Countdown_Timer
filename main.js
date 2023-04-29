// The End Of The Year Date To Countdown To
// 1000 Millisecond = 1 Second

let conuntDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {

  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = conuntDownDate - dateNow;

  //  Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 /60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60 ) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;


  if (dateDiff < 0) {
    clearInterval(counter);
  }

}, 1000);
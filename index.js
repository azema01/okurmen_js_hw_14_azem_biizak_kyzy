let seconds = 0;

function logSeconds() {
  seconds++;
  let message = (`Өттү: ${seconds} сек.`);
  if (seconds !== 0) {
    message += "Сан";
  }
  console.log(message);
}

setInterval(logSeconds, 1000);


// let seconds = 0;
// let intervalId;

// function logSeconds() {
//   seconds++;
//   let message = (`Өттү: ${seconds} сек.`);
//   if (seconds !== 1) {
//     message += "Сан";
//   }
//   console.log(message);
  
//   if (seconds === 5) {
//     clearInterval(intervalId);
//     console.log("Программа токтотоп калды!");
//   }
// }

// logSeconds();  
intervalId = setInterval(logSeconds, 1000); 
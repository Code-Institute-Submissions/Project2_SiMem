let turn;
let good;
let compTurn;
let intervalId;
let nightMode = false;
let noise = true;
let on = false;
let win;
let order = [];
let playerOrder = [];
let flash;

const onButton = document.querySelector(".power");
const startButton = document.querySelector(".start");
const turnCounter = document.querySelector(".levelDisplay");
const topLeft = document.querySelector(".top-1-blue");
const topRight = document.querySelector(".top-2-yellow");
const bottomLeft = document.querySelector(".bottom-1-red");
const bottomRight = document.querySelector(".bottom-2-green");
const nightButton = document.querySelector(".nightMode");



onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  }
  else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
}
});

startButton.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});


//nightMode.addEventListener('click', (event) => {
//  if (onButton.checked == true) {
//    on = true;
 //   body.style.background = url("https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
//  }
 // else {
 //   on = false;
 //   body.style.background = url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
//}
//});

function nightTime() {
   var element = document.body;
   element.classList.toggle("nightMode");
}



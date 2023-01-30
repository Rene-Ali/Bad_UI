window.onload = () => {
  startSetTimeoutAnimation();
  startAnimFrameAnimation();
};

function startSetTimeoutAnimation() {
  const refreshRate = 1000 / 60;
  const maxXPosition = 1500;
  let rect = document.getElementById('rect1');
  let speedX = 1;
  let positionX = 0;

  window.setInterval(() => {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * (-1);
    }
    rect.style.left = positionX + 'px';
  }, refreshRate);
}

function startAnimFrameAnimation() {
  const refreshRate = 1000 / 60;
  const maxXPosition = 1500;
  let rect = document.getElementById('rect0');
  let speedX = 2;
  let positionX = 0;

  function step() {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
      speedX = speedX * (-1);
    }
    rect.style.left = positionX + 'px';
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

/*Pop up creepy image*/
let button = document.getElementById("no");
const image = document.getElementById("creepy_image");

button.addEventListener("click", function () {
  if (image.style.display === "none") {
    image.requestFullscreen();
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
})



// Date Picker
const earth = document.getElementById("finger")
const dateButton = document.getElementById("date")
const datePicker = document.getElementById("datePicker")
const ellipse = document.getElementById("ellipse")

var isPressing = false

const earthSize = 15
const horizontalRadius = 150
const verticalRadius = 73
const horizontalMargin = 25
const verticalMargin = 10

var today = new Date()
var year = today.getFullYear()
var start = new Date(today.getFullYear(), 0, 0)
var diff = today - start
const oneDay = 1000 * 60 * 60 * 24
var dayNumber = Math.floor(diff / oneDay)
var date = dateFromDay(dayNumber)
dateButton.children[0].innerText = addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + date.getFullYear()

var degree = 2 * Math.asin(((dayNumber - 1) / (182.5 + (isLeapyear() ? 0.5 : 0))) - 1)
var x = horizontalRadius * Math.cos(degree)
var y = verticalRadius * Math.sin(degree)

earth.setAttribute("x", horizontalRadius + x - earthSize / 2 + horizontalMargin)
earth.setAttribute("y", verticalRadius - y - earthSize / 2 + verticalMargin)


earth.addEventListener("mousedown", mousedown)
earth.addEventListener("touchstart", mousedown)

addEventListener("mousemove", mousemove)
addEventListener("touchmove", mousemove)

addEventListener("mouseup", mouseup)
addEventListener("touchend", mouseup)


var dateButtonRect = dateButton.getBoundingClientRect()
datePicker.style.top = dateButtonRect.height + "px"
datePicker.style.right = 0
dateButton.style.height = dateButtonRect.height + "px"

function mousedown(e) {
  isPressing = true
}

function mousemove(e) {
  if (!isPressing)
    return

  const { clientX, clientY } = e.touches != null ? e.touches[0] : e

  const rect = ellipse.getBoundingClientRect()
  const ellipseCenterX = rect.x + rect.width / 2 + horizontalMargin
  const ellipseCenterY = rect.y + rect.height / 2 + verticalMargin
  degree = Math.atan2(ellipseCenterY - clientY, clientX - ellipseCenterX)

  let x = horizontalRadius * Math.cos(degree)
  let y = verticalRadius * Math.sin(degree)

  earth.setAttribute("x", horizontalRadius + x - earthSize / 2 + horizontalMargin)
  earth.setAttribute("y", verticalRadius - y - earthSize / 2 + verticalMargin)

  let oldDate = date

  var dayNumber = ((182.5 + (isLeapyear() ? 0.5 : 0)) * (Math.sin((degree) / 2) + 1) + 1)

  date = dateFromDay(dayNumber)

  if (oldDate.getDate() == 1 && oldDate.getMonth() == 0 && date.getDate() == 31 && date.getMonth() == 11) {
    year--
  } else if (oldDate.getDate() == 31 && oldDate.getMonth() == 11 && date.getDate() == 1 && date.getMonth() == 0) {
    year++
  }

  dayNumber = ((182.5 + (isLeapyear() ? 0.5 : 0)) * (Math.sin((degree) / 2) + 1) + 1)
  date = dateFromDay(dayNumber)

  if (date.getTime() > today.getTime()) {
    dateButton.children[0].classList.add("future")
    dateButton.children[0].innerText = "Fuck you Kyle Reese" // We don't like time travelers!
  } else {
    dateButton.children[0].classList.remove("future")
    dateButton.children[0].innerText = addZero(date.getDate()) + "/" + addZero(date.getMonth() + 1) + "/" + date.getFullYear()
  }
}

function dateFromDay(day) {
  var date = new Date(year, 0)
  return new Date(date.setDate(day))
}

function mouseup(e) {
  isPressing = false
}

function addZero(num) {
  return num < 10 ? "0" + num : num
}

function isLeapyear() {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}






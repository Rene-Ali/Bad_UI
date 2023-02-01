

window.onload = () => {
  startSetTimeoutAnimation();
  startAnimFrameAnimation();
};

function startSetTimeoutAnimation() {
  const refreshRate = 1000 / 60;
  const maxXPosition = window.innerWidth;
  let rect = document.getElementById('rect1');
  let speedX = 1;
  var positionX = 0;

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
  const maxXPosition = window.innerWidth;
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
});


import img1 from "@/assets/scissors.png";
import img2 from "@/assets/rock.png";
import img3 from "@/assets/paper.png";
import "./style.css";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const gameImage = $(".gameImage");
const userSelectedButton = $$(".option");

let currentImg = "";
let lastSelectImg = "";
const getRandomNumber = () => parseInt(Math.random() * 3);

function changeGameImage() {
  while (true) {
    currentImg = getRandomNumber();

    if (currentImg !== lastSelectImg) {
      lastSelectImg = currentImg;
      break;
    }
  }

  switch (currentImg) {
    case 0:
      gameImage.src = img1;
      gameImage.alt = "가위";
      break;
    case 1:
      gameImage.src = img2;
      gameImage.alt = "바위";
      break;
    case 2:
      gameImage.src = img3;
      gameImage.alt = "보";
      break;
    default:
  }
}

const getGameResult = (computer, user) => {
  const results = {
    draw: "무승부",
    win: "승리",
    lose: "패배",
  };

  if (computer === user) {
    return console.log(results.draw);
  }

  if (
    (computer === 0 && user === 2) ||
    (computer === 1 && user === 0) ||
    (computer === 2 && user === 1)
  ) {
    return console.log(results.lose);
  }

  return console.log(results.win);
};

window.onload = function () {
  const interval = setInterval(changeGameImage, 300);
  userSelectedButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      getGameResult(lastSelectImg, index);
      clearInterval(interval);
    });
  });
};

import img1 from "@/assets/scissors.png";
import img2 from "@/assets/rock.png";
import img3 from "@/assets/paper.png";
import "./style.css";

const $ = (selector) => document.querySelector(selector);
const gameImage = $(".gameImage");

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

window.onload = function () {
  setInterval(changeGameImage, 300);
};

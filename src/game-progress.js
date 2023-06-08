import img1 from "@/assets/scissors.png";
import img2 from "@/assets/rock.png";
import img3 from "@/assets/paper.png";

const imgArr = [img1, img2, img3];
const $ = (selector) => document.querySelector(selector);
const gameImage = $(".gameImage");
let currentIndex = 0;

export default function gameProgress() {
  gameImage.innerHTML = "";

  const img = new Image();
  img.src = imgArr[currentIndex];
  gameImage.appendChild(img);

  currentIndex = (currentIndex + 1) % imgArr.length;
}

import ImgRock from "./assets/img-1.png";

export default function gameProgress() {
  const gameImage = document.querySelector(".gameImage");
  const img = new Image();
  img.src = ImgRock;
  gameImage.appendChild(img);
}

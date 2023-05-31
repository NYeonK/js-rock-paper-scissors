export default function gameProgress() {
  const gameImage = document.querySelector(".gameImage");
  for (let i = 1; i < 4; i++) {
    const img = new Image();
    img.src = `src/assets/img-${i}.png`;
    gameImage.appendChild(img);
  }
  return "hello, webpack";
}

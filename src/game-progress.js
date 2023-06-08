import ImgRock from "@/assets/img-1.png";

export default function gameProgress(name) {
  const gameImage = document.querySelector(".gameImage");
  const test = document.querySelector("#test");
  test.appendChild(document.createTextNode("안녕?"));
  const img = new Image();
  img.src = ImgRock;
  gameImage.appendChild(img);

  console.log("hello", name);
}

//import gameProgress from "./game-progress";
//import "./index.css";

//gameProgress();
// console.log("안녕");
// const test = document.querySelector("#test");
// test.appendChild(document.createTextNode("안녕?"));

import { gameProgress } from "./game-progress";
function myFunc() {
  gameProgress("jack");
  console.log("myFunc");
}
myFunc();

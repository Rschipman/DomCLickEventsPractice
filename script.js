// Second button with click and mouse enter event
const btn2 = document.querySelector("#v2");
btn2.onclick = function () {
  console.log("You clicked me!!");
  console.log("I hope it was worth it!!");
};

function scream() {
  console.log("AAAAAAAAHHHH");
  console.log("STOP TOUCHING ME");
}
btn2.onmouseenter = scream;

//third button with ".addEventListener"
const btn3 = document.querySelector("#v3");
btn3.addEventListener("mousedown", function () {
  alert("BUZZ OFF");
});

function twist() {
  console.log("Twist!!");
}
function shout() {
  console.log("Shout!!");
}
// difference between .onevent vs .addEventListener
const tasBtn = document.querySelector("#tas");
// tasBtn.onclick = shout;
// tasBtn.onclick = twist;
tasBtn.addEventListener("click", twist);
tasBtn.addEventListener("click", shout);

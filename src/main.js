import "./style.css";

const code = document.getElementById("code");
const target = document.getElementById("target");
const targetText = document.getElementById("targetText");
const targetParent = document.getElementById("targetParent")

code.innerText =
  `talwinder-bg-red talwinder-text-center talwinder-justify-center 
  talwinder-items-center talwinder-flex`


const greenBtn = document.getElementById("greenBtn");
greenBtn.addEventListener("click", () => {
  target.style.backgroundColor = "green"
  code.innerText += " talwinder-bg-green"
  target.style.transform = "scale(1.1)";
  setTimeout(() => {
    target.style.transform = "scale(1)";
  }, 200);
  target.style.boxShadow = "0 0 20px rgba(0,255,0,0.5)";
})

// const leftBtn = document.getElementById("leftBtn");
// leftBtn.addEventListener("click", () => {
//   targetParent.style.justifyContent = "left"
//   code.innerText += " talwinder-text-left"
//   targetParent.style.transform = "scale(1.1)";
//   setTimeout(() => {
//     targetParent.style.transform = "scale(1)";
//   }, 200);
//   targetParent.style.boxShadow = "0 0 20px rgba(0,255,0,0.5)";
// })


const roundedBtn = document.getElementById("roundedBtn");
roundedBtn.addEventListener("click", () => {
  target.style.borderRadius = "50%"
  code.innerText += " talwinder-rounded-full"
  target.style.transform = "scale(1.1)";
  setTimeout(() => {
    target.style.transform = "scale(1)";
  }, 200);
  target.style.boxShadow = "0 0 20px rgba(0,255,0,0.5)";
})


const sizeBtn = document.getElementById("sizeBtn");
sizeBtn.addEventListener("click", () => {
  targetText.style.fontSize = "3.70rem"
  code.innerText += " talwinder-text-6xl"
  targetText.style.transform = "scale(1.1)";
  setTimeout(() => {
    targetText.style.transform = "scale(1)";
  }, 200);
  targetText.style.boxShadow = "0 0 20px rgba(0,255,0,0.5)";
})

const borderBtn = document.getElementById("borderBtn");
borderBtn.addEventListener("click", () => {
  target.style.border = "5px solid black"
  code.innerText += " talwinder-border-black"
  
})



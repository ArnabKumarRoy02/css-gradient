let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let outputColor = document.getElementById("output-color");
let outputCode = document.getElementById("output-code");
let hexString = "0123456789abcdef";
let contMax = document.querySelector('.container-max')

let randomColor = () => {
    let hexCode = "#";
    for(i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    outputColor.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    outputCode.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
    document.body.style.background = outputColor.style.background;
}

copyBtn.addEventListener("click", () => {
    outputCode.select();
    document.execCommand("copy");
});

generateBtn.addEventListener("click", generateGrad);
window.onload = generateGrad;
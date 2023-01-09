const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "media/Firefox-icon.png") {
    myImage.setAttribute("src", "media/firefox2.png");
  } else {
    myImage.setAttribute("src", "media/firefox2.jpeg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
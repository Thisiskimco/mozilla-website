// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// const myImage = document.querySelector("img");

// myImage.onclick = function() {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "media/Firefox-icon.png") {
//     myImage.setAttribute("src", "media/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "media/Firefox-icon.png");
//   }
// };


// let myButton = document.querySelector("button");
// //let myHeading = document.querySelector("h1");


// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Mozilla is cool, ${myName}`;
//   }
// }

// myButton.onclick = () => {
//   setUserName();
// };







function setImageVisible() {
  var x = document.getElementById("Foxlogo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}










// Define a Function
 function sayOuch() {
  alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;





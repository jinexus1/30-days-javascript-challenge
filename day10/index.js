// script.js
const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");
const image = document.getElementById("myImage");

button.addEventListener("click", function () {
  paragraph.textContent = "This is the new text!";
});

image.addEventListener("dblclick", function () {
  image.style.display = image.style.display === "block" ? "none" : "block";
});
const hoverElement = document.getElementById('hoverElement');

        hoverElement.addEventListener('mouseover', function() {
            hoverElement.style.backgroundColor = 'lightcoral';
        });

        hoverElement.addEventListener('mouseout', function() {
            hoverElement.style.backgroundColor = 'lightblue';
        });
const inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});
const inputField1 = document.getElementById("inputField");
const outputParagraph = document.getElementById("outputParagraph");

inputField.addEventListener("keyup", function () {
  outputParagraph.textContent = "Current value: " + inputField1.value;
});
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

const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission
  const formData = new FormData(form);
  console.log(formData); // log form data to console
  // you can also convert formData to an object and log that instead
  const formDataObject = {};
  for (const [key, value] of formData) {
    formDataObject[key] = value;
  }
  console.log(formDataObject);
});

const select=document.getElementById('mySelect')
const paragraph1=document.getElementById('selectedValue')
select.addEventListener("change", () => {
  const selectedValue = select.value;
  paragraph1.textContent = `You selected: ${selectedValue}`;
});
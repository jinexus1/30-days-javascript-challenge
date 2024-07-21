//Activity-1
document.getElementById("demo").innerHTML = "Hello World!";
document.getElementsByClassName("dem02").innerHTML = " hello this is demo to";
//Activity-2
let newDiv = document.createElement("div");

// Add content to the div
newDiv.innerHTML = "Hello, this is a new div!";

// Append the div to the body
document.body.appendChild(newDiv);
let newLi = document.createElement("li");
newLi.innerHTML = "Item 3";
document.getElementById("un-list").appendChild(newLi);
let removeElement = document.getElementById("remove");

if (removeElement) {
  //if the removeElement exit
  removeElement.remove();
}


// Activity-1
document.getElementById("demo").innerHTML = "Hello World!";
document.getElementsByClassName("dem02")[0].innerHTML =
  " hello this is demo to";

// Activity-2
let newDiv = document.createElement("div");
newDiv.innerHTML = "Hello, this is a new div!";
document.body.appendChild(newDiv);

let newLi = document.createElement("li");
newLi.innerHTML = "Item 3";
document.getElementById("un-list").appendChild(newLi);

let removeElement = document.getElementById("remove");
if (removeElement) {
  removeElement.remove();
}

function removeLastListElement() {
  let ul = document.getElementById("un-list");
  if (ul.children.length > 0) {
    ul.removeChild(ul.lastElementChild);
  }
}

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
//changing the attribute of img to a
function changeAttributes() {
  // Change the src attribute of the image
  let img = document.getElementById("myDog");
  img.setAttribute("src", "new_image.jpg");

  // Change the href attribute of the link
  let link = document.getElementById("myLink");
  link.setAttribute("href", "https://newsite.com");
  link.textContent = "New Website";
}

function addClass(){
  let element=document.getElementById('myElement')
  element.classList.add('highlight')
}
function removeClass(){
  let element=document.getElementById('myElement')
  element.classList.remove('highlight')
}
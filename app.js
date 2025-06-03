console.log('document:-',document.title);
console.log('document body:-',document.body);
document.write('<a href="https://www.tpointtech.com/javascript-dom">Hello HI</a><br/>')
document.writeln('<a href="https://www.tpointtech.com/javascript-dom">Hello ln</a>')
let heading = document.getElementById('heading')
heading.style.color = "#708090"
let notes = document.getElementsByClassName("note")
notes[0].style.color = "blue";
notes[0].innerHTML = "Notes Started"
notes[1].style.color = "red";

let links = document.getElementsByTagName("li")
links[0].innerHTML = "Item A is Updated"
links[0].style.color = "green"
links[1].textContent ="Item B is (updated)"
links[1].style.color = "orange"

let boxes = document.querySelector(".box")
boxes.style.backgroundColor = "black"
boxes.style.color = "white"
boxes.innerHTML = "Box 1 by class is updated"
let boxesById = document.querySelector("#box1")
boxesById.style.backgroundColor = "green"
boxesById.style.color = "white"
boxesById.innerHTML = "Box 1 by id is updated"


let texts = document.querySelectorAll('.textforClass')
  texts.forEach(el =>{
      el.style.color = "black"
      el.style.backgroundColor = "gray"
      el.innerHTML = "text content is updated"
  });

document.getElementById("content").innerHTML = "<strong>New Content</strong>";

let image = document.getElementById('img')
image.setAttribute("src","https://img.freepik.com/premium-photo/bouquet-roses_531064-8784.jpg")
image.style.width = '20%'
image.style.height = '30%'

//append one item
let list = document.createElement("li")
list.textContent = "New Item1"
document.getElementById('list').appendChild(list)
//append more than one

const items = [ "New Item 2", "New Item 3","New Item 4"];
  const list2 = document.getElementById("list");
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    list2.appendChild(li);
  });

function clickbtn(){
    // document.getElementById('remText').remove()
    const para = document.getElementById('remText');
    if (para.style.display === "none") {
      para.style.display = "block";  // Show it again
    } else {
      para.style.display = "none";   // Hide it
    }
  }

  const user = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user);
console.log('jsonString:-',jsonString);
const prettyString = JSON.stringify(user, null, 2);
console.log('prettyString:-',prettyString);


const jsonStrings = '{"name":"Alice","age":25}';
const users = JSON.parse(jsonString);
console.log(users); // Alice


function validateForm(){
  const name = document.getElementById("name").value;
  const error = document.getElementById("error");
   const email = document.getElementById("email").value;
  if(name.trim() === ""){
    error.textContent = "Name is required!"
    return false;
  }
  if(name.trim().length <5){
      error.textContent = "Name Length must be more than 5"
      return false;
  }
  if(email.trim() === ""){
    error.textContent = "Email is required!"
    return false;
  }
  error.textContent = "";
  return true;
}
try {
  let result = 10 / 0;
  console.log("Result:", result);

  // Simulate an error
  // throw new Error("Something went wrong!");
} catch (err) {
  console.error("Caught an error:", err.message);
} finally {
  console.log("This always runs.");
}
function checkAge(age) {
  if (age < 18) {
    throw new Error("Underage! Access denied.");
  }
  return "Access granted.";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.log(error.message);  // Output: Underage! Access denied.
}
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error!");
} catch (error) {
  console.log(error);    // CustomError
  console.log(error.message); // This is a custom error!
}



let userRoles = new Map();
userRoles.set("admin", "full access");
userRoles.set("editor", "edit content");
console.log(typeof userRoles);
console.log(userRoles);//Map(2) {'admin' => 'full access', 'editor' => 'edit content'}
// [[Entries]]
// 0
// : 
// {"admin" => "full access"}
// key
// : 
// "admin"
// value
// : 
// "full access"
// 1
// : 
// {"editor" => "edit content"}
// key
// : 
// "editor"
// value
// : 
// "edit content"
console.log(userRoles.get("admin")); // full access
console.log(userRoles.size); // 2


let ws = new WeakSet();
let obj = { name: "John" };

ws.add(obj);
console.log(ws.has(obj)); // true
console.log(ws);

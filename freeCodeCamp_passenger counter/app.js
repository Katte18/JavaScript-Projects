let countEl = document.getElementById("count-el"); // step 3: to initialize HTML element to update
let welcomeEl = document.getElementById("welcome-el");
let saveEl  = document.getElementById("save-el");


let initCount = 0;  // step 1: to initialize the variable

function increment () {  // step 2: to create a function to increment the number of passengers
  initCount += 1; // step 2
  countEl.innerText = initCount; // step 4: actually change the element

}

function save() {
    let countStr = initCount + "; ";
    saveEl.textContent += countStr; // to have spaces and replaced innerText
    countEl.textContent = 0;
    initCount = 0;
}

function clear() {
    saveEl.textContent = initCount;

}

let nameUser = "User Name";
let greet = "Welcome to application ";

function welcome () {
    let message = greet + nameUser;
    welcomeEl.innerText = message;
    welcomeEl.innerText += "!";
}

welcome();

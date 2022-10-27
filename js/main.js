//Expressions are lines of code that resolve to a value.
//Expressions are made up of operands and operators, usually short (one line of code).
//Operators do the work eg. +, *, &&, > etc
//Operands are the values being worked (operated) on.

//Assigning values using an operator, =

let a = 7;
let b = 22;

//assigning value using = , and creating that value using +
let c = a + b;

console.log(c);

//more expressions performing maths

let d = c * (a + b);

console.log(d);

//concatenation

let title1 = 'Turtle ';
let title2 = 'Cliffs';
let title = title1 + title2;

console.log(title);

//Conditional/Ternary operator

const greeting = (person) => {
  const name = person ? person.name : "Sailor";
  return `Ahoy, ${name}`;
}

console.log(greeting({ name: "Shelby" })); 
console.log(greeting(null));       

// if else

const marinePark = 3;

if (marinePark >= 6) {
  console.log("This beach is in a Marine Park.");
} else {
  console.log("This beach is suitable for Shell Collection.");
}



// Declarations are hoisted, therefore, over riding the text in this button in html.

let shellBtn; 


elem = document.getElementById("shell-btn"); 

elem.innerHTML = "Start Button"; 

document.getElementById('shell-btn').onclick = changeColor;   
function changeColor() {
document.body.style.color = "#439EDB";
return false;
}
  
// TURN THIS INTO AN IF ELSE RESULTING FROM A SELECTION ON PAGE
let buttonCLick = true;
if(buttonCLick) {
  console.log("Text is light blue.");
} else {
  console.log("Text is dark blue")
}


const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setShell);

function setShell() {
  const choice = select.value;

  if (choice === 'cowry') {
    para.textContent = 'Often used in ancient times as currency! Cowry shells stay shiny due to the animal covering the outside of the shell with part of its body during its life';
  } else if (choice === 'trochus') {
    para.textContent = 'A spiralling shell of a marine snail that rises to a conical point. Trochus have been a mainstay of fashion for decades - the "mother of pearl" finish used for buttons and jewellery.';
  } else if (choice === 'clam') {
    para.textContent = 'The northern waters of Western Australia are home to five of the seven known giant clam species. Maxing out at 260 kgs the largest variety is equally remarkable due to the vivid blue colouring of the living animal.';
  } else if (choice === 'turban') {
    para.textContent = 'Often referred to as "periwinkles", this spiral shelled marine snail is unusual because it keeps itself safe with a hard shell door called the operculum.Turban shell operculum are round, flat with a spiral from the centre and are often called "cats eyes".';
  } else {
    para.textContent = '';
  }
}


  
    



let input = document.getElementById("inputField"); //toegang tot input
let button = document.getElementById("addToDo"); // toegan tot button
let container = document.getElementById("toDoContainer"); //toegang tot container

button.addEventListener("click", function(){ //clickfunctie die toegevoegd word
    let para = document.createElement("p"); //maakt paragraaf
    para.innerText = input.value; //haalt de waarda van input

    container.appendChild(para); //zet de waarde in container
   
    input.value = ""; //maakt hem weer leeg
});

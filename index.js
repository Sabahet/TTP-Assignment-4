//Hover
let box = document.querySelector(".dont_hover")

// Button Problem
let text = document.querySelector('.text')
let button1 = document.querySelector(".first_button")
let button2 = document.querySelector(".second_button")


// Password Problem 
let submitPass = document.querySelector(".submit")
let addingAH1 = document.createElement('h1');
let password = document.getElementById("#pass")
let h = document.getElementById("h1");

console.log(password)

//Functions 
submitPass.onclick = function() {

        if(document.getElementById("pass").value == 12345678){
h.insertAdjacentHTML("afterend", "Correct!");
    } else {
        alert("Password is incorrect")
        
    }
 
}


box.addEventListener("mouseover" ,event =>{
    console.log("He Hovered")
    alert("Why dont you listen to me?")

})

button1.onclick = function() {
    text.innerText = "I'm right";
    console.log("Button one pushed")
  }
  
  button2.onclick = function() {
    text.innerText = "No, I'm right";
    console.log("Button one pushed")
  }




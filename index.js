let box = document.querySelector(".dont_hover")
box.addEventListener("mouseover" ,event =>{
    console.log("He Hovered")
    alert("Why dont you listen to me?")

})


document.getElementById("submit").addEventListener("click", submit());
document.getElementById("first_button").addEventListener("click",buttonOne())
function submit(){
    
let password = document.getElementById("pass").value
let addingAH1 = document.createElement('h1');
//appendChild(addingAH1);
console.log("IT WORKS")

console.log(password)
        if(password === 12345678){
            alert("Password is correct!");
    } else {
        alert("Password is incorrect")
        
    }
}

function buttonOne(){
    let place = document.querySelector("Print")
    place.insertAdjacentHTML("I'm right</h4>");
    console.log("Button one pushed")
}


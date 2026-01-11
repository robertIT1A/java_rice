// If statement 
let pasok =  document.getElementById("above")
let labas =  document.getElementById("under")
const ACTIVE = document.querySelector(".open") // querySelector is for css
const INACTIVE = document.querySelector(".close")
const ALERT = document.querySelector(".container")
// variables.style.yung gusto mo baguhin sa css = "yung gusto mo gawin"
pasok.style.backgroundColor = "orange"
labas.style.backgroundColor = "black"
labas.style.color = "white"




pasok.onclick = function() {
    ACTIVE.classList.add("pop")
    ALERT.classList.add("remove")
}
labas.onclick = function() {
    INACTIVE.classList.add("pop")
    ALERT.classList.add("remove")
}
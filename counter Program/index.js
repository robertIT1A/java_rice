let value;

document.getElementById(`decrease`).textContent = "Decrease"
document.getElementById(`reset`).textContent = "Reset"
document.getElementById(`increase`).textContent = "Increase"


const decreaseBtn = document.getElementById(`decrease`);
const resetBtn = document.getElementById(`reset`);
const IncreaseBtn = document.getElementById(`increase`);
const countlabel =document.getElementById(`countlabel`);
let count = 0;



IncreaseBtn.onclick = function(){
    count ++;
    countlabel.textContent = count
}

decreaseBtn.onclick = function(){
    count --;
    countlabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count
}


// document.getElementById(`decrease`).onclick = function(){
//     value = document.getElementById(`countlabel`)
//     value = Number(value);
//     document.getElementById(`countlabel`).textContent = value
// }


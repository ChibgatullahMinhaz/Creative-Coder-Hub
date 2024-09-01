const empties = document.querySelectorAll(".empty");
const box = document.querySelector(".img-box");

// drag enter
function dragEnter(e){
    e.preventDefault();
    this.classList.add("hold")
    console.log("drag enter")
}

// drag leave
function dragLeave(){
    this.classList.remove("hold")
    console.log("drag leave")
}

// drag over
function dragOver(e){
    e.preventDefault();
    console.log("dragOver")
}


function drop(){
    this.classList.remove("hold")
    this.appendChild(box)
    console.log("drop")
}

for( let empty of empties){
    empty.addEventListener("dragenter",dragEnter)
    empty.addEventListener("dragover",dragOver)
    empty.addEventListener("dragleave",dragLeave)
    empty.addEventListener("drop",drop)
}

//create variables
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// draggable event listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


// loop through empties and call drag events

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('drop', dragDrop);
    
    }

//primary pic drag functions

function dragStart() {
this.className += " hold";
 setTimeout(()=> this.className = "invisible", 0);

}

function dragEnd() {
   this.className = "fill";
}

// emptirs drag functions 

function dragOver(e) {
e.preventDefault();

}

function dragEnter(e) {
e.preventDefault();
this.className += " hovered";
}

function dragLeave() {
this.className = "empty";
}

function dragDrop() {
this.className = "empty";    
this.append(fill);
}

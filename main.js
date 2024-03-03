const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//To add the to do list of items
function addTask () {
    //if input box is empty alert msg pop up's
    if(inputBox === ''){
        alert("You must write something!!");
    }
    //to create a list elements and also we have appended cross icon
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
}

//when user click on the item , the respected item should be checked and if click on cross then the item should remove 
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

//Used to save the data in the localstorage

function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//used to display the saved data on the screeen 

function showTask () {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask ();

//Enter button is used to add items on the screeen

inputBox.addEventListener('keyup',(e) =>{
    if(e.keyCode === 13){
        addTask();
    }
    // else if(e.keyCode === 46){
    //     if(e.target.tagName === "SPAN"){
    //         e.target.parentElement.remove();
    //         saveDate();
    //     }
    // }
});




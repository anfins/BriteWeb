
const studentButton = document.getElementById("student-button"); //selecting for the user's input from the DOM

const eduButton = document.getElementById("educator-button"); //selecting for the user's input from the DOM

const eduContent = document.getElementById("educator-content");

const studentContent = document.getElementById("student-content");



//Event Listeners

studentButton.addEventListener("click", viewStudent);




function viewEducator(event){
    event.preventDefault();

    const item = event.target;
    console.log(item);
    eduContent.style.display = "flex"; //making the dark mode toggle visible
    studentContent.style.display = "none";
    

}

function viewStudent(event){
    event.preventDefault();

    const item = event.target;
    console.log(item);
    studentContent.style.display = "flex"; //making the dark mode toggle visible
    eduContent.style.display = "none";
    

}
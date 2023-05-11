
const studentButton = document.getElementById("student-button"); //selecting for the user's input from the DOM

const eduButton = document.getElementById("educator-button"); //selecting for the user's input from the DOM

const eduContent = document.getElementById("educator-content");

const studentContent = document.getElementById("student-content");



//Event Listeners

eduButton.addEventListener("click", viewEducator);


studentButton.addEventListener("click", viewStudent);





function viewEducator(event){
    event.preventDefault();

    const item = event.target;
    console.log(item);
    eduContent.style.display = "flex"; 
    eduContent.style.flexDirection = "column";
    studentContent.style.display = "none"; 

}

function viewStudent(event){
    event.preventDefault();

    const item = event.target;
    console.log(item);
    studentContent.style.display = "flex";
    studentContent.style.flexDirection = "column"; 
    eduContent.style.display = "none"; 

}
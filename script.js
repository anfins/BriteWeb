  
const observer = new IntersectionObserver((entries) => { //items given the hidden class will appear when seen on screen for the first time and stay on the screen until reload

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show"); //adds transition

        } 
    });
});

const observerB = new IntersectionObserver((entries) => { //items given the hidden-return class will appear on screen when seen, but disappear again when the user scrolls past their instance 

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show-return"); //adding item to the html

        } 
        else{
            entry.target.classList.remove("show-return"); //removing item from view
        }
    });
});


const observerC = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show-slower");

        } 
  
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsReturn = document.querySelectorAll(".hidden-return");
const hiddenElementsSlower = document.querySelectorAll(".hidden-slower");


hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsReturn.forEach((el) => observerB.observe(el));
hiddenElementsSlower.forEach((el) => observerC.observe(el));

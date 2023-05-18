  
const observerLeft = new IntersectionObserver((entries) => { // items given the hidden class will appear when seen on screen for the first time and stay on the screen until reload

    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-left"); // adds transition
        } 
    });
});

const observerRight = new IntersectionObserver((entries) => { // items given the hidden class will appear when seen on screen for the first time and stay on the screen until reload

    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-right"); // adds transition
        } 
    });
});

const observerB = new IntersectionObserver((entries) => { // items given the hidden-return class will appear on screen when seen, but disappear again when the user scrolls past their instance 

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show-return"); // adding item to the html

        } 
        else{
            entry.target.classList.remove("show-return"); // removing item from view
        }
    });
});


const observerC = new IntersectionObserver((entries) => { // simply a longer transition

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show-slower");

        } 
  
    });
});

const observerD = new IntersectionObserver((entries) => { //simply a longer transition

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show-fly");

        } 
  
    });
});


const hiddenLeftElements = document.querySelectorAll(".hidden-left");
const hiddenRightElements = document.querySelectorAll(".hidden-right");
const hiddenElementsReturn = document.querySelectorAll(".hidden-return");
const hiddenElementsSlower = document.querySelectorAll(".hidden-slower");
const hiddenElementsFly = document.querySelectorAll(".hidden-fly");


hiddenLeftElements.forEach((el) => observerLeft.observe(el));
hiddenRightElements.forEach((el) => observerRight.observe(el));
hiddenElementsReturn.forEach((el) => observerB.observe(el));
hiddenElementsSlower.forEach((el) => observerC.observe(el));
hiddenElementsFly.forEach((el) => observerD.observe(el));

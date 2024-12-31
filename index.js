// Navigation Animation
var tl = gsap.timeline();
tl.from(".nav h1", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.2
})
.from(".nav h3", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: 0.5 // Corrected typo
})
.from(".nav h2", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3 // Corrected typo
});

// Dark Mode Toggle
let darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default action (immediate jump)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth" // Scroll with smooth animation
        });
    });
});

// Home GSAP Animation
gsap.from(".home h2", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1
});

gsap.from(".home h1", {
    opacity: 0,
    duration: 0.5,
    delay: 1
});

gsap.from(".home button", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1
});
//projets
gsap.from(".project h1",{
    opacity:0,
    y:-30,
    duration:0.9,
    delay:1
})

//form
let myform=document.querySelector("#myform");   
let formoutput=document.querySelector("#formoutput")
myform.addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let msg=document.getElementById("msg").value;
    formoutput.innerHTML=`${name},${email} , ${msg}`;
    
})
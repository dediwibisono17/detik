document.addEventListener("DOMContentLoaded", function() {
    // code...
    document.getElementsByClassName('wrap-loading')[0].style.display = "none";
});

$(document).ready(function(){
    new WOW().init();
})
let bird = document.getElementById("bird");
// let bird2 = document.getElementById("bird2");
let org = document.getElementById("org");
let old = document.getElementById("old");
let text = document.getElementById("text");
// console.log(1);
window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    console.log(value);
    text.style.top = 50 + value * -0.5 + '%';
    bird.style.bottom = value * 1.5 + 'px';
    bird.style.left = value * 1 + 'px';
    // bird2.style.bottom = value * 1.5 + 'px';
    // bird2.style.left = value * -1 + 'px';
    old.style.left = +value * 1.5 + 'px';
    org.style.left = value * 1 + 'px';
})

$(()=>{
})


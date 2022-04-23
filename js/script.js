document.addEventListener("DOMContentLoaded", function() {
    // code...
    document.getElementsByClassName('wrap-loading')[0].style.display = "none";
});

$(document).ready(function() {
    new WOW().init();
})
let bird = document.getElementById("bird");
// let bird2 = document.getElementById("bird2");
let org = document.getElementById("org");
let old = document.getElementById("old");
let text = document.getElementById("text");
// console.log(1);
window.addEventListener('scroll', function() {
    let value = this.window.scrollY;
    // console.log(value);
    text.style.top = 50 + value * -0.5 + '%';
    bird.style.bottom = value * 1.5 + 'px';
    bird.style.left = value * 1 + 'px';
    // bird2.style.bottom = value * 1.5 + 'px';
    // bird2.style.left = value * -1 + 'px';
    old.style.left = +value * 1.5 + 'px';
    org.style.left = value * 1 + 'px';
})

$.ajax({
    url: 'js/data.json',
    type: 'GET',
    success: (response) => {
        //hero
        $(".bg-top").append(`
            <img src="${response.hero.img[0]}" alt="Hero Bacground" title="Hero Background"/>
        `)
        $("#bird").append(`
            <img src="${response.hero.img[1]}" alt="Hero Bacground" title="Hero Background"/>
        `)
        $("#old").append(`
            <img src="${response.hero.img[2]}" alt="Hero Bacground" title="Hero Background"/>
        `)
        $("#org").append(`
            <img src="${response.hero.img[3]}" alt="Hero Bacground" title="Hero Background"/>
        `)
        $("#text").text(`${response.hero.title}`)

        // kronologi
        $(".kronologi").text(response.kronologi.title);
        var a
        for (a = 0; a < response.kronologi.text.length; a++) {
            $(".kronologi-text").append(`<p>${response.kronologi.text[a]}</p>`)

        }
        $(".mobil").append(`
            <img src="${response.kronologi.img[0]}" alt="">
        `)
        $(".kejar").append(`
            <img src="${response.kronologi.img[1]}" alt="">
        `)

        //polisi tegaskan
        $(".tegaskan").text(`${response.tegaskan.title}`)
        $("t-1").text(response.tegaskan.text)
    }
})
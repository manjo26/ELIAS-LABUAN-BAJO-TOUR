// ==========================
// NAVBAR
// ==========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }

});



const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",function(){

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

window.addEventListener("load",function(){

const preloader=document.getElementById("preloader");

if(preloader){

preloader.style.display="none";

}

});

// ==========================
// HERO BACKGROUND SLIDER
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const backgrounds = [
        "assets/images/hero1.jpg",
        "assets/images/hero2.jpg",
        "assets/images/hero3.jpg",
        "assets/images/hero4.jpg",
        "assets/images/gallery-2.jpg"
    ];

    let currentBackground = 0;

    function changeBackground() {

        hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
        url('${backgrounds[currentBackground]}')`;

        currentBackground++;

        if (currentBackground >= backgrounds.length) {
            currentBackground = 0;
        }
    }

    // Tampilkan gambar pertama
    changeBackground();

    // Ganti setiap 5 detik
    setInterval(changeBackground, 5000);

});
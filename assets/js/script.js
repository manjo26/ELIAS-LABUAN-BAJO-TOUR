<<<<<<< HEAD
// ==========================
// NAVBAR
// ==========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }

});


// ==========================
// HERO SLIDER
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.getElementById("heroImage");

    if (!hero) {
        console.log("Hero Image tidak ditemukan!");
        return;
    }

    const heroImages = [

        "assets/images/hero1.jpg",
        "assets/images/hero2.jpg",
        "assets/images/hero3.jpg",
        "assets/images/hero4.jpg",
        "assets/images/hero5.jpg",
        "assets/images/hero6.jpg",
        "assets/images/hero7.jpg",
        "assets/images/hero8.jpg",
        "assets/images/hero9.jpg",
        "assets/images/hero10.jpg",
        "assets/images/hero11.jpg",

    ];

    let current = 0;

    setInterval(function () {

        hero.style.opacity = "0";

        setTimeout(function () {

            current = (current + 1) % heroImages.length;

            hero.src = heroImages[current];

            hero.style.opacity = "1";

        }, 500);

    }, 4000);

});
/* ==========================
LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentImage = 0;

if (
    galleryImages.length > 0 &&
    lightbox &&
    lightboxImg &&
    closeBtn &&
    prevBtn &&
    nextBtn
) {

    galleryImages.forEach((img, index) => {

        img.addEventListener("click", () => {

            currentImage = index;

            showImage();

            lightbox.style.display = "flex";

        });

    });

    function showImage() {

        lightboxImg.src = galleryImages[currentImage].src;

    }

    nextBtn.addEventListener("click", () => {

        currentImage = (currentImage + 1) % galleryImages.length;

        showImage();

    });

    prevBtn.addEventListener("click", () => {

        currentImage--;

        if (currentImage < 0) {

            currentImage = galleryImages.length - 1;

        }

        showImage();

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

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

=======
// ==========================
// NAVBAR
// ==========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }

});


// ==========================
// HERO SLIDER
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.getElementById("heroImage");

    if (!hero) {
        console.log("Hero Image tidak ditemukan!");
        return;
    }

    const heroImages = [

        "assets/images/hero1.jpg",
        "assets/images/hero2.jpg",
        "assets/images/hero3.jpg",
        "assets/images/hero4.jpg",
        "assets/images/hero5.jpg",
        "assets/images/hero6.jpg",
        "assets/images/hero7.jpg",
        "assets/images/hero8.jpg",
        "assets/images/hero9.jpg",
        

    ];

    let current = 0;

    setInterval(function () {

        hero.style.opacity = "0";

        setTimeout(function () {

            current = (current + 1) % heroImages.length;

            hero.src = heroImages[current];

            hero.style.opacity = "1";

        }, 500);

    }, 4000);

});
/* ==========================
LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentImage = 0;

if (
    galleryImages.length > 0 &&
    lightbox &&
    lightboxImg &&
    closeBtn &&
    prevBtn &&
    nextBtn
) {

    galleryImages.forEach((img, index) => {

        img.addEventListener("click", () => {

            currentImage = index;

            showImage();

            lightbox.style.display = "flex";

        });

    });

    function showImage() {

        lightboxImg.src = galleryImages[currentImage].src;

    }

    nextBtn.addEventListener("click", () => {

        currentImage = (currentImage + 1) % galleryImages.length;

        showImage();

    });

    prevBtn.addEventListener("click", () => {

        currentImage--;

        if (currentImage < 0) {

            currentImage = galleryImages.length - 1;

        }

        showImage();

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}

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

>>>>>>> 6871850083dfdb86c5c02cebe7c4802e6cb4ca7d
});
import "./index.css";


const bannerText = document.getElementsByClassName("banner-txt");
const bannerPhoto = document.getElementsByClassName("banner-photo");
const bannerSlide = document.getElementsByClassName("slick-slide");
const nextBtn = document.getElementById("nextBtn");
const preBtn = document.getElementById("preBtn");

let i = 0;  // 第一個banner記數用
setInterval(()=> {
    bannerPhoto[i].classList.add("hidden");
    bannerText[i].classList.add("hidden");
    i++;
    if (i >= bannerText.length) {
        i = 0;
    }

    bannerText[i].classList.remove("hidden");
    bannerPhoto[i].classList.remove("hidden");
}, 3000);


let j = 0;  // 第二個banner記數用
// 「 > 」下一個
nextBtn.addEventListener("click", ()=>{
    bannerSlide[j].classList.add("hidden");
    j++;
    if (j >= bannerSlide.length - 1) {
        nextBtn.classList.add("opacity-20");
        nextBtn.disabled = true;
    }
    if (j != 0) {
        preBtn.classList.remove("opacity-20");
    }
    bannerSlide[j].classList.remove("hidden");
})

preBtn.classList.add("opacity-20");

// 「 < 」上一個
preBtn.addEventListener("click", ()=>{
    bannerSlide[j].classList.add("hidden");
    j--;
    if (j == 0) {
        preBtn.classList.add("opacity-20");
    } else {
        preBtn.classList.remove("opacity-20");
    }
    if (j != 2) {
        nextBtn.classList.remove("opacity-20");
        nextBtn.disabled = false;
    }
    bannerSlide[j].classList.remove("hidden");
})



// var n1 = window.getComputedStyle(document.getElementsByClassName("deco-box")[0],'::before');
// var n2 = window.getComputedStyle(document.getElementsByClassName("deco-box")[0],'::after');
// console.log("n=>", n1['backgroundImage'], n2['backgroundImage']);


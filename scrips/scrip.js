let videoBtn = document.querySelectorAll('.vid-btn'); 
var header = document.querySelector('.header');  
var headerMobi = document.querySelector('.header-mobi');  
var menuMobile = document.querySelector('.menu-mobile-btn'); 
var naviMobile = document.querySelector('.navigation-mobi');  
const naviHeight = naviMobile.clientHeight
// Toggle Slider
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
}); 
// Auto Play Owlcarousel Tour
$('.owl-carousel').owlCarousel({ 
    autoplay: true, 
    autoplayTimeout: 3000, 
    stagePadding: 25,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
}) 
// Scroll to disappear header
$(document).ready(function () {
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop(); 
        if (pos_body <= 380) {
            header.classList.add('header--scroll'); 
        } else { 
            header.classList.remove('header--scroll'); 
        }   
    });
}) 
// Scroll to disappear header MOBILE
$(document).ready(function () {
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop();   
        console.log(pos_body);
        if (pos_body <= 380) {  
            headerMobi.classList.add('header--scroll'); 
        } else { 
            headerMobi.classList.remove('header--scroll'); 
        }   
    });
}) 
// Click Scoll Tp Top Website
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 100,
        left: 0,
        behavior: "smooth"
    });
});  
// Mobile 
menuMobile.onclick = function() {    
    var isClosed = naviMobile.clientHeight === naviHeight;
    if (isClosed) { 
        naviMobile.classList.remove('hide') 
    } else { 
        naviMobile.classList.add('hide') 
    }
}
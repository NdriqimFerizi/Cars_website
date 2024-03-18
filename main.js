$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        // 1000: {
        //     items: 3
        // }
    }
})


var menuBtn = document.querySelector('.menu-mobile-btn');

var over = document.querySelector('.overlay');

// Add event listener to menu button
menuBtn.addEventListener('click', function () {
    // Toggle the 'active' class on menu
    over.classList.toggle('active-overlay');
});




// var rotateImg = document.querySelector('.menu-mobile-btn');

// rotateImg.addEventListener('click', function () {
//     rotateImg.classList.toggle('rotate');
// });


var rotateImg = document.querySelector('.menu-mobile-btn');
var isRotated = false;

rotateImg.addEventListener('click', function () {
    if (isRotated) {
        rotateImg.style.transform = 'rotate(0deg)';
        isRotated = false;
    } else {
        rotateImg.style.transform = 'rotate(45deg)';
        isRotated = true;
    }
});









$(document).ready(function () {

    $('.slider-pro').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.slider-problog').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


    function initSliderMax768() {
        const $slider = $('.slider-img-port');
        const width = window.innerWidth;

        if (width <= 768) {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    dots: false,
                    infinite: true,
                    arrows: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }
        } else {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        }
    }

    $(document).ready(function () {
        initSliderMax768();
    });

    $(window).on('resize', function () {
        initSliderMax768();
    });
})


const bio = document.querySelector('#hide');



function say() {
    if (bio.style.display === 'none') {
        bio.style.display = 'flex';
    } else {
        bio.style.display = 'none';
    }
}


const hio = document.querySelector('#hi');
const anchor = document.querySelector('#lik')


function mello() {
    const hidden = getComputedStyle(hio).display === 'none';
    hio.style.display = hidden ? 'block' : 'none';
    anchor.innerText = hidden ? 'More Project' : 'less project';
}




// function pop() {
//     if(mello.style.display === 'none'){
//         mello.style.display = 'flex';
//     }else{
//         mello.style.display = 'none';
//     }
// }



















$(document).ready(function(){
    $('.carousel').slick({
        speed:600,
        dots:true,
        arrow: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: false
              }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true
                }
            }
        ]
    });
    $('.branches__carousel').slick({
        speed:600,
        dots:true,
        arrow: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arr_left2.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arr_right2.png"></button>',
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i]).data('title');
            return '<a class="branches__carousel__item"> '+title+' </a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false
                }
            }
        ]
    });
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu__list'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger'),
        footerTitle = document.querySelector('#modules'),
        footerList = document.querySelector('#modules__list');
        footerTitle2 = document.querySelector('#branches'),
        footerList2 = document.querySelector('#branches__list');
        footerTitle3 = document.querySelector('#about'),
        footerList3 = document.querySelector('#about__list');
    
        footerTitle.addEventListener('click', () =>{
            footerList.classList.toggle('footer__list__active');
        });
        footerTitle2.addEventListener('click', () =>{
            footerList2.classList.toggle('footer__list__active');
        });
        footerTitle3.addEventListener('click', () =>{
            footerList3.classList.toggle('footer__list__active');
        });

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    });
    $('.branches__carousel').on('afterChange', function() {  
        var dataId = $('.slick-list').find('.slick-active').find('.branches__title__container').data('title');
        $('.branches__label').text(dataId);
    });
});
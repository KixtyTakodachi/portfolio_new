$(document).ready(function(){
    function validateForms(form){
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages:{
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символов")
                },
                phone: "Пожалуйста, введите номер телефона",
                email:{
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес потчы"
                }
            }
        });
    }
    validateForms('#footer_form');
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    if(window.innerWidth <= 768) {
        $('.cameras__item__attributes').slick({
            arrows: false,
            dots: true
        });
    }
});
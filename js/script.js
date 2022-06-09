window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-mob'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

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
})

// Smooth scroll and pageup

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1200) {
//         $('.page_up').fadeIn();
//     } else {
//         $('.page_up').fadeOut();
//     }
// });

// $("a[href='#up']").click(function() {
//     var _href = $(this).attr("href");
//     $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
//     return false;
// });

// $('.promo__link').on('click', function(e) {
//     e.preventDefault();
//     let catalog_top = $('.catalog').offset().top;
//     $("html, body").animate({
//         scrollTop: catalog_top
//     }, 600)
// });
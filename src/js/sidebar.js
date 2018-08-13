$(document).ready(() => {
    $('.sidebar').addClass(localStorage.getItem('sidebarOpened'));

    $('.sidebar-toggler').click(() => {
        const s = $('.sidebar');
        if(s.hasClass('opened')) {
            localStorage.setItem('sidebarOpened', '');
            $('.sidebar').removeClass('opened');
        } else {
            localStorage.setItem('sidebarOpened', 'opened');
            $('.sidebar').addClass('opened');
        }
    })

});
$(document).ready(() => {
    const s = $('.sidebar');
    s.addClass(localStorage.getItem('sidebarOpened'));

    $('.sidebar-toggler').click(() => {
        if (s.hasClass('opened')) {
            localStorage.setItem('sidebarOpened', '');
            $('.sidebar').removeClass('opened');
        } else {
            localStorage.setItem('sidebarOpened', 'opened');
            $('.sidebar').addClass('opened');
        }
    });

    $('.sidebar-dropdown-toggle').click(function () {
        var sd = $(this).data('target');

        if ($(sd).hasClass('open')) {
            $(this).removeClass('opened');
            $(this).find('i.fas.fa-angle-down.right').remove();
            $(this).append("<i class=\"fas fa-angle-up right\"></i>");

            $(sd).removeClass('open');
        } else {
            $(this).addClass('opened');
            $(this).find('i.fas.fa-angle-up.right').remove();
            $(this).append("<i class=\"fas fa-angle-down right\"></i>");

            $('.sidebar-dropdown-menu').removeClass('open');
            $(sd).addClass('open');
        }
    });

    $('.sidebar-actions-toggle').click(function () {
        var sa = $(this).data('target');
        var sam = $('.sidebar-actions-menu');

        console.log(sa);

        if (sam.data('status') === 'close') {
            sam.animate({
                'margin-left': 0
            }, 400, function() {
                sam.data('status', 'open');
                console.log('Animazione completa apertura')
            });
            //sa.addClass('open-list');
        } else {
            sam.animate({
                'margin-left': '-200px'
            }, 400, function() {
                sam.data('status', 'close');
                console.log('Animazione completa chiusura')
            });
            //sa.removeClass('open-list');
        }
    });


});
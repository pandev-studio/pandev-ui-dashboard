$(function () {
    $('.sidenav-toggler').on('click', function () {
        $('.drawer').toggleClass('sidenav-opened');
        $('.overlay').toggleClass('d-none');
        return false;
    });

    $('.overlay').on('click', function () {
       $('.sidenav-toggler').trigger('click');
    });

    $('.sidenav-dropdown-toggle').click(function () {
        var sd = $(this).data('target');

        if ($(sd).hasClass('open')) {
            $(this).removeClass('opened');
            $(this).find('.sidenav-link-caret').each(function (i, e) {
                console.dir(e)
                $(e).removeClass('fa-angle-down')
                    .addClass('fa-angle-left');
            });

            $(sd).removeClass('open');
        } else {
            $(this).addClass('opened');
            $(this).find('.sidenav-link-caret').each(function (i, e) {
                $(e).removeClass('fa-angle-left')
                    .addClass('fa-angle-down');
            });

            $('.sidenav-dropdown-menu').removeClass('open');
            $(sd).addClass('open');
        }

        return false;
    });
});



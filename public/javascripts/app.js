function initPandevUI() {
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

    $('.select-single').selectpicker({
        style: 'form-control',
        styleBase: ''
    });

    $('.select-multiple').selectpicker({
        style: 'form-control',
        styleBase: '',
        multiple: true,
        actionsBox: true,
        liveSearch: true,
        locale: 'it'
    });
}

function singleImageUploader(file_input, trigger, preview_img) {
    var loadFile = function (event) {
        var output = $(preview_img);
        var url = URL.createObjectURL(event.target.files[0]);
        output.attr('src', url);
    };

    $(file_input).on('change', loadFile);

    $(trigger).on('click', function () {
        $(file_input).trigger('click');
        return false;
    })
}

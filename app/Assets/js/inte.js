$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $(this).toggleClass("is-active");
        $('.main_header_menu').toggleClass("is-active");
        $('body').toggleClass("menu-open");
    });

    $('.article_step_desc').find('img').parent().addClass('paragrap_img');

    /**
     * Handle cookie for label tuto
     * @param button
     */
    // When tuto is trigger, catch event
    document.addEventListener("launchTuto", function(e) {
        setCookieLabelTuto(e.detail.button)
    });

    function setCookieLabelTuto(button) {
        var rate_value = '';
        var tuto_text = $(button).attr("data-value");

        if ($('#yes').length > 0 && $('#no').length > 0) {
            if (document.getElementById('yes').checked) {
                rate_value = document.getElementById('yes').value;
                tuto_text = $("#yes").data("value");
            }
            if (document.getElementById('no').checked) {
                rate_value = document.getElementById('no').value;
                tuto_text = $("#no").data("value");
            }
        }
        //Call tuto class : set return URL value
        tuto.setReturnUrl(document.location.pathname);

        //Call tuto class : set custom wording tuto
        tuto.setCustomWordingTuto(tuto_text);

        ga('send', 'event', 'LP-click-btn', 'click', rate_value);
    }
});
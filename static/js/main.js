/*Navigation Links - The code below is adapted from the Traversy Media you tube video project :'myTunes Site',
'Responsive Landing Page using HTML and CSS (A little jQuery - published on 19th August 2018)*/

$('.cf a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            200,
            function() {
                window.location.hash = hash;
            }
        );
    }
});


/*Back to the top button*/

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 850) {
            $('#back-to-top').fadeIn();

        }
        else {
            $("#back-to-top").fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            200
        );
        return false;
    });
});
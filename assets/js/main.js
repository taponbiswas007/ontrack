$(document).ready(function() {
    $('.menutogglebtn').click(function() {
        $(this).toggleClass('active');
        $('.navigation_area').toggleClass('navActive')
    });
});

// back to top button start
 $(document).ready(function () {
        // Show button after scrolling down 200px
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#backToTop').fadeIn();
            } else {
                $('#backToTop').fadeOut();
            }
        });

        // Scroll to top smoothly
        $('#backToTop').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
// back to top button end



 
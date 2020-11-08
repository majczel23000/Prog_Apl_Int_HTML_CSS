$(document).ready(() => {
    // Smooth scrolling to specific anchor
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 25
        }, 500);
    });

    // Loader on page
    setTimeout(() => {
        $('.loader__container').addClass('loader-fade');
    }, 500);
    setTimeout(() => {
        $('.loader__container').css('display', 'none');
    }, 1500);

    // Navigation
    $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
    });
    $('html').click(function() {
        $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });

    // Contact form labels animations
    $('.contact__form').find('.contact__formcontrol').each(function() {
        var targetItem = $(this).parent();
        if ($(this).val()) {
            $(targetItem).find('label').css({
                'top': '5px',
                'fontSize': '14px'
            });
        }
    })
    $('.contact__form').find('.contact__formcontrol').focus(function() {
        $(this).parent('.contact__input').addClass('focus');
        $(this).parent().find('label').animate({
            'top': '5px',
            'fontSize': '14px'
        }, 300);
    })
    $('.contact__form').find('.contact__formcontrol').blur(function() {
        if ($(this).val().length == 0) {
            $(this).parent('.contact__input').removeClass('focus');
            $(this).parent().find('label').animate({
                'top': '20px',
                'fontSize': '18px'
            }, 300);
        }
    })
});

// Portfolio modal function: open
function openPortfolioModal(number) {
    const modal = document.getElementById("portfolioModal" + number);
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
// Portfolio modal function: close
function closePortfolioModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) modal.style.display = "none";
}

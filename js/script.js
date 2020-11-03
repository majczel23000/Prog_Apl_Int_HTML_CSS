$(document).ready(() => {

    // Smooth scrolling to anhor
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 25
        }, 500);
    });

    setTimeout(() => {
        $('.loader__container').addClass('loader-fade');
    }, 500);
    setTimeout(() => {
        $('.loader__container').css('display', 'none');
    }, 1500);
   
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
});

function openPortfolioModal(number) {
    const modal = document.getElementById("portfolioModal" + number);
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function closePortfolioModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) modal.style.display = "none";
}
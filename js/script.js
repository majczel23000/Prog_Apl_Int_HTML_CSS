$(document).ready(() => {
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

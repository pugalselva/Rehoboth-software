(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

function redirectCourse() {
        const course = document.getElementById('courseSearch').value.trim().toLowerCase();

        // Match course names and redirect accordingly
        if (course === 'python programming' || course === 'python') {
            window.location.href = 'python.html';
        } else if (course === 'ai & data analysis' || course === 'ai' || course === 'data analysis') {
            window.location.href = 'data_analysis.html';
        } else {
            alert('Course not found. Please enter a valid course name.');
        }
    }

    // popup form
 $(document).ready(function() {
            $('#joinForm').on('submit', function(e) {
                e.preventDefault();

                $.ajax({
                    url: 'join_insert.php',
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(response) {
                        alert(response); // Show success or server message
                        $('#joinForm')[0].reset(); // Reset form
                        const joinUsModal = bootstrap.Modal.getInstance(document.getElementById(
                            'joinUsModal'));
                        joinUsModal.hide(); // Bootstrap 5 way to hide modal
                    },
                    error: function(xhr, status, error) {
                        console.log(xhr.responseText);
                        alert('Something went wrong: ' + error);
                    }
                });
            });
        });


    //  $("#joinForm").on("submit", function(e) {
    //     e.preventDefault();

    //     const formData = $(this).serialize();

    //     $.ajax({
    //         url: "join_insert.php", // Change this to your actual PHP file
    //         type: "POST",
    //         data: formData,
    //         success: function(response) {
    //             $("#responseMsg").html(response);
    //             $("#joinForm")[0].reset();
    //         },
    //         error: function() {
    //             $("#responseMsg").html("Error occurred. Please try again.");
    //         }
    //     });
    // });
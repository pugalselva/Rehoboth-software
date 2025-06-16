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
//  $(document).ready(function() {
//             $('#joinForm').on('submit', function(e) {
//                 e.preventDefault();

//                 $.ajax({
//                     url: 'join_insert.php',
//                     type: 'POST',
//                     data: $(this).serialize(),
//                     success: function(response) {
//                         alert(response); // Show success or server message
//                         $('#joinForm')[0].reset(); // Reset form
//                         const joinUsModal = bootstrap.Modal.getInstance(document.getElementById(
//                             'joinUsModal'));
//                         joinUsModal.hide(); // Bootstrap 5 way to hide modal
//                     },
//                     error: function(xhr, status, error) {
//                         console.log(xhr.responseText);
//                         alert('Something went wrong: ' + error);
//                     }
//                 });
//             });
//         });


     $(document).ready(function() {
            $('#joinForm').on('submit', function(e) {
                e.preventDefault();

                // Clear all previous error messages
                $('.pe-error-message').text('');

                let name = $('input[name="name"]').val().trim();
                let email = $('input[name="email"]').val().trim();
                let phone = $('input[name="phone"]').val().trim();
                let message = $('textarea[name="message"]').val().trim();

                let isValid = true;

                if (name === "") {
                    $('.error-name').text("Please enter your name.");
                    isValid = false;
                }
                if (email === "") {
                    $('.error-email').text("Please enter your email.");
                    isValid = false;
                } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                    $('.error-email').text("Invalid email format.");
                    isValid = false;
                }
                if (phone === "") {
                    $('.error-phone').text("Please enter your phone.");
                    isValid = false;
                } else if (!/^\d{10}$/.test(phone)) {
                    $('.error-phone').text("Phone must be 10 digits.");
                    isValid = false;
                }
                if (message === "") {
                    $('.error-message').text("Please enter a message.");
                    isValid = false;
                }

                if (!isValid) return;

                // AJAX request
                $.ajax({
                    url: "submit_form.php",
                    method: "POST",
                    data: {
                        name,
                        email,
                        phone,
                        message
                    },
                    success: function(response) {
                        if (response.trim() === "success") {
                            alert("Thank you for joining!");
                            $('#joinForm')[0].reset();
                            $('#joinUsModal').modal('hide');

                            // Redirect after short delay
                            setTimeout(() => {
                                window.location.href = "index.html";
                            }, 500);
                        } else {
                            alert(response);
                        }
                    },
                    error: function() {
                        alert("Something went wrong. Try again.");
                    }
                });
            });
        });
        
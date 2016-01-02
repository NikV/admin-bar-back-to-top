/**
 * Created by nikhil on 9/22/15.
 */
jQuery(document).ready(function() {
    jQuery('#wp-admin-bar-back-to-top').css('display', 'none'); // Time(in Milliseconds) of appearing of the Button when scrolling down.

    var offset=250, // At what pixels show Back to Top Button
    scrollDuration= 400; // Duration of scrolling to top
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#wp-admin-bar-back-to-top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
        } else {
            jQuery('#wp-admin-bar-back-to-top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
        }
    });

    // Smooth animation when scrolling
    jQuery('#wp-admin-bar-back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0}, scrollDuration);
    })
});
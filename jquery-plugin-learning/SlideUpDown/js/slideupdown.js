// This plug-in needs to include JQUeryUI Library for the functionality 
// This Plugin is used fro responding to the mouse click event to slide vertically up and down in the positive y-axis

//Plug in - SlideUpDown
// NAme: A.Kiran Kumar
//Company : Kefex Studios

(function($) {
    'use strict';
    $.fn.slidy = function() {
        var set = false;
        $(this).click(function() {
            if (set) {
                $(this).find('.menu').slideUp();
                set = false;
            } else {
                $(this).find('.menu').slideDown();
                set = true;
            }
        });
    }
})(jQuery);

$(function()
{
   $('#nav>ul>li').slidy();
});
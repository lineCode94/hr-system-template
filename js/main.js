 $(document).ready(function() {

     'use strict';

     $('.plus').click(function() {
         $(this).toggleClass('pluss');




     });
     $('.butt').on("click", function() {
         $('.butt').toggleClass('buttb');
         $('.nav').toggleClass('navv');

     });

     $('.btnu').on("click", function() {
         $('.btnu').toggleClass('btnub');
         $('.sidebar').toggleClass('sidebarr');
         $('.content').toggleClass('content-margin');
         $('.card-width').toggleClass('card-widthh');

     });

     $('.show').on("click", function() {
         $('.hidden').toggleClass('showw');
     });

     $('.show-three').on("click", function() {
         $('.hidden-three').toggleClass('showw-three').css("transtion", "1s");
     });

     $(".metismenu").metisMenu({
         toggle: false
     });



 });
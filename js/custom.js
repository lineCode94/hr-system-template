$(document).ready(function($) {
    'use strict';
    $(".metismenu").metisMenu({
        toggle: false
    });

    // $('.plus').on("click", function() {
    //     $('.plus').toggleClass('pluss').siblings().removeClass('pluss');
    // });



    $('.plus').click(function() {
        // $('.plus').removeClass('pluss');

        $(this).toggleClass('pluss');


    });

    $("#btnHideSideBar").click(function () {
        $("#SideBar").hide();
        $("#btnShowSideBar").show();
        $('.cardId').addClass("cardWidth");
    });
    $("#btnShowSideBar").click(function () {
      $('.cardId').removeClass("cardWidth");

        });
    // $('.plus').click(function() {
    //     // $('.plus').removeClass('pluss');

    //     $(".folder").toggleClass('folderr');


    // });

    // $('.plus').click(function() {
    //     // $('.plus').removeClass('pluss');

    //     $(this).toggleClass('pluss');

    // });


});

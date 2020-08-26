'use strict';

$(function() {
   
    //   スマホメニューボタン
    var manuFlag = false;
    $("#show").click(function() {
        $(this).toggleClass("active");
        
        if($("#show").hasClass("active")) {
            $(".slide-bank-menu-contents").slideDown(300);
            $(".slide-bank-menu-contents li").fadeTo(0,0,);
            $(".slide-bank-menu-contents li").each(function(i) {
               $(this).delay(100 * i).fadeTo(300,1) 
            });
            
            $(".slide-bank-trigger").click(function() {
                $(".slide-bank-menu-contents").slideUp(300);
                $("#show").toggleClass("active");
            });
        } else {
            $(".slide-bank-menu-contents").slideUp(300);
        }
        
        return false;
    });
});
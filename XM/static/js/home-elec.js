/**
 * Created by xp on 2017/6/26.
 */


$(document).ready(function(){

    $('.brick-list > li').mouseenter(function(){
        // $(this).find('.review-wrapper > a').animate({display:'block'},500);
        $(this).find('.review-wrapper > a').css('display','block');
        $(this).find('.review-wrapper').css('height','76');
        $(this).find('.review-wrapper').css('opacity','1');
    }).mouseleave(function(){
        // $(this).find('.review-wrapper > a').animate({display:'none'},500);
        $(this).find('.review-wrapper > a').css('display','none');
        $(this).find('.review-wrapper').css('height','0');
        $(this).find('.review-wrapper').css('opacity','0')
    });


    function slide(){
        $('.tab-list > li').mouseenter(function(){
            $(this).find('.brick-list').css('display','block')
        })
    }

});
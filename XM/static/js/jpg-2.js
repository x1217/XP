/**
 * Created by xp on 2017/6/22.
 */

$(document).ready(function(){
    var imgId;
    var current = 0;
    var index = 0;

    $('#list-img > li > a > img').eq(0).css('opacity','1');
    $('#list-button > li > a').eq(0).addClass('active');

    slide();
    clickButton();

    function clickButton(){
        $('#list-button > li').click(function(){
            clearInterval(imgId);
            $('#list-img > li > a >img').eq(this).css('opacity','1');
            $('#list-button > li > a').eq(this).addClass('active')
        })
    }

    function showImg(index){
        $('#list-img > li > a > img').stop().animate({opacity:'0'},1000);
        $('#list-img > li > a > img').eq(index).stop().animate({opacity:'1'},1000)
    }

    function showButton(current){
        $('#list-button > li > a ').removeClass('active');
        $('#list-button > li > a').eq(current).addClass('active')
    }

    $('#list-img').mouseenter(function (){
        clearInterval(imgId);
    }).mouseleave(function(){
        slide()
    });

    function slide(){
        imgId = setInterval(function(){
            if(index == 4){
                index = 0
            }else{
                index++
            }
            showImg(index);

            if(current == 4){
                current = 0
            }else{
                current++
            }
            showButton(current);

        },3000)
    }
    //
    // function clickButton(current){
    //     $('#list-button > li > a').
    // }

});

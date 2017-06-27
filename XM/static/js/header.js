/**
 * Created by xp on 2017/6/20.
 */
(function ($) {

    $(document).ready(function () {
        //购物车---进入和离开的绑定事件------------------------------------------
        //---------修改购物车图片-------------
        $('.cart').mouseenter(function () {
            $('.shop-cart').addClass('shop-cart-2');
            $('.shop-cart').removeClass('shop-cart');
        }).mouseleave(function () {
            $('.shop-cart-2').addClass('shop-cart');
            $('.shop-cart-2').removeClass('shop-cart-2')
        });
        //------------------------------------------

        $('#shop').mouseenter(function () {
            var $this = $(this);
            if (!$('#J_miniCartMenu').is(":animated")) {
                $this.find('.loading').slideDown('fast');
                $this.find('.loading').css('display', 'block');
                $this.css('color', '#ff6700');
                $this.css('background-color', '#fff');
            }
        }).mouseleave(function () {
            var $this = $(this);
            if (!$('#J_miniCartMenu').is(":animated")) {
                $this.find(".loading").slideUp();
                $this.css('color', '#b0b0b0');
                $this.css('background-color', 'rgba(80,80,80,0.5)');
            }
        });


        //搜索栏---进入和离开的绑定事件---------------------------------------------
        $("#search").mousedown(function () {
            $('.search-text').css('border', '1px solid #ff6700');
            $('.search-bth').css('border', '1px solid #ff6700')
        }).mouseleave(function () {
            $('.search-text').css('border', '1px solid #e0e0e0');
            $('.search-bth').css('border', '1px solid #e0e0e0')
        }).mouseenter(function () {
            $('.search-text').css('border', '1px solid #b0b0b0');
            $('.search-bth').css('border', '1px solid #b0b0b0')
        });

        //关键字列表
        $('.search-text').mousedown(function () {
            $('.keyword-list').css('display', 'block');
            $('.search-hot-words').css('display', 'none')
        });

        $('#search').mouseleave(function () {
            $('.keyword-list').css('display', 'none')
        });


        //导航栏---进入和离开的绑定事件----------------------------
        //头部导航栏-----------------------------

        $('.nav-item').mouseenter(function () {
            $(this).find('.item-children').slideDown('fast');
            $(this).find('.first').css('display', 'block');
            $(this).find('.item-children').css('display', 'block');
        }).mouseleave(function () {
            $(this).find('.first').css('display', 'none');
        });


        //------------------------------------------------
        //明星单品----------------------------
        $('.star-goods').mouseenter(function () {
            $(this).find('.children').css('display', 'block')
        }).mouseleave(function () {
            $(this).find('.children').css('display', 'none')
        });

        //    小米明星单品
        //箭头位置
        $('.control').mouseenter(function () {
            $(this).find('.more-left-arrow').addClass('more-left-arrow-a');
            $(this).find('.more-right-arrow').addClass('more-right-arrow-a')
        }).mouseleave(function () {
            $('.more-left-arrow').removeClass('more-left-arrow-a');
            $('.more-right-arrow').removeClass('more-right-arrow-a')
        })

    });

    //图片位置
    qiehuantupian();
    var a;
    var b;

    function qiehuantupian() {
        a = setInterval(function () {
            slideright()
        }, 5000);

        b = setInterval(function () {
            slideleft();
        }, 10000)
    }

    $('.xm-controls > a').mouseenter(function () {
        clearInterval(a);
        clearInterval(b);
    }).mouseleave(function () {
        qiehuantupian()
    });

    function click() {
        $(this).find('.xm-controls > a').click(function () {
            $('.xm-carousel-list').css('margin-left', '0');
        }).mouseleave(function () {
            qiehuantupian()
        });

        $(this).find('.xm-controls > a').click(function () {
            $('.xm-carousel-list').css('margin-left', '-1240px')
        }).mouseleave(function () {
            qiehuantupian()
        });
    }


    function slideleft() {
        // $('.more-left-arrow').addClass('more-left-arrow-b');
        // $('.more-right-arrow').removeClass('more-right-arrow-b');
        $('.xm-carousel-list').css('margin-left', '0')
    }

    function slideright() {
        // $('.more-right-arrow').addClass('more-right-arrow-b');
        // $('.more-left-arrow').removeClass('more-left-arrow-b');
        $('.xm-carousel-list').css('margin-left', '-1240px');
    }

})(jQuery);
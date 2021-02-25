var ATBS = ATBS || {};

(function($) {

    // USE STRICT
    "use strict";

    var $window = $(window);
    var $document = $(document);
    var $goToTopEl = $('.js-go-top-el');
    var $overlayBg = $('.js-overlay-bg');

    ATBS.header = {

        init: function() {
            ATBS.header.offCanvasMenu();
        },

        /* ============================================================================
         * Offcanvas Menu
         * ==========================================================================*/
        offCanvasMenu: function() {
            var $backdrop = $('<div class="atbs-ceris-offcanvas-backdrop"></div>');
            var $offCanvas = $('.js-atbs-ceris-offcanvas');
            var $offCanvasToggle = $('.js-atbs-ceris-offcanvas-toggle');
            var $offCanvasClose = $('.js-atbs-ceris-offcanvas-close');
            var $offCanvasMenuHasChildren = $('.navigation--offcanvas').find('li.menu-item-has-children > a');
            var menuExpander = ('<div class="submenu-toggle"><i class="mdicon mdicon-expand_more"></i></div>');
            var check_show_more = false;

            $backdrop.on('click', function() {
                var button_hide = $offCanvas.find('.btn-nav-show_full i');
                $(this).fadeOut(0, function() {
                    $(this).detach();
                });
                var check_show_full = $offCanvas;
                if ($(check_show_full).hasClass('show-full')) {
                    $(check_show_full).removeClass('animation');
                    setTimeout(function() {
                        $(check_show_full).removeClass('show-full');
                        $(check_show_full).removeClass('is-active');
                    }, 400);
                } else {
                    $(check_show_full).removeClass('show-full');
                    $(check_show_full).removeClass('is-active');
                }
                setTimeout(function() {
                    $(check_show_full).removeClass('animation');
                    $(check_show_full).removeClass('show-full');
                    $(check_show_full).removeClass('is-active');
                }, 400);
                check_show_more = false;
                button_hide.attr('class', 'mdicon mdicon-chevron-thin-right');
            });
            $offCanvasToggle.on('click', function(e) {
                var check_show_full = $offCanvas;
                e.preventDefault();
                var targetID = $(this).attr('href');
                var $target = $(targetID);
                $target.toggleClass('is-active');
                $backdrop.hide().appendTo(document.body).fadeIn(200);
            });
            $offCanvasClose.on('click', function(e) {
                e.preventDefault();
                // var targetID = $(this).attr('href');
                // var $target = $(targetID);
                // $target.removeClass('is-active');
                var button_hide = $offCanvas.find('.btn-nav-show_full i');
                $backdrop.fadeOut(200, function() {
                    $(this).detach();
                });
                check_show_more = false;
                var check_show_full = $offCanvas;
                if ($(check_show_full).hasClass('show-full')) {
                    $(check_show_full).removeClass('animation');
                    setTimeout(function() {
                        $(check_show_full).removeClass('show-full');
                        $(check_show_full).removeClass('is-active');
                    }, 400);
                } else {
                    $(check_show_full).removeClass('show-full');
                    $(check_show_full).removeClass('is-active');
                }
                button_hide.attr('class', 'mdicon mdicon-chevron-thin-right');
            });
            $offCanvasMenuHasChildren.append(function() {
                return $(menuExpander).on('click', function(e) {
                    e.preventDefault();
                    var $subMenu = $(this).parent().siblings('.sub-menu');
                    $subMenu.slideToggle(200);
                });
            });
            $(window).on('resize', function(e) {
                var checkExist = setInterval(function() {
                    var elementPC = $('#atbs-ceris-offcanvas-primary');
                    var elementMB = $('#atbs-ceris-offcanvas-mobile');
                    if (elementPC.hasClass('is-active')) {
                        var checkDisplay = elementPC.css('display');
                        if (checkDisplay == 'none') {
                            $backdrop.css('display', 'none');
                            clearInterval(checkExist);
                        }
                    }
                    if (elementMB.hasClass('is-active')) {
                        var checkDisplay = elementMB.css('display');
                        if (checkDisplay == 'none') {
                            $backdrop.css('display', 'none');
                            clearInterval(checkExist);
                        }
                    }
                    if (elementPC.hasClass('is-active') && elementPC.css('display') != 'none' || elementMB.hasClass('is-active') && elementMB.css('display') != 'none') {
                        $backdrop.css('display', 'block');
                        clearInterval(checkExist);
                    }
                    clearInterval(checkExist);
                }, 100); // check every 100ms
            });
            var btn_show_more = $('.btn-nav-show_full');
            $(btn_show_more).click(function() {
                var $this = $(this).parents('.atbs-ceris-offcanvas');
                var button_hide = $(this).find('i');
                $(this).fadeOut(500);
                if (check_show_more == false) {
                    // $($this).animate({'width':'1420px'},500);
                    $($this).addClass('animation');
                    setTimeout(function() {
                        $($this).addClass("show-full");
                        button_hide.attr('class', 'mdicon mdicon-chevron-thin-left');
                        $(btn_show_more).fadeIn(50);
                    }, 600);
                    check_show_more = true;
                } else {
                    $($this).removeClass("show-full");
                    $(this).fadeOut(1000);
                    setTimeout(function() {
                        // $($this).animate({'width':'530px'},500);
                        $($this).removeClass('animation');
                        $(btn_show_more).fadeIn(50);
                        button_hide.attr('class', 'mdicon mdicon-chevron-thin-right');
                    }, 200);
                    check_show_more = false;

                }
            });
        },
    };

    ATBS.documentOnReady = {

        init: function() {
            ATBS.header.init();
            ATBS.documentOnReady.scrollSingleCountPercent();
            ATBS.documentOnReady.carousel_1i();
            ATBS.documentOnReady.carousel_1i30m_thumb_round();
            ATBS.documentOnReady.carousel_only_1i_loopdot();
            ATBS.documentOnReady.carousel_1i_loopdot();
            ATBS.documentOnReady.carousel_1i_get_background();
            ATBS.documentOnReady.carousel_1i_fade_dot_number_effect();
            ATBS.documentOnReady.carousel_1i_not_nav();
            ATBS.documentOnReady.carousel_1i_not_nav_2();
            ATBS.documentOnReady.carousel_1i_dot_number_effect();
            ATBS.documentOnReady.carousel_1i_dot_number_get_background();
            ATBS.documentOnReady.carousel_1i_dot_number_get_background_style_2();
            ATBS.documentOnReady.carousel_1i30m_effect();
            ATBS.documentOnReady.carousel_1i30m();
            ATBS.documentOnReady.carousel_2i0m_number_effect();
            ATBS.documentOnReady.carousel_2i30m_number_effect();
            ATBS.documentOnReady.carousel_2i50m_number_effect();
            ATBS.documentOnReady.carousel_2i0m();
            ATBS.documentOnReady.carousel_2i4m();
            ATBS.documentOnReady.carousel_2i30m5();
            ATBS.documentOnReady.carousel_2i30m();
            ATBS.documentOnReady.carousel_2i10m();
            ATBS.documentOnReady.carousel_2i20m();
            ATBS.documentOnReady.carousel_3i30m5();
            ATBS.documentOnReady.carousel_3i30m5_update();
            ATBS.documentOnReady.carousel_4i30m5_update();
            ATBS.documentOnReady.carousel_3i4m();
            ATBS.documentOnReady.carousel_3i30m();
            ATBS.documentOnReady.carousel_3i4m_small();
            ATBS.documentOnReady.carousel_3i20m();
            ATBS.documentOnReady.carousel_headingAside_3i();
            ATBS.documentOnReady.carousel_4i();
            ATBS.documentOnReady.carousel_4i4m();
            ATBS.documentOnReady.carousel_4i0m();
            ATBS.documentOnReady.carousel_4i20m();
            ATBS.documentOnReady.carousel_4i30m();
            ATBS.documentOnReady.carousel_5i0m();
            ATBS.documentOnReady.carousel_overlap();
            ATBS.documentOnReady.customCarouselNav();
            ATBS.documentOnReady.countdown();
            ATBS.documentOnReady.goToTop();
            ATBS.documentOnReady.newsTicker();
            ATBS.documentOnReady.lightBox();
            ATBS.documentOnReady.perfectScrollbarInit();
            ATBS.documentOnReady.tooltipInit();
            ATBS.documentOnReady.ceris_search_button();
            ATBS.documentOnReady.carousel_1i_dot_number();
            ATBS.documentOnReady.the_close_buttons();
            ATBS.documentOnReady.ATBS_Article_Header_Nav_Switch();
            ATBS.documentOnReady.ATBSNavDetectEdgeBrowser();
        },
        ATBS_Article_Header_Nav_Switch: function() {
            var headerNavSW = $('.header-article-nav-icon');
            headerNavSW.on('click', function(e) {
                e.preventDefault();
                $(this).closest('.sticky-header').toggleClass('article-header-nav-hide');
                if ($(this).closest('.sticky-header').hasClass('article-header-nav-hide')) {
                    $(this).closest('.sticky-header').find('.navigation-wrapper').fadeOut(300);
                    $(this).closest('.sticky-header').find('.header-current-reading-article').fadeIn(3000);
                } else {
                    $(this).closest('.sticky-header').find('.navigation-wrapper').fadeIn(3000);
                    $(this).closest('.sticky-header').find('.header-current-reading-article').fadeOut(300);
                }
            });
        },
        ATBSNavDetectEdgeBrowser: function() {
            $("#main-menu li").on('mouseenter mouseleave', function(e) {
                if ($('ul', this).length) {
                    var elm = $('ul:first', this);
                    var off = elm.offset();
                    var l = off.left;
                    var w = elm.width();
                    var docW = $(".site-wrapper").width();
                    var isEntirelyVisible = (l + w <= docW);

                    if (!isEntirelyVisible) {
                        $(this).addClass('atbs-submenu-to-left');
                    } else {
                        //$(this).removeClass('atbs-submenu-to-left');
                    }

                    if (l < 0) {
                        $(this).addClass('atbs-submenu-to-right');
                    } else {
                        //$(this).removeClass('atbs-submenu-to-right');
                    }
                }
            });
        },
        the_close_buttons: function() {
            $('body').imagesLoaded(function() {
                //Cookie bar
                var CookieCloseButton = $('#cn-close-notice');
                $('#cookie-notice').show();
                CookieCloseButton.on('click', function(e) {
                    e.preventDefault();
                    $(this).closest('#cookie-notice').remove();
                });

                //Currently Reading Article Panel
                var nextArticlePopupCloseButton = $('.single-next-article-info-popup--close');
                nextArticlePopupCloseButton.on('click', function(e) {
                    e.preventDefault();
                    $(this).closest('.single-next-article-info-popup').addClass('atbs-force-hidden-forever');
                });
            });
        },
        /* ============================================================================
         * Single scroll percent
         * ==========================================================================*/
        scrollSingleCountPercent: function() {
            var lastWindowScrollTop = 0;
            var scrollDirection = '';
            var elemnt_scroll = $('.element-scroll-percent');
            if (elemnt_scroll.length > 0) {
                var ofsetTop_element_scroll = $('.element-scroll-percent').offset().top;
                var ofsetBottom_element_scroll = ofsetTop_element_scroll + $('.element-scroll-percent').height();
                var progressValue = $('.progress__value');
                var progressValueMobile = $('.scroll-count-percent-mobile .percent-number');
                var percentNumberText = $('.percent-number').find('.percent-number-text');
                var RADIUS = 54;
                var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
                var docHeight = $('.element-scroll-percent').height();
                $(progressValue).css({ 'stroke-dasharray': CIRCUMFERENCE });
                var reading_indicator = $('.scroll-count-percent');
                var dataPostID;
                progress(0);
                $(percentNumberText).html(0);
                $(progressValueMobile).css({ 'width': '0px' });
                $(window).scroll(function(e) {
                    if ($(window).scrollTop() > lastWindowScrollTop) {
                        scrollDirection = 'down';
                    } else {
                        scrollDirection = 'up';
                    }
                    elemnt_scroll = $('.element-scroll-percent');
                    elemnt_scroll.each(function() {
                        var theJourney = $(window).scrollTop() - $(this).offset().top;
                        if ((theJourney > 0) && (theJourney <= $(this).height())) {
                            ofsetTop_element_scroll = $(this).offset().top;
                            ofsetBottom_element_scroll = ofsetTop_element_scroll + $(this).height();
                            docHeight = $(this).height();
                            dataPostID = $(this).closest('.single-infinity-inner').data('postid');

                            $('.atbs-scroll-single-percent-wrap').data('postid', dataPostID);
                            if ($(this).closest('.single-infinity-inner').hasClass('ceris-already-bookmarked')) {
                                $('.scroll-count-percent-with-bookmark').find('.btn-bookmark-icon').addClass('is-saved');
                            } else {
                                $('.scroll-count-percent-with-bookmark').find('.btn-bookmark-icon').removeClass('is-saved');
                            }
                        }
                    });
                    if (($(window).scrollTop() >= ofsetTop_element_scroll)) {
                        $('.scroll-count-percent').addClass('active');
                    } else {
                        $('.scroll-count-percent').removeClass('active');
                    }
                    var windowScrollTop = $(window).scrollTop();
                    var scrollPercent = (windowScrollTop - ofsetTop_element_scroll) / (docHeight);
                    var scrollPercentRounded = Math.round(scrollPercent * 100);
                    if (scrollPercentRounded <= 0) {
                        scrollPercentRounded = 0;
                    }
                    if (scrollPercentRounded >= 100) {
                        scrollPercentRounded = 100;
                    }
                    progress(scrollPercentRounded);
                    $(percentNumberText).html(scrollPercentRounded);
                    $(progressValueMobile).css({ 'width': scrollPercentRounded + '%' });
                    lastWindowScrollTop = $(window).scrollTop();
                });
                $(window).resize(function() {
                    elemnt_scroll = $('.element-scroll-percent');
                    elemnt_scroll.each(function() {
                        var theJourney = $(window).scrollTop() - $(this).offset().top;
                        if ((theJourney > 0) && (theJourney <= $(this).height())) {
                            ofsetTop_element_scroll = $(this).offset().top;
                            ofsetBottom_element_scroll = ofsetTop_element_scroll + $(this).height();
                            docHeight = $(this).height();
                            return false;
                        }
                    });

                    var windowScrollTop = $(window).scrollTop();
                    var winHeight = $(window).height();
                    var scrollPercent = (windowScrollTop - ofsetTop_element_scroll) / (docHeight);
                    var scrollPercentRounded = Math.round(scrollPercent * 100);
                    if (scrollPercentRounded > 100) {
                        scrollPercentRounded = 100;
                    }
                    progress(scrollPercentRounded);
                    $(percentNumberText).html(scrollPercentRounded);
                    $(progressValueMobile).css({ 'width': scrollPercentRounded + '%' });
                });
            }

            function progress(value) {
                var progress = value / 100;
                var dashoffset = CIRCUMFERENCE * (1 - progress);
                $(progressValue).css({ 'stroke-dashoffset': dashoffset });
            }
        },
        /* ============================================================================
         * ceris Search Button
         * ==========================================================================*/
        ceris_search_button: function() {

            $('.js-search-popup').on('click', function() {
                $('.atbs-ceris-search-full').toggleClass('On');
            });
            $('#atbs-ceris-search-remove').on('click', function() {
                $('.atbs-ceris-search-full').removeClass('On');
                $('.atbs-ceris-search-full').removeClass("active");
                $('.search-form__input').val('');
            });
            if ($(window).resize() || $(window).load()) {
                $(window).height();
                var input_search_frame = $('.atbs-ceris-search-full--form form').height() + parseInt($('.atbs-ceris-search-full--form form').css('margin-bottom'));
                var max_height_search = $(window).height() - parseInt($('.atbs-ceris-search-full').css('padding-bottom')) - parseInt($('.atbs-ceris-search-full').css('padding-top')) - input_search_frame;

                $('.result-default').css('max-height', max_height_search);
                $('.atbs-ceris-search-full--result').css('max-height', max_height_search + input_search_frame);
            }

        },
        /* ============================================================================
         * AJAX load more posts
         * ==========================================================================*/
        ajaxLoadPost: function() {
            var loadedPosts = null;
            var $ajaxLoadPost = $('.js-ajax-load-post');
            var $this;

            function ajaxLoad(parameters, $postContainer) {
                var cerisAjaxSecurity = ajax_buff['ceris_security']['ceris_security_code']['content'];
                console.log(cerisAjaxSecurity);
                var ajaxStatus = '',
                    ajaxCall = $.ajax({
                        url: ajaxurl,
                        type: 'post',
                        dataType: 'html',
                        data: {
                            action: parameters.action,
                            args: parameters.args,
                            postOffset: parameters.postOffset,
                            type: parameters.type,
                            moduleInfo: parameters.moduleInfo,
                            securityCheck: cerisAjaxSecurity
                                // other parameters
                        },
                    });
                //console.log(parameters.action);
                ajaxCall.done(function(respond) {
                    loadedPosts = $.parseJSON(respond);
                    ajaxStatus = 'success';
                    if (loadedPosts == 'no-result') {
                        $postContainer.closest('.js-ajax-load-post').addClass('disable-click');
                        $postContainer.closest('.js-ajax-load-post').find('.js-ajax-load-post-trigger').addClass('hidden');
                        $postContainer.closest('.js-ajax-load-post').find('.ceris-no-more-button').removeClass('hidden');
                        return;
                    }
                    if (loadedPosts) {
                        var elToLoad = $(loadedPosts).css('opacity', 0).animate({ 'opacity': 1 }, 400);
                        $postContainer.append(elToLoad);
                        ATBS.ATBS_Bookmark.reAddBookmark($postContainer);
                    }
                    $('html, body').animate({ scrollTop: $window.scrollTop() + 1 }, 0).animate({ scrollTop: $window.scrollTop() - 1 }, 0); // for recalculating of sticky sidebar
                    // do stuff like changing parameters
                });

                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                });

                ajaxCall.always(function() {
                    $postContainer.closest('.js-ajax-load-post').removeClass('ceris_loading');
                    $postContainer.closest('.js-ajax-load-post').removeClass('disable-click');
                });
            }

            $ajaxLoadPost.each(function() {
                $this = $(this);
                var $moduleID = $this.closest('.atbs-ceris-block').attr('id');
                var moduleName = $moduleID.split("-")[0];
                var $triggerBtn = $this.find('.js-ajax-load-post-trigger');
                var args = ajax_buff['query'][$moduleID]['args'];

                var $postContainer = $this.find('.posts-list');
                var moduleInfo = ajax_buff['query'][$moduleID]['moduleInfo'];

                $triggerBtn.on('click', function() {

                    $this = $(this).closest('.js-ajax-load-post');

                    if (($this.hasClass('disable-click')) || $this.hasClass('infinity-ajax-load-post'))
                        return;

                    $this.addClass('disable-click');

                    $this.addClass('ceris_loading');

                    var postOffset = parseInt(args['offset']) + $this.find('article').length;

                    if ($this.closest('.atbs-ceris-block').hasClass('ceris_latest_blog_posts')) {
                        var stickPostLength = args['post__not_in'].length;
                        postOffset = postOffset - stickPostLength;
                    }

                    var parameters = {
                        action: moduleName,
                        args: args,
                        postOffset: postOffset,
                        type: 'loadmore',
                        moduleInfo: moduleInfo,
                    };
                    ajaxLoad(parameters, $postContainer);
                });
            });
        },

        carousel_1i_fade_dot_number_effect: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i-fade-dot-number-effect');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    loop: true,
                    dots: true,
                    lazyLoad: true,
                    // autoHeight: true,
                    smartSpeed: 450,
                    animateIn: 'fadeIn',
                    // animateOut: 'fadeOut',
                    onInitialized: owl_onInitialized,
                    onTranslate: owl_onInitialized,
                    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="#fff" viewBox="0 0 32 17"><path id="slider-prev" data-name="Slider Prev" class="slider_arrow_path" d="M8.158,0.007L8.835,0.685,1.5,8.019H32V8.979H1.5l7.338,7.334-0.677.679L0,8.839V8.16Z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17"  fill="#fff" viewBox="0 0 32 17"><path id="slider-next" data-name="Slider Next" class="slider_arrow_path" d="M23.842,0.007l-0.677.678L30.5,8.019H0V8.979H30.5l-7.338,7.334,0.677,0.679L32,8.839V8.16Z"></path></svg>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 30,
                        },

                        768: {
                            items: 1,
                        },
                    },
                });
                $(this).on('translate.owl.carousel', function(event) {
                    var element = event.target;
                    var thebackgroundIMG = '';
                    var currentImgSrcData = '';

                    var checkActiveItemLoaded = setInterval(function() {
                        if (!$(element).find('.owl-item.active').hasClass('owl-item-active-loaded')) {
                            $(element).find('.owl-item').removeClass('owl-item-active-loaded');
                            $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                            thebackgroundIMG = $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img');
                            currentImgSrcData = $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src');
                            thebackgroundIMG.each(function() {
                                if ($(this).hasClass('active')) {
                                    $(this).removeClass('active');
                                } else {
                                    $(this).removeAttr('src').attr('src', currentImgSrcData);
                                    $(this).addClass('active');
                                }
                            });
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));
                            clearInterval(checkActiveItemLoaded);
                        }

                    }, 10); // check every 10ms
                });

                function owl_onInitialized(event) {
                    var element = event.target;
                    var itemCount = event.item.count;
                    var itenIndex = event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;

                    var theCloned = owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }

                    $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
                    //console.log($(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(this).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));

                    $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                };
            });
        },

        carousel_1i30m_thumb_round: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i30m-thumb-round');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    items: 1,
                    loop: true,
                    animateOut: 'fadeOut',
                    margin: 30,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 300,
                });
            })
        },

        /* ============================================================================
         * Carousel funtions
         * ==========================================================================*/
        carousel_1i30m_effect: function() {
            var $carousels = $('.js-carousel-1i30m-effect');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        567: {
                            margin: 0,
                        },
                    },
                });
            })
        },
        carousel_1i_dot_number: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i-dot-number');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    loop: true,
                    dots: true,
                    lazyLoad: true,
                    autoHeight: true,
                    onInitialized: counter,
                    onTranslated: counter,
                    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="#fff" viewBox="0 0 32 17"><path id="slider-prev" data-name="Slider Prev" class="slider_arrow_path" d="M8.158,0.007L8.835,0.685,1.5,8.019H32V8.979H1.5l7.338,7.334-0.677.679L0,8.839V8.16Z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17"  fill="#fff" viewBox="0 0 32 17"><path id="slider-next" data-name="Slider Next" class="slider_arrow_path" d="M23.842,0.007l-0.677.678L30.5,8.019H0V8.979H30.5l-7.338,7.334,0.677,0.679L32,8.839V8.16Z"></path></svg>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 1,
                        },
                    },
                });
            })

            function counter(event) {
                var element = event.target;
                var itemCount = event.item.count;
                var itenIndex = event.item.index;
                var owlstageChildrens = $(element).find('.owl-stage').children().length;

                var theCloned = owlstageChildrens - itemCount;
                var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                if (itenIndex < parseInt(theCloned / 2)) {
                    currentIndex = owlstageChildrens - theCloned;
                } else if (currentIndex > itemCount) {
                    currentIndex = currentIndex - itemCount;
                }

                $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
            }
        },

        carousel_1i_loopdot: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i-loopdot');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },

                        576: {
                            items: 2,
                            margin: 30,
                        },

                        992: {
                            items: 1,
                        },
                    },
                });
            })
        },
        carousel_1i_dot_number_get_background: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i-dot-number-get-background');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    loop: true,
                    dots: true,
                    lazyLoad: true,
                    autoHeight: true,
                    smartSpeed: 450,
                    //animateOut: 'fadeOut',
                    onInitialized: owl_onInitialized,
                    onTranslate: counter,
                    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="#fff" viewBox="0 0 32 17"><path id="slider-prev" data-name="Slider Prev" class="slider_arrow_path" d="M8.158,0.007L8.835,0.685,1.5,8.019H32V8.979H1.5l7.338,7.334-0.677.679L0,8.839V8.16Z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17"  fill="#fff" viewBox="0 0 32 17"><path id="slider-next" data-name="Slider Next" class="slider_arrow_path" d="M23.842,0.007l-0.677.678L30.5,8.019H0V8.979H30.5l-7.338,7.334,0.677,0.679L32,8.839V8.16Z"></path></svg>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 30,
                        },

                        768: {
                            items: 1,
                        },
                    },
                });
                $(this).on('translate.owl.carousel', function(event) {
                    var element = event.target;
                    var thebackgroundIMG = '';
                    var currentImgSrcData = '';

                    var checkActiveItemLoaded = setInterval(function() {
                        if (!$(element).find('.owl-item.active').hasClass('owl-item-active-loaded')) {
                            $(element).find('.owl-item').removeClass('owl-item-active-loaded');
                            $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                            thebackgroundIMG = $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img');
                            currentImgSrcData = $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src');
                            thebackgroundIMG.each(function() {
                                if ($(this).hasClass('active')) {
                                    $(this).removeClass('active');
                                } else {
                                    $(this).removeAttr('src').attr('src', currentImgSrcData);
                                    $(this).addClass('active');
                                }
                            });
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));
                            clearInterval(checkActiveItemLoaded);
                        }

                    }, 10); // check every 10ms
                });

                function owl_onInitialized(event) {
                    var element = event.target;
                    var itemCount = event.item.count;
                    var itenIndex = event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;

                    var theCloned = owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }

                    $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);

                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(this).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));

                    $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                };

                function counter(event) {
                    var element = event.target;
                    var itemCount = event.item.count;
                    var itenIndex = event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;

                    var theCloned = owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }

                    $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
                }
            });
        },

        carousel_1i_dot_number_get_background_style_2: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i-dot-number-get-background-style-2');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: true,
                    loop: true,
                    dots: true,
                    lazyLoad: true,
                    autoHeight: true,
                    smartSpeed: 450,
                    //animateOut: 'fadeOut',
                    onInitialized: owl_onInitialized,
                    onTranslate: counter,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 30,
                        },

                        768: {
                            items: 1,
                        },
                    },
                });
                $(this).on('translate.owl.carousel', function(event) {
                    var element = event.target;
                    var thebackgroundIMG = '';
                    var currentImgSrcData = '';

                    var checkActiveItemLoaded = setInterval(function() {
                        if (!$(element).find('.owl-item.active').hasClass('owl-item-active-loaded')) {
                            $(element).find('.owl-item').removeClass('owl-item-active-loaded');
                            $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                            thebackgroundIMG = $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img');
                            currentImgSrcData = $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src');
                            thebackgroundIMG.each(function() {
                                if ($(this).hasClass('active')) {
                                    $(this).removeClass('active');
                                } else {
                                    $(this).removeAttr('src').attr('src', currentImgSrcData);
                                    $(this).addClass('active');
                                }
                            });
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));
                            clearInterval(checkActiveItemLoaded);
                        }

                    }, 10); // check every 10ms
                });

                function owl_onInitialized(event) {
                    var element = event.target;
                    var itemCount = event.item.count;
                    var itenIndex = event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;

                    var theCloned = owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }

                    $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);

                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(this).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));

                    $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                };

                function counter(event) {
                    var element = event.target;
                    var itemCount = event.item.count;
                    var itenIndex = event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;

                    var theCloned = owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }

                    $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
                }
            });
        },

        carousel_1i_dot_number_effect: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i-dot-number-effect');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    loop: true,
                    dots: true,
                    lazyLoad: true,
                    autoHeight: true,
                    smartSpeed: 450,
                    //animateOut: 'fadeOut',
                    onInitialized: owl_onInitialized,
                    onTranslate: owl_onInitialized,
                    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" fill="#fff" viewBox="0 0 32 17"><path id="slider-prev" data-name="Slider Prev" class="slider_arrow_path" d="M8.158,0.007L8.835,0.685,1.5,8.019H32V8.979H1.5l7.338,7.334-0.677.679L0,8.839V8.16Z"></path></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="17"  fill="#fff" viewBox="0 0 32 17"><path id="slider-next" data-name="Slider Next" class="slider_arrow_path" d="M23.842,0.007l-0.677.678L30.5,8.019H0V8.979H30.5l-7.338,7.334,0.677,0.679L32,8.839V8.16Z"></path></svg>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 30,
                        },

                        768: {
                            items: 1,
                        },
                    },
                });
                $(this).on('translate.owl.carousel', function(event) {
                    var element = event.target;
                    var thebackgroundIMG = '';
                    var currentImgSrcData = '';

                    var checkActiveItemLoaded = setInterval(function() {
                        if (!$(element).find('.owl-item.active').hasClass('owl-item-active-loaded')) {
                            $(element).find('.owl-item').removeClass('owl-item-active-loaded');
                            $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                            thebackgroundIMG = $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img');
                            currentImgSrcData = $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src');
                            thebackgroundIMG.each(function() {
                                if ($(this).hasClass('active')) {
                                    $(this).removeClass('active');
                                } else {
                                    $(this).removeAttr('src').attr('src', currentImgSrcData);
                                    $(this).addClass('active');
                                }
                            });
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                            $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));
                            clearInterval(checkActiveItemLoaded);
                        }

                    }, 10); // check every 10ms
                });

                function owl_onInitialized(event) {
                    var element = event.target;
                    var itemCount = event.item.count;
                    var itenIndex = event.item.index;
                    var owlstageChildrens = $(element).find('.owl-stage').children().length;

                    var theCloned = owlstageChildrens - itemCount;
                    var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                    if (itenIndex < parseInt(theCloned / 2)) {
                        currentIndex = owlstageChildrens - theCloned;
                    } else if (currentIndex > itemCount) {
                        currentIndex = currentIndex - itemCount;
                    }

                    $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
                    //console.log($(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                    $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(this).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));

                    $(element).find('.owl-item.active').addClass('owl-item-active-loaded');
                };
            });
        },
        carousel_2i0m_number_effect: function() {
            var $carousels = $('.js-carousel-2i0m-number-effect');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 2,
                    margin: 0,
                    nav: true,
                    dots: true,
                    loop: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 700,
                    onInitialized: counter,
                    onTranslate: counter,
                    onTranslated: showAnimation,
                    onDrag: removeAnimation,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0,
                        },

                        992: {
                            items: 2,
                            margin: 0,
                        },
                    },
                });
            });

            function counter(event) {
                var element = event.target;
                var itemCount = event.item.count;
                var itenIndex = event.item.index;
                var owlstageChildrens = $(element).find('.owl-stage').children().length;

                var theCloned = owlstageChildrens - itemCount;
                var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                if (itenIndex < parseInt(theCloned / 2)) {
                    currentIndex = owlstageChildrens - theCloned;
                } else if (currentIndex > itemCount) {
                    currentIndex = currentIndex - itemCount;
                }

                $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
            }

            function removeAnimation(event) {
                // var $this = event.target;
                // var item = $($this).find('.owl-item');
                // $(item).find('.post__text').removeClass("fadeInText");
                // $(item).find('.post__text').addClass("opacity-default");
            }

            function showAnimation(event) {
                // var $this = event.target;
                // var item = $($this).find('.active');
                // $(item).find('.post__text').addClass("fadeInText");
                // $(item).find('.post__text').removeClass("opacity-default");
                // $(item).find('.post__thumb').removeClass("FadeOutThumb");
            }
        },
        carousel_2i50m_number_effect: function() {
            var $carousels = $('.js-carousel-2i50m-number-effect');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    loop: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 700,
                    onInitialized: counter,
                    onTranslate: counter,
                    onTranslated: showAnimation,
                    onDrag: removeAnimation,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 20,
                        },

                        991: {
                            items: 1,
                            margin: 30,
                        },

                        992: {
                            items: 2,
                            margin: 30,
                        },


                        1200: {
                            items: 2,
                            margin: 50,
                        },
                    },
                });
            });

            function counter(event) {
                var element = event.target;
                var itemCount = event.item.count;
                var itenIndex = event.item.index;
                var owlstageChildrens = $(element).find('.owl-stage').children().length;

                var theCloned = owlstageChildrens - itemCount;
                var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                if (itenIndex < parseInt(theCloned / 2)) {
                    currentIndex = owlstageChildrens - theCloned;
                } else if (currentIndex > itemCount) {
                    currentIndex = currentIndex - itemCount;
                }

                $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
            }

            function removeAnimation(event) {
                // var $this = event.target;
                // var item = $($this).find('.owl-item');
                // $(item).find('.post__text').removeClass("fadeInText");
                // $(item).find('.post__text').addClass("opacity-default");
            }

            function showAnimation(event) {
                // var $this = event.target;
                // var item = $($this).find('.active');
                // $(item).find('.post__text').addClass("fadeInText");
                // $(item).find('.post__text').removeClass("opacity-default");
                // $(item).find('.post__thumb').removeClass("FadeOutThumb");
            }
        },

        carousel_2i30m_number_effect: function() {
            var $carousels = $('.js-carousel-2i30m-number-effect');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    loop: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 700,
                    onInitialized: counter,
                    onTranslate: counter,
                    onTranslated: showAnimation,
                    onDrag: removeAnimation,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 20,
                        },

                        480: {
                            items: 1,
                            margin: 20,
                        },

                        481: {
                            items: 2,
                            margin: 20,
                        },

                        577: {
                            items: 3,
                            margin: 30,
                        },

                        991: {
                            items: 3,
                            margin: 30,
                        },

                        992: {
                            items: 2,
                            margin: 30,
                        },
                    },
                });
            });

            function counter(event) {
                var element = event.target;
                var itemCount = event.item.count;
                var itenIndex = event.item.index;
                var owlstageChildrens = $(element).find('.owl-stage').children().length;

                var theCloned = owlstageChildrens - itemCount;
                var currentIndex = itenIndex - parseInt(theCloned / 2) + 1;
                if (itenIndex < parseInt(theCloned / 2)) {
                    currentIndex = owlstageChildrens - theCloned;
                } else if (currentIndex > itemCount) {
                    currentIndex = currentIndex - itemCount;
                }

                $(element).parent().find('.owl-number').html(currentIndex + ' <span class="slide-seperated">/</span> ' + itemCount);
            }

            function removeAnimation(event) {
                // var $this = event.target;
                // var item = $($this).find('.owl-item');
                // $(item).find('.post__text').removeClass("fadeInText");
                // $(item).find('.post__text').addClass("opacity-default");
            }

            function showAnimation(event) {
                // var $this = event.target;
                // var item = $($this).find('.active');
                // $(item).find('.post__text').addClass("fadeInText");
                // $(item).find('.post__text').removeClass("opacity-default");
                // $(item).find('.post__thumb').removeClass("FadeOutThumb");
            }
        },
        carousel_1i: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    items: 1,
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                });
            })
        },
        /* ============================================================================
         * Carousel carousel_only_1i_loopdot
         * ==========================================================================*/
        carousel_only_1i_loopdot: function() {
            var $carousels = $('.js-atbs-ceris-carousel-only-1i-loopdot');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-chevron-thin-left"></i>', '<i class="mdicon mdicon-chevron-thin-right"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },

                    },
                });
            })
        },
        carousel_1i_get_background: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i-get-background');
            $carousels.each(function() {
                var $this = $(this);
                $(this).owlCarousel({
                    items: 1,
                    margin: 30,
                    nav: true,
                    loop: true,
                    dots: true,
                    lazyLoad: true,
                    //autoHeight: true,
                    smartSpeed: 450,
                    //animateOut: 'fadeOut',
                    navText: ['<i class="mdicon mdicon-chevron-thin-left"></i>', '<i class="mdicon mdicon-chevron-thin-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 30,
                        },

                        768: {
                            items: 1,
                        },
                    },

                });
                $this.on('translate.owl.carousel', function(event) {
                    var element = event.target;
                    var thebackgroundIMG = $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img');
                    var currentImgSrcData = $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src');
                    thebackgroundIMG.each(function() {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                        } else {
                            $(this).removeAttr('src').attr('src', currentImgSrcData);
                            $(this).addClass('active');
                        }
                    });

                    if (!($(element).parents('.atbs-ceris-block__inner').children('.owl-background img').hasClass('active'))) {

                    }
                    var checkExist = setInterval(function() {
                        $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('srcset', $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('srcset'));
                        $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('href', $(element).find('.owl-item.active').find('h3 > a').attr('href'));
                        $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').closest('a').attr('href', $(element).find('.owl-item.active').find('.post__thumb > a').attr('href'));
                        $(element).parents('.atbs-ceris-block__inner').find('.owl-background .owl-background-img.active').attr('src', $(element).find('.owl-item.active').find('.post__thumb > a > img').attr('src'));

                        clearInterval(checkExist);
                    }, 100); // check every 100ms
                });

                // SetButtonNavDot($(this));
                $(window).resize(function() {
                    SetButtonNavDot($this);
                });

                function SetButtonNavDot(event) {
                    // set x
                    var width_button = parseFloat(event.find('.owl-nav .owl-next').css('width'));
                    var width_dots = parseFloat(event.find('.owl-dots').css('width'));
                    var spacing_x_owl_dots = width_button + 25;
                    var spacing_owl_next = width_button + 25 + width_dots + 25;
                    // set y
                    var height_button = parseFloat(event.find('.owl-nav .owl-next').css('height'));
                    var height_dots = parseFloat(event.find('.owl-dots').css('height'));
                    var spacing_y_owl_dots = parseFloat(height_button / 2 - height_dots / 2);
                    if (window.matchMedia("(max-width: 768px)").matches) {
                        width_button = parseFloat(event.find('.owl-nav .owl-next').css('width'));
                        width_dots = parseFloat(event.find('.owl-dots').css('width'));
                        spacing_x_owl_dots = width_button + 15;
                        spacing_owl_next = width_button + 15 + width_dots + 15;

                        height_button = parseFloat(event.find('.owl-nav .owl-next').css('height'));
                        height_dots = parseFloat(event.find('.owl-dots').css('height'));
                        spacing_y_owl_dots = parseFloat(height_button / 2 - height_dots / 2);
                    }
                    event.find('.owl-dots').css({ "left": spacing_x_owl_dots });
                    event.find('.owl-dots').css({ "bottom": spacing_y_owl_dots });
                    event.find('.owl-nav .owl-next').css({ "left": spacing_owl_next });
                }
            });
        },
        carousel_1i_not_nav: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i_not_nav');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: true,
                    loop: true,
                    autoHeight: false,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        481: {
                            items: 1,
                        },


                        992: {
                            items: 1,
                        },
                    },
                });
            })
        },

        carousel_1i_not_nav_2: function() {
            var $carousels = $('.js-atbs-ceris-carousel-1i_not_nav_2');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: true,
                    loop: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        481: {
                            items: 1,
                        },


                        992: {
                            items: 1,
                        },
                    },
                });
            })
        },

        carousel_1i30m: function() {
            var $carousels = $('.js-carousel-1i30m');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 1,
                    margin: 30,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoHeight: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    smartSpeed: 500,
                });
            })
        },

        carousel_overlap: function() {
            var $carousels = $('.js-atbs-ceris-carousel-overlap');
            $carousels.each(function() {
                var $carousel = $(this);
                $carousel.flickity({
                    wrapAround: true,
                });

                $carousel.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
                    if ((typeof cellIndex === 'number') && ($carousel.data('flickity').selectedIndex != cellIndex)) {
                        $carousel.flickity('selectCell', cellIndex);
                    }
                });
            })
        },
        carousel_2i10m: function() {
            var $carousels = $('.js-carousel-2i10m');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 2,
                    margin: 10,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoplay: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0,
                        },
                        769: {
                            items: 2,
                        },
                    },


                });
            })
        },
        carousel_2i0m: function() {
            var $carousels = $('.js-carousel-2i0m');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 2,
                    loop: true,
                    nav: true,
                    autoHeight: true,
                    dots: true,
                    smartSpeed: 600,
                    // animateOut: 'slideOutDown',
                    navText: ['<i class="mdicon mdicon-chevron-thin-left"></i>', '<i class="mdicon mdicon-chevron-thin-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },
                        992: {
                            items: 2,
                        },

                    },
                });
            })
        },
        carousel_2i4m: function() {
            var $carousels = $('.js-carousel-2i4m');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    items: 2,
                    margin: 4,
                    loop: carousel_loop,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },
                    },
                });
            })
        },
        carousel_2i30m5: function() {
            var $carousels = $('.js-carousel-2i30m5');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 3,
                    margin: 20,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoplay: false,
                    stagePadding: 100,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 15,
                            stagePadding: 0,
                        },
                        321: {
                            items: 1,
                            margin: 15,
                            stagePadding: 0,
                        },
                        381: {
                            items: 1,
                            margin: 20,
                            stagePadding: 20,
                        },
                        421: {
                            items: 1,
                            margin: 25,
                            stagePadding: 25,
                        },
                        481: {
                            items: 1,
                            margin: 30,
                            stagePadding: 50,
                        },
                        577: {
                            items: 1,
                            margin: 15,
                            stagePadding: 50,
                        },
                        681: {
                            items: 1,
                            margin: 30,
                            stagePadding: 100,
                        },
                        769: {
                            items: 2,
                            stagePadding: 50,
                        },
                        992: {
                            items: 2,
                            stagePadding: 100,
                        },
                        1600: {
                            items: 2,
                            margin: 30,
                            stagePadding: 200,
                        }
                    },
                });
            })
        },
        carousel_2i30m: function() {
            var $carousels = $('.js-carousel-2i30m');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 2,
                    margin: 30,
                    smartSpeed: 910,
                    loop: true,
                    nav: true,
                    dots: true,
                    autoplay: false,
                    mouseDrag: false,
                    touchDrag: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0,
                            touchDrag: true,
                        },
                        381: {
                            items: 1,
                            margin: 25,
                            stagePadding: 0,
                        },
                        481: {
                            items: 1,
                            margin: 10,
                        },
                        769: {
                            items: 2,
                            margin: 15,
                        },
                        992: {
                            items: 2,
                            margin: 30,
                        }
                    },

                });
                console.log($(this));
                $(this).parent().find('.owl-background-item-left').css('background-image', 'url(' + $(this).find('.owl-item.active').first().prev().find('.post__thumb').attr('data-background') + ')');
                $(this).parent().find('.owl-background-item-front').css('background-image', 'url(' + $(this).find('.owl-item.active').first().find('.post__thumb').attr('data-background') + ')');
                $(this).parent().find('.owl-background-item-right').css('background-image', 'url(' + $(this).find('.owl-item.active').last().find('.post__thumb').attr('data-background') + ')');
                var img_front;
                var img_back;
                $(this).find('.owl-next').click(function() {
                    $(this).parents('.post-main').addClass('disable-owl-click');
                    $(this).parents('.post-main').find('.MoveLeftToRight').removeClass('MoveLeftToRight');
                    $(this).parents('.post-main').find('.owl-background-item-left').addClass('MoveRightToLeft owl-item-remove');
                    $(this).parent().parent().removeClass("StatusLeft");
                    $(this).parent().parent().addClass("StatusRight");
                    $(this).parents('.owl-carousel').removeClass("dragging");
                });
                $(this).find('.owl-prev').click(function() {
                    $(this).parents('.post-main').addClass('disable-owl-click');
                    $(this).parents('.post-main').find('.MoveLeftToRight').removeClass('MoveRightToLeft');
                    $(this).parents('.post-main').parent().find('.owl-background-item-left').addClass('MoveLeftToRight');
                    $(this).parent().parent().removeClass("StatusRight");
                    $(this).parent().parent().addClass("StatusLeft");
                    $(this).parents('.owl-carousel').removeClass("dragging");
                });
                $(this).on('translate.owl.carousel', function(event) {
                    var element = event.target;
                    var checkExist = setInterval(function() {
                        if ($(element).hasClass('dragging') == false) {
                            if ($(element).hasClass('StatusRight')) {
                                $(element).parent().find('.owl-background-item').children('div').css('margin-right', '0');
                                $(element).removeClass('StatusLeft');
                                var item_active_last = $(element).find('.owl-item.active').first().next();
                                img_back = $(item_active_last).find('.post__thumb').attr('data-background');

                                $(element).parent().find('.owl-background-item-front').first().addClass('owl-background-item-left');
                                $(element).parent().find('.owl-background-item-left').last().removeClass('owl-background-item-front');

                                $(element).parent().find('.owl-background-item-right').first().addClass('owl-background-item-front');
                                $(element).parent().find('.owl-background-item-front').removeClass('owl-background-item-right');
                                $(element).parent().find('.owl-background-item').append('<div class="owl-background-item-right" style="background-image: url(' + img_back + ');"></div>');
                                clearInterval(checkExist);
                            } else if ($(element).hasClass('StatusLeft')) {
                                $(element).removeClass('StatusRight');
                                var item_active_first = $(element).find('.owl-item.active').first().prev();
                                img_front = $(item_active_first).find('.post__thumb').attr('data-background');

                                $(element).parent().find('.owl-background-item-left').first().addClass('owl-background-item-front');
                                $(element).parent().find('.owl-background-item-front').first().removeClass('owl-background-item-left');
                                $(element).parent().find('.owl-background-item-front').last().addClass('owl-background-item-right');
                                $(element).parent().find('.owl-background-item-right').removeClass('owl-background-item-front');
                                $(element).parent().find('.owl-background-item').prepend('<div class="owl-background-item-left margin-right-neg-100" style="background-image: url(' + img_front + ');"></div>');

                                $(element).parent().find('.owl-background-item-right').last().remove();
                                clearInterval(checkExist);
                            }
                        }
                        clearInterval(checkExist);
                    }, 100); // check every 100ms
                });
                $(this).on('translated.owl.carousel', function(event) {
                    $(this).parent().find('.margin-right-neg-100').removeClass('margin-right-neg-100');
                    $(this).parent().find('.MoveLeftToRight').removeClass('MoveLeftToRight');
                    $(this).parent().find('.owl-background-item-front').removeClass('fade-in-fwd');
                    if ($(this).hasClass('StatusRight')) {
                        $(this).parent().find('.owl-item-remove').remove();
                    }
                    var $this = $(this);
                    var checkExist = setInterval(function() {

                        if ($this.parents('.post-main').hasClass('disable-owl-click')) {
                            $this.parents('.post-main').removeClass('disable-owl-click');
                            clearInterval(checkExist);
                        }
                    }, 100); // check every 100ms
                });
                $(this).on("drag.owl.carousel", function(event) {
                    $(this).addClass("dragging");
                });
                $(this).on("dragged.owl.carousel", function(event) {
                    $(this).parent().find('.owl-background-item-front').addClass('fade-in-fwd');
                    $(this).parent().find('.owl-background-item-left').css('background-image', 'url(' + $(this).find('.owl-item.active').first().prev().find('.post__thumb').attr('data-background') + ')');
                    $(this).parent().find('.owl-background-item-front').css('background-image', 'url(' + $(this).find('.owl-item.active').first().find('.post__thumb').attr('data-background') + ')');
                    $(this).parent().find('.owl-background-item-right').css('background-image', 'url(' + $(this).find('.owl-item.active').last().find('.post__thumb').attr('data-background') + ')');

                    //console.log('event : ',event.relatedTarget['_drag']['direction']);
                    // touch right to left
                    // if( event.relatedTarget['_drag']['direction'] == 'left'){
                    //  console.log('a');
                    //
                    // }
                    // // touch left to right
                    // else{
                    //  console.log('b');
                    // }
                });
            })
        },

        carousel_3i: function() {
            var $carousels = $('.js-carousel-3i');
            $carousels.each(function() {
                $(this).owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },

                        992: {
                            items: 3,
                        },
                    },
                });
            })
        },
        carousel_4i30m5_update: function() {
            var $carousels = $('.js-carousel-4i30m5-update');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 4,
                    margin: 20,
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: false,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 15,
                        },
                        321: {
                            items: 1,
                            margin: 15,
                        },
                        380: {
                            items: 1,
                            margin: 15,
                        },
                        481: {
                            items: 2,
                            margin: 15,
                        },
                        577: {
                            items: 2,
                            margin: 15,
                            stagePadding: 50,
                        },
                        680: {
                            items: 2,
                            margin: 15,
                        },
                        769: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        },
                        1600: {
                            items: 4,
                        }
                    },


                });
            })
        },

        carousel_3i30m5_update: function() {
            var $carousels = $('.js-carousel-3i30m5-update');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 3,
                    margin: 20,
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: false,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 15,
                        },
                        321: {
                            items: 1,
                            margin: 15,
                        },
                        380: {
                            items: 1,
                            margin: 15,
                        },
                        481: {
                            items: 2,
                            margin: 15,
                        },
                        577: {
                            items: 2,
                            margin: 15,
                            stagePadding: 50,
                        },
                        680: {
                            items: 2,
                            margin: 15,
                        },
                        769: {
                            items: 2,
                        },
                        992: {
                            items: 3,
                        },
                    },


                });
            })
        },
        carousel_3i30m5: function() {
            var $carousels = $('.js-carousel-3i30m5');
            $carousels.each(function() {
                $(this).owlCarousel({
                    items: 3,
                    margin: 20,
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: false,
                    autoWidth: true,
                    // stagePadding: 100,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 15,
                            // stagePadding: 0,
                        },
                        321: {
                            items: 1,
                            margin: 15,
                            // stagePadding: 30,
                        },
                        381: {
                            items: 2,
                            margin: 15,
                            stagePadding: 30,
                        },
                        481: {
                            items: 2,
                            margin: 30,
                            // stagePadding: 50,
                            // stagePadding: 80,
                        },
                        577: {
                            items: 2,
                            margin: 15,
                            // stagePadding: 50,
                        },
                        680: {
                            items: 2,
                            margin: 15,
                            // stagePadding: 150,
                        },
                        769: {
                            items: 3,
                            // stagePadding: 50,
                        },
                        992: {
                            items: 3,
                            // stagePadding: 100,
                        },
                        1600: {
                            items: 4,
                        }
                    },


                });
            })
        },
        carousel_3i30m: function() {
            var $carousels = $('.js-carousel-3i30m');
            $carousels.each(function() {
                $(this).owlCarousel({
                    margin: 30,
                    loop: true,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        781: {
                            items: 2,
                        },

                        992: {
                            items: 3,
                        },
                    },
                });
            })
        },

        carousel_3i4m: function() {
            var $carousels = $('.js-carousel-3i4m');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    margin: 4,
                    loop: carousel_loop,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },

                        992: {
                            items: 2,
                        },
                        1200: {
                            items: 3,
                        },
                    },
                });
            })
        },

        carousel_3i4m_small: function() {
            var $carousels = $('.js-carousel-3i4m-small');
            $carousels.each(function() {
                $(this).owlCarousel({
                    margin: 4,
                    loop: false,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    autoHeight: true,
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },

                        1200: {
                            items: 3,
                        },
                    },
                });
            })
        },

        carousel_2i20m: function() {
            var $carousels = $('.js-carousel-2i20m');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    margin: 20,
                    loop: carousel_loop,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },
                    },
                });
            })
        },

        carousel_3i20m: function() {
            var $carousels = $('.js-carousel-3i20m');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    margin: 20,
                    loop: carousel_loop,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        481: {
                            items: 2,
                        },

                        992: {
                            items: 3,
                        },
                    },
                });
            })
        },

        carousel_headingAside_3i: function() {
            var $carousels = $('.js-atbs-ceris-carousel-heading-aside-3i');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    margin: 20,
                    nav: false,
                    dots: false,
                    loop: carousel_loop,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            margin: 10,
                            stagePadding: 40,
                            loop: false,
                        },

                        768: {
                            items: 2,
                        },

                        992: {
                            items: 3,
                        },
                    },
                });
            })
        },

        customCarouselNav: function() {
            if ($.isFunction($.fn.owlCarousel)) {
                var $carouselNexts = $('.js-carousel-next');
                $carouselNexts.each(function() {
                    var carouselNext = $(this);
                    var carouselID = carouselNext.parent('.atbs-ceris-carousel-nav-custom-holder').attr('data-carouselID');
                    var $carousel = $('#' + carouselID);

                    carouselNext.on('click', function() {
                        $carousel.trigger('next.owl.carousel');
                    });
                });

                var $carouselPrevs = $('.js-carousel-prev');
                $carouselPrevs.each(function() {
                    var carouselPrev = $(this);
                    var carouselID = carouselPrev.parent('.atbs-ceris-carousel-nav-custom-holder').attr('data-carouselID');
                    var $carousel = $('#' + carouselID);

                    carouselPrev.on('click', function() {
                        $carousel.trigger('prev.owl.carousel');
                    });
                });
            }
        },

        carousel_4i: function() {
            var $carousels = $('.js-carousel-4i');

            $carousels.each(function() {
                $(this).owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },

                        992: {
                            items: 4,
                        },
                    },
                });
            })
        },
        carousel_4i0m: function() {
            var $carousels = $('.js-carousel-4i0m');

            $carousels.each(function() {
                $(this).owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            touchDrag: true,
                            mouseDrag: true,
                            smartSpeed: 800,
                            margin: 20,
                        },
                        481: {
                            items: 2,
                            margin: 8,
                            touchDrag: true,
                            mouseDrag: true,
                            smartSpeed: 800,
                        },
                        577: {
                            items: 2,
                            margin: 8,
                            touchDrag: true,
                            mouseDrag: true,
                            smartSpeed: 800,
                        },
                        769: {
                            items: 3,

                        },
                        992: {
                            items: 3,
                        },
                        1200: {
                            items: 4,
                        },
                    },
                });
            })
        },

        carousel_4i30m: function() {
            var $carousels = $('.js-carousel-4i30m');
            $carousels.each(function() {
                $(this).owlCarousel({
                    loop: false,
                    nav: false,
                    margin: 30,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            touchDrag: true,
                            mouseDrag: true,
                            smartSpeed: 800,
                        },
                        481: {
                            items: 2,
                            margin: 15,
                            touchDrag: true,
                            mouseDrag: true,
                        },
                        577: {
                            items: 2,
                            margin: 15,
                            touchDrag: true,
                            mouseDrag: true,
                        },
                        769: {
                            items: 3,

                        },

                        992: {
                            items: 4,
                        },
                    },
                });
            })
        },
        carousel_4i4m: function() {
            var $carousels = $('.js-carousel-4i4m');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    margin: 4,
                    loop: carousel_loop,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },

                        992: {
                            items: 4,
                        },
                    },
                });
            })
        },
        carousel_4i20m: function() {
            var $carousels = $('.js-carousel-4i20m');

            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    items: 4,
                    margin: 20,
                    loop: carousel_loop,
                    nav: true,
                    dots: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                        },

                        768: {
                            items: 2,
                        },

                        992: {
                            items: 3,
                        },

                        1199: {
                            items: 4,
                        },
                    },
                });
            })
        },

        carousel_5i0m: function() {
            var $carousels = $('.js-carousel-5i0m');
            $carousels.each(function() {
                var carousel_loop = $(this).data('carousel-loop');
                $(this).owlCarousel({
                    margin: 0,
                    // loop: carousel_loop,
                    loop: true,
                    nav: true,
                    dots: true,
                    center: true,
                    autoWidth: true,
                    autoHeight: true,
                    // autoplay: false,
                    // autoplayTimeout: 4000,
                    // autoplayHoverPause: true,
                    navText: ['<i class="mdicon mdicon-navigate_before"></i>', '<i class="mdicon mdicon-navigate_next"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            center: false,
                            margin: 30,
                        },
                        381: {
                            center: true,
                            margin: 30,
                        },
                        481: {
                            items: 2,
                            margin: 30,
                        },
                        767: {
                            items: 1,
                            margin: 30,
                        },
                        992: {
                            margin: 0,
                        },
                        1199: {
                            items: 5,
                        },
                    },
                });
            })
        },
        /* ============================================================================
         * Countdown timer
         * ==========================================================================*/
        countdown: function() {
            if ($.isFunction($.fn.countdown)) {
                var $countdown = $('.js-countdown');

                $countdown.each(function() {
                    var $this = $(this);
                    var finalDate = $this.data('countdown');

                    $this.countdown(finalDate, function(event) {
                        $(this).html(event.strftime('' +
                            '<div class="countdown__section"><span class="countdown__digit">%-D</span><span class="countdown__text meta-font">day%!D</span></div>' +
                            '<div class="countdown__section"><span class="countdown__digit">%H</span><span class="countdown__text meta-font">hr</span></div>' +
                            '<div class="countdown__section"><span class="countdown__digit">%M</span><span class="countdown__text meta-font">min</span></div>' +
                            '<div class="countdown__section"><span class="countdown__digit">%S</span><span class="countdown__text meta-font">sec</span></div>'));
                    });
                });
            };
        },

        /* ============================================================================
         * Scroll top
         * ==========================================================================*/
        goToTop: function() {
            if ($goToTopEl.length) {
                $goToTopEl.on('click', function() {
                    $('html,body').stop(true).animate({ scrollTop: 0 }, 400);
                    return false;
                });
            }
        },

        /* ============================================================================
         * News ticker
         * ==========================================================================*/
        newsTicker: function() {
            var $tickers = $('.js-atbs-ceris-news-ticker');
            $tickers.each(function() {
                var $ticker = $(this);
                var $next = $ticker.siblings('.atbs-ceris-news-ticker__control').find('.atbs-ceris-news-ticker__next');
                var $prev = $ticker.siblings('.atbs-ceris-news-ticker__control').find('.atbs-ceris-news-ticker__prev');

                $ticker.addClass('initialized').vTicker('init', {
                    speed: 300,
                    pause: 3000,
                    showItems: 1,
                });

                $next.on('click', function() {
                    $ticker.vTicker('next', { animate: true });
                });

                $prev.on('click', function() {
                    $ticker.vTicker('prev', { animate: true });
                });
            })
        },

        /* ============================================================================
         * Lightbox
         * ==========================================================================*/
        lightBox: function() {
            if ($.isFunction($.fn.magnificPopup)) {
                var $imageLightbox = $('.js-atbs-ceris-lightbox-image');
                var $galleryLightbox = $('.js-atbs-ceris-lightbox-gallery');

                $imageLightbox.magnificPopup({
                    type: 'image',
                    mainClass: 'mfp-zoom-in',
                    removalDelay: 80,
                });

                $galleryLightbox.each(function() {
                    $(this).magnificPopup({
                        delegate: '.gallery-icon > a',
                        type: 'image',
                        gallery: {
                            enabled: true,
                        },
                        mainClass: 'mfp-zoom-in',
                        removalDelay: 80,
                    });
                });
            }
        },

        /* ============================================================================
         * Custom scrollbar
         * ==========================================================================*/
        perfectScrollbarInit: function() {
            var ps_area = $('.js-perfect-scrollbar');
            ps_area.each(function(index, element) {
                var this_ps_area = element;
                new PerfectScrollbar(this_ps_area);
            });
        },

        /* ============================================================================
         * Sticky sidebar
         * ==========================================================================*/
        stickySidebar: function() {
            setTimeout(function() {
                var $stickySidebar = $('.js-sticky-sidebar');
                var $stickyHeader = $('.js-sticky-header');

                var marginTop = ($stickyHeader.length) ? ($stickyHeader.outerHeight() + 20) : 0; // check if there's sticky header

                if ($(document.body).hasClass('admin-bar')) // check if admin bar is shown.
                    marginTop += 32;

                if ($.isFunction($.fn.theiaStickySidebar)) {
                    $stickySidebar.each(function() {
                        if ($(this).hasClass('atbs-ceris-block__aside-left')) {
                            $(this).theiaStickySidebar({
                                additionalMarginTop: 0,
                                additionalMarginBottom: 0,
                            });
                        } else {
                            $(this).theiaStickySidebar({
                                additionalMarginTop: marginTop,
                                additionalMarginBottom: 20,
                            });
                        }
                    });
                }
            }, 250); // wait a bit for precise height;
            var $stickySidebarMobileFixed = $('.js-sticky-sidebar.atbs-ceris-sub-col--mobile-fixed');
            $stickySidebarMobileFixed.each(function() {
                var $this = $(this);
                var $drop_sub_col = $($this).find('.drop-sub-col');
                var $open_sub_col = $($this).find('.open-sub-col');
                setTimeout(function() {
                    $($this).append('<div class="drop-sub-col"></div>');
                    // <i class="mdicon mdicon-arrow_forward"></i>
                    $($this).append('<div class="open-sub-col"><i class="mdicon mdicon-arrow_forward"></i></div>');

                    var checkExist = setInterval(function() {
                        if ($drop_sub_col && $open_sub_col) {
                            $drop_sub_col = $($this).find('.drop-sub-col');
                            $open_sub_col = $($this).find('.open-sub-col');
                            $drop_sub_col.on('click', function() {
                                $($this).removeClass('active');
                            });
                            $open_sub_col.on('click', function() {
                                $($this).addClass('active');
                            });
                            clearInterval(checkExist);
                        }
                    }, 100); // check every 100ms

                }, 250);
            });
        },

        /* ============================================================================
         * Bootstrap tooltip
         * ==========================================================================*/
        tooltipInit: function() {
            var $element = $('[data-toggle="tooltip"]');

            $element.tooltip();
        },
    };

    ATBS.documentOnLoad = {

        init: function() {
            ATBS.clippedBackground();
            ATBS.documentOnReady.stickySidebar();
        }

    };

    /* ============================================================================
     * Blur background mask
     * ==========================================================================*/
    ATBS.clippedBackground = function() {
        if ($overlayBg.length) {
            $overlayBg.each(function() {
                var $mainArea = $(this).find('.js-overlay-bg-main-area');
                if (!$mainArea.length) {
                    $mainArea = $(this);
                }
                var $subArea = $(this).find('.js-overlay-bg-sub-area');
                var $subBg = $(this).find('.js-overlay-bg-sub');
                if (!$subArea.length) {
                    return;
                }
                if (!$subBg.length) {
                    return;
                }
                var leftOffset = $mainArea.offset().left - $subArea.offset().left;
                var topOffset = $mainArea.offset().top - $subArea.offset().top;

                $subBg.css('display', 'block');
                $subBg.css('position', 'absolute');
                $subBg.css('width', $mainArea.outerWidth() + 'px');
                $subBg.css('height', $mainArea.outerHeight() + 'px');
                $subBg.css('left', leftOffset + 'px');
                $subBg.css('top', topOffset + 'px');
            });
        };
    }

    /* ============================================================================
     * Priority+ menu
     * ==========================================================================*/
    ATBS.priorityNav = function($menu) {
        var $btn = $menu.find('button');
        var $menuWrap = $menu.find('.navigation');
        var $menuItem = $menuWrap.children('li');
        var hasMore = false;

        if (!$menuWrap.length) {
            return;
        }

        function calcWidth() {
            if ($menuWrap[0].getBoundingClientRect().width === 0)
                return;

            var navWidth = 0;

            $menuItem = $menuWrap.children('li');
            $menuItem.each(function() {
                navWidth += $(this)[0].getBoundingClientRect().width;
            });

            if (hasMore) {
                var $more = $menu.find('.priority-nav__more');
                var moreWidth = $more[0].getBoundingClientRect().width;
                var availableSpace = $menu[0].getBoundingClientRect().width;

                //Remove the padding width (assumming padding are px values)
                availableSpace -= (parseInt($menu.css("padding-left"), 10) + parseInt($menu.css("padding-right"), 10));
                //Remove the border width
                availableSpace -= ($menu.outerWidth(false) - $menu.innerWidth());

                if (navWidth > availableSpace) {
                    var $menuItems = $menuWrap.children('li:not(.priority-nav__more)');
                    var itemsToHideCount = 1;

                    $($menuItems.get().reverse()).each(function(index) {
                        navWidth -= $(this)[0].getBoundingClientRect().width;
                        if (navWidth > availableSpace) {
                            itemsToHideCount++;
                        } else {
                            return false;
                        }
                    });

                    var $itemsToHide = $menuWrap.children('li:not(.priority-nav__more)').slice(-itemsToHideCount);

                    $itemsToHide.each(function(index) {
                        $(this).attr('data-width', $(this)[0].getBoundingClientRect().width);
                    });

                    $itemsToHide.prependTo($more.children('ul'));
                } else {
                    var $moreItems = $more.children('ul').children('li');
                    var itemsToShowCount = 0;

                    if ($moreItems.length === 1) { // if there's only 1 item in "More" dropdown
                        if (availableSpace >= (navWidth - moreWidth + $moreItems.first().data('width'))) {
                            itemsToShowCount = 1;
                        }
                    } else {
                        $moreItems.each(function(index) {
                            navWidth += $(this).data('width');
                            if (navWidth <= availableSpace) {
                                itemsToShowCount++;
                            } else {
                                return false;
                            }
                        });
                    }

                    if (itemsToShowCount > 0) {
                        var $itemsToShow = $moreItems.slice(0, itemsToShowCount);

                        $itemsToShow.insertBefore($menuWrap.children('.priority-nav__more'));
                        $moreItems = $more.children('ul').children('li');

                        if ($moreItems.length <= 0) {
                            $more.remove();
                            hasMore = false;
                        }
                    }
                }
            } else {
                var $more = $('<li class="priority-nav__more"><a href="#"><span>More</span><i class="mdicon mdicon-more_vert"></i></a><ul class="sub-menu"></ul></li>');
                var availableSpace = $menu[0].getBoundingClientRect().width;

                //Remove the padding width (assumming padding are px values)
                availableSpace -= (parseInt($menu.css("padding-left"), 10) + parseInt($menu.css("padding-right"), 10));
                //Remove the border width
                availableSpace -= ($menu.outerWidth(false) - $menu.innerWidth());

                if (navWidth > availableSpace) {
                    var $menuItems = $menuWrap.children('li');
                    var itemsToHideCount = 1;

                    $($menuItems.get().reverse()).each(function(index) {
                        navWidth -= $(this)[0].getBoundingClientRect().width;
                        if (navWidth > availableSpace) {
                            itemsToHideCount++;
                        } else {
                            return false;
                        }
                    });

                    var $itemsToHide = $menuWrap.children('li:not(.priority-nav__more)').slice(-itemsToHideCount);

                    $itemsToHide.each(function(index) {
                        $(this).attr('data-width', $(this)[0].getBoundingClientRect().width);
                    });

                    $itemsToHide.prependTo($more.children('ul'));
                    $more.appendTo($menuWrap);
                    hasMore = true;
                }
            }
        }

        $window.on('load webfontLoaded', calcWidth);
        $window.on('resize', $.throttle(50, calcWidth));
    }

    $document.ready(ATBS.documentOnReady.init);
    $window.on('load', ATBS.documentOnLoad.init);

})(jQuery);
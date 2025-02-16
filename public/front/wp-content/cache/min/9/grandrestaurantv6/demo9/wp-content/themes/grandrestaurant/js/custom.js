if (jQuery('#pp_page_title_img_blur').val() != '') {
    (function() {
        jQuery(window).scroll(function() {
            var oVal;
            oVal = jQuery(window).scrollTop() / 300;
            if (oVal > 1) {
                oVal = 1
            }
            if (oVal == 1) {
                jQuery('body.single.single-post .post_share_bubble a.post_share, body.single.single-projects .post_share_bubble a.post_share, body.single.single-attachment .post_share_bubble a.post_share').css('display', 'block')
            }
            if (oVal == 0) {
                jQuery('body.single.single-post .post_share_bubble a.post_share, body.single.single-projects .post_share_bubble a.post_share, body.single.single-attachment .post_share_bubble a.post_share').css('display', 'none')
            }
            return jQuery("#bg_blurred").css("opacity", oVal)
        })
    }).call(this)
}
if (jQuery('#pp_page_title_img_blur').val() != '') {
    (function() {
        jQuery(window).scroll(function() {
            var oVal;
            oVal = jQuery(window).scrollTop() / 300;
            if (oVal > 1) {
                oVal = 1
            }
            oVal = parseFloat(1 - oVal);
            return jQuery("#page_caption.hasbg .page_title_wrapper .page_title_inner").css("opacity", oVal)
        })
    }).call(this)
}
jQuery(document).ready(function() {
    "use strict";
    jQuery(document).setNav();
    jQuery(window).resize(function() {
        jQuery(document).setNav()
    });
    if (jQuery('body').hasClass('single-product')) {
        jQuery('.woocommerce-product-gallery__wrapper').children('div').each(function() {
            jQuery(this).find('a').attr('data-rel', 'woo-product-gallery')
        })
    }
    var moduloLightboxLoad = !1;
    if (jQuery('#tg_enable_theme_lightbox').val() == 1) {
        moduloLightboxLoad = !0
    }
    var moduloThumbnail = !1;
    if (jQuery('#tg_lightbox_thumbnails').val() == 'thumbnail') {
        moduloThumbnail = !0
    }
    if (moduloLightboxLoad) {
        var mobx = new ModuloBox({
            mediaSelector: '.fancy-gallery, .grandrestaurant_gallery_lightbox, .pp_gallery a, .img_frame, .lightbox_vimeo, .lightbox_youtube, .woocommerce-product-gallery__image a',
            scrollToZoom: !0,
            controls: ['zoom', 'play', 'fullScreen', 'close'],
            countTimer: !0,
            thumbnails: moduloThumbnail,
            caption: jQuery('#tg_lightbox_enable_title').val(),
            videoAutoPlay: !0,
            thumbnailSizes: {
                1920: {
                    width: 110,
                    height: 80,
                    gutter: 10
                },
                1280: {
                    width: 90,
                    height: 65,
                    gutter: 10
                },
                680: {
                    width: 70,
                    height: 50,
                    gutter: 8
                },
                480: {
                    width: 60,
                    height: 44,
                    gutter: 5
                }
            }
        });
        mobx.init()
    }
    jQuery('#menu_expand_wrapper a').on('click', function() {
        jQuery('#menu_wrapper').fadeIn();
        jQuery('#custom_logo').animate({
            'left': '15px',
            'opacity': 1
        }, 400);
        jQuery('#menu_close').animate({
            'left': '-10px',
            'opacity': 1
        }, 400);
        jQuery(this).animate({
            'left': '-60px',
            'opacity': 0
        }, 400);
        jQuery('#menu_border_wrapper select').animate({
            'left': '0',
            'opacity': 1
        }, 400).fadeIn()
    });
    jQuery('#menu_close').on('click', function() {
        jQuery('#custom_logo').animate({
            'left': '-200px',
            'opacity': 0
        }, 400);
        jQuery(this).stop().animate({
            'left': '-200px',
            'opacity': 0
        }, 400);
        jQuery('#menu_expand_wrapper a').animate({
            'left': '20px',
            'opacity': 1
        }, 400);
        jQuery('#menu_border_wrapper select').animate({
            'left': '-200px',
            'opacity': 0
        }, 400).fadeOut();
        jQuery('#menu_wrapper').fadeOut()
    });
    jQuery.Isotope.prototype._getMasonryGutterColumns = function() {
        var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
        var containerWidth = this.element.width();
        this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(!0) || containerWidth;
        this.masonry.columnWidth += gutter;
        this.masonry.cols = Math.floor((containerWidth + gutter) / this.masonry.columnWidth);
        this.masonry.cols = Math.max(this.masonry.cols, 1)
    };
    jQuery.Isotope.prototype._masonryReset = function() {
        this.masonry = {};
        this._getMasonryGutterColumns();
        var i = this.masonry.cols;
        this.masonry.colYs = [];
        while (i--) {
            this.masonry.colYs.push(0)
        }
    };
    jQuery.Isotope.prototype._masonryResizeChanged = function() {
        var prevSegments = this.masonry.cols;
        this._getMasonryGutterColumns();
        return (this.masonry.cols !== prevSegments)
    };
    var $window = jQuery(window);
    var dropdowns = jQuery(".portfolio_filter_dropdown");
    dropdowns.find(".portfolio_filter_dropdown_title").on('click', function() {
        dropdowns.find(".portfolio_filter_dropdown_select ul.portfolio_select").hide();
        jQuery(this).next().children().toggle()
    });
    dropdowns.find(".portfolio_filter_dropdown_select ul.portfolio_select li a").on('click', function() {
        var leSpan = jQuery(this).parents(".portfolio_filter_dropdown").find(".portfolio_filter_dropdown_title a span");
        jQuery(this).parents(".portfolio_filter_dropdown").find('.portfolio_filter_dropdown_select a').each(function() {
            jQuery(this).removeClass('selected')
        });
        leSpan.html(jQuery(this).html());
        if (jQuery(this).hasClass('default')) {
            leSpan.removeClass('selected')
        } else {
            leSpan.addClass('selected');
            jQuery(this).addClass('selected')
        }
        jQuery(this).parents("ul").hide()
    });
    jQuery(document).bind('click', function(e) {
        if (!jQuery(e.target).parents().hasClass("portfolio_filter_dropdown")) jQuery(".portfolio_filter_dropdown .portfolio_filter_dropdown_select ul.portfolio_select").hide()
    });

    function reLayout() {
        var jQuerycontainer = jQuery('#photo_wall_wrapper, .photo_wall_wrapper');
        var windowWidth = parseInt(jQuerycontainer.width());
        var jQueryportfolioColumn = 4;
        var columnValue;
        var masonryOpts;
        if (windowWidth < 480) {
            jQueryportfolioColumn = 1
        } else if (windowWidth >= 480 && windowWidth < 960) {
            jQueryportfolioColumn = 2
        } else if (windowWidth >= 960) {
            jQueryportfolioColumn = 4
        }
        $container.addClass('visible');
        $container.isotope({
            resizable: !1,
            itemSelector: '.wall_entry',
        }).isotope()
    }
    var $container = jQuery('#photo_wall_wrapper, .photo_wall_wrapper');
    $container.imagesLoaded(function() {
        reLayout();
        $window.smartresize(reLayout);
        $container.children('.wall_entry').children('.gallery_type').each(function() {
            jQuery(this).addClass('fade-in')
        });
        $container.children('.wall_entry').mouseenter(function() {
            jQuery(this).addClass('hover')
        });
        $container.children('.wall_entry').mouseleave(function() {
            $container.children('.wall_entry').removeClass('hover')
        });
        jQuery(window).trigger('hwparallax.reconfigure')
    });
    jQuery(window).resize(function() {
        if (jQuery(this).width() < 768) {
            jQuery('#menu_expand_wrapper a').trigger('click')
        }
    });
    var isDisableRightClick = jQuery('#pp_enable_right_click').val();
    if (isDisableRightClick != '') {
        jQuery(this).bind("contextmenu", function(e) {
            e.preventDefault()
        })
    }

    function rePortfolioLayout() {
        var jQuerycontainer = jQuery('#portfolio_filter_wrapper, .portfolio_filter_wrapper');
        var windowWidth = jQuerycontainer.width();
        if (jQuery('#pp_menu_layout').val() == 'leftmenu' && jQuery(window).width() > 768) {
            windowWidth = parseInt(windowWidth + 265)
        }
        var jQueryportfolioColumn = jQuery('#pp_portfolio_columns').attr('value');
        var columnValue;
        var masonryOpts;
        if (jQuery('#pp_menu_layout').val() == 'leftmenu') {
            var windowWidth = jQuerycontainer.width()
        }
        if (jQuery.type(jQueryportfolioColumn) === "undefined") {
            if (windowWidth < 481) {
                jQueryportfolioColumn = 1
            } else if (windowWidth >= 480 && windowWidth < 960) {
                jQueryportfolioColumn = 2
            } else if (windowWidth >= 960) {
                jQueryportfolioColumn = 4
            }
        } else {
            if (windowWidth <= 768) {
                jQueryportfolioColumn = 2
            }
        }
        masonryOpts = {
            columnWidth: columnValue
        };
        jQuerycontainer.isotope({
            resizable: !1,
            itemSelector: '.element',
            masonry: masonryOpts
        }).isotope()
    }
    var $window = jQuery(window);
    var jQuerycontainer = jQuery('#portfolio_filter_wrapper, .portfolio_filter_wrapper');
    jQuerycontainer.imagesLoaded(function() {
        rePortfolioLayout();
        $window.smartresize(rePortfolioLayout);
        jQuerycontainer.children('.element').children('.gallery_type').each(function() {
            jQuery(this).addClass('fadeIn')
        });
        jQuerycontainer.children('.element').children('.portfolio_type').each(function() {
            jQuery(this).addClass('fadeIn')
        });
        jQuerycontainer.children('.element').mouseenter(function() {
            jQuery(this).addClass('hover')
        });
        jQuerycontainer.children('.element').mouseleave(function() {
            jQuerycontainer.children('.element').removeClass('hover')
        });
        jQuery(this).addClass('visible');
        jQuery(window).trigger('hwparallax.reconfigure')
    });
    if (jQuery('#tg_project_filterable_link').val() != 1) {
        jQuery('#project_services_filters li a').on('click', function() {
            var selector = jQuery(this).attr('data-filter');
            var selector_combine = jQuery('#project_sectors_filters').find('li').find('a.active').attr('data-filter');
            if (selector_combine != '*') {
                selector += selector_combine
            }
            jQuerycontainer.isotope({
                filter: selector
            });
            jQuery('#project_services_filters li a').removeClass('active');
            jQuery(this).addClass('active');
            return !1
        });
        jQuery('#project_sectors_filters li a').on('click', function() {
            var selector = jQuery(this).attr('data-filter');
            var selector_combine = jQuery('#project_services_filters').find('li').find('a.active').attr('data-filter');
            if (selector_combine != '*') {
                selector += selector_combine
            }
            jQuerycontainer.isotope({
                filter: selector
            });
            jQuery('#project_sectors_filters li a').removeClass('active');
            jQuery(this).addClass('active');
            return !1
        })
    }

    function reBlogLayout() {
        var windowWidth = jQuery(window).width();
        var jQueryblogcontainer = jQuery('#blog_grid_wrapper, .blog_grid_wrapper');
        var containerWidth = jQuery('#blog_grid_wrapper, .blog_grid_wrapper').width();
        var $blogGridColumn = 3;
        var columnValue = 0;
        var masonryOpts;
        if (containerWidth >= 960) {
            columnValue = containerWidth / $blogGridColumn
        } else if (containerWidth < 960 && containerWidth >= 660) {
            columnValue = containerWidth / 2
        } else {
            columnValue = containerWidth / 1
        }
        masonryOpts = {
            columnWidth: columnValue
        };
        jQueryblogcontainer.isotope({
            resizable: !1,
            itemSelector: '.status-publish',
            masonry: masonryOpts
        }).isotope()
    }
    var jQueryblogcontainer = jQuery('#blog_grid_wrapper, .blog_grid_wrapper');
    jQueryblogcontainer.imagesLoaded(function() {
        reBlogLayout();
        $window.smartresize(reBlogLayout);
        jQuery(window).trigger('hwparallax.reconfigure')
    });
    jQuery(window).scroll(function() {
        var calScreenWidth = jQuery(window).width();
        if (jQuery(this).scrollTop() > 200) {
            jQuery('#toTop').stop().css({
                opacity: 0.5,
                "visibility": "visible"
            }).animate({
                "visibility": "visible"
            }, {
                duration: 1000,
                easing: "easeOutExpo"
            })
        } else if (jQuery(this).scrollTop() == 0) {
            jQuery('#toTop').stop().css({
                opacity: 0,
                "visibility": "hidden"
            }).animate({
                "visibility": "hidden"
            }, {
                duration: 1500,
                easing: "easeOutExpo"
            })
        }
    });
    jQuery('#toTop, .hr_totop').on('click', function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800)
    });
    var isDisableDragging = jQuery('#pp_enable_dragging').val();
    if (isDisableDragging != '') {
        jQuery("img").mousedown(function() {
            return !1
        })
    }
    if (jQuery('#pp_topbar').val() == 0) {
        var topBarHeight = jQuery('.header_style_wrapper').height()
    } else {
        var topBarHeight = parseInt(jQuery('.header_style_wrapper').height() - jQuery('.header_style_wrapper .above_top_bar').height())
    }
    var logoHeight = jQuery('#custom_logo img').height();
    var logoTransHeight = jQuery('#custom_logo_transparent img').height();
    var logoMargin = parseInt(jQuery('#custom_logo').css('marginTop'));
    var logoTransMargin = parseInt(jQuery('#custom_logo_transparent').css('marginTop'));
    var menuPaddingTop = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingTop'));
    var menuPaddingBottom = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingBottom'));
    var SearchPaddingTop = parseInt(jQuery('.top_bar #searchform button').css('paddingTop'));
    var menuLayout = jQuery('#pp_menu_layout').val();
    var headercontent = jQuery('#grandrestaurant_header_content').val();
    var fixedMenu = jQuery('#pp_fixed_menu').val();
    if (menuLayout != 'leftmenu' || jQuery(window).width() <= 768) {
        if (headercontent == 'menu') {
            jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height()) + 'px')
        } else {
            jQuery('#wrapper').css('paddingTop', parseInt(jQuery('#elementor-header').height()) + 'px');
            setTimeout(function() {
                jQuery('#wrapper').css('paddingTop', parseInt(jQuery('#elementor-header').height()) + 'px')
            }, 200);
            setTimeout(function() {
                jQuery('#wrapper').css('paddingTop', parseInt(jQuery('#elementor-header').height()) + 'px')
            }, 1000)
        }
    }
    jQuery(window).resize(function() {
        if (jQuery(this).width() > 960) {
            if (menuLayout != 'leftmenu') {
                var resizedTopBarHeight = jQuery('.header_style_wrapper').height();
                jQuery('#wrapper').css('paddingTop', resizedTopBarHeight + 'px');
                jQuery('.logo_wrapper').css('marginTop', '');
                jQuery('.top_bar #searchform button').css('paddingTop', '')
            } else {
                jQuery('#wrapper').css('paddingTop', 0)
            }
        } else {
            jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height()) + 'px')
        }
    });
    if (menuLayout != 'leftmenu' || jQuery(window).width() <= 960) {
        if (jQuery(window).width() > 960) {
            jQuery('#wrapper').css('paddingTop', parseInt(topBarHeight + jQuery('.header_style_wrapper .above_top_bar').height()) + 'px');
            jQuery('.top_bar').css('height', topBarHeight + 'px')
        } else {
            jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height()) + 'px')
        }
        jQuery(window).scroll(function() {
            if (jQuery('#pp_fixed_menu').val() == 1) {
                if (jQuery(this).scrollTop() >= 200) {
                    jQuery('.header_style_wrapper .above_top_bar').hide();
                    jQuery('.extend_top_contact_info').hide();
                    if (jQuery(window).width() >= 1024) {
                        jQuery('.top_bar').addClass('scroll');
                        jQuery('.top_bar').css('height', parseInt(topBarHeight / 1.5) + 'px');
                        jQuery('.top_bar').css('height', parseInt(topBarHeight / 1.5) + 'px');
                        jQuery('#custom_logo img').addClass('zoom');
                        jQuery('#custom_logo img').css('width', 'auto');
                        jQuery('#custom_logo img').css('maxHeight', parseInt(topBarHeight / 3) + 'px');
                        jQuery('#custom_logo_transparent img').addClass('zoom');
                        jQuery('#custom_logo').css('marginTop', parseInt(logoMargin / 1.5) + 'px');
                        jQuery('#custom_logo_transparent').css('marginTop', parseInt(logoTransMargin / 1.5) + 'px');
                        jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', parseInt(menuPaddingTop / 1.7) + 'px');
                        jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', parseInt(menuPaddingBottom / 1.7) + 'px');
                        if (menuLayout == 'centermenu') {
                            jQuery('.logo_container').addClass('hidden')
                        }
                    }
                    if (jQuery('.top_bar').hasClass('hasbg')) {
                        jQuery('.top_bar').removeClass('hasbg');
                        jQuery('.top_bar').data('hasbg', 1);
                        jQuery('#custom_logo').removeClass('hidden');
                        jQuery('#custom_logo_transparent').addClass('hidden')
                    }
                } else if (jQuery(this).scrollTop() < 200) {
                    jQuery('.header_style_wrapper .above_top_bar').show();
                    jQuery('.extend_top_contact_info').show();
                    jQuery('.top_bar').removeClass('scroll');
                    jQuery('.top_bar').css('height', topBarHeight + 'px');
                    jQuery('#custom_logo img').removeClass('zoom');
                    jQuery('#custom_logo img').css('maxHeight', '');
                    jQuery('#custom_logo_transparent img').removeClass('zoom');
                    jQuery('#custom_logo').css('marginTop', parseInt(logoMargin) + 'px');
                    jQuery('#custom_logo_transparent').css('marginTop', parseInt(logoTransMargin) + 'px');
                    jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', menuPaddingTop + 'px');
                    jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', menuPaddingBottom + 'px');
                    if (menuLayout == 'centermenu') {
                        if (jQuery('.top_bar').data('hasbg') == 1) {
                            jQuery('#logo_transparent.logo_container').removeClass('hidden')
                        } else {
                            jQuery('#logo_normal.logo_container').removeClass('hidden')
                        }
                    }
                    if (jQuery('.top_bar').data('hasbg') == 1) {
                        jQuery('.top_bar').addClass('hasbg');
                        jQuery('#custom_logo').addClass('hidden');
                        jQuery('#custom_logo_transparent').removeClass('hidden')
                    }
                }
            } else {
                if (jQuery(this).scrollTop() >= 200) {
                    jQuery('.header_style_wrapper').addClass('nofixed')
                } else {
                    jQuery('.header_style_wrapper').removeClass('nofixed')
                }
            }
        })
    }
    jQuery('.post_img img').imagesLoaded(function() {
        jQuery(this).parent('.post_img').addClass('fadeIn')
    });
    jQuery(document).mouseenter(function() {
        jQuery('body').addClass('hover')
    });
    jQuery(document).mouseleave(function() {
        jQuery('body').removeClass('hover')
    });
    jQuery('#slidecaption').center();
    jQuery(window).resize(function() {
        jQuery('#slidecaption').center()
    });
    var siteBaseURL = jQuery('#pp_homepage_url').val();
    if (jQuery('#pp_ajax_search').val() != '') {
        jQuery('#s').on('input', function() {
            jQuery.ajax({
                url: siteBaseURL + "/wp-admin/admin-ajax.php",
                type: 'POST',
                data: 'action=pp_ajax_search&s=' + jQuery('#s').val(),
                success: function(results) {
                    jQuery("#autocomplete").html(results);
                    if (results != '') {
                        jQuery("#autocomplete").addClass('visible');
                        jQuery("#autocomplete").show();
                        jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'visible')
                    } else {
                        jQuery("#autocomplete").hide();
                        jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'scroll')
                    }
                }
            })
        });
        jQuery("#s").keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
                jQuery("form#searchform").submit()
            }
        });
        jQuery('#s').focus(function() {
            if (jQuery('#autocomplete').html() != '') {
                jQuery("#autocomplete").addClass('visible');
                jQuery("#autocomplete").fadeIn()
            }
        });
        jQuery('#s').blur(function() {
            jQuery("#autocomplete").fadeOut()
        })
    }
    jQuery('.animated').imagesLoaded(function() {
        var windowWidth = jQuery(window).width();
        var animatedElement = jQuery(this);
        if (windowWidth >= 960) {
            animatedElement.waypoint(function(direction) {
                var animationClass = animatedElement.data('animation');
                animatedElement.addClass(animationClass, direction === 'down')
            }, {
                offset: '100%'
            })
        }
    });
    jQuery('#post_more_close').on('click', function() {
        jQuery('#post_more_wrapper').animate({
            right: '-380px'
        }, 300);
        return !1
    });
    jQuery('.parallax').each(function() {
        var parallaxHeight = jQuery(this).data('content-height');
        parallaxHeight = parseInt((parallaxHeight / 100) * jQuery(window).height());
        jQuery(this).css('height', parallaxHeight + 'px')
    });
    if (jQuery(window).width() >= 960) {
        jQuery('.parallax').parallax()
    } else {
        jQuery('.parallax').each(function() {
            var dataImgURL = jQuery(this).data('image');
            if (jQuery.type(dataImgURL) != "undefined") {
                jQuery(this).css('background-image', 'url(' + dataImgURL + ')');
                jQuery(this).css('background-size', 'cover');
                jQuery(this).css('background-position', 'center center')
            }
        })
    }
    jQuery(window).resize(function() {
        if (jQuery(window).width() >= 960) {
            jQuery('.parallax').each(function() {
                var parallaxHeight = jQuery(this).data('content-height');
                parallaxHeight = parseInt((parallaxHeight / 100) * jQuery(window).height());
                jQuery(this).css('height', parallaxHeight + 'px')
            });
            jQuery(window).trigger('hwparallax.reconfigure')
        } else {
            jQuery('.parallax').each(function() {
                var dataImgURL = jQuery(this).data('image');
                if (jQuery.type(dataImgURL) != "undefined") {
                    jQuery(this).css('background-image', 'url(' + dataImgURL + ')');
                    jQuery(this).css('background-size', 'cover');
                    jQuery(this).css('background-position', 'center center')
                }
            })
        }
    });
    var stellarActivated = !1;
    if (jQuery(window).width() >= 1024) {
        stellarActivated = !0;
        jQuery(window).stellar({
            positionProperty: 'transform',
            parallaxBackgrounds: !1,
            responsive: !0,
            horizontalScrolling: !1,
            hideDistantElements: !0
        })
    }
    if (jQuery(window).width() <= 1024) {
        if (stellarActivated == !0) {
            stellarActivated = !1
        }
    } else {
        if (stellarActivated == !1) {
            jQuery(window).stellar({
                positionProperty: 'transform',
                parallaxBackgrounds: !1,
                responsive: !0,
                horizontalScrolling: !1,
                hideDistantElements: !0
            });
            stellarActivated = !0
        }
    }
    jQuery(window).resize(function() {
        if (jQuery(window).width() >= 1024) {
            stellarActivated = !0;
            jQuery(window).stellar({
                positionProperty: 'transform',
                parallaxBackgrounds: !1,
                responsive: !0,
                horizontalScrolling: !1,
                hideDistantElements: !0
            })
        }
        if (jQuery(window).width() <= 1024) {
            if (stellarActivated == !0) {
                stellarActivated = !1
            }
        } else {
            if (stellarActivated == !1) {
                jQuery(window).stellar({
                    positionProperty: 'transform',
                    parallaxBackgrounds: !1,
                    responsive: !0,
                    horizontalScrolling: !1,
                    hideDistantElements: !0
                });
                stellarActivated = !0
            }
        }
    });
    jQuery('#mobile_nav_icon').on('click', function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 100);
        jQuery('body').toggleClass('js_nav')
    });
    jQuery('#close_mobile_menu, #overlay_background').on('click', function() {
        jQuery('body').removeClass('js_nav');
        setTimeout(function() {
            jQuery('.rev_slider_wrapper').css('left', '0px')
        }, 500)
    });
    jQuery('.mobile_menu_close a').on('click', function() {
        jQuery('body').removeClass('js_nav');
        setTimeout(function() {
            jQuery('.rev_slider_wrapper').css('left', '0px')
        }, 500)
    });
    jQuery('.close_alert').on('click', function() {
        var target = jQuery(this).data('target');
        jQuery('#' + target).fadeOut()
    });
    jQuery('.progress_bar').waypoint(function(direction) {
        jQuery(this).addClass('fadeIn');
        var progressContent = jQuery(this).children('.progress_bar_holder').children('.progress_bar_content');
        var progressWidth = progressContent.data('score');
        progressContent.css({
            'width': progressWidth + '%'
        })
    }, {
        offset: '100%'
    });
    jQuery('.tooltip').tooltipster();
    jQuery('.demotip').tooltipster({
        position: 'left',
        theme: 'tooltipster-themegoods-demo',
    });
    jQuery('.portfolio_prev_next_link').each(function() {
        jQuery(this).tooltipster({
            content: jQuery('<img src="' + jQuery(this).attr('data-img') + '" /><br/><div style="text-align:center;margin:7px 0 5px 0;"><strong>' + jQuery(this).attr('data-title') + '</strong></div>')
        })
    });
    jQuery('.post_prev_next_link').each(function() {
        jQuery(this).tooltipster({
            content: jQuery('<img src="' + jQuery(this).attr('data-img') + '" />')
        })
    });
    jQuery('.rev_slider_wrapper.fullscreen-container').each(function() {
        jQuery(this).append('<div class="icon-scroll"></div>')
    });
    jQuery('.post_share').on('click', function() {
        var targetShareID = jQuery(this).attr('data-share');
        var targetParentID = jQuery(this).attr('data-parent');
        jQuery(this).toggleClass('visible');
        jQuery('#' + targetShareID).toggleClass('slideUp');
        jQuery('#' + targetParentID).toggleClass('sharing');
        return !1
    });
    if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0) {
        var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
        var topBarHeight = jQuery('.top_bar').height();
        if (jQuery('.above_top_bar').length > 0) {
            topBarHeight += jQuery('.above_top_bar').height()
        }
        if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0) {
            var topBarHeight = 55
        }
        jQuery('.ppb_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px');
        jQuery('#page_content_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px')
    }
    jQuery(window).resize(function() {
        if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').length > 0) {
            var sliderHeight = jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper').height();
            var topBarHeight = jQuery('.top_bar').height();
            if (jQuery('.above_top_bar').length > 0) {
                topBarHeight += jQuery('.above_top_bar').height()
            }
            if (jQuery('.page_slider.menu_transparent').find('.rev_slider_wrapper.fullscreen-container').length > 0) {
                var topBarHeight = 55
            }
            jQuery('.ppb_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px');
            jQuery('#page_content_wrapper').css('marginTop', sliderHeight - topBarHeight + 'px')
        }
    });
    jQuery('.skin_box').on('click', function() {
        jQuery('.skin_box').removeClass('selected');
        jQuery(this).addClass('selected');
        jQuery('#skin').val(jQuery(this).attr('data-color'))
    });
    jQuery('#demo_apply').on('click', function() {
        jQuery('#ajax_loading').addClass('visible');
        jQuery('body').addClass('loading');
        jQuery("form#form_option").submit()
    });
    jQuery('#option_wrapper').mouseenter(function() {
        jQuery('body').addClass('overflow_hidden')
    });
    jQuery('#option_wrapper').mouseleave(function() {
        jQuery('body').removeClass('overflow_hidden')
    });
    jQuery('.animate').waypoint(function(direction) {
        var windowWidth = jQuery(window).width();
        jQuery(this).addClass('visible', direction === 'down')
    }, {
        offset: '80%'
    });
    var calScreenHeight = jQuery(window).height() - 108;
    var miniRightPos = 800;
    var cols = 3
    var masonry = jQuery('.gallery_mansory_wrapper');
    masonry.imagesLoaded(function() {
        masonry.masonry({
            itemSelector: '.mansory_thumbnail',
            isResizable: !0,
            isAnimated: !0,
            isFitWidth: !0,
            columnWidth: Math.floor((masonry.width() / cols))
        });
        masonry.children('.mansory_thumbnail').children('.gallery_type').each(function() {
            jQuery(this).addClass('fade-in')
        });
        jQuery(window).trigger('hwparallax.reconfigure')
    });
    jQuery(window).resize(function() {
        var masonry = jQuery('.gallery_mansory_wrapper');
        masonry.imagesLoaded(function() {
            masonry.masonry({
                itemSelector: '.mansory_thumbnail',
                isResizable: !0,
                isAnimated: !0,
                isFitWidth: !0,
                columnWidth: Math.floor((masonry.width() / cols))
            });
            masonry.children('.mansory_thumbnail').children('.gallery_type').each(function() {
                jQuery(this).addClass('fade-in')
            })
        })
    });
    jQuery('#tg_reservation:not(.custom_link), .tg_reservation').on('click', function(e) {
        e.preventDefault();
        jQuery('#reservation_wrapper').fadeIn();
        jQuery('body').removeClass('js_nav');
        jQuery('body').addClass('overflow_hidden');
        jQuery('html').addClass('overflow_hidden')
    });
    jQuery('#tg_sidemenu_reservation:not(.custom_link)').on('click', function(e) {
        e.preventDefault();
        jQuery('#reservation_wrapper').fadeIn();
        jQuery('body').removeClass('js_nav');
        jQuery('body').addClass('overflow_hidden');
        jQuery('html').addClass('overflow_hidden')
    });
    jQuery('#reservation_cancel_btn').on('click', function() {
        jQuery('#reservation_wrapper').fadeOut();
        jQuery('body').removeClass('overflow_hidden');
        jQuery('html').removeClass('overflow_hidden')
    });
    jQuery('.mobile_main_nav li a, #sub_menu li a').on('click', function() {
        if (!jQuery(this).parent('li').hasClass('menu-item-has-children')) {
            jQuery('body').removeClass('js_nav')
        }
    });
    jQuery('body').on('adding_to_cart', function(event, param1, param2) {
        var currentCartCount = parseInt(jQuery('.header_cart_wrapper .cart_count').html());
        currentCartCount = currentCartCount + 1;
        jQuery('.header_cart_wrapper .cart_count').html(currentCartCount)
    });
    if (jQuery('.one.fullwidth.slideronly').length > 0) {
        jQuery('body').addClass('overflow_hidden')
    }
    var menuLayout = jQuery('#pp_menu_layout').val();
    if (jQuery(window).width() < 960 && menuLayout == 'leftmenu') {
        document.getElementById("leftmenu.css-css").disabled = !0;
        jQuery('.mobile_menu_wrapper .logo_container').hide()
    }
    jQuery(window).resize(function() {
        if (jQuery(window).width() >= 960 && menuLayout == 'leftmenu') {
            document.getElementById("leftmenu.css-css").disabled = !1;
            jQuery('.mobile_menu_wrapper .logo_container').show()
        } else if (jQuery(window).width() < 960 && menuLayout == 'leftmenu') {
            document.getElementById("leftmenu.css-css").disabled = !0;
            jQuery('.mobile_menu_wrapper .logo_container').hide()
        }
    });
    jQuery(window).scroll(function() {
        if (fixedMenu == 1) {
            if (jQuery(this).scrollTop() >= 100) {
                jQuery('#elementor-header').removeClass('visible');
                jQuery('#elementor-sticky-header').addClass('visible');
                jQuery('#elementor-header').addClass('scrolling');
                jQuery('#elementor-sticky-header').addClass('scrolling')
            } else if (jQuery(this).scrollTop() < 100) {
                jQuery('#elementor-header').addClass('visible');
                jQuery('#elementor-sticky-header').removeClass('visible');
                jQuery('#elementor-header').removeClass('scrolling');
                jQuery('#elementor-sticky-header').removeClass('scrolling')
            }
        } else {
            if (jQuery(this).scrollTop() >= 100) {
                jQuery('#elementor-header').removeClass('visible');
                jQuery('#elementor-header').addClass('scrolling')
            } else if (jQuery(this).scrollTop() < 100) {
                jQuery('#elementor-header').addClass('visible');
                jQuery('#elementor-header').removeClass('scrolling')
            }
        }
    });
    if (jQuery(window).scrollTop() < 100) {
        setTimeout(function() {
            jQuery('#elementor-header').addClass('visible')
        }, 200)
    } else {
        setTimeout(function() {
            jQuery('#elementor-sticky-header').addClass('visible')
        }, 200)
    }
    jQuery('.smoove').each(function() {
        var minWidth = 1;
        if (typeof jQuery(this).attr('data-minwidth') != 'undefined') {
            minWidth = jQuery(this).attr('data-minwidth')
        }
        var offset = '20%';
        if (typeof jQuery(this).attr('data-offset') != 'undefined') {
            offset = jQuery(this).attr('data-offset')
        }
        jQuery(this).smoove({
            min_width: parseInt(minWidth),
            offset: offset
        })
    })
});
jQuery(window).on('resize load', adjustIframes)
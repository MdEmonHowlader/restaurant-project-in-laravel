/*!
 * jQuery Smoove v0.2.11 (http://smoove.js.org/)
 * Copyright (c) 2017 Adam Bouqdib
 * Licensed under GPL-2.0 (http://abemedia.co.uk/license) 
 */
(function($, window, document) {
    function crossBrowser(property, value, prefix) {
        function ucase(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
        var vendor = ['webkit', 'moz', 'ms', 'o'],
            properties = {};
        for (var i = 0; i < vendor.length; i++) {
            if (prefix) {
                value = value.replace(prefix, '-' + vendor[i] + '-' + prefix)
            }
            properties[ucase(vendor[i]) + ucase(property)] = value
        }
        properties[property] = value;
        return properties
    }

    function smooveIt(direction) {
        var height = $(window).height(),
            width = $(window).width();
        for (var i = 0; i < $.fn.smoove.items.length; i++) {
            var $item = $.fn.smoove.items[i],
                params = $item.params;
            if (!$item.hasClass('smooved')) {
                var offset = (!direction || direction === 'down' && $item.css('opacity') === '1') ? 0 : params.offset,
                    itemtop = $(window).scrollTop() + height - $item.offset().top;
                if (typeof offset === 'string' && offset.indexOf('%')) {
                    offset = parseInt(offset) / 100 * height
                }
                if (itemtop < offset || direction == 'first') {
                    if (!isNaN(params.opacity)) {
                        $item.css({
                            opacity: params.opacity
                        })
                    }
                    var transforms = [],
                        properties = ['move', 'move3D', 'moveX', 'moveY', 'moveZ', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'skew', 'skewX', 'skewY'];
                    for (var p = 0; p < properties.length; p++) {
                        if (typeof params[properties[p]] !== "undefined") {
                            transforms[properties[p]] = params[properties[p]]
                        }
                    }
                    var transform = '';
                    for (var t in transforms) {
                        transform += t.replace('move', 'translate') + '(' + transforms[t] + ') '
                    }
                    if (transform) {
                        $item.css(crossBrowser('transform', transform));
                        $item.parent().css(crossBrowser('perspective', params.perspective));
                        if (params.transformOrigin) {
                            $item.css(crossBrowser('transformOrigin', params.transformOrigin))
                        }
                    }
                    if (typeof params.delay !== "undefined" && params.delay > 0) {
                        $item.css('transition-delay', parseInt(params.delay) + 'ms')
                    }
                    $item.addClass('first_smooved')
                } else {
                    if (!$item.hasClass('first_smooved') === !0) {
                        $item.css('opacity', 1).css(crossBrowser('transform', 'translate(0px, 0px)')).css('transform', '');
                        $item.addClass('smooved');
                        $item.parent().addClass('smooved')
                    } else {
                        jQuery('body').addClass('has-smoove');
                        if (itemtop < offset || jQuery(window).height() >= jQuery(document).height()) {
                            $item.queue(function(next) {
                                jQuery(this).css('opacity', 1).css(crossBrowser('transform', 'translate(0px, 0px)')).css('transform', '');
                                $item.addClass('smooved');
                                $item.parent().addClass('smooved');
                                $item.removeClass('first_smooved');
                                next()
                            })
                        } else {
                            $item.delay(1000).queue(function(next) {
                                window.scrollTo(window.scrollX, window.scrollY + 1)
                            });
                            $item.removeClass('first_smooved')
                        }
                    }
                }
            }
        }
    }

    function throttle(fn, threshhold, scope) {
        threshhold = threshhold || 250;
        var last, deferTimer;
        return function() {
            var context = scope || this,
                now = +new Date(),
                args = arguments;
            if (last && now < last + threshhold) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function() {
                    last = now;
                    fn.apply(context, args)
                }, threshhold)
            } else {
                last = now;
                fn.apply(context, args)
            }
        }
    }
    $.fn.smoove = function(options) {
        $.fn.smoove.init(this, $.extend({}, $.fn.smoove.defaults, options));
        return this
    };
    $.fn.smoove.items = [];
    $.fn.smoove.loaded = !1;
    $.fn.smoove.defaults = {
        offset: '50%',
        opacity: 0,
        delay: '0ms',
        duration: '500ms',
        transition: "",
        transformStyle: 'preserve-3d',
        transformOrigin: !1,
        perspective: 1000,
        min_width: 768,
        min_height: !1
    };
    $.fn.smoove.init = function(items, settings) {
        items.each(function() {
            var $item = $(this),
                params = $item.params = $.extend({}, settings, $item.data());
            $item.data('top', $item.offset().top);
            params.transition = crossBrowser('transition', params.transition, 'transform');
            $item.css(params.transition);
            $.fn.smoove.items.push($item)
        });
        if (!$.fn.smoove.loaded) {
            $.fn.smoove.loaded = !0;
            var oldScroll = 0,
                oldHeight = $(window).height(),
                oldWidth = $(window).width(),
                oldDocHeight = $(document).height(),
                resizing;
            if ($('body').width() === $(window).width()) {
                $('body').addClass('smoove-overflow')
            }
            if ($('body').hasClass('elementor-editor-active')) {
                $('iframe#elementor-preview-iframe').ready(function() {
                    smooveIt('first');
                    $(window).on('scroll', throttle(function() {
                        var scrolltop = $(window).scrollTop(),
                            direction = (scrolltop < oldScroll) ? direction = 'up' : 'down';
                        oldScroll = scrolltop;
                        smooveIt(direction)
                    }, 250));
                    window.scrollTo(window.scrollX, window.scrollY + 1)
                })
            } else {
                jQuery(document).ready(function() {
                    smooveIt('down');
                    $(window).on('scroll', throttle(function() {
                        var scrolltop = $(window).scrollTop(),
                            direction = (scrolltop < oldScroll) ? direction = 'up' : 'down';
                        oldScroll = scrolltop;
                        smooveIt(direction)
                    }, 250));
                    if (jQuery(window).height() >= jQuery(document).height()) {
                        smooveIt('down')
                    }
                    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                    if (isFirefox) {
                        window.scrollTo(window.scrollX, window.scrollY + 1)
                    }
                    var isTouch = ('ontouchstart' in document.documentElement);
                    if (isTouch) {
                        window.scrollTo(window.scrollX, window.scrollY + 1)
                    }
                })
            }
        }
    }
}(jQuery, window, document))
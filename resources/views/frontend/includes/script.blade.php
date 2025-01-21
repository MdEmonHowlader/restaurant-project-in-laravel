<script>
    (function() {
        function maybePrefixUrlField() {
            const value = this.value.trim()
            if (value !== '' && value.indexOf('http') !== 0) {
                this.value = 'http://' + value
            }
        }

        const urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]')
        for (let j = 0; j < urlFields.length; j++) {
            urlFields[j].addEventListener('blur', maybePrefixUrlField)
        }
    })();
</script>
<script type="text/javascript">
    (function() {
        var c = document.body.className;
        c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
        document.body.className = c;
    })();
</script>
<link rel='stylesheet' id='elementor-post-70-css'
    href='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/elementor/css/post-70.css'
    type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-91-css'
    href='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/elementor/css/post-91.css'
    type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-8-css'
    href='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/elementor/css/post-8.css'
    type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-shared-0-css'
    href='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css'
    type='text/css' media='all' />
<link data-minify="1" rel='stylesheet' id='elementor-icons-fa-brands-css'
    href='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=1710685274'
    type='text/css' media='all' />
<link data-minify="1" rel='stylesheet' id='elementor-icons-fa-solid-css'
    href='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=1710685274'
    type='text/css' media='all' />
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.lazy.js?ver=1710685274'
    id='lazy-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/modulobox.js?ver=1710685274'
    id='modulobox-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.parallax-scroll.js?ver=1710685274'
    id='parallax-scroll-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.smoove.js?ver=1710685274'
    id='smoove-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/parallax.js?ver=1710685274'
    id='parallax-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.blast.js?ver=1710685274'
    id='blast-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/jarallax.js?ver=1710685274'
    id='jarallax-js'></script>
<script type='text/javascript'
    src='{{ asset('assets/js/jquery.sticky-kit.js') }}'
    id='sticky-kit-js'></script>
<script type='text/javascript' id='grandrestaurant-elementor-js-extra'>
    /* <![CDATA[ */
    var tgAjax = {
        "ajaxurl": "https:\/\/themes.themegoods.com\/grandrestaurantv6\/demo9\/wp-admin\/admin-ajax.php",
        "ajax_nonce": "a48fd7f044"
    };
    /* ]]> */
</script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/grandrestaurant-elementor/assets/js/grandrestaurant-elementor.js?ver=1710685274'
    id='grandrestaurant-elementor-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=1710685274'
    id='swv-js'></script>
<script type='text/javascript' id='contact-form-7-js-extra'>
    /* <![CDATA[ */
    var wpcf7 = {
        "api": {
            "root": "https:\/\/themes.themegoods.com\/grandrestaurantv6\/demo9\/wp-json\/",
            "namespace": "contact-form-7\/v1"
        },
        "cached": "1"
    };
    /* ]]> */
</script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/contact-form-7/includes/js/index.js?ver=1710685274'
    id='contact-form-7-js'></script>
<script type='text/javascript' id='wapf-frontend-js-js-extra'>
    /* <![CDATA[ */
    var wapf_config = {
        "page_type": "other"
    };
    /* ]]> */
</script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/advanced-product-fields-for-woocommerce/assets/js/frontend.min.js'
    id='wapf-frontend-js-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js'
    id='jquery-blockui-js'></script>
<script type='text/javascript' id='wc-add-to-cart-js-extra'>
    /* <![CDATA[ */
    var wc_add_to_cart_params = {
        "ajax_url": "\/grandrestaurantv6\/demo9\/wp-admin\/admin-ajax.php",
        "wc_ajax_url": "\/grandrestaurantv6\/demo9\/?wc-ajax=%%endpoint%%",
        "i18n_view_cart": "View cart",
        "cart_url": "https:\/\/themes.themegoods.com\/grandrestaurantv6\/demo9\/cart\/",
        "is_cart": "",
        "cart_redirect_after_add": "no"
    };
    /* ]]> */
</script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js'
    id='wc-add-to-cart-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js'
    id='js-cookie-js'></script>
<script type='text/javascript' id='woocommerce-js-extra'>
    /* <![CDATA[ */
    var woocommerce_params = {
        "ajax_url": "\/grandrestaurantv6\/demo9\/wp-admin\/admin-ajax.php",
        "wc_ajax_url": "\/grandrestaurantv6\/demo9\/?wc-ajax=%%endpoint%%"
    };
    /* ]]> */
</script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js'
    id='woocommerce-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/modulobox/modulobox.js?ver=1710685274'
    id='/modulobox/modulobox.js-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/jquery.easing.js?ver=1710685274'
    id='jquery.easing.js-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/waypoints.min.js'
    id='waypoints.min.js-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/jquery.isotope.js?ver=1710685274'
    id='jquery.isotope.js-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/jquery.masory.js?ver=1710685274'
    id='jquery.masory.js-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/jquery.tooltipster.min.js'
    id='jquery.tooltipster.min.js-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/hw-parallax.js?ver=1710685274'
    id='hw-parallax.js-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/jquery.stellar.min.js'
    id='jquery.stellar.min.js-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/jquery.resizeimagetoparent.min.js'
    id='jquery.resizeimagetoparent.min.js-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/custom_plugins.js?ver=1710685274'
    id='custom_plugins.js-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/custom.js?ver=1710685274'
    id='custom.js-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/loftloader/assets/js/loftloader.min.js'
    id='loftloader-lite-front-main-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/ajax-add-to-cart.js?ver=1710685274'
    id='grandrestaurant_mini_cart-ajax-add-to-cart-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min.js'
    id='jquery-cookie-js'></script>
<script data-minify="1" type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/js/custom-demo.js?ver=1710685274'
    id='script-demo-js'></script>
<script data-minify="1" type='text/javascript' defer
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/cache/min/9/grandrestaurantv6/demo9/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=1710685274'
    id='mc4wp-forms-api-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js'
    id='elementor-webpack-runtime-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/elementor/assets/js/frontend-modules.min.js'
    id='elementor-frontend-modules-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js'
    id='elementor-waypoints-js'></script>
<script type='text/javascript'
    src='https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-includes/js/jquery/ui/core.min.js'
    id='jquery-ui-core-js'></script>
<script id="elementor-frontend-js-before" type="text/javascript">
    var elementorFrontendConfig = {
        "environmentMode": {
            "edit": false,
            "wpPreview": false,
            "isScriptDebug": false
        },
        "i18n": {
            "shareOnFacebook": "Share on Facebook",
            "shareOnTwitter": "Share on Twitter",
            "pinIt": "Pin it",
            "download": "Download",
            "downloadImage": "Download image",
            "fullscreen": "Fullscreen",
            "zoom": "Zoom",
            "share": "Share",
            "playVideo": "Play Video",
            "previous": "Previous",
            "next": "Next",
            "close": "Close",
            "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
            "a11yCarouselPrevSlideMessage": "Previous slide",
            "a11yCarouselNextSlideMessage": "Next slide",
            "a11yCarouselFirstSlideMessage": "This is the first slide",
            "a11yCarouselLastSlideMessage": "This is the last slide",
            "a11yCarouselPaginationBulletMessage": "Go to slide"
        },
        "is_rtl": false,
        "breakpoints": {
            "xs": 0,
            "sm": 480,
            "md": 768,
            "lg": 1025,
            "xl": 1440,
            "xxl": 1600
        },
        "responsive": {
            "breakpoints": {
                "mobile": {
                    "label": "Mobile Portrait",
                    "value": 767,
                    "default_value": 767,
                    "direction": "max",
                    "is_enabled": true
                },
                "mobile_extra": {
                    "label": "Mobile Landscape",
                    "value": 880,
                    "default_value": 880,
                    "direction": "max",
                    "is_enabled": false
                },
                "tablet": {
                    "label": "Tablet Portrait",
                    "value": 1024,
                    "default_value": 1024,
                    "direction": "max",
                    "is_enabled": true
                },
                "tablet_extra": {
                    "label": "Tablet Landscape",
                    "value": 1200,
                    "default_value": 1200,
                    "direction": "max",
                    "is_enabled": false
                },
                "laptop": {
                    "label": "Laptop",
                    "value": 1366,
                    "default_value": 1366,
                    "direction": "max",
                    "is_enabled": false
                },
                "widescreen": {
                    "label": "Widescreen",
                    "value": 2400,
                    "default_value": 2400,
                    "direction": "min",
                    "is_enabled": false
                }
            }
        },
        "version": "3.17.2",
        "is_static": false,
        "experimentalFeatures": {
            "e_dom_optimization": true,
            "e_optimized_assets_loading": true,
            "additional_custom_breakpoints": true,
            "landing-pages": true
        },
        "urls": {
            "assets": "https:\/\/themes.themegoods.com\/grandrestaurantv6\/demo9\/wp-content\/plugins\/elementor\/assets\/"
        },
        "swiperClass": "swiper-container",
        "settings": {
            "page": [],
            "editorPreferences": []
        },
        "kit": {
            "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
            "global_image_lightbox": "yes",
            "lightbox_enable_counter": "yes",
            "lightbox_enable_fullscreen": "yes",
            "lightbox_enable_zoom": "yes",
            "lightbox_enable_share": "yes",
            "lightbox_title_src": "title",
            "lightbox_description_src": "description"
        },
        "post": {
            "id": 2,
            "title": "Grand%20Restaurant%20WordPress%20Theme%20%7C%20Demo%209%20%E2%80%93%20Just%20another%20Grand%20Restaurant%20WordPress%20Theme%20Sites%20site",
            "excerpt": "",
            "featuredImage": false
        }
    };
</script>
<script type='text/javascript' src='{{ asset('wp-content/plugins/elementor/assets/js/frontend.min.js') }}'
    id='elementor-frontend-js'></script>
<script>
    window.lazyLoadOptions = {
        elements_selector: "iframe[data-lazy-src]",
        data_src: "lazy-src",
        data_srcset: "lazy-srcset",
        data_sizes: "lazy-sizes",
        class_loading: "lazyloading",
        class_loaded: "lazyloaded",
        threshold: 300,
        callback_loaded: function(element) {
            if (element.tagName === "IFRAME" && element.dataset.rocketLazyload == "fitvidscompatible") {
                if (element.classList.contains("lazyloaded")) {
                    if (typeof window.jQuery != "undefined") {
                        if (jQuery.fn.fitVids) {
                            jQuery(element).parent().fitVids()
                        }
                    }
                }
            }
        }
    };
    window.addEventListener('LazyLoad::Initialized', function(e) {
        var lazyLoadInstance = e.detail.instance;
        if (window.MutationObserver) {
            var observer = new MutationObserver(function(mutations) {
                var image_count = 0;
                var iframe_count = 0;
                var rocketlazy_count = 0;
                mutations.forEach(function(mutation) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        if (typeof mutation.addedNodes[i].getElementsByTagName !== 'function') {
                            continue
                        }
                        if (typeof mutation.addedNodes[i].getElementsByClassName !==
                            'function') {
                            continue
                        }
                        images = mutation.addedNodes[i].getElementsByTagName('img');
                        is_image = mutation.addedNodes[i].tagName == "IMG";
                        iframes = mutation.addedNodes[i].getElementsByTagName('iframe');
                        is_iframe = mutation.addedNodes[i].tagName == "IFRAME";
                        rocket_lazy = mutation.addedNodes[i].getElementsByClassName(
                            'rocket-lazyload');
                        image_count += images.length;
                        iframe_count += iframes.length;
                        rocketlazy_count += rocket_lazy.length;
                        if (is_image) {
                            image_count += 1
                        }
                        if (is_iframe) {
                            iframe_count += 1
                        }
                    }
                });
                if (image_count > 0 || iframe_count > 0 || rocketlazy_count > 0) {
                    lazyLoadInstance.update()
                }
            });
            var b = document.getElementsByTagName("body")[0];
            var config = {
                childList: !0,
                subtree: !0
            };
            observer.observe(b, config)
        }
    }, !1)
</script>
<script data-no-minify="1" async
    src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/plugins/wp-rocket/assets/js/lazyload/17.8.3/lazyload.min.js">
</script>
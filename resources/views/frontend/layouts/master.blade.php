<!DOCTYPE html>
<html lang="en-US" data-menu="classicmenu">

<head>
  @include('frontend.includes.head')
    
</head>

<body
    class="home page-template-default page page-id-2 theme-grandrestaurant woocommerce-no-js tg_lightbox_black loftloader-lite-enabled elementor-default elementor-kit-11 elementor-page elementor-page-2">
    <div id="loftloader-wrapper" class="pl-imgloading" data-show-close-time="15000" data-max-load-time="0">
        <div class="loader-section section-fade"></div>
        <div class="loader-inner">
            <div id="loader">
                <div class="imgloading-container"><span
                        style="background-image: url({{ asset('image/logo-dark.png') }});"></span></div><img
                    width="250" height="43" data-no-lazy="1" class="skip-lazy" alt="loader image"
                    src="{{ asset('image/logo-dark.png') }}">
            </div>
        </div>
        <div class="loader-close-button" style="display: none;"><span class="screen-reader-text">Close</span></div>
    </div>
    <input type="hidden" id="pp_menu_layout" name="pp_menu_layout" value="" />
    <input type="hidden" id="pp_enable_right_click" name="pp_enable_right_click" value="" />
    <input type="hidden" id="pp_enable_dragging" name="pp_enable_dragging" value="" />
    <input type="hidden" id="pp_image_path" name="pp_image_path" value="" />
    <input type="hidden" id="pp_homepage_url" name="pp_homepage_url" value="" />
    <input type="hidden" id="pp_ajax_search" name="pp_ajax_search" value="" />
    <input type="hidden" id="pp_fixed_menu" name="pp_fixed_menu" value="1" />
    <input type="hidden" id="pp_topbar" name="pp_topbar" value="" />
    <input type="hidden" id="post_client_column" name="post_client_column" value="4" />
    <input type="hidden" id="pp_back" name="pp_back" value="Back" />
    <input type="hidden" id="pp_page_title_img_blur" name="pp_page_title_img_blur" value="1" />
    <input type="hidden" id="pp_reservation_start_time" name="pp_reservation_start_time" value="11:00" />
    <input type="hidden" id="pp_reservation_end_time" name="pp_reservation_end_time" value="21:00" />
    <input type="hidden" id="pp_reservation_time_step" name="pp_reservation_time_step" value="30" />
    <input type="hidden" id="pp_reservation_date_format" name="pp_reservation_date_format" value="mm/dd/yy" />
    <input type="hidden" id="pp_reservation_24hours" name="pp_reservation_24hours" value="" />
    <input type="hidden" id="grandrestaurant_header_content" name="grandrestaurant_header_content"
        value="content" />
    <input type="hidden" id="tg_enable_theme_lightbox" name="tg_enable_theme_lightbox" value="1" />
    <input type="hidden" id="tg_lightbox_thumbnails" name="tg_lightbox_thumbnails" value="1" />
    <input type="hidden" id="tg_lightbox_enable_title" name="tg_lightbox_enable_title" value="" />

    <input type="hidden" id="pp_footer_style" name="pp_footer_style" value="4" />

    <!-- Begin mobile menu -->
    <div class="mobile_menu_wrapper">
        <a id="close_mobile_menu" href="javascript:;"><span class="ti-close"></span></a>




        <div class="menu-mobile-menu-container">
            <ul id="mobile_main_menu" class="mobile_main_nav">
                <li id="menu-item-102"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-102">
                    <a href="https://themes.themegoods.com/grandrestaurantv6/demo9/" aria-current="page">Home</a></li>
                <li id="menu-item-517" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-517">
                    <a href="https://themes.themegoods.com/grandrestaurantv6/demo9/our-menus/">Our Menus</a></li>
                <li id="menu-item-3228"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3228"><a
                        href="https://themes.themegoods.com/grandrestaurantv6/demo9/about/">About</a></li>
                <li id="menu-item-3499"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3499"><a
                        href="https://themes.themegoods.com/grandrestaurantv6/demo9/shop/">Order Online</a></li>
                <li id="menu-item-3294"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3294"><a
                        href="https://themes.themegoods.com/grandrestaurantv6/demo9/find-us/">Find Us</a></li>
            </ul>
        </div>
        <!-- Begin Reservation -->
        <!-- End Reservation -->

        <!-- Begin side menu sidebar -->
        <div class="page_content_wrapper">
            <div class="sidebar_wrapper">
                <div class="sidebar">

                    <div class="content">

                        <ul class="sidebar_widget">
                        </ul>

                    </div>

                </div>
            </div>
        </div>
        <!-- End side menu sidebar -->
    </div>
    <!-- End mobile menu -->

    <!-- Begin template wrapper -->
    <div id="wrapper" class="hasbg transparent">
        @include('frontend.includes.nevber')

        <div id="option_wrapper">
            <div class="inner">
                <div style="text-align:center">
                    <div class="purchase_theme_button">
                        <a class="button" href="https://1.envato.market/AWGYyD" target="_blank">Purchase Now</a>
                    </div>

                    <h5>Ready to use Demos</h5>
                    <p>
                        Here are example of predefined demo sites that can be imported within one click.
                    </p>

                    <ul class="demo_list">
                        <li>
                            <img width="300" height="299"
                                src="{{ asset('image/19.jpg') }}"
                                alt="Bistro Restaurant" />
                            <div class="demo_label">New</div>

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Bistro Restaurant</h6>
                                        <a href="" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="300" height="299"
                                src="{{ asset('image/18.jpg') }}"
                                alt="Cocktail &amp; Bar" />
                            <div class="demo_label">New</div>

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Cocktail &amp; Bar</h6>
                                        <a href="" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="300" height="299"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo17/17.jpg"
                                alt="Sushi Restaurant" />
                            <div class="demo_label">New</div>

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Sushi Restaurant</h6>
                                        <a href="https://grandrestaurantv7-0.themegoods.com/" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo16/16.jpg"
                                alt="Asian Restaurant" />
                            <div class="demo_label">New</div>

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Asian Restaurant</h6>
                                        <a href="https://grandrestaurantv6-8.themegoods.com//asian" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo15/15.jpg"
                                alt="Steakhouse" />
                            <div class="demo_label">New</div>

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Steakhouse</h6>
                                        <a href="" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo14/14.jpg"
                                alt="Elegant Restaurant" />
                            <div class="demo_label">New</div>

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Elegant Restaurant</h6>
                                        <a href="" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo13/13.jpg"
                                alt="Fusion Restaurant" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Fusion Restaurant</h6>
                                        <a href="" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo12/12.jpg"
                                alt="Clean Food" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Clean Food</h6>
                                        <a href="" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo11/11.jpg"
                                alt="Pizza Restaurant" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Pizza Restaurant</h6>
                                        <a href="" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo10/10.jpg"
                                alt="Asian Fusion" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Asian Fusion</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo10"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo9/9.jpg"
                                alt="Fast Food &amp; Burger" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Fast Food &amp; Burger</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo9"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo8/8.jpg"
                                alt="Traditional Restaurant" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Traditional Restaurant</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo8"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo1/1.jpg"
                                alt="Main Demo" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Main Demo</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6" target="_blank"
                                            class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo6/6.jpg"
                                alt="Luxury Restaurant" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Luxury Restaurant</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo6"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo2/2.jpg"
                                alt="Chinese Restaurant" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Chinese Restaurant</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo2"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo7/7.jpg"
                                alt="Italian Restaurant" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Italian Restaurant</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo7"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo3/3.jpg"
                                alt="Healthy Food" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Healthy Food</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo3"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="220" height="220"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo4/4.jpg"
                                alt="Left Menu Layout" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Left Menu Layout</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo4"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img width="260" height="260"
                                src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/themes/grandrestaurant/cache/demos/xml/demo5/5.jpg"
                                alt="Cafe &amp; Bakery" />

                            <div class="demo_thumb_hover_wrapper">
                                <div class="demo_thumb_hover_inner">
                                    <div class="demo_thumb_desc">
                                        <h6>Cafe &amp; Bakery</h6>
                                        <a href="https://themes.themegoods.com/grandrestaurantv6/demo5"
                                            target="_blank" class="button white">Launch</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="option_btn">
            <a href="javascript:;" class="demotip" title="Choose Theme Demo"><span class="ti-settings"></span></a>

            <a href="https://themes.themegoods.com/grandrestaurantv6/landing/showcase" class="demotip"
                title="Showcase" target="_blank"><span class="ti-heart"></span></a>

            <a href="https://docs.themegoods.com/docs/grand-restaurant" class="demotip" title="Theme Documentation"
                target="_blank"><span class="ti-book"></span></a>

            <a href="https://1.envato.market/AWGYyD" class="demotip" title="Purchase Theme" target="_blank"><span
                    class="ti-shopping-cart"></span></a>
        </div>


        <!-- Begin content -->
        <div id="page_content_wrapper" class=" ">
            <div class="inner">
                <!-- Begin main content -->
                <div class="inner_wrapper">
                    <div class="sidebar_content full_width">
                        <div data-elementor-type="wp-page" data-elementor-id="2" class="elementor elementor-2">
                          @include('frontend.includes.banner')
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-7f2b5cb elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="7f2b5cb" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7789de9 elementor-hidden-phone"
                                        data-id="7789de9" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-92f1a05 elementor-widget elementor-widget-heading"
                                                data-id="92f1a05" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Don’t
                                                        need a silver fork to eat a good burger</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-9794569"
                                        data-id="9794569" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-816f513 elementor-widget elementor-widget-heading"
                                                data-id="816f513" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Our
                                                        Burgers</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8559e9b elementor-hidden-phone"
                                        data-id="8559e9b" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-a33cf35 elementor-widget elementor-widget-heading"
                                                data-id="a33cf35" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Because
                                                        we never play with someone’s health</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-a5544a5 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="a5544a5" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f63d29e"
                                        data-id="f63d29e" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-883f9b7 elementor-widget elementor-widget-image"
                                                data-id="883f9b7" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img decoding="async" loading="lazy" width="441"
                                                        height="299"
                                                        src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png"
                                                        class="attachment-large size-large wp-image-225"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5aa9fe8"
                                        data-id="5aa9fe8" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-2190dcf elementor-widget elementor-widget-image"
                                                data-id="2190dcf" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img decoding="async" loading="lazy" width="627"
                                                        height="405"
                                                        src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"
                                                        class="attachment-large size-large wp-image-276"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ab005db"
                                        data-id="ab005db" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-0687a9f elementor-widget elementor-widget-image"
                                                data-id="0687a9f" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img decoding="async" loading="lazy" width="476"
                                                        height="385"
                                                        src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/veggie-burger.png"
                                                        class="attachment-large size-large wp-image-259"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-69b3499 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="69b3499" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-79089f5"
                                        data-id="79089f5" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-14e0613 elementor-widget elementor-widget-heading"
                                                data-id="14e0613" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Fish
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-62e6913 elementor-widget elementor-widget-heading"
                                                data-id="62e6913" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">burger
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-44b982f elementor-widget elementor-widget-text-editor"
                                                data-id="44b982f" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Life is like a burger the more you add to it, the better it
                                                        becomes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-09186ee"
                                        data-id="09186ee" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-af0a844 elementor-widget elementor-widget-heading"
                                                data-id="af0a844" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Beef
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-fd5c13e elementor-widget elementor-widget-heading"
                                                data-id="fd5c13e" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">burger
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-0fbbb62 elementor-widget elementor-widget-text-editor"
                                                data-id="0fbbb62" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Burger for the body is not enough there must be a burger for the
                                                        soul</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-fb7bade"
                                        data-id="fb7bade" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-797924f elementor-widget elementor-widget-heading"
                                                data-id="797924f" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Veggie
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-eff2ef4 elementor-widget elementor-widget-heading"
                                                data-id="eff2ef4" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">burger
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-f741471 elementor-widget elementor-widget-text-editor"
                                                data-id="f741471" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Roses are red, violets are blue. The burger costs less than
                                                        dinner for two</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-f3dbbaa elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="f3dbbaa" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-db22dc5"
                                        data-id="db22dc5" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-4977bfd elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                data-id="4977bfd" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="divider.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-divider">
                                                        <span class="elementor-divider-separator">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-d67124d elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                                data-id="d67124d" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Have it
                                                        your way</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-116f2c7 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="116f2c7" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-05e7c53"
                                        data-id="05e7c53" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1200,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-90,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:120,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-190,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-ed44fc1 elementor-widget elementor-widget-image"
                                                data-id="ed44fc1" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img decoding="async" loading="lazy" width="683"
                                                        height="1024"
                                                        src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/delicious-burger-P8VTY5Y-683x1024.jpg"
                                                        class="attachment-large size-large wp-image-319"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-9fcfe2d"
                                        data-id="9fcfe2d" data-element_type="column"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1200,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-90,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:120,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-190,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-2d30fd7 elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                                data-id="2d30fd7" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Our
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-23b9acc elementor-widget elementor-widget-heading"
                                                data-id="23b9acc" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Menus
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-e089546 elementor-widget elementor-widget-text-editor"
                                                data-id="e089546" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                        inventore veritatis et quasi. Sed ut perspiciatis unde omnis
                                                        iste natus error sit. Sed ut perspiciatis unde omnis iste natus
                                                        error sit
                                                        voluptatem accusantium.</p>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-8e9addc elementor-widget elementor-widget-button"
                                                data-id="8e9addc" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="button.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-button-wrapper">
                                                        <a class="elementor-button elementor-button-link elementor-size-md"
                                                            href="https://themes.themegoods.com/grandrestaurantv6/demo9/our-menus">
                                                            <span class="elementor-button-content-wrapper">
                                                                <span class="elementor-button-text">View Menus</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c705696"
                                        data-id="c705696" data-element_type="column"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1200,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-90,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:120,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-190,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-6f946c5 elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                                data-id="6f946c5" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Order
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-1e1b933 elementor-widget elementor-widget-heading"
                                                data-id="1e1b933" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">
                                                        Delivery</h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-baf0202 elementor-widget elementor-widget-text-editor"
                                                data-id="baf0202" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                        inventore veritatis et quasi. Sed ut perspiciatis unde omnis
                                                        iste natus error sit. Sed ut perspiciatis unde omnis iste natus
                                                        error sit
                                                        voluptatem accusantium.</p>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-5097a8f elementor-widget elementor-widget-button"
                                                data-id="5097a8f" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="button.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-button-wrapper">
                                                        <a class="elementor-button elementor-button-link elementor-size-md"
                                                            href="https://themes.themegoods.com/grandrestaurantv6/demo9/shop">
                                                            <span class="elementor-button-content-wrapper">
                                                                <span class="elementor-button-text">Order
                                                                    Online</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-98807be elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                                data-id="98807be" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-69f9972"
                                        data-id="69f9972" data-element_type="column"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-ddc6284 elementor-widget elementor-widget-spacer"
                                                data-id="ddc6284" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="spacer.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7d03425"
                                        data-id="7d03425" data-element_type="column"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-455624a elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                data-id="455624a" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.200000000000000011102230246251565404236316680908203125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.200000000000000011102230246251565404236316680908203125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="divider.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-divider">
                                                        <span class="elementor-divider-separator">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-3430f4b elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                                data-id="3430f4b" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Present
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-8c89ff0 elementor-widget elementor-widget-grandrestaurant-animated-text"
                                                data-id="8c89ff0" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="grandrestaurant-animated-text.default">
                                                <div class="elementor-widget-container">
                                                    <div class="themegoods-animated-text text-alignment-center transition-bottom overflow-hidden"
                                                        data-delimiter="word" data-transition="100"
                                                        data-transition-delay="200" data-transition-duration="800">
                                                        <h2>
                                                            Tomato </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-4b5fffa elementor-widget elementor-widget-grandrestaurant-animated-text"
                                                data-id="4b5fffa" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="grandrestaurant-animated-text.default">
                                                <div class="elementor-widget-container">
                                                    <div class="themegoods-animated-text text-alignment-center transition-bottom overflow-hidden"
                                                        data-delimiter="word" data-transition="100"
                                                        data-transition-delay="400" data-transition-duration="800">
                                                        <h2>
                                                            Original </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-dd7a98e elementor-widget elementor-widget-heading"
                                                data-id="dd7a98e" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.8000000000000000444089209850062616169452667236328125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-heading-title elementor-size-default">Sauce
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-2cf99a4 elementor-widget elementor-widget-text-editor"
                                                data-id="2cf99a4" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>OUR SIGNATURE HANDMADE BEEF PATTY</p>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-d5440b1 elementor-widget elementor-widget-text-editor"
                                                data-id="d5440b1" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                        inventore veritatis et quasi. Sed ut perspiciatis unde omnis
                                                        iste natus error sit. Sed ut perspiciatis unde omnis iste natus
                                                        error sit
                                                        voluptatem accusantium.</p>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-da41e9b elementor-align-center elementor-widget elementor-widget-button"
                                                data-id="da41e9b" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="button.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-button-wrapper">
                                                        <a class="elementor-button elementor-button-link elementor-size-md"
                                                            href="https://themes.themegoods.com/grandrestaurantv6/demo9/our-menus">
                                                            <span class="elementor-button-content-wrapper">
                                                                <span class="elementor-button-text">View Menus</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-5f1ff24 elementor-section-full_width elementor-section-stretched elementor-reverse-mobile elementor-section-height-default elementor-section-height-default"
                                data-id="5f1ff24" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6a6e710"
                                        data-id="6a6e710" data-element_type="column"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-a97df5a elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                data-id="a97df5a" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.200000000000000011102230246251565404236316680908203125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0.200000000000000011102230246251565404236316680908203125,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="divider.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-divider">
                                                        <span class="elementor-divider-separator">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-b0e0ef5 elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                                data-id="b0e0ef5" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="heading.default">
                                                <div class="elementor-widget-container">
                                                    <h2 class="elementor-heading-title elementor-size-default">Always
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-bae1640 elementor-widget elementor-widget-grandrestaurant-animated-text"
                                                data-id="bae1640" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="grandrestaurant-animated-text.default">
                                                <div class="elementor-widget-container">
                                                    <div class="themegoods-animated-text text-alignment-center transition-bottom overflow-hidden"
                                                        data-delimiter="word" data-transition="100"
                                                        data-transition-delay="200" data-transition-duration="800">
                                                        <h2>
                                                            Fresh </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-542d16a elementor-widget elementor-widget-grandrestaurant-animated-text"
                                                data-id="542d16a" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="grandrestaurant-animated-text.default">
                                                <div class="elementor-widget-container">
                                                    <div class="themegoods-animated-text text-alignment-center transition-bottom overflow-hidden"
                                                        data-delimiter="word" data-transition="100"
                                                        data-transition-delay="400" data-transition-duration="800">
                                                        <h2>
                                                            Salad </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-6c7ed47 elementor-widget elementor-widget-text-editor"
                                                data-id="6c7ed47" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Life is like a burger the more you add to it, the better it
                                                        becomes</p>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-63bfd33 elementor-widget elementor-widget-text-editor"
                                                data-id="63bfd33" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="text-editor.default">
                                                <div class="elementor-widget-container">
                                                    <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                                        inventore veritatis et quasi. Sed ut perspiciatis unde omnis
                                                        iste natus error sit. Sed ut perspiciatis unde omnis iste natus
                                                        error sit
                                                        voluptatem accusantium.</p>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-016ea7e elementor-align-center elementor-widget elementor-widget-button"
                                                data-id="016ea7e" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_is_smoove&quot;:&quot;true&quot;,&quot;grandrestaurant_ext_smoove_disable&quot;:&quot;769&quot;,&quot;grandrestaurant_ext_smoove_duration&quot;:1000,&quot;grandrestaurant_ext_smoove_translatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:40,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_smoove_scalex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_scaley&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatey&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_rotatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatex&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_translatez&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewx&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_skewy&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_smoove_perspective&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1000,&quot;sizes&quot;:[]},&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="button.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-button-wrapper">
                                                        <a class="elementor-button elementor-button-link elementor-size-md"
                                                            href="https://themes.themegoods.com/grandrestaurantv6/demo9/our-menus">
                                                            <span class="elementor-button-content-wrapper">
                                                                <span class="elementor-button-text">View Menus</span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dd5910f"
                                        data-id="dd5910f" data-element_type="column"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-c3d0a83 elementor-widget elementor-widget-spacer"
                                                data-id="c3d0a83" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="spacer.default">
                                                <div class="elementor-widget-container">
                                                    <div class="elementor-spacer">
                                                        <div class="elementor-spacer-inner"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section
                                class="elementor-section elementor-top-section elementor-element elementor-element-34cca39 elementor-section-height-min-height elementor-section-content-bottom elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-items-middle"
                                data-id="34cca39" data-element_type="section"
                                data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;grandrestaurant_ext_is_background_parallax&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_backdrop&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_background_on_scroll&quot;:&quot;false&quot;}">
                                <div class="elementor-background-overlay"></div>
                                <div class="elementor-container elementor-column-gap-default">
                                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9bc094c"
                                        data-id="9bc094c" data-element_type="column"
                                        data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}">
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                            <div class="elementor-element elementor-element-da0409f elementor-widget__width-auto elementor-widget elementor-widget-grandrestaurant-animated-text"
                                                data-id="da0409f" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="grandrestaurant-animated-text.default">
                                                <div class="elementor-widget-container">
                                                    <div class="themegoods-animated-text text-alignment-center transition-bottom overflow-hidden"
                                                        data-delimiter="word" data-transition="100"
                                                        data-transition-delay="0" data-transition-duration="800">
                                                        <h2>
                                                            The </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-ade2d92 elementor-widget__width-auto elementor-widget elementor-widget-grandrestaurant-animated-text"
                                                data-id="ade2d92" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="grandrestaurant-animated-text.default">
                                                <div class="elementor-widget-container">
                                                    <div class="themegoods-animated-text text-alignment-center transition-bottom overflow-hidden"
                                                        data-delimiter="word" data-transition="100"
                                                        data-transition-delay="200" data-transition-duration="800">
                                                        <h2>
                                                            Super Sunday </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-4dd112f elementor-widget__width-auto elementor-widget elementor-widget-image"
                                                data-id="4dd112f" data-element_type="widget"
                                                data-settings="{&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img decoding="async" loading="lazy" width="1440"
                                                        height="688"
                                                        src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/ice-cream.png"
                                                        class="attachment-full size-full wp-image-473"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-b6df650 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image"
                                                data-id="b6df650" data-element_type="widget"
                                                data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img decoding="async" loading="lazy" width="733"
                                                        height="409"
                                                        src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/strawberry.png"
                                                        class="attachment-large size-large wp-image-481"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div class="elementor-element elementor-element-785d327 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image"
                                                data-id="785d327" data-element_type="widget"
                                                data-settings="{&quot;_position&quot;:&quot;absolute&quot;,&quot;grandrestaurant_ext_link_reservation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_sidemenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_link_closed_fullmenu&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_scrollme&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_smoove&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_parallax_mouse&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_infinite&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_is_fadeout_animation&quot;:&quot;false&quot;,&quot;grandrestaurant_ext_mobile_static&quot;:&quot;false&quot;}"
                                                data-widget_type="image.default">
                                                <div class="elementor-widget-container">
                                                    <img decoding="async" loading="lazy" width="733"
                                                        height="409"
                                                        src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/strawberry2.png"
                                                        class="attachment-large size-large wp-image-482"
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <!-- End main content -->
            </div>
        </div>
        @include('frontend.includes.footer')
      
    </div>

    <div id="woocommerce-mini-cart-wrapper">
        <div id="woocommerce-mini-cart-overlay"></div>
        <div id="woocommerce-mini-cart-flyout">
            <div class="woocommerce-mini-cart-shopping-cart">


                <p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>


            </div>
        </div>
    </div>
    </div>


    <a id="toTop"><i class="fa fa-angle-up"></i></a>
    <div id="overlay_background"></div>

    @include('frontend.includes.script')

  
</body>

</html>

<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me - Debug: cached@1736313960 -->

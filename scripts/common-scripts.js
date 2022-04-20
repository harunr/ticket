
(function($){
	$(function(){
        
        // Nav function
        if ($(window).width() >  767){
        /* up scroll function */
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = $('header').outerHeight();
            $(window).scroll(function (event) {
                didScroll = true;
            });
            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                var st = $(this).scrollTop();
                if (Math.abs(lastScrollTop - st) <= delta) {
                    return;
                }
                if (st > lastScrollTop && st > navbarHeight) {
                    $('header').removeClass('topmost nav-down').addClass('nav-up');
                } else {
                    if (st + $(window).height() < $(document).height()) {
                        $('header').removeClass('nav-up').addClass('nav-down');
                    }
                }
                lastScrollTop = st;
            }
            $(document).scroll(function () {
                if ($(window).scrollTop() === 0) {
                    $('header').removeClass('nav-up').addClass('topmost');
                }
            });
            
        }
        /* up scroll function */
        
        
        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");

        });
        
     /*  read more function */

        $(".more").each(function(){
            var $this = $(this);
            $this.find('.read-more').click(function() {
                if ( $this.find('.read-more-text').is(":visible") ) {
                    $this.find('.read-more-text').slideUp();
                    $(this).text("and much more!")
                } else {
                    $this.find('.read-more-text').slideDown();
                    $(this).text("Show less")
                }
            });
        })
        /*  read more function */

           $(".accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h3").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-info").slideUp();
                if($this.find(".accordion-info:visible").length){
                    $(".accordion-info").removeClass("active")
                    $(".accordion-info").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-info").slideUp();
                    $this.find(" > .accordion-info").slideDown();
                }
            })
            })
        
         if($(window).width() > 767){
            $("#accordion-thumb").eq(0).addClass('active')
            $("#accordion-thumb .accordion-item-thumb").hide()
            $("#accordion-thumb .accordion-item-thumb img").animate({'opacity' : 0},0)
            $("#accordion-thumb .accordion-item-thumb").eq(0).show()
            $("#accordion-thumb .accordion-item-thumb").eq(0).find('img').animate({'opacity' : 1},0)

            $(".accordion-item h3").each(function(i){
                var $this = $(this);
                $this.on("click touch", function(){
                    if( $(this).hasClass('active') ){
                        return false;
                    } 
                    else{
                        $(".accordion-item h3").removeClass('active')
                        $(this).addClass('active')
                        $("#accordion-thumb .accordion-item-thumb").hide()
                        $("#accordion-thumb .accordion-item-thumb img").animate({'opacity' : 0},100)
                        $("#accordion-thumb .accordion-item-thumb").eq(i).show()
                        $("#accordion-thumb .accordion-item-thumb").eq(i).find('img').animate({'opacity' : 1},100)
                    }
                })
            })
        }
     
        
        
        // This function for scroll animation
        /*if ($(window).width() >  767){*/
        var $animation_elements = $('.animate-from-bottom');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    //$element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        /*}*/
        // End animation function

        
        //FAQs Accordion Function
        $(".accordion").each(function(){
            var $this = $(this);
            $this.find(".accordion-item-inner").on("click touch", function(){
                $(".accordion").removeClass("active")
                $(".accordion-text").slideUp();
                if($this.find(".accordion-text:visible").length){
                    $(".accordion").removeClass("active")
                    $(".accordion-text").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        });
        
        //FAQs Accordion Function
        $(".accordion").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".accordion").removeClass("active")
                $(".accordion-text").slideUp();
                if($this.find(".accordion-text:visible").length){
                    $(".accordion").removeClass("active")
                    $(".accordion-text").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        });

        
     /* ================== End Accordion ==================================*/
        
       /*scrollbar*/
        if ($(window).width() < 768){
            if($(".calculator-inner-item").length){ 
                $(".calculator-inner-item").mCustomScrollbar({
                    axis:"x" // horizontal scrollbar
                });
            }
        }
        
     /* ========= Footer ================================*/
        
        if ($(window).width() < 768){
            $(".widget-item").each(function(){
                var $this = $(this);
                $this.find(" > h5").on("click touch", function(){
                    $(".widget-item").removeClass("active")
                    $("ul").slideUp();
                    if($this.find("ul:visible").length){
                        $(".widget-item").removeClass("active")
                        $("ul").slideUp();
                    }
                    else{
                        $this.addClass("active")
                        $("ul").slideUp();
                        $this.find("ul").slideDown();
                    }
                })
            });
        }
        /* ========= Footer ================================*/
        

        if ($("select.stylled-select").length) {
            $("select.stylled-select").selectric();
        }
      
        
        
     /* ============= Testimonial-slider ================================*/
        if ($("#slider-item-wrap").length) {
            $('#slider-item-wrap').slick({
                dots: true,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 2500,
                infinite: true,
                navigation: false,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                
            });
        }
        /* ============= Testimonial-slider ================================*/
        
        
     
        
        if ($(".corporate-blog-item-wrap").length) {
            $('.corporate-blog-item-wrap').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                ]
            });
        }
        
       /* ============= About page ========================*/
        
        if ($(window).width() <  767){
        if ($(".team-item-wrap").length) {
            $('.team-item-wrap').slick({
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2500,
                infinite: true,
                navigation: false,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,

            });
        }
        }
        
        
        if ($(window).width() <  767){
            if ($(".team-gallery-item-wrap").length) {
                $('.team-gallery-item-wrap').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    infinite: true,
                    navigation: false,
                    speed: 800,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                });
            }
        }
        /* ============= About page ========================*/
        
        if($(".home-content").length){
            $("body").addClass('home-page');
        }
        
        if($(".legal-content").length){
            $("body").addClass('legal-page');
        }

        
        
        /* ==== Ui slider ====== */
        if($( "#minbeds" ).length){
            var select = $( "#minbeds" );
            var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
                min: 1,
                max: 7,
                range: "min",
                value: select[ 0 ].selectedIndex + 1,
                slide: function( event, ui ) {
                    $('#selectSize li').removeClass('active');
                    $('#selectSize li[data-item='+ ui.value +']').addClass('active');
                }
            });

            $('#selectSize li').each(function(i){
                $('#selectSize li').eq(0).addClass('active');
                $(this).click(function(){
                    $('#selectSize li').removeClass('active');
                    $(this).addClass('active');
                    slider.slider( "value", $(this).data('item')+ 0 );
                })
            })
        } // End ui slider script
	
	})// End ready function.
   
    

})(jQuery)



(function($){

var intid = setInterval(function () {

    if($("iframe").length > 0)
    {
        var iframe = document.getElementsByTagName("iframe")
        iframe[0].style.width = "100%"
        iframe[0].style.height = "100%"
        iframe[0].style.marginLeft = 0
        iframe[0].style.marginTop = 0
        


    }
},2000)
    var config = {
        apiKey: "AIzaSyAI6BS_mYTXKkxjMWxecpsqid_fTywxDRU",
        authDomain: "marketer-a09ee.firebaseapp.com",
        databaseURL: "https://marketer-a09ee.firebaseio.com",
        projectId: "marketer-a09ee",
        storageBucket: "marketer-a09ee.appspot.com",
        messagingSenderId: "1084315308610"
    };
    firebase.initializeApp(config);
    $(document).ready(function(){
        $('.bxslider').bxSlider({
            auto: true,
            autoControls: false,
            stopAutoOnClick: false,
            pager: false,
            shrinkItems: true

        });
    });



    /*-------- contact -------

     */
    $(".contactquery").click(function (e) {
        e.preventDefault()
        console.log("query")
        var email = $("#email").val()
        var name = $("#name").val()
        var query = $("#query").val()
        if(email && name && query) {
            firebase.database().ref("contactquery").push({
                email: email,
                name: name,
                query: query
            })
            $(".contactmessage").empty()
            var str = '<div class="alert alert-success alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Success!</strong> Will contact you soon.</div>'
            $(".contactmessage").append(str)
            $("#email").val("")
            $("#name").val("")
            $("#query").val("")
        }
        else
        {
            $(".contactmessage").empty()
            var str = '<div class="alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Please fill all the details.</div>'
            $(".contactmessage").append(str)
        }
        setTimeout(function () {
            $(".contactmessage").empty()
        },10000)
    })


$(".register").click(function () {

    console.log("something")
    $('#myModal').modal('show')
})

    $("#dcaregisters").click(function() {
        console.log("yes")
        var email = $("#regemail").val()
        var name = $("#regname").val()
        var mobilenum = $("#regmobile").val()
        var collegename = $("#regcollegename").val()
        var regsize = $("#regsize").val()
        if(email && name && mobilenum && collegename) {
            firebase.auth().createUserWithEmailAndPassword(email, "daksh2018").then(function () {
                var id = Math.floor((Math.random() * 10) + 1);
                firebase.database().ref("dcadetails").push({
                    email: email,
                    name: name,
                    mobilenum: mobilenum,
                    collegename : collegename,
                    id: id,
                    size : regsize
                })
                $(".ermessage").empty()
                var str = '<div class="alert alert-success alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Success!</strong> You have registered please check your mail.</div>'
                $(".ermessage").append(str)
                $("#regemail").val("")
                $("#regname").val("")
                $("#regmobile").val("")
                $("#regcollegename").val("")
                $("#regsize").val("")
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                $(".ermessage").empty()
                var str = '<div class="alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong> Warning! </strong>' + " " + errorMessage + " " + ' </div>'
                $(".ermessage").append(str)
            })
        }
        else
        {
            $(".ermessage").empty()
            var str = '<div class="alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong> Warning! </strong> Please fill all the details. </div>'
            $(".ermessage").append(str)
        }
        setTimeout(function () {
            $(".ermessage").empty()
        },10000)
    })
    /*----------------------------
    register
    
     */
    $("#registers").click(function() {
        console.log("yes")
        var email = $("#regemail").val()
        var name = $("#regname").val()
        var mobilenum = $("#regmobile").val()
        var regsize = $("#regsize").val()
        var regcollegename = $("#regcolname").val()
        var collegeresgistration = $("#regcolregno").val()
        var events = []
        var eventlist = ["spardha","spectra","robowars","gamingevent"]
        eventlist.forEach(function (e) {
            if($("." + e).is(':checked'))
            {
                events.push(e)
            }
        })
        if(email && name && mobilenum && events.length>0) {
            firebase.auth().createUserWithEmailAndPassword(email, "daksh2018").then(function () {
                var id = Math.floor((Math.random() * 10) + 1);
                firebase.database().ref("dakshdetails").push({
                    email: email,
                    name: name,
                    mobilenum: mobilenum,
                    events: events,
                    id: id,
                    collegename : regcollegename,
                    collegeid:collegeresgistration,
                    size:regsize
                })
                $(".ermessage").empty()
                var str = '<div class="alert alert-success alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Success!</strong> You have registered please check your mail.</div>'
                $(".ermessage").append(str)
                $("#regemail").val("")
                $("#regname").val("")
                $("#regmobile").val("")
                $("#regsize").val("")
                $("#regcolname").val("")
                $("#regcolregno").val("")
                var eventlist = ["spardha", "spectra", "robowars", "gamingevent"]
                eventlist.forEach(function (e) {
                    $("." + e).attr('checked', false)

                })
                $.ajax({
                    url : "assets/php/index.php",
                    data : {
                        email: email,
                        name: name,
                        mobilenum: mobilenum,
                        events: events,
                        id : id,
                        collegename : regcollegename,
                        collegeid:collegeresgistration,
                        size:regsize

                    },
                    success:function (data) {
                        console.log(data)
                    }
                })
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                $(".ermessage").empty()
                var str = '<div class="alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong> Warning! </strong>' + " " + errorMessage + " " + ' </div>'
                $(".ermessage").append(str)
            })
        }
        else
        {
            $(".ermessage").empty()
            var str = '<div class="alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong> Warning! </strong> Please fill all the details. </div>'
            $(".ermessage").append(str)
        }
        setTimeout(function () {
            $(".ermessage").empty()
        },10000)
    })



    /* -----------------------------
    Events
     */
    var Flipper = (function() {
        var card = $('.card');
        var flipper = card.find('.card__flipper');
        var win = $(window);
        var wrapper = $(".wrapper")
        var flip = function() {
            var thisCard = $(this);
            var thisFlipper = thisCard.find('.card__flipper');
            var offset = thisCard.offset();
            var xc = win.width() / 1.8;
            var yc = win.height() / 2.5;
            var docScroll = $(document).scrollTop();
            var cardW = thisCard.outerWidth() / 2;
            var cardH = thisCard.height() / 2;

            var transX = xc - offset.left - cardW;
            var transY = docScroll + yc - offset.top - cardH;
//     if (offset.top > card.height()) transY = docScroll - offset.top + cardH;
            if (win.width() <= 700) transY = 0;

            if (card.hasClass('active')) unflip();

            thisCard.css({'z-index': '3'}).addClass('active');

            thisFlipper.css({
                'transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
                '-webkit-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)',
                '-ms-transform': 'translate3d(' + transX + 'px,' + transY + 'px, 0) rotateY(180deg) scale(1)'
            }).addClass('active');

            return false;
        };

        var unflip = function(e) {
            card.css({'z-index': '1'}).removeClass('active');
            flipper.css({
                'transform': 'none',
                '-webkit-transform': 'none',
                '-ms-transform': 'none'
            }).removeClass('active');
        };

        var bindActions = function() {
            card.on('click', flip);
            win.on('click', unflip);
        }

        var init = function() {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Flipper.init();
    /*  --------------------------
    Clock
     */
    var clock;

    $(document).ready(function() {

        // Grab the current date
        var currentDate = new Date();

        // Set some date in the future. In this case, it's always Jan 1
        var futureDate  = new Date("22febraury2018");

        // Calculate the difference in seconds between the future and current date
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

        // Instantiate a coutdown FlipClock
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'DailyCounter',
            countdown: true
        });
    });
    /* ---------------------------------------------- /*
     * Preloader
     /* ---------------------------------------------- */

    $(window).load(function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });

    $(document).ready(function() {

        /* ---------------------------------------------- /*
         * Initialization General Scripts for all pages
         /* ---------------------------------------------- */

        var moduleHero = $('.module-hero'),
            module     = $('.module-hero, .module, .module-small'),
            navbar     = $('.navbar-custom'),
            navHeight  = navbar.height(),
            worksgrid  = $('#works-grid'),
            width      = Math.max($(window).width(), window.innerWidth),
            mobileTest;

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        }

        buildModuleHero(moduleHero);
        navbarCheck(navbar);
        navbarAnimation(navbar, moduleHero, navHeight);
        navbarSubmenu(width);
        hoverDropdown(width, mobileTest);

        $(window).resize(function() {
            var width = Math.max($(window).width(), window.innerWidth);
            buildModuleHero(moduleHero);
            hoverDropdown(width);
        });

        $(window).scroll(function() {
            effectsModuleHero(moduleHero, this);
            navbarAnimation(navbar, moduleHero, navHeight);
        });

        /* ---------------------------------------------- /*
         * Set module backgrounds
         /* ---------------------------------------------- */

        module.each(function(i) {
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
        });

        /* ---------------------------------------------- /*
         * Full height module
         /* ---------------------------------------------- */

        function buildModuleHero(moduleHero) {
            if (moduleHero.length > 0) {
                if (moduleHero.hasClass('module-full-height')) {
                    moduleHero.height($(window).height());
                } else {
                    moduleHero.height($(window).height() * 0.85);
                }
            }
        };

        /* ---------------------------------------------- /*
         * Hero module parallax, fade
         /* ---------------------------------------------- */

        function effectsModuleHero(moduleHero, scrollTopp) {
            if (moduleHero.length > 0) {
                var homeSHeight = moduleHero.height();
                var topScroll = $(document).scrollTop();
                if ((moduleHero.hasClass('module-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    moduleHero.css('top', (topScroll * 0.55));
                }
                if (moduleHero.hasClass('module-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    moduleHero.css('opacity', (1 - topScroll/moduleHero.height() * 1));
                }
            }
        };

        /* ---------------------------------------------- /*
         * Hero slider setup
         /* ---------------------------------------------- */

        if(mobileTest != true) {
            directionNav = true;
        } else {
            directionNav = false;
        }

        if ($('.hero-slider').length > 0) {
            $('.hero-slider').flexslider({
                animation: 'fade',
                animationSpeed: 1000,
                animationLoop: true,
                directionNav: directionNav,
                prevText: '',
                nextText: '',
                start: function(slider) {
                    heroSliderLight();
                },
                before: function(slider) {
                    if(mobileTest != true) {
                        $('.hs-caption').fadeOut().animate({top:'-80px'},{queue:false, easing: 'swing', duration: 700});
                        slider.slides.eq(slider.currentSlide).delay(500);
                        slider.slides.eq(slider.animatingTo).delay(500);
                    }
                },
                after: function(slider) {
                    heroSliderLight();
                    if(mobileTest != true) {
                        $('.hs-caption').fadeIn().animate({top:'0'},{queue:false, easing: 'swing', duration: 700});
                    }
                },
                useCSS: true
            });
        };

        /* ---------------------------------------------- /*
         * Change color on light slide
         /* ---------------------------------------------- */

        function heroSliderLight() {
            if ($('li.bg-light').hasClass('flex-active-slide')) {
                navbar.addClass('nabar-dark');
                $('.hero-slider').addClass('hero-slider-dark');
            } else {
                navbar.removeClass('nabar-dark');
                $('.hero-slider').removeClass('hero-slider-dark');
            }
        }

        /* ---------------------------------------------- /*
         * Hero slider pause on scroll
         /* ---------------------------------------------- */

        if ($('.hero-slider').length > 0) {
            $(window).scroll(function() {
                var st = $(window).scrollTop();
                if (st > 0) {
                    $('.hero-slider').flexslider('pause');
                }
            });
        }

        /* ---------------------------------------------- /*
         * Transparent navbar animation
         /* ---------------------------------------------- */

        function navbarCheck() {
            if (navbar.length > 0 && navbar.hasClass('navbar-transparent')) {
                navbatTrans = true;
            } else {
                navbatTrans = false;
            }
        }

        function navbarAnimation(navbar, moduleHero, navHeight) {
            var topScroll = $(window).scrollTop();
            if (navbar.length > 0 && navbatTrans != false) {
                if (topScroll >= navHeight) {
                    navbar.removeClass('navbar-transparent');
                } else {
                    navbar.addClass('navbar-transparent');
                }
            }
        };

        /* ---------------------------------------------- /*
         * Navbar collapse on click
         /* ---------------------------------------------- */

        $(document).on('click','.navbar-collapse.in',function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        /* ---------------------------------------------- /*
         * Navbar submenu
         /* ---------------------------------------------- */

        function navbarSubmenu(width) {
            if (width > 767) {
                $('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
                    var MenuLeftOffset  = $('.dropdown-menu', $(this)).offset().left;
                    var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
                    if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                        $(this).children('.dropdown-menu').addClass('leftauto');
                    } else {
                        $(this).children('.dropdown-menu').removeClass('leftauto');
                    }
                    if ($('.dropdown', $(this)).length > 0) {
                        var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                        if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                            $(this).children('.dropdown-menu').addClass('left-side');
                        } else {
                            $(this).children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });
            }
        };

        /* ---------------------------------------------- /*
         * Navbar hover dropdown on desktop
         /* ---------------------------------------------- */

        function hoverDropdown(width, mobileTest) {
            if ((width > 767) && (mobileTest != true)) {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
                var delay = 0;
                var setTimeoutConst;
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
                        var $this = $(this);
                        setTimeoutConst = setTimeout(function() {
                            $this.addClass('open');
                            $this.find('.dropdown-toggle').addClass('disabled');
                        }, delay);
                    },
                    function() {
                        clearTimeout(setTimeoutConst);
                        $(this).removeClass('open');
                        $(this).find('.dropdown-toggle').removeClass('disabled');
                    });
            } else {
                $('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
                $('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).parent().siblings().removeClass('open');
                    $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                    $(this).parent().toggleClass('open');
                });
            }
        };

        /* ---------------------------------------------- /*
         * Youtube video background
         /* ---------------------------------------------- */

        if(mobileTest != true) {
            $(function() {
                $(".video-player").mb_YTPlayer();
            });

            $('.video-controls-box a').css('visibility', 'visible');
            $(".playerBox").css({
                margin : "0!important"
            })

            $('#video-play').click(function(event) {
                event.preventDefault();
                if ($(this).hasClass('fa-play')) {
                    $('.video-player').playYTP();
                } else {
                    $('.video-player').pauseYTP();
                }
                $(this).toggleClass('fa-play fa-pause');
                return false;
            });

            $('#video-volume').click(function(event) {
                event.preventDefault();
                $('.video-player').toggleVolume();
                $(this).toggleClass('fa-volume-off fa-volume-up');
                return false;
            });
        }


        /* ---------------------------------------------- /*
         * Post slider
         /* ---------------------------------------------- */

        $('.post-images-slider').flexslider( {
            animation: 'slide',
            smoothHeight: true,
        });


        /* ---------------------------------------------- /*
         * Progress bars, counters animations
         /* ---------------------------------------------- */

        $('.progress-bar').each(function(i) {
            $(this).appear(function() {
                var percent = $(this).attr('aria-valuenow');
                $(this).animate({'width' : percent + '%'});
                $(this).find('span').animate({'opacity' : 1}, 900);
                $(this).find('span').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
            });
        });

        $('.counter-item').each(function(i) {
            $(this).appear(function() {
                var number = $(this).find('.counter-number').data('number');
                $(this).find('.counter-number span').countTo({from: 0, to: number, speed: 1200, refreshInterval: 30});
            });
        });

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
         /* ---------------------------------------------- */

        wow = new WOW({
            mobile: true
        });
        wow.init();

        /* ---------------------------------------------- /*
         * Popup images
         /* ---------------------------------------------- */

        $('a.popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1]
            },
            image: {
                titleSrc: 'title',
                tError: 'The image could not be loaded.',
            }
        });

        /* ---------------------------------------------- /*
         * Rotate
         /* ---------------------------------------------- */

        $(".rotate").textrotator({
            animation: "dissolve",
            separator: "|",
            speed: 3000
        });

        /* ---------------------------------------------- /*
         * A jQuery plugin for fluid width video embeds
         /* ---------------------------------------------- */

        $('body').fitVids();

        /* ---------------------------------------------- /*
         * Scroll Animation
         /* ---------------------------------------------- */

        $('.section-scroll').bind('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });

        /* ---------------------------------------------- /*
         * Scroll top
         /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('a[href="#totop"]').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

    });

})(jQuery);/**
 * Created by harsh on 01-11-2017.
 */

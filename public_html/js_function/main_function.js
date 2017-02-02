$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['home', 'aboutus', 'services', 'portfolio', 'contactus'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About Us', 'Services', 'Portfolio', 'Contact Us'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,
        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
        afterResize: function () {},
        afterResponsive: function (isResponsive) {},
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });
});

$('#media').carousel({
    pause: true,
    interval: false,
});

//
//function factiorial() {
//    var fact = 100;
//    var out = "";
//    for (var i = 0; i < fact; i++) {
//        out += i + "! is " + facto(i) + "<br>";
//    }
//    document.getElementById("fac_id").innerHTML = out;
//}
//function facto(n) {
//    var result = 1;
//    for (var i = 2; i <= n; i++) {
//        result *= i;
//    }
//    return result;
//}
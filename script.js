var skillEle = document.getElementById("skills-content");
var counter = document.getElementById("counter");
var elScrollY = skillEle.offsetTop;

var $window = $(window);
$(document).ready(function () {
  $window.scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
    
    //Progress Percent up function 
    if(counter.getAttribute("data-scroll") === "in" && !counter.getAttribute("triggered")){
      $(".counter").counterUp({
        delay: 10,
        time: 1000
      });    
      counter.setAttribute("triggered", true);
    } 
    else if(counter.getAttribute("data-scroll") === "out" && counter.getAttribute("triggered")){
      counter.removeAttribute("triggered");
    }
  });
  
  
  //slide-up script
  $('.scroll-up-btn').click(function(){
    $('html').animate(scrollTo(0,0));
  });

  // toggle hamburger-bar.
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i#hamburger-bar').toggleClass('active');
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false
      },
    }
  });
});

// Typing animation script
var typed = new Typed(".typing", {
    strings: ["Software Developer", "Photographer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})
var typed = new Typed(".describing", {
  strings: ["Software Developer", "Problem solver", "Nature Lover"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

ScrollOut({
  targets: ".skills-content .right, .counter",
  offset: (elScrollY-(elScrollY/4))
})

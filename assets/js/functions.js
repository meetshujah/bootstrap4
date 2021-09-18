// sticky header
/*$(window).scroll(function() {    
var scroll = $(window).scrollTop();
//>=, not <=
if (scroll >= 300) {
//clearHeader, not clearheader - caps H
$("header").addClass("stickyheader");
} else {
$("header").removeClass("stickyheader");  
}
});*/
// sticky header end



$(document).ready(function() {
"use strict";

$(window).on("load", function(){ 
  var range = $("#range").attr("value");
  $("#demo").html(range);
  $(".slide").css("width", "50%");
  $(document).on('input change', '#range', function() {
    $('#demo').html( $(this).val() );
    var slideWidth = $(this).val() * 100 / 100;
    
    $(".slide").css("width", slideWidth + "%");
});
});



$(".ct-close-menu").click(function(){
  $('.left-menu-bar ul li a').toggleClass('side-menu');
  $('.left-menu-bar').toggleClass('left-menu-bar-menu');
  $('.left-menu-bar h1').toggleClass('left-menu-bar-head');
  $('.dashboard-sec').toggleClass('dashboard-sec-menu');
});

$('#startedimage').change(function(){
    if(this.value != '')
    {
        $('#ct-chnge-img-btm').fadeIn();
        $('.startedimage-show').hide();
        
    }
    else
    {
        $('#ct-chnge-img-btm').fadeOut();
        $('.startedimage-show').show();
    }
});

$('#thankyouimage').change(function(){
    if(this.value != '')
    {
        $('#ct-chnge-img-btm2').fadeIn();
        $('.thankyouimage-show').hide();
        
    }
    else
    {
        $('#ct-chnge-img-btm2').fadeOut();
        $('.thankyouimage-show').show();
    }
});
$('#questionimage').change(function(){
    if(this.value != '')
    {
        $('#ct-chnge-img-btm3').fadeIn();
        $('.questionimage-show').hide();
        
    }
    else
    {
        $('#ct-chnge-img-btm3').fadeOut();
        $('.questionimage-show').show();
    }
});
$('#applogo').change(function(){
    if(this.value != '')
    {
        $('#ct-chnge-img-btm4').fadeIn();
        $('.applogo-show').hide();
        
    }
    else
    {
        $('#ct-chnge-img-btm4').fadeOut();
        $('.applogo-show').show();
    }
});



 $(function () {
      $('#cp-component').colorpicker({
    sliders: {
        saturation: {
            maxLeft: 400,
            maxTop: 400,
            callLeft: "setSaturation",
            callTop: "setBrightness"
        },
        hue: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setHue"
        },
        alpha: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setAlpha"
        }
    }
});
      $('#cp-component2').colorpicker({
    sliders: {
        saturation: {
            maxLeft: 400,
            maxTop: 400,
            callLeft: "setSaturation",
            callTop: "setBrightness"
        },
        hue: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setHue"
        },
        alpha: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setAlpha"
        }
    }
});
      $('#cp-component3').colorpicker({
    sliders: {
        saturation: {
            maxLeft: 400,
            maxTop: 400,
            callLeft: "setSaturation",
            callTop: "setBrightness"
        },
        hue: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setHue"
        },
        alpha: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setAlpha"
        }
    }
});
      $('#cp-component4').colorpicker({
    sliders: {
        saturation: {
            maxLeft: 400,
            maxTop: 400,
            callLeft: "setSaturation",
            callTop: "setBrightness"
        },
        hue: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setHue"
        },
        alpha: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setAlpha"
        }
    }
});
      $('#cp-component5').colorpicker({
    sliders: {
        saturation: {
            maxLeft: 400,
            maxTop: 400,
            callLeft: "setSaturation",
            callTop: "setBrightness"
        },
        hue: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setHue"
        },
        alpha: {
            maxLeft: 0,
            maxTop: 400,
            callLeft: false,
            callTop: "setAlpha"
        }
    }
});
    });
   


  ////// mob slider
    $(".sliderxs").slick({
        arrows: false,
        dots: false,
        autoplay: true,
		    adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 769,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end

$(".ct-dot").click(function(){
  $(".more-opt").toggle();
});
$(".ct-dot2").click(function(){
  $(".more-opt2").toggle();
});
$(".ct-dot3").click(function(){
  $(".more-opt3").toggle();
});
     
$('#myTable').DataTable();

// $('.pckge-slider').slick({
//    speed: 500,
//     slidesToShow: 3,
//     arrows:false,
//     slidesToScroll: 1,
//     dots:false,
//     centerMode: true,
//     responsive: [{
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         // centerMode: true,

//       }

//     }, {
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dots: true,
//         infinite: true,

//       }
//     },  {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//       }
//     }]

// });

var $carousel = $('.pckge-slider');

var settings = {
  dots: false,
  arrows: false,
  slide: '.slick-slideshow__slide',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '0px',
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});


////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs custom end

////// Accordion 
$('.accordion .quest-title.active1').addClass('active');
$('#accordion-1').slideDown(300).addClass('open');
function close_accordion_section() {
jQuery('.accordion .quest-title').removeClass('active');
jQuery('.accordion .quest-content').slideUp(300).removeClass('open');
}
jQuery('.quest-title').click(function(e) {
// Grab current anchor value
var currentAttrValue = jQuery(this).attr('href');
if(jQuery(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
jQuery(this).addClass('active');
// Open up the hidden content panel
jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
}
e.preventDefault();
});
////// Accordion end 


$('.card-title').on('click',function(){
    
    $(this).find('.ct-panel').toggleClass('transform-rotate-180')
})

}); // document ready end

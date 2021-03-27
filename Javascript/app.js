// clearing the console
console.clear();

//menu icon section
const navy = document.getElementById("navy");

document.querySelector(".menu").addEventListener("click", () => {
    if (navy) {
      navy.style.left = "0";
    }
  });

function Close() {
    if (navy) {
      navy.style.left = "-100%";
    }
}

//page loader
/*
function preloaderFadeOutInit(){
  $('.preloader').fadeOut('slow');
  $('body').attr('id','');
  }
  // Window load function
  jQuery(window).on('load', function () {
  (function ($) {
  preloaderFadeOutInit();
  })(jQuery);
  });
*/
    setInterval(function(){
    $('.preloader').fadeOut();
}, 3000);



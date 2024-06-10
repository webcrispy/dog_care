(function($){

/*$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});


*/

$('.owl-carousel').owlCarousel({
    items:1,
    margin:0,
    stagePadding:0,
    loop:true,
    margin:0,
    nav:true,
    autoplay:true
});

new Mmenu(document.querySelector("#menu"));
            document.addEventListener("click", function (evnt) {
                var anchor = evnt.target.closest('a[href="#/"]');
                if (anchor) {
                    evnt.preventDefault();
                }
   });


/*$(document).ready(function(){

  $("button").click(function(){
    $("p").slideToggle();
  });

});*/

/*$(window).on( "load", function() {
  // Handler for `load` called.
     alert("window is loaded");
} );*/

/*$(window).load(function() {
    // page is fully loaded, including all frames, objects and images
    alert("window is loaded");
});*/

})(jQuery);
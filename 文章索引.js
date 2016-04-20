$(document).ready(function() {
	
  $('.humberger').on('click', function(event) {
    $(this).children(".menu-trigger").toggleClass("active");
    if($(this).hasClass("erase")){
      $(this).toggleClass("normal");
      $(this).toggleClass("erase");
    }else{
      $(this).toggleClass("normal");
      $(this).toggleClass("erase");
    }

    if ($('.slide_menu').hasClass('on_menu')) {
      $('.slide_menu').removeClass('on_menu').stop().animate({"right":-300}, 400);
    }else{
      $('.slide_menu').addClass('on_menu').stop().animate({"right":0}, 400);
    }
  });
  

$(".sp_humberger").click(function() {

});

	$("#article-quote1").mouseover(function(){$("#article-quote1").css({"border":"#CCC 1px solid","box-shadow":"0 0 10px #999","cursor":"pointer"});$("#article-quote1 pre").css("color","#de7d46");}).mouseout(function(){$("#article-quote1").css({"border":"#fff 1px solid","box-shadow":"0 0 10px #fff"});$("#article-quote1 pre").css("color","#333");});
	$("#article-quote2").mouseover(function(){$("#article-quote2").css({"border":"#CCC 1px solid","box-shadow":"0 0 10px #999","cursor":"pointer"});$("#article-quote2 pre").css("color","#de7d46");}).mouseout(function(){$("#article-quote2").css({"border":"#fff 1px solid","box-shadow":"0 0 10px #fff"});$("#article-quote2 pre").css("color","#333");});
	$("#article-quote1").click(function(){window.open("说说那些HTML5标签.html","_self")})
	$("#article-quote2").click(function(){window.open("#","_self")})

	
		/*$(document).not("#click-nav").click(function(){$("#click-nav").slideUp("slow");$("#ion-navigate").show("");});   */
	
	
});

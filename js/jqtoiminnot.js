$(function(){
$(".content").fadeIn(600);
$(".content2").fadeIn(600);

});
	

$(document).ready(function() {
    
	
	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
		
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
            
        }); 
    
		$('.hideme2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                $('.hideme3').animate({'opacity':'1'},1200);     
            }
            
        }); 
	
	
    });
    
});

$(document).ready(function() {
	
 $(".videolink").click(function(){	
$(".videolink")	.effect( "pulsate", {times:1}, 1500 );
 });
  });
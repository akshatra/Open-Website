


//THIS IS THE HEADER


//implementing jquery to handle events based on functions



var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){
	/* TO EXPLAIN 
 		console.log('hi')--if we use this 
 		the time we scroll will print hi that many number of time
 		if we scroll 40 px it will print 'hi' for 40 times.
		So the value will be the value of pixels we scroll
 	*/



   if($(window).scrollTop()){
      $('nav').addClass('black');
    }
    else{
      $('nav').removeClass('black');
    }


/*decrease the number to make transition faster*/
  
  var wScroll = $(this).scrollTop();//tell you how far the window is scrolled when the window is scrolled.
	// console.log(wScroll) //to log how far the scroll is from the top
	// $('.className').css('transform', 'translate(50px, 50px)'); ---- translates width & height
  if (wScroll <= pContainerHeight) {
  	//decrease the number to make transition faster
   // $('.logo').css({// changing the translate property of the translate function && adding % type just to add a unit type
   //   'transform' : 'translate(0px, '+ wScroll /3.5 +'%)'  //the logo remains in the center all the time bcz wScroll/2 
   // });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /2.9 +'%)' //this is going to be slower
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /8.5 +'%)'//we want the bird to move up so we put -ve symbol and divided it by 40 to move it very slowly.  
    });

     $('.fore-text').css({
      'transform' : 'translate(0px, -'+ wScroll /18 +'%)'//we want the bird to move up so we put -ve symbol and divided it by 40 to move it very slowly.  
    });

  }


  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});


//to fade the logo slowly 
$(function() {
	var documentEl =$(document),
		fadeEle = $('#fade-away2'); //to retrieve element we want to fade out

		documentEl.on('scroll', function(){ //changes will be made to the web page when it scrolls
			var currScrollPos = documentEl.scrollTop();
			//The fade is activated once the element reaches the top of the window
			fadeEle.each(function(){ //iterate through every scrolling element of the web page
				var $this = $(this), //reffer to the element we are currnetly iterating through
					eleOffsetTop = $this.offset().top;//to ensure that the elemets fade out only when the reach to the top of the page
				if (currScrollPos > eleOffsetTop){ //to check if the element has reached to the top of the page 
					$this.css('opacity', 1 - (currScrollPos-eleOffsetTop)/90); 
				}
			});
		});
});


//to make the background react on move
$('.bird-box').mousemove(function(e){
	var moveX = (e.pageX * 1/360 );// the more the number the more reactive the page becomes
	var moveY = (e.pageY * 1/360);
	$(this).css('background-position', moveX + 'px ' +moveY + 'px  ')
});


//typeScript
var typed = new Typed(".type", {
	  strings: [
		"~$Hello World !  ",
		
		"| + C O D I N G +   ",
		
		"| Open Source ",
		
	  ],
	  typeSpeed: 80,
	  backSpeed: 50, 
	  loop: true
});



   
 




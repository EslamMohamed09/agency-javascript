(function($){
	("use strict");


	function scrollUp(){
		const scrollUp = document.getElementById('scroll-up');
		if(this.scrollY >= 1200) {scrollUp.classList.add('show-scroll'); 
		} else {
			scrollUp.classList.remove('show-scroll');
		};
	}
	window.addEventListener('scroll', scrollUp);
	

	$('.scroll-up').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop:0
		}, 1000);
	});

	  //timer 
	  $('.count-num').each(function(){
		var $this = $(this),
		countTo = $this.attr('data-count');
		$({countNum : $this.text() }).animate({
			countNum : countTo
		},
		{
		duration:5000,
		step:function(){
			$this.text(Math.floor(this.countNum));
		},
		complete : function(){
			$this.text(this.countNum + '+');
		}
		}
		)
	  }) 



})(jQuery);
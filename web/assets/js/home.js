
$('img.lazy').lazyload();
$('.slicker').slick({
	"slidesToScroll": 1, 
	"adaptiveHeight": true,
	"autoplay": true,
	"responsive" : [
    	{
     		 breakpoint: 480,
     		 settings: 'unslick'
     	 }
    	]
});

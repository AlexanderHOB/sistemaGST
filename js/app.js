/*ScrollSpy*/
(function(){
	var navLinks = $('nav div ul li a'),
	navH = $('nav').height(),
	section = $('section'),
	documentEl = $(document);
	documentEl.on('scroll', function() {
		var currentScrollPos = documentEl.scrollTop();
		section.each(function(){
			var self = $(this);
			if ( self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ) {
				var targetCLass = '.' + self.attr('id') + '-marker';
				navLinks.removeClass('active');
				$(targetCLass).addClass('active');
			}
		});
	});
})();

/*Cambiar color*/
var nav = document.getElementById('nav');
window.onscroll = () => {
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
		nav.classList.add('bg-blue');
	}else{
		nav.classList.remove('bg-blue');
	}
}
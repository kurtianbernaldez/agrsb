let lastScrollTop=0;

window.addEventListener('scroll', function(){
	let header = document.querySelector('header');
	let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

	if(currentScroll > lastScrollTop){
		header.classList.add('hidden');
	}else{
		header.classList.remove('hidden');
	}

	lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
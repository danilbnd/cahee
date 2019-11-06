;(function() {
	"use strict";
	
		let menuBtn = document.querySelector('.ba-menu-toggle');
		let menuWrap = document.querySelector('.ba-menu');

		menuBtn.addEventListener('click', () => {
			menuWrap.classList.toggle('active');
		});

})();


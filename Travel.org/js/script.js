window.addEventListener('DOMContentLoaded', function() {
	'use strict'

	let tabContent = document.querySelectorAll('.info-tabcontent'),
		tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header');

	const hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};
hideTabContent(1);


	const showTabContent = (b) => {
			if (tabContent[b].classList.contains('hide')) {
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');	
			}
		};

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;

				}
			}
		}

	})


// cost
	let counterBlockInput = document.querySelectorAll('.counter-block-input'),
		total = document.querySelector('#total');

		total.textContent = counterBlockInput[1]*counterBlockInput[0];


})

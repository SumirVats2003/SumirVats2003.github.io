const btn = document.querySelector('.ham');
const nav = document.querySelector('.navbar');
const ham = document.querySelector('.ham');

btn.addEventListener('click', () => {
	if (nav.style.display == 'none') {
		nav.style.display = 'block';
		ham.innerHTML = '&#x21B0;';
	}
	else {
		nav.style.display = 'none';
		ham.innerHTML = '&#x21B2;';
	}
});

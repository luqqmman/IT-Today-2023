// Preloader
const preloader = document.getElementById('preloader');
window.addEventListener('load', function () {
	preloader.remove();
});

// Header Scoll
const headerScroll = document.getElementById('header');
window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		headerScroll.classList.add('header-scrolled');
	} else {
		headerScroll.classList.remove('header-scrolled');
	}
});

// Menu mobile nav toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navbar = document.getElementById('navbar');
const wrapperListNavigation = document.querySelector('.wrapper-list-navigation');
mobileNavToggle.addEventListener('click', function () {
	if (this.classList.contains('fa-bars')) {
		this.classList.replace('fa-bars', 'fa-xmark');
	} else {
		this.classList.replace('fa-xmark', 'fa-bars');
	}

	navbar.classList.toggle('navbar-mobile');
	wrapperListNavigation.classList.toggle('show');
});

// Menu Navigation dropdowns Active
const menuDropdowns = document.querySelectorAll('.dropdown > a');
menuDropdowns.forEach((menuDropdown) => {
	menuDropdown.addEventListener('click', function (e) {
		const submenu = menuDropdown.parentElement.querySelector('.submenu');
		submenu.classList.toggle('active');

		menuDropdowns.forEach((menuDropdownNonActive) => {
			menuDropdownNonActive.children[0].classList.remove('active');
		});

		const iconArrow = menuDropdown.children[0];
		iconArrow.classList.toggle('rotate');
	});
});

// Link Menu Active if Click
const linksMenu = document.querySelectorAll('.scrollto');
linksMenu.forEach((linkMenu) => {
	linkMenu.addEventListener('click', function () {
		linksMenu.forEach((linkMenuNonActive) => {
			linkMenuNonActive.classList.remove('active');
		});
		linkMenu.classList.add('active');
	});
});

function closeMenuMobileScreen() {
	navbar.classList.remove('navbar-mobile');

	linksMenu.forEach((linkMenuNonActive) => {
		linkMenuNonActive.classList.remove('active');
	});
	linksMenu[0].classList.add('active');

	menuDropdowns.forEach((menuDropdownNonActive) => {
		menuDropdownNonActive.children[0].classList.remove('active', 'rotate');
	});

	mobileNavToggle.classList.replace('fa-xmark', 'fa-bars');
	wrapperListNavigation.classList.remove('show');

	const allSubmenu = document.querySelectorAll('.submenu');
	allSubmenu.forEach((allSubmenuNonActive) => {
		allSubmenuNonActive.classList.remove('active');
	});
}

window.addEventListener('resize', function () {
	if (this.window.innerWidth >= 1024) {
		closeMenuMobileScreen();
	}
});

window.addEventListener('keyup', function (e) {
	if (navbar.classList.contains('navbar-mobile')) {
		if (e.key === 'Escape') {
			closeMenuMobileScreen();
		}
	}
});

// Back to top scroll
const backToTop = document.querySelector('.back-to-top');
const containerMarginX = document.querySelector('.container').getBoundingClientRect().x;
window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		backToTop.style.cssText = `opacity: 1; visibility: visible; right: ${containerMarginX}px`;
	} else {
		backToTop.removeAttribute('style');
	}
});

// Navbar links active state on scroll
function navbarLinksActive() {
	let position = window.scrollY + 200;
	linksMenu.forEach((linkMenu) => {
		const linkMenuHash = linkMenu.getAttribute('href');
		if (!linkMenuHash) return;

		const sectionLinkMenu = document.querySelector(linkMenuHash);
		if (!sectionLinkMenu) return;

		if (position >= sectionLinkMenu.offsetTop && position <= sectionLinkMenu.offsetTop + sectionLinkMenu.offsetHeight) {
			linkMenu.classList.add('active');
		} else {
			linkMenu.classList.remove('active');
		}
	});
}
window.addEventListener('scroll', navbarLinksActive);

// Animation on scroll
window.addEventListener('load', () => {
	AOS.init({
		duration: 1000,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
	});
});

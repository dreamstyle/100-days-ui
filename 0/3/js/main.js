jQuery(document).ready(function($) {
	$('#btn-nav-mobile').on('click', showMobileNavbar);
	$('#btn-close-nav, #overlay').on('click', hideMobileNavbar);
});

function showMobileNavbar() {
	$('#nav--mobile').fadeIn(400);
	$('#overlay').fadeIn(400);
}

function hideMobileNavbar() {
	$('#nav--mobile').fadeOut(400);
	$('#overlay').fadeOut(400);
}

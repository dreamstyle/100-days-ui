$(document).ready(function() {
	var container = $('#container'),
		pageSignIn = $('#page-sign-in'),
		pageSignUp = $('#page-sign-up');

	$('#btn-sign-up').on('click', function() {
		activateTab(this);
		pageSignIn.fadeOut( function() {
			pageSignUp.fadeIn();
			container.removeClass('container__sign-in');
		});
	});

	$('#btn-sign-in').on('click', function() {
		activateTab(this);
		pageSignUp.fadeOut( function(){
			pageSignIn.fadeIn();
			container.addClass('container__sign-in');
		});
	});

	$('.btn-password').on('click', function(event) {
		var button = $(this);
		event.preventDefault();

		if (button.hasClass('btn-password__visible')) {
			button
				.removeClass('btn-password__visible')
				.closest('form').find('[type="text"]').attr('type', 'password');
		} else {
			button
				.addClass('btn-password__visible')
				.closest('form').find('[type="password"]').attr('type', 'text');
		}
	});
});

function activateTab(target) {
	$('.tab__item').removeClass('is-active');
	$(target).addClass('is-active');
}

function preventDefault() {

}
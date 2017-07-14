$(document).ready(function() {
	$('#btn-follow').on('click', function() {
		var toState = $(this).hasClass('following') ? 'Follow' : 'Following';
		$(this).text(toState);
		$(this).toggleClass('following');
	});

	$('.js-btn-like').on('click', function() {
		var button  = $(this),
			counter = $(this).find('.count-like');

		if (button.hasClass('liked')) {
			counter.text(Number(counter.text()) - 1);
		} else {
			counter.text(Number(counter.text()) + 1);
		}
		button.toggleClass('liked');
	});
});
$(document).ready(function() {
	$('#btn-submit').on('click', function(event) {
		event.preventDefault();
		$('aside').addClass('aside--complete');
		$('main').addClass('main--complete');
		window.setTimeout(initCongrats, 200)
	});
});

function initCongrats() {
	$('#payment-proceeding').fadeOut('800', showCongrats);
}

function showCongrats() {
	$('#payment-complete img')
		.fadeIn(800, function() {
			$('#payment-complete h1')
				.fadeIn(1000, function() {
					$('#payment-complete p').fadeIn(1000);
				});
		});
}
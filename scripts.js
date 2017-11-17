$(document).ready(function() {
	var trump = '';
	theQuote();

	$("#getQuote").on("click", function() {
		theQuote();
	});

	$("#twitter").on("click", function() {
		var tweetQuote = 'https://twitter.com/intent/tweet?text=' + trump + ' ' + '... Says the Don';
			window.open(tweetQuote, 'twitter');
			return false;
		});

		function theQuote() {
			$.ajax ({
				type: 'GET',
				url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
				dataType: 'json',
				success: function(data) {
				trump = data.message;
        document.getElementById('quote').innerHTML = trump;
				}
			});
		}
	});

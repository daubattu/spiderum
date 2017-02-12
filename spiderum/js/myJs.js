var lastScroll = 0;

$(document).ready(function() {
	var li = $('.menu ul li > a');
	console.log(li.length);
	for(var i = 0; i < li.length; i++) {
		li[i].addEventListener('mouseover', function() {
			this.style.color = "#b3dfff";
			this.addEventListener('mouseout', function() {
				this.style.color = "#34495e";
			});
		})

	}

	$(window).scroll(function() {
		var st = $(this).scrollTop();
		console.log("st: " + st);
		console.log("lastScroll: " + lastScroll);
		if(st > 40 && st > lastScroll) {
			$("header").removeClass('up').addClass('down');
		} else if(st > 40 && st < lastScroll) {
			$('header').removeClass('down').addClass('up');
		} else {
			$('header').removeClass('down').addClass('up');
		}
		lastScroll = st;
	});
});
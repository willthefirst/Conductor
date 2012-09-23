var GH = {

	$button : $('.snare'),

	init: function() {
		GH.playPause();
	},

	playPause: function() {
		var isPlaying = false;
		var audio = document.getElementsByTagName('audio')[0];


		GH.$button.on('click', function() {
			if (isPlaying) {
				audio.pause();
				window.clearInterval(a);
				isPlaying = false;
			}
			else {
				audio.play();
				a = setInterval( function() {
					GH.metronome(audio.currentTime);
				}, 50);
				isPlaying = true;
			}
		});
	},

	cutoffs: {
		last: 0.333,
		next: 0.999
	},

	metronome: function(currentTime) {
		console.log(currentTime);
		if (currentTime >= (GH.cutoffs.next - 0.001)) {
			GH.cutoffs.last = GH.cutoffs.next;
			GH.cutoffs.next = GH.cutoffs.last + 0.66666666666;
			GH.$button.append('bam');
		}
	}
};

$(function() {
	GH.init();
});
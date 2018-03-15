var init = function() {
	var graph = $('.graph-countries > .graph');

	if (graph.length) {
		var d3graph = d3.select('.graph-countries > .graph');
	
		var countries = graph.data('countries');
		var count = graph.data('count');
		var size = graph.data('size');

		var max = d3.max(count);
		
		var bar_width = 100 / count.length;

		var bars = d3graph.selectAll('.bar')
			.data(count)
			.enter()
			.append('div')
				.attr('class', 'bar')
				.attr('title', (d, i) => countries[i])
				.style('width', bar_width + '%')
				.style('height', 0)

		var anim = d3.transition()
			.duration(1000)
			.ease(d3.easeQuad);

		var delay = (d,i) => i * 100;

		bars.transition(anim)
			.style('height', (d) => d / max * 100 + '%')
			.delay(delay);
		
		bars.append('div')
			.attr('class', 'color')
			.style('opacity', 0)
			.transition(anim)
				.style('opacity', 1)
				.delay(delay);
		
		bars.append('p')
			.attr('class', 'percentage')
			.text('0%')
			.style('opacity', 0)
			.transition(anim)
				.style('opacity', 1)
				.delay(delay)
				.tween('text', function(d) {
					var i = d3.interpolate(0, d / size * 100);
					return (t) => {
						this.textContent = Math.round(i(t) * 100) / 100 + '%';
					};
				});
		
		bars.append('p')
			.attr('class', 'country')
			.text((d, i) => countries[i])
			.style('opacity', 0)
			.transition()
				.style('opacity', 1)
				.delay(delay);
	}
};

// $(document).ready(init);
$(document).on('turbolinks:load', init);
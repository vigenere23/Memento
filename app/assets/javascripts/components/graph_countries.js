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

		bars.transition()
			.style('height', (d) => d / max * 100 + '%')
			.delay((d, i) => i * 60)
			.duration(600)
			.ease(d3.easeQuadInOut);
		
		bars.append('div')
			.attr('class', 'color')
			.style('opacity', 0)
			.transition()
				.style('opacity', 1)
				.delay((d, i) => i * 60)
				.duration(600)
				.ease(d3.easeQuadInOut);
		
		bars.append('p')
			.attr('class', 'percentage')
			.text((d) => Math.round(d / size * 100 * 100) / 100 + '%')
			.style('opacity', 0)
			.transition()
				.style('opacity', 1)
				.delay((d, i) => i * 60)
				.duration(600)
				.ease(d3.easeQuadInOut);
		
		bars.append('p')
			.attr('class', 'country')
			.text((d, i) => countries[i])
			.style('opacity', 0)
			.transition()
				.style('opacity', 1)
				.delay((d, i) => i * 60)
				.duration(600)
				.ease(d3.easeQuadInOut);
	}
};

// $(document).ready(init);
$(document).on('turbolinks:load', init);
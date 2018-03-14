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
				.style('height', (d) => d / max * 100 + '%')
				.style('width', bar_width + '%');
		
		bars.append('div')
			.attr('class', 'color');
		
		bars.append('p')
			.attr('class', 'percentage')
			.text((d) => Math.round(d / size * 100 * 100) / 100 + '%');
		
		bars.append('p')
			.attr('class', 'country')
			.text((d, i) => countries[i]);
	}
};

// $(document).ready(init);
$(document).on('turbolinks:load', init);
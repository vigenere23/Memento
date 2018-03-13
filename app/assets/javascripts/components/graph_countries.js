$(document).ready(function() {
	var graph = $('.graph-country');
	console.log('0');
	var d3graph = d3.select('.graph-country');
	console.log('1');
	var countries = graph.data('countries');
	console.log('2');
	var count = d3.values(graph.data('count'));
	console.log('3');
	var max = d3.max(count);
	console.log('4');
	count = count.map(x => x / max * 100);
	console.log('5');

	d3graph.selectAll('.bar')
		.data(count)
		.enter()
			.append('div')
			.attr('class', 'bar')
			.style('height', (d) => d + '%');
});

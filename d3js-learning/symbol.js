		var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':900,'height':600});

		var arc = d3.svg.symbol().type('triangle-up')
					.size(function(d){ return scale(d); });

		var data = [2.5,2,3,4,5,6];

		var scale = d3.scale.linear()
						.domain([1,6])
						.range([100,1000]);

		var colorscale = d3.scale.linear()
							.domain([1,6])
							.range(["red","steelblue"]);

		var group = svg.append('g')
					.attr('transform','translate('+ 200 +','+ 200 +')');

		var line = group.selectAll('path')
				.data(data)
				.enter()
				.append('path')
				.attr('d',arc)
				.attr('fill',function(d){ return colorscale(d); })
				.attr('stroke','#000')
				.attr('stroke-width',1)
				.attr('transform',function(d,i){ return "translate("+(i*10)+","+(i*15)+")"; });
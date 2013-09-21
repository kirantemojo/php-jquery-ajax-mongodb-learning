var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':900,'height':600});

		var arc = d3.svg.arc()
					.innerRadius(function(d,i){ return i*15; })
					.outerRadius(function(d,i){ return i*30; })
					.startAngle(0)
					.endAngle(function(d){ return scale(d); });

		var data = [2.5,2,3,4,5,6];

		var scale = d3.scale.linear()
						.domain([1,6])
						.range([0,Math.PI*2]);

		/*
		var colorscale = d3.scale.linear()
							.domain([1,6])
							.range(["red","steelblue"]);
		*/

		var colorscale = d3.scale.category10();

		var group = svg.append('g')
					.attr('transform','translate('+ 200 +','+ 200 +')');

		var line = group.selectAll('path')
				.data(data)
				.enter()
				.append('path')
				.attr('d',arc)
				.attr('fill',function(d){ return colorscale(d); })
				.attr('stroke','#000')
				.attr('stroke-width',1);
					

		var line = group.selectAll('text')
				.data(data)
				.enter()
				.append('text')
				.attr({'x':function(d,i){ return i*20; },'y':function(d,i){ return i*20; }})
				.text(function(d){ return "Calculated "+d; });
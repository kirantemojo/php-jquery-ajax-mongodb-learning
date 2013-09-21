var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':900,'height':600});

var radius = d3.scale.linear()
				.domain([0,1])
				.range([100,200]);

var line = d3.svg.line
			.radial()
			.interpolate("basis-closed")
			.radius(function(d){ return radius(d); })
			.angle(function(d,i){ return scale(i); });

var data = d3.range(360).map(function(i){
				return Math.cos(Math.PI * i/6)/6 + 0.8;
			});

var scale = d3.scale.linear()
 				.domain([0,data.length])
 				.range([0,Math.PI*2]);

var group = svg.append('g')
			.attr('transform','translate('+ 400 +','+ 300 +')');

var line = group.append('path')
				.data([data])
				.attr('d',line)
				.attr('fill','none')
				.attr('stroke','#000')
				.attr('stroke-width',1);
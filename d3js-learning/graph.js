var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':900,'height':600});

var line = d3.svg.line()
			.interpolate('monotone')
			.x(function(d){ return Math.round(scale(d.x)); })
			.y(function(d){ return  Math.round(scale(d.y)); });

var data = d3.range(100).map(function(){
return {'x':Math.round(Math.random()*1000),'y':Math.round(Math.random()*1000)};
});

data.sort(function(o,n){
		return (d3.ascending(o['x'],n['x']));
});

var scale = d3.scale.linear()
 				.domain([0,1000])
 				.range([0,500]);

var group = svg.append('g')
			.attr('transform','translate('+ 100 +','+ 100 +')');

var line = group.append('path')
				.data([data])
				.attr('d',line)
				.attr('fill','none')
				.attr('stroke','#000')
				.attr('stroke-width',1);
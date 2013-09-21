var canvas = d3.select('#wrapper').append('svg')
				.attr({'width':'1200','height':'700'});
d3.json('india_states.geojson',function(data){
	var group = canvas.selectAll('g')
					.data(data.features)
					.enter()
					.append('g');

	var projection = d3.geo.mercator().scale(950).translate([-800,700]);
	var path  = d3.geo.path().projection(projection);
	var areas = group.append('path')
					.attr('d',path)
					.attr('class','areas')
					.style('fill','steelblue');

	 console.log(data);
	 group.append('text')
	 	.attr({'x':function(d){ return path.centroid(d)[0]; },
	 		   'y':function(d){ return path.centroid(d)[1]; },
	 		   'text-anchor':'middle',
	 		   'font-size' : '14px'
	 		}).text(function(d,i){ console.log(d); return d.properties['NAME_1']; });
	
});
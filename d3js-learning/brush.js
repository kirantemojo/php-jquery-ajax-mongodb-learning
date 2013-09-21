		var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':900,'height':600});

		var x = y  = d3.scale.linear()
					.range([100,100]);

		var brush = d3.svg.brush()
					.x(x)
					.y(y)
					.extent([[100, 100], [200, 200]])
					.on('brushstart',function(){ alert(0); })
					.on('brush',function(){ alert(0); })
					.on('brushend',function(){ alert(0); });

		svg.append("g").append('rect').attr({'width':300,'height':300}).call(brush);
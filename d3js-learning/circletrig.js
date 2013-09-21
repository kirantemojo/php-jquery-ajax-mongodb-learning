var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':'100%','height':'100%','fill':'#adadad'});

		var data = d3.range(40).map(function(i){
			return {'x':i,'y':i};
		});

		var xcos = d3.scale.linear()
					.domain([0,data.length])
					.range([0,(Math.PI*2)]);

		var ysin = d3.scale.linear()
					.domain([0,data.length])
					.range([0,(Math.PI*2)]);

		console.log(ysin(100)*100);

		var arc = d3.svg.arc()
					.innerRadius(98)
					.outerRadius(100)
					.startAngle(0)
					.endAngle(2*Math.PI);

		var grp = svg.append('g')
					  .attr('transform','translate(150,150)');

		var path = grp.append('path')
						.attr('d',arc)
						.style('fill','#000');
						
	    grp.append('text')
			.text(function(){ return "Kiran"; })
			.style({'fill':'#000'})
			.attr({'text-anchor':'middle'});

		 var line = d3.svg.line()
		 				   .x(function(d){ return Math.cos(xcos(d.x))*100; })
		 				   .y(function(d){ return Math.sin(ysin(d.y))*100; });

		 // var pathline = grp.data([data])
		 // 					.enter()
		 // 					.append('path')
			//  				  // .data([[{'x':Math.cos(Math.PI/2)*100,'y':Math.sin(0)*100},{'x':Math.cos(Math.PI/3)*100,'y':Math.sin(Math.PI/3)*100}]])
			//  				  //.data([data])
			//  				  .attr('d',line)
			//  				  .style('fill','none')
			//  				  .style('stroke','black')
			//  				  .style('stroke-width',2);

		// var pathline = grp.append('path')
		// 				.data([data])
		//  				.attr('d',line)
		//  				.style('fill','none')
		//  				.style('stroke','black')
		//  				.style('stroke-width',2);

			var line = grp.selectAll('line')
							.data(data)
							.enter()
							.append('line')
							.attr({'x0':0,'y0':0})
							.attr({
								'x1':function(d){ return Math.cos(xcos(d.x))*100; },
								'y1':function(d){ return Math.sin(ysin(d.y))*100; }
								})
							.style('fill','none')
			  				.style('stroke','black')
			  				.style('stroke-width',2);
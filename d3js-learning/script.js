		$(window).resize(function(){
			if(d3.select('svg')){
				d3.select('svg').remove();
				func();
			}
		});
		var func = function(){

			var width = window.innerWidth,
			height = window.innerHeight,
			aspectRatio = (width/height),
			rectWidth = 600,
			rectHeight = 300;

			var halfScale = function(width,height){
					return (d3.scale.linear()
						.domain([width,height])
						.range([width/2,height/2]));
			};

			var windowScale = halfScale(width,height);
			var rectScale = halfScale(rectWidth,rectHeight);

			var svg = d3.select('#wrapper')
					  .append('svg')
					  .attr({'width':width,'height':height});

			
			var rect = svg.append('rect')
							.attr({'x':(windowScale(width) - rectScale(rectWidth) ),'y':(windowScale(height) - rectScale(rectHeight) ),'width':rectWidth,'height':rectHeight,'rx':30,'ry':30});
		
			
			var circle = svg.append('circle')
							.attr({'cx':windowScale(width),'cy':windowScale(height),'r':200});
			

			var group = svg.append('g').attr('transform','translate('+ windowScale(width-400) +','+ windowScale(height) +')');

			var title = group.selectAll('text')
							.data(['j','k','e','f','e','x']);

			title.enter()
				.append('text')
				.attr('x',function(d,i){ return i; })
				.attr('font-family','verdana')
				.style('fill','#000')
				.attr('font-size',function(d,i){ return i; })
				.text(function(d){
					return d;
				});

			title.transition('text')
					.duration(800)
					.attr('x',function(d,i){ return i*70; })
					.attr('font-size',function(d,i){ return i*20+60; });

			
			var grp = svg.append('g').attr('transform','translate('+ (width) +','+ (height-10) +')').classed('button',true);

			var caption = grp.selectAll('text')
							.data(function(){ 
								var text = "Experimental App"; 
								return text.split();
							 });

				grp.append('rect')
						.attr({'x':25,'y':10 ,'width':250,'height':50,'fill':'steelblue'
								,'rx':10,'ry':10}).text('Testing');

				caption.enter()
						.append('text')
						.attr('x',function(d,i){ return i+40; })
						.attr('y','44')
						.attr('font-size',function(){ return 30; })
						.text(function(d){
							return d;
						});


				grp.transition()
						.duration(600)
						.attr('transform','translate('+ (width -300 ) +','+ (height-100) +')');

				grp.select('text').on('mouseover',function(){
					grp.select('rect').style('fill','red');
				});
				grp.select('text').on('mouseleave',function(){
					grp.select('rect').style('fill','steelblue');
				});

				grp.select('text').on('click',function(){
					svg.selectAll('*').remove();
					alert('I\'m ready for Next Step');
				});
		};
		func(); 
var data = [{"x":100,"y":200},{"x":400,"y":500}];
		var svg = d3.select('#wrapper')
			.append('svg')
			.datum([10,100])
			.attr({'width':900,'height':500});
		var line = svg.selectAll('rect')
				.data(data)
				.enter()
				.append('rect')
				.style('fill','red')
				.attr({'width':function(d){ return d.x; },'height':function(d){ return d.y; }})
			svg.selectAll('rect').transition()
					.duration(1000)
					.ease('elastic')
					.attrTween('width',function(d,i,a){
						return d3.interpolate(a,300);
					})
					.styleTween('fill',function(d,i,a){
						return d3.interpolate(a,"steelblue");
					});
			d3.selectAll('p')
				.data(["Kiran","Madhu"])
				.enter()
				.append('p')
				.text(function(d){
					return d;
				});	
			d3.selectAll('p').transition().duration(1000).tween('color',function(){
					var i = d3.interpolate(this.style.color,"red");
					return function(t){
						this.style.color = i(t);
					};
			});

			function foo(transition){
				transition.style('fill','royalblue');
			}

			svg.append('circle')
				.attr({"cx":500,"cy":200,'r':20})
				.transition()
				.duration(1000)
				.attr('r',100)
				.transition()
				.ease('elastic')
				.call(foo);

			console.log(d3.bisect([10,60,30,50,20],3));
			console.log(d3.entries({"name":"kiran"}));
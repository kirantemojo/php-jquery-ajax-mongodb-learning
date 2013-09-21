var width = 960,
	height = 600;

var fill = d3.scale.category10();

var nodes = d3.range(100).map(function(i){
	return {index:i};
});

var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':width,'height':height});

var force = d3.layout.force()
				.nodes(nodes)
				.on('tick',tick)
				.size([width,height])
				.start();

var node = svg.selectAll('.node')
				.data(nodes)
				.enter()
				.append('circle')
				.attr({'cx':function(d){ return d.x; },'cy':function(d){ return d.y; },'r':8})
				.style({'fill':function(d,i){ return fill(i & 3); },'stroke':function(d,i){ return d3.rgb(fill(i & 3)).darker(2); }})
				.call(force.drag)
				.on('mousedown',function(){ d3.event.stopPropagation(); });

svg.style('opacity',1e-6)
	.transition()
		.duration(1000)
		.style('opacity',1);

d3.select("body").on("mousedown",mousedown);

function tick(e){
	var k = 6*(e.alpha);
	nodes.forEach(function(o,i){
		o.y += i & 1 ? k : -k;
		o.x += i & 2 ? k : -k;
	});

	node.attr({"cx":function(d){ return d.x; },"cy":function(d){ return d.y; }});
}

function mousedown()
{
	nodes.forEach(function(o,i){
		o.x += (Math.random() - .5) * 40;
		o.y += (Math.random() - .5) * 40;
	});
	force.resume();
}
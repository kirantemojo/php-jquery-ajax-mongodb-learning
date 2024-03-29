		var lineData = [
		    {
		        "source": {
		            "x": 150,
		            "y": 350
		        },
		        "target":{
	            	"x": 250,
	            	"y": 450
	            }
		    },
			{
		        "source": {
		            "x": 100,
		            "y": 300
		        },
		        "target": {
		            "x": 200,
		            "y": 400
		        }
		    }   
		];

		var lineFunction = d3.svg.diagonal()
		   //.projection(function(d) { return [d.y, d.x] })
		   .source(function(d){ return d.source; })
		   .target(function(d){ return d.target; })

		var svgContainer = d3.select("#wrapper").append("svg")
		                                .attr("width", 500)
		                                .attr("height", 500);

			svgContainer.selectAll('path')
		    .data(lineData)
		    .enter()
		    .append("path")
		    .attr("d", lineFunction)
		    .attr("stroke", "blue")
		    .attr("stroke-width", 3)
		    .attr("fill", "none");
		var svg = d3.select('#wrapper')
			.append('svg')
			.attr({'width':900,'height':600});

		var testData1 = [
			  [ 0, 100],
			  [100, 200],
			  [200, 300],
			  [300, 200],
			];

		var testData2 = [
			  [100, 110],
			  [110, 120],
			  [120, 130],
			  [130, 120],
			];

		var area = d3.svg.area()
							.interpolate('cardinal')
							.tension(0);

		var group = svg.append('g')
					.attr('transform','translate('+ 100 +','+ 100 +')');

		var line = group.append('path')
				.data([testData1,testData2])
				.attr('d',area)
				.attr('fill','none')
				.attr('stroke','#000')
				.attr('stroke-width',1);
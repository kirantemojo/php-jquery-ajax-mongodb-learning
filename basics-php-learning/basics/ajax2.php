<<<<<<< HEAD
<!doctype html>
<html>
	<head>	
		<title>AJAX</title>
	</head>
	<body>
		<script>
		function loadXML()
		{
			var xmlhttp;
			if(window.XMLHttpRequest)
			{
				xmlhttp = new XMLHttpRequest();
			}
			else
			{
				xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			}
			xmlhttp.onreadystatechange= function ()
			{
				if(xmlhttp.readyState==4 && xmlhttp.status == 200)
				{
					document.getElementById('id').innerHTML = xmlhttp.responseText;
				}
			}
			xmlhttp.open("GET","ajax.php",true);
			xmlhttp.send();
		}
		</script>
		<div id="id"></div>
		<button type="button" onclick="loadXML();">Button</button>
	</body>
=======
<!doctype html>
<html>
	<head>	
		<title>AJAX</title>
	</head>
	<body>
		<script>
		function loadXML()
		{
			var xmlhttp;
			if(window.XMLHttpRequest)
			{
				xmlhttp = new XMLHttpRequest();
			}
			else
			{
				xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			}
			xmlhttp.onreadystatechange= function ()
			{
				if(xmlhttp.readyState==4 && xmlhttp.status == 200)
				{
					document.getElementById('id').innerHTML = xmlhttp.responseText;
				}
			}
			xmlhttp.open("GET","ajax.php",true);
			xmlhttp.send();
		}
		</script>
		<div id="id"></div>
		<button type="button" onclick="loadXML();">Button</button>
	</body>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</html>
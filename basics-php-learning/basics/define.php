<<<<<<< HEAD
<html>
<?php
	define('hello','how are you');
	$a= array('kiran','sanjay','tejaswini','apoorna');
	echo hello;
	if(isset($_POST['submit']))
	{
		echo $a;
		print $a;
		print_r($a);
		//header('Location:http://www.google.co.in/');
	}
include_once('top.php');
?>
<body>
<form method="POST">
<input type="text" name="name"/>
<input type="submit" name="submit" value="submit"/>
</form>
</body>
=======
<html>
<?php
	define('hello','how are you');
	$a= array('kiran','sanjay','tejaswini','apoorna');
	echo hello;
	if(isset($_POST['submit']))
	{
		echo $a;
		print $a;
		print_r($a);
		//header('Location:http://www.google.co.in/');
	}
include_once('top.php');
?>
<body>
<form method="POST">
<input type="text" name="name"/>
<input type="submit" name="submit" value="submit"/>
</form>
</body>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</html>
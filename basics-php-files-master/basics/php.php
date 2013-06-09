<<<<<<< HEAD
<?php
	session_start();
	if(isset($_SESSION['user']))
	{	
		unset($_SESSION['user']);
		//echo 'done man ur session is taken';
	}
?>
<?php
	if(isset($_REQUEST['user']) && isset($_REQUEST['password']))
	{
		session_destroy();
	}
?>
<form method="post" name=="form" action="">
Username:<input type="text" name="user">
Password:<input type="password" name="password">
<input type="submit" name="submit">
=======
<?php
	session_start();
	if(isset($_SESSION['user']))
	{	
		unset($_SESSION['user']);
		//echo 'done man ur session is taken';
	}
?>
<?php
	if(isset($_REQUEST['user']) && isset($_REQUEST['password']))
	{
		session_destroy();
	}
?>
<form method="post" name=="form" action="">
Username:<input type="text" name="user">
Password:<input type="password" name="password">
<input type="submit" name="submit">
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</form>
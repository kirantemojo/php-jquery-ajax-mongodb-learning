<<<<<<< HEAD
<?php 
	session_start();
	if(isset($_SESSION['user']))
	{
		$user1=$_SESSION['user'];
	}
	else
	{
	}
?>
<?php

define('USER','user');
define('PASS','123456');
		if( isset($_REQUEST['username'])&& isset($_REQUEST['password']))
		{
			$user1=trim($_REQUEST['username']);
			$pass1=trim($_REQUEST['password']);
			if(($user1 == USER) && ($pass1 == PASS))
			{	
				$_SESSION['user'] = USER;
				echo "Successful Login";
			}
			else
			{
				echo "Sorry man youare Caught";
			}
		}
?>
<form name="form">
Username:<input type="text" name="username"/>
Password:<input type="password" name="password"/>
<input type="submit" name="submit"/>

=======
<?php 
	session_start();
	if(isset($_SESSION['user']))
	{
		$user1=$_SESSION['user'];
	}
	else
	{
	}
?>
<?php

define('USER','user');
define('PASS','123456');
		if( isset($_REQUEST['username'])&& isset($_REQUEST['password']))
		{
			$user1=trim($_REQUEST['username']);
			$pass1=trim($_REQUEST['password']);
			if(($user1 == USER) && ($pass1 == PASS))
			{	
				$_SESSION['user'] = USER;
				echo "Successful Login";
			}
			else
			{
				echo "Sorry man youare Caught";
			}
		}
?>
<form name="form">
Username:<input type="text" name="username"/>
Password:<input type="password" name="password"/>
<input type="submit" name="submit"/>

>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd

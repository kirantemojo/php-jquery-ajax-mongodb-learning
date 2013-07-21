<<<<<<< HEAD
<?php
	echo 'Enter the form fields';
	mysql_connect('localhost','root','');
	mysql_select_db('kiran');
	if(isset($_REQUEST['username'])&& isset($_REQUEST['password']))
	{	
			$a=$_REQUEST['username'];
			$b=$_REQUEST['password'];
			echo $a.$b;
			$c = "INSERT INTO login(user, password) VALUES('$a', '$b')";
			mysql_query($c);
	}
?>
<form>
	<input type="text" name="username"/>
	<input type="text" name="password"/>
	<input type="submit" name="submit">
=======
<?php
	echo 'Enter the form fields';
	mysql_connect('localhost','root','');
	mysql_select_db('kiran');
	if(isset($_REQUEST['username'])&& isset($_REQUEST['password']))
	{	
			$a=$_REQUEST['username'];
			$b=$_REQUEST['password'];
			echo $a.$b;
			$c = "INSERT INTO login(user, password) VALUES('$a', '$b')";
			mysql_query($c);
	}
?>
<form>
	<input type="text" name="username"/>
	<input type="text" name="password"/>
	<input type="submit" name="submit">
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</form>
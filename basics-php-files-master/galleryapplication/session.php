<<<<<<< HEAD
<?php
include_once('inc/header.html');
?>
<section>
<?php
	session_start();
	if(!isset($_SESSION['name']))
	{
		header('location:login.php');
	}	
	if(isset($_POST['logout']))
	{
		if($_SESSION['name']!='')
		{
			session_destroy();
			header('location:login.php');
		}
		else
		{
			echo 'Session Break not done';
		}
	}
	if(isset($_POST['update']))
	{
		header('location:updatepass.php');
	}
	if(isset($_POST['updatepro']))
	{
		header('location:updateprofile.php');
	}
?>
<fieldset>
<legend>Welcome to the Gallery Application</legend>
<form action="" method="post">
<input type="submit" name="update" value="Change Password"/>
<input type="submit" name="updatepro" value="Update Profile"/>
<input type="submit" name="logout" value="Logout"/>
</form>
</fieldset>
<article>
	Gallery Application<br><br>
	<a href="gallery.php">Enter into the Application</a>
<article>
</section>
<?php
include_once('inc/footer.html');
=======
<?php
include_once('inc/header.html');
?>
<section>
<?php
	session_start();
	if(!isset($_SESSION['name']))
	{
		header('location:login.php');
	}	
	if(isset($_POST['logout']))
	{
		if($_SESSION['name']!='')
		{
			session_destroy();
			header('location:login.php');
		}
		else
		{
			echo 'Session Break not done';
		}
	}
	if(isset($_POST['update']))
	{
		header('location:updatepass.php');
	}
	if(isset($_POST['updatepro']))
	{
		header('location:updateprofile.php');
	}
?>
<fieldset>
<legend>Welcome to the Gallery Application</legend>
<form action="" method="post">
<input type="submit" name="update" value="Change Password"/>
<input type="submit" name="updatepro" value="Update Profile"/>
<input type="submit" name="logout" value="Logout"/>
</form>
</fieldset>
<article>
	Gallery Application<br><br>
	<a href="gallery.php">Enter into the Application</a>
<article>
</section>
<?php
include_once('inc/footer.html');
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
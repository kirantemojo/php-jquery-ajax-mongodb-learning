<<<<<<< HEAD
<?php
	include_once('inc/header.html');
?>
<section>
<?php
require 'inc/db.php';
if(isset($_POST['Name']) && isset($_POST['Password']))
{
	$r=md5($_POST['Password']);
	$s="SELECT * FROM registration WHERE name='".$_POST['Name']."' AND password='".$r."'";
	$res=mysql_query($s);
	$coun=mysql_num_rows($res);
	$fetc=mysql_fetch_row($res);
	//print_r($fetc);
	//echo $fetc[1].''.$fetc[2];
	//exit;
	if($coun==1)
	{
		session_start();
		$_SESSION['name']=$fetc[0];
		header('Location:session.php');		
	}
	else
	{
		//session_destroy();
		echo 'Check your Username and Password';
		//echo 'Your session is destroyed';
	}
}
?>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Login Form</legend>
<form name='Registrationform' method="post" action="" enctype="multipart/form-data" onsubmit="javascript: return validateForm()">
<p>Name:&nbsp;<input id="a" type='text' name='Name'/><br></p>
<p>Password:&nbsp;<input id="c" type='password' name='Password'/><br></p>
<p><input type='submit' style="margin-right:80px;" name='Submit' value='Sign In'/></p>
</form>
</fieldset>
</section>
<?php
	include_once('inc/footer.html');
?>
=======
<?php
	include_once('inc/header.html');
?>
<section>
<?php
require 'inc/db.php';
if(isset($_POST['Name']) && isset($_POST['Password']))
{
	$r=md5($_POST['Password']);
	$s="SELECT * FROM registration WHERE name='".$_POST['Name']."' AND password='".$r."'";
	$res=mysql_query($s);
	$coun=mysql_num_rows($res);
	$fetc=mysql_fetch_row($res);
	//print_r($fetc);
	//echo $fetc[1].''.$fetc[2];
	//exit;
	if($coun==1)
	{
		session_start();
		$_SESSION['name']=$fetc[0];
		header('Location:session.php');		
	}
	else
	{
		//session_destroy();
		echo 'Check your Username and Password';
		//echo 'Your session is destroyed';
	}
}
?>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Login Form</legend>
<form name='Registrationform' method="post" action="" enctype="multipart/form-data" onsubmit="javascript: return validateForm()">
<p>Name:&nbsp;<input id="a" type='text' name='Name'/><br></p>
<p>Password:&nbsp;<input id="c" type='password' name='Password'/><br></p>
<p><input type='submit' style="margin-right:80px;" name='Submit' value='Sign In'/></p>
</form>
</fieldset>
</section>
<?php
	include_once('inc/footer.html');
?>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd

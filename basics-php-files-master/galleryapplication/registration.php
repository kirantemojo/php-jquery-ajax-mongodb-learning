<<<<<<< HEAD
<?php
	include_once('inc/header.html');
?>
<section>
<?php
error_reporting(0);
require 'inc/db.php';
if(isset($_POST['Submit']))
{
	//echo "<pre>";print_r($_POST);echo "</pre>";
	$n = $_POST['Name'];
	$o = $_POST['Mobile'];
	$p = $_POST['Password'];
	$q = $_POST['CPassword'];
	$f = $_FILES['file']['name'];
	include 'inc/imageupload.php';
	if($p==$q)
	{	
		$y="SELECT * FROM registration WHERE name='".$_POST['Name']."'";
		$mat=mysql_query($y);
		$ct=mysql_num_rows($mat);
		if($ct>=1)
		{
			echo "user already exists".'<br>'."";
		}
		else
		{
			$z=md5($p);
			echo $z;
			$in = "INSERT INTO registration(name, mobile, password, image, time) VALUES('".$n."', ".$o.", '".$z."', '".$f."',NOW())";
			mysql_query($in);
			header('location:login.php');
		}
	}
}
?>
<script type="text/javascript" src="valid.js"></script>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Form Registration</legend>
<form name='Registrationform' method="post" action="" enctype="multipart/form-data" onsubmit="javascript: return validateForm()">
<p>Name:&nbsp;<input id="a" type='text' name='Name'/><br></p>
<p>Mobile no:&nbsp;<input id="b"type='text' name='Mobile' /><br></p>
<p>Password:&nbsp;<input id="c" type='password' name='Password'/><br></p>
<p>Confirm Password:&nbsp;<input id="d" type='password' name='CPassword'/><br></p>
<p>Choose Picture:&nbsp;<input id="file" type="file" name="file"/><br></p>
<p><input type='submit' style="margin-right:80px;" name='Submit' value='Register'/></p>
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
error_reporting(0);
require 'inc/db.php';
if(isset($_POST['Submit']))
{
	//echo "<pre>";print_r($_POST);echo "</pre>";
	$n = $_POST['Name'];
	$o = $_POST['Mobile'];
	$p = $_POST['Password'];
	$q = $_POST['CPassword'];
	$f = $_FILES['file']['name'];
	include 'inc/imageupload.php';
	if($p==$q)
	{	
		$y="SELECT * FROM registration WHERE name='".$_POST['Name']."'";
		$mat=mysql_query($y);
		$ct=mysql_num_rows($mat);
		if($ct>=1)
		{
			echo "user already exists".'<br>'."";
		}
		else
		{
			$z=md5($p);
			echo $z;
			$in = "INSERT INTO registration(name, mobile, password, image, time) VALUES('".$n."', ".$o.", '".$z."', '".$f."',NOW())";
			mysql_query($in);
			header('location:login.php');
		}
	}
}
?>
<script type="text/javascript" src="valid.js"></script>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Form Registration</legend>
<form name='Registrationform' method="post" action="" enctype="multipart/form-data" onsubmit="javascript: return validateForm()">
<p>Name:&nbsp;<input id="a" type='text' name='Name'/><br></p>
<p>Mobile no:&nbsp;<input id="b"type='text' name='Mobile' /><br></p>
<p>Password:&nbsp;<input id="c" type='password' name='Password'/><br></p>
<p>Confirm Password:&nbsp;<input id="d" type='password' name='CPassword'/><br></p>
<p>Choose Picture:&nbsp;<input id="file" type="file" name="file"/><br></p>
<p><input type='submit' style="margin-right:80px;" name='Submit' value='Register'/></p>
</form>
</fieldset>
</section>
<?php
	include_once('inc/footer.html');
?>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd

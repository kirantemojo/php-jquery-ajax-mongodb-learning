<?php
	include_once('inc/header.html');
?>
<section>
<?php
	require "inc/db.php";
	class login
	{
		public function user($username,$password,$location)
		{
			$query = "SELECT * FROM registration WHERE name = '".$username."' AND password = '".$password."'";
			$res = mysql_query($query);
			$rec = mysql_num_rows($res);
			if($rec == 1)
			{
				session_start();
				echo $_SESSION['name'] = $username;
				header("location:".$location."");
			}
			else
			{
				echo "Invalid user";
			}
		}
	}
	if(isset($_POST['Name']) && isset($_POST['Password']))
	{
		$login = new login();
		$login->user($_POST['Name'], $_POST['Password'],"update_profile.php");
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

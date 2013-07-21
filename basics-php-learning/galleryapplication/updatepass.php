<<<<<<< HEAD
<?php
include_once('inc/header.html');
?>
<section>
<?php
	session_start();
	require "inc/db.php";
	if(isset($_POST['submit']))
	{
		$name=$_SESSION['name'];
		$pass=$_POST['pass1'];
		if(!empty($name) && !empty($pass))
		{
			$query="SELECT '".$pass."' from registration where name='".$name."'";
			$res=mysql_query($query);
			$count=mysql_num_rows($res);
			if($count==1)
			{
				$newpass=$_POST['pass2'];
				if($pass!=$newpass)
				{
					if(($_POST['pass2'])==($_POST['pass3']))
					{
						$query2="UPDATE registration SET password='".md5($newpass)."' where name='".$name."'";
						mysql_query($query2);
						$count2=mysql_affected_rows();
						if($count2==1)
						{
							$time = "SELECT time FROM registration WHERE name='".$name."'";
							$res3=mysql_query($time);
							$rec=mysql_fetch_object($res3);	
							echo $rec->time."<br>";
							echo '<br>Successfully Password Updated'.'<br>';
						}
						else
						{
							echo 'Their is an error in updating password, Please Contact Support';
						}
					}
					else
					{
						echo 'Password Mismatch';
					}
				}
				else
				{
					echo 'The Current Password matches with the New Password';
				}
			}
			else
			{
				echo 'Invalid Username and Password';
			}
		}
		else
		{
			echo 'Please fill the required fields';
		}
	}
	if(isset($_POST['back']))
	{
			header('Location:session.php');
	}	
?>
<script type="text/javascript" src=""></script>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Change Password</legend>
<form method="post" name="form1" action="">
	<p style="color:#fff;">Name (Username) : <?php echo $_SESSION['name'];?></p>
	<p>Current Password : <input type="password" name="pass1" value=""/></p>
	<p>New Password : <input type="password" name="pass2" value=""/></p>
	<p>Confirm Password : <input type="password" name="pass3" value=""/></p>
	<p><input type="submit" name="submit" value="Update"/><input type="submit" name="back" value="Back"/></p>
</form>
</fieldset>
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
	require "inc/db.php";
	if(isset($_POST['submit']))
	{
		$name=$_SESSION['name'];
		$pass=$_POST['pass1'];
		if(!empty($name) && !empty($pass))
		{
			$query="SELECT '".$pass."' from registration where name='".$name."'";
			$res=mysql_query($query);
			$count=mysql_num_rows($res);
			if($count==1)
			{
				$newpass=$_POST['pass2'];
				if($pass!=$newpass)
				{
					if(($_POST['pass2'])==($_POST['pass3']))
					{
						$query2="UPDATE registration SET password='".md5($newpass)."' where name='".$name."'";
						mysql_query($query2);
						$count2=mysql_affected_rows();
						if($count2==1)
						{
							$time = "SELECT time FROM registration WHERE name='".$name."'";
							$res3=mysql_query($time);
							$rec=mysql_fetch_object($res3);	
							echo $rec->time."<br>";
							echo '<br>Successfully Password Updated'.'<br>';
						}
						else
						{
							echo 'Their is an error in updating password, Please Contact Support';
						}
					}
					else
					{
						echo 'Password Mismatch';
					}
				}
				else
				{
					echo 'The Current Password matches with the New Password';
				}
			}
			else
			{
				echo 'Invalid Username and Password';
			}
		}
		else
		{
			echo 'Please fill the required fields';
		}
	}
	if(isset($_POST['back']))
	{
			header('Location:session.php');
	}	
?>
<script type="text/javascript" src=""></script>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Change Password</legend>
<form method="post" name="form1" action="">
	<p style="color:#fff;">Name (Username) : <?php echo $_SESSION['name'];?></p>
	<p>Current Password : <input type="password" name="pass1" value=""/></p>
	<p>New Password : <input type="password" name="pass2" value=""/></p>
	<p>Confirm Password : <input type="password" name="pass3" value=""/></p>
	<p><input type="submit" name="submit" value="Update"/><input type="submit" name="back" value="Back"/></p>
</form>
</fieldset>
</section>
<?php
include_once('inc/footer.html');
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
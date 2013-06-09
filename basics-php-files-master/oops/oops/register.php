<?php
	include_once('inc/header.html');
	include_once('inc/upload.php');
	include_once('inc/insert.php')
?>
<?php
	class registration
	{
		protected $name;
		protected $mobile;
		public function name($user)
		{	
			$this->name = $user;
			if(!empty($user))
			{
				if(preg_match("/^[a-z][a-z\s]{2,}$/i",$user))
				{
					return $user;
				}
				else
				{
					echo 'Name is Invalid';
				}
			}
			else
			{
				echo 'Username is Mandatory';
			}
		}
		public function mobile($no)
		{
			$this->mobile = $no;
			if(!empty($no))
			{
				if(preg_match("/^[6-9][0-9]{9}$/",$no))
				{
					return $no;
				}
				else
				{
					return "Mobile no is invalid";
				}
			}								
		}
		public function password($pass1,$pass2)
		{
			if((strlen($pass1)>=6) && (strlen($pass2)>=6))
			{
				if($pass1 == $pass2)
				{
					return "Password is valid";
				}
				else
				{
					return "Password Mismatch";
				}
			}
			else
			{
				return "Password in invalid";
			}
		}
	}
	if(isset($_POST['submit']))
	{	
		$register = new registration;
		$uploadfile = new upload;
		$a=$_POST['name'];
		$b=$_POST['mobile'];
		$c=$_POST['password'];
		echo $register->name($_POST['name']);
		echo $register->mobile($_POST['mobile']);
		echo $register->password($_POST['password'],$_POST['cpassword']);
		$uploadfile->testtype("upload/");
		$table = "registration";
		$columns = "name, mobile, password, image";
		$vals ="'".$a."',".$b.",'".$c."','".$_FILES['file']['name']."'";
		$query = $form->insertquery($table,$columns,$vals);
		mysql_query($query);
		header("location:user_login.php");
	}
?>
<script type="text/javascript" src="js/valid.js"></script>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Form Registration</legend>
<form name='Registrationform' method="post" action="" enctype="multipart/form-data" onsubmit="javascript: return validateForm()">
<p>Name:&nbsp;<input id="a" type='text' name='name'/><br></p>
<p>Mobile no:&nbsp;<input id="b"type='text' name='mobile' /><br></p>
<p>Password:&nbsp;<input id="c" type='password' name='password'/><br></p>
<p>Confirm Password:&nbsp;<input id="d" type='password' name='cpassword'/><br></p>
<p>Choose Picture:&nbsp;<input id="file" type="file" name="file"/><br></p>
<p><input type='submit' style="margin-right:80px;" name='submit' value='Register'/></p>
</form>
</fieldset>
</section>
<?php
	include_once('inc/footer.html');
?>
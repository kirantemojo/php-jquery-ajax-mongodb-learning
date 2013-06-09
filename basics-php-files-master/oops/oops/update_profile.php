<?php
	include_once('inc/header.html');
?>
<?php
	require "inc/db.php";
	require "inc/upload.php";
	class update
	{
		public function setimage($file,$table,$name)
		{
			if(!empty($file) && !empty($table) && !empty($name))
			{
				$que = "UPDATE ".$table." SET image='".$file."' WHERE name='".$name."'";
				if(mysql_query($que))
				{
					return "Success";
				}
			}
			//else
			//{
				//return "Parameters are invalid";
			//}
		}
		public function setPassword($spass,$cpass,$opass,$name,$table)
		{
			if(!empty($spass) === !empty($cpass))
			{
				if($query = mysql_query("SELECT '".$opass."' FROM ".$table." WHERE name='".$name."'"))
				{
					$res = mysql_num_rows($query);
					if($res == 1)
					{
						$query2 = mysql_query("UPDATE ".$table." SET password='".$cpass."' WHERE name='".$name."'");
						if(mysql_affected_rows() == 1)
						{
							return "Successful";
						}
					}
					else
					{
						return "Unsuccessful";
					}
				}
				else
				{
					return "Query Not Processed";
				}
			}
		}
	}
	session_start();
	$name = $_SESSION['name'];
	if($name!='')
	{
		$imgquery= "SELECT image FROM registration where name='".$name."'";
		$resimg=mysql_query($imgquery);
		$pathimg=mysql_fetch_object($resimg);
		$imgprofile=$pathimg->image;
	
		if(isset($_POST['submit']))
		{
			$up =  new update;
			$uplo = new upload;
			$uplo->testtype("upload/");
			echo $up->setImage($_FILES['file']['name'],"registration",$name);
			echo $up->setPassword($_POST['pass2'],$_POST['pass3'],$_POST['pass1'],$name,"registration");
			$imgprofile = $_FILES['file']['name'];
		}
		if(isset($_POST['app']))
		{
			header("location:gallery.php");
		}
	}
?>
<div id="img" style="width:150px; height:120px; background-color:#000; color:white; text-align:center; margin:5px;">
<img src="upload/<?php echo $imgprofile ?>" width="150" height="120"/>
</div>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Update Profile</legend>
<form action="" enctype="multipart/form-data" method="post">
<p style="color:white">Name:&nbsp;<?php echo $name; ?></p>
<p>Current Password : <input type="password" name="pass1" value=""/></p>
<p>New Password : <input type="password" name="pass2" value=""/></p>
<p>Confirm Password : <input type="password" name="pass3" value=""/></p>
<p>Change Profile Picture : <input type="file" name="file" value=""/></p>
<p><input type="submit" name="submit" value="Update"/><input type="submit" name="app" value="Gallery Application"/></p>
</form> 
</fieldset>
</section>
<?php
	include_once('inc/footer.html');
?>

<<<<<<< HEAD
<?php
include_once('inc/header.html');
?>
<section>
<?php
	session_start();
	require 'inc/db.php';
	$name = $_SESSION['name'];
	if($name!='')
	{
		$imgquery= "SELECT image FROM registration where name='".$name."'";
		$resimg=mysql_query($imgquery);
		$pathimg=mysql_fetch_object($resimg);
		$imgprofile=$pathimg->image;
	}
	if(isset($_POST['submit']))
	{
		$mob=$_POST['mobile'];
		$fil=$_FILES['file']['name'];
		if( $mob!='')
		{
			$query='UPDATE registration SET mobile="'.$mob.'" WHERE name="'.$name.'"';
			$res=mysql_query($query);
			$count=mysql_affected_rows();
			if($count==1)
			{
				echo 'Successfully Updated';
			}
			else
			{
				echo 'Similar Mobile No. is been updated';
			}
		}
		if(( $fil=='') ||($fil==$imgprofile))
		{
		}
		else if($fil!=$imgprofile)
		{
			include 'inc/imageupload.php';
			$query2="UPDATE registration SET image='".$fil."' WHERE name='".$name."'";
			$res2=mysql_query($query2);
			$count = mysql_affected_rows();
			if($count==1)
			{
				echo '&nbsp;Successfully Processed';
			}
			else
			{
				echo '<br>Denied';
			}
			$imgprofile=$fil;
		}
	}
	if(isset($_POST['back']))
	{
			header('Location:inc/session.php');
	}
?>
<div id="img" style="width:150px; height:120px; background-color:#000; color:white; text-align:center; margin:5px;">
<img src="upload/<?php echo $imgprofile ?>" width="150" height="120"/>
</div>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Update Profile</legend>
<form action="" enctype="multipart/form-data" method="post">
<p style="color:white">Name:&nbsp;<?php echo $name; ?></p>
<p>New Mobile No.: <input type="tel" name="mobile"/></p>
<p>Change Profile Picture : <input type="file" name="file" value=""/></p>
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
	require 'inc/db.php';
	$name = $_SESSION['name'];
	if($name!='')
	{
		$imgquery= "SELECT image FROM registration where name='".$name."'";
		$resimg=mysql_query($imgquery);
		$pathimg=mysql_fetch_object($resimg);
		$imgprofile=$pathimg->image;
	}
	if(isset($_POST['submit']))
	{
		$mob=$_POST['mobile'];
		$fil=$_FILES['file']['name'];
		if( $mob!='')
		{
			$query='UPDATE registration SET mobile="'.$mob.'" WHERE name="'.$name.'"';
			$res=mysql_query($query);
			$count=mysql_affected_rows();
			if($count==1)
			{
				echo 'Successfully Updated';
			}
			else
			{
				echo 'Similar Mobile No. is been updated';
			}
		}
		if(( $fil=='') ||($fil==$imgprofile))
		{
		}
		else if($fil!=$imgprofile)
		{
			include 'inc/imageupload.php';
			$query2="UPDATE registration SET image='".$fil."' WHERE name='".$name."'";
			$res2=mysql_query($query2);
			$count = mysql_affected_rows();
			if($count==1)
			{
				echo '&nbsp;Successfully Processed';
			}
			else
			{
				echo '<br>Denied';
			}
			$imgprofile=$fil;
		}
	}
	if(isset($_POST['back']))
	{
			header('Location:inc/session.php');
	}
?>
<div id="img" style="width:150px; height:120px; background-color:#000; color:white; text-align:center; margin:5px;">
<img src="upload/<?php echo $imgprofile ?>" width="150" height="120"/>
</div>
<fieldset style="background-color:#ff6600;">
<legend style="background-color:#fff;">Update Profile</legend>
<form action="" enctype="multipart/form-data" method="post">
<p style="color:white">Name:&nbsp;<?php echo $name; ?></p>
<p>New Mobile No.: <input type="tel" name="mobile"/></p>
<p>Change Profile Picture : <input type="file" name="file" value=""/></p>
<p><input type="submit" name="submit" value="Update"/><input type="submit" name="back" value="Back"/></p>
</form> 
</fieldset>
</section>
<?php
include_once('inc/footer.html');
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
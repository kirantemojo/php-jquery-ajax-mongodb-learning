<<<<<<< HEAD
<?php
	$allowedExts = array("jpg", "jpeg", "gif", "png");
	$abc=explode(".", $_FILES["file"]["name"]);
	$extension = end($abc);
	if ((($_FILES["file"]["type"] == "image/gif")
	|| ($_FILES["file"]["type"] == "image/jpeg")
	|| ($_FILES["file"]["type"] == "image/png")
	|| ($_FILES["file"]["type"] == "image/pjpeg"))
	&& ($_FILES["file"]["size"] < 20000)
	&& (in_array($extension,$allowedExts)))
	{
		if($_FILES["file"]["error"]>0) 	
		{
			echo "Return Code: ". $_FILES["file"]["error"]."<br>";
		}
		else
		{
			echo "Upload:".$_FILES["file"]["name"]."<br>";
			echo "Type:".$_FILES["file"]["type"]."<br>";
			echo "Size:".($_FILES["file"]["size"]/1024)."kB<br>";
			echo "Temp file:" . $_FILES["file"]["tmp_name"]."<br>";
			if(file_exists("images/".$_FILES["file"]["name"]))
			{
				echo $_FILES["file"]["name"]."already exists.";
			}
			else
			{
				move_uploaded_file($_FILES["file"]["tmp_name"],"images/".$_FILES["file"]["name"]);
				echo "Stored in:"."images/". $_FILES["file"]["name"];
			}
			
		}
	}
	else
	{
		echo 'Required Prohibitions admitted for not to be taken';
	}
=======
<?php
	$allowedExts = array("jpg", "jpeg", "gif", "png");
	$abc=explode(".", $_FILES["file"]["name"]);
	$extension = end($abc);
	if ((($_FILES["file"]["type"] == "image/gif")
	|| ($_FILES["file"]["type"] == "image/jpeg")
	|| ($_FILES["file"]["type"] == "image/png")
	|| ($_FILES["file"]["type"] == "image/pjpeg"))
	&& ($_FILES["file"]["size"] < 20000)
	&& (in_array($extension,$allowedExts)))
	{
		if($_FILES["file"]["error"]>0) 	
		{
			echo "Return Code: ". $_FILES["file"]["error"]."<br>";
		}
		else
		{
			echo "Upload:".$_FILES["file"]["name"]."<br>";
			echo "Type:".$_FILES["file"]["type"]."<br>";
			echo "Size:".($_FILES["file"]["size"]/1024)."kB<br>";
			echo "Temp file:" . $_FILES["file"]["tmp_name"]."<br>";
			if(file_exists("images/".$_FILES["file"]["name"]))
			{
				echo $_FILES["file"]["name"]."already exists.";
			}
			else
			{
				move_uploaded_file($_FILES["file"]["tmp_name"],"images/".$_FILES["file"]["name"]);
				echo "Stored in:"."images/". $_FILES["file"]["name"];
			}
			
		}
	}
	else
	{
		echo 'Required Prohibitions admitted for not to be taken';
	}
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
<?php
	class upload
	{
		private $path; 
		function testtype($paths)
		{
			$this->path = $paths;
			$allowedfiles = array('jpeg','jpg','png','gif');
			$exp = explode(".",$_FILES['file']['name']);
			$ext = end($exp);
			if(in_array($ext,$allowedfiles))
			{
				if(($_FILES['file']['type'] == "image/jpeg") || ($_FILES['file']['type'] == "image/pjpeg" ) || ($_FILES['file']['type'] == "image/png") || ($_FILES['file']['type'] == "image/gif"))
				{
					if($_FILES['file']['size'] > 2000)
					{
						if(file_exists($paths.$_FILES['file']['name']))
						{
							echo $_FILES['file']['name']." already Exists";
						}
						else
						{
							move_uploaded_file($_FILES['file']['tmp_name'],$paths.$_FILES['file']['name']);
							echo "Stored in ".$paths.$_FILES['file']['name'];
						}
					}
					else
					{
						echo 'file size exceeded more than 20kb';
					}
				}
			}
		}
	}
	/*if(isset($_POST['submit']))
	{
		$uploadfile = new upload;
		$uploadfile->testtype("upload/");
	}*/
?>
<!--<form action="" method="post" enctype="multipart/form-data">
	<p><input type="file" name="file"></p>
	<p><input type="submit" name="submit"></p>
</form>-->
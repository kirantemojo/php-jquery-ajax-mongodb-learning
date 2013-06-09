<?php
//error_reporting(0);
include_once('inc/header.html');
require 'inc/db.php';
if(isset($_POST['add']))
{	
	if(!empty($_POST['name'])&&!empty($_FILES['file']['name']))
	{
		$a=$_POST['name'];
		$b=$_FILES['file']['name'];
		include 'inc/imageupload2.php';
		$query="INSERT INTO catalogue(Category,image) VALUES('".$a."','".$b."')";
		if(mysql_query($query))
		{
			header('location:gallery.php');
		}
	}
	else
	{
		echo 'Please fill the fields completely';
	}
}
if(isset($_POST['back']))
{
	header('location:gallery.php');
}
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<h5>Add Category</h5>
	<div class="img"><img src="images/book.png"/></div>
	<form name="form" method="POST" action="addcat.php" enctype="multipart/form-data">
		<p>Category Name : <input type="text" name="name"/><br></p>
		<p>Category Image : <input type="file" name="file"/><br></p>
		<p><input type="submit" name="add" value="ADD">
		<input type="submit" name="back" value="Back"></p>
	</form>
</article>
</section>
<?php
include_once('inc/footer.html');
?>
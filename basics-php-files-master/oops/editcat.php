<?php
error_reporting(0);
include_once('inc/header.html');
require 'inc/db.php';
if(isset($_GET['id']) && isset($_GET['ids']))
{
	$id=$_GET['id'];
	$ids=$_GET['ids'];
}
if(isset($_POST['add']))
{
	$name = $_POST['name'];
	$hid = $_POST['hid'];
	$img2 = $_FILES['file']['name'];
	include 'inc/imageupload2.php';
	if(($name!="")&&($img2!=''))
	{
		$query = "UPDATE catalogue SET Category = '".$name."',image = '".$img2."' WHERE id=".$hid."";
		if(mysql_query($query))
		{
			header('location:gallery.php');
		}
	}
	else
	{
		echo "Name Can't be empty";
	}
}
if(isset($_POST['submit']))
{
	header('location:gallery.php');
}
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<h5>Edit Category</h5>
	<div class="img"><img src="images/book.png"/></div>
	<form name="form" action="" method="POST" enctype="multipart/form-data">
		<input type="hidden" name="hid" value="<?php echo $id; ?>">
		<p>Category Name : <input type="text" name="name" value="<?php echo $ids; ?>"/><br></p>
		<p>Category Image : <input type="file" name="file"/><br></p>
		<p><input class="form" type="submit" name="add" value="Update">
		<input class="form" type="submit" name="submit" value="Back"></p>
	</form>
</article>
</section>
<?php
include_once('inc/footer.html');
?>
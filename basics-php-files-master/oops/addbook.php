<?php
error_reporting(0);
include_once('inc/header.html');
require 'inc/db.php';
if(isset($_POST['submit']))
{
	header('location:gallery.php');
}
if(isset($_POST['add']))
{
	if((!empty($_POST['name']))&&(!empty($_FILES['file']['name'])))
	{
		$a=$_POST['name'];
		$b=$_FILES['file']['name'];
		$hidden=$_POST['hidden'];
		include 'inc/imageupload2.php';
		$query="INSERT INTO list(name,image,pid) VALUES('".$a."','".$b."','".$hidden."')";
		if(mysql_query($query))
		{
			header('location:subgallery.php?id='.$hidden.'');
		}
	}
	else
	{
		echo 'Please fill the forms compltely';
	}
}
if(isset($_POST['submit']))
{
	$hidden=$_POST['hidden'];
	header('location:subgallery.php?id='.$hidden.'');
}
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<h5>Add Book</h5>
	<div class="img"><img src="images/book.png"/></div>
	<form name="form" method="post" action="" enctype="multipart/form-data">
		<p><input type="hidden" name="hidden" value="<?php echo $ids=$_GET['id']; ?>"></p>
		<p>Book Name : <input type="text" name="name"/><br></p>
		<p>Book Image : <input type="file" name="file"/><br></p>
		<p><input class="form" type="submit" name="add" value="ADD">
		<input class="form" type="submit" name="submit" value="Back"></p>
	</form>
</article>
</section>
<?php
include_once('inc/footer.html');
?>
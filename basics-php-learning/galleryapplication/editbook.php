<<<<<<< HEAD
<?php
error_reporting(0);
include_once('inc/header.html');
require 'inc/db.php';
if(isset($_GET['id']) && isset($_GET['ids']))
{
	$id=$_GET['id'];
	$ids=$_GET['ids'];
	$ls=$_GET['ls'];
}
if(isset($_POST['add']))
{
	$name=$_POST['name'];
	$hid=$_POST['hidden'];
	$hid2=$_POST['hidden2'];
	$img=$_FILES['file']['name'];
	if($img!='')
	{
		include 'inc/imageupload2.php';
	}
	echo $query = "UPDATE list SET name='".$name."',image='".$img."' WHERE lid=".$hid2." AND pid=".$hid."";
	if(mysql_query($query))
	{
		header('location:subgallery.php?id='.$hid.'');
	}
}
if(isset($_POST['submit']))
{
	$hid=$_POST['hidden'];
	header('location:subgallery.php?id='.$hid.'');
}
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<h5>Edit Book</h5>
	<div class="img"><img src="images/book.png"/></div>
	<form name="form" action="editbook.php" method="POST" enctype="multipart/form-data">
		<input type="hidden" name="hidden" value="<?php echo $id;  ?>"/>
		<input type="hidden" name="hidden2" value="<?php echo $ls;  ?>"/>
		<p>Book Name : <input type="text" name="name" value="<?php echo $ids; ?>"/><br></p>
		<p>Book Image : <input type="file" name="file"/><br></p>
		<p><input class="form" type="submit" name="add" value="Update">
		<input class="form" type="submit" name="submit" value="Back"></p>
	</form>
</article>
</section>
<?php
include_once('inc/footer.html');
=======
<?php
error_reporting(0);
include_once('inc/header.html');
require 'inc/db.php';
if(isset($_GET['id']) && isset($_GET['ids']))
{
	$id=$_GET['id'];
	$ids=$_GET['ids'];
	$ls=$_GET['ls'];
}
if(isset($_POST['add']))
{
	$name=$_POST['name'];
	$hid=$_POST['hidden'];
	$hid2=$_POST['hidden2'];
	$img=$_FILES['file']['name'];
	if($img!='')
	{
		include 'inc/imageupload2.php';
	}
	echo $query = "UPDATE list SET name='".$name."',image='".$img."' WHERE lid=".$hid2." AND pid=".$hid."";
	if(mysql_query($query))
	{
		header('location:subgallery.php?id='.$hid.'');
	}
}
if(isset($_POST['submit']))
{
	$hid=$_POST['hidden'];
	header('location:subgallery.php?id='.$hid.'');
}
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<h5>Edit Book</h5>
	<div class="img"><img src="images/book.png"/></div>
	<form name="form" action="editbook.php" method="POST" enctype="multipart/form-data">
		<input type="hidden" name="hidden" value="<?php echo $id;  ?>"/>
		<input type="hidden" name="hidden2" value="<?php echo $ls;  ?>"/>
		<p>Book Name : <input type="text" name="name" value="<?php echo $ids; ?>"/><br></p>
		<p>Book Image : <input type="file" name="file"/><br></p>
		<p><input class="form" type="submit" name="add" value="Update">
		<input class="form" type="submit" name="submit" value="Back"></p>
	</form>
</article>
</section>
<?php
include_once('inc/footer.html');
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
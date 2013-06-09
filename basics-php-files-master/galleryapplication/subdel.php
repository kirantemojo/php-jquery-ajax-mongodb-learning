<<<<<<< HEAD
<?php
require 'inc/db.php';
$id = $_GET['id'];
$ids = $_GET['ids'];
$del = "DELETE FROM list WHERE lid='".$ids."';";

if(mysql_query($del))
{
	header("location:subgallery.php?id=".$id."&ack=Deletion Completed");
}
else
{
	header("location:subgallery.php?id=".$id."&ack=Do You want to delete all the Inner Content also");
}
=======
<?php
require 'inc/db.php';
$id = $_GET['id'];
$ids = $_GET['ids'];
$del = "DELETE FROM list WHERE lid='".$ids."';";

if(mysql_query($del))
{
	header("location:subgallery.php?id=".$id."&ack=Deletion Completed");
}
else
{
	header("location:subgallery.php?id=".$id."&ack=Do You want to delete all the Inner Content also");
}
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
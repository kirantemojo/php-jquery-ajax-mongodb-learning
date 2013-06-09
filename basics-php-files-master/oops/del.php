<?php
require 'inc/db.php';
$ids = $_GET['ids'];
$del = "DELETE FROM list WHERE pid='".$ids."';";
$del2= "DELETE FROM catalogue WHERE id='".$ids."';";
if((mysql_query($del) && mysql_query($del2)) || (mysql_query($del2)))
{
	header("location:gallery.php?ack = Deletion Completed ");
}
else
{
	header("location:gallery.php?ack = Do You want to delete all the Inner Content also");
}
?>
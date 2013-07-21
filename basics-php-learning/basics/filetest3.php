<<<<<<< HEAD
<?php
$filename = "file.txt.txt";
$file = fopen($filename,'a');
if($file == false)
{
	echo 'file exists with an error';
	exit();
}
echo fwrite($file, " hi wassup..?");
fclose($file);
=======
<?php
$filename = "file.txt.txt";
$file = fopen($filename,'a');
if($file == false)
{
	echo 'file exists with an error';
	exit();
}
echo fwrite($file, " hi wassup..?");
fclose($file);
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
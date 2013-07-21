<<<<<<< HEAD
<html>
<head>
<title>Reading a file using PHP</title>
</head>
<body>
<?php
$filename = "file.txt.txt";
$file = fopen($filename, 'r');
if($file == false)
{
	echo 'Error in opeing file';
	exit();
}
$filesize = filesize($filename);
$filetext = fread($file,$filesize);
fclose($file);
echo "filesize : ".$filesize;
echo '<pre>'.$filetext.'</pre>';
?>
</body>
=======
<html>
<head>
<title>Reading a file using PHP</title>
</head>
<body>
<?php
$filename = "file.txt.txt";
$file = fopen($filename, 'r');
if($file == false)
{
	echo 'Error in opeing file';
	exit();
}
$filesize = filesize($filename);
$filetext = fread($file,$filesize);
fclose($file);
echo "filesize : ".$filesize;
echo '<pre>'.$filetext.'</pre>';
?>
</body>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</html>
<<<<<<< HEAD
<?php
$filename = "file.txt.txt";
$file = fopen($filename, "w");
if($file == false)
{
	echo ("Error in opening file");
	exit();
}
fwrite($file, "This is something which is very awkward");
fclose($file);
?>
<html>
<head>
<title>Writing a file</title>
</head>
<body>

<?php
if(file_exists($filename))
{
	$filesize = filesize($filename);
	$msg = "file created with the name".$filename;
	$msg .= "containing ".$filesize." bytes";
	echo ($msg);
}
else
{
	echo ("The".$filename." doesn't exist");
}
?>
</body>
=======
<?php
$filename = "file.txt.txt";
$file = fopen($filename, "w");
if($file == false)
{
	echo ("Error in opening file");
	exit();
}
fwrite($file, "This is something which is very awkward");
fclose($file);
?>
<html>
<head>
<title>Writing a file</title>
</head>
<body>

<?php
if(file_exists($filename))
{
	$filesize = filesize($filename);
	$msg = "file created with the name".$filename;
	$msg .= "containing ".$filesize." bytes";
	echo ($msg);
}
else
{
	echo ("The".$filename." doesn't exist");
}
?>
</body>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</html>
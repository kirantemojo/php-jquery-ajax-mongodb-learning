<<<<<<< HEAD
<?php
interface det
{
	function name();
	function mobile();
}

class Impld implements det
{
	function name()
	{
		return "kiran";
	}
	function mobile()
	{
		return "8297807370";
	}
}
$im = new Impld();
echo $im::name();
echo $im::mobile();
=======
<?php
interface det
{
	function name();
	function mobile();
}

class Impld implements det
{
	function name()
	{
		return "kiran";
	}
	function mobile()
	{
		return "8297807370";
	}
}
$im = new Impld();
echo $im::name();
echo $im::mobile();
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
?>
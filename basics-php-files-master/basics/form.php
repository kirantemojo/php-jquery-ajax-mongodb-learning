<<<<<<< HEAD
<?php
if(isset($_GET['sel']))
{
	print($_GET['sel']);
}
if(isset($_GET['gender']))
{
	$selected_radio = $_GET['gender'];
	if($selected_radio == 'male')
	{	
		echo "Checked Male";
	}
	else
	{
	    echo "Checked Female";
	}
}
if(isset($_GET['debit1']))
{
	echo $_GET['debit1'];
}
if(isset($_GET['debit2']))
{
	echo $_GET['debit2'];
}
?>
<form name="form" action="" method="GET" formvalidate>
<label for="name">Name:</label><input type="text" name="name" pattern="[\w]{1,}">
<label for="mobile">Mobile No:</label><input type="number" name="mobile" pattern="[\d]{1,}">
<input type="radio" value="male" name="gender"><label for="gender">Male</label>
<input type="radio" value="female" name="gender"><label for="gender">Female</label>
<input type="checkbox" name="debit1"><label for="debit1">Credit</label>
<input type="checkbox" name="debit2"><label for="debit2">Debit</label>
<select name="sel">
<option name="Kiran">Kiran</option>
<option name="Madhu">Madhu</option>
<option name="Prshanth">Prshantrh</option>
<option name="Sanjay">Sanjay</option>
</select>
<input type="submit" name="submit">
=======
<?php
if(isset($_GET['sel']))
{
	print($_GET['sel']);
}
if(isset($_GET['gender']))
{
	$selected_radio = $_GET['gender'];
	if($selected_radio == 'male')
	{	
		echo "Checked Male";
	}
	else
	{
	    echo "Checked Female";
	}
}
if(isset($_GET['debit1']))
{
	echo $_GET['debit1'];
}
if(isset($_GET['debit2']))
{
	echo $_GET['debit2'];
}
?>
<form name="form" action="" method="GET" formvalidate>
<label for="name">Name:</label><input type="text" name="name" pattern="[\w]{1,}">
<label for="mobile">Mobile No:</label><input type="number" name="mobile" pattern="[\d]{1,}">
<input type="radio" value="male" name="gender"><label for="gender">Male</label>
<input type="radio" value="female" name="gender"><label for="gender">Female</label>
<input type="checkbox" name="debit1"><label for="debit1">Credit</label>
<input type="checkbox" name="debit2"><label for="debit2">Debit</label>
<select name="sel">
<option name="Kiran">Kiran</option>
<option name="Madhu">Madhu</option>
<option name="Prshanth">Prshantrh</option>
<option name="Sanjay">Sanjay</option>
</select>
<input type="submit" name="submit">
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd
</form>
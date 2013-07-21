<<<<<<< HEAD
<?php
include_once('inc/header.html');
require 'inc/db.php';
$query = "SELECT * FROM catalogue";
$res=mysql_query($query);
if(!$res)
{
	echo 'Could not Successfully return from database';
}
if(mysql_num_rows($res)==0)
{
	echo 'Result set is empty';
}
?>
<?php 
if(isset($_GET['ack']))
	{ 
		$ack = $_GET['ack'];
		echo $ack; 	
	}
if(isset($_REQUEST['submit']))
	{
		header('location:session.php');
	}	
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<table border="1" cellspacing="0" cellpadding="5">
			<thead>
				<tr><td colspan="6" style="text-align:right">
				<a href="addcat.php"> ADD CATEGORY</a>
				</td></tr>
				<tr>
					<td>ID</td>
					<td>Image</td>
					<td>Category</td>
					<td colspan="2">Options</td>
				</tr>
			</thead>
			<tbody>
			<?php while($row = mysql_fetch_assoc($res))
				{
					//echo $row['image'];
					$del = "del.php?id=".$row['Category']."&ids=".$row['id'];
					$view = "subgallery.php?id=".$row['id'];
				?>
				<tr>
					<td><?php echo $row['id']; ?></td>
					<td><img src="images/<?php echo $row['image']; ?>" width="48" height="48"/></td>
					<td><a href="<?php echo $view; ?>"><?php echo $row['Category']; ?></a></td>
			<td><a href="editcat.php?id=<?php echo $row['id']; ?>&ids=<?php echo $row['Category']; ?>">EDIT</a></td>
					<td><a onclick="conf('<?php echo $del ?>');">DELETE</a></td>
				</tr>
				<?php }?>
			</tbody>
	</table>
	<form name="form" action="">
		<input class="form" type="submit" name="submit" value="Back">
	</form>
</article>
</section>
<script>
function conf(ref)
{
	if(confirm('Do You Want to Delete the Inner Contents also'))
	{
		location.href=ref;
	}
}
</script>
<?php
include_once('inc/footer.html');
?>
=======
<?php
include_once('inc/header.html');
require 'inc/db.php';
$query = "SELECT * FROM catalogue";
$res=mysql_query($query);
if(!$res)
{
	echo 'Could not Successfully return from database';
}
if(mysql_num_rows($res)==0)
{
	echo 'Result set is empty';
}
?>
<?php 
if(isset($_GET['ack']))
	{ 
		$ack = $_GET['ack'];
		echo $ack; 	
	}
if(isset($_REQUEST['submit']))
	{
		header('location:session.php');
	}	
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<table border="1" cellspacing="0" cellpadding="5">
			<thead>
				<tr><td colspan="6" style="text-align:right">
				<a href="addcat.php"> ADD CATEGORY</a>
				</td></tr>
				<tr>
					<td>ID</td>
					<td>Image</td>
					<td>Category</td>
					<td colspan="2">Options</td>
				</tr>
			</thead>
			<tbody>
			<?php while($row = mysql_fetch_assoc($res))
				{
					//echo $row['image'];
					$del = "del.php?id=".$row['Category']."&ids=".$row['id'];
					$view = "subgallery.php?id=".$row['id'];
				?>
				<tr>
					<td><?php echo $row['id']; ?></td>
					<td><img src="images/<?php echo $row['image']; ?>" width="48" height="48"/></td>
					<td><a href="<?php echo $view; ?>"><?php echo $row['Category']; ?></a></td>
			<td><a href="editcat.php?id=<?php echo $row['id']; ?>&ids=<?php echo $row['Category']; ?>">EDIT</a></td>
					<td><a onclick="conf('<?php echo $del ?>');">DELETE</a></td>
				</tr>
				<?php }?>
			</tbody>
	</table>
	<form name="form" action="">
		<input class="form" type="submit" name="submit" value="Back">
	</form>
</article>
</section>
<script>
function conf(ref)
{
	if(confirm('Do You Want to Delete the Inner Contents also'))
	{
		location.href=ref;
	}
}
</script>
<?php
include_once('inc/footer.html');
?>
>>>>>>> 0498a510dd3669b37c19f161fdfda8c6fac004bd

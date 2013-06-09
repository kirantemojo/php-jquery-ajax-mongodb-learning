<?php
include_once('inc/header.html');
require 'inc/db.php';
if(isset($_GET['id']))
$qid=$_GET['id'];
$query = 'SELECT lid,image,name,pid FROM list WHERE pid='.$qid;
$res = mysql_query($query);
if(!$res)
{
	echo 'Could not Succesfully return from database';
}
if(mysql_num_rows($res)==0)
{
	//echo 'Result set is empty';
}
	//echo $rows['pid'];
?>
<?php 
if(isset($_GET['ack']))
	{ 
		$ack = $_GET['ack'];
		//echo $ack; 	
	}
if(isset($_GET['submit']))
	{
		header('location:user_login.php');
	}
?>
<section>
<h3>Categorical Catalogue Information</h3>
<article>
	<table border="1" cellspacing="0" cellpadding="5">
			<thead>
				<tr><td colspan="6" style="text-align:right"><a href="addbook.php?id=<?php echo $qid; ?>">ADD BOOKS</a></td></tr>
				<tr>
					<td>ID</td>
					<td>Book-Icons</td>
					<td>Books</td>
					<td colspan="2">Options</td>
				</tr>
			</thead>
			<tbody>
			<?php
			while($rows=mysql_fetch_assoc($res))
			{
				$del = "subdel.php?id=".$qid."&ids=".$rows['lid'];
			?>
				<tr>
					<td><?php echo $rows['lid']; ?></td>
					<td><img src="images/<?php echo $rows['image']; ?>" width="48" height="48"/></td>
					<td><?php echo $rows['name']; ?></td>
					<td><a href="editbook.php?id=<?php echo $rows['pid']; ?>&ids=<?php echo $rows['name']; ?>&ls=<?php echo $rows['lid']; ?>" >EDIT</a></td>
					<td><a onclick="conf('<?php echo $del; ?>');">DELETE</a></td>
				</tr>
			<?php }  ?>

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
	if(confirm('Do You Want to Delete it'))
	{
		location.href=ref;
	}
}
</script>
<?php
include_once('inc/footer.html');
?>
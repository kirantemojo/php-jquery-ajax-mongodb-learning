<?php
include_once('inc/header.html');
?>
<section>
<article>
<?php
	$link="register.php";
	$link2="user_login.php";
	echo 'Welcome to Web Synergies <br><br>';
	echo '<a href="'.$link.'">Register</a><br><br>';
	echo '<a href="'.$link2.'">Sign In</a><br>';
?>
</article>
</section>
<?php
include_once('inc/footer.html');
?>
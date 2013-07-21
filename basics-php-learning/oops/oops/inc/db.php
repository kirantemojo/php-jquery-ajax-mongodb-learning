<?php
	class database
	{
		public $localhost,$username,$password,$datbname;
		public function database($host,$user,$pass,$datname)
		{
			if(isset($host) && isset($user) && isset($pass))
			{
				$this->localhost = $host;								
				$this->username = $user;
				$this->password = $pass;
				$this->datbname = $datname;
				if(@mysql_connect($host,$user,$pass))
				{
					if(@mysql_select_db($datname))
					{
						echo 'Successfully Connected';
					}				
				}
				else
				{
					echo 'Connection Failed';
				}
			}
		} 
	}
	$ini_path = parse_ini_file("config.ini",true);
	$data = new database($ini_path['first-section']['localuser'],$ini_path['first-section']['rootuser'],$ini_path['first-section']['passuser'],$ini_path['first-section']['datuname']);
?>
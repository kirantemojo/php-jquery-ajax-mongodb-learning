<?php
	class insert
	{
		protected $table;
		protected $columns;
		protected $values;
	}
	class formquery extends insert
	{
		public function insertquery($tab,$col,$val)
		{
			$this->table=$tab;
			$this->columns=$col;
			$this->values=$val;
			return $query = "INSERT INTO ".$tab."(".$col.") VALUES(".$val.")";
		}
	}
	require 'db.php';
	$insertreg = new insert();
	$form = new formquery();
	//$table = "registration";
	//$columns = "name, mobile, password, image";
	//$vals = "'Pavan',8297807370,'123456','alice.jpeg'";
	//$query = $form->insertquery($table,$columns,$vals);
	//mysql_query($query);
?>
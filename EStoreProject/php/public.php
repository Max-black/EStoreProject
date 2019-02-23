<?php
  header("content-type:text/html;charset=utf-8");
  $db = mysql_connect("localhost","root","root");
  mysql_select_db("storeindex",$db);
  mysql_query("set.name utf8");
?>
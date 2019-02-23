<?php
   include "public.php";
   $sql = "SELECT * FROM  `conimg` LIMIT 0 , 30";
   $res = mysql_query($sql);
   $arr = mysql_fetch_array($res);
   echo $arr;
?>
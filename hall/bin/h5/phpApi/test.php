<?php
//array_values
//array_keys
//in_array
//array_key_exists
//array_flip
//array_reverse

$lamp = array(1,2,3,"dd"=>4,5);

$arr = array_values($lamp);
list($a,$b,$c,$d) = $arr;

echo  $d;

?>
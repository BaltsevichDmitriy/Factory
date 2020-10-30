<?php
      //подлючаемся к базе//
      $link=mysqli_connect("localhost", "root", "Work", "my");
      if (mysqli_connect_errno()) {printf("неудалось подключиться:%\n",mysqli_connect_error());exit;}
      //else{printf ("удалось подключиться:%s\n",mysqli_get_host_info($link));}
   
      $sql = mysqli_query($link, "SELECT `Data` FROM `jsondata` ORDER BY id DESC LIMIT 1");    
      while($row = mysqli_fetch_array($sql)) {
       $array[]=$row['Data'];       
      }
      echo $array[0];

      mysqli_close($link);
?>
<?php
      //подлючаемся к базе//
      $JSONData =  $_POST['DataCan'];
        $link=mysqli_connect("localhost", "root", "Work", "my");
        if (mysqli_connect_errno()) {printf("неудалось подключиться:%\n",mysqli_connect_error());exit;}
        //else{printf ("удалось подключиться:%s\n",mysqli_get_host_info($link));}
       
       $coment="empty";        
        //Вставляем данные, подставляя их в запрос
      $sql = mysqli_query($link, "INSERT INTO `jsondata` (`ID`, `Date`, `Data`, `Coment`) VALUES (NULL, CURRENT_DATE(), '$JSONData', '$coment')");
      
      //Если вставка прошла успешно
      //if ($sql) {
      // echo '<p>Данные успешно добавлены в таблицу.</p>';
      //} else {
      //  echo '<p id="blink">Произошла ошибка: ' . mysqli_error($link) . '</p>';
      // }

        mysqli_close($link);
?>
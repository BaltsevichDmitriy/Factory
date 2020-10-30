<?php
     ///загрузка зничений температуры////
     $serverName = "172.22.42.80"; 
     $connectionInfo = array("UID" => "web", "PWD" => "web", "Database"=>"web");
   
     $conn = sqlsrv_connect( $serverName, $connectionInfo);
     
     if( $conn ){
          ///запрос для получения температуры с БД
          $sql =  sqlsrv_query ($conn, "SELECT top(1) [Value] FROM UDPR_Temp Order by timestamp DESC");
               
          while( $row = sqlsrv_fetch_array(  $sql, SQLSRV_FETCH_ASSOC) ) {
                $temp = round($row['Value'] * 10) / 10;
               // echo $temp;
          }
           ////формирование запроса для получения штампа времени изменения файла №0
         $sql =  sqlsrv_query ($conn, "SELECT  [LastModified] FROM Images WHERE ID=0");
         while( $row = sqlsrv_fetch_array(  $sql, SQLSRV_FETCH_ASSOC) ){
               $date =$row ['LastModified']->format('Y-m-d H:i:s'); //преобразование даты в нормальную
               $dateUnix=strtotime ($date);//преобразование даты в Unix-date
               $dateUnixSmall=substr ($dateUnix,0,-2); // удаляем двазнака секунд                       
          }
          //echo $dateUnixSmall.'<br>';
          //echo $date.'<br>';////////////////////////
          $ii=0;
          function GetQueryFile(){// функция копирования файлов с базы данных              
               ///запрос для получения новыйх файлов из базы
                $sql =  sqlsrv_query ( $GLOBALS ['conn'], "SELECT  [Image], [LastModified] FROM Images");
                $i=1;  
                while( $row = sqlsrv_fetch_array(  $sql, SQLSRV_FETCH_ASSOC) ) {
                
                     $date =$row ['LastModified']->format('Y-m-d H:i:s'); //преобразование даты в нормальную
                     $dateUnix=strtotime ($date);//преобразование даты в Unix-date
                     $dateUnixSmall=substr ($dateUnix,0,-2); // удаляем двазнака секунд                     
                     if ($GLOBALS ['dateUnixSmall']==$dateUnixSmall){
                         $data = $row['Image'];
                         $path = 'image/'.$i.'.png';//путь куда сохранять файл
                         
                         $fp = fopen($path,'w+'); //открываем каталог с параметром презаписи W+
                         fwrite($fp,$data);//пишим файл
                         fclose($fp);//закрываем файл
                         $GLOBALS['ii']++;
                    } 
                    $i++;                                                                           
                }
           } 
          //////////////////////////////////
          $path ='C:/Server/data/htdocs/1/image'; // путь к папке источнику 
          $ii=0;         
               $dir = opendir ("$path"); // открываем директорию                
                    if (file_exists($path.'/1.png')){//проверка существования файла                         
                         if (substr (filemtime($path.'/1.png'),0,-2)<  $dateUnixSmall){//проверка штампа времени файла
                              GetQueryFile();  
                             // $ii=1;                                                       
                         }
                    } else{ GetQueryFile(); }                           
                    

          sqlsrv_close( $conn);
     }
          $path ='C:/Server/data/htdocs/1/image'; // путь к папке источнику 
          $LengthArray=0;
          $dir = opendir ("$path"); // открываем директорию
          while (false !== ($file = readdir($dir))) {  //цикл опроса всех файлов в дирректории                  
               if (strpos($file, '.png',1) ) {//проверка расширения файла
                    if (file_exists($path.'/'.$file)){//проверка наличия файла
                         
                         if (substr (filemtime($path.'/1.png'),0,-2)== substr (filemtime($path.'/'.$file),0,-2)){
                              $LengthArray++;
                         }                            
                    }    
               }
          }             


      $answer= [ //json передается на старницу
      "value_1"=> $temp,
      "value_2"=>$ii,
      "value_3"=>$LengthArray];
      echo json_encode($answer);                   
                    
?>
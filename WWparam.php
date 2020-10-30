<?php      
     ///загрузка зничений ////
     $serverName = "172.22.42.80"; 
     $connectionInfo = array("UID" => "wwUser", "PWD" => "wwUser", "Database"=>"Runtime");
   
     $conn = sqlsrv_connect( $serverName, $connectionInfo);     
     
          ///запрос для получение данных           
        function sql($sqlconn, $param){  
            $sql =  sqlsrv_query ($sqlconn, "SELECT v_AnalogLive.TagName, [Value] 
            FROM v_AnalogLive WHERE v_AnalogLive.TagName IN ( '$param')");
            while( $row = sqlsrv_fetch_array($sql, SQLSRV_FETCH_ASSOC) ) {                
              $value[]=$row['Value']; //print_r($value); 
            } 
            return $value[0];
        } 
         
          $A1 = 'A1#3_Caster.LineSpeed_Actual';
          $A1speed = sql ($conn, $A1);
          $A2 = 'A2#3_Caster.LineSpeed_Actual';
          $A2speed = sql ($conn, $A2);
          $A3 = 'A3#3_Caster.LineSpeed_Actual';  $A3speed = sql ($conn, $A3);
          $B1 = 'B1_Millstand.MillSpeed';        $B1speed = sql ($conn, $B1);
          $C1 = 'C1_Millstand.s_LineSpeed';      $C1speed = sql ($conn, $C1);
          $C2 = 'C2_Millstand.s_LineSpeed';      $C2speed = sql ($conn, $C2);
          $C31 = 'C31_Millstand.s_LineSpeed';    $C31speed = sql ($conn, $C31);
          $C32 = 'C32_Mill_Stand.LineSpeedAct';  $C32speed = sql ($conn, $C32);
          $B21 = 'B2#1_Furnace.AirTemp_SP';   $B21Temp = sql ($conn,  $B21);
          $B22 = 'B2#2_Furnace.AirTemp_SP';   $B22Temp = sql ($conn,  $B22);
          $B23 = 'B2#3_Furnace.AirTemp_SP';   $B23Temp = sql ($conn,  $B23);
          $C51 = 'C5#01_Furnace.AirTemp_SP';   $C51Temp = sql ($conn,  $C51);
          $C52 = 'C5#02_Furnace.AirTemp_SP';   $C52Temp = sql ($conn,  $C52);
          $C53 = 'C5#03_Furnace.AirTemp_SP';   $C53Temp = sql ($conn,  $C53);
          $C54 = 'C5#04_Furnace.AirTemp_SP';   $C54Temp = sql ($conn,  $C54);
          $C55 = 'C5#05_Furnace.AirTemp_SP';   $C55Temp = sql ($conn,  $C55);
          $C56 = 'C5#06_Furnace.AirTemp_SP';   $C56Temp = sql ($conn,  $C56);
          $C57 = 'C5#07_Furnace.AirTemp_SP';   $C57Temp = sql ($conn,  $C57);
          $C58 = 'C5#08_Furnace.AirTemp_SP';   $C58Temp = sql ($conn,  $C58);
          $C59 = 'C5#09_Furnace.AirTemp_SP';   $C59Temp = sql ($conn,  $C59);
          $C510 = 'C5#10_Furnace.AirTemp_SP';   $C510Temp = sql ($conn,  $C510);
          $C511 = 'C5#11_Furnace.AirTemp_SP';   $C511Temp = sql ($conn,  $C511);
          $C512 = 'C5#12_Furnace.AirTemp_SP';   $C512Temp = sql ($conn,  $C512);
          $C513 = 'C5#13_Furnace.AirTemp_SP';   $C513Temp = sql ($conn,  $C513);
          $C514 = 'C5#14_Furnace.AirTemp_SP';   $C514Temp = sql ($conn,  $C514);
          $C515 = 'C5#15_Furnace.AirTemp_SP';   $C515Temp = sql ($conn,  $C515);
          $C516 = 'C5#16_Furnace.AirTemp_SP';   $C516Temp = sql ($conn,  $C516);
          $C517 = 'C5#17_Furnace.AirTemp_SP';   $C517Temp = sql ($conn,  $C517);
          $C518 = 'C5#18_Furnace.AirTemp_SP';   $C518Temp = sql ($conn,  $C518);
          $C519 = 'C5#19_Furnace.AirTemp_SP';   $C519Temp = sql ($conn,  $C519);
          $C520 = 'C5#20_Furnace.AirTemp_SP';   $C520Temp = sql ($conn,  $C520);
          $C521 = 'C5#21_Furnace.AirTemp_SP';   $C521Temp = sql ($conn,  $C521);
          $C522 = 'C5#22_Furnace.AirTemp_SP';   $C522Temp = sql ($conn,  $C522);
          $F10Run=1; 
          $C41 = 'C4#1_G02_Main.LinearSpeed';   $C41speed = sql ($conn, $C41);
          $C42 = 'C4#2_G02_Main.LinearSpeed';   $C42speed = sql ($conn, $C42);
          $C43 = 'C4#2_G02_Main.LinearSpeed';   $C43speed = sql ($conn, $C43);
          $D11 = 'D1#1_Common.Speed';           $D11speed = sql ($conn, $D11);
          $D12 = 'D1#2_Common.Speed';           $D12speed = sql ($conn, $D12); $C44speed = $D11speed;
          $E7speed = sql ($conn, 'E7_Common.CurrentSpeed');  $E8speed = sql ($conn, 'E8_Common.CurrentSpeed');
          $E91speed = sql ($conn, 'E9#1_Common.CurrentSpeed'); $E92speed = sql ($conn, 'E9#2_Common.CurrentSpeed');
          $E101speed = sql ($conn, 'E10#1_Common.CurrentSpeed'); $E102speed = sql ($conn, 'E10#2_Common.CurrentSpeed');
          $E111speed = sql ($conn, 'E11#1_Common.CurrentSpeed'); $E112speed = sql ($conn, 'E11#2_Common.CurrentSpeed');
          $E121speed = sql ($conn, 'E12#1_Common.CurrentSpeed'); $E122speed = sql ($conn, 'E12#2_Common.CurrentSpeed');
          $E1speed = sql ($conn, 'E1_GlueDrive.LineSpeed'); $E2speed = sql ($conn, 'E2_Common.Speed');
          $E3speed = sql ($conn, 'E3_Common.Speed'); $E41speed = sql ($conn, 'E4#1_Common.Speed');
          $E42speed = sql ($conn, 'E4#2_Common.Speed'); $E5speed = sql ($conn, 'E5_Common.Speed');
          $E6speed = sql ($conn, 'E6_Common.Speed');



          sqlsrv_close( $conn);
          
          $answer=[///массив для передачи 
            "A1Speed"=>($A1speed/100), "A2Speed"=>($A2speed/100), "A3Speed"=>($A3speed/100),
            "B1Speed"=>$B1speed, "C1Speed"=>$C1speed, "C2Speed"=>$C2speed, "C31Speed"=>$C31speed, "C32Speed"=>$C32speed,
            "B21Temp"=>$B21Temp,"B22Temp"=>$B22Temp,"B23Temp"=>$B23Temp,
            "C51Temp"=>$C51Temp, "C52Temp"=>$C52Temp, "C53Temp"=>$C53Temp, "C54Temp"=>$C54Temp, "C55Temp"=>$C55Temp, "C56Temp"=>$C56Temp, 
            "C57Temp"=>$C57Temp, "C58Temp"=>$C58Temp, "C59Temp"=>$C59Temp, "C510Temp"=>$C510Temp, "C511Temp"=>$C511Temp, 
            "C512Temp"=>$C512Temp, "C513Temp"=>$C513Temp, "C514Temp"=>$C514Temp, "C515Temp"=>$C515Temp, "C516Temp"=>$C516Temp, 
            "C517Temp"=>$C517Temp, "C518Temp"=>$C518Temp, "C519Temp"=>$C519Temp, "C520Temp"=>$C520Temp, "C521Temp"=>$C521Temp, "C522Temp"=>$C522Temp,
            "F10Run"=>$F10Run,"C41Speed"=>$C41speed, "C42Speed"=>$C42speed, "C43Speed"=>$C43speed,"C44Speed"=>$C44speed,
            "D11Speed"=>$D11speed, "D12Speed"=>$D12speed,
            "DOCSpeed"=>$E111speed,"E7Speed"=>$E7speed, "E8Speed"=>$E8speed,"E91Speed"=>$E91speed,"E92Speed"=>$E92speed,
            "E101Speed"=>$E101speed,"E102Speed"=>$E102speed, "E111Speed"=>$E111speed,"E112Speed"=>$E112speed,
            "E121Speed"=>$E121speed,"E122Speed"=>$E122speed,
            "E1Speed"=>$E1speed,"E2Speed"=>$E2speed, "E3Speed"=>$E3speed, "E41Speed"=>$E41speed, "E42Speed"=>$E42speed,
            "E5Speed"=>$E5speed, "E6Speed"=>$E6speed 
          ];       
         echo json_encode ($answer);
          
?>
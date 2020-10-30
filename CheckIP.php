<?php    

    function PingIP($ip) {//фу-я проверки компа в сети по IP
            exec('ping '.$ip.' -n 1 -w 100',$output, $status);//команда ping как в cmd
       // if ($status==0){//признак online
         //   echo "Online ";            
            
       // }else echo "Offline!";
        return $status;
    };
    $ipA1='172.22.42.80';
    echo PingIP($ipA1)."<br>";

    $arrNamePC =["ASUTP-JT01", "ASUTP-JT02", "ASUTP-JT03", "ASUTP-JT04", "ASUTP-JT05", "ASUTP-JT06", 
                 "ASUTP-JT07", "ASUTP-JT08", "ASUTP-JT09", "ASUTP-JT10", "ASUTP-JT11","OPU-A", "OPU-B1", "OPU-C1", 
                 "OPU-C2", "OPU-C31", "OPU-C32", "OPU-C41", "OPU-C42", "OPU-C43", "OPU-C44", "OPU-D11", "OPU-D12"];

                 foreach ($arrNamePC as $element){
                    echo $element.PingIP($element)."<br>";
                 }
   echo count($arrNamePC); 
?>
    
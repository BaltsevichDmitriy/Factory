var Main, SwitchASUTP,
F31,F32,F33,F34,SwitchF34,SwitchUSHV,//шлифовка
A1, A2, A3, SwitchPLO,//литейка
B1, SwitchB1,C1, SwitchC1,C2,SwitchC2,C31, SwitchC31,C32,SwitchC32,//Прокат
B21,B22,B23,SwitchB2,//Промежуточный отжиг
C51,C52,C53,C54,SwitchC54,C55,C56,C57,C58,C59,C510,C511,C512,//Чистовой отжиг старые печи
C513,C514,C515,C516,C517,C518,C519,C520,C521,C522,//Чистовой отжиг новые печи
F10,C41,C42,C43,C44,SwitchOR1,D11,D12,//Участок резки №1
DOC,E7,E8,E91,E92,E101,E102,E111,E112,E121,E122,SwitchOR2,///Участок резки №2
E1,SwitchE1,E2,SwitchE2,E3,E41,E42,E5,E6,SwitchE6,SwitchRepro,//Участок конвертинга
UDPR,SwitchUDPR,Anten1,Anten2,SwitchTara,F18,G6,//УДПР, регаз
JT01,JT02,JT03,JT04,JT05,JT06,JT07,JT08,JT09,JT10,JT11;//Станции по службам.*/

var arrElem =[
  A1, A2, A3, //литейка
  B1, C1, C2, C31, C32,//Прокат
  B21,B22,B23,//Промежуточный отжиг
  C51,C52,C53,C54,C55,C56,C57,C58,C59,C510,C511,C512,//Чистовой отжиг старые печи
  C513,C514,C515,C516,C517,C518,C519,C520,C521,C522,//Чистовой отжиг новые печи
  F10,C41,C42,C43,C44,D11,D12, Main,//Участок резки №1
  DOC,E7,E8,E91,E92,E101,E102,E111,E112,E121,E122,///Участок резки №2
  E1, E2, E3,E41,E42,E5,E6, //Участок конвертинга
  UDPR, F18,G6,//УДПР, регаз
  Main, SwitchASUTP, SwitchC32, SwitchC31, SwitchC2, SwitchC1, SwitchB1,
  SwitchPLO, SwitchOR2, SwitchB2, SwitchOR1,
  SwitchUDPR, SwitchE1, SwitchE2, SwitchE6,SwitchRepro,
  Anten1,Anten2,SwitchTara,
  JT01,JT02,JT03,JT04,JT05,JT06,JT07,JT08,JT09,JT10,JT11, //Станции по службам.*/];

  ];

  var Time, Date, Temp;
  var arrText=[Time, Date, Temp]
//console.log(arrElem.length);


function LoadJSON (){    //распаковка JSON холста с присвоением новых ID
 //var a=0;   
  scheme.loadFromJSON(JsonDataReceive, function () {}, function (o, object) {         
    if (object.id=='Rect'+i) { 
      arrElem[i] = object;
      //console.log(object);
      console.log(i);     
      i++;      
    }
    if (object.id=='Text'+CountText){
      arrText[CountText]=object;
     // console.log(CountText);
      CountText++;
    }
  });        
}

//////////////////////////////////////////////
var JsonDataReceive;
function ReceiveJSON(){///получение JSON из базы данных 
            i=0;
            CountText=0;
          $.ajax({
            method: "POST", // метод HTTP, используемый для запроса
            url: "ReceiveJSON.php", // строка, содержащая URL адрес, на который отправляется запрос
           // dataType: 'json', // тип ожидаемых данных в ответе
            data:{ // данные, которые будут отправлены на сервер
             // DataCan: JsonData
            },
            success: [function ( msg ) { // функции обратного вызова, которые вызываются если AJAX запрос выполнится успешно (если несколько функций, то необходимо помещать их в массив)
              JsonDataReceive=msg;//.split();              
            //setTimeout ("LoadJSON ()", 2000);
            LoadJSON ();
           // console.log( JsonDataReceive);
            //console.log( i); // 
              },
            function () { // вызов второй функции из массива
              //console.log( "next function" );
            }],
            statusCode: {
              200: function () { // выполнить функцию если код ответа HTTP 200
                console.log( "Ok" );
              }   
            }
          })         
}
          ReceiveJSON()

////////////Отрисовка значений даты, времени и температуры/////////////////////////
        function TimeSet(){
          arrText[0].setText(DateCanvas);  
          arrText[2].setText(TempCanvas);  
          arrText[1].setText(TimeCanvas);
          scheme.renderAll(); 
          setTimeout("TimeSet()", 1000);
        }
        setTimeout("TimeSet()", 3000);
////////////////////////Загрузка данных с WW и оживление мнемосхемы///////////////////
    
  function LoadParam(){///запрос на webserver
      $.ajax({
          method: "POST", // метод HTTP, используемый для запроса
          url: "WWparam.php", // строка, содержащая URL адрес, на который отправляется запрос
            success: [function ( data ) { // функции обратного вызова, которые вызываются если AJAX запрос выполнится успешно (если несколько функций, то необходимо помещать их в массив)
              var arr = JSON.parse(data); //parsing JSON

              var ColorOn="rgb( 13, 189, 4)";
              var ColorOff ="rgb( 255, 255, 0)";
              //значения  из JSON              
             if (arr.A1Speed > 0.2){arrElem[0].setFill(ColorOn);} else {arrElem[0].setFill(ColorOff);}                           
             if (arr.A2Speed > 0.2){arrElem[1].setFill(ColorOn);} else {arrElem[1].setFill(ColorOff);}                      
             if (arr.A3Speed > 0.2){arrElem[2].setFill(ColorOn);} else {arrElem[2].setFill(ColorOff);}                
             if (arr.B1Speed > 20){arrElem[3].setFill(ColorOn);} else {arrElem[3].setFill(ColorOff);}                          
             if (arr.C1Speed > 20){arrElem[4].setFill(ColorOn);} else {arrElem[4].setFill(ColorOff);}                           
             if (arr.C2Speed > 20){arrElem[5].setFill(ColorOn);} else {arrElem[5].setFill(ColorOff);}                          
             if (arr.C31Speed > 20){arrElem[6].setFill(ColorOn);} else {arrElem[6].setFill(ColorOff);}                      
             if (arr.C32Speed > 20){arrElem[7].setFill(ColorOn);} else {arrElem[7].setFill(ColorOff);} 
             if (arr.B21Temp > 20){arrElem[8].setFill(ColorOn);} else {arrElem[8].setFill(ColorOff);} 
             if (arr.B22Temp > 20){arrElem[9].setFill(ColorOn);} else {arrElem[9].setFill(ColorOff);} 
             if (arr.B23Temp > 20){arrElem[10].setFill(ColorOn);} else {arrElem[10].setFill(ColorOff);} 
             if (arr.C51Temp > 20){arrElem[11].setFill(ColorOn);} else {arrElem[11].setFill(ColorOff);} 
             if (arr.C52Temp > 20){arrElem[12].setFill(ColorOn);} else {arrElem[12].setFill(ColorOff);} 
             if (arr.C53Temp > 20){arrElem[13].setFill(ColorOn);} else {arrElem[13].setFill(ColorOff);} 
             if (arr.C54Temp > 20){arrElem[14].setFill(ColorOn);} else {arrElem[14].setFill(ColorOff);} 
             if (arr.C55Temp > 20){arrElem[15].setFill(ColorOn);} else {arrElem[15].setFill(ColorOff);} 
             if (arr.C56Temp > 20){arrElem[16].setFill(ColorOn);} else {arrElem[16].setFill(ColorOff);} 
             if (arr.C57Temp > 20){arrElem[17].setFill(ColorOn);} else {arrElem[17].setFill(ColorOff);} 
             if (arr.C58Temp > 20){arrElem[18].setFill(ColorOn);} else {arrElem[18].setFill(ColorOff);} 
             if (arr.C59Temp > 20){arrElem[19].setFill(ColorOn);} else {arrElem[19].setFill(ColorOff);} 
             if (arr.C510Temp > 20){arrElem[20].setFill(ColorOn);} else {arrElem[20].setFill(ColorOff);} 
             if (arr.C511Temp > 20){arrElem[21].setFill(ColorOn);} else {arrElem[21].setFill(ColorOff);} 
             if (arr.C512Temp > 20){arrElem[22].setFill(ColorOn);} else {arrElem[22].setFill(ColorOff);} 
             if (arr.C513Temp > 23){arrElem[23].setFill(ColorOn);} else {arrElem[23].setFill(ColorOff);} 
             if (arr.C514Temp > 20){arrElem[24].setFill(ColorOn);} else {arrElem[24].setFill(ColorOff);} 
             if (arr.C515Temp > 20){arrElem[25].setFill(ColorOn);} else {arrElem[25].setFill(ColorOff);} 
             if (arr.C516Temp > 20){arrElem[26].setFill(ColorOn);} else {arrElem[26].setFill(ColorOff);} 
             if (arr.C517Temp > 20){arrElem[27].setFill(ColorOn);} else {arrElem[27].setFill(ColorOff);} 
             if (arr.C518Temp > 20){arrElem[28].setFill(ColorOn);} else {arrElem[28].setFill(ColorOff);} 
             if (arr.C519Temp > 20){arrElem[29].setFill(ColorOn);} else {arrElem[29].setFill(ColorOff);}
             if (arr.C520Temp > 20){arrElem[30].setFill(ColorOn);} else {arrElem[30].setFill(ColorOff);} 
             if (arr.C521Temp > 20){arrElem[31].setFill(ColorOn);} else {arrElem[31].setFill(ColorOff);} 
             if (arr.C522Temp > 20){arrElem[32].setFill(ColorOn);} else {arrElem[32].setFill(ColorOff);} 
             if (arr.F10Run == 1){arrElem[33].setFill(ColorOn);} else {arrElem[33].setFill(ColorOff);}  
             if (arr.C41Speed > 3){arrElem[34].setFill(ColorOn);} else {arrElem[34].setFill(ColorOff);}                           
             if (arr.C42Speed > 3){arrElem[35].setFill(ColorOn);} else {arrElem[35].setFill(ColorOff);}                          
             if (arr.C43Speed > 3){arrElem[36].setFill(ColorOn);} else {arrElem[36].setFill(ColorOff);} 
             if (arr.C44Speed > 3){arrElem[37].setFill(ColorOn);} else {arrElem[37].setFill(ColorOff);}              
             if (arr.D11Speed > 3){arrElem[38].setFill(ColorOn);} else {arrElem[38].setFill(ColorOff);} 
             if (arr.D12Speed > 3){arrElem[39].setFill(ColorOn);} else {arrElem[39].setFill(ColorOff);} 
             if (arr.DOCSpeed > 3){arrElem[41].setFill(ColorOn);} else {arrElem[41].setFill(ColorOff);} 
             if (arr.E7Speed > 3){arrElem[42].setFill(ColorOn);} else {arrElem[42].setFill(ColorOff);} 
             if (arr.E8Speed > 3){arrElem[43].setFill(ColorOn);} else {arrElem[43].setFill(ColorOff);} 
             if (arr.E91Speed > 3){arrElem[44].setFill(ColorOn);} else {arrElem[44].setFill(ColorOff);} 
             if (arr.E92Speed > 3){arrElem[45].setFill(ColorOn);} else {arrElem[45].setFill(ColorOff);} 
             if (arr.E101Speed > 3){arrElem[46].setFill(ColorOn);} else {arrElem[46].setFill(ColorOff);} 
             if (arr.E102Speed > 3){arrElem[47].setFill(ColorOn);} else {arrElem[47].setFill(ColorOff);} 
             if (arr.E111Speed > 3){arrElem[48].setFill(ColorOn);} else {arrElem[48].setFill(ColorOff);} 
             if (arr.E112Speed > 3){arrElem[49].setFill(ColorOn);} else {arrElem[49].setFill(ColorOff);}
             if (arr.E121Speed > 3){arrElem[50].setFill(ColorOn);} else {arrElem[50].setFill(ColorOff);}
             if (arr.E122Speed > 3){arrElem[51].setFill(ColorOn);} else {arrElem[51].setFill(ColorOff);}  
             if (arr.E1Speed > 15){arrElem[52].setFill(ColorOn);} else {arrElem[52].setFill(ColorOff);}
             if (arr.E2Speed > 15){arrElem[53].setFill(ColorOn);} else {arrElem[53].setFill(ColorOff);}  
             if (arr.E3Speed > 15){arrElem[54].setFill(ColorOn);} else {arrElem[54].setFill(ColorOff);} 
             if (arr.E41Speed > 15){arrElem[55].setFill(ColorOn);} else {arrElem[55].setFill(ColorOff);} 
             if (arr.E42Speed > 15){arrElem[56].setFill(ColorOn);} else {arrElem[56].setFill(ColorOff);}    
             if (arr.E5Speed > 15){arrElem[57].setFill(ColorOn);} else {arrElem[57].setFill(ColorOff);}
             if (arr.E6Speed > 15){arrElem[58].setFill(ColorOn);} else {arrElem[58].setFill(ColorOff);}  

             //scheme.renderAll(); 
            }],
            statusCode: {
            200: function () { // выполнить функцию если код ответа HTTP 200
              //console.log( "Ok" );
            }
          }
        })
        
    
    setTimeout("LoadParam()", 8000); //рекурсия-периодичность вызова 
  }
  setTimeout("LoadParam()", 3000);
    var a=0;
    var sTime;
  function synchron(){
      $.ajax({
          method: "POST", // метод HTTP, используемый для запроса
          url: "time.php", // строка, содержащая URL адрес, на который отправляется запрос
          data: { // данные, которые будут отправлены на сервер
            name: "Denis",
            city: "Erebor"
          },
          success: [function ( msg ) { // функции обратного вызова, которые вызываются если AJAX запрос выполнится успешно (если несколько функций, то необходимо помещать их в массив)
              sTime = msg;
              a= (sTime* 1000)- Date.parse(new Date()); // 
            },
          function () { // вызов второй функции из массива
            //console.log( "next function" );
          }],
          statusCode: {
            200: function () { // выполнить функцию если код ответа HTTP 200
              //console.log( "Ok" );
            }
          }
        })
        
      setTimeout("synchron()", 999000);
  } 

    var temp;
    var value2;
    window['LengthArray']=2
  function LoadTemp(){
      $.ajax({
          method: "POST", // метод HTTP, используемый для запроса
          url: "temp.php", // строка, содержащая URL адрес, на который отправляется запрос
            success: [function ( data ) { // функции обратного вызова, которые вызываются если AJAX запрос выполнится успешно (если несколько функций, то необходимо помещать их в массив)
              var arr = JSON.parse(data); //parsing JSON
              var value1 = arr.value_1;//значение 1 из JSON
              value2 = arr.value_2;//значение 2 из JSON
              window['LengthArray']=arr.value_3;//значение 3 из JSON
              //console.log (value1);
             // console.log (window['LengthArray']);
              if (value2!=0){//если картинки обновлены обновляем страницу
                window.location.href = window.location.href;
              }
              if (Number.isNaN(value1)==true){temp = Number (temp);}
              else{temp = Number (value1);}              
            }],
            statusCode: {
            200: function () { // выполнить функцию если код ответа HTTP 200
              //console.log( "Ok" );
            }
          }
        })
        temp1=5;
      setTimeout("LoadTemp()", 120000);
  }  
  var DateCanvas;
  var TimeCanvas;
  var TempCanvas;
  var temp1; 
  function clock() {
      var d =new Date(Date.parse(new Date())+a);
      var month_num = d.getMonth()
      var day = d.getDate();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
            
      month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря");
      
      if (day <= 9) day = "0" + day;
      if (hours <= 9) hours = "0" + hours;
      if (minutes <= 9) minutes = "0" + minutes;
      if (seconds <= 9) seconds = "0" + seconds;

      DateCanvas=" "+day + " " + month[month_num] + " " + d.getFullYear()+" г. " ;
      TimeCanvas=" "+hours + ":" + minutes + ":" + seconds+" ";
      TempCanvas=" "+temp+ " °С ";
    
      setTimeout("clock()", 1000);
  }
            clock();//отображение часов, температруы
            synchron();//синхронизация часов
            LoadTemp();//загрузка температуры с БД  
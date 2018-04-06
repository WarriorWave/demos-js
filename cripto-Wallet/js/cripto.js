$(function() {
	$.get("http://127.0.0.1:8000/users/", function(respuestaSolicitud){
   		alert(JSON.stringify(respuestaSolicitud));
	});

	$.ajax({	
                data:  {	
                			"id_account": "100006502837604",
					        "name": "Mou Developer",
					        "gender": "male",
					        "birthday": "2018-03-18",	        
			     	        "email": "reptilianguitar@gmail.com",
					        "attributes": {"gender":"male"}
   						 },
                url:   'http://127.0.0.1:8000/users/', //archivo que recibe la peticion
                type:  'post', //método de envio
                dataType: 'json',
                contentType: "application/json",
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                        console.log(response);
                }
        });	

	$.get('http://127.0.0.1:8000/users/24r/', function(respuestaSolicitud){
   		alert(JSON.stringify(respuestaSolicitud));
	});
})

/*
{
    "author": "http://127.0.0.1:8000/users/wwwwwwwwwwwwwwwwwwwww",
    "name": "test",
    "attributes": null,
    "active": false,
    "creation_time": "2018-2-11 10:00:00",
    "status": 5,
    "type": 5,
    "update_type": null
}
*/
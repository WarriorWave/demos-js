$(function() {
	$.get("http://127.0.0.1:8000/users/5656677787/", function(respuestaSolicitud){
   		alert(JSON.stringify(respuestaSolicitud));
	});

	$.ajax({
                data:  {
					        "id": "500011",
					        "name": "gbgbgbg",
					        "gender": 4,
					        "birthday": "2018-03-18",
					        "email": "davi@davi.com",
					        "attributes": {
					            "rfrfr": "gtgtgt"
					        },
					        "type": 1,
					        "status": 2,
					        "creation_time": "2018-03-18T00:09:24Z",
					        "update_time": "2018-03-18T00:09:27Z",
					        "active": true
    					}, //datos que se envian a traves de ajax
                url:   'http://127.0.0.1:8000/users/', //archivo que recibe la peticion
                type:  'post', //método de envio
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                        console.log(response);
                }
        });	

	$.get("http://127.0.0.1:8000/users/500011/", function(respuestaSolicitud){
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
var minutos = 4;
minutos = "0" + minutos;
var segundos = 60;
var divs = document.querySelectorAll('#parcelas div');

setInterval(function () {
    if (segundos == 0) {
        segundos = 60;
        minutos--;
        minutos = "0" + minutos;
    }
    if (minutos >= 0 ){
        segundos--;
    }
    else
    {
    minutos = "0" + 0;
    segundos = "0" + 0;
    }
var contador = [minutos, segundos].forEach(function (parcela, i) {
    divs[i].innerHTML = parcela;
});

}, 1000);

/*stock = Math.floor(Math.random() * (97 - 77 + 1)) + 77;

kit_um = 2;
kit_dois = 4;
kit_tres = 6;

$(document).ready(function() {
	$('#current').html(stock);
});

function geo_localization(){
	var getGeo = $.getJSON("http://ip-api.com/json/?fields=regionName,city&callback=?", function(data) {
      if(data.city != "") { $("#city-place").html(data.city); } else { $("#city-place").html(data.regionName); }
    });
    return getGeo;
}

function verify_stock(){
    stock_verify = $('#current').text();
    
    if ( stock_verify < 0 ) {
        $('#current').html(0);
    }
}

// Comprando o KIT 3
setTimeout(function(){
	geo_localization();
    Lobibox.notify(
        'error',
        {	
        	size: 'normal',
            width: 450,
        	title: false,
			soundPath: 'vendor/lobibox/sounds/',
			messageHeight: 100,
			icon: 'false',
            delayIndicator: true,
			position: 'bottom left',
			img: 'imgs/capsulas.png',
            msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps em São Paulo',
            delay: 5000
         }
    );
    $("#notification").html(3);
    stock = $('#current').text();
    $('#current').html(stock - kit_tres);
    verify_stock();
}, 1000 * 2);


// Comprando o KIT 3
setTimeout(function(){
   	geo_localization();
    Lobibox.notify(
        'error',
        {	
        	size: 'normal',
            width: 450,
        	title: false,
			soundPath: 'vendor/lobibox/sounds/',
			messageHeight: 100,
			icon: 'false',
            delayIndicator: true,
			position: 'bottom left',
			img: 'imgs/capsulas.png',
            msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps em <span id="city-place"></span>',
            delay: 5000
         }
    );
    $("#notification").html(3);
    stock = $('#current').text();
    $('#current').html(stock - kit_tres);
    verify_stock();
}, 1000 * 12);



// Comprando o KIT 2
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {	
        	size: 'normal',
            width: 450,
        	title: false,
			soundPath: 'vendor/lobibox/sounds/',
			messageHeight: 100,
			icon: 'false',
            delayIndicator: true,
			position: 'bottom left',
			img: 'imgs/capsulas.png',
            msg: '2 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps na Bahia',
            delay: 5000
         }
    );
    $("#notification").html(2);
    stock = $('#current').text();
    $('#current').html(stock - kit_dois * 2);
    verify_stock();
}, 1000 * 20);

// Comprando o KIT 3
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {   
            size: 'normal',
            width: 450,
            title: false,
            soundPath: 'vendor/lobibox/sounds/',
            messageHeight: 100,
            icon: 'false',
            delayIndicator: true,
            position: 'bottom left',
            img: 'imgs/capsulas.png',
            msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps em <span id="city-place"></span>',
            delay: 5000
         }
    );
    $("#notification").html(3);
    stock = $('#current').text();
    $('#current').html(stock - kit_tres);
    verify_stock();
}, 1000 * 30);

// Comprando o KIT 1
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {   
            size: 'normal',
            title: false,
            width: 450,
            soundPath: 'vendor/lobibox/sounds/',
            messageHeight: 100,
            icon: 'false',
            delayIndicator: true,
            position: 'bottom left',
            img: 'imgs/capsulas.png',
            msg: '3 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps no Distrito Federal',
            delay: 5000
         }
    );
    $("#notification").html(1);
    stock = $('#current').text();
    $('#current').html(stock - kit_um * 3);
    verify_stock();
}, 1000 * 40);

// Comprando o KIT 2
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {   
            size: 'normal',
            width: 450,
            title: false,
            soundPath: 'vendor/lobibox/sounds/',
            messageHeight: 100,
            icon: 'false',
            delayIndicator: true,
            position: 'bottom left',
            img: 'imgs/capsulas.png',
            msg: '2 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps em Minas Gerais',
            delay: 5000
         }
    );
    $("#notification").html(2);
    stock = $('#current').text();
    $('#current').html(stock - kit_dois * 2);
    verify_stock();
}, 1000 * 50);

// Comprando o KIT 2
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {   
            size: 'normal',
            width: 450,
            title: false,
            soundPath: 'vendor/lobibox/sounds/',
            messageHeight: 100,
            icon: 'false',
            delayIndicator: true,
            position: 'bottom left',
            img: 'imgs/capsulas.png',
            msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps em <span id="city-place"></span>',
            delay: 5000
         }
    );
    $("#notification").html(1);
    stock = $('#current').text();
    $('#current').html(stock - kit_dois);
    verify_stock();
}, 1000 * 60);

// Comprando o KIT 3
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {   
            size: 'normal',
            width: 450,
            title: false,
            soundPath: 'vendor/lobibox/sounds/',
            messageHeight: 100,
            icon: 'false',
            delayIndicator: true,
            position: 'bottom left',
            img: 'imgs/capsulas.png',
            msg: '3 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps em <span id="city-place"></span>',
            delay: 5000
         }
    );
    $("#notification").html(3);
    stock = $('#current').text();
    $('#current').html(stock - kit_tres * 3);
    verify_stock();
}, 1000 * 70);

// Comprando o KIT 2
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {   
            size: 'normal',
            width: 450,
            title: false,
            soundPath: 'vendor/lobibox/sounds/',
            messageHeight: 100,
            icon: 'false',
            delayIndicator: true,
            position: 'bottom left',
            img: 'imgs/capsulas.png',
            msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps no Ceará',
            delay: 5000
         }
    );
    $("#notification").html(2);
    stock = $('#current').text();
    $('#current').html(stock - kit_dois * 2);
    verify_stock();
}, 1000 * 80);

// Comprando o KIT 2
setTimeout(function(){
    geo_localization();
    Lobibox.notify(
        'error',
        {   
            size: 'normal',
            width: 450,
            title: false,
            soundPath: 'vendor/lobibox/sounds/',
            messageHeight: 100,
            icon: 'false',
            delayIndicator: true,
            position: 'bottom left',
            img: 'imgs/capsulas.png',
            msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do Plano DETOX Caps em Pernambuco',
            delay: 5000
         }
    );
    $("#notification").html(2);
    stock = $('#current').text();
    $('#current').html(stock - kit_dois);
    verify_stock();
}, 1000 * 95);*/
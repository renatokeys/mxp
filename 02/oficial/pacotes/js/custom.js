stock = Math.floor(Math.random() * (97 - 77 + 1)) + 77;

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
                msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER em São Paulo',
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
                msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER em <span id="city-place"></span>',
                delay: 5000
            }
            );
        $("#notification").html(3);
        stock = $('#current').text();
        $('#current').html(stock - kit_tres);
        verify_stock();
    }, 1000 * 13);



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
                msg: '2 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER na Bahia',
                delay: 5000
            }
            );
        $("#notification").html(2);
        stock = $('#current').text();
        $('#current').html(stock - kit_dois * 2);
        verify_stock();
    }, 1000 * 25);

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
                msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER em <span id="city-place"></span>',
                delay: 5000
            }
            );
        $("#notification").html(3);
        stock = $('#current').text();
        $('#current').html(stock - kit_tres);
        verify_stock();
    }, 1000 * 36);

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
                msg: '3 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER no Distrito Federal',
                delay: 5000
            }
            );
        $("#notification").html(1);
        stock = $('#current').text();
        $('#current').html(stock - kit_um * 3);
        verify_stock();
    }, 1000 * 47);

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
                msg: '2 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER em Minas Gerais',
                delay: 5000
            }
            );
        $("#notification").html(2);
        stock = $('#current').text();
        $('#current').html(stock - kit_dois * 2);
        verify_stock();
    }, 1000 * 59);

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
                msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER em <span id="city-place"></span>',
                delay: 5000
            }
            );
        $("#notification").html(1);
        stock = $('#current').text();
        $('#current').html(stock - kit_dois);
        verify_stock();
    }, 1000 * 66);

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
                msg: '3 pessoas acabaram de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER em <span id="city-place"></span>',
                delay: 5000
            }
            );
        $("#notification").html(3);
        stock = $('#current').text();
        $('#current').html(stock - kit_tres * 3);
        verify_stock();
    }, 1000 * 77);

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
                msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER no Ceará',
                delay: 5000
            }
            );
        $("#notification").html(2);
        stock = $('#current').text();
        $('#current').html(stock - kit_dois * 2);
        verify_stock();
    }, 1000 * 87);

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
                msg: '1 pessoa acabou de comprar o <b>Kit <span id="notification"></span></b> do MACA X POWER em Pernambuco',
                delay: 5000
            }
            );
        $("#notification").html(2);
        stock = $('#current').text();
        $('#current').html(stock - kit_dois);
        verify_stock();
    }, 1000 * 99);

/*Popup de Saída*/
bioEp.init({
    html: '<img src="imgs/intent-popup/titulo-intent.png">' + 
    '<img class="texto-intent" src="imgs/intent-popup/texto-intent.png">' +
    '<div class="bt-confirm">' +
        '<a onclick="bioEp.hidePopup();"><span class="hover-nao"><img src="imgs/intent-popup/botao-nao-intent.png"></spam></a>' +
        '<a href="10-desconto/index.html"><span class="hover-sim"><img src="imgs/intent-popup/botao-sim-intent.png"></spam></a>' +
    '</div>',
    width: 825,
    height: 400,
    css: '.texto-intent{margin-top: 30px;} #bio_ep_bg { background-color: #205E75; opacity: 1; } #bio_ep{background-color: transparent; box-shadow: unset; text-align: center;} .bt-confirm img { padding: 10px; margin: 55px 20px 0 20px; width: 30%;} #bio_ep_close { display: none !important; } }',
    fonts: ['//fonts.googleapis.com/css?family=Titillium+Web:300,400,600'],
    delay: 1,
    cookieExp: 0
});

// Back Redirect
var back_redirect_back_link = '10-desconto/index.html';

history.pushState({},"",location.href);
history.pushState({},"",location.href);

window.onpopstate = function(){
    setTimeout(function () {
        location.href = back_redirect_back_link;
    },1);
};
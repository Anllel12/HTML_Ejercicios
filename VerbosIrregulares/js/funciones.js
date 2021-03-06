var tiempoAdivinar = 0;
var verboElegido = Cookies.get('verboElegido');
var jugando = 0;
var marcador = Cookies.get('marcador');
var nivel = Cookies.get('niveles'); // recibe el valor a traves de la cookie

function comprueba() {
    if (jugando == 0) {
        jugando = 1;
        var verboLeido = $('#caja').val();
        $('#botonresultado').removeClass('btn-danger');
        $('#botonresultado').removeClass('btn-success');
        $('#botonresultado').removeClass('btn-dark');

        if (verbos[verboElegido][tiempoAdivinar] == verboLeido || verbos[verboElegido][tiempoAdivinar].split("/")[0] == verboLeido || verbos[verboElegido][tiempoAdivinar].split("/")[1] == verboLeido) {// Si es correcto el verbo escrito entra aqui
            marcador++;
            switch (marcador){// lo hago en un switch porque me es más facil resetaer los dados
                case 0:
                case 1:
                case 2:
                case 3:
                case 4: $("#marcador").append('<i class="fas fa-dice-one"></i>'); break;// añado el dado uno
                case 5: $("#marcador").html('<i class="fas fa-dice-two"></i>'); break;// elemino el dado uno y pongo el dos
                case 6:
                case 7:
                case 8:
                case 9: $("#marcador").append('<i class="fas fa-dice-two"></i>'); break;// añado el dado dos
                case 10: $("#marcador").html('<i class="fas fa-dice-three"></i>'); break;// elemino el dado dos y pongo el tres
                case 11:
                case 12:
                case 13:
                case 14: $("#marcador").append('<i class="fas fa-dice-three"></i>'); break;//añado el dado tres
                case 15: $("#marcador").html('<i class="fas fa-dice-four"></i>'); break;// elemino el dado tres y pongo el cuatro
                case 16:
                case 17:
                case 18:
                case 19: $("#marcador").append('<i class="fas fa-dice-four"></i>'); break;// añado el dado cuatro
                case 20: $("#marcador").html('<i class="fas fa-dice-five"></i>'); break;// elemino el dado cuatro y pongo el cinco
                case 21:
                case 22:
                case 23:
                case 24: $("#marcador").append('<i class="fas fa-dice-five"></i>'); break;// añado el dado cinco
                case 25: $("#marcador").html('<i class="fas fa-dice-six"></i>'); break;// elemino el dado cinco y pongo el seis
                case 26:
                case 27:
                case 28:
                case 29: $("#marcador").append('<i class="fas fa-dice-six"></i>'); break;// añado el dado seis
                default: $("#marcador").html('<i class="fas fa-star"></i>'); break;
            }
            $('#botonresultado').addClass('btn-success');
            $('#botonresultado').text("CORRECT!");
            verboElegido++
            Cookies.set('marcador', marcador)// crea y actualiza la cookie
            Cookies.set('verboElegido', verboElegido)// crea y actualiza la cookie
        } else {
            marcador = 0;// pongo el marcador a cero para no tener problemas con el switch
            $("#marcador").html('<i class="fas fa-dice-one"></i>');// reseteo el dado a uno
            $("#boton1").html('<button class="btn btn-block btn-secondary">' + verbos[verboElegido][0] + '</button>');
            $('#botonresultado').addClass('btn-danger');
            $('#botonresultado').text(verbos[verboElegido][tiempoAdivinar]);
            Cookies.set('marcador', marcador)// crea y actualiza la cookie
        }
    } else {
        $('#botonresultado').addClass('btn-dark');
        $('#botonresultado').text("COMPROBAR");
        jugando = 0;
        eligeVerbo();
    }
}

function eligeVerbo() {
    tiempoAdivinar = Math.floor(Math.random() * 3);// para que salga un tiempo vacio

    console.log(verbos[verboElegido][tiempoAdivinar]);// respuesta

    $("#castellano").html(verbos[verboElegido][3]);// en español

    if (tiempoAdivinar == 0) {
        $("#boton1").html('<input id="caja" class= "form-control">');
    } 
    else {
        $("#boton1").html('<button class="btn btn-block btn-secondary" disabled>' + verbos[verboElegido][0] + '</button>');
    }

    if (tiempoAdivinar == 1) {
        $("#boton2").html('<input id="caja" class= "form-control">');
    } 
    else {
        $("#boton2").html('<button class="btn btn-block btn-secondary" disabled>' + verbos[verboElegido][1] + '</button>');
    }

    if (tiempoAdivinar == 2) {
        $("#boton3").html('<input id="caja" class= "form-control">');
    } 
    else {
        $("#boton3").html('<button class="btn btn-block btn-secondary" disabled>' + verbos[verboElegido][2] + '</button>');
    }

    if (verboElegido > nivel-1) {// reseteo las cookies y las variable para que simule que esta empezando de nuevo
        location.href = "niveles.html"

        marcador = 0;
        Cookies.set('marcador', 0)
        verboElegido = 0;
        Cookies.set('verboElegido', 0)
    }
}

eligeVerbo();
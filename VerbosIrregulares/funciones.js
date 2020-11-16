var tiempoAdivinar = 0;
var verboElegido = 0;
var jugando = 0;
var marcador = 0;

function comprueba() {
    if (jugando == 0) {
        jugando = 1;
        var verboLeido = document.getElementById('caja').value;
        $('#botonresultado').removeClass('btn-danger');
        $('#botonresultado').removeClass('btn-success');
        $('#botonresultado').removeClass('btn-dark');

        if (verbos[verboElegido][tiempoAdivinar] == verboLeido) {// Si es correcto el verbo escrito entra aqui
            marcador++;
            $('#botonresultado').addClass('btn-success');
            $('#botonresultado').text("CORRECT!");
        } else {
            marcador--;
            $('#botonresultado').addClass('btn-danger');
            $('#botonresultado').text(verbos[verboElegido][tiempoAdivinar]);
        }
    } else {
        $('#botonresultado').addClass('btn-dark');
        $('#botonresultado').text("COMPROBAR");
        jugando = 0;
        eligeVerbo();
    }
    $('#marcador').text(marcador);
}

function eligeVerbo() {
    verboElegido = Math.floor(Math.random() * verbos.length);// Coge un verbo aleatorio
    tiempoAdivinar = Math.floor(Math.random() * 3);// Para que salga un tiempo vacio

    console.log(verbos[verboElegido][tiempoAdivinar]);// Respuesta

    $("#castellano").html(verbos[verboElegido][3]);// En español

    if (tiempoAdivinar == 0) {
        $("#boton1").html('<input id="caja" class= "form-control">');
    } else {
        $("#boton1").html('<button class="btn btn-block btn-secondary">' + verbos[verboElegido][0] + '</button>');
    }

    if (tiempoAdivinar == 1) {
        $("#boton2").html('<input id="caja" class= "form-control">');
    } else {
        $("#boton2").html('<button class="btn btn-block btn-secondary">' + verbos[verboElegido][1] + '</button>');
    }

    if (tiempoAdivinar == 2) {
        $("#boton3").html('<input id="caja" class= "form-control">');
    } else {
        $("#boton3").html('<button class="btn btn-block btn-secondary">' + verbos[verboElegido][2] + '</button>');
    }

}

eligeVerbo();
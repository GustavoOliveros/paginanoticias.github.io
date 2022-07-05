

function datos(){
    let arregloArticulos = new Array();
    let articulo1 ={
        titulo: "A diente de perro: un debut salvaje",
        descripcion: "La ópera prima de Jose Luís Estañ llega a los cines el 1 de julio",
        categoria: new Array("cine"),
        autor: "Ruben Moreno Lozano",
        foto: "img/adientedeperrocritica.jpg",
        enlace: "art_adientedeperro.html",
        fecha: new Date(2022, 5, 30)
    }
    let articulo2 ={
        titulo: "Thor: Love and Thunder ¿Qué esperar de lo nuevo de Marvel",
        descripcion: "¿Lo mejor de la fase 4 de Marvel?",
        categoria: new Array("cine"),
        autor: "Redaccion",
        foto: "img/thorloveandthunder.jpg",
        enlace: "art_thorloveandthunder.html",
        fecha: new Date(2022, 6, 1)
    }
    let articulo3 ={
        titulo: "Estrenos infantiles de julio de 2022: películas y series",
        descripcion: "Los mejores estrenos familiares en cines.",
        categoria: new Array("cine"),
        autor: "Lionel Marrero",
        foto: "img/estrenoinfantiles.jpg",
        enlace: "art_estrenosinfantiles.html",
        fecha: new Date(2022, 6, 1)
    }
    let articulo4 ={
        titulo: "Stranger things 4: Tres años de espera para volver a Hawkins",
        descripcion: "Los hermanos Matt y Ross Duffer vuelven a visitar Hawkins, casi tres años después, en Stranger Things 4.",
        categoria: new Array("television"),
        autor: "Jose Ivan Sabau Torrelo",
        foto: "img/strangerthings4.jpg",
        enlace: "art_strangerthings4.html",
        fecha: new Date(2022, 4, 26)
    }
    let articulo5 ={
        titulo: "Entrevista a Pepón Nieto",
        descripcion: "Entrevista al actor Pepón Nieto sobre 30 Monedas y el esperado regreso de la serie Los Hombres de Paco.",
        categoria: new Array("television","cine"),
        autor: "Lionel Marrero",
        foto: "img/pepon_nieto.jpg",
        enlace: "art_entrevistapeponnieto.html",
        fecha: new Date(2021, 2, 19)
    }
    let articulo6 ={
        titulo: "Love, Death & Robots VOL 3: una nueva joya de la animación para adultos",
        descripcion: "Love, Death & Robots estrena una nueva colección de historias",
        categoria: new Array("television"),
        autor: "Cristian Pestana",
        foto: "img/lovedeathrobots.jpg",
        enlace: "art_lovedeathrobots.html",
        fecha: new Date(2022, 4, 23)
    }

    arregloArticulos[arregloArticulos.length] = articulo1;
    arregloArticulos[arregloArticulos.length] = articulo2;
    arregloArticulos[arregloArticulos.length] = articulo3;
    arregloArticulos[arregloArticulos.length] = articulo4;
    arregloArticulos[arregloArticulos.length] = articulo5;
    arregloArticulos[arregloArticulos.length] = articulo6;

    return arregloArticulos;
}

/**
 * Organiza un arreglo de articulos por fecha
 * @param {array} arreglo 
 */
function organizarPorFecha(arreglo){
    arreglo.sort(function (a, b) {
        if (a.fecha.getTime() < b.fecha.getTime()) {
            return 1;
        }
        if (a.fecha.getTime() > b.fecha.getTime()) {
            return -1;
        }
        return 0;
    });
    return arreglo;
}

/**
 * Retorna un arreglo indexado con la cantidad de dias de cada mes en un año calendario
 * @param {integer} yyyy anio actual
 * @returns {array}
 */
function anioCalendario(yyyy){
    var limMeses = new Array();
    limMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if((yyyy % 4 == 0 && yyyy % 100 != 0) || (yyyy % 400 == 0 && yyyy != 0)){
        limMeses[1] = 29;
    }

    return limMeses;
}

/**
 * Muestra una fecha en modo texto
 * @param {object} fecha
 */
function mostrarFecha(fecha){
    var arregloMeses = new Array();
    arregloMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return fecha.getDate()+" "+" de "+arregloMeses[fecha.getMonth()]+" del "+fecha.getFullYear();
}

/**
 * Cuenta los dias que faltan para la fecha dada por parámetro
 * @param {object} objFecha
 * @returns {string}
 */
 function cuentaRegresiva(objFecha){
    var fechaCuentaRegresiva = objFecha;
    var fechaActual = new Date();
    fechaActual.setHours(0);
    fechaActual.setMinutes(0);
    fechaActual.setSeconds(0);
    fechaActual.setMilliseconds(0);

    var diferencia = fechaCuentaRegresiva.getTime() - fechaActual.getTime();

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    var cadena;

    if(dias > 1){
        cadena = "Faltan "+dias+" días";
    }else if(dias === 1){
        cadena = "Falta 1 día";
    }else if(dias === 0){
        cadena = "¡Es hoy!";
    }else if(dias === -1){
        cadena = "Se estrenó hace 1 día";
    }else{
        dias = dias * -1;
        cadena = "Se estrenó hace "+dias+" días.";
    }

    return cadena;
}

function sugerencias() {
    document.getElementById("sugerencias").style.display = "block";
    document.getElementById("calificacion").style.display = "none";
}

function enviarFeedback() {
    let entrada = parseFloat(document.getElementById(
        "calificacion-usuario"
    ).value);
    entrada = Math.round((entrada + Number.EPSILON) * 100) / 100;
    document.getElementById("calificacion-usuario").value = entrada;
    if (entrada != "") {
        if (entrada > 0 && entrada <= 5) {
            document.getElementById("mensaje-error").style.display =
                "none";
            document.getElementById(
                "calificacion-usuario"
            ).style.borderColor = "black";
            if (entrada >= 3) {
                document.getElementById("formulario-calificacion").submit();
            } else {
                sugerencias();
            }
        } else {
            document.getElementById("mensaje-error").style.display =
                "block";
            document.getElementById(
                "calificacion-usuario"
            ).style.borderColor = "red";
            document.getElementById("mensaje-error").innerHTML =
                "El número debe ser mayor o igual a 1 y menor o igual a 5";
        }
    } else {
        document.getElementById("mensaje-error").style.display = "block";
        document.getElementById(
            "calificacion-usuario"
        ).style.borderColor = "red";
        document.getElementById("mensaje-error").innerHTML =
            "No puede enviar una calificación vacía";
    }
}

// Busqueda
function verificarBusqueda(){
    let entrada = document.getElementById("busqueda-text").value;

    if(entrada != ""){
        document.querySelector(".busqueda-form form").submit();
    }
}

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        verificarBusqueda();
    }
});
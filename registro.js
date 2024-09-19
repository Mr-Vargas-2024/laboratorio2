

/*VALIDACION DEL FORMULARIO */

var nombre = document.getElementById('nombre');
var Email = document.getElementById('Email');
var password = document.getElementById('Password');
var Error = document.getElementById('Error');
Error.style.color= 'red';


/*AQUI REVISAMOS LA INFORMACION EN LA CONSOLA*/

function enviarFormulario() {
console.log('Enviando fomulario...');

/*AQUI ALMACENAMOS LOS MENSAJES DE ERROR AL VALIDAR EL FORMULARIO */

var mensajesError = [] ;

if(nombre.value === null || nombre.value === ''){
    mensajesError.push('INGRESA TU NOMBRE');
}


if(Email.value === null || Email.value === ''){
    mensajesError.push('INGRESA TU EMAIL');
}  


if(password.value === null || password.value === ''){
    mensajesError.push('INGRESA TU PIN');
}  



error.innerHTML= mensajesError.joing (', '); 



return false;


}

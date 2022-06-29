const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const celular = document.querySelector('#cell');
const direccion = document.querySelector('#direccion');
const localidad = document.querySelector('#localidad');
const textarea = document.querySelector('#comentario');

var comprador = [];

const cancelarCompra = document.querySelector('.boton-form-cancel');
const validarForm = document.querySelector('.boton-form-buy');

cancelarCompra.addEventListener('click',cancelar);
validarForm.addEventListener('click',comprar);

function comprar(e){
    if((nombre.value!=='')&&(apellido.value!=='')&&(celular.value!=='')&&(direccion.value!=='')&&(localidad.value!=='')){
        e.preventDefault();
        const datosComprador = {
            nombre : nombre.value,
            apellido : apellido.value,
            email : email.value,
            celular : celular.value,
            direccion : localidad.value
        }

        comprador.push(datosComprador);

        // datosUsuario.push(nombre.value);
        // datosUsuario.push(apellido.value);
        // datosUsuario.push(email.value);
        // datosUsuario.push(celular.value);
        // datosUsuario.push(direccion.value);
        // datosUsuario.push(localidad.value);
        // datosUsuario.push(textarea.value);
        $(".comprar").slideUp("fast");
        $('.alert-compra').fadeIn("slow");
        console.log(comprador);
    }else{
        alert('Faltan datos');
    }
}

function cancelar(){
    comprador = [];
    nombre.value='';
    apellido.value='';
    email.value='';
    celular.value='';
    direccion.value='';
    localidad.value='';
    textarea.value='';
    console.log(comprador);
    $(".comprar").fadeOut("slow");
}
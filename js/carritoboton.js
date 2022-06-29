const botonCarrito = document.querySelector('.boton-cart');
const tabla = document.querySelector('#carrito');

botonCarrito.addEventListener('click', ()=>{
    tabla.classList.toggle("moveCarrito")
    botonCarrito.classList.toggle("activo")
});
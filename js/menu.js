const hamburguer = document.querySelector('.boton-menu');
const menu = document.querySelector('.nav');


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
    hamburguer.classList.toggle("activo");
    if(tabla.classList.contains('moveCarrito')){
        tabla.classList.toggle("moveCarrito")
        botonCarrito.classList.toggle("activo")
    }
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer ){
        menu.classList.toggle("spread");
        hamburguer.classList.toggle("activo")
    }
})
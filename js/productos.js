// const URLJSON = "data/productos.json"


// function showProductos(){
//     $.getJSON(URLJSON, function (respuesta, estado) {
//         if(estado==="success"){
//             var misDatos = respuesta;
//             for (const dato of misDatos){
//                 $(".cards").prepend(`<div class="text-card">
//                                         <img class="img-card" src="img/${dato.img}" alt="">
//                                         <h3 class="title-card">${dato.nombre}</h3>
//                                         <div class="cajaDePrecio">
//                                             <p class="price-card">Precio:</p>
//                                             <p class="price-card-number">$${dato.precio}</p>
//                                         </div>
//                                         <button class="btn-carrito">Agregar al carrito</button>
//                                     </div>`);
//             }
//             $('.bnt-carrito').click(addCarrito);
//         }        
//     });
// }

const boton = document.querySelectorAll('.btn-carrito');

function addCarrito(e){
    const button = e.target;
    const item = button.closest('.text-card');
    const tituloProducto=item.querySelector('.title-card').textContent;
    const precioProducto=item.querySelector('.price-card-number').textContent.replace("$",'');
    const imagenProducto=item.querySelector('.img-card').src;
    
    const newItem = {
        title: tituloProducto,
        precio: precioProducto,
        img: imagenProducto,
        cantidad: 1
    }    
    addCardCarrito(newItem)
}

var productos = [
        {
        "id": 1,
        "img": "gallery4.jpg",
        "nombre": "Leche de Almendras 1L",
        "precio": 200,
        "cantidad": 1,
        "tipo": "bebida"
    },
    {
        "id": 2,
        "img": "147.jpg",
        "nombre": "Hamburguesa de Lentejas",
        "precio": 500,
        "cantidad": 1,
        "tipo": "salada"
    },
    {
        "id": 3,
        "img": "122.jpg",
        "nombre": "Lemonies",
        "precio": 500,
        "cantidad": 4,
        "tipo": "dulce"
    },
    {
        "id": 4,
        "img": "163.jpg",
        "nombre": "Pancitos Saborizados",
        "precio": 120,
        "cantidad": 6,
        "tipo": "salada"
    },
    {
        "id": 5,
        "img": "gallery.jpg",
        "nombre": "Pan lactal de mesa",
        "precio": 120,
        "cantidad": 1,
        "tipo": "salada"
    },
    {
        "id": 6,
        "img": "gallery2.jpg",
        "nombre": "Hummus",
        "precio": 200,
        "cantidad": 1,
        "tipo": "dulce"
    }
];

function showProductos(){
    for (const dato of productos){
        $(".cards").prepend(`<div class="text-card">
                                <img class="img-card" src="img/${dato.img}" alt="">
                                <h3 class="title-card">${dato.nombre}</h3>
                                <div class="cajaDePrecio">
                                    <p class="price-card">Precio:</p>
                                    <p class="price-card-number">$${dato.precio}</p>
                                </div>
                                <button class="btn-carrito">Agregar al carrito</button>
                            </div>`);
    }
    $('.bnt-carrito').click(addCarrito);
}

showProductos();

const botonFiltroTodas = document.querySelector('.todas');
const botonFiltroDulces = document.querySelector('.dulces');
const botonFiltroSaladas = document.querySelector('.saladas');
const botonFiltroBebidas = document.querySelector('.bebidas');

// botonFiltroDulces.addEventListener('click', ()=>{
//     var productosDulces = productos.filter(productos => productos.tipo == 'dulce');
//     console.log(productosDulces);
//     for(const data1 of productosDulces ){
//         $('.cards').prepend(`<div class="text-card">
//                                 <img class="img-card" src="img/${data1.img}" alt="">
//                                 <h3 class="title-card">${data1.nombre}</h3>
//                                 <div class="cajaDePrecio">
//                                     <p class="price-card">Precio:</p>
//                                     <p class="price-card-number">$${data1.precio}</p>
//                                 </div>
//                                 <button class="btn-carrito">Agregar al carrito</button>
//                             </div>`
//         );
//     }

// });

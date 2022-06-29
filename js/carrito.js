$(document).ready(()=>{


    const boton = document.querySelectorAll('.btn-carrito');
    const tbody= document.querySelector('.tbody');
    const contadorProductos= document.querySelector('.contador-productos-cart');
    const botonDelete = document.querySelector('.icon-delete');
    const botonComprar = document.querySelector('.botonComprarCarrito');
    
    var carrito = []
    var contador = 0;
        
    //EVENTOS//
    
    botonDelete.addEventListener('click', vaciarCarrito);
    
    boton.forEach(btn=>{
        btn.addEventListener('click', addCarrito)
    })
    
    botonComprar.addEventListener('click',comprar);

    function cartelCarritoVacio(){
        if(carrito.length == 0){
            $('.carrito-vacio').slideDown("fast");
        }
        else{
            $('.carrito-vacio').slideUp("fast");
        }
    }   
    
    function comprar(){
        if(carrito.length == 0){
            alert("Carrito vacío.")
        }
        else{
            comprador.push(carrito);
            tabla.classList.toggle("moveCarrito");
            botonCarrito.classList.toggle("activo");
            $(".comprar").slideDown("slow");
            console.log(comprador);
        }
        
    }
    
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
    
    function addCardCarrito(newItem){
        const inputCantidad = tbody.getElementsByClassName('inputCantidad');
        for(let i = 0 ; i < carrito.length ; i ++){
            if(carrito[i].title.trim() === newItem.title.trim()){
                carrito[i].cantidad ++;
                const inputValorCantidad = inputCantidad[i]
                inputValorCantidad.value ++;
                totalCarrito();
                return null;
            }
        }
        carrito.push(newItem);
        cartelCarritoVacio();
        agregarACarrito();
    }
    
    function agregarACarrito(){
        $(".contador-productos-cart").slideDown(300);
        contador++;
        contadorProductos.textContent = contador;   
        tbody.innerHTML='';
        carrito.map(item=>{
            const tr= document.createElement('tr');
            tr.classList.add('itemCarrito')
            const Content= `
            <td class="productoAgregado"> 
                <img class="imagenDeCarrito" src=${item.img} alt="">
                <p class="tituloProducto">${item.title}</p>
            </td>
            <td class="productoPrecio">
            <p class="precioDelProducto">$${item.precio}</p></td>
            <td class="productoCantidad">
                <input type="number" min="1" value=${item.cantidad} name="" class="inputCantidad">
                <button class="botonDeleteProducto">x</button>
            </td>
            `
            tr.innerHTML = Content;
            tbody.appendChild(tr);
    
            tr.querySelector('.botonDeleteProducto').addEventListener('click', eliminarItemCart);
            tr.querySelector('.inputCantidad').addEventListener('change', sumaCantidad)
        })
        totalCarrito();
    }
    
    function totalCarrito(){
        var total = 0;
        const valorTotal = document.querySelector('.totalCarrito');
        carrito.forEach((item)=>{
            const precio = Number(item.precio.replace("$",''));
            total = total + precio * item.cantidad;
        })
        valorTotal.innerHTML = `Total: $ ${total} + envío`;
    }
    
    function eliminarItemCart(e){
        contador--;
        contadorProductos.textContent = contador;   
        const botonDelete= e.target;
        const tr = botonDelete.closest('.itemCarrito');
        const title = tr.querySelector('.tituloProducto').textContent;
        for(let i = 0; i < carrito.length; i++){
            
            if(carrito[i].title.trim() === title.trim()){
                carrito.splice(i, 1);
            }
            if(carrito.length == 0){
                $(".contador-productos-cart").slideUp("fast");
            }
        }
        tr.remove();
        cartelCarritoVacio()
        totalCarrito();
    }
    
    function sumaCantidad (e){
        const sumaInput = e.target;
        const tr = sumaInput.closest('.itemCarrito');
        const title = tr.querySelector('.tituloProducto').textContent;
        carrito.forEach(item =>{
            if(item.title.trim() === title){
                sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
                item.cantidad = sumaInput.value;
                totalCarrito()
            }
        })
    }
    
    function vaciarCarrito(){
        carrito.length = 0;
        tbody.innerHTML='';
        contador = 0;
        $(".contador-productos-cart").slideUp("fast");
        cartelCarritoVacio();
        totalCarrito();
    }
    cartelCarritoVacio();

    const cerrarAlerta = document.querySelector('.boton-close-alert');

    cerrarAlerta.addEventListener('click',closeAll);

    function closeAll(){
        carrito.length = 0;
        tbody.innerHTML='';
        contador = 0;
        $(".contador-productos-cart").slideUp("fast");
        cartelCarritoVacio();
        totalCarrito();
        nombre.value='';
        apellido.value='';
        email.value='';
        celular.value='';
        direccion.value='';
        localidad.value='';
        textarea.value='';
        $('.alert-compra').fadeOut("fast");
    }

})





//Comienza Carrito
class Auto {
    constructor(id, marca, modelo, precio, stock) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }
}

let producto1 = new Auto(1, "Toyota", "Supra Rapidos y furiosos", 550000, 1)
let producto2 = new Auto(2, "Toyota", "Celica", 22000, 10)
let producto3 = new Auto(3, "Toyota", "Hilux", 23500, 7)
let producto4 = new Auto(4, "Toyota", "Rav4", 29500, 5);
let producto5 = new Auto(5, "Toyota", "Land Cruiser", 32000, 4);
let producto6 = new Auto(6, "Toyota", "Supra", 60000, 2);
let producto7 = new Auto(7, "Toyota", "Corolla", 10000, 15);
let producto8 = new Auto(8, "Toyota", "Yaris GR Sport", 25000, 11);

let productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]
let carrito = [];
let preciototal = 0;

let stockProducto1 = document.getElementById('stock__suprafaf');
stock__suprafaf.innerText = `Stock: ${producto1.stock}`;
let stockProducto2 = document.getElementById('stock__celica');
stock__celica.innerText = `Stock: ${producto2.stock}`;
let stockProducto3 = document.getElementById('stock__hilux');
stock__hilux.innerText = `Stock: ${producto3.stock}`;
let stockProducto4 = document.getElementById('stock__rav4');
stock__rav4.innerText = `Stock: ${producto4.stock}`;
let stockProducto5 = document.getElementById('stock__landcruiser');
stock__landcruiser.innerText = `Stock: ${producto5.stock}`;
let stockProducto6 = document.getElementById('stock__supra');
stock__supra.innerText = `Stock: ${producto6.stock}`;
let stockProducto7 = document.getElementById('stock__corolla');
stock__corolla.innerText = `Stock: ${producto7.stock}`;
let stockProducto8 = document.getElementById('stock__yarisgrsport');
stock__yarisgrsport.innerText = `Stock: ${producto8.stock}`;


function Agregaralcarrito(producto) {
    if (producto.stock <= 0) {
        Swal.fire({
            title: 'Error',
            text: 'No hay suficiente stock de este producto.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    carrito.push(producto);
    producto.stock--; // Restar 1 al stock del producto
    stock__suprafaf.innerText = `Stock: ${producto1.stock}`;
    stock__celica.innerText = `Stock: ${producto2.stock}`;
    stock__hilux.innerText = `Stock: ${producto3.stock}`;
    stock__rav4.innerText = `Stock: ${producto4.stock}`;
    stock__landcruiser.innerText = `Stock: ${producto5.stock}`;
    stock__supra.innerText = `Stock: ${producto6.stock}`;
    stock__corolla.innerText = `Stock: ${producto7.stock}`;
    stock__yarisgrsport.innerText = `Stock: ${producto8.stock}`;
    preciototal += producto.precio;
    console.table(carrito);
    console.log('El precio total sería $', preciototal);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
    });
}
//Un boton de compra por cada Card
let boton1 = document.getElementById('button__compratoyotafaf');
boton1.addEventListener('click', function() {
    Agregaralcarrito(producto1);
});
let boton2 = document.getElementById('button__compratoyotacelica');
boton2.addEventListener('click', function() {
    Agregaralcarrito(producto2);
});
let boton3 = document.getElementById('button__compratoyotahilux');
boton3.addEventListener('click', function() {
    Agregaralcarrito(producto3);
});
let boton4 = document.getElementById('button__compratoyotarav4');
boton4.addEventListener('click', function() {
    Agregaralcarrito(producto4);
});
let boton5 = document.getElementById('button__compratoyotalandcruiser');
boton5.addEventListener('click', function() {
    Agregaralcarrito(producto5);
});
let boton6 = document.getElementById('button__compratoyotasupra');
boton6.addEventListener('click', function() {
    Agregaralcarrito(producto6);
});
let boton7 = document.getElementById('button__compratoyotacorolla');
boton7.addEventListener('click', function() {
    Agregaralcarrito(producto7);
});
let boton8 = document.getElementById('button__compratoyotayarisgrsport');
boton8.addEventListener('click', function() {
    Agregaralcarrito(producto8);
});

function mostrarAlerta() {
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Error',
            text: 'El carrito está vacío. Agrega productos antes de continuar.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    let mensaje = "";
    for (let producto of carrito) {
        mensaje += `${producto.marca} ${producto.modelo}<br>`;
    }
    mensaje += `<br>Precio Total: $${preciototal}`;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: 'Productos agregados al carrito:',
        html: mensaje,
        icon: '',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: 'Comprar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Compra Realizada!',
                '',
                'success'
            );
            // Reducir el stock y vaciar el carrito
            for (let producto of carrito) {
                producto.stock--;  
            }
            carrito = [];
            preciototal = 0;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                'Compra Cancelada',
                '',
                'success'
            );
            // Devolver el stock y vaciar el carrito
            for (let producto of carrito) {
                producto.stock++; // Devolver la cantidad al stock original
                stock__suprafaf.innerText = `Stock: ${producto1.stock}`;
                stock__celica.innerText = `Stock: ${producto2.stock}`;
                stock__hilux.innerText = `Stock: ${producto3.stock}`;
                stock__rav4.innerText = `Stock: ${producto4.stock}`;
                stock__landcruiser.innerText = `Stock: ${producto5.stock}`;
                stock__supra.innerText = `Stock: ${producto6.stock}`;
                stock__corolla.innerText = `Stock: ${producto7.stock}`;
                stock__yarisgrsport.innerText = `Stock: ${producto8.stock}`;    
            }
            carrito = [];
            preciototal = 0;
        }
    });
}

let boton9 = document.getElementById('header__button__carrito');
boton9.addEventListener('click',mostrarAlerta)
//Finaliza Carrito - Comienza socios
class Socio {
    constructor(empresa, pais) {
        this.empresa = empresa;
        this.pais = pais;
    }
}

let miembro1 = new Socio('CocaCola', 'Uruguay');
let miembro2 = new Socio('Nike', 'Argentina');
let miembro3 = new Socio('Itau', 'Colombia');
let miembro4 = new Socio('Buquebus', 'Uruguay');
let miembro5 = new Socio('Ferrari', 'Italia');

let Listamiembros = [miembro1, miembro2, miembro3, miembro4, miembro5];

function mostrarSocios() {
    let mensajeSocios = 'Ya confían en nosotros:\n';
    for (let i = 0; i < Listamiembros.length; i++) {
        mensajeSocios += Listamiembros[i].empresa + ' (' + Listamiembros[i].pais + ') |' + '\n';
    }

    Swal.fire({
        title: 'Socios:',
        text: mensajeSocios,
        icon: 'info',
    });
}

function Agregarsocio() {
    Swal.fire({
        title: "Se nuestro socio!",
        html:
          `<label>Empresa:</label><input id="empresa-input" class="swal2-input" type="text" autofocus>

           <label>Pais:</label><input id="pais-input" class="swal2-input" type="text" autofocus>`,

        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          let empresa= document.getElementById("empresa-input").value.trim();
          let pais = document.getElementById("pais-input").value.trim();

          if (empresa === 'string' || pais === 'string') {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Por favor ingresa datos validos."
            });
            return;
          }
      
          let miembro = new Socio (empresa, pais);
          Listamiembros.push(miembro);
      
          Swal.fire({
            icon: "success",
            title: `Felicidades ${miembro.empresa} !`,
            text: 'Se ha unido a nuestra red de socios',
            timer: 3000
          });
          console.table(Listamiembros);
        }
      });
}

let boton10 = document.getElementById('button__nuestrossocios');
boton10.addEventListener('click', mostrarSocios);
let boton11 = document.getElementById('button__nuevosocio');
boton11.addEventListener('click', Agregarsocio);
//fin socios.- inicio Api
let urlapi = "https://api.bluelytics.com.ar/v2/latest"
let contenedorapi = document.getElementById("apidiv")

fetch(urlapi)
.then(res => res.json())

.then(data => {
    console.log(data.blue)
    const div = document.createElement("div")
    div.innerHTML = `
    <h4>Para tener en cuenta. El precio del dolar blue en estos momentos es de: $${data.blue.value_buy}<h4>
    `
    contenedorapi.appendChild(div)
})



.catch(error => {
    console.error("Error con la API", error)
})

//Fin api.

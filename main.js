//Comienza Carrito
const Auto = function (marca, modelo, precio, stock) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
};
let carrito = [];
let preciototal = 0;
function Agregaralcarrito(producto) {    
    carrito.push(producto);
    preciototal += producto.precio;
    console.table(carrito);
    console.log('El precio total sería $',preciototal);
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
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
      })
}
let boton1 = document.getElementById('button__compratoyotafaf');
boton1.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Supra Rapidos y furiosos", 550000, 1);
    Agregaralcarrito(producto);
});
let boton2 = document.getElementById('button__compratoyotacelica');
boton2.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Celica", 22000, 10);
    Agregaralcarrito(producto);
});
let boton3 = document.getElementById('button__compratoyotahilux');
boton3.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Hilux", 23500, 7);
    Agregaralcarrito(producto);
});
let boton4 = document.getElementById('button__compratoyotarav4');
boton4.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Rav4", 29500, 5);
    Agregaralcarrito(producto);
});
let boton5 = document.getElementById('button__compratoyotalandcruiser');
boton5.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Land Cruiser", 32000, 4);
    Agregaralcarrito(producto);
});
let boton6 = document.getElementById('button__compratoyotasupra');
boton6.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Supra", 60000, 2);
    Agregaralcarrito(producto);
});
let boton7 = document.getElementById('button__compratoyotacorolla');
boton7.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Corolla", 10000, 15);
    Agregaralcarrito(producto);
});
let boton8 = document.getElementById('button__compratoyotayarisgrsport');
boton8.addEventListener('click', function() {
    let producto = new Auto("Toyota", "Yaris GR Sport", 25000, 11);
    Agregaralcarrito(producto);
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
            carrito = [];
            preciototal = 0;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                'Compra Cancelada',
                '',
                'success'
            );
            carrito = [];
            preciototal = 0;
        }
    });
}
let boton9 = document.getElementById('header__button__carrito');
boton9.addEventListener('click',mostrarAlerta)
//Finaliza Carrito
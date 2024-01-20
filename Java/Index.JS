let Buscar = document.querySelector('.Buscar');
let Carrito = document.querySelector('.Carrito');
let Usuario = document.querySelector('.Usuario');

document.querySelector('#Icono-Buscar').onclick = () => {
    Buscar.classList.toggle('active');
    Carrito.classList.remove('active');
    Usuario.classList.remove('active');
}

document.querySelector('#Icono-Carro').onclick = () => {
    Carrito.classList.toggle('active');
    Buscar.classList.remove('active');
    Usuario.classList.remove('active');
}

document.querySelector('#Icono-Usuario').onclick = () => {
    Usuario.classList.toggle('active');
    Buscar.classList.remove('active');
    Carrito.classList.remove('active');
}
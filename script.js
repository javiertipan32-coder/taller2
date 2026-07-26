// ==========================
// BUSCAR PRODUCTOS
// ==========================

const buscador = document.getElementById("buscarProducto");
const productos = document.querySelectorAll(".producto");

if (buscador) {
    buscador.addEventListener("keyup", function () {

        const texto = buscador.value.toLowerCase();

        productos.forEach(producto => {

            const contenido = producto.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }

        });

    });
}

// ==========================
// FILTRAR POR CATEGORÍAS
// ==========================

const botonesCategoria = document.querySelectorAll(".categoria");

botonesCategoria.forEach(boton => {

    boton.addEventListener("click", function () {

        const categoria = this.dataset.categoria;

        productos.forEach(producto => {

            if (
                categoria === "todos" ||
                producto.dataset.categoria === categoria
            ) {

                producto.style.display = "block";

            } else {

                producto.style.display = "none";

            }

        });

    });

});

// ==========================
// CARRITO DE COMPRAS
// ==========================

const botonesAgregar = document.querySelectorAll(".agregar");

const listaCarrito = document.getElementById("listaCarrito");

const total = document.getElementById("total");

let totalCompra = 0;

botonesAgregar.forEach(boton => {

    boton.addEventListener("click", function () {

        const nombre = this.dataset.producto;

        const precio = Number(this.dataset.precio);

        const item = document.createElement("li");

        item.className = "list-group-item d-flex justify-content-between align-items-center";

        item.innerHTML = `
            ${nombre}
            <span>$${precio}</span>
        `;

        listaCarrito.appendChild(item);

        totalCompra += precio;

        total.textContent = "$" + totalCompra;

    });

});

// ==========================
// VACIAR CARRITO
// ==========================

const vaciar = document.getElementById("vaciarCarrito");

if (vaciar) {

    vaciar.addEventListener("click", function () {

        listaCarrito.innerHTML = "";

        totalCompra = 0;

        total.textContent = "$0";

    });

}

console.log(listarProductosPorTipo([
    { nombre: "Gofio",isla: "Tenerife", tipo: "alimento" },
    { nombre: "Queso Majorero",isla: "Fuerteventura", tipo: "alimento" },
    { nombre: "Ron arehucas",isla: "Gran Canaria", tipo: "bebida" },
    { nombre: "Mojon picon",isla: "Tenerife", tipo: "salsa" },
]));

function listarProductosPorTipo(productos) {
    const tipos = {};
    for (const producto of productos) {
        if (!tipos[producto.tipo]) {
            tipos[producto.tipo] = {};
        }
        tipos[producto.tipo][producto.isla] = [producto.nombre];
    }
    return tipos;
}
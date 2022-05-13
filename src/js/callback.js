const carrito = {
  1: {
    nombre: 'Monitor 27 pulgas',
    precio: 100
  },
  2: {
    nombre: 'Audifonos',
    precio: 400
  },
  3: {
    nombre: 'Televisor',
    precio: 600
  }
}

// Callback
// Una función que se pasa por parametro a otra función

export const buscarProducto = (id, callback) => {
  const producto = carrito[id]; // podria usar el operador punto, pero como nose cual es el id que ingresara el usuario utilizo []

  if(producto) {
    // el primer argumento es un error
    callback(null, producto);
  } else {
    // enviar un mensaje
    callback(`No existe un producto con ese id ${id}`);
    // alt + 96 ``
  }
}



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

// Promesa

export const buscarProducto = (id) => {
  // Buscando el producto
  const producto = carrito[id];
  // const promesa = new Promise();
  // resolve( cuando todo sale bien) y reject (cuando hay un error)
  return new Promise((resolve, reject ) => {
    if(producto) {
      resolve(producto);
    } else {
      reject(`No existe un producto con ese id ${id}`);
    }
  })
}

// Ejemplo con RACE
const promiseSlow = new Promise((resolve, reject)=> {
  // respuesta de esta promesa que dure 3 seg
  setTimeout(()=> resolve('PromiseSlow'), 3000);
});

const promiseMedium = new Promise((resolve, reject)=> {
  // respuesta de esta promesa que dure 3 seg
  setTimeout(()=> resolve('PromiseMedium'), 2000);
});

const promiseFast = new Promise((resolve, reject)=> {
  // respuesta de esta promesa que dure 3 seg
  setTimeout(()=> reject('PromiseFast'), 1000);
});


export {
  promiseSlow,
  promiseMedium,
  promiseFast
}
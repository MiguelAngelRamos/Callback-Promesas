import './styles.css';
// import { buscarProducto } from './js/callback';
import { buscarProducto } from './js/promesa';

const productoId = 1;
const productoId2 = 2;
const productoId3 = 3;

// buscarProducto(productoId, ()=> {
//   console.log('Callback Ejecutandose....');
// })

// trabajar argumentos
// buscarProducto(productoId, (err, producto)=> {
//   if(err) {
//     console.error(err);
//   } else {
//     console.log(producto);
//   }
// })

// EJEMPLO DE CALLBACK HELL
// buscarProducto(productoId, (err, producto)=> {
//   if(err) return console.error(err);
//     buscarProducto(productoId2, (err, producto2) => {
//       if(err) return console.error(err);
//     // console.log(`Enviando al carrito los siguientes productos: ${producto.nombre}, ${producto2.nombre}`);
//         buscarProducto(productoId3, (err, producto3) => {
//           if(err) return console.error(err);
//             console.log(`Enviando al carrito los siguientes productos: ${producto.nombre}, ${producto2.nombre} y ${producto3.nombre}`);
//     })
//   })
// })

// Implementar la Promesa
// buscarProducto(productoId3)
//   .then( producto => console.log(`Enviando: ${producto.nombre} al carrito de compra`));

// PROMISE HELL
// buscarProducto(productoId3)
//   .then( producto => {
//     buscarProducto(productoId2).then(producto2 => {
//       console.log(`Enviando: ${producto.nombre} y ${producto2.nombre} al carrito de compra`)
//     })
   
//   });

// Promise.all (Ejecutar las promesas en paralelo)
// all recibe un arreglo de promesas y si sale todo bien tambien recibe una arreglo con las respuestas

// Sin destructuring
// Promise.all([buscarProducto(productoId2), buscarProducto(productoId)]).then(producto => {
//   console.log('Promise.all', producto);
//   console.log(`Enviando a ${producto[0].nombre} y ${producto[1].nombre} al carrito de compras`);
// });

// Con destructuring
Promise.all([buscarProducto(productoId2), buscarProducto(productoId)]).then(([producto1, producto2]) => {
  console.log(`Enviando a ${producto1.nombre} y ${producto2.nombre} al carrito de compras`);
});

// si una de las promesas falla no se ejecuta el then
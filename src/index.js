import './styles.css';
import { promiseSlow, promiseMedium, promiseFast } from './js/promesa';

// promiseSlow.then(message => console.log(message));
// promiseSlow.then(console.log);
// promiseMedium.then(console.log);
// promiseFast.then(console.log);


// PROMISE RACE NOS PERMITE EJECUTAR TODAS LAS PROMESAS Y OBTENER EL MENSAJE
// DE LA PROMESA MAS RAPIDA

Promise.race([promiseSlow, promiseMedium, promiseFast])
  .then(message => console.log(message))
  .catch(message => console.warn('La promesa fallo: ' + message));
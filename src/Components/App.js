// importaciones de las librerias
import React, { Fragment } from 'react';

// importo componentes
import CComponent from './CComponent/CComponent';
import ClComponent from './ClComponent/ClComponent';
import FComponent from './FComponent/FComponent';
import ECMAScript from '../ECMAScript';
import * as practica from './module';
// Spread Operator
let nombres1 = ['Simón', 'Santi', 'Berni'];
let apellidos = ['Holmquist', 'Leila'];
let completo = [...nombres1, ...apellidos];

// Destruct
let persona = {
  nombre: 'Matías',
  edad: 25
}
let { nombre, edad } = persona;

//Arrow functions
const square = num => num * num;

//Promises
const numbers = [1, 5, 4, 5, 6, 2, 9, 5];
const Ahora = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 === num2) {
      resolve('hey! tamo de vuelta!')
    }
    else {
      reject('Oscu y Flexo');
    }
  });
};

//Classes

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();

function App() {
  // numbers.map( 
  //   n1 => Ahora(n1,5)
  //   .then(response => {
  //     return console.log(response,'\n');
  //    })
  //   .catch(error => console.log(error,'\n'))
  // );
  // console.log(calc.sum(9, 6));
  // console.log(practica.hello(), practica.bye);
  // console.log(practica.generator_hello_world.next().value+practica.generator_hello_world.next().value);
  // if(numbers.includes(2,6))
  // {
  //   console.log('si');
  // } else {
  //   console.log('no');
  // }
  
  //Object methods
  let entries = Object.entries(persona); 
  let keys = Object.keys(persona);
  let values = Object.values(persona);

  //padStart y padEnd
  let word = "love";
  console.log('12345'.padStart(10, 'ja'));
  console.log(word.padEnd(10, 'jo'));
  return (
    <Fragment>
      <CComponent />
      <ClComponent />
      <FComponent />
      {
        Object.entries(ECMAScript()).map(x => <p key={x[0]}>{square(x[1])}</p>)
      }
      {
        console.log(completo)
      }
      {
        <h2>
          {`${nombre} ${square(7)} ${edad}`}
        </h2>
      }
    </Fragment>
  );
}

export default App;

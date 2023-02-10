const cuadrado = (valor, callback) => {
  callback(valor, valor * valor);
};
cuadrado(2, (valor, resultado) => {
  console.log(`Callback: ${valor}, ${resultado}`);
});

const arr = [1, 2, 4, 5];

// const sTimOut = ()=>{

//         setTimeout(() => {
//             let num =11;
//             return num;

//         }, 1500);

// }
// console.log(sTimOut());

// const personas = [
//     { nombre: "elias", edad: 23 },
//     { nombre: "hec", edad: 24 },
//     { nombre: "aar", edad: 25 },
//     { nombre: "dieg", edad: 23 },
//     { nombre: "ev", edad: 28 },
//     { nombre: "fel", edad: 29 }
// ]
// for (const persona of personas) {
//     console.log(`Me llamo ${persona.nombre} y tengo ${persona.edad}`);
// }

//--------------------------tesis dn lara
const objeto = {};
let contador = 1;
document.addEventListener("click", (e) => {
  if (e.target.matches("#btn")) {
    objeto[contador] = { usuaro: "elias" };
    contador++;
    console.log(objeto);
  }
});

let numero = 16;

function decirNumero() {
  console.log("-----------funcion-----------");
  console.log(numero);
  console.log("function", this);
}
decirNumero();

const decirNum2 = () => {
  console.log("------------arrow func----------");
  console.log(numero);
  console.log("arrow f", this);
  console.log("--------------------------");
};
decirNum2();
//objeto
//creo que jamas hay que usar arrow functions dentro de objetos
const obj = {
  nombre: "elias",
  func: function () {
    return this.nombre;
  },
  arrow: () => {
    return this.nombre;
  },
};
console.log(obj.arrow());

//funcion constructora
console.log("--------------------Funcion constructora");
function Animal(nombre) {
  this.nombre = nombre;
}
Animal.prototype.saludar = function () {
  return `hola me llamo ${this.nombre}`;
};

const perro = new Animal("kandy");
console.log(perro);
console.log(perro.saludar());
// ---------------------------

const arra = ["jon", "ela", "ima"];
const a = arra.find((el) => el.includes("m")); //devuelve el valor del primer elemento que cumpla la funcion de prueba
console.log(a);
// -----------------------

function sumar(...nums) {
  //console.log(nums);
  const total = nums.reduce((acumulador, valActual) => acumulador + valActual);
  return `la suma es ${total}`;
}
console.log(sumar(5, 5));

//
const val = [1];
const arr2 = [...val];
console.log(val);
function cambiaValor(a) {
  a.push(5);
  console.log(a);
}
cambiaValor(arr2);
console.log(val);

// -------------------------------------
// let nombre = prompt("tu nombre");
// !nombre
//   ? console.warn("no agregaste tu nombre")
//   : console.log(`hola ${nombre}`);
//------------------------------

// const fetchData = fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>
//   res.json()
// );
// fetchData.then((r) => console.log(r));
// --------------------------------------
console.log("||||||||||||||||||||||||||||||||");
const func = (saludo) => () => console.log(`hola ${saludo}`);
const saludo = func("Elias");
saludo();
console.log(saludo);
// -----------------------------
console.log("|||||||||||||||||||contar cuantas letras hay||||||||||||||");
let frase = "uaa bb aba";
const objCantidadLetras = () =>
  frase.split("").reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
  }, {});

const objConteoLetras = objCantidadLetras();
console.log("||||||||||||||||||  {([])}  |||||||||||||||||");

const isValid = (str) => {
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  console.log(str);
  const arrStr = str.split("");
  console.log(arrStr);
};

isValid("{([])}");

// REGEXP expresion regular
console.log("------------------REGEXP-------------------");
let regexp = /\D/g;
// const regObj = new RegExp(".a.o", "g");
const str = " petoPato65 mato pato vaso palo";
console.log(regexp.lastIndex);
console.log(regexp.exec(str));
console.log(str.match(regexp));

console.log("second feature");

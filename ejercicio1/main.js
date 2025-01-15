// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const btn = document.querySelector(".showme");
console.log(btn);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector("#pillado");
console.log(title);
// 1.3 Usa querySelector para mostrar por consola todos los p
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);
// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const test = document.querySelectorAll('[data-function="testMe"]');
console.log(test);
console.log(test[0],test[1],test[2],test[3]);
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".


// He reciclado la constante test, sabiendo que es de longitud 4 y tiene posiciones 0,1,2,3 y 
//he asignado a la constante character3 la posicion 2 del array. 

const character3 = test[2];
console.log(test[2]);
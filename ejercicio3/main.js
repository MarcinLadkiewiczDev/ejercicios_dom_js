/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const body = document.querySelector("body");
const ul = document.createElement("ul");
for (const country of countries) {
	let li = document.createElement("li");
	li.innerHTML = `<li>${country}</li>`;
	ul.appendChild(li);
}
body.appendChild(ul);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const paragraph = document.querySelector(".fn-remove-me");
paragraph.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carDiv = document.querySelector("[data-function ='printHere']");
const ulCars = document.createElement("ul");
for (const car of cars) {
	let li = document.createElement("li");
	li.innerText = car;
	ulCars.appendChild(li);
}
carDiv.appendChild(ulCars);
/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

//LE HE CAMBIADO EL NOMBRE AL ARRAY PARA QUE NO DE FALLO CON EL PRIMERO DE COUNTRIES//
const cities = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for (const city of cities) {
	let div = document.createElement("div");
	div.className = "cities";
	div.innerHTML = `
	<h4>${city.title}</h4>
	<img src="${city.imgUrl}" alt="${city.title}"/>
	`
	body.appendChild(div);
}




/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */

//PRIMERO CREAMOS EL BOTON Y LO AÑADIMOS AL HTML
const btn = document.createElement("button");
btn.innerText = "Eliminar último Div";
body.appendChild(btn);
//AHORA CREAMOS UNA FUNCIÓN PARA ESE BOTON. 

btn.addEventListener("click", () =>{
	//CREAMOS UN ARRAY DE DIVS CON LA CLASE (CITIES)
	const divCities = document.querySelectorAll(".cities");
	if(divCities.length > 0){
		//PARA ENCONTRAR EL ULTIMO DIV, NECESITAMOS ACCEDER A EL CON LA POSICIÓN DEL ARRAY QUE SERÁ 
		//SU LONGITUD - 1 PARA HALLAR POSITION
		const lastCity = divCities[divCities.length - 1];
		lastCity.remove();
	};
} );
/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

//PRIMERO CREAMOS UN BOTTON EN CADA DIV
const divs = document.querySelectorAll("div.cities");
for (const div of divs) {
	const btn = document.createElement("button");
	btn.innerText = "Eliminar Div";
	btn.classList = "delete-div";
	div.appendChild(btn);
}
// CREAMOS UN NODO QUE SERÁ UN ARRAY DE TODOS LOS BOTONES QUE TIENEN ESOS DIV.
const buttons = document.querySelectorAll(".delete-div");
// CREAMOS UNA FUNCIÓN PARA CADA BOTON.

buttons.forEach(button =>{
	button.addEventListener("click", function(){
		const deleteDiv = button.parentElement;
		deleteDiv.remove();
	});
});

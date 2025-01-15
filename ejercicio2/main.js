// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const body = document.querySelector("body");
const div = document.createElement("div");

body.appendChild(div);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement("div");
const paragraph = document.createElement("p");
div2.appendChild(paragraph);

body.appendChild(div2);


/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.*/
const div3 = document.createElement("div");
for(let i = 0; i < 6; i++){ 
    let paragraph2 = document.createElement("p");
    div3.appendChild(paragraph2);
}
body.appendChild(div3);

/*2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.*/
const paragraph3 = document.createElement("p");
paragraph3.innerText = "Soy dinámico";

body.appendChild(paragraph3);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");
h2.innerText = "Wubba Lubba dub dub";



/*2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (const app of apps) {
    let li = document.createElement("li");
    li.innerText = app;
    ul.appendChild(li);
}

body.appendChild(ul);
//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminates = document.querySelectorAll(".fn-remove-me");
console.log(eliminates);
for (const eliminate of eliminates) {
    eliminate.remove();
}
/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

const div4 = document.querySelector("div.fn-insert-here");
div4.insertAdjacentHTML("afterend","<p>Voy en medio!</p>");

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */

const divs = document.querySelectorAll("div.fn-insert-here");

for (const div of divs) {
    div.insertAdjacentHTML("afterbegin", "<p>Voy dentro!</p>");
}
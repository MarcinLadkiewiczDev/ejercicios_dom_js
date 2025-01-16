/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
//CON FOREACH
const body = document.querySelector("body");
const ul = document.createElement("ul");

albums.forEach(album => {
    let li = document.createElement("li");
    li.innerText = album;
    ul.appendChild(li);
});

body.appendChild(ul);


// CON BUCLE FOROF
const ul2 = document.createElement("ul");
for (const album of albums) {
    let li = document.createElement("li");
    li.innerText = `${album}`;
    ul2.appendChild(li);
}

body.appendChild(ul2);
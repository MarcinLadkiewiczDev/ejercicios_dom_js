/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const btn = document.querySelector("#btnToClick");

const eventClick = function(event){
    console.log(event);
}

btn.addEventListener("click", eventClick);


/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

const input = document.querySelector(".focus");

input.addEventListener("focus", () =>{
    console.log(input.value);
});


/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

input.addEventListener("input", () =>{
    console.log(input.value);
});
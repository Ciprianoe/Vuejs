// vanilla JavaScript


/*
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const pre =document.querySelector('pre');

input.addEventListener('keyup',  () =>
    h1.innerHTML = input.value);

input.addEventListener('keyup',  () =>

    pre.innerHTML = input.value);

console.log(h1);
console.log(pre);
*/


//VUE.JS
/**
 * los pasos a seguir es primero instanciar Vue de la siguiente forma new Vue ({# code here componentes parametros etc});
 * y para esta instancia solo tocaremos dos propiedades ver codigo
 *
*/

new Vue({

    el: 'main',

    data: {
        mensaje : 'Hola mundo desde VueJS'
    }


});
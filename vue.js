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


// video2
/*
new Vue({

    el: 'main',

    data: {
        mensaje : 'Hola mundo desde VueJS'
    }


});*/



// video3 renderizado condicional

/*
const vm = new Vue({
    el:'main',

    data:{
        conectado:false,
        edad: 18,
    }
});*/


// video4 renderizado de listas

/*const vm = new Vue({
    el: 'main',
    data:{
        nombre:"Cipriano Escorche",
        horarios: ['Lunes','Martes','Miercoles','Jueves','Viernes'],
        tareas:[
            {nombre:'Aprender VueJS', prioridad:'alta'},
            {nombre:'Tomar un descanso', prioridad:'media'},
            {nombre:'Hacer Ejercicios', prioridad:'alta'},
            {nombre:'Pasar tiempo con la familia',prioridad:'altisima'},
        ],

        //ejemplo para recorrer un objeto

        personas:{
            nombre:'Juan',
            profesion:'Dev',
            ciudad:'Valencia'
        }

    },

});*/

// video 5 eventos

const vm = new Vue({
    el: 'main',
    data:{

        mensaje:'VueJS 2019'

        }



});
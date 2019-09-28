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

/* const vm = new Vue({
    el: 'main',
    data:{
        nuevaTarea: null,
        tareas:[
          'Aprender VueJS',
          'Aprender ES6',
          'Trabajar Y aprender Todo los dias'
        ]

        },

    methods:{
        addTask(){
            //console.log('Funciona!!');

            //this en este caso hace referencia a esta instancia Vue
            // con el unshift le decimos a array tarea que coloque al inicio el parametro que pasamos que es nueva tarea
            this.tareas.unshift(this.nuevaTarea);
            // ahora clear la nueva tarea
            this.nuevaTarea = null;



        }
    }



}); */

// video 6

/* const vm = new Vue({
        el: 'main',
        nuevaTarea: null,
        data:{
                mensaje: 'Hola VueJS',

            tareas:[
            {nombre:'Aprender VueJS', prioridad:true, antiguedad:10},
            {nombre:'Tomar un descanso', prioridad:false, antiguedad:15},
            {nombre:'Hacer Ejercicios', prioridad:true, antiguedad:20},
            {nombre:'Pasar tiempo con la familia',prioridad:true, antiguedad:30},
        ],
},


methods:{
    addTask(){
        //console.log('Funciona!!');

        //this en este caso hace referencia a esta instancia Vue
        // con el unshift le decimos a array tarea que coloque al inicio el parametro que pasamos que es nueva tarea
        this.tareas.unshift({
            nombre:this.nuevaTarea,
            prioridad:false,
            antiguedad:0,
        });
        // ahora clear la nueva tarea
        this.nuevaTarea = null;



    }
},

computed:{
    mensajeAlreves(){
        return this.mensaje.split('').reverse().join('');
    },

    tareaConPrioridad(){
        return this.tareas.filter((tarea)=>tarea.prioridad);
    },

    tareaConAtiguedad(){
        return this.tareas.sort((a,b)=>b.antiguedad - a.antiguedad);
    }

}




}); */

// video 7 filtros

const vm = new Vue({
    el:'main',
    
    

    data:{
        minimo: 1,
        buscar:'',

        peliculas:[
        {nombre:'Ultimate', estreno:'2009', status:false,rank:10},
        {nombre:'Pokemon', estreno:'1994', status:true,rank:1},
        {nombre:'Resident Evil ', estreno:'2006', status:true,rank:7},
        {nombre:'Efecto Mariposa', estreno:'2009', status:false,rank:2},
    ],
},


computed: {

        rankPelicula() {
            return this.peliculas.filter((pelicula) => pelicula.rank >= this.minimo);
    },

        buscarPelicula() {
            return this.peliculas.filter((pelicula) => pelicula.nombre.includes(this.buscar));
        }

}



});
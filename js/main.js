let user ="user:> ";
let comando;
let descripcion;
let aplicacion;

comandos = [

    {
        "nombre":"Apagar",
        "comando":"shutdown -h now",
        "descripcion":"Apaga el sistema de forma inmediata.",
        "aplicacion":"shutdown -h now"
    },

    {
        "nombre":"Reiniciar",
        "comando":"reboot",
        "descripcion":"Reinicia el sistema.",
        "aplicacion":"reboot"
    },
    {
        "nombre":"Navegar",
        "comando":"cd",
        "descripcion":"navegar entre carpetas.",
        "aplicacion":"cd /home/var"
    },
    {
        "nombre":"Listar",
        "comando":"ls",
        "descripcion":"Listar ficheros de la carpeta actual.",
        "aplicacion":"ls"
    },
    {
        "nombre":"Crear directorio",
        "comando":"mkdir",
        "descripcion":"Crear carpetas en el directorio actual",
        "aplicacion":"mkdir nombredecarpeta"
    },    
    {
        "nombre":"Cerrar Sesion",
        "comando":"logout",
        "descripcion":"Cierra la sesion del usuario actual",
        "aplicacion":"logout"
    },
    {
        "nombre":"Borrar fichero",
        "comando":"rm -f",
        "descripcion":"Borrar el fichero con el nombre añadido en el comando.",
        "aplicacion":"rm -f nombredefichero"
    },
    {
        "nombre":"Borrar directorio",
        "comando":"rmdir",
        "descripcion":"borrar la carpeta con el nombre añadido en el comando.",
        "aplicacion":"rmdir nombredecarpeta"
    },
    {
        "nombre":"Copiar fichero",
        "comando":"cp",
        "descripcion":"Copia el fichero con el nombre añadido en el comando.",
        "aplicacion":"cp nombredefichero nombrededirectoriodestino"
    },
    {
        "nombre":"Copiar directorio",
        "comando":"cp -a",
        "descripcion":"Copia el directorio con el nombre añadido en el comando.",
        "aplicacion":"cp -a nombrededirectorio"
    },
    {
        "nombre":"Fecha y Hora",
        "comando":"date",
        "descripcion":"Muestra la fecha y hora actual",
        "aplicacion":"date"
    }
];

//lectura de comandos
//console.log(comandos[4].comando);
//
let index= null;


//querySelectoAll devuelve un Array
const botones = document.querySelectorAll('#botonconsola');



//funcion que obtiene el value de el boton al hacer clik para relacionarlo con un index del objeto comandos e
const clickbotonconsola = function (event){

       index = this.value;            
       mostrarcomando(index);
    
}

function nombrarbotones(){

    botones.forEach(boton=>{
        //capturo el value
        index = boton.value;
        //inserto texto en los botones de acuerdo al index de cada iteracion del bucle
        boton.innerHTML= comandos[index].nombre;
       
    });     
    
}

nombrarbotones();


//agrego listener a los botones
botones.forEach(boton =>{
    boton.addEventListener('click', clickbotonconsola);
    
});


//funcion que escribe los comandos 

function mostrarcomando(index) {      
   
    let comandoanimado = document.querySelector('#comando').outerHTML; 
    let descripcionanimada = document.querySelector('#descripcion').outerHTML;      
    document.querySelector('#descripcion').remove();
    document.querySelector('#comando').remove();
    document.querySelector('#descripciones').innerHTML=descripcionanimada;
    document.querySelector('#comandos').innerHTML= comandoanimado;
    comando= user + comandos[index].aplicacion;  
    descripcion= comandos[index].descripcion;         
    document.querySelector('#comando').innerHTML=comando;       
    document.querySelector('#descripcion').innerHTML=descripcion;
    
}


    

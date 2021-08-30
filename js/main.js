let user ="user:> ";
let comando;
let descripcion;
let aplicacion;

comandos = [

    {
        "nombre":"Apagar",
        "comando":"shutdown -h now",
        "descripcion":"apaga el sistema de forma inmediata.",
        "aplicacion":"shutdown -h now"
    },

    {
        "nombre":"Reiniciar",
        "comando":"reboot",
        "descripcion":"Reinia el sistema.",
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
        "descripcion":"Crear carpetas en el directori actual",
        "aplicacion":"mkdir nombredecarpeta"
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
 
    comando= user + comandos[index].aplicacion;    
    document.querySelector('#comando').innerHTML=comando;       

}


    

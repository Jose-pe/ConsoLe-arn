let user ="user:> ";
let comando;
let descripcion;
let aplicacion;

let comandos = [

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
        "descripcion":"Navegar entre carpetas.",
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
        "descripcion":"Borrar la carpeta con el nombre añadido en el comando.",
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
    },
    {
        "nombre":"Ruta actual",
        "comando":"pwd",
        "descripcion":"Muestra la ruta actual",
        "aplicacion":"pwd"        
    },
    {
        "nombre":"Crear fichero",
        "comando":"touch",
        "descripcion":"Crear un fichero index.html en la ruta /var/www/",
        "aplicacion":"touch var/www/index.html"        
    },
    {
        "nombre":"Buscar fichero",
        "comando":"find",
        "descripcion":"Buscar archivo por su nombre en el directorio actual.",
        "aplicacion":"find -name notas.txt"        
    },
    {
        "nombre":"Ver IP",
        "comando":"ip a",
        "descripcion":"Nos muestra informacion de nuestras interfaces de red.",
        "aplicacion":"ip a"        
    },
    {
        "nombre":"Ping",
        "comando":"ping",
        "descripcion":"Utilice ping para ver si un host está vivo.",
        "aplicacion":"ping 192.168.100.102"        
    },
    {
        "nombre":"Info de host",
        "comando":"host",
        "descripcion":"Utilice host para obtener informacion de un host.",
        "aplicacion":"host www.google.com"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Traceroute",
        "comando":"Traceroute",
        "descripcion":"Lista los hosts que han usado los paquetes para llegar a su destino.",
        "aplicacion":"traceroute www.google.com"        
    },
    {
        "nombre":"Route",
        "comando":"route",
        "descripcion":"Permite ver la ruta que usa nuestro equipo para conectarse a la red.",
        "aplicacion":"route -n"        
    },
    {
        "nombre":"Who",
        "comando":"who",
        "descripcion":"Nos permite ver a todos los usuarios que han iniciado sesión en el equipo.",
        "aplicacion":"who"        
    },
    {
        "nombre":"Lista de Procesos",
        "comando":"ps aux",
        "descripcion":"Utilice ps aux para obtener info. de los procesos que corre el host.",
        "aplicacion":"ps aux"        
    },
    {
        "nombre":"Estado de memoria",
        "comando":"free",
        "descripcion":"Utilice free para obtener info. de la memoria RAM y SWAP.",
        "aplicacion":"free",        
    },
    {
        "nombre":"Ultimos usuarios",
        "comando":"last",
        "descripcion":"Utilice last para obtener info. de últimos usuarios que han usado el sistema",
        "aplicacion":"last"        
    },
    {
        "nombre":"Espacio en discos",
        "comando":"df",
        "descripcion":"Utilice df para obtener info. de los discos duros.",
        "aplicacion":"df"        
    },
    {
        "nombre":"Inf. del Host",
        "comando":"uname",
        "descripcion":"Utilice uname para obtener info. del sistema operativo del host.",
        "aplicacion":"uname"        
    },
    {
        "nombre":"Directorios Grafic.",
        "comando":"tree",
        "descripcion":"Utilice tree para visualizar archivos y directorios de forma grafica.",
        "aplicacion":"tree"        
    },
    {
        "nombre":"Montar Disco",
        "comando":"mount",
        "descripcion":"Utilice mount + el nombre del disco para montar una unidad de disco",
        "aplicacion":"mount sda1"        
    },
    {
        "nombre":"Desmontar Disco",
        "comando":"unmount",
        "descripcion":"Utilice unmount + nombre del disco para desmontar una unidad de disco",
        "aplicacion":"unmount sba1"        
    },
    {
        "nombre":"Actualizar sistema",
        "comando":"apt-get-update",
        "descripcion":"Utilice apt-get-update para actualizar el sistema del host.",
        "aplicacion":"apt-get-update"        
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


//logica de menu de botones en DESK

function mostrarmenuredes(){

    let basicos = document.querySelectorAll('#basico')[0];
    basicos.style.display="none";
    let avanzados = document.querySelectorAll('#avanzado')[0];
    avanzados.style.display="none";

    let redes = document.querySelectorAll('#redes')[0];
    redes.style.display="flex";
//esto es para el menu movil
    let basicomovil = document.querySelectorAll('#basicomovil')[0];
    basicomovil.style.display="none";
    let avanzadomovil = document.querySelectorAll('#avanzadomovil')[0];
    avanzadomovil.style.display="none";

    let redesmovil = document.querySelectorAll('#redesmovil')[0];
    redesmovil.style.display="flex";

}
function mostrarbasicos(){
    let redes = document.querySelectorAll('#redes')[0];
    redes.style.display="none";
    let avanzados = document.querySelectorAll('#avanzado')[0];
    avanzados.style.display="none";

    let basicos = document.querySelectorAll('#basico')[0];
    basicos.style.display="flex";

    //esto es para el menu para movil
    let basicomovil = document.querySelectorAll('#basicomovil')[0];
    basicomovil.style.display="flex";

    let redesmovil = document.querySelectorAll('#redesmovil')[0];
    redesmovil.style.display="none";
    let avanzadomovil = document.querySelectorAll('#avanzadomovil')[0];
    avanzadomovil.style.display="none";
}

function mostraravanzados(){
    let redes = document.querySelectorAll('#redes')[0];
    redes.style.display="none";
    let basicos = document.querySelectorAll('#basico')[0];
    basicos.style.display="none";

    let avanzados= document.querySelectorAll('#avanzado')[0];
    avanzados.style.display="flex";

    //esto es para el menu para movil
    let avanzadomovil = document.querySelectorAll('#avanzadomovil')[0];
    avanzadomovil.style.display="flex";
    
    let redesmovil = document.querySelectorAll('#redesmovil')[0];
    redesmovil.style.display="none";
    let basicomovil = document.querySelectorAll('#basicomovil')[0];
    basicomovil.style.display="none";

    

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


    

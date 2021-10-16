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
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
    },
    {
        "nombre":"Estado de Red",
        "comando":"netstat",
        "descripcion":"Utilice netstat para obtener info. de conexiones salientes y entrantes de nuestro host.",
        "aplicacion":"netstat"        
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


//logica de menu de botones 

function mostrarmenuredes(){

    let basicos = document.querySelectorAll('#basico')[0];
    basicos.style.display="none";
    let avanzados = document.querySelectorAll('#avanzado')[0];
    avanzados.style.display="none";

    let redes = document.querySelectorAll('#redes')[0];
    redes.style.display="flex";

}
function mostrarbasicos(){
    let redes = document.querySelectorAll('#redes')[0];
    redes.style.display="none";
    let avanzados = document.querySelectorAll('#avanzado')[0];
    avanzados.style.display="none";

    let basicos = document.querySelectorAll('#basico')[0];
    basicos.style.display="flex";
}

function mostraravanzados(){
    let redes = document.querySelectorAll('#redes')[0];
    redes.style.display="none";
    let basicos = document.querySelectorAll('#basico')[0];
    basicos.style.display="none";

    let avanzados= document.querySelectorAll('#avanzado')[0];
    avanzados.style.display="flex";
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


    

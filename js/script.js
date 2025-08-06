const usuario = {
    nombre: "",
    mail: "",
    contraseña: "",
    puntos: 0
};
const usuarios = [];
function asignarPuntos(){
    let puntos = prompt("Por favor ingrese una cantidad de puntos solidaria");
    while(isNaN(puntos)){
        puntos = prompt("Por favor ingrese un dato numérico");
    }
    return puntos
}
/**
    * @param {string} nombre
    * @param {string} mail
    * @param {string} contraseña
    * @param {number} puntos
*/

function mostrarMensaje(nombre,mail,contraseña,puntos){
    window.alert(`Se a creado el usuario correctamente\nNombre: ${nombre}\nMail: ${mail}\nContraseña: ${contraseña}\nPuntos: ${puntos}`);
}
const boton = document.getElementById("ejecutar").addEventListener('click',()=>{
    usuario.nombre = document.getElementById('nombre').value;
    usuario.mail = document.getElementById('mail').value;
    usuario.contraseña = document.getElementById('contraseña').value;
    
    if(usuarios.find(usuarioLista => usuarioLista.nombre === usuario.nombre) != undefined || usuarios.find(usuarioLista => usuarioLista.mail === usuario.mail) != undefined){
        window.alert("Ya existe un usuario con ese nombre y/o mail");
    }else{
        let puntos = asignarPuntos();
        usuario.puntos = puntos;
        mostrarMensaje(usuario.nombre,usuario.mail,usuario.contraseña,usuario.puntos);
        usuarios.push({...usuario});
        usuario.nombre = "";
        usuario.mail = "";
        usuario.contraseña = "";
        usuario.puntos = "";
    } 

});


function mostrarUsuarios(){
    let mensaje = `Usuarios registrados: ${usuarios.length}\n`;
    for (let i = 0; i < usuarios.length; i++){
        mensaje += `\nUsuario ${i+1}\nUsuario: ${usuarios[i].nombre}\nMail: ${usuarios[i].mail}\nPuntos: ${usuarios[i].puntos}\n`;
    }
    window.alert(mensaje);
}

function eliminarUsuario(nombre){
    if(usuarios.length === 0){
        window.alert("No hay usuarios registrados para eliminar");
        return;
    }else if(usuarios.find(usuario =>usuario.nombre === nombre) == undefined){
        window.alert(`No existe un usuario con el nombre: "${nombre}"`);
        return;
    }else{
        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].nombre === nombre){
                usuarios.splice(i,1);
                window.alert(`El usuario ${nombre} fue eliminado correctamente`);
            }
        }
    }
}
function modificarUsuario(nombre){
    if(usuarios.length === 0){
        window.alert("No hay usuarios registrados para modificar");
        return;
    }else if(usuarios.find(usuario =>usuario.nombre === nombre) == undefined){
        window.alert(`No existe un usuario con el nombre "${nombre}"`);
        return;
    }else{
    let modificacion = false;
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nombre === nombre){
            nuevoPuntaje = prompt("Por favor ingrese el nuevo puntaje del usuario");
            while(isNaN(nuevoPuntaje)){
                nuevoPuntaje = prompt("Por favor ingrese un número válido");
            }
            usuarios[i].puntos = nuevoPuntaje;
            modificacion = true;
            window.alert(`Se cambió el puntaje viejo de ${nombre}. El nuevo puntaje es ${nuevoPuntaje}`);
        }}
        if(modificacion === false){
            window.alert(`El usuario ${nombre} no existe`);
        }
    }
}

botonMostrar = document.getElementById("usuarios").addEventListener('click',() =>{
    mostrarUsuarios();
})
botonModificar = document.getElementById("modificar").addEventListener('click',() =>{
    nombre = prompt("Por favor ingrese el nombre del usuario al que quiere modificarle los puntos: ")
    modificarUsuario(nombre);
})
botonEliminar = document.getElementById("eliminar").addEventListener('click',() =>{
    nombre = prompt("Por favor ingrese el nombre del usuario que quiere eliminar: ")
    eliminarUsuario(nombre);
})

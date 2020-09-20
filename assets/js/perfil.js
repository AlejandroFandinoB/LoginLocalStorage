/* perfil */
listaDeUsuarioSesion = []
listaDeUsuarioSesion = JSON.parse(localStorage.getItem('usuarios'));


// const nombre=listaDeUsuarioSesion[0].nombre
// const spanCoderName = document.getElementById("coderName");
// spanCoderName.innerText = nombre;

for (let i = 0; i < listaDeUsuarioSesion.length; i++) {
        const nombre=listaDeUsuarioSesion[i].nombre
        const spanCoderName = document.getElementById("coderName");
        spanCoderName.innerText = nombre; 
}

/* fin perfil */



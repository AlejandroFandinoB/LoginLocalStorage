
listaDeUsuarioSesion = []
listaDeUsuarioSesion = JSON.parse(localStorage.getItem('usuarios'))

const formularioSesion = document.getElementById('formularioSesion')
console.log(formularioSesion)


// login 

formularioSesion.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const email = document.getElementById('correo').value
    const password = document.getElementById('contrasenia').value
    console.log(email)
    console.log(password)

    for (let i = 0; i < listaDeUsuarioSesion.length; i++) {
        if (email == listaDeUsuarioSesion[i].correo && password == listaDeUsuarioSesion[i].contrasenia) {
            alert(email + ' está logeado!')
            const nombre=listaDeUsuarioSesion[i].nombre
            window.location.assign("../pages/perfil.html")
            break
        } else {
            alert('correo o contraseña incorrecta')
        }
    }

})

const asignarnombre = (nombre)=>{
    const prubombre = document.getElementById('pruebaNombre');
    prubNombre.innerText = nombre;
}




const formularioRegistro = document.getElementById('formularioRegistro');
// console.log(formularioRegistro)

listaDeUsuarios=[];

formularioRegistro.addEventListener('submit',(e)=>{
    e.preventDefault()

    const inputNombre = document.getElementById('name').value;
    const inputApellido = document.getElementById('lastName').value;
    const inputCorreo = document.getElementById("correo").value;
    const inputContrasenia = document.getElementById("contrasenia").value;
    
    /* declaracion de variables para validad los campos*/
    const alertaNombre=document.getElementById('validName')
    const alertaApellido=document.getElementById('validLastName')
    const alertaCorreo=document.getElementById('validCorreo')
    const alertaContrasenia=document.getElementById('validContrasenia')

    /* condicionales para validar los campos vacios */
    if(inputNombre == ''){
        alertaNombre.innerHTML = "Está vacio rellene el campo"
    }
    if(inputApellido == ''){
        alertaApellido.innerHTML = "Está vacio rellene el campo"
    }
    if(inputCorreo == ''){
        alertaCorreo.innerHTML = "Está vacio rellene el campo"
    }
    if(inputContrasenia == '' || inputContrasenia <=0){
        alertaContrasenia.innerHTML = "Está vacio o es un número negativo! rellene el campo"
    }
    if(inputNombre != '' && inputApellido !='' && inputCorreo != '' && inputContrasenia != '' ){
        
    /* se crea el objeto para los datos del artista */
    const usuario = {
        nombre: inputNombre,
        apellido: inputApellido,
        correo: inputCorreo,
        contrasenia: inputContrasenia
    }
    alert("Se registro!")
    
    /* se guarda el objeto en el LocalStorage */
    guardarEnLocalStorage(usuario)

    window.location.assign("../pages/iniciarSesion.html")
    
    }
})

const guardarEnLocalStorage = (usuario)=>{
    if(localStorage.getItem('usuarios')==null){
        listaDeUsuarios.push(usuario)
        const usuarioString = JSON.stringify(listaDeUsuarios)
        localStorage.setItem('usuarios', usuarioString)
    }else{
        listaEnStorage=JSON.parse(localStorage.getItem('usuarios'))
        listaEnStorage.push(usuario)
        const usuarioString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuarioString)
    }
}


// document.getElementById('btn_registro').addEventListener('click', ()=>{
//     window.location.assign("../pages/iniciarSesion.html")
// });
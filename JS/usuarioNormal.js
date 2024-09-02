const usuarioInvitado = JSON.parse(localStorage.getItem('usuariosRegistradoskey')) || [];
const perfil = document.getElementById("perfil");

if (listaUsuario){
    const nombreRegistrado = listaUsuario.find(listaUsuario => listaUsuario.nombreUsuario)
    if (nombreRegistrado){
        perfil.innerHTML = `<a  class="nav-link fs-5 d-inline-flex flex-row-reverse align-items-center" href="./pages/Erro404.html">
                            ${Administrador.nombreUsuario} <i class="bi bi-person-fill-check  pe-2 fs-2"></i>`
    }
}
const usuarioInvitado = JSON.parse(localStorage.getItem('usuariosRegistradoskey')) || [];
const perfilInvitado = document.getElementById("perfil");
const usuarioI = document.getElementById("listaUsuario")

const borrarInvitadoLocalStorage = () => {
    localStorage.removeItem('usuariosRegistradoskey');
    window.location.href = './index.html'
 }

if (JSON.parse(localStorage.getItem('usuariosRegistradoskey'))){
        perfilInvitado.innerHTML = `<a  class="nav-link fs-5 dropdown-toggle d-inline-flex flex-row-reverse align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="./pages/Erro404.html">
        ${usuarioInvitado.nombreUsuario} <i class="bi bi-person-fill-check  pe-2 fs-2"></i> </a>
        <ul class="dropdown-menu bg-black py-1 border-0 rounded-0">
  <li><a class="dropdown-item px-3" href="./pages/Erro404.html">Mi perfil</a></li>
  <li><button id="salirInvitado" class="dropdown-item px-3" >Salir de la cuenta</button></li>
    </ul>
        `
perfilInvitado.className = `nav-item me-3 d-none d-md-flex dropdown`
const salirInvitado = document.getElementById("salirInvitado")
        salirInvitado.addEventListener('click',borrarInvitadoLocalStorage)
        usuarioI.innerHTML = ` `
          
} 
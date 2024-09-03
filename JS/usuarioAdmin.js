const Administrador = JSON.parse(localStorage.getItem('Adminkey')) || [];
const perfil = document.getElementById("perfil");
const caracteristico = document.getElementById("listaAdmin")

const borrarAdminLocalStorage = () => {
    localStorage.removeItem('Adminkey');
    window.location.href = '../index.html'
 }

if (JSON.parse(localStorage.getItem('Adminkey'))){
        perfil.innerHTML = `<a  class="nav-link fs-5 dropdown-toggle d-inline-flex flex-row-reverse align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="./pages/Erro404.html">
                            ${Administrador.nombreUsuario} <i class="bi bi-person-fill-check  pe-2 fs-2"></i> </a>
                            <ul class="dropdown-menu bg-black py-1 border-0 rounded-0">
                      <li><a class="dropdown-item px-3" href="./pages/Erro404.html">Mi perfil</a></li>
                      <li><button id="salirAdmin" class="dropdown-item px-3" >Salir de la cuenta</button></li>
                        </ul>
                            `
        perfil.className = `nav-item me-3 d-none d-md-flex dropdown`
        const salirAdmin = document.getElementById("salirAdmin")
        salirAdmin.addEventListener('click',borrarAdminLocalStorage)
        caracteristico.innerHTML = `<a
                      class="nav-link active fs-5 me-3"
                      aria-current="page"
                      href="./pages/admin.html"
                      >Administrador</a>`
          
} 


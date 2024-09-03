document.addEventListener("DOMContentLoaded", () => {
    const STORED_ADMIN_EMAIL = "admin@gmail.com";
    const STORED_ADMIN_PASSWORD = "43499204a";

    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email1");
    const passwordInput = document.getElementById("contrasena");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        console.log("Email ingresado:", email);
        console.log("Contraseña ingresada:", password);

        if (email === STORED_ADMIN_EMAIL && password === STORED_ADMIN_PASSWORD) {
            console.log("Redirigiendo a la página del administrador...");
            window.location.href = "./admin.html"; // Verifica que esta ruta sea correcta
        } else {
            console.log("Buscando usuario en local storage...");

            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            const usuarioEncontrado = usuarios.find(u => u.email === email && u.password === password);

            if (usuarioEncontrado) {
                console.log("Usuario encontrado:", usuarioEncontrado);
                window.location.href = "../Index.html"; // Verifica que esta ruta sea correcta
            } else {
                console.log("Usuario no encontrado, mostrando mensaje de error.");
                alert("Usuario no encontrado. Verifica tus credenciales o regístrate.");
            }
        }
    });
});

(() => {
    const STORED_EMAIL = "juanperez@harddrive.com";
    const STORED_PASSWORD = "juan$Perez328";
  
    const form = document.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const navbar = document.querySelector(".navbar-nav");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  
    function init() {
      form.addEventListener("submit", handleLogin);
    }
  
    function handleLogin(event) {
      event.preventDefault();
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!validateEmail(email)) {
        showAlert("error", "Email inválido", "Por favor, ingrese un email válido.");
        emailInput.focus();
        return;
      }
  
      if (!validatePassword(password)) {
        showAlert(
          "error",
          "Contraseña inválida",
          "La contraseña debe tener entre 8 y 16 caracteres, incluyendo al menos una letra mayúscula, una minúscula, un número y un carácter especial."
        );
        passwordInput.focus();
        return;
      }
  
      if (isValidLogin(email, password)) {
        updateNavbarForLoggedInUser();
        showAlert("success", "¡Bienvenido!", "Has iniciado sesión correctamente.");
      } else {
        showAlert(
          "error",
          "Credenciales incorrectas",
          "Por favor, verifica tu email y contraseña."
        );
        resetForm();
      }
    }
  
    function validateEmail(email) {
      return emailRegex.test(email);
    }
  
    function validatePassword(password) {
      return passwordRegex.test(password);
    }
  
    function isValidLogin(email, password) {
      return email === STORED_EMAIL && password === STORED_PASSWORD;
    }
  
    function updateNavbarForLoggedInUser() {
      const loginLink = navbar.querySelector('a[href="../pages/login.html"]');
  
      if (loginLink) {
        loginLink.textContent = "Cerrar sesión";
        loginLink.href = "#";
        loginLink.classList.add("logout-link");
        loginLink.removeEventListener("click", handleLogin);
        loginLink.addEventListener("click", handleLogout);
      }
    }
  
    function handleLogout(event) {
      event.preventDefault();
      Swal.fire({
        icon: "info",
        title: "Cierre de sesión",
        text: "Has cerrado sesión exitosamente.",
        timer: 2000,
        showConfirmButton: false,
        didClose: () => {
          location.reload();
        },
      });
    }
  
    function resetForm() {
      form.reset();
      emailInput.focus();
    }
  
    function showAlert(icon, title, text) {
      Swal.fire({
        icon: icon,
        title: title,
        text: text,
      });
    }
  
    document.addEventListener("DOMContentLoaded", init);
  })();
  
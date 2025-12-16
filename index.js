


function validarForm(e) {

    const emailValido = "priscila@gmail.com";
    const passValida = "priscila02";
    
    const usrEmail = document.getElementById("ID_email").value.trim();
    const usrPsw = document.getElementById("ID_pass").value.trim();

    let esValido = true;

    if (usrEmail === "" && usrPsw === "") {
        mostrarError("empty_email", "El campo email no puede estar vacío");
        mostrarError("empty_psw", "El campo password no puede estar vacío");
        ocultarError("login_error");
        return false;
    }

    if (usrEmail.length < 1) {
        mostrarError("empty_email", "El campo email no puede estar vacío");
        esValido = false;
    } else {
        ocultarError("empty_email");
    }

    
    if (usrPsw.length < 1) {
        mostrarError("empty_psw", "El campo password no puede estar vacío");
        esValido = false;
    } else {
        ocultarError("empty_psw");
    }

    if (esValido) {
        if (emailValido !== usrEmail || passValida !== usrPsw) {
            mostrarError("login_error", "Las credenciales no son válidas");
            esValido = false;
        } else {
            ocultarError("login_error");
            alert("Bienvenido, ya puede pedir su turno!");
            document.getElementById("ID_form").reset();
        }
    }

    return esValido;
}

function mostrarError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + "_error");
    errorElement.textContent = "✖ " + message;
    errorElement.style.display = "block";
}


function ocultarError(fieldId) {
    const errorElement = document.getElementById(fieldId + "_error");
    errorElement.style.display = "none";
}


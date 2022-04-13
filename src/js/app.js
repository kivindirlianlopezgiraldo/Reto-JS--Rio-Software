let nombreUsuario = document.querySelector(".nombre");
let edadUsuario = document.querySelector('.edad');
let correoUsuario = document.querySelector('.correo');
let botonRegistro = document.querySelector('.boton-registro');
let saludo = document.querySelector('.saludo');

document.getElementById("crear").addEventListener("click", crear);
            document.getElementById("mostrar").addEventListener("click", mostrar);
            document.getElementById("modificar").addEventListener("click", modificar);
            document.getElementById("eliminar").addEventListener("click", eliminar);

            function crear() {
                sessionStorage.setItem("usuario", nombreUsuario.value);
            }

            function mostrar() {
                alert(sessionStorage.getItem("usuario"))
            }

            function modificar() {
                sessionStorage.setItem("usuario", "marko123");
            }

            function eliminar() {
                sessionStorage.removeItem("usuario");
            }








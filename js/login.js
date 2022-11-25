
const API = 'http://localhost:3000';

//ENVIA MENSAJE DE ERROR DE AUTENTICACION
function errore(){
    const div = document.querySelector("#error");
    div.textContent = "Error de autenticacion, ingrese su usuario y cotraseña correctamente.";
}

//BORRA EL CONTENIDO DE LOS INPUTS
function limpiarInputs() {
    document.getElementById('user').value = ""
    document.getElementById('password').value = ""
}

//LOGIN DE INGRESO A LA PLATAFORMA
function login() {

    var username = document.getElementById("user").value
    var password = document.getElementById("password").value
    
    const searchUser = async () => {
        try {
            const respuesta = await fetch(API + '/users/username/' + username, {
                method: 'GET',
                headers: new Headers({ 'Content-type': 'application/json' }),
                mode: 'cors'
            });
            const user_data = await respuesta.json();
            console.log(user_data)
            if (username == user_data[0].username && password == user_data[0].password) {
                // localStorage.setItem('dni', data_user[0].dni);
                // localStorage.setItem('name', data_user[0].name);
                // localStorage.setItem('surname', data_user[0].surname);
                // localStorage.setItem('date_of_brith', data_user[0].date_of_brith);
                // localStorage.setItem('date_of_admission', data_user[0].date_of_admission);
                // localStorage.setItem('username', data_user[0].username);
                // localStorage.setItem('teacher', data_user[0].teacher);
                // localStorage.setItem('admin', data_user[0].admin);
                var userdata = JSON.stringify(user_data[0]);
                localStorage.setItem('userdata', userdata);

                window.location.href = "/home.html";
            }
            else{
                limpiarInputs()
            }
        }
        catch (error) {
            limpiarInputs()
            errore()
            console.log(error)
        }
    }
    searchUser();
}






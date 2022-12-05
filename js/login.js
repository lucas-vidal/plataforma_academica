
const API = 'http://localhost:3000';

const string = localStorage.userdata;
var userdata = JSON.parse(string);

//ENVIA MENSAJE DE ERROR DE AUTENTICACION
function errorAutenticacion(){
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
            const respuesta = await fetch(API + '/users/dni/' + username, {
                method: 'GET',
                headers: new Headers({ 'Content-type': 'application/json' }),
                mode: 'cors'
            });
            const user_data = await respuesta.json();
            if (username == user_data[0].dni && password == user_data[0].password) {

                var userdata = JSON.stringify(user_data[0]);
                localStorage.setItem('userdata', userdata);

                var perfilActivo;
                localStorage.setItem('perfilAct', perfilActivo);

                var menuActivo;
                localStorage.setItem('menuActivo', menuActivo);

                var careerAct;
                localStorage.setItem('careerActual', careerAct);

                window.location.href = "/home.html";
            }
            else{
                limpiarInputs()
            }
        }
        catch (error) {
            limpiarInputs()
            errorAutenticacion()
            console.log(error)
        }
    }
    searchUser();
}

function redireccion() {
    var userdata;
    const string = localStorage.userdata;
    userdata = JSON.parse(string);
    console.log(localStorage.userdata)

    if (userdata != null) {
        window.location.href = "/home.html";
        console.log("loco")
    }
}


    // localStorage.setItem('dni', data_user[0].dni);
    // localStorage.setItem('name', data_user[0].name);
    // localStorage.setItem('surname', data_user[0].surname);
    // localStorage.setItem('date_of_brith', data_user[0].date_of_brith);
    // localStorage.setItem('date_of_admission', data_user[0].date_of_admission);
    // localStorage.setItem('username', data_user[0].username);
    // localStorage.setItem('teacher', data_user[0].teacher);
    // localStorage.setItem('admin', data_user[0].admin);

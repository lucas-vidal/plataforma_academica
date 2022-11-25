
    var userdata;
    const string = localStorage.userdata;
    userdata = JSON.parse(string);

    var alumno = '<li class="app-sidebar__heading">Alumno</li>'
    var docente = '<li class="app-sidebar__heading">Docente</li>'
    var administrador = '<li class="app-sidebar__heading">Administrador</li>'

    var home_act = '<li><a class="mm-active"><i class="metismenu-icon pe-7s-home"></i>Home</a></li>';
    var materias_act = '<li><a class="mm-active"><i class="metismenu-icon pe-7s-albums"></i>Materias</a></li>';
    var examenes_act = '<li><a class="mm-active"><i class="metismenu-icon pe-7s-note"></i>Examenes</a></li>';
    var calificaciones_act = '<li><a class="mm-active"><i class="metismenu-icon pe-7s-check"></i>Calificaciones</a></li>'; 
    var calendario_act = '<li><a class="mm-active"><i class="metismenu-icon pe-7s-date"></i>Calendario</a></li>';
    var notificaciones_act = '<li><a class="mm-active"><i class="metismenu-icon pe-7s-bell"></i>Notificaciones</a></li>'; 

    var home = '<li><a onclick="alumnoHomeAct()"><i class="metismenu-icon pe-7s-home"></i>Home</a></li>';
    var materias = '<li><a onclick="alumnoMateriasAct()"><i class="metismenu-icon pe-7s-albums"></i>Materias</a></li>';
    var examenes = '<li><a onclick="alumnoExamenesAct()"><i class="metismenu-icon pe-7s-note"></i>Examenes</a></li>';
    var calificaciones = '<li><a onclick="alumnoCalificacionesAct()"><i class="metismenu-icon pe-7s-check"></i>Calificaciones</a></li>'; 
    var calendario = '<li><a onclick="alumnoCalendarioAct()"><i class="metismenu-icon pe-7s-date"></i>Calendario</a></li>';
    var notificaciones = '<li><a onclick="alumnoNotificacionesAct()"><i class="metismenu-icon pe-7s-bell"></i>Notificaciones</a></li>'; 

function onloaded() {

    if (userdata == null) {
        window.location.href = "/index.html";
    }
    

    const name_surname = document.querySelector("#name_surname");
    name_surname.textContent = userdata.surname + ", " + userdata.name ;

    const dni = document.querySelector("#dni");
    dni.textContent = userdata.dni;

    menu_home();

}

//LOGOUT SALIDA DE LA PLATAFORMA
function logout() {
    localStorage.clear();
    window.location.href = "/index.html";
}

function menu_home() {

    if (userdata.admin == false && userdata.teacher == false) {
        alumnoHomeAct()
    }

    if (userdata.admin == false && userdata.teacher == true) {
        docenteHomeAct()
    }

    if (userdata.admin == true && userdata.teacher == false) {
        administradorHomeAct()
    }
}

function alumnoHomeAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = alumno + home_act +  materias + examenes + calificaciones + calendario + notificaciones;
}
function alumnoMateriasAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = alumno + home +  materias_act + examenes + calificaciones + calendario + notificaciones;
}
function alumnoExamenesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = alumno + home +  materias + examenes_act + calificaciones + calendario + notificaciones;
}
function alumnoCalificacionesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = alumno + home +  materias + examenes + calificaciones_act + calendario + notificaciones;
}
function alumnoCalendarioAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = alumno + home +  materias + examenes + calificaciones + calendario_act + notificaciones;
}
function alumnoNotificacionesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = alumno + home +  materias + examenes + calificaciones + calendario + notificaciones_act;
}


function docenteHomeAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = docente + home_act +  materias + examenes + calificaciones + calendario + notificaciones;
}
function docenteMateriasAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = docente + home +  materias_act + examenes + calificaciones + calendario + notificaciones;
}
function docenteExamenesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = docente + home +  materias + examenes_act + examenes + calendario + notificaciones;
}
function docenteCalificacionesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = docente + home +  materias + examenes + calificaciones_act + calendario + notificaciones;
}
function docenteCalendarioAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = docente + home +  materias + examenes + calificaciones + calendario_act + notificaciones;
}
function docenteNotificacionesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = docente + home +  materias + examenes + calificaciones + calendario + notificaciones_act;
}


function administradorHomeAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = administrador + home_act +  materias + examenes + calificaciones + calendario + notificaciones;
}
function administradorMateriasAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = administrador + home +  materias_act + examenes + calificaciones + calendario + notificaciones;
}
function administradorExamenesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = administrador + home +  materias + examenes_act + examenes + calendario + notificaciones;
}
function administradorCalificacionesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = administrador + home +  materias + examenes + calificaciones_act + calendario + notificaciones;
}
function administradorCalendarioAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = administrador + home +  materias + examenes + calificaciones + calendario_act + notificaciones;
}
function administradorNotificacionesAct() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = administrador + home +  materias + examenes + calificaciones + calendario + notificaciones_act;
}

    var userdata;
    const string = localStorage.userdata;
    userdata = JSON.parse(string);

    let perfilAct;
    var prf_alumno = '<li class="app-sidebar__heading">Alumno</li>'
    var prf_docente = '<li class="app-sidebar__heading">Docente</li>'
    var prf_administrador = '<li class="app-sidebar__heading">Administrador</li>'

    var menu_act_home = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-home"></i>Home</a></li>';
    var menu_act_materias = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-albums"></i>Materias</a></li>';
    var menu_act_examenes = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-note"></i>Examenes</a></li>';
    var menu_act_calificaciones = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-check"></i>Calificaciones</a></li>'; 
    var menu_act_calendario = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-date"></i>Calendario</a></li>';
    var menu_act_notificaciones = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-bell"></i>Notificaciones</a></li>'; 
    var menu_act_alumnos = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-study"></i>Alumnos</a></li>';
    var menu_act_docentes = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-users"></i>Docentes</a></li>';
    var menu_act_cuenta = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-user"></i>Cuenta</a></li>';
    var menu_act_actividadPractica = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-notebook"></i>Actividades Practicas</a></li>';


    var menu_home = '<li><a href="javascript:void(0)" onclick="homeAct()"><i class="metismenu-icon pe-7s-home"></i>Home</a></li>';
    var menu_materias = '<li><a href="javascript:void(0)" onclick="materiasAct()"><i class="metismenu-icon pe-7s-albums"></i>Materias</a></li>';
    var menu_examenes = '<li><a href="javascript:void(0)" onclick="examenesAct()"><i class="metismenu-icon pe-7s-note"></i>Examenes</a></li>';
    var menu_calificaciones = '<li><a href="javascript:void(0)" onclick="calificacionesAct()"><i class="metismenu-icon pe-7s-check"></i>Calificaciones</a></li>'; 
    var menu_calendario = '<li><a href="javascript:void(0)" onclick="calendarioAct()"><i class="metismenu-icon pe-7s-date"></i>Calendario</a></li>';
    var menu_notificaciones = '<li><a href="javascript:void(0)" onclick="notificacionesAct()"><i class="metismenu-icon pe-7s-bell"></i>Notificaciones</a></li>'; 
    var menu_alumnos = '<li><a href="javascript:void(0)" onclick="alumnosAct()"><i class="metismenu-icon pe-7s-study"></i>Alumnos</a></li>';
    var menu_docentes = '<li><a href="javascript:void(0)" onclick="docentesAct()"><i class="metismenu-icon pe-7s-users"></i>Docentes</a></li>';
    var menu_cuenta = '<li><a href="javascript:void(0)" onclick="cuentaAct()"><i class="metismenu-icon pe-7s-user"></i>Cuenta</a></li>';
    var menu_actividadPractica = '<li><a href="javascript:void(0)" onclick="actividadPracticaAct()"><i class="metismenu-icon pe-7s-notebook"></i>Actividades Practicas</a></li>';




//DATOS DE PERFIL
function perfil() {
    const name_surname = document.querySelector("#name_surname");
    name_surname.textContent = userdata.surname + ", " + userdata.name ;

    const dni = document.querySelector("#dni");
    dni.textContent = userdata.dni;

    if (userdata.admin == false && userdata.teacher == false) {
        const perfil = document.querySelector("#perfil");
        perfil.innerHTML =  prf_alumno;    
        perfilAct = "alumno"
    }
    if (userdata.admin == false && userdata.teacher == true) {
        const perfil = document.querySelector("#perfil");
        perfil.innerHTML =  prf_docente;   
        perfilAct = "docente"
    }
    if (userdata.admin == true && userdata.teacher == false) {
        const perfil = document.querySelector("#perfil");
        perfil.innerHTML =  prf_administrador;   
        perfilAct = "administrador" 
    }
}

//CARGA DATOS EN LA PAGINA AL INICIAR
function onload() {

    if (userdata == null) {
        window.location.href = "/index.html";
    }
    perfil();
    homeOnload(perfilAct)}

//LOGOUT SALIDA DE LA PLATAFORMA
function logout() {
    localStorage.clear();
    window.location.href = "/index.html";
}



//MENU SLIDEBAR
// function menu() {


// }

function homeOnload(perfil) {
    const menu = document.querySelector("#menu");    
    switch (perfil) {
        case "alumno":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =  menu_act_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_notificaciones
            break;

    }
}

function homeAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =  menu_act_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_notificaciones
            break;
    }
}

function alumnosAct() {
    const menu = document.querySelector("#menu");    
    menu.innerHTML =   menu_home + menu_act_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_notificaciones
}

function docentesAct() {
    menu.innerHTML =   menu_home + menu_alumnos + menu_act_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_notificaciones
}

function materiasAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_act_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_act_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_act_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_notificaciones
            break;
    }
}

function examenesAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_act_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_act_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_act_examenes + menu_actividadPractica + menu_calificaciones + menu_notificaciones
            break;
    }
}

function calificacionesAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_act_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_act_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_act_calificaciones + menu_notificaciones
            break;
    }
}

function calendarioAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_act_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_act_calendario + menu_notificaciones
            break;
    }
}

function notificacionesAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =  menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_act_notificaciones
            break;
        case "docente":
            menu.innerHTML =  menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_act_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_act_notificaciones
            break;
    }
}

function cuentaAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_notificaciones
            break;
    }
}

function actividadPracticaAct() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_act_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_act_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_act_actividadPractica + menu_calificaciones + menu_notificaciones
            break;
    }
}


// function alumnoHomeAct() {
//     menu.innerHTML =  menu_act_home +  menu_materias + menu_examenes + menu_calificaciones + menu_calendario + menu_notificaciones;
// }
// function alumnoMateriasAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML =  menu_home +  menu_act_materias + menu_examenes + menu_calificaciones + menu_calendario + menu_notificaciones;
// }
// function alumnoExamenesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = menu_home +  menu_materias + menu_act_examenes + calificaciones + calendario + notificaciones;
// }
// function alumnoCalificacionesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home +  alumnos + examenes + menu_act_calificaciones + calendario + notificaciones;
// }
// function alumnoCalendarioAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML =  home +  materias + examenes + calificaciones + menu_act_calendario + notificaciones;
// }
// function alumnoNotificacionesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home +  materias + examenes + calificaciones + calendario + menu_act_notificaciones;
// }


// function docenteHomeAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home_act +  materias + examenes + calificaciones + calendario + notificaciones;
// }
// function docenteMateriasAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home +  materias_act + examenes + calificaciones + calendario + notificaciones;
// }
// function docenteExamenesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home +  materias + examenes_act + examenes + calendario + notificaciones;
// }
// function docenteCalificacionesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home +  materias + examenes + calificaciones_act + calendario + notificaciones;
// }
// function docenteCalendarioAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home +  materias + examenes + calificaciones + calendario_act + notificaciones;
// }
// function docenteNotificacionesAct() {
//     const menu = document.querySelector("#menu");
//     return menu.innerHTML = home +  materias + examenes + calificaciones + calendario + notificaciones_act;
// }


// function administradorHomeAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home_act + alumnos + docentes +  materias + examenes + calificaciones + calendario + notificaciones;
// }
// function administradorAlumnosAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home + alumnos_act + docentes +  materias + examenes + calificaciones + calendario + notificaciones;
// }
// function administradorDocentesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home + alumnos + docentes_act +  materias + examenes + calificaciones + calendario + notificaciones;
// }
// function administradorMateriasAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home + alumnos + docentes +  materias_act + examenes + calificaciones + calendario + notificaciones;    

// }
// function administradorExamenesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home + alumnos + docentes +  materias + examenes_act + calificaciones + calendario + notificaciones;
// }
// function administradorCalificacionesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home + alumnos + docentes +  materias + examenes + calificaciones_act + calendario + notificaciones;
// }
// function administradorCalendarioAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home + alumnos + docentes +  materias + examenes + calificaciones + calendario_act + notificaciones;
// }
// function administradorNotificacionesAct() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = home + alumnos + docentes +  materias + examenes + calificaciones + calendario + notificaciones_act;
// }

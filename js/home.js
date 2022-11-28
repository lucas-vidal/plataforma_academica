
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
    menuHomeOnload(perfilAct)
    tituloHome()
}

//LOGOUT SALIDA DE LA PLATAFORMA
function logout() {
    localStorage.clear();
    window.location.href = "/index.html";
}

//MENU
function menuHomeOnload(perfil) {
    const menu = document.querySelector("#menu");    
    switch (perfil) {
        case "alumno":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =  menu_act_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}

function menuHome() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =  menu_act_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =  menu_act_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}
function menuAlumnos() {
    const menu = document.querySelector("#menu");    
    menu.innerHTML =   menu_home + menu_act_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
}
function menuDocentes() {
    menu.innerHTML =   menu_home + menu_alumnos + menu_act_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
}
function menuMaterias() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_act_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_act_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_act_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}
function menuExamenes() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_act_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_act_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_act_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}
function menuCalificaciones() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_act_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_act_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_act_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}
function menuCalendario() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_act_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_act_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_act_calendario + menu_notificaciones
            break;
    }
}
function menuNotificaciones() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =  menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_act_notificaciones
            break;
        case "docente":
            menu.innerHTML =  menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_act_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_act_notificaciones
            break;
    }
}
function menuCuenta() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}
function menuActividadPractica() {
    const menu = document.querySelector("#menu");    
    switch (perfilAct) {
        case "alumno":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_act_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "docente":
            menu.innerHTML =   menu_home + menu_materias + menu_examenes + menu_act_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
        case "administrador":
            menu.innerHTML =   menu_home + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_act_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}

//TITULOS
function tituloHome(){
    var icon = "home"
    var title = "Home"
    var description = "Aqui podras ver un resumen del estado de tu carrera."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloAlumnos(){
    var icon = "study"
    var title = "Alumnos"
    var description = "Aqui podras ver el listado de los alumnos de la plataforma."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloDocentes(){
    var icon = "users"
    var title = "Docentes"
    var description = "Aqui podras ver el listado de docentes de la plataforma."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloMaterias(){
    var icon = "albums"
    var title = "Materias"
    var description = "Aqui podras ver las materias."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloExamenes(){
    var icon = "note"
    var title = "Examenes"
    var description = "Aqui podras ver los examenes de las materias."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloActividadesPracticas(){
    var icon = "notebook"
    var title = "Actividades Practicas"
    var description = "Aqui podras ver las actividades practicas"
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloCalificaciones(){
    var icon = "check"
    var title = "Calificaciones"
    var description = "Aqui podras ver las calificaciones de las materias."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloCalendario(){
    var icon = "date"
    var title = "Calendario"
    var description = "Aqui podras ver el calendario academico."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}

function tituloNotificaciones(){
    var icon = "bell"
    var title = "Notificaciones"
    var description = "Aqui podras ver las notificaciones que recibas de los usuarios de la plataforma."
    tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    tit_str3 = title + '<div class="page-title-subheading">' 
    tit_str4 = description + '</div></div></div></div>'

    const titleTag = document.querySelector("#title");   
    titleTag.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4;
}




//FUNCIONALIDADES
function homeAct(){
    menuHome();
    tituloHome();
}

function alumnosAct(){ 
    menuAlumnos();
    tituloAlumnos();
}

function docentesAct(){
    menuDocentes();
    tituloDocentes();
}

function materiasAct(){
    menuMaterias();
    tituloMaterias();
}

function examenesAct(){
    menuExamenes()
    tituloExamenes();
}

function actividadPracticaAct(){
    menuActividadPractica();
    tituloActividadesPracticas();
}

function calificacionesAct(){
    menuCalificaciones();
    tituloCalificaciones();
}

function calendarioAct(){
    menuCalendario();
    tituloCalendario();
}

function notificacionesAct(){
    menuNotificaciones();
    tituloNotificaciones();
}



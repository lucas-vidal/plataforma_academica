
    var userdata;
    const string = localStorage.userdata;
    userdata = JSON.parse(string);
    const API = 'http://localhost:3000';
    var estado

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
    var menu_act_administradores = '<li><a href="javascript:void(0)" class="mm-active"><i class="metismenu-icon pe-7s-user"></i>Administradores</a></li>';
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
    var menu_administradores = '<li><a href="javascript:void(0)" onclick="administradoresAct()"><i class="metismenu-icon pe-7s-user"></i>Administradores</a></li>';
    var menu_alumnos = '<li><a href="javascript:void(0)" onclick="alumnosAct()"><i class="metismenu-icon pe-7s-study"></i>Alumnos</a></li>';
    var menu_docentes = '<li><a href="javascript:void(0)" onclick="docentesAct()"><i class="metismenu-icon pe-7s-users"></i>Docentes</a></li>';
    var menu_cuenta = '<li><a href="javascript:void(0)" onclick="cuentaAct()"><i class="metismenu-icon pe-7s-user"></i>Cuenta</a></li>';
    var menu_actividadPractica = '<li><a href="javascript:void(0)" onclick="actividadPracticaAct()"><i class="metismenu-icon pe-7s-notebook"></i>Actividades Practicas</a></li>';

    

//DATOS DE PERFIL
function perfil() {
    const name_surname = document.querySelector("#name_surname_prf");
    name_surname.textContent = userdata.surname + ", " + userdata.name ;

    const dni = document.querySelector("#dni_prf");
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
            menu.innerHTML =  menu_act_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
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
            menu.innerHTML =  menu_act_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
            break;
    }
}
function menuAdministradores() {    
    const menu = document.querySelector("#menu");    
    menu.innerHTML =   menu_home + menu_act_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
}
function menuAlumnos() {
    const menu = document.querySelector("#menu");    
    menu.innerHTML =   menu_home + menu_administradores + menu_act_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
}
function menuDocentes() {
    const menu = document.querySelector("#menu");    
    menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_act_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
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
            menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_docentes +  menu_act_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
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
            menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_act_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
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
            menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_act_calificaciones + menu_calendario + menu_notificaciones
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
            menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_act_calendario + menu_notificaciones
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
            menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_act_notificaciones
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
            menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
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
            menu.innerHTML =   menu_home + menu_administradores + menu_alumnos + menu_docentes +  menu_materias + menu_examenes + menu_act_actividadPractica + menu_calificaciones + menu_calendario + menu_notificaciones
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
function tituloAdministradores(){
    var icon = "user"
    var title = "Administradores"
    var description = "Aqui podras ver el listado de administradores de la plataforma."
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
    estado = "home"
    menuHome();
    tituloHome();
}

function administradoresAct(){ 
    estado = "administradores"
    menuAdministradores();
    tituloAdministradores();
    inputsUsuarios(1,0);
    tablaUsuarios();
    cargarDatosAdministradores();
}

function alumnosAct(){ 
    estado = "alumno"
    menuAlumnos();
    tituloAlumnos();
    inputsUsuarios(0,0);
    tablaUsuarios();
    cargarDatosAlumnos();
}

function docentesAct(){
    estado = "docente"
    menuDocentes();
    tituloDocentes();
    inputsUsuarios(0,1);
    tablaUsuarios();
    cargarDatosDocentes();
}

function materiasAct(){
    estado = "materias"
    menuMaterias();
    tituloMaterias();
}

function examenesAct(){
    estado = "examenes"
    menuExamenes();
    tituloExamenes();
}

function actividadPracticaAct(){
    estado = "actividad_practica"
    menuActividadPractica();
    tituloActividadesPracticas();
}

function calificacionesAct(){
    estado = "calificaciones"
    menuCalificaciones();
    tituloCalificaciones();
}

function calendarioAct(){
    estado = "calendario"
    menuCalendario();
    tituloCalendario();
}

function notificacionesAct(){
    estado = "notificaciones"
    menuNotificaciones();
    tituloNotificaciones();
}








function cargarDatosAlumnos(){
    const cargarDatosAlumnos = async () => {
        try {
            const respuesta = await fetch(API + '/users', );
            const usersdata = await respuesta.json();
            const alumnosdata = usersdata[0].filter(usersdata => usersdata.admin == false && usersdata.teacher == false);
            ordenarPorApellido(alumnosdata)
            alumnosdata.map((alumnodata) => tablaDatosUsuarios(alumnodata));
        }
        catch (error) {
            console.log(error)
        }
    }
    cargarDatosAlumnos();
}

function cargarDatosDocentes(){
    const cargarDatosDocentes = async () => {
        try {
            const respuesta = await fetch(API + '/users', );
            const usersdata = await respuesta.json();
            const alumnosdata = usersdata[0].filter(usersdata => usersdata.admin == false && usersdata.teacher == true);
            ordenarPorApellido(alumnosdata)
            alumnosdata.map((alumnodata) => tablaDatosUsuarios(alumnodata));
        }
        catch (error) {
            console.log(error)
        }
    }
    cargarDatosDocentes();
}

function cargarDatosAdministradores(){
    const cargarDatosAdministradores = async () => {
        try {
            const respuesta = await fetch(API + '/users', );
            const usersdata = await respuesta.json();
            const alumnosdata = usersdata[0].filter(usersdata => usersdata.admin == true && usersdata.teacher == false);
            ordenarPorApellido(alumnosdata)
            alumnosdata.map((alumnodata) => tablaDatosUsuarios(alumnodata));
        }
        catch (error) {
            console.log(error)
        }
    }
    cargarDatosAdministradores();
}





function inputsUsuarios(admin, teacher){
    var str01 = '<div class="row"><div class="col-md-12 align-middle"><div class="needs-validation" novalidate><div class="form-row">'
    var str02 = '<div class="col-md-3 mb-3"><input type="number" class="form-control" id="dni" placeholder="DNI" value="" required></div>'
    var str03 = '<div class="col-md-3 mb-3"><input type="text" class="form-control" id="surname" placeholder="Apellidos" required></div>'
    var str04 = '<div class="col-md-3 mb-3"><input type="text" class="form-control" id="name" placeholder="Nombres" required></div>'
    var str05 = '<div class="col-md-3 mb-3"><input type="text" class="form-control" id="password" placeholder="Password" required></div>'
    var str06 = '</div></div></div></div><div class="row">'
    var str07 = '<div class="col-md-12 align-middle"><div class="needs-validation" novalidate><div class="form-row">'
    var str08 = '<div class="col-md-1 mb-3"><p class="text-right">Fecha Nacimiento</p></div>'
    var str09 = '<div class="col-md-1 mb-3"><input type="number" class="form-control" id="dia1" placeholder="Dia" value="" required></div>'
    var str10 = '<div class="col-md-1 mb-3"><input type="number" class="form-control" id="mes1" placeholder="Mes" required></div>'
    var str11 = '<div class="col-md-1 mb-3"><input type="number" class="form-control" id="ano1" placeholder="Año" required></div>'
    var str12 = '<div class="col-md-1 mb-3"><p class="text-right">Fecha de Ingreso</p></div>'
    var str13 = '<div class="col-md-1 mb-3"><input type="number" class="form-control" id="dia2" placeholder="Dia" value="" required></div>'
    var str14 = '<div class="col-md-1 mb-3"><input type="number" class="form-control" id="mes2" placeholder="Mes" required></div>'
    var str15 = '<div class="col-md-1 mb-3"><input type="number" class="form-control" id="ano2" placeholder="Año" required></div>'
    var str16 = '<div class="col-md-4 mb-3"><div class="row">'
    var str17 = '<div class="col-md-4"><button onclick="agregarUsuario(' + teacher + ',' + admin + ')" class="btn btn-success" type="submit"style="width: 100%; font-size: 100%;">Agregar</button></div>'
    var str18 = '<div class="col-md-4" id="botonModificar"><button onclick="actualizarUsuario()" class="btn btn-primary"style="width: 100%; font-size: 100%;">Modificar</button></div>'
    var str19 = '<div class="col-md-4"><button onclick=limpiarInputs("dni","name","surname","password","dia1","mes1","ano1","dia2","mes2","ano2") class="btn btn-danger"type="submit" style="width: 100%; font-size: 100%;">Limpiar</button></div>'
    var str20 = '</div></div></div></div></div></div>'

    const titleTag = document.querySelector("#body1");   
    return titleTag.innerHTML =  str01 + str02 + str03 + str04 + str05 + str06 + str07 + str08 + str09 + str10 + str11 + str12 + str13 + str14 + str15 + str16 + str17 + str18 + str19 + str20;
}

function limpiarInputs(in1, in2, in3, in4, in5, in6, in7, in8, in9, in10) {
    document.getElementById(in1).value = ""
    document.getElementById(in2).value = ""
    document.getElementById(in3).value = ""
    document.getElementById(in4).value = ""
    document.getElementById(in5).value = ""
    document.getElementById(in6).value = ""
    document.getElementById(in7).value = ""
    document.getElementById(in8).value = ""
    document.getElementById(in9).value = ""
    document.getElementById(in10).value = ""
}

function tablaUsuarios(){
    var str01 = '<div class="col-md-12"><div class="main-card mb-3 card"><div class="table-responsive">'
    var str02 = '<table class="align-middle mb-0 table table-borderless table-striped table-hover"><thead><tr>'
    var str03 = '<th class="text-center bg-secondary text-white">DNI</th>'
    var str04 = '<th class="text-center bg-secondary text-white">Apellidos</th>'
    var str05 = '<th class="text-center bg-secondary text-white">Nombres</th>'
    var str06 = '<th class="text-center bg-secondary text-white">Fecha de Nacimiento</th>'
    var str07 = '<th class="text-center bg-secondary text-white">Fecha de Ingreso</th>'
    var str08 = '<th class="text-center bg-secondary text-white">Password</th>'
    var str09 = '<th class="text-center bg-secondary text-white">Modificar</th>'
    var str10 = '<th class="text-center bg-secondary text-white">Eliminar</th>'
    var str11 = '</tr></thead><tbody id="tabla1">'
    var str12 = '</tbody></table></div></div></div>'
    
    const titleTag = document.querySelector("#body2");   
    return titleTag.innerHTML =  str01 + str02 + str03 + str04 + str05 + str06 + str07 + str08 + str09 + str10 + str11 + str12 ;
}

function tablaDatosUsuarios(data){
    var str01 = '<tr><td class="text-center">' + data.dni + '</td>'
    var str02 = '<td class="text-center">' + data.surname + '</td>'
    var str03 = '<td class="text-center">' + data.name + '</td>'
    var str04 = '<td class="text-center">' + convertirStringData(data.date_of_brith) + '</td>'
    var str05 = '<td class="text-center">' + convertirStringData(data.date_of_admission) + '</td>'
    var str06 = '<td class="text-center">' + data.password + '</td>'
    var str07 = '<td class="text-center"><button onclick="cargarDatosEnInputs(' + data.dni + ')" class="btn-icon btn-icon-only btn btn-outline-success">'
    var str08 = '<i class="pe-7s-note btn-icon-wrapper"> </i></button></td>'
    var str09 = '<td class="text-center"><button onclick="eliminarUsuario(' + data.dni + ')" class="btn-icon btn-icon-only btn btn-outline-danger">'
    var str10 = '<i class="pe-7s-trash btn-icon-wrapper"></i></button></td>'
    var str11 = '</tr></tbody></table></div></div></div>'
    
    const titleTag = document.querySelector("#tabla1");   
    return titleTag.insertAdjacentHTML("afterbegin",  str01 + str02 + str03 + str04 + str05 + str06 + str07 + str08 + str09 + str10 + str11);   
}

function cargarDatosEnInputs(dni){
    const cargarDatosEnInputs = async () => {
        try {
            const respuesta = await fetch(API + '/users/dni/' + dni, {
                    method: 'GET',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors'
                });
            const userdata = await respuesta.json();
            var datatime_admission = convertirDataTimeInObjct(userdata[0].date_of_admission)
            var datatime_brith = convertirDataTimeInObjct(userdata[0].date_of_brith)

            document.getElementById("dni").value = userdata[0].dni
            document.getElementById("name").value = userdata[0].name
            document.getElementById("surname").value = userdata[0].surname
            document.getElementById("password").value = userdata[0].password
            document.getElementById("ano1").value = datatime_brith[2]
            document.getElementById("mes1").value = datatime_brith[1]
            document.getElementById("dia1").value = datatime_brith[0]
            document.getElementById("ano2").value = datatime_admission[2]
            document.getElementById("mes2").value = datatime_admission[1]
            document.getElementById("dia2").value = datatime_admission[0]
            document.getElementById("botonModificar").innerHTML = '<button onclick="actualizarUsuario(' + dni + ')" class="btn btn-primary"style="width: 100%; font-size: 100%;">Modificar</button>';
        } catch (error) {
            console.log(error)
        }
    }
    cargarDatosEnInputs();
}

function agregarUsuario(teacher, admin){
    var dni = document.getElementById("dni").value
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var password = document.getElementById("password").value
    var año1 = document.getElementById("ano1").value
    var mes1 = document.getElementById("mes1").value
    var dia1 = document.getElementById("dia1").value
    var año2 = document.getElementById("ano2").value
    var mes2 = document.getElementById("mes2").value
    var dia2 = document.getElementById("dia2").value
    var option = confirm("Desea agregar un usuario?");
    
    if (option == true) {
        const agregarUsuario = async () => {
            try {
                const respuesta = await fetch(API + '/users/', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(

                        {
                            "dni": dni,
                            "name": name,
                            "surname": surname,
                            "date_of_brith": año1 + '-' + mes1 + '-' + dia1 + 'T00:00:00.000Z',
                            "date_of_admission": año2 + '-' + mes2 + '-' + dia2 + 'T00:00:00.000Z',
                            "username": dni,
                            "password": password,
                            "teacher": teacher,
                            "admin": admin
                        })
                    }); 
                    limpiarInputs("dni","name","surname","password","dia1","mes1","ano1","dia2","mes2","ano2")
                    tablaUsuarios();
                    switch (estado) {
                        case "alumno":
                            cargarDatosAlumnos();
                            break;
                        case "docente":
                            cargarDatosDocentes();
                            break;
                        case "administradores":
                            cargarDatosAdministradores();
                            break;
                        default:
                            break;
                    }       
            } catch (error) {
                console.log(error)
            }
        }
        agregarUsuario();
    }
}

function actualizarUsuario(dni){
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var password = document.getElementById("password").value
    var dia1 = document.getElementById("dia1").value
    var mes1 = document.getElementById("mes1").value
    var año1 = document.getElementById("ano1").value
    var dia2 = document.getElementById("dia2").value
    var mes2 = document.getElementById("mes2").value
    var año2 = document.getElementById("ano2").value
    console.log(name)
    var option = confirm("Desea modificar este usuario?");
    if (option == true) {
    const actualizarUsuario = async () => {
        try {
            const respuesta = await fetch(API + '/users/' + dni, {
                    method: 'PUT',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors',
                    body: JSON.stringify(
                    {
                        "name": name,
                        "surname": surname,
                        "date_of_brith": año1 + '-' + mes1 + '-' + dia1 + 'T00:00:00.000Z',
                        "date_of_admission": año2 + '-' + mes2 + '-' + dia2 + 'T00:00:00.000Z',
                        "password": password
                   })
                });
                limpiarInputs("dni","name","surname","password","dia1","mes1","ano1","dia2","mes2","ano2")
                tablaUsuarios();
                switch (estado) {
                    case "alumno":
                        cargarDatosAlumnos();
                        break;
                    case "docente":
                        cargarDatosDocentes();
                        break;
                    case "administradores":
                        cargarDatosAdministradores();
                        break;
                    default:
                        break;
                }
        } catch (error) {
            console.log(error)
        }
    }
    actualizarUsuario();
    }
}

function eliminarUsuario(dni) {
    var option = confirm("Desea eliminar este usuario?");
    if (option == true) {
        const eliminarUsuario = async () => {
            try {
                const respuesta = await fetch(API + '/users/' + dni, {
                    method: 'DELETE',
                    headers: { 'Content-type': 'application/json' }
                })
                tablaUsuarios();
                switch (estado) {
                    case "alumno":
                        cargarDatosAlumnos();
                        break;
                    case "docente":
                        cargarDatosDocentes();
                        break;
                    case "administradores":
                        cargarDatosAdministradores();
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log(error)
            };
        }
        eliminarUsuario();
    }

}


































































////////AUXILARES///////////


function convertirStringData(dataTime){
    let dateString = dataTime
    , reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
    , [, year, month, day] = reggie.exec(dateString)
    , dateObject = day + "-" + month + "-" + year ;
    return dateObject
}

function convertirStringDataTime(dataTime){
    let dateString = dataTime
    , reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
    , [, year, month, day, hours, minutes, seconds] = reggie.exec(dateString)
    , dateObject = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    return dateObject
}

function convertirDataTimeInObjct(dataTime){
    let dateString = dataTime
    , reggie = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
    , [, year, month, day] = reggie.exec(dateString)
    , dateObject = [day, month, year];
    return dateObject
}

function ordenarPorApellido(data){
    data.sort(function (a, b) {
    if (a.surname < b.surname) {
      return 1;
    }
    if (a.surname > b.surname) {
      return -1;
    }
    return 0;
  });
}
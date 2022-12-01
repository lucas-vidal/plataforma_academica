
    var userdata;
    const string = localStorage.userdata;
    userdata = JSON.parse(string);
    const API = 'http://localhost:3000';

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
    inputsUsuarios();
    tablaUsuarios()
    cargarDatosAlumnos()
}

function docentesAct(){
    menuDocentes();
    tituloDocentes();
    inputsUsuarios();
    tablaUsuarios()
    cargarDatosDocentes()
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




function inputsUsuarios(){
    var str01 = '<div class="row"><div class="col-md-12 align-middle"><div class="needs-validation" novalidate><div class="form-row">'
    var str02 = '<div class="col-md-3 mb-3"><input type="number" class="form-control" id="dni" placeholder="DNI" value="" required></div>'
    var str03 = '<div class="col-md-3 mb-3"><input type="text" class="form-control" id="name" placeholder="Apellidos" required></div>'
    var str04 = '<div class="col-md-3 mb-3"><input type="text" class="form-control" id="surname" placeholder="Nombres" required></div>'
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
    var str17 = '<div class="col-md-4"><button onclick="agregarUsuario()" class="btn btn-success" type="submit"style="width: 100%; font-size: 100%;">Agregar</button></div>'
    var str18 = '<div class="col-md-4" id="botonModificar"><button onclick="actualizarUsuario()" class="btn btn-primary"style="width: 100%; font-size: 100%;">Modificar</button></div>'
    var str19 = '<div class="col-md-4"><button onclick="limpiarInputs("dni","name","surname")" class="btn btn-danger"type="submit" style="width: 100%; font-size: 100%;">Limpiar</button></div>'
    var str20 = '</div></div></div></div></div></div>'

    const titleTag = document.querySelector("#body1");   
    return titleTag.innerHTML =  str01 + str02 + str03 + str04 + str05 + str06 + str07 + str08 + str09 + str10 + str11 + str12 + str13 + str14 + str15 + str16 + str17 + str18 + str19 + str20;
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
    var str07 = '<td class="text-center"><button onclick="modificarUsuario(' + data.dni + ')" class="btn-icon btn-icon-only btn btn-outline-success">'
    var str08 = '<i class="pe-7s-note btn-icon-wrapper"> </i></button></td>'
    var str09 = '<td class="text-center"><button onclick="eliminarUsuario(' + data.dni + ')" class="btn-icon btn-icon-only btn btn-outline-danger">'
    var str10 = '<i class="pe-7s-trash btn-icon-wrapper"></i></button></td>'
    var str11 = '</tr></tbody></table></div></div></div>'
    
    const titleTag = document.querySelector("#tabla1");   
    return titleTag.insertAdjacentHTML("afterbegin",  str01 + str02 + str03 + str04 + str05 + str06 + str07 + str08 + str09 + str10 + str11);   
}

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

function eliminarUsuario(dni){
    var option = confirm("Desea eliminar este usuario?");
    if (option == true) {
            const eliminarUsuario = async () => {
        try {
            const respuesta = await fetch(API + '/users/' + dni, {
                    method: 'DELETE',
                    headers: {'Content-type': 'application/json'}
                })

        } catch (error) {
            console.log(error)
        };
}
eliminarUsuario();
	} 

}

function actualizarUsuario(dni){
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var password = document.getElementById("pasword").value
    var dia1 = document.getElementById("dia1").value
    var mes1 = document.getElementById("mes1").value
    var año1 = document.getElementById("año1").value
    var dia2 = document.getElementById("dia2").value
    var mes2 = document.getElementById("mes2").value
    var año2 = document.getElementById("año2").value
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
        } catch (error) {
            console.log(error)
        }
    }
    actualizarUsuario();
}
}






//BOTON MODIFICAR EN LISTADO DE PROVEEDORES
function modificarUsuario(dni){
    const cargarUnProveedorEnInputs = async () => {
        try {
            const respuesta = await fetch(API + '/users/' + dni, {
                    method: 'GET',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors'
                });
            const userdata = await respuesta.json();
            const datatime_admission = convertirDataTimeInObjct(userdata.date_of_admission)
            const datatime_brith = convertirDataTimeInObjct(userdata.date_of_brith)


            document.getElementById("dni").value = userdata[0].dni
            document.getElementById("name").value = userdata[0].name
            document.getElementById("surname").value = userdata[0].surname
            document.getElementById("password").value = userdata[0].password
            document.getElementById("año1").value = datatime_brith.año
            document.getElementById("mes1").value = datatime_brith.año
            document.getElementById("dia1").value = datatime_brith.año
            document.getElementById("año2").value = datatime_admission.año
            document.getElementById("mes3").value = datatime_admission.mes
            document.getElementById("dia4").value = datatime_admission.dia
            document.getElementById("botonModificar").innerHTML = '<button onclick="actualizarUsuario(' + dni + ')" class="btn btn-primary"style="width: 100%; font-size: 100%;">Modificar</button>';


            // cargarDatosAlumnos()





        } catch (error) {
            console.log(error)
        }
    }
    cargarUnProveedorEnInputs();
}

// function actu1() {
//     $(document).ready(function () {
//         $("#body1").location.reload();;
//     });
// }
// function actu2() {

//     $(function () {

//         $("#body2").location.reload(cargarDatosAlumnos());

//     });
// }



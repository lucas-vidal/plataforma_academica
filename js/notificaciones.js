
export default function notificationsTitle(){
    var icon = "bell"
    var title = "Notificaciones"
    var description = "Aqui podras ver las notificaciones que recibas de los usuarios de la plataforma."
    var tit_str1 = '<div class="page-title-wrapper"><div class="page-title-heading"><div class="page-title-icon"><i class="pe-7s-' 
    var tit_str2 = icon + ' icon-gradient bg-mean-fruit"></i></div><div>' 
    var tit_str3 = title + '<div class="page-title-subheading">' 
    var tit_str4 = description + '</div></div></div></div>'

    const menu = document.querySelector("#title");   
    menu.innerHTML =  tit_str1 + tit_str2 + tit_str3 + tit_str4
 
}


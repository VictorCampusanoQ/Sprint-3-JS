var titulo_h1 = document.querySelector('h1');
//document.write(titulo_h1);
//document.getElementById("fecha").innerHTML = ("Fecha: "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" y son las " + d.getHours() + " horas " + d.getMinutes() + " minutos " + d.getSeconds() + " segundos"); 

let fecha = new Date();

dia = fecha.getDate();
mes = fecha.getMonth();
anio = fecha.getFullYear();
hora = fecha.getHours();
minutos = fecha.getMinutes();
segundos = fecha.getSeconds();

dia_semana = fecha.getDay();

switch (dia_semana) {
    case 0:
        lu_do = "domingo";
        break;
    case 1:
        lu_do = "lunes";
        break;
    case 2:
        lu_do = "martes";
        break;
    case 3:
        lu_do = "miércoles";
        break;
    case 4:
        lu_do = "jueves";
        break;
    case 5:
        lu_do = "viernes";
        break;
    case 6:
        lu_do = "sábado";
        break;

}
//El método getMonth() devuelve el mes de la fecha especificada. Un punto a tener en cuenta acerca del método getMonth() 
//es que devuelve valores indexados (0-11) donde el 0 es enero y el 11 es diciembre. Por tanto, añadiéndole 1 normalizamos el valor del mes.

switch (mes) {
    case 0:
        mesf = "enero";
        break;
    case 1:
        mesf = "febrero";
        break;
    case 2:
        mesf = "marzo";
        break;
    case 3:
        mesf = "abril";
        break;
    case 4:
        mesf = "mayo";
        break;
    case 5:
        mesf = "junio"
        break;
    case 6:
        mesf = "julio";
        break;
    case 7:
            mesf = "agosto";
            break;
    case 8:
            mesf = "septiembre";
            break;
    case 9:
            mesf = "octubre";
            break;
    case 10:
            mesf = "noviembre";
            break;
    case 11:
            mesf = "diciembre";
            break;
}

document.getElementById("fecha").innerHTML = ("Hoy es " + lu_do + " " + dia + " de " + (mesf) + " de " + anio + ", y son las " + hora + " horas, " + minutos + " minutos, con " + segundos + " segundos");
//document.write("Hoy es " + lu_do + " " + dia + " de " + (mesf) + " de " + anio + ", y son las " + hora + " horas, " + minutos + " minutos, con " + segundos + " segundos");

document.write("<br>");
document.write("<br>");
document.write("<hr>");
document.write("<hr>");
document.write("<hr>");
document.write("<br>");
document.write("<br>");


    let fecha1 = new Date();
    let fecha2 = new Date('2022/12/31');

    let resta = fecha2.getTime() - fecha1.getTime();

    let dias_t = ((((resta/1000)/60)/60)/24); 
    let dias_f = Math.trunc(dias_t); 
    let horas_t = ((dias_t - dias_f )*24);   
    let horas_f = Math.trunc(horas_t);  
    let min_t = ((horas_t - horas_f)*60);  
    let min_f = Math.trunc(min_t);  
    let seg_t = ((min_t - min_f)*60);  
    let seg_f = Math.trunc(seg_t); 

    //document.write("Quedan " + dias_f + " dias, " + (horas_f+1) + " horas, " + min_f + " minutos y " + seg_f + " segundos, para finalizar el año 2022");
    document.getElementById("falta").innerHTML = ("Quedan " + dias_f + " dias, " + (horas_f+1) + " horas, " + min_f + " minutos y " + seg_f + " segundos, para finalizar el año 2022");


alert("Quedan " + dias_f + " dias, " + (horas_f+1) + " horas, " + min_f + " minutos y " + seg_f + " segundos, para finalizar el año 2022");
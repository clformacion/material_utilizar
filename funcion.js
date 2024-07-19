function ventas(){
const java=7500;
const python=6000;
const C=5000;
const php=3500;
var valor1=0;

valor1=prompt("cantidad de ventas del dia");
let curso;
   curso=prompt("que curso vendio: java, python, C++, PHP");
   switch(curso){
       case "java":
        document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "VENTAS BRUTAS TOTAL DE JAVA: " + java*valor1 + "<br>"+ "TOTAL IVA "+ ((java*valor1)*0.21) + "<br>"+ "TOTAL VENTAS   "+ ((Number(java)*Number(valor1)*0.21)+ Number(java)*Number(valor1)) + "</h4>"
        break;
       case "python":
        document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "VENTAS BRUTAS TOTAL DE PYTHON: " + python*valor1 + "<br>"+ "TOTAL IVA "+ ((python*valor1)*0.21) + "<br>"+ "TOTAL VENTAS   "+ ((Number(java)*Number(valor1)*0.21)+ Number(java)*Number(valor1)) + "</h4>"
        break;
     
        case "C":
            document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "VENTAS BRUTAS TOTAL DE C: " + C*valor1 + "<br>"+ "TOTAL IVA "+ ((C*valor1)*0.21) + "<br>"+ "TOTAL VENTAS   "+ ((Number(C)*Number(valor1)*0.21)+ Number(C)*Number(valor1)) + "</h4>"
            break;  

            case "php":
                document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "VENTAS BRUTAS TOTAL DE PHP: " + php*valor1 + "<br>"+ "TOTAL IVA "+ ((php*valor1)*0.21) + "<br>"+ "TOTAL VENTAS   "+ ((Number(php)*Number(valor1)*0.21)+ Number(php)*Number(valor1)) + "</h4>"
                break;  
                 
                default:
                  document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" +"curso no disponible" + "</h4>"
                
   }

}

function caja(){
    const fondo=300;
    var caja=0;

 caja=prompt("cuales son tus gastos hoy: ");
 if(caja<300){
    document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "TUS GASTOS FUERON:" + caja + "<br>"+ "TU FONDO DE CAJA ES: " + (fondo-caja)+"</h4>";
 }else{
    document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "TUS GASTOS FUERON:" + caja + "<br>"+ "TIENES UN FONDO NEGATIVOS: " + (fondo-caja)+"</h4>"; 
 }
}


function inscripcion(){

    const java=100;
const python=100;
const C=200;
const php=150;
    var diario=0
    var diario2=0;
    var diario3=0;
    var diario4=0;
    var pendiente=0;
    var hoy;
    var total;
    

    diario = prompt("inscripcion de java:");
    diario2 = prompt("inscripcion de python:");
    diario3 = prompt("inscripcion de C:");
    diario4 = prompt("inscripcion de python:");
    pendiente=prompt("total pago por pagar");

 
 //pendiete; seria igual una const de preincripcion el programa imprimira el total

    curso=prompt("elija el total, cxp")
   switch (curso) {
       case "total":
           document.getElementById("demo").innerHTML="<h4 style='text-align: center'>" +"pago de Java: " +((Number(java)*diario ))+ "<br>" + "pago de python: " + (Number(python)* diario2)  + "<br>" + "pago de C: " +  (Number(C)* diario3 )  + "<br>" + "pago de php: "  + (Number(php)* diario3) +  "<br>" + "TOTAL INSCRIPCION: " +(( Number(java)*diario )  + Number(python)* diario2  + Number(C)* diario3  + Number(php)*diario3)  +  "</h4>" ;
        
           break;
       case "cxp":
           document.getElementById("demo").innerHTML= "<h4 style='text-align: center'>" + pendiente+  "</h4>" ;
           break;
       ;
       default:
           document.getElementById("demo").innerHTML= "CURSO NO DISPONIBLE";
   }

}


function fijos(){
 const alquiler=500;
 const fondo=2000;
 const patente= 300;
 const autonomo= 280;
 var gastos_fijo=0
 var total=0;


 alert("tus gastos fijos son: 1080");

 gastos_fijo= prompt("desea agregar otro gasto fijo de este mes: ")

 total=(Number(alquiler)+Number(patente)+Number(autonomo))

 if(gastos_fijo<2000){
    document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "TUS GASTOS FUERON:" + gastos_fijo + "<br>"+ "TU TOTAL GASTO ES : " + (Number(gastos_fijo)+Number(total))+ "<br>"+ "TU FONDO DE GASTO ES :  " + (fondo - (Number(gastos_fijo)+Number(total))) +"</h4>";
 }else{
    document.getElementById("demo").innerHTML="<h4 style='text-align:center'>" + "TUS GASTOS FUERON:" + caja + "<br>"+ "TIENES UN FONDO NEGATIVOS: " + (fondo-caja)+"</h4>"; 
 }
}

function variable(){

var material=0;
var utensilio=0;
var varios;
var total;
var porcentaje;


material=prompt("gastos en materiales: ");
utensilio=prompt("gastos en utensilio: ");
varios=prompt("gastos en varios: ");

total=(Number(material)+Number(utensilio)+Number(varios));
alert(" TU GASTOS VARIABLES SON " + total);
porcentaje=(total*0.15)/100;
alert( "Tienes un porcentaje de gasto es: " +porcentaje + "%" );







}










































































/*
function caja(){
const fondo= 300;
var caja=0;

caja= prompt("cuales son tus gastos hoy;");

if(caja<300){
    document.getElementById("demo").innerHTML= "<h4 style='text-align:center'>"+"TUS GASTOS FUERON " + caja + "<br>" +"TUS FONDO DE CAJA ES:"+(fondo-caja) + "</h4>";
}else{
    document.getElementById("demo").innerHTML= "<h4 style='text-align:center'>"+"TUS GASTOS FUERON " + caja + "<br>" +"TIENEN UN FALTANTE DE:"+(fondo-caja)+ "</h4>";
}

}


function inscripcion(){

    const java=100;
const python=100;
const C=200;
const php=150;
    var diario=0
    var diario2=0;
    var diario3=0;
    var diario4=0;
    var pendiente=0;
    var hoy;
    var total;
    
    diario = prompt("inscripcion de java:");
    diario2 = prompt("inscripcion de python:");
    diario3 = prompt("inscripcion de C:");
    diario4 = prompt("inscripcion de python:");
    pendiente=prompt("total pago por pagar");

    curso=prompt("elija el total, cxp")
   switch (curso) {
       case "total":
           document.getElementById("demo").innerHTML="<h4 style='text-align: center'>" +"pago de Java: " +(Number(java)  + Number(java)*diario )+ "<br>" + "pago de python: " +(Number(python)  + Number(python)* diario2 ) + "<br>" + "pago de C: " +(Number(C)  + Number(C)* diario3 )  + "<br>" + "pago de php: " +(Number(php)  + Number(php)* diario3 )+  "<br>" + "TOTAL INSCRIPCION: " +( (Number(java)  + Number(java)*diario )+ (Number(python)  + Number(python)* diario2 )+(Number(C)  + Number(C)* diario3 )+(Number(php)  + Number(php)* diario3 ))  +  "</h4>" ;
        
           break;
       case "cxp":
           document.getElementById("demo").innerHTML= "<h4 style='text-align: center'>" +  "TOTAL INSCRIPCION: " +( (Number(java)  + Number(java)*diario )+ (Number(python)  + Number(python)* diario2 )+(Number(C)  + Number(C)* diario3 )+(Number(php)  + Number(php)* diario3 ))  +  "</h4>" ;
           break;
       ;
       default:
           document.getElementById("demo").innerHTML= "CURSO NO DISPONIBLE";
   }



}


function pago(){
    var pepeleria=0;
    var materiales=0;
    var varios=0;
    var total=0;
    const fondo=300;


    pepeleria=prompt("tus gastos en papeleria: ");
    materiales=prompt("tus gastos en materiales: ");
    varios=prompt("tus gastos varios: ");
    total=(Number(pepeleria)+Number(materiales)+Number(varios))
    document.getElementById("demo").innerHTML= "<h4 style='text-align: center'>" +  "TOTAL PAGOS DIA: "+ total + "</br>" + "TU FONDO DE CAJA ES: "+ (fondo-total)+"</h4>" ;

}


function fijos(){
   const alquiler=900;
   const patente=400;
   const autonomo=300;
   
   var fijos;
   fijos=( Number(alquiler)+Number(patente)+Number(autonomo));
   alert("TU ALQUILER ES: 900, TU PANTENTE ES: 400; AUTONOMO ES: 300");
   document.getElementById("demo").innerHTML= "<h4 style='text-align: center'>" +  "TOTAL GASTOS FIJOS : "+fijos+ "</h4>" ; 

}

*/





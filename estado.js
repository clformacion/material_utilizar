function estado(){
    var fecha;
   
    var concepto;
    var und;
    var costo;
    var gasto;
    var importe;
    var saldo;
    var total;

    lunes= prompt("fecha lunes");
    concepto= prompt("concepto ");
    und=prompt("cantidad vendidas")
    costo= prompt("costo");
    gasto=prompt("gastos del dia")

    importe=und*costo;
    saldo=importe-gasto
    document.getElementById("demo").innerHTML= lunes;
    document.getElementById("demo2").innerHTML= concepto;
    document.getElementById("demo3").innerHTML= und
    document.getElementById("demo4").innerHTML= costo;
    document.getElementById("demo5").innerHTML= gasto;
    document.getElementById("demo6").innerHTML= importe;
    document.getElementById("demo7").innerHTML= saldo;

}


function martes(){
    martes4= prompt("fecha martes");
    concepto2= prompt("concepto ");
    und2=prompt("cantidad vendidas")
    costo2= prompt("costo");
    gasto2=prompt("gastos del dia")

    importe2=und2*costo2;
    saldo2=importe2-gasto2
    document.getElementById("demo8").innerHTML= martes4;
    document.getElementById("demo9").innerHTML= concepto2;
    document.getElementById("demo10").innerHTML= und2
    document.getElementById("demo11").innerHTML= costo2;
    document.getElementById("demo12").innerHTML= gasto2;
    document.getElementById("demo13").innerHTML= importe2;
    document.getElementById("demo14").innerHTML= saldo2;


}


function miercoles(){
    miercoles3= prompt("fecha miercoles");
    concepto3= prompt("concepto ");
    und3=prompt("cantidad vendidas")
    costo3= prompt("costo");
    gasto3=prompt("gastos del dia")

    importe3=und3*costo3;
    saldo3=importe3-gasto3
    document.getElementById("demo15").innerHTML= miercoles3;
    document.getElementById("demo16").innerHTML= concepto3;
    document.getElementById("demo17").innerHTML= und3
    document.getElementById("demo18").innerHTML= costo3;
    document.getElementById("demo19").innerHTML= gasto3;
    document.getElementById("demo20").innerHTML= importe3;
    document.getElementById("demo21").innerHTML= saldo3;


}


function jueves(){
    jueves2= prompt("fecha jueves");
    concepto2= prompt("concepto ");
    und2=prompt("cantidad vendidas")
    costo2= prompt("costo");
    gasto2=prompt("gastos del dia")

    importe4=und4*costo4;
    saldo4=importe4-gasto4
    document.getElementById("demo22").innerHTML= jueves2;
    document.getElementById("demo23").innerHTML= concepto4;
    document.getElementById("demo24").innerHTML= und4;
    document.getElementById("demo25").innerHTML= costo4;
    document.getElementById("demo26").innerHTML= gasto4;
    document.getElementById("demo27").innerHTML= importe4;
    document.getElementById("demo28").innerHTML= saldo4;


}

function viernes(){
    viernes2= prompt("fecha viernes");
    concepto5= prompt("concepto ");
    und5=prompt("cantidad vendidas")
    costo5= prompt("costo");
    gasto5=prompt("gastos del dia")

    importe5=und5*costo5;
    saldo5=importe5-gasto5
    document.getElementById("demo29").innerHTML= viernes2;
    document.getElementById("demo30").innerHTML= concepto2;
    document.getElementById("demo31").innerHTML= und2
    document.getElementById("demo32").innerHTML= costo2;
    document.getElementById("demo33").innerHTML= gasto2;
    document.getElementById("demo34").innerHTML= importe2;
    document.getElementById("demo35").innerHTML= saldo;


}




//una estafa piramidal  con 6 inversores da el 7% de interes a cada uno cada 7 dias, seria bueno saber cuanto dinero deberian darle a sus inversores por diferentes cantidades de semanas si estos reinvierten cada semana el total mas el interes que ganaron y que a eso se les valla sumando la nueva inversion
/* pasos
1. hacerlo con un solo inversor
2. ver cuanto gana ese inversor en una semana respecto al monto que invirtio 
3poder saber que porcentage de ganancia hubo desde el primer deposito al ultimo en porcentaje
4poder saber cuanto porsentaje se invirtio de dinero del primer deposito al tercero*/
/* cuales fueron las variaciones de inversiones respecto a las anteriores? en base a eso determinar si es un inversor estandar, inversor precavido, inversor potencial     */

//segundo ejercicio sacar automatico el interes mas la inversion en 10 pasos etc

//INVERSORES
let manuel;
let manuelInversion;
let jon;
let sofia;
let interes;
let totalUno;
let totalDos;
let totalTres;
let inversionNeta;
let interesInversionUno;
let interesInversionDos;
let interesInversionTres;
let reinversionuno;
let reinversiondos;
let inversionEsperada;
let inversionReal;

//manuel

for (let i = 0; i < 3; i++) {
  nombreInversor = prompt("Nombre del inversor");
  while (nombreInversor === "" || !isNaN(nombreInversor)) {
    nombreInversor = prompt("Escriba correctamente el nombre del inversor");
  }
  inversionUno = parseInt(prompt("Primera inversion"));
  while (isNaN(inversionUno)) {
    inversionUno = parseFloat(
      prompt("Escriba correctamente el primer monto del inversor en numeros")
    );
  }
  inversionDos = parseFloat(prompt("Segunda inversion"));
  while (isNaN(inversionDos)) {
    inversionDos = parseFloat(
      prompt("Escriba correctamente el segundo monto del inversor en numeros")
    );
  }
  inversionTres = parseFloat(prompt("Tercera inversion"));
  while (isNaN(inversionTres)) {
    inversionTres = parseFloat(
      prompt("Escriba correctamente el tercer monto del inversor en numeros")
    );
  }
  totalUno = inversionUno * 1.07;
  interesInversionUno = inversionUno * 0.07;

  reinversionuno = totalUno + inversionDos;
  totalDos = reinversionuno * 1.07;
  interesInversionDos = reinversionuno * 0.07;

  reinversiondos = totalDos + inversionTres;
  totalTres = reinversiondos * 1.07;
  interesInversionTres = reinversiondos * 0.07;

  inversionNeta = inversionUno + inversionDos + inversionTres;
  gananciaTotal = totalTres - inversionNeta;
  porcentajeDelTotal = (gananciaTotal / totalTres) * 100;
  porcentajeDelTotalNet = (gananciaTotal / inversionNeta) * 100;

  //ACA QUEDE TRANATDO DE CATALOGAR EL CARACTER DE LOS INVERSORES
  inversionEsperada = inversionUno * 3;
  inversionReal = inversionNeta;

  if (inversionEsperada < inversionReal) {
    caracterInversor = "INVERSOR COMPROMETIDO";
  } else if (inversionEsperada == inversionReal) {
    caracterInversor = "INVERSOR PROMEDIO";
  } else if (inversionEsperada > inversionReal) {
    caracterInversor = "INVERSOR DESINTERESADO";
  }

  document.write(`INVERSOR UNO<br><br>
    NOMBRE: ${nombreInversor}.<br>
    <u>INVERSION UNO</u> <br>
    Primer Deposito: $${inversionUno}.<br> 
    Ganancia del 7% de interes ($${inversionUno} * 0.07)= $${interesInversionUno.toFixed(
    2
  )}.<br> 
    Monto total en la cuenta= $${totalUno.toFixed(2)}.<br><br>`);

  document.write(`
    <u>INVERSION DOS</u><br>
    Segundo Deposito: $${inversionDos}<br> 
    Segundo deposito mas el monto en la cuenta: $${inversionDos} + $${totalUno.toFixed(
    2
  )}=total: $${reinversionuno.toFixed(2)}<br>
    Ganancia del 7% de interes ($${reinversionuno} * 0.07)= $${interesInversionDos.toFixed(
    2
  )}<br>
    Monto total en la cuenta: $${totalDos.toFixed(2)}.<br><br>
    `);

  document.write(`
  <u>INVERSION TRES</u><br>
    Tercer deposito: $${inversionTres.toFixed(2)}<br>
    Tercer deposito mas el monto en la cuenta: $${inversionTres.toFixed(
      2
    )} + $${totalDos.toFixed(2)}= $${reinversiondos.toFixed(2)}<br>
   Ganancia del 7% de interes ($${reinversiondos} * 0.07)= $${interesInversionTres.toFixed(
    2
  )}.<br> 
    Montototal en la cuenta= $${totalTres.toFixed(2)}.<br>
  <br>
  <br>`);
  document.write(`
<b><u>RESUMEN</u></b>
    Inversion total neta: $${inversionNeta.toFixed(2)}.<br> 
    Ganancia de intereses: $${gananciaTotal.toFixed(2)}.<br> 
    La ganancia equivale a un $${porcentajeDelTotal.toFixed(
      1
    )}% del monto total invertido.<br>
    La ganancia equivale a un $${porcentajeDelTotalNet.toFixed(
      1
    )}% del monto total en la cuenta.<br>

    <br>
    <br>
    <br>
    MONTO TOTAL EN LA CUENTA= $${totalTres.toFixed(2)} 
    <br>
    <br>
    inversion esperada= $${inversionEsperada} <br>
    inversion real= $${inversionReal}<br>
    Caracter del inversor: ${caracterInversor}<hr>`);
}
let totalIngresos = 0;
let inversores = [];
inversores.push({
  nombre: nombreInversor,
  inversion: inversionNeta,
});
inversores.sort((a, b) => b.inversionNeta - a.inversionNeta);
inversores.forEach((inv, index) => {
  document.write(`${index + 1} ${inv.nombre} ingreso $${inv.inversionNeta}`);
});

for (let i = 0; i < inversores.length; i++) {
  totalIngresos += inversores[i].inversionNeta;
}

console.log("La recaudación total es $" + totalIngresos);

/* QUE ES LO QUE HACE ESTE PROGRAMA?? DETALLARLO ENTERO
VAMOS A HACER UN BALANCE DE CUAL FUE EL INVERSOR QUE MAS INVIRTIO
CUANTO ES EL DINERO TOTAL QUE RECAUDO LA ESTAFA PIRAMIDAL
CUANTO ES LO QUE DEVERIAN ESTAR PAGANDO A LOS INVERSORES SI TODOS RETIRARAN AL MISMO TIEMPO
cuantos nuevos inversores necesito para pagarle a los primeros
cuanto es la inversion semanal promedio sumando todos los usuarios y sus ingresos 
a cuanto equivale de porcentaje la inversion de cada uno*/

// FECHAS EN JAVASCRIPT

const now = new Date();

const date1 = new Date('May 11 2018 09:00');

const date2 = new Date(2018, 4, 11, 9);

console.log(now);
console.log(date1);
console.log(date2);


/* NOTAS:

new Date()
- crea la fecha y hora actual

new Date('May 11 2018 09:00')
- crea una fecha desde un string

new Date(2018, 4, 11, 9)
- año, mes, día, hora

IMPORTANTE:
los meses empiezan en 0

0 = enero
1 = febrero
2 = marzo
3 = abril
4 = mayo

por eso 4 representa mayo

*/


// MÉTODOS GET MÁS COMUNES

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


/* NOTAS:

getFullYear()
- devuelve el año

getMonth()
- devuelve el mes (0-11)

getDate()
- devuelve el día del mes

getHours()
- devuelve la hora

getMinutes()
- devuelve minutos

getSeconds()
- devuelve segundos

*/


// getDay()

console.log(now.getDay());

/* NOTAS:

getDay()
devuelve el día de la semana:

0 = domingo
1 = lunes
2 = martes
...
6 = sábado

*/


// TIMESTAMP

console.log(now.getTime());

/* NOTAS:

getTime()
- devuelve milisegundos desde
  Jan 1 1970 (Unix Timestamp)

muy usado para:
- comparar fechas
- calcular diferencias de tiempo
*/


// UTC

console.log(now.getUTCDate());
console.log(now.getUTCDay());

/* NOTAS:

UTC = tiempo universal coordinado

estos métodos usan hora UTC
en vez de la zona horaria local

*/


// MODIFICAR FECHAS

const future = new Date();

future.setFullYear(2030);

future.setMonth(11);

future.setDate(25);

console.log(future);

/* NOTAS:

setFullYear()
setMonth()
setDate()

permiten modificar fechas

*/


// CONVERTIR A STRING

console.log(now.toDateString());

console.log(now.toTimeString());

console.log(now.toISOString());

/* NOTAS:

toDateString()
- fecha legible

toTimeString()
- hora legible

toISOString()
- formato estándar muy usado en APIs

*/


/* RESUMEN

Date:
- maneja fechas y horas

GETTERS:
- obtienen partes de la fecha

SETTERS:
- modifican la fecha

IMPORTANTE:
los meses empiezan en 0

*/
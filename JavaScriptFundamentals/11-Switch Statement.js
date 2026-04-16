/* 
La instrucción switch es una estructura de control de flujo que permite ejecutar diferentes bloques de código según el valor de una expresión. 
Se suele utilizar como alternativa a las múltiples instrucciones if-else cuando se tiene una variable que puede tomar varios valores.
*/

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's Monday, start of the week!");
        break;
    case "Tuesday":
        console.log("It's Tuesday, second day of the week!");
        break;
    case "Wednesday":
        console.log("It's Wednesday, middle of the week!");
        break;
    case "Thursday":
        console.log("It's Thursday, almost the weekend!");
        break;
    case "Friday":
        console.log("It's Friday, last day of the workweek!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend, time to relax!");
        break;
    default:
        console.log("Invalid day of the week.");
}

/* 
- La expresión dentro del switch se evalúa una vez y se compara con cada caso.
- Si hay una coincidencia, se ejecuta el bloque de código correspondiente.
- El break es importante para evitar que el código continúe ejecutándose en los casos siguientes (conocido como "fall-through").
- El caso default se ejecuta si no hay ninguna coincidencia con los casos anteriores.
*/

const value = 3;

switch (value) {
  case 3:
    console.log("3 is cool")
    break;

  case 4:
    console.log("4 is not cool")
    break;

  default:
    console.log("okay")
    break;
}
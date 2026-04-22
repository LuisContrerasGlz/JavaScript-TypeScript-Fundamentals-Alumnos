// CREACIÓN DE OBJETOS

const obj = {
  name: "Alice",
  age: 23,
};

/* NOTAS:
- Los objetos se definen con {}
- Se usan pares clave: valor
- Las claves normalmente son strings (aunque no se vean con comillas)
*/


// MODIFICAR Y AGREGAR PROPIEDADES

obj.age = "tim"; // cambiando tipo (no recomendado pero posible)
obj.newProp = [1, 2]; // agregando nueva propiedad

console.log(obj);

/* NOTAS:
- Puedes modificar propiedades existentes
- Puedes agregar nuevas propiedades dinámicamente
- JavaScript es dinámico (no tipado estricto por defecto)
*/

// ACCESO A PROPIEDADES

// Notación punto
console.log(obj.name);

// Notación corchetes
console.log(obj["name"]);

/* NOTAS:
- obj.prop → más común
- obj["prop"] → útil si la clave es dinámica
*/

// OBJETOS CON FUNCIONES (MÉTODOS)

const objWithMethod = {
  name: "Alice",
  age: 23,
  sayHello: function () {
    return "hello";
  },
  career: {}
};

console.log(objWithMethod.sayHello());

/* NOTAS:
- Las funciones dentro de objetos se llaman métodos
- Se acceden con obj.metodo()
*/

// ELIMINAR PROPIEDADES

delete objWithMethod.career;

console.log(objWithMethod);

/* NOTAS:
- delete elimina propiedades del objeto
- Modifica el objeto original
*/

// OBTENER KEYS Y VALUES


console.log(Object.keys(objWithMethod));
console.log(Object.values(objWithMethod));

/* NOTAS:
- Object.keys() → devuelve un array con las claves
- Object.values() → devuelve un array con los valores
*/


// ITERAR OBJETOS

for (let key in objWithMethod) {
  console.log(key);
}

/* NOTAS:
- for...in recorre las claves del objeto
- Para obtener valores: obj[key]
*/

// COMBINAR OBJETOS (SPREAD)

const obj2 = {
  hairColor: "black",
  arr: [1, 2, 3],
};

const obj3 = { ...objWithMethod, ...obj2 };

console.log(obj3);

/* NOTAS:
- Spread operator copia propiedades
- Si hay claves repetidas, la última sobrescribe
*/

// DESTRUCTURING

const { hairColor, name } = obj3;

console.log(hairColor, name);

/* NOTAS:
- Extrae propiedades en variables
- Muy usado en código moderno y frameworks
*/


/* ==============================
RESUMEN PRÁCTICO

- {} crea objetos
- obj.prop o obj["prop"] accede a valores
- delete elimina propiedades
- Object.keys / values → arrays útiles
- for...in → recorrer objetos
- ...obj → copiar / combinar
- { prop } = obj → destructuring

============================== */
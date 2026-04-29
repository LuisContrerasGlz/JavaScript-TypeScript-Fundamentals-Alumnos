// PROMISE - creación básica

const myPromise = new Promise((resolve, reject) => {
  // operación asíncrona (ejemplo simple)

  if (true) {
    resolve("good"); // éxito
  } else {
    reject("bad");   // error
  }
});

/* NOTAS:
- resolve → la promesa se cumple (success)
- reject → la promesa falla (error)
- Promise representa algo que se resolverá en el futuro
*/


// PROMISE - usando then

myPromise.then((value) => {
  console.log(value);
});

/* NOTAS:
- then se ejecuta cuando resolve ocurre
- value es lo que pasaste en resolve()
*/


// PROMISE - usando then + catch

const myPromise2 = new Promise((resolve, reject) => {
  if (false) {
    resolve("good");
  } else {
    reject("bad");
  }
});

myPromise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

/* NOTAS:
- catch se ejecuta cuando hay reject
- sirve para manejar errores
*/


// PROMISE - then + catch + finally

myPromise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("always");
  });

/* NOTAS:
- finally SIEMPRE se ejecuta
- útil para cleanup (cerrar conexiones, logs, etc.)
*/


// ==============================
// EJEMPLO REAL (simulando async)
// ==============================

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
}

waitTwoSeconds().then((value) => console.log(value));

/* NOTAS:
- setTimeout simula operación real (API, DB, etc.)
- Promise envuelve ese comportamiento
*/


// ==============================
// ASYNC / AWAIT (FORMA MODERNA)
// ==============================

async function run() {
  try {
    const result = await waitTwoSeconds();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finished");
  }
}

run();

/* NOTAS:
- async hace que la función use await
- await espera a que la Promise termine
- try/catch reemplaza then/catch
*/


/* ==============================
RESUMEN SIMPLE

PROMISE:
- representa algo que se resolverá después
- estados:
  pending → esperando
  fulfilled → éxito (resolve)
  rejected → error (reject)

THEN / CATCH:
- then → éxito
- catch → error
- finally → siempre

ASYNC / AWAIT:
- forma más limpia de trabajar con Promises
- evita muchos .then()
- parece código síncrono pero es asíncrono

REGLA PRÁCTICA:
- usa async/await en código moderno
- usa try/catch para errores

============================== */
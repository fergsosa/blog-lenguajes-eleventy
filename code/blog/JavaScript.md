---
layout: layout-post.njk
title: JavaScript
img: /img/portada/node.avif
description: Ideas principales de JavaScript
tags: ["blog", "lenguajes"]
date: "2023-02-02"
---

<!-- 1. ¿Qué es JavaScript y para qué se utiliza principalmente?
1. Explica la diferencia entre var, let y const. ¿Cuándo usarías cada una?
1. ¿Qué es el hoisting en JavaScript? Explica cómo funciona con var, let y const.
1. Describe la diferencia entre "igualdad estricta" (===) y "igualdad no estricta" (==).
1. ¿Qué son las "promesas" (Promises) y por qué son útiles en la programación asíncrona?
1. Explica la diferencia entre las funciones de flecha (arrow functions) y las funciones tradicionales.
1. ¿Qué es el Event Loop en JavaScript? Describe brevemente su funcionamiento.
1. ¿Qué es el DOM (Document Object Model) y cómo se manipula con JavaScript?
1. Explica el concepto de "clausuras" (closures) en JavaScript.
1. ¿Cuál es la diferencia entre null y undefined?
1. ¿Qué es NaN en JavaScript y qué significa?
1. ¿Qué es la inmutabilidad y por qué es importante en JavaScript?
1. ¿Cómo funciona la herencia en JavaScript? Explica la diferencia entre herencia de prototipos y herencia basada en clases.
1. ¿Qué es la delegación de eventos (event delegation) y por qué se utiliza?
1. Explica qué es el spread operator (...) y cómo se puede usar. -->

# Preguntas de Entrevista de JavaScript

## 1. ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que se usa principalmente para hacer páginas web interactivas y dinámicas.

---

## ¿Para qué se usa?

- 🌐 Interactividad en webs: Animaciones, menús, validación de formularios.
- 🔄 Actualizar contenido sin recargar la página (ej.: redes sociales).
- ⚙️ Desarrollo backend con Node.js (servidores, APIs).
- 📱 Aplicaciones móviles (React Native) y de escritorio (Electron).
- 🎮 Juegos web simples.

Es esencial en el desarrollo web moderno.

---

## 2. Diferencia entre `var`, `let` y `const`

- **`var`**: Tiene **scope de función**, se eleva (hoisting) y permite redeclaración.
- **`let`**: Tiene **scope de bloque**, no permite redeclaración en el mismo bloque y evita problemas de hoisting.
- **`const`**: Igual que `let` pero su valor no puede ser reasignado.

**Uso recomendado:**

- `let` para variables que cambian.
- `const` para valores que no deben cambiar.
- Evitar `var` en código moderno.

---

## 3. ¿Qué es el hoisting y cómo funciona con `var`, `let` y `const`?

El **hoisting** es el comportamiento de JavaScript de **elevar declaraciones** al inicio del scope antes de ejecutar el código.

- **`var`**: Se eleva y se inicializa como `undefined`.
- **`let` y `const`**: Se elevan, pero quedan en una **"zona muerta temporal"** hasta que se ejecuta su declaración, por lo que no se pueden usar antes de declararlas.

---

## 4. Diferencia entre igualdad estricta (`===`) y no estricta (`==`)

- **`===` (estricta)**: Compara **valor y tipo**, sin conversión.
  ```js
  2 === "2"; // false
  ```
- **`==` (no estricta)**: Compara **valor**, realizando conversión implícita.
  ```js
  2 == "2"; // true
  ```

**Recomendación:** usar `===` para evitar errores.

---

## 5. ¿Qué son las Promises y por qué son útiles?

Una **Promise** es un objeto que representa un valor que **estará disponible en el futuro**, como el resultado de una operación asíncrona.  
Evita el **callback hell** y permite manejar código asíncrono de forma más limpia.

**Estados:**

- **Pending** (pendiente)
- **Fulfilled** (resuelta)
- **Rejected** (rechazada)

Se usan con `.then()`, `.catch()` y `async/await`.

---

## 6. Diferencia entre funciones de flecha y tradicionales

- **Arrow functions (`=>`)**:

  - No tienen su propio `this` (heredan el de su contexto).
  - Más cortas y limpias.
  - No se pueden usar como constructores (`new`).

- **Funciones tradicionales**:
  - Tienen su propio `this`.
  - Pueden usarse como constructores.

---

## 7. ¿Qué es el Event Loop?

El **Event Loop** es el mecanismo que permite a JavaScript manejar **operaciones asíncronas** a pesar de ser **single-thread**.  
Funciona así:

1. El **call stack** ejecuta tareas síncronas.
2. Las tareas asíncronas van a la **cola de tareas**.
3. El Event Loop mueve las tareas de la cola al call stack cuando está libre.

---

## 8. ¿Qué es el DOM y cómo se manipula con JS?

El **DOM (Document Object Model)** es una representación en forma de árbol de la estructura HTML.  
Con JavaScript se puede:

- Crear, modificar o eliminar elementos.
- Cambiar atributos y estilos.
- Escuchar y manejar eventos.

**Ejemplo:**

```js
document.querySelector("h1").textContent = "Hola Mundo";
```

---

## 9. Explica el concepto de closures

Un **closure** ocurre cuando una función **recuerda el contexto** (variables y entorno) en el que fue creada, incluso si se ejecuta fuera de ese contexto.

**Ejemplo:**

```js
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}
const contar = crearContador();
contar(); // 1
contar(); // 2
```

---

## 10. Diferencia entre `null` y `undefined`

- **`null`**: Valor **intencionalmente vacío** asignado por el programador.
- **`undefined`**: Valor que indica que **no se ha asignado** nada o no existe.

---

## 11. ¿Qué es `NaN` y qué significa?

`NaN` significa **Not a Number**.  
Indica que una operación matemática falló o no tiene sentido.

**Ejemplo:**

```js
parseInt("Hola"); // NaN
```

**Comprobar:**

```js
Number.isNaN(valor);
```

---

## 12. ¿Qué es la inmutabilidad y por qué es importante?

La **inmutabilidad** significa que los datos **no se modifican directamente**, sino que se crean **nuevas copias** con los cambios.  
Esto:

- Evita efectos secundarios.
- Facilita el **debugging**.
- Es clave en **programación funcional** y frameworks como React.

**Ejemplo:**

```js
const arr = [1, 2, 3];
const nuevoArr = [...arr, 4]; // arr no se modifica
```

---

## 13. Herencia en JavaScript

- **Basada en prototipos:**  
  Cada objeto puede heredar propiedades de otro a través de su `prototype`.

- **Basada en clases (syntactic sugar):**  
  Introducida en ES6 para tener una sintaxis más clara, pero internamente sigue usando prototipos.

**Ejemplo:**

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
}
```

---

## 14. Delegación de eventos

Es una técnica donde **asignas un solo listener** a un elemento padre para manejar eventos de sus hijos.  
Ahorra memoria y mejora el rendimiento.

**Ejemplo:**

```js
document.getElementById("lista").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(`Clic en ${e.target.textContent}`);
  }
});
```

---

## 15. Spread operator (`...`)

Sirve para **expandir elementos** de un array u objeto en otro contexto.

**Ejemplos:**

```js
// Copiar array
const arr = [1, 2, 3];
const copia = [...arr];

// Combinar objetos
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combinado = { ...obj1, ...obj2 };
```

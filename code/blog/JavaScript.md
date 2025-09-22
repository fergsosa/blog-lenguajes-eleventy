---
layout: layout-post.njk
title: JavaScript
img: /img/portada/javascript.avif
description: Ideas principales de JavaScript
tags: ["blog", "lenguajes"]
date: "2023-06-01"
---

# {{title}}

![img]({{img}})

JavaScript es uno de los lenguajes de programación más populares y fundamentales en el desarrollo web moderno. Su versatilidad y gran comunidad lo convierten en una herramienta clave para programadores de todos los niveles.

---

## 1. ¿Qué es JavaScript?

JavaScript (JS) es un **lenguaje de programación interpretado**, **orientado a objetos** y **basado en eventos**, diseñado inicialmente para dotar de interactividad a las páginas web.

**Diferencias clave frente a otros lenguajes:**

- **Interpretado en el navegador:** No requiere compilación previa como C++ o Java.
- **Multiparadigma:** Soporta programación funcional, orientada a objetos y basada en eventos.
- **Enfoque web:** Se ejecuta principalmente en navegadores, aunque con **Node.js** también se utiliza en el backend.
- **Alta integración con HTML y CSS**, algo que otros lenguajes no ofrecen de forma nativa.

### 2. ¿Para qué se usa?

JavaScript se utiliza en una amplia variedad de contextos, siendo el estándar para la programación en la web.

**Aplicaciones principales:**

- **Frontend:** Crear interfaces dinámicas e interactivas (con React, Vue, Angular).
- **Backend:** Desarrollo de servidores y APIs con **Node.js**.
- **Aplicaciones móviles:** Usando frameworks como React Native o Ionic.
- **Aplicaciones de escritorio:** Con tecnologías como Electron.
- **Automatización y scripting:** Scripts para tareas repetitivas o automatización de flujos.

> **Ideal cuando necesitas** interactividad, comunicación en tiempo real, aplicaciones rápidas y prototipos ágiles.

### 3. ¿Qué puedo construir con JavaScript?

Con JavaScript puedes crear prácticamente cualquier tipo de aplicación moderna:

- 🌐 **Sitios web dinámicos** y responsivos.
- 📱 **Aplicaciones móviles híbridas** (iOS y Android).
- 🖥️ **Aplicaciones de escritorio** multiplataforma.
- 🔗 **APIs REST y GraphQL** para servicios y microservicios.
- 🎮 **Videojuegos** 2D y 3D en navegadores.
- 🤖 **Bots y automatizaciones** para redes sociales o tareas repetitivas.
- 🧪 **Aplicaciones de análisis de datos** y dashboards en tiempo real.

### 4. ¿Cuándo es más conveniente usarlo?

JavaScript es la mejor elección en los siguientes escenarios:

- **Proyectos web:** Es el estándar para navegadores, no existe alternativa real.
- **Prototipos rápidos:** Sintaxis sencilla y frameworks maduros aceleran el desarrollo.
- **Aplicaciones en tiempo real:** Chats, videojuegos o herramientas colaborativas.
- **Unificar frontend y backend:** Permite usar un solo lenguaje en todo el stack.

> ⚠️ **Evítalo** si el proyecto requiere alto rendimiento computacional, como simulaciones científicas o software de bajo nivel, donde lenguajes como **C++ o Rust** son más adecuados.

### 5. Buenas prácticas y patrones recomendados

Para escribir buen código en JavaScript, sigue estas recomendaciones:

## Buenas prácticas recomendadas

- **Usa `const` y `let`** en lugar de `var` para mayor claridad y control.
- **Escribe código modular:** Divide en funciones, módulos y componentes reutilizables.
- **Aplica convenciones de nombres:** `camelCase` para variables y funciones.
- **Agrega comentarios claros y útiles**, pero no excesivos.
- **Evita la repetición (DRY):** _Don't Repeat Yourself_.
- **Validación constante:** Prueba y depura tu código con herramientas como ESLint.

#### **Patrones de diseño recomendados:**

- **Módulos:** Para encapsular y organizar el código.
- **Singleton:** Para recursos globales únicos, como la configuración.
- **Observer:** Para manejar eventos y estados en interfaces.
- **Factory:** Para crear objetos complejos de manera consistente.
- **MVC/MVVM:** Separar la lógica de negocio de la interfaz de usuario.

---

## Resumen rápido

**Síntesis rápida de lo aprendido sobre JavaScript**

- **Fortalezas principales:**
  - Versatilidad: frontend, backend, móvil y escritorio.
  - Amplio ecosistema y comunidad activa.
  - Integración nativa con HTML y CSS.
  - Gran cantidad de librerías y frameworks maduros.
- **Debilidades principales:**
  - Menor rendimiento frente a lenguajes compilados como C++ o Rust.
  - Código propenso a errores si no se sigue una buena estructura.
  - Fragmentación en frameworks y herramientas.
  - Dificultad en proyectos muy grandes sin buenas prácticas.
- **Cuándo usarlo:**
  - Desarrollo web y aplicaciones interactivas.
  - Prototipos rápidos y MVPs.
  - Proyectos donde se busca rapidez y flexibilidad.
- **Cuándo evitarlo:**
  - Aplicaciones que requieren cálculos complejos y alto rendimiento.
  - Sistemas embebidos o de bajo nivel.
  - Proyectos donde la seguridad extrema es la prioridad principal.

---

# Temas {#temas#}

- [inicio](#node-js)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Antes de aprender JavaScript o mientras lo estudias, es importante entender estos conceptos fundamentales:

## 1. Fundamentos de programación

- **Algoritmos y lógica:** La base para resolver problemas.
- **Variables y constantes:** Manejo de datos en memoria (`let`, `const`).
- **Tipos de datos:**
  - Primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
  - Complejos: `object`, `array`, `function`.
- **Estructuras de control:** Condicionales (`if`, `switch`) y bucles (`for`, `while`).
- **Funciones:** Declarativas, expresivas, flecha (_arrow functions_).
- **Paradigmas de programación:**
  - _Imperativo_: Cómo se hace.
  - _Declarativo_: Qué se quiere lograr.
  - _Orientado a objetos_: Uso de clases y objetos.
  - _Funcional_: Uso de funciones puras y composición.

## 2. Web y entorno de ejecución

- **HTML:** Estructura base de las páginas web.
- **CSS:** Estilos y diseño visual.
- **DOM (Document Object Model):** Representación en memoria de una página web para manipular elementos dinámicamente.
- **BOM (Browser Object Model):** Objetos que el navegador proporciona, como `window` o `navigator`.
- **Eventos:** Manejo de interacciones del usuario (`click`, `input`, `submit`).

## 3. Programación asíncrona

JavaScript es **single-threaded** pero puede manejar tareas asíncronas.

- **Callbacks:** Primera forma de manejar tareas asincrónicas.
- **Promises:** Flujo controlado con `.then()` y `.catch()`.
- **Async/Await:** Sintaxis moderna y más legible para trabajar con promesas.
- **Event Loop:** Mecanismo que gestiona la ejecución de código y tareas pendientes.

## 4. JSON y APIs

- **JSON (JavaScript Object Notation):** Formato ligero para intercambio de datos.
- **APIs:** Interfaces para comunicación entre sistemas.
  - REST API.
  - GraphQL.
- **Fetch API:** Hacer peticiones HTTP con `fetch()`.

## 5. Ecosistema JavaScript

- **Node.js:** Ejecutar JavaScript fuera del navegador, principalmente para el backend.
- **npm (Node Package Manager):** Gestor de paquetes y librerías.
- **Frameworks y librerías populares:**
  - **Frontend:** React, Vue, Angular, Svelte.
  - **Backend:** Express, NestJS, Fastify.
  - **Testing:** Jest, Mocha, Cypress.

## 6. Principios de desarrollo

- **DRY (_Don't Repeat Yourself_):** Evitar duplicación de código.
- **KISS (_Keep It Simple, Stupid_):** Mantener el código simple y entendible.
- **SOLID:** Buenas prácticas de programación orientada a objetos.
- **Clean Code:** Código limpio, legible y mantenible.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Estas herramientas te ayudarán a **desarrollar, depurar y optimizar** proyectos en JavaScript de manera profesional.

## 1. Editores y entornos de desarrollo

- **Visual Studio Code (VSCode):** Editor moderno, liviano y altamente configurable.
- **WebStorm:** IDE especializado para JavaScript.
- Extensiones útiles para VSCode:
  - _ESLint:_ Detección de errores y estandarización de código.
  - _Prettier:_ Formateo automático.
  - _GitLens:_ Mejor gestión de versiones.
  - _Debugger for Chrome:_ Depuración integrada.

## 2. Control de versiones

- **Git:** Sistema de control de versiones.
- **GitHub / GitLab / Bitbucket:** Plataformas para alojar proyectos y colaborar en equipo.

## 3. Terminal y línea de comandos

- **Node.js CLI:** Ejecutar scripts y proyectos.
- **npm / yarn / pnpm:** Manejo de dependencias y paquetes.
- **Comandos clave:**
  - `node app.js` → Ejecutar un archivo.
  - `npm init -y` → Inicializar un proyecto.
  - `npm install paquete` → Instalar dependencias.

## 4. Depuración y pruebas

- **Herramientas del navegador:**
  - Consola (`console.log()`) para depurar.
  - Pestaña _Network_ para analizar solicitudes HTTP.
  - _Performance_ para medir tiempos de carga.
- **Frameworks de testing:**
  - **Jest:** Pruebas unitarias.
  - **Cypress:** Pruebas de interfaz (end-to-end).
  - **Mocha + Chai:** Pruebas flexibles y personalizadas.

## 5. Automatización y bundlers

- **Bundlers:** Empaquetar y optimizar el código.
  - Webpack, Parcel, Vite.
- **Transpiladores:**
  - **Babel:** Para compatibilidad con navegadores antiguos.
- **Automatización de tareas:**
  - Gulp, npm scripts.

## 6. Entorno backend

- **Express:** Framework minimalista para servidores.
- **MongoDB Atlas:** Base de datos en la nube.
- **Postman / Insomnia:** Probar APIs y endpoints.
- **Docker:** Contenerizar aplicaciones y entornos.

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código reutilizables que facilitan tareas comunes.

## 1. Declaración de variables

```js
const PI = 3.1416; // Constante (no cambia)
let nombre = "Juan"; // Variable que puede cambiar
```

## 2. Funciones

```js
// Función tradicional
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// Función flecha (arrow function)
const despedir = (nombre) => `Adiós, ${nombre}`;
```

## 3. Condicional simple

```js
const edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

## 4. Operador ternario

```js
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
```

## 5. Bucles

```js
// For
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While
let count = 0;
while (count < 5) {
  console.log(count++);
}

// For...of (recorrer arrays)
const frutas = ["Manzana", "Banana", "Pera"];
for (const fruta of frutas) {
  console.log(fruta);
}
```

## 6. Objetos y Arrays

```js
const persona = {
  nombre: "Ana",
  edad: 25,
};

const colores = ["Rojo", "Verde", "Azul"];
console.log(persona.nombre); // Acceder a propiedad
console.log(colores[0]); // Acceder a elemento
```

## 7. Desestructuración

```js
// Objetos
const { nombre, edad } = persona;
console.log(nombre, edad);

// Arrays
const [primero, segundo] = colores;
console.log(primero, segundo);
```

## 8. Fetch API (peticiones HTTP)

```js
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));
```

## 9. Async / Await

```js
async function obtenerDatos() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## 10. Exportar e importar módulos

```js
// archivo.js
export const saludar = (nombre) => `Hola, ${nombre}`;

// app.js
import { saludar } from "./archivo.js";
console.log(saludar("Carlos"));
```

[🔼 temas](#temas)

---

# Comandos

Sintaxis y comandos básicos **cortos y directos** para uso diario.

## Variables y constantes

```js
let edad = 25; // Variable modificable
const PI = 3.14; // Constante
```

## Tipos de datos

```js
let nombre = "Pedro"; // String
let edad = 30; // Number
let activo = true; // Boolean
let lista = [1, 2, 3]; // Array
let persona = { nombre: "Ana", edad: 25 }; // Objeto
let nada = null; // Null
let indefinido; // Undefined
```

## Operadores básicos

```js
// Aritméticos
let suma = 5 + 3;
let resta = 5 - 3;
let producto = 5 * 3;
let division = 5 / 3;

// Comparación
console.log(5 === "5"); // false (estricta)
console.log(5 == "5"); // true (no estricta)
console.log(5 !== 3); // true

// Lógicos
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

## Funciones y callbacks

```js
// Función simple
function sumar(a, b) {
  return a + b;
}

// Función como variable
const restar = function (a, b) {
  return a - b;
};

// Función flecha
const multiplicar = (a, b) => a * b;
```

## Array Methods comunes

```js
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((n) => console.log(n)); // Recorrer
const dobles = numeros.map((n) => n * 2); // Nuevo array
const pares = numeros.filter((n) => n % 2 === 0); // Filtrar
const sumaTotal = numeros.reduce((acc, n) => acc + n, 0); // Reducir
```

## Manejo de errores

```js
try {
  const resultado = dividir(10, 0);
} catch (error) {
  console.error("Ocurrió un error:", error.message);
} finally {
  console.log("Proceso finalizado");
}
```

## Clases y objetos

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, me llamo ${this.nombre}`;
  }
}

const ana = new Persona("Ana", 25);
console.log(ana.saludar());
```

## Promesas

```js
const promesa = new Promise((resolve, reject) => {
  let exito = true;
  exito ? resolve("Todo bien") : reject("Error");
});

promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));
```

## Console y depuración

```js
console.log("Información general");
console.warn("Advertencia");
console.error("Error crítico");
console.table([{ nombre: "Ana" }, { nombre: "Luis" }]); // Tabla
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. Tipos de datos primitivos en JavaScript

**Primitivos:**

- `string`
- `number`
- `bigint`
- `boolean`
- `undefined`
- `null`
- `symbol`

**Por referencia:**

- `object` (arrays, funciones, objetos literales, etc.)

**Diferencia:**

- Los **primitivos** se pasan por _valor_, es decir, se copia el valor original.
- Los **por referencia** se pasan por _referencia_, apuntando al mismo espacio en memoria.

```js
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (no cambia)

let obj1 = { nombre: "Ana" };
let obj2 = obj1;
obj2.nombre = "Luis";
console.log(obj1.nombre); // "Luis"
```

### 2. Diferencia entre var, let y const

- **`var`**
  - Ámbito de función.
  - Se eleva (hoisting).
  - Puede redeclararse.
- **`let`**
  - Ámbito de bloque `{}`.
  - No se puede redeclarar en el mismo ámbito.
- **`const`**
  - Igual que `let`, pero el valor no puede ser reasignado.

```js
var x = 1;
let y = 2;
const z = 3;
```

**Recomendación:** usar `let` y `const` siempre que sea posible.

### 3. Hoisting (elevación)

Es el comportamiento donde **declaraciones** se mueven al inicio del ámbito antes de ejecutar el código.

```js
console.log(x); // undefined
var x = 5;

// Equivalente a:
var x;
console.log(x);
x = 5;
```

Con `let` y `const` el hoisting ocurre pero no permite acceder a la variable antes de su declaración (temporal dead zone).

### 4. Funciones flecha y `this`

- **Funciones tradicionales:** `this` depende de cómo se llama la función.
- **Funciones flecha:** heredan el `this` del contexto donde fueron definidas.

```js
function tradicional() {
  console.log(this);
}

const flecha = () => {
  console.log(this);
};
```

En un objeto:

```js
const obj = {
  nombre: "Ana",
  regular() {
    console.log(this.nombre); // "Ana"
  },
  arrow: () => {
    console.log(this.nombre); // undefined
  },
};
obj.regular();
obj.arrow();
```

### 5. Closures (cierres)

Un closure ocurre cuando una función **recuerda** variables de su contexto incluso después de que ese contexto haya terminado.

**Ejemplo útil:**

```js
function contador() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
```

**Problema: variables compartidas:**

```js
function crearFunciones() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(() => console.log(i));
  }
  return arr;
}

crearFunciones().forEach((fn) => fn()); // 3, 3, 3
```

Solución: usar `let` o crear un scope adicional.

## 🟡 Intermedio

### 6. Promesas y Promise.all / Promise.race

- **Promesas** representan operaciones asincrónicas.

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Listo!"), 1000);
});

promesa.then(console.log);
```

- **Promise.all:** espera que todas las promesas se resuelvan.
- **Promise.race:** devuelve el resultado de la primera promesa que se resuelva o rechace.

```js
Promise.all([p1, p2]).then((resultados) => console.log(resultados));
Promise.race([p1, p2]).then((primero) => console.log(primero));
```

### 7. Ciclo de vida de un evento DOM

1. **Capturing:** evento baja desde el `window` hasta el elemento objetivo.
2. **Target:** el evento llega al elemento específico.
3. **Bubbling:** el evento sube de regreso al `window`.

```js
element.addEventListener("click", handler, true); // Capturing
element.addEventListener("click", handler, false); // Bubbling
```

**Detener propagación:**

```js
event.stopPropagation();
```

### 8. Event loop, microtasks y macrotasks

El **event loop** gestiona la ejecución de tareas en JavaScript.

- **Macrotasks:** `setTimeout`, `setInterval`, I/O.
- **Microtasks:** Promesas, `process.nextTick`.

Orden:

1. Ejecutar _todo el stack principal_.
2. Ejecutar todas las **microtasks** pendientes.
3. Ejecutar la siguiente **macrotask**.

```js
console.log("Inicio");
setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("Fin");
```

Salida:

```
Inicio
Fin
Microtask
Macrotask
```

### 9. Inmutabilidad en JavaScript

La inmutabilidad significa que los datos **no se modifican directamente**, sino que se crea una **copia nueva**.

```js
const original = { nombre: "Ana" };

// ❌ Mutación
original.nombre = "Luis";

// ✅ Inmutable
const copia = { ...original, nombre: "Luis" };
```

Métodos inmutables comunes en arrays:

- `.map()`
- `.filter()`
- `.concat()`

### 10. Destructuring con valores por defecto y renombramiento

```js
// Objetos
const usuario = { nombre: "Ana", edad: 25 };
const { nombre: n, edad = 18 } = usuario;
console.log(n, edad);

// Arrays
const colores = ["Rojo"];
const [primero = "Verde", segundo = "Azul"] = colores;
console.log(primero, segundo);
```

## 🔴 Avanzado

### 11. Iteradores y generadores

- **Iterador:** objeto con método `next()` que devuelve `{ value, done }`.
- **Generador:** función que usa `function*` y `yield`.

```js
function* numeros() {
  yield 1;
  yield 2;
  yield 3;
}

const it = numeros();
console.log(it.next().value); // 1
```

**Lazy evaluation:** valores se generan bajo demanda.

### 12. Prototype y herencia prototípica

Cada objeto tiene un prototipo que define propiedades y métodos compartidos.

```js
function Persona(nombre) {
  this.nombre = nombre;
}
Persona.prototype.saludar = function () {
  return `Hola, soy ${this.nombre}`;
};

const ana = new Persona("Ana");
console.log(ana.saludar());
```

**Si modificas el prototipo después:** los objetos existentes también acceden a los nuevos métodos.

### 13. Manejo de errores en código asíncrono

Con **promesas**:

```js
fetch("url")
  .then((res) => res.json())
  .catch((error) => console.error(error));
```

Con **async/await**:

```js
async function cargarDatos() {
  try {
    const res = await fetch("url");
    const data = await res.json();
  } catch (error) {
    console.error(error);
  }
}
```

**Consejo:** siempre usar `try/catch` y `.catch()` para evitar errores silenciosos.

### 14. Concepto de `this`

- **Global:** `this` es `window` o `undefined` (modo estricto).
- **Método de objeto:** `this` es el objeto que llama.
- **Función regular:** depende de cómo se invoque.
- **Arrow function:** hereda `this` del contexto donde se creó.

```js
const obj = {
  nombre: "Ana",
  regular: function () {
    console.log(this.nombre);
  },
  flecha: () => {
    console.log(this.nombre);
  },
};
obj.regular(); // Ana
obj.flecha(); // undefined
```

### 15. Shadow DOM, Virtual DOM y Regular DOM

- **Regular DOM:** estructura HTML tradicional del navegador.
- **Shadow DOM:** encapsula estilos y estructura (Web Components).
- **Virtual DOM:** representación en memoria usada por librerías como React.

**Uso recomendado:**

- **Virtual DOM:** cuando necesitas actualizaciones eficientes y reactividad (React, Vue).
- **Shadow DOM:** para crear componentes web encapsulados.

[🔼 temas](#temas)

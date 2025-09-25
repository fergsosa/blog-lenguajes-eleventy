---
layout: layout-post.njk
title: Node.js
img: /img/portada/node.avif
description: Entorno JavaScript para servidor backend
tags: ["blog", "backend"]
date: "2024-04-01"
---

# {{title}}

![{{title}}]({{img}})

## ¿Qué es Node.js?

Node.js es un **entorno de ejecución de JavaScript** que se ejecuta **fuera del navegador**, construido sobre el motor V8 de Google Chrome.  
Permite usar JavaScript en el **lado del servidor** para crear aplicaciones escalables y rápidas.

#### Diferencias clave:

- **Asincronía y no bloqueo:**\
  Usa un modelo basado en eventos y callbacks, ideal para manejar múltiples conexiones simultáneamente.
- **Un solo lenguaje:**\
  Permite usar JavaScript tanto en el front-end como en el back-end.
- **Módulos integrados:**\
  Viene con módulos como `http`, `fs` o `path` para construir servidores y trabajar con el sistema operativo sin dependencias externas.
- **Comunidad y ecosistema:**\
  Cuenta con NPM, uno de los gestores de paquetes más grandes del mundo.

### ¿Para qué se usa?

Node.js se utiliza principalmente para **aplicaciones que necesitan alta concurrencia** y operaciones en tiempo real, como:

- APIs y servicios REST o GraphQL.
- Aplicaciones de chat y mensajería instantánea.
- Streaming de video o audio.
- Dashboards en tiempo real.
- Microservicios y arquitecturas escalables.

> **Mejor contexto:** \
>  cuando hay muchas operaciones de **entrada/salida (I/O)** y se busca eficiencia sin bloquear procesos.

### ¿Qué puedo construir con Node.js?

Con Node.js se pueden crear distintos tipos de aplicaciones, por ejemplo:

- **Backend de aplicaciones web:**:\
  REST API, GraphQL.
- **Sistemas en tiempo real:**:\
  chat, juegos multijugador, notificaciones en vivo.
- **Aplicaciones de streaming:**:\
  Netflix, Spotify, etc.
- **Automatizaciones y scripts:**:\
  bots, web scraping, herramientas CLI.
- **Microservicios y arquitecturas distribuidas.**
- **Aplicaciones serverless:**:\
  con plataformas como AWS Lambda o Vercel.

### ¿Cuándo es más conveniente usarlo?

#### Conviene usar Node.js cuando:

- Se requiere **alto rendimiento en I/O**, como bases de datos, APIs, sockets.
- Se busca un lenguaje unificado (JavaScript) para **frontend y backend**.
- El proyecto necesita **escalabilidad horizontal** (agregar más servidores fácilmente).
- El desarrollo debe ser **rápido** gracias a la gran cantidad de librerías en NPM.

#### No es la mejor opción cuando:

- Se realizan **cálculos intensivos** o procesamiento muy pesado de CPU.
- El sistema requiere **operaciones complejas y secuenciales** que no se benefician de la asincronía.
- El equipo no tiene experiencia en asincronía y manejo de promesas.

## Buenas prácticas recomendadas

- **Estructura modular:**\
  separar el proyecto en controladores, rutas, servicios y utilidades.
- **Uso de Promesas y `async/await`:**\
  para escribir código más limpio y legible.
- **Validar datos:**\
  nunca confiar en la entrada del usuario. Usar librerías como `Joi` o `Zod`.
- **Manejo de errores centralizado:**\
  middleware para capturar y gestionar errores.
- **Variables de entorno (`.env`):**\
  no hardcodear credenciales ni configuraciones sensibles.
- **Logging:**\
  usar herramientas como `Winston` o `Pino` para depuración y monitoreo.
- **Seguridad:**
  - Usar `helmet` para proteger cabeceras HTTP.
  - Sanitizar inputs para evitar inyecciones.
  - Mantener dependencias actualizadas.
- **Tests automatizados:**\
  Mocha, Jest o Vitest para asegurar calidad del código.
- **Patrones recomendados:**
  - MVC (Modelo-Vista-Controlador) para organizar el código.
  - Repository Pattern para manejo de datos.
  - Middleware Pattern para modularizar la lógica.

## Resumen rápido

#### ✅ Fortalezas principales:

- Excelente rendimiento para aplicaciones con alta concurrencia.
- Un solo lenguaje para front-end y back-end.
- Gran ecosistema con miles de paquetes en NPM.
- Perfecto para aplicaciones en tiempo real y APIs escalables.

#### ⚠️ Debilidades principales:

- No es ideal para tareas muy pesadas en CPU.
- La asincronía puede ser difícil de manejar si el equipo no tiene experiencia.
- Dependencias externas pueden generar problemas de seguridad si no se controlan.

#### 🛠️ Cuándo usarlo:

- APIs, microservicios, aplicaciones en tiempo real (chat, streaming, dashboards).
- Proyectos donde se busca rapidez en desarrollo y escalabilidad.

#### 🚫 Cuándo evitarlo:

- Procesamiento intensivo como inteligencia artificial, renderizado 3D o cálculos matemáticos complejos.
- Sistemas que requieren lógica de negocio muy secuencial y pesada.

---

# Temas {#temas#}

- [inicio](#node-js)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

### ¿Qué es un ORM?

Object Relational Mapper: herramienta que permite interactuar con bases de datos usando objetos y métodos en lugar de SQL directo (ejemplo: Sequelize, TypeORM, Prisma).

### ¿Qué es una API?

Application Programming Interface: conjunto de reglas que permite que dos aplicaciones se comuniquen. En el contexto web suele ser un servicio que expone datos y funcionalidades.

### ¿Qué es el patrón REST?

Estilo de arquitectura para construir APIs que utiliza `HTTP` y operaciones como `GET`, `POST`, `PUT`, `DELETE` siguiendo convenciones en las rutas y respuestas.

### ¿Qué es Serverless?

Modelo en el que no administras servidores, sino que el proveedor (ej: AWS Lambda, Firebase Functions) ejecuta funciones bajo demanda y escala automáticamente.

### ¿Qué es arquitectura de Microservicios?

Es un estilo donde una aplicación grande se divide en pequeños servicios independientes, cada uno con su propia lógica y base de datos, que se comunican entre sí (generalmente vía APIs).

---

### Lenguaje y fundamentos

- **JavaScript (JS):**\
  Lenguaje principal usado en Node.js.
- **ES6+ (ECMAScript):**\
  Nuevas características modernas de JavaScript (import/export, promesas, async/await).
- **Asincronía:**\
  Comprender callbacks, promesas y `async/await`.
- **Event Loop:**\
  Ciclo interno de Node.js que gestiona tareas de entrada/salida de forma no bloqueante.

### Módulos y dependencias

- **CommonJS (`require`):**\
  Sistema de módulos clásico en Node.js.
- **ECMAScript Modules (`import`):**\
  Sistema moderno para manejar módulos.
- **NPM (Node Package Manager):**\
  Gestión de paquetes y librerías externas.
- **package.json:**\
  Archivo que describe el proyecto y sus dependencias.

### Servidor y red

- **HTTP/HTTPS:**\
  Protocolo base para construir APIs y servidores web.
- **REST API:**\
  Estilo de arquitectura para diseñar endpoints.
- **Express.js:**\
  Framework minimalista para manejar rutas y middleware.

### Bases de datos

- **SQL:**\
  Lenguaje para bases relacionales (MySQL, PostgreSQL).
- **NoSQL:**\
  Bases no relacionales, ejemplo: MongoDB.
- **ORM/ODM:**\
  Abstracciones para trabajar con bases de datos (`Sequelize`, `Mongoose`).

### Pruebas y calidad

- **Jest / Mocha:**\
  Frameworks para pruebas unitarias y de integración.
- **Supertest:**\
  Pruebas de endpoints HTTP.
- **ESLint / Prettier:**\
  Herramientas para linting y formateo de código.

[🔼 temas](#temas)

---

# Herramientas recomendadas

### 1. Frameworks para aplicaciones web

- **Express.js**
  - Framework minimalista y flexible para construir APIs y aplicaciones web.
  - Muy popular y con gran ecosistema de middleware.
- **Fastify**
  - Alternativa a Express, más rápida y optimizada para alto rendimiento.
  - Compatible con plugins y validaciones de esquema.
- **NestJS**
  - Framework estructurado, basado en TypeScript y patrones como MVC y Dependency Injection.
  - Ideal para aplicaciones grandes y escalables.
- **Koa.js**
  - Framework minimalista creado por los mismos autores de Express.
  - Enfocado en la modernidad y uso de `async/await`.

### 2. Frameworks para tiempo real

- **Socket.io**\
  Para comunicación bidireccional en tiempo real (chat, notificaciones, juegos).
- **ws**\
  Implementación más ligera de WebSockets.

### 3. Bases de datos y ORM/ODM

- **Mongoose**\
  ODM para MongoDB, facilita la validación y modelado de datos.
- **Sequelize**\
  ORM para bases de datos SQL (PostgreSQL, MySQL, SQLite).
- **Prisma**\
  ORM moderno y tipado, ideal para TypeScript.\
  Manejo sencillo de migraciones y consultas complejas.

### 4. Testing y calidad

- **Jest**\
  Framework de testing completo para unit y integration tests.

- **Mocha + Chai**\
  Combinación clásica para tests y aserciones.

- **Vitest**\
  Alternativa rápida para proyectos modernos con TypeScript.

### 5. Utilidades y herramientas de desarrollo

- **Nodemon**\
  Reinicia automáticamente la app cuando detecta cambios en el código.

- **PM2**\
  Gestor de procesos para producción, monitorización y balanceo de carga.

- **dotenv**\
  Manejo de variables de entorno desde archivos `.env`.

- **ESLint + Prettier**\
  Linter y formateador para mantener código limpio y consistente.

- **Swagger / OpenAPI**\
  Documentación interactiva para APIs REST.

### 6. Seguridad y autenticación

- **Helmet**\
  Protección de cabeceras HTTP.

- **Cors**\
  Configuración de políticas de seguridad en peticiones HTTP.

- **Passport.js**\
  Autenticación con estrategias múltiples (JWT, OAuth, Google, etc).

- **jsonwebtoken (JWT)**\
   Para autenticación basada en tokens.
  > Estas herramientas combinadas permiten construir aplicaciones Node.js **seguras, escalables y mantenibles**, desde prototipos rápidos hasta sistemas de gran escala.

[🔼 temas](#temas)

---

# Snippets rápidos

### **Servidor básico con Express**

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### **Lectura y escritura de archivos**

```js
const fs = require("fs");

// Leer archivo
fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Escribir archivo
fs.writeFile("archivo.txt", "Contenido nuevo", (err) => {
  if (err) throw err;
  console.log("Archivo guardado");
});
```

### **Conexión a MongoDB con Mongoose**

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/miDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar", err));
```

[🔼 temas](#temas)

---

# Comandos

## Control de versiones de Node

```bash
nvm                           # controlador de version de Node.js
nvm install <v nroVersion>    # instala la version elegida
nvm list                      # muestra la versiones instaladas
nvm use <v nroVersion>        # activa la version elegida
nvm uninstall <v nroVersion>  # instala la version elegida
nvm alias default node        # usa la ultima version instalada
```

## Comandos Básicos

```bash
node nomArch            # Ejecuta archivos JavaScript con Node.js.
node -V                 # Muestra la versión actual de Node.js instalada.
node --inspect nomArch  # Inicia la depuración de un archivo JavaScript.
node .<comando>         # es la consola en Node.js
comandos                # [ break, clear, editor, exit, help, load, sav ]
```

## Comandos de NPM (Node Package Manager)

```bash
npm init                            # Crea un nuevo archivo package.json interactivo en el directorio actual.
npm i/install                       # Instala todas las dependencias listadas en package.json.
npm i/install <package>             # Instala un paquete específico y lo añade a package.json como DEPENDENCIA.
npm i/install <package> --save-dev  # Instala un paquete específico y lo añade a package.json como dev-dependencies.
npm un/uninstall <package>          # Desinstala un paquete específico y lo elimina de package.json.
npm run <script>                    # Ejecuta un script definido en la sección scripts de package.json.
npm ls/list                         # Muestra una lista de todos los paquetes instalados y sus dependencias.
npm outdate                         # Muestra una lista de paquetes desactualizado.
npm update <package>                # Actualiza todos los paquetes a sus versiones más recientes según las restricciones en package.json.
                                    # Se tiene que actualizar manualmente las DEPENDENCIA en el package.json
npm cache clean --forc              # Limpia la caché de npm.
```

## Paquete server

```bash
npm -i --g serve   # Es como live-server para Node.js
```

## Comandos de NPX

```bash
npx <command>   # Ejecuta comandos npm sin necesidad de instalarlos globalmente.
```

## Comandos de Control de Versiones

```bash
nvm install 14.17.0   # instalar la versión n°
nvm use 14.17.0       # usar la versión n°
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. Explica qué es Node.js y describe cómo maneja las operaciones de entrada y salida de manera no bloqueante.

Node.js es un entorno de ejecución de JavaScript del lado del servidor construido sobre el motor V8 de Google Chrome.  
Se caracteriza por ser **event-driven** (basado en eventos) y **non-blocking** (no bloqueante).  
Esto significa que las operaciones de entrada/salida (E/S) como lecturas de archivos, consultas a bases de datos o peticiones HTTP **no detienen la ejecución del programa**.  
En lugar de esperar la finalización de una tarea, Node.js utiliza **callbacks**, **promesas** o `async/await` para manejar los resultados cuando están listos.

**Ejemplo:**

```js
const fs = require("fs");
fs.readFile("archivo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("Leyendo archivo...");
```

**Salida:**

```
Leyendo archivo...
<contenido del archivo>
```

### 2. ¿Cuál es la diferencia entre require y import en Node.js? ¿Cuándo utilizarías cada uno?

#### `require`

- Sintaxis tradicional de CommonJS.
- Carga módulos de forma **sincrónica**.
- Se utiliza en versiones antiguas de Node.js.
- No requiere configuración especial.

```js
const express = require("express");
```

#### `import`

- Sintaxis moderna de ES Modules (ECMAScript).
- Puede ser cargado de forma **asincrónica**.
- Necesita `"type": "module"` en `package.json` o usar `.mjs`.

```js
import express from "express";
```

#### Cuándo usar cada uno:

- **`require`**\
  Proyectos antiguos o donde no se necesita compatibilidad con ES Modules.
- **`import`**\
  Proyectos modernos que buscan interoperabilidad con herramientas como React o TypeScript.

### 3. Describe la función del Event Loop en Node.js y cómo se relaciona con la concurrencia.

El **Event Loop** es el núcleo de Node.js encargado de gestionar tareas **asincrónicas**.  
Permite que Node.js maneje múltiples operaciones concurrentes sin usar múltiples hilos directamente.

#### Flujo básico:

1. Node.js ejecuta código en el **stack principal**.
2. Las tareas asincrónicas se envían a la **cola de eventos**.
3. El Event Loop revisa la cola y ejecuta los callbacks cuando estén listos.

> Esto permite que Node.js atienda miles de conexiones simultáneamente con un solo hilo principal.

### 4. ¿Qué diferencia existe entre procesos e hilos en Node.js y cómo los gestiona internamente?

- **Proceso:**\
  Instancia independiente de ejecución con su propia memoria.
- **Hilo:**\
  Unidad de ejecución dentro de un proceso que comparte memoria.

#### En Node.js:

- Usa **un solo hilo principal** para ejecutar JavaScript.
- Puede delegar tareas pesadas a un **Thread Pool** mediante **libuv** (por ejemplo, operaciones de archivos o cifrado).

**Para tareas paralelas:**

- **Worker Threads:**\
  Ejecutar JS en hilos separados.
- **Cluster:**\
  Ejecutar múltiples procesos que comparten el mismo puerto.

### 5. Menciona y explica al menos tres módulos nativos de Node.js.

- **fs (File System):** Manipulación de archivos.

  ```js
  const fs = require("fs");
  fs.readFileSync("archivo.txt", "utf8");
  ```

- **http:** Crear servidores web.

  ```js
  const http = require("http");
  http.createServer((req, res) => res.end("Hola mundo")).listen(3000);
  ```

- **path:** Manejo de rutas de archivos y directorios.
  ```js
  const path = require("path");
  console.log(path.join(__dirname, "archivo.txt"));
  ```

---

## 🟡 Intermedio

### 6. Describe el patrón de diseño EventEmitter.

`EventEmitter` es un patrón en el que **un objeto emite eventos** y otros objetos se **suscriben** a esos eventos.

**Ejemplo:**

```js
const EventEmitter = require("events");
const emisor = new EventEmitter();

// Suscriptor
emisor.on("saludo", (nombre) => console.log(`Hola ${nombre}`));

// Emisor
emisor.emit("saludo", "Fernando");
```

### 7. Diferencia entre código sincrónico y asincrónico.

- **Sincrónico:**\
  Las tareas se ejecutan en orden, bloqueando la siguiente hasta terminar.
- **Asincrónico:**\
  Las tareas se ejecutan sin bloquear, permitiendo atender otras tareas mientras una operación espera.

**Ejemplo asincrónico: Consulta a base de datos**

```js
db.query("SELECT * FROM usuarios", (err, data) => {
  console.log("Datos obtenidos");
});
console.log("Consulta enviada");
```

**Salida:**

```
Consulta enviada
Datos obtenidos
```

### 8. ¿Qué son los streams en Node.js y en qué casos se recomienda utilizarlos?

Los **streams** permiten procesar datos de manera **fragmentada**, sin cargar todo en memoria.  
Se usan para manejar **grandes cantidades de datos**, como archivos o videos.

#### Tipos de streams:

- **Readable:** Solo lectura.
- **Writable:** Solo escritura.
- **Duplex:** Lectura y escritura.
- **Transform:** Lectura, transformación y escritura.

**Ejemplo: Leer archivo línea por línea**

```js
const fs = require("fs");
const stream = fs.createReadStream("archivo.txt", "utf8");
stream.on("data", (chunk) => console.log(chunk));
```

### 9. Flujo de creación de una API REST sencilla con Express.

1. Instalar dependencias:
   ```bash
   npm install express
   ```
2. Crear servidor y definir rutas:

   ```js
   const express = require("express");
   const app = express();
   app.use(express.json());

   app.get("/api/usuarios", (req, res) =>
     res.json([{ id: 1, nombre: "Fernando" }])
   );

   app.listen(3000, () => console.log("Servidor en puerto 3000"));
   ```

3. Probar con Postman o cURL:
   ```bash
   curl http://localhost:3000/api/usuarios
   ```

### 10. Explica qué son los middlewares en Express.

Son funciones que se ejecutan **antes de llegar a la ruta final**, ideales para validaciones, autenticación o logging.

**Ejemplo: Middleware de validación**

```js
const validarNombre = (req, res, next) => {
  if (!req.body.nombre) return res.status(400).send("Falta el nombre");
  next();
};

app.post("/usuarios", validarNombre, (req, res) => res.send("Usuario creado"));
```

---

## 🔴 Avanzado

### 11. Gestión de memoria y fugas en Node.js.

Node.js usa **V8 Garbage Collector** para liberar memoria no utilizada.  
**Memory leaks** ocurren cuando variables no se liberan adecuadamente.

**Herramientas para detectarlos:**

- `--inspect` y Chrome DevTools.
- `clinic.js` y `node --inspect-brk`.

**Ejemplo de fuga:**

```js
let datos = [];
setInterval(() => {
  datos.push(new Array(1000000).fill("x")); // No se libera
}, 1000);
```

### 12. Problemas de seguridad comunes y mitigaciones.

- **Inyección SQL:**\
  Usar consultas preparadas u ORM.
- **Exposición de datos sensibles:**\
  Configurar variables en `.env`.
- **Ataques XSS:**\
  Usar librerías de sanitización como `helmet`.

### 13. Implementar clustering para múltiples núcleos.

```js
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  http.createServer((req, res) => res.end("Servidor activo")).listen(3000);
}
```

### 14. Optimizar manejo de archivos evitando bloqueos.

- Usar **streams** en lugar de `readFile`.
- Procesar en **chunks**.
- Emplear **workers** para tareas pesadas.

```js
const fs = require("fs");
const readStream = fs.createReadStream("archivo_grande.txt");
readStream.pipe(fs.createWriteStream("nuevo_archivo.txt"));
```

### 15. Caso de uso para WebSockets en tiempo real.

Ideal para **chats**, **notificaciones en vivo**, **juegos multijugador**.

**Configuración básica:**

```js
const { Server } = require("socket.io");
const io = new Server(3000);

io.on("connection", (socket) => {
  console.log("Usuario conectado");
  socket.on("mensaje", (msg) => io.emit("mensaje", msg));
});
```

**Cliente:**

```js
const socket = io("http://localhost:3000");
socket.on("mensaje", (msg) => console.log(msg));
socket.emit("mensaje", "Hola!");
```

[🔼 temas](#temas)

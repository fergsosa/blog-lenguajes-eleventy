---
layout: layout-post.njk
title: Node.js
img: /img/portada/node.avif
description: Ideas principales de Node.js
tags: ["blog", "lenguajes"]
date: "2023-02-02"
---

# {{title}}

![{{title}}]({{img}})

## ¿Qué es Node.js y en qué se diferencia de otros?

Node.js es un **entorno de ejecución de JavaScript** que se ejecuta **fuera del navegador**, construido sobre el motor V8 de Google Chrome.  
Permite usar JavaScript en el **lado del servidor** para crear aplicaciones escalables y rápidas.

#### Diferencias clave:

- **Asincronía y no bloqueo:** Usa un modelo basado en eventos y callbacks, ideal para manejar múltiples conexiones simultáneamente.

- **Un solo lenguaje:** Permite usar JavaScript tanto en el front-end como en el back-end.
- **Módulos integrados:** Viene con módulos como `http`, `fs` o `path` para construir servidores y trabajar con el sistema operativo sin dependencias externas.
- **Comunidad y ecosistema:** Cuenta con NPM, uno de los gestores de paquetes más grandes del mundo.

## ¿Para qué se usa y en qué contextos?

Node.js se utiliza principalmente para **aplicaciones que necesitan alta concurrencia** y operaciones en tiempo real, como:

- APIs y servicios REST o GraphQL.
- Aplicaciones de chat y mensajería instantánea.
- Streaming de video o audio.
- Dashboards en tiempo real.
- Microservicios y arquitecturas escalables.

**Mejor contexto:** cuando hay muchas operaciones de **entrada/salida (I/O)** y se busca eficiencia sin bloquear procesos.

## ¿Qué puedo construir con Node.js?

Con Node.js se pueden crear distintos tipos de aplicaciones, por ejemplo:

- **Backend de aplicaciones web:** REST API, GraphQL.

- **Sistemas en tiempo real:** chat, juegos multijugador, notificaciones en vivo.
- **Aplicaciones de streaming:** Netflix, Spotify, etc.
- **Automatizaciones y scripts:** bots, web scraping, herramientas CLI.
- **Microservicios y arquitecturas distribuidas.**
- **Aplicaciones serverless:** con plataformas como AWS Lambda o Vercel.

## ¿Cuándo es más conveniente usarlo?

#### Conviene usar Node.js cuando:

- Se requiere **alto rendimiento en I/O**, como bases de datos, APIs, sockets.
- Se busca un lenguaje unificado (JavaScript) para **frontend y backend**.
- El proyecto necesita **escalabilidad horizontal** (agregar más servidores fácilmente).
- El desarrollo debe ser **rápido** gracias a la gran cantidad de librerías en NPM.

#### No es la mejor opción cuando:

- Se realizan **cálculos intensivos** o procesamiento muy pesado de CPU.
- El sistema requiere **operaciones complejas y secuenciales** que no se benefician de la asincronía.
- El equipo no tiene experiencia en asincronía y manejo de promesas.

## Buenas prácticas y patrones recomendados para Node.js

- **Estructura modular:** separar el proyecto en controladores, rutas, servicios y utilidades.

- **Uso de Promesas y `async/await`:** para escribir código más limpio y legible.
- **Validar datos:** nunca confiar en la entrada del usuario. Usar librerías como `Joi` o `Zod`.
- **Manejo de errores centralizado:** middleware para capturar y gestionar errores.
- **Variables de entorno (`.env`):** no hardcodear credenciales ni configuraciones sensibles.
- **Logging:** usar herramientas como `Winston` o `Pino` para depuración y monitoreo.
- **Seguridad:**
  - Usar `helmet` para proteger cabeceras HTTP.
  - Sanitizar inputs para evitar inyecciones.
  - Mantener dependencias actualizadas.
- **Tests automatizados:** Mocha, Jest o Vitest para asegurar calidad del código.
- **Patrones recomendados:**
  - MVC (Modelo-Vista-Controlador) para organizar el código.
  - Repository Pattern para manejo de datos.
  - Middleware Pattern para modularizar la lógica.

---

## Resumen final

- **Fortalezas principales:**

  - Excelente rendimiento para aplicaciones con alta concurrencia.
  - Un solo lenguaje para front-end y back-end.
  - Gran ecosistema con miles de paquetes en NPM.
  - Perfecto para aplicaciones en tiempo real y APIs escalables.

- **Debilidades principales:**

  - No es ideal para tareas muy pesadas en CPU.
  - La asincronía puede ser difícil de manejar si el equipo no tiene experiencia.
  - Dependencias externas pueden generar problemas de seguridad si no se controlan.

- **Cuándo usarlo:**

  - APIs, microservicios, aplicaciones en tiempo real (chat, streaming, dashboards).
  - Proyectos donde se busca rapidez en desarrollo y escalabilidad.

- **Cuándo evitarlo:**
  - Procesamiento intensivo como inteligencia artificial, renderizado 3D o cálculos matemáticos complejos.
  - Sistemas que requieren lógica de negocio muy secuencial y pesada.

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

# Herramientas recomendadas

## 1. Frameworks para aplicaciones web

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

---

## 2. Frameworks para tiempo real

- **Socket.io**

  - Para comunicación bidireccional en tiempo real (chat, notificaciones, juegos).

- **ws**
  - Implementación más ligera de WebSockets.

---

## 3. Bases de datos y ORM/ODM

- **Mongoose**

  - ODM para MongoDB, facilita la validación y modelado de datos.

- **Sequelize**

  - ORM para bases de datos SQL (PostgreSQL, MySQL, SQLite).

- **Prisma**
  - ORM moderno y tipado, ideal para TypeScript.
  - Manejo sencillo de migraciones y consultas complejas.

---

## 4. Testing y calidad

- **Jest**

  - Framework de testing completo para unit y integration tests.

- **Mocha + Chai**

  - Combinación clásica para tests y aserciones.

- **Vitest**
  - Alternativa rápida para proyectos modernos con TypeScript.

---

## 5. Utilidades y herramientas de desarrollo

- **Nodemon**

  - Reinicia automáticamente la app cuando detecta cambios en el código.

- **PM2**

  - Gestor de procesos para producción, monitorización y balanceo de carga.

- **dotenv**

  - Manejo de variables de entorno desde archivos `.env`.

- **ESLint + Prettier**

  - Linter y formateador para mantener código limpio y consistente.

- **Swagger / OpenAPI**
  - Documentación interactiva para APIs REST.

---

## 6. Seguridad y autenticación

- **Helmet**

  - Protección de cabeceras HTTP.

- **Cors**

  - Configuración de políticas de seguridad en peticiones HTTP.

- **Passport.js**

  - Autenticación con estrategias múltiples (JWT, OAuth, Google, etc).

- **jsonwebtoken (JWT)**
  - Para autenticación basada en tokens.

---

> Estas herramientas combinadas permiten construir aplicaciones Node.js **seguras, escalables y mantenibles**, desde prototipos rápidos hasta sistemas de gran escala.

# Conceptos

- **Modelo cliente / servidor**: solicitudes
- **Patrón de software**: MVC (modelo vista controlador)
- **API REST**: CRUD: GET / POST / PUT / DELETE

## Conceptos Básicos

- **Entorno de Ejecución**: _( Ejecución de JavaScript en servidor )_

Node.js proporciona un entorno de tiempo de ejecución para JavaScript fuera del navegador, lo que significa que puedes ejecutar JavaScript en el servidor.

- **Event-Driven y Non-Blocking I/O** _( Programación orientada a eventos, E/S no bloqueante )_

Node.js utiliza un modelo de programación orientado a eventos y operaciones de entrada/salida no bloqueante, lo que permite manejar múltiples solicitudes simultáneamente sin bloquear el hilo de ejecución.

- **Módulos** _( División de la aplicación en módulos reutilizables )_

Node.js utiliza un sistema de módulos que permite la modularidad en el código. Puedes dividir tu aplicación en archivos pequeños y reutilizables, y luego importarlos según sea necesario en otros archivos.

- **npm: Node Package Manager** _( Gestión de paquetes y dependencias con npm )_

Es el sistema de gestión de paquetes de Node.js que te permite instalar, compartir y gestionar dependencias de proyectos fácilmente. npm es una de las mayores colecciones de paquetes de código abierto del mundo.

- **API de E/S Asíncrona** _( Operaciones de entrada/salida asíncronas )_

Node.js proporciona una amplia gama de APIs para realizar operaciones de entrada/salida de manera asíncrona, lo que significa que las operaciones pueden continuar mientras otras operaciones están en curso, sin bloquear el hilo de ejecución.

- **Single-Threaded pero Event-Loop** _( Modelo de event-loop para concurrencia eficiente )_

Node.js opera en un solo hilo, pero utiliza un modelo de event-loop que permite manejar múltiples solicitudes simultáneamente. Esto hace que sea eficiente para aplicaciones de red en tiempo real.

- **Escalabilidad** _( Altamente escalable para aplicaciones de red )_

Gracias a su modelo de E/S no bloqueante y su capacidad para manejar muchas conexiones simultáneas, Node.js es altamente escalable y adecuado para aplicaciones que requieren un alto rendimiento y concurrencia.

- **Desarrollo de API y Aplicaciones Web** _( Desarrollo de APIs, servidores web, aplicaciones en tiempo real )_

Node.js es comúnmente utilizado para desarrollar APIs RESTful, servidores web y aplicaciones de una sola página (SPA), así como aplicaciones en tiempo real como chat en línea, juegos multijugador y aplicaciones de transmisión de datos.

- **Frameworks y Bibliotecas** _( Utilización de frameworks y bibliotecas populares )_

Existen muchos frameworks y bibliotecas populares construidos sobre Node.js, como Express.js, Socket.io, Hapi.js, Koa.js, entre otros, que simplifican el desarrollo web y la creación de APIs.

- **Streaming de Datos** _( Eficiente para streaming de datos en tiempo real )_

Node.js es excelente para el manejo de datos en tiempo real, como el streaming de archivos o la transmisión de video, debido a su capacidad para manejar la E/S de manera eficiente.

- **Middleware** _( Funciones que manejan solicitudes HTTP intermedias )_

Son funciones intermedias que se ejecutan entre la recepción de una solicitud HTTP y el envío de una respuesta. En el contexto de Node.js y frameworks como Express.js, los middlewares pueden realizar tareas como el análisis del cuerpo de la solicitud, la autenticación, la gestión de sesiones, el registro de solicitudes, entre otros.

- **Callback** _( Funciones pasadas como argumentos a otras funciones )_

En JavaScript, un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal ha terminado de ejecutarse. Son comunes en Node.js para manejar operaciones asíncronas como lectura de archivos, solicitudes de red o consultas a bases de datos.

- **Promesa** _( Manejo asincrónico de operaciones, evita "callback hell" )_

Son objetos que representan el éxito o el fracaso eventual de una operación asíncrona y su valor resultante. Las promesas en Node.js proporcionan una forma más limpia y estructurada de manejar operaciones asincrónicas, evitando el "callback hell" y permitiendo un mejor manejo de errores.

- **Async/Await** _( Sintaxis para trabajar con promesas de manera síncrona )_

Es una sintaxis de JavaScript para trabajar con promesas de manera síncrona, haciéndolas parecer más como código síncrono. Las funciones marcadas con async devuelven automáticamente una promesa y la palabra clave await pausa la ejecución de la función hasta que la promesa se resuelve o se rechaza.

- **EventEmitted** _( Clase para emitir y escuchar eventos )_

Es una clase en Node.js que permite la implementación de un patrón de diseño de publicación/suscripción para la gestión de eventos. Los objetos EventEmitter pueden emitir eventos y los oyentes pueden suscribirse a esos eventos para ejecutar código específico cuando se emiten.

- **Buffed** _( Almacén temporal de datos binarios en memoria )_

Es un área de memoria que se utiliza para almacenar datos binarios de longitud fija. Los buffers son comúnmente utilizados en Node.js para trabajar con datos binarios como archivos, imágenes o datos de red.

- **Stream** _( Flujo de datos que se procesa incrementalmente )_

Es una abstracción en Node.js para leer o escribir datos de manera secuencial. Los streams permiten procesar grandes volúmenes de datos de manera eficiente, ya que no es necesario cargar todo el contenido en memoria de una vez.

- **Cluste** _( Módulo para crear procesos hijos en paralelo )_

El módulo Cluster en Node.js permite crear múltiples procesos hijos que comparten el mismo puerto del servidor. Esto mejora el rendimiento y la escalabilidad al permitir que un servidor Node.js utilice todos los núcleos de la CPU de manera eficiente.

- **N-AP** _( Interfaz de aplicación nativa para extensiones C++ )_

Es una interfaz de aplicación nativa en Node.js que proporciona una forma estable de escribir extensiones en C++ que sean compatibles con múltiples versiones de Node.js. Esto facilita la creación de módulos nativos para Node.js que no dependen de la versión específica de Node.js.

- **Debugged** _( Herramientas para depurar código Node.js )_

Debugger: Node.js ofrece herramientas integradas de depuración que permiten inspeccionar el estado de ejecución de una aplicación, establecer puntos de interrupción, rastrear variables y ejecutar el código paso a paso para identificar y corregir errores.

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

```

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

---

# Frameworks Express

**Express** es uno de los frameworks más populares para construir aplicaciones web con Node.js.\
**Métodos:** Routing / Middleware / Aplicación / Respuesta

## Métodos de Routing

Estos métodos se utilizan para definir las rutas y manejar las solicitudes HTTP.

### Maneja solicitudes HTTP

### estados

| estados | data          |
| :-----: | ------------- |
| **100** | informativa   |
| **200** | correctas     |
| **300** | redirecciones |
| **400** | cliente       |
| **500** | servidor      |

---

- **GET**: Se usa para _**OBTENER**_ datos del servidor.

```js
app.get(path, callback);

app.get("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud GET");
});
```

- **POST**: Se usa para _**ENVIAR**_ datos al servidor.

```js
app.post(path, callback);

app.post("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud POST");
});
```

- **PUT**: Se usa para _**ACTUALIZAR**_ datos en el servidor.

```js
app.put(path, callback);

app.put("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud PUT");
});
```

- **DELETE**: Se usa para _**ELIMINAR**_ datos del servidor.

```js
app.delete(path, callback);

app.delete("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud DELETE");
});
```

- **PATCH**: Se usa para _**realizar**_ ACTUALIZACIONES \* PARCIALES de los datos.

```js
app.patch(path, callback);

app.patch("/ruta", (req, res) => {
  res.send("Respuesta a una solicitud PATCH");
});
```

- **All**: Maneja todas las **solicitudes** HTTP para UNA ruta _**específica**_.

```js
app.all(path, callback);

app.all("/ruta", (req, res) => {
  res.send("Respuesta a cualquier tipo de solicitud HTTP");
});
```

## Métodos de Middleware

Estos métodos se usan para ejecutar código antes de llegar a la ruta específica.
Es extremadamente útil para organizar y modularizar la lógica de la aplicación, permitiendo añadir funcionalidades comunes de manera eficiente y estructurada.
Aplica middleware a todas las rutas que coinciden con el path especificado.

```js

app.use(middleware):    # Aplica middleware a todas las rutas de la aplicación.

app.use(path, middleware);

app.use("/ruta", (req, res, next) => {
  console.log("Middleware ejecutado");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware ejecutado para todas las rutas");
  next();
});

```

## Métodos de Aplicación

Estos métodos se usan para configurar y manejar la aplicación.

- **Listen**: Inicia el servidor en el puerto especificado.

```js
app.listen(port, callback):

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
```

- **Set**: Establece una variable de configuración.

```js
app.set(name, value):

app.set("view engine", "ejs");
```

- **Get**: Obtiene una variable de configuración.

```js
app.get(name):

const engine = app.get("view engine");
```

## Métodos de Respuesta

Estos métodos se usan para enviar respuestas al cliente.

- **Send**: Envía una respuesta de varios tipos al cliente.

```js
res.send(data);

res.send("Hola, mundo");
```

- **Json**: Envía una respuesta en formato JSON.

```js
res.json(data);

res.json({ mensaje: "Hola, mundo" });
```

- **Status**: Establece el código de estado HTTP para la respuesta.

```js
res.status(code);

res.status(404).send("No encontrado");
```

- **Redirect**: Redirige la solicitud a una URL diferente.

```js
res.redirect(url);

res.redirect("/nueva-ruta");
```

- **Render**: Renderiza una vista utilizando el motor de plantillas configurado.

```js
res.render(view, data);

res.render("index", { titulo: "Página de Inicio" });
```

#### Estos métodos son fundamentales para trabajar con Express y permiten manejar y responder a las solicitudes HTTP de manera efectiva.

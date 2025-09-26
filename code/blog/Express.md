---
layout: layout-post.njk
title: Express
img: /img/portada/express.avif
description: Framework NodeJS, APIs rápidas.
tags: ["blog", "backend"]
date: "2024-07-02"
---

# {{title}}

![img]({{img}})
Express.js es uno de los frameworks más populares para construir aplicaciones web y APIs en Node.js. Es conocido por su **simplicidad, flexibilidad y rapidez**, lo que lo convierte en una herramienta ideal tanto para desarrolladores principiantes como para proyectos de gran escala.

---

## ¿Qué es {{title}}?

**Express.js** es un _framework minimalista_ para Node.js que proporciona herramientas para gestionar el enrutamiento, solicitudes HTTP, middleware y la creación de APIs.

**Principales diferencias frente a otros frameworks:**

- Es **ligero y no impone una estructura fija**, a diferencia de frameworks como _Django_ (Python) o _Laravel_ (PHP).
- Permite una **gran personalización**, ideal para proyectos donde se requiere control detallado.
- Tiene una **curva de aprendizaje baja** debido a su sintaxis simple.
- Una comunidad **amplia y activa**, con gran cantidad de paquetes compatibles.

### 2. ¿Para qué se usa?

Express se utiliza principalmente para desarrollar aplicaciones que requieren un **backend basado en JavaScript**.  
Algunos contextos donde se aplica mejor:

- **APIs REST** para aplicaciones web o móviles.
- **Servidores web** que manejan peticiones y respuestas.
- **Aplicaciones en tiempo real** en conjunto con tecnologías como _Socket.IO_.
- **Microservicios** debido a su modularidad y bajo peso.
- Prototipos rápidos gracias a su facilidad de configuración.

### 3. ¿Qué puedo construir con {{title}}?

Con Express puedes desarrollar una amplia variedad de soluciones, como:

- 🌐 **Sitios web dinámicos** con manejo de rutas y plantillas.
- 📱 **APIs RESTful** para comunicación entre frontend y backend.
- 💾 **Sistemas de autenticación** y manejo de usuarios.
- 📤 **Servicios de subida y descarga de archivos**.
- 🔌 **Integraciones con bases de datos** como MongoDB, MySQL o PostgreSQL.
- ⚡ **Aplicaciones en tiempo real** como chats o notificaciones en vivo.

### 4. ¿Cuándo es más conveniente usarlo?

#### Es recomendable usar Express cuando:

- Buscas **flexibilidad y control total** sobre la arquitectura.
- Necesitas **desarrollar rápido** sin la sobrecarga de frameworks grandes.
- Quieres trabajar en proyectos que **escalen gradualmente**.
- Tu equipo ya está familiarizado con **JavaScript y Node.js**.
- Deseas integrar **tecnologías modernas** como React, Angular o Vue en el frontend.

#### No es la mejor opción cuando:

- Necesitas un framework **opinado y con estructura predefinida** (como NestJS o Django).
- El proyecto es extremadamente grande y requiere muchas **reglas y convenciones claras**.

## Buenas prácticas recomendadas

Para escribir buen código en Express, considera lo siguiente:

#### Estructura del proyecto

- Separar el código en **capas**:
  - **Rutas (Routes):** Definir endpoints.
  - **Controladores (Controllers):** Lógica de negocio.
  - **Modelos (Models):** Interacción con la base de datos.
  - **Utilidades (Utils):** Funciones auxiliares.
  - **Middleware:** Autenticación, validación, logging, etc.

#### Patrones recomendados

- **MVC (Modelo-Vista-Controlador):**\
  Mantiene el código organizado y escalable.
- **Uso de middleware reutilizables:**\
  Para validación, seguridad y manejo de errores.
- **Variables de entorno (.env):**\
  Para configuración sensible.
- **Logger:**\
  Para registrar errores y eventos (ej. `morgan` o `winston`).
- **Control centralizado de errores:**\
  Manejar errores con un middleware único.

#### Otros consejos

- Mantener dependencias actualizadas.
- Documentar la API con herramientas como Swagger o Postman.
- Implementar tests con Jest, Mocha u otra librería.
- Seguir buenas prácticas de seguridad:
  - Sanitizar datos de entrada.
  - Usar `helmet` y `cors` para proteger la API.
  - Configurar HTTPS cuando sea necesario.

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Ligero y flexible.
- Amplia comunidad y ecosistema de paquetes.
- Rápido para prototipar y escalar.
- Fácil integración con bases de datos y frontend moderno.

#### ⚠️ Debilidades principales:

- Carece de una estructura predefinida, lo que puede generar desorden en proyectos grandes.
- Algunas funcionalidades deben agregarse manualmente mediante middleware.
- No tan seguro por defecto, requiere configuración extra.

#### 🛠️ Cuándo usarlo:

- Proyectos pequeños o medianos que necesitan escalar con el tiempo.
- Desarrollo rápido de APIs y servidores.
- Cuando se busca flexibilidad y control total sobre la arquitectura.

#### 🚫 Cuándo evitarlo:

- Proyectos muy grandes donde se necesita un framework con reglas y convenciones claras.
- Cuando se prefiere un framework más completo y con soporte integrado, como _NestJS_, _Django_ o _Rails_.

---

# Temas {#temas#}

- [inicio](#que-es-express)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de profundizar en Express, es importante tener claros algunos conceptos que suelen estar vinculados a su uso. Estos conceptos forman la base para entender cómo funciona y cómo integrarlo con otras tecnologías.

### Node.js

- **_Definición:_** Entorno de ejecución de JavaScript en el servidor.
- Express está construido sobre Node.js, por lo que conocer cómo funcionan los módulos, el Event Loop y `npm` es fundamental.

#### Comando para iniciar un proyecto Node:

```bash
npm init -y
```

### HTTP y sus métodos

Express se basa en el protocolo **HTTP** para enviar y recibir información.

#### Métodos más comunes:

| método   | acción                   |
| -------- | ------------------------ |
| `GET`    | Obtener datos.           |
| `POST`   | Enviar o crear datos.    |
| `PUT`    | Actualizar datos.        |
| `PATCH`  | Actualizar parcialmente. |
| `DELETE` | Eliminar datos.          |

### Middleware

Funciones que se ejecutan **entre la solicitud del cliente y la respuesta del servidor**.\
**Usos comunes**: autenticación, validación de datos, manejo de errores y logs.

**_Ejemplo básico:_**

```javascript
app.use((req, res, next) => {
  console.log(`Método: ${req.method} - Ruta: ${req.url}`);
  next();
});
```

### Enrutamiento

Proceso de definir **endpoints o rutas** que responden a solicitudes específicas.

**_Ejemplo básico:_**

```javascript
app.get("/usuarios", (req, res) => {
  res.send("Lista de usuarios");
});
```

### JSON

- Formato estándar para enviar y recibir datos.
- Express permite procesar JSON fácilmente:
  ```javascript
  app.use(express.json());
  ```

### Variables de Entorno (.env)

Archivo donde se guardan configuraciones sensibles como credenciales, claves de API y puertos.

**_Ejemplo en `.env`:_**

```
PORT=3000
DB_URI=mongodb+srv://usuario:clave@cluster.mongodb.net
```

**Uso en código:**

```javascript
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.PORT);
```

### REST y RESTful

- **REST:**\
  Arquitectura para diseñar APIs.
- **RESTful:**\
  Implementación de una API que sigue los principios REST.
- **_Beneficios_:**\
  simplicidad y organización, estándar ampliamente usado.

### Bases de datos

Express no incluye una base de datos integrada, pero se suele usar con:

- **MongoDB**\
  NoSQL, flexible y escalable.
- **MySQL**\
  SQL, estructurado y ampliamente usado.
- **PostgreSQL**\
  SQL, potente y seguro.

#### Conexión básica con MongoDB usando Mongoose:

```javascript
import mongoose from "mongoose";

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Base de datos conectada"))
  .catch((err) => console.error(err));
```

[🔼 temas](#temas)

---

# Herramientas recomendadas

Estas herramientas facilitan el desarrollo, pruebas y despliegue de aplicaciones con Express:

### Node.js y npm

- Node.js es el entorno que ejecuta Express.
- npm gestiona dependencias y librerías.

#### Comandos básicos:

```bash
node index.js     # Ejecutar aplicación
npm install       # Instalar dependencias
npm run dev       # Correr script en modo desarrollo
```

### Nodemon

Reinicia automáticamente el servidor cuando detecta cambios.

```bash
npm install nodemon --save-dev    # Instalación:
npx nodemon index.js              # Uso:
```

### Postman o Insomnia

- Herramientas para **probar APIs** de manera visual.
- Permiten enviar solicitudes HTTP, probar rutas y gestionar colecciones.

### dotenv

Manejo de **variables de entorno**.

```bash
npm install dotenv     #Instalación
```

### Morgan

Middleware para registrar información sobre solicitudes.

```bash
# Instalación:
npm install morgan

# Uso:
import morgan from "morgan";
app.use(morgan("dev"));
```

### Helmet

Mejora la **seguridad** agregando cabeceras HTTP.

```bash
# Instalación:
npm install helmet

# Uso:
import helmet from "helmet";
app.use(helmet());
```

### Cors

Controla quién puede acceder a la API desde otros dominios.

```bash
# Instalación:
npm install cors

# Uso:
import cors from "cors";
app.use(cors());
```

### Swagger (Documentación de APIs)

- Herramienta para **documentar y visualizar APIs**.
- Facilita pruebas y entendimiento de endpoints.

### Git y GitHub

- Control de versiones y colaboración.

#### Comandos básicos:

```bash
git init
git add .
git commit -m "Primer commit"
git push origin main
```

### Vercel / Render / Railway

- Plataformas para **desplegar aplicaciones Express** en la nube.
- Beneficios: fácil integración con GitHub, escalabilidad automática y configuración mínima.

[🔼 temas](#temas)

---

# Snippets rápidos

### Servidor básico:

```javascript
import express from "express";
const app = express();
app.get("/", (req, res) => res.send("¡Hola!"));
app.listen(3000, () => console.log("Servidor corriendo"));
```

### Middleware de JSON:

```javascript
app.use(express.json());
```

### Middleware personalizado:

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

### Ruta GET con parámetro:

```javascript
app.get("/usuario/:id", (req, res) => {
  res.send(`Usuario ${req.params.id}`);
});
```

### Ruta POST para recibir datos:

```javascript
app.post("/usuario", (req, res) => {
  res.json({ recibido: req.body });
});
```

### Error handler middleware:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Ocurrió un error");
});
```

### Uso de CORS:

```javascript
import cors from "cors";
app.use(cors());
```

### Logger con Morgan:

```javascript
import morgan from "morgan";
app.use(morgan("dev"));
```

### Variables de entorno:

```javascript
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.PORT);
```

[🔼 temas](#temas)

---

# Comandos

### Instalar Express:

```bash
npm install express
```

### Ejecutar servidor Node:

```bash
node index.js
```

### Ejecutar con nodemon (reinicio automático):

```bash
npx nodemon index.js
```

### Agregar middleware JSON:

```javascript
app.use(express.json());
```

### Definir rutas básicas:

```javascript
app.get("/ruta", (req, res) => res.send("GET"));
app.post("/ruta", (req, res) => res.send("POST"));
app.put("/ruta", (req, res) => res.send("PUT"));
app.delete("/ruta", (req, res) => res.send("DELETE"));
```

### Obtener parámetros de ruta:

```javascript
req.params.id;
```

### Obtener datos del body:

```javascript
req.body;
```

### Enviar JSON como respuesta:

```javascript
res.json({ mensaje: "Hola" });
```

### Enviar estado HTTP:

```javascript
res.status(404).send("No encontrado");
```

### Registrar middleware personalizado:

```javascript
app.use((req, res, next) => {
  next();
});
```

### Importar módulos (ESM):

```javascript
import express from "express";
```

### Importar módulos (CommonJS):

```javascript
const express = require("express");
```

### Escuchar puerto del servidor:

```javascript
app.listen(3000, () => console.log("Servidor corriendo"));
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es Express.js y en qué se diferencia de usar directamente el módulo HTTP nativo?

- **Express.js** es un framework minimalista para Node.js que simplifica la creación de aplicaciones web y APIs.

#### Diferencias con `http` nativo:

- Express abstrae la creación de rutas, middlewares y respuestas.
- Con `http` tienes que manejar manualmente cabeceras, parseo de body y rutas.
- Express aporta **middlewares, enrutamiento sencillo y utilidades integradas**.

### 2. Crear un servidor básico y definir una ruta

```javascript
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hola, mundo!");
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
```

### 3. ¿Qué son los middlewares?

- **Middlewares** son funciones que tienen acceso al `req`, `res` y a `next()`.
- Se usan para **modificar la request**, **validar datos**, **manejar errores** o **añadir funcionalidades**.

> **_Ejemplo típico:_**

```javascript
app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next();
});
```

### 4. Diferencia entre `app.use()` y `app.get()`

- **`app.use()`**\
  Aplica un middleware para **todas las rutas** o un path específico.
- **`app.get()`**\
  Define una ruta específica que responde a **peticiones GET**.

### 5. Parámetros de ruta y de consulta

#### Ruta con parámetros

```javascript
app.get("/users/:id", (req, res) => {
  res.send(`Usuario ID: ${req.params.id}`);
});
```

#### Parámetros de consulta (?name=Ana)

```javascript
app.get("/search", (req, res) => {
  res.send(`Buscando: ${req.query.name}`);
});
```

### 6. Propósito de `express.json()` y `express.urlencoded()`

- **`express.json()`:**\
  Parsear JSON en el body de las requests.
- **`express.urlencoded()`:**\
  Parsear datos de formularios (URL-encoded).

### 7. Función de `next()`

**`next()`** llama al siguiente middleware en la cadena.

- **Problema si se olvida:**\
  La petición queda colgada, sin respuesta.

---

## 🟡 Intermedio

### 8. Estructura de proyecto con Express

```bash
project/
├── controllers/             # Lógica de negocio.
│   └── userController.js
├── routes/                  # Definición de rutas.
│   └── userRoutes.js
├── middlewares/             # Validaciones, autenticación.
│   └── authMiddleware.js
├── app.js                   # Configuración de Express.
└── server.js                # Arranque del servidor.
```

### 9. Middleware global vs. a nivel de ruta

#### Global:

```javascript
app.use((req, res, next) => {
  console.log("Middleware global");
  next();
});
```

#### Ruta específica:

```javascript
app.get("/admin", authMiddleware, (req, res) => {
  res.send("Panel de admin");
});
```

### 10. Manejo de errores con middleware

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});
```

### 11. Diferencia entre `res.send()`, `res.json()` y `res.end()`

- **`res.send()`:**\
  Envía texto, HTML o JSON (auto-detecta).
- **`res.json()`:**\
  Envía respuesta con JSON y cabecera `application/json`.
- **`res.end()`:**\
  Finaliza la respuesta sin enviar datos adicionales.

### 12. Carga de archivos con Multer

```javascript
import multer from "multer";
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send(`Archivo subido: ${req.file.originalname}`);
});
```

### 13. Proteger rutas con autenticación

```javascript
function authMiddleware(req, res, next) {
  if (req.headers.authorization === "Bearer token123") {
    next();
  } else {
    res.status(401).send("No autorizado");
  }
}

app.get("/private", authMiddleware, (req, res) => {
  res.send("Contenido privado");
});
```

### 14. Orden de ejecución en Express

- **Orden de declaración = orden de ejecución**.
- Primero los **middlewares globales**, luego las **rutas específicas**.
- Si no se llama a `next()`, el flujo se corta.

---

## 🔴 Avanzado

### 15. Optimización para 10,000 peticiones concurrentes

#### Caching:

- Cachear respuestas frecuentes con Redis o en memoria.
- Uso de CDN para contenido estático.

#### Compression:

```javascript
import compression from "compression";
app.use(compression());
```

#### Balanceo de carga:

- Usar **PM2 cluster mode** o **Node Cluster API**.
- Balanceadores externos como **NGINX** o **AWS ELB**.

#### Buenas prácticas de arquitectura:

- Usar **bases de datos optimizadas con índices**.
- Implementar **pool de conexiones**.
- **Dividir la app en microservicios** si escala.
- Evitar operaciones bloqueantes, usar **async/await** y **streams**.

[🔼 temas](#temas)

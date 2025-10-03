---
layout: layout-post.njk
title: Axios
img: /img/portada/axios.avif
description: Ideas principales de Axios
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![img]({{img}})

[temas](#temas)

## ¿Qué es {{title}}?

Axios es una **librería basada en Promesas para realizar solicitudes HTTP** desde el navegador o Node.js.  
A diferencia de usar directamente `fetch` (nativo en los navegadores), Axios proporciona una interfaz más **amigable, concisa y robusta**, con soporte integrado para:

- **Transformación automática de JSON** (no se requiere `response.json()`).
- **Intercepción de peticiones y respuestas**.
- **Cancelación de solicitudes**.
- **Compatibilidad amplia** con navegadores antiguos.
- **Configuraciones globales** de headers y baseURL.

### 1. ¿Para qué se usa?

Axios se utiliza para **comunicar aplicaciones frontend con APIs** o para hacer **peticiones desde servidores Node.js a otros servicios externos**.  
Se aplica especialmente en:

- **Frontend web y móvil**\
  (React, Vue, Angular).
- **SSR (Server Side Rendering)**\
  con Node.js o frameworks como Next.js.
- **Integración con APIs externas**\
  (REST, GraphQL, microservicios).
- **Aplicaciones que requieren manejo avanzado de errores, autenticación o configuración global.**

### 2. ¿Qué puedo construir con {{title}}?

Con Axios puedes construir:

- **Conexiones a APIs REST**\
  para consumir datos en tu app.
- **Clientes HTTP personalizados**\
  con configuración de seguridad (tokens JWT, OAuth).
- **Integraciones de microservicios**\
  dentro de aplicaciones backend.
- **Dashboards y paneles de control**\
  que dependen de datos dinámicos.
- **Automatización de solicitudes a servicios externos**\
  (por ejemplo, bots que consultan APIs).

### 3. ¿Cuándo es más conveniente usarlo?

Es recomendable usar Axios cuando:

- Necesitas **interceptores** para modificar headers antes de enviar peticiones.
- Requieres **gestionar errores y respuestas** de manera uniforme.
- Trabajas con **cancelación de solicitudes** (por ejemplo, en búsquedas en vivo).
- Quieres **simplificar la sintaxis** respecto a `fetch`.

## Buenas prácticas recomendadas

- **Centralizar la configuración**\
  en un archivo común con `axios.create()`.
- **Usar interceptores**\
  para gestionar autenticación y logging.
- **Manejar errores globales**\
  para evitar repetición de código.
- **Cancelar solicitudes innecesarias**\
  en componentes que se desmontan.
- **Evitar hardcodear URLs**;\
  usar variables de entorno (process.env.API_URL).
- **Separar la lógica de negocio de las llamadas HTTP**,\
  creando servicios o utilidades específicas.

## Resumen rápido

#### ✅ Fortalezas principales:

- Manejo de JSON automático.
- Interceptores de peticiones/respuestas.
- Cancelación de solicitudes.
- Sintaxis clara y concisa.

#### ⚠️ Debilidades principales:

- Peso adicional frente a fetch nativo.
- Dependencia externa (no estándar del navegador).
- Menor soporte a largo plazo que APIs nativas.

#### 🛠️ Cuándo usarlo:

- Cuando tu proyecto requiere configuración global, interceptores o manejo avanzado de errores.
- En apps grandes que consumen múltiples APIs.
- En entornos Node.js donde fetch puede no estar disponible.

#### 🚫 Cuándo evitarlo:

- En proyectos pequeños donde fetch es suficiente.
- Cuando se busca minimizar dependencias externas.
- Si necesitas máxima compatibilidad con navegadores muy modernos (donde fetch ya es estándar).

---

# Temas {#temas#}

- [inicio](#que-es-axios)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes o junto a Axios es recomendable conocer algunos **conceptos clave** que te ayudarán a sacarle mayor provecho:

### HTTP y sus métodos:

`GET`, `POST`, `PUT`, `PATCH`, `DELETE`.  
 _Axios simplifica su uso, pero es importante entender qué hace cada uno._

### Promesas y `async/await`:

Axios trabaja con promesas, por lo que es fundamental comprender cómo manejarlas.

### JSON (JavaScript Object Notation):

Formato estándar de intercambio de datos entre cliente y servidor.

### APIs RESTful:

Diseño de servicios web que utilizan métodos HTTP para la comunicación entre aplicaciones.

### Códigos de estado HTTP:

(200 éxito, 404 no encontrado, 500 error interno, etc.) para manejar respuestas adecuadas.

### Headers HTTP:

Información adicional enviada en las peticiones y respuestas (ej. autenticación, tipo de contenido).

### Manejo de errores en peticiones:

Cómo capturar y tratar excepciones en caso de fallas de red o respuestas inválidas.

### Cancelación de solicitudes:

Evitar llamadas innecesarias cuando el usuario cambia de vista o componente.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar de manera **eficiente y profesional** con Axios, estas son herramientas y recursos clave:

### 1. `axios.create()`:

Permite crear una instancia personalizada con configuraciones predeterminadas como `baseURL` o `headers`.

```javascript
const api = axios.create({
  baseURL: "https://api.miservicio.com",
  timeout: 5000,
  headers: { Authorization: "Bearer token123" },
});
```

### 2. Interceptors (Interceptors de Axios):

Middleware para modificar peticiones o respuestas antes de que lleguen al código principal. Útil para **tokens de autenticación**, logging o manejo centralizado de errores.

```javascript
api.interceptors.request.use((config) => {
  console.log("Petición enviada:", config.url);
  return config;
});
```

### 3. CancelToken / AbortController:

Mecanismo para **cancelar solicitudes** en curso, muy útil en aplicaciones con búsquedas en vivo o componentes que se desmontan.

### 4. Configuración Global (`defaults`):

Definir headers, baseURL y timeouts de forma global para no repetir en cada llamada.

```javascript
axios.defaults.baseURL = "https://api.global.com";
axios.defaults.headers.common["Authorization"] = "Bearer globalToken";
```

### 5. Manejo de errores con `try/catch` y `error.response`:

Permite capturar respuestas erróneas y actuar según el estado devuelto.

### 6. Integración con frameworks modernos:

- React: consumo de APIs en hooks (`useEffect`) o contextos globales.
- Vue: uso dentro de `services` o Vuex.
- Node.js: llamadas a servicios externos desde el backend.

### 7. Documentación oficial:

[https://axios-http.com](https://axios-http.com)  
 Recurso clave para aprender funciones avanzadas, configuraciones y casos de uso.

[🔼 temas](#temas)

---

# Comandos

### 1. GET

#### Obtener datos

```javascript
axios
  .get("/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
```

### 2. POST

#### Enviar datos

```javascript
axios
  .post("/users", { name: "Juan", age: 25 })
  .then((res) => console.log(res.data));
```

### 3. PUT

#### Reemplazar un recurso

```javascript
axios
  .put("/users/1", { name: "Pedro", age: 30 })
  .then((res) => console.log(res.data));
```

### 4. PATCH

#### Actualizar parcialmente

```javascript
axios.patch("/users/1", { age: 31 }).then((res) => console.log(res.data));
```

### 5. DELETE

#### Eliminar un recurso

```javascript
axios.delete("/users/1").then((res) => console.log("Usuario eliminado"));
```

### 6. Configuración con parámetros

```javascript
axios
  .get("/users", { params: { page: 2, limit: 5 } })
  .then((res) => console.log(res.data));
```

### 7. Headers personalizados

```javascript
axios.get("/profile", {
  headers: { Authorization: "Bearer token123" },
});
```

### 8. Instancia personalizada (`axios.create`)

```javascript
const api = axios.create({ baseURL: "https://api.miapp.com" });
api.get("/status").then((res) => console.log(res.data));
```

### 9. Interceptor de peticiones

```javascript
axios.interceptors.request.use((config) => {
  config.headers["Authorization"] = "Bearer token123";
  return config;
});
```

### 10. Manejo de errores

```javascript
try {
  const res = await axios.get("/users/99");
} catch (err) {
  console.error(err.response.status); // Ej: 404
}
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es Axios y para qué se utiliza?

Axios es una librería basada en Promesas para realizar solicitudes HTTP desde el navegador o Node.js. Se usa para **consumir APIs REST**, enviar y recibir datos en formatos como JSON.

### 2. ¿En qué se diferencia Axios de `fetch` nativo?

- Axios convierte automáticamente las respuestas en JSON.
- Tiene soporte para **interceptores**, **cancelación de solicitudes** y **timeouts**.
- `fetch` requiere más código manual para manejar errores y transformar respuestas.

### 3. ¿Cómo se realiza una petición GET básica con Axios?

```javascript
axios
  .get("/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
```

### 4. ¿Cómo se envía información con un POST en Axios?

```javascript
axios
  .post("/users", { name: "Ana", age: 28 })
  .then((res) => console.log(res.data));
```

### 5. ¿Qué tipo de datos devuelve Axios por defecto en una respuesta?

Devuelve un **objeto de respuesta** con varias propiedades:

- **`data`:**\
  los datos de la respuesta.
- **`status`:**\
  código de estado HTTP.
- **`headers`:**\
  encabezados de la respuesta.
- **`config`:**\
  configuración de la petición.

---

## 🟡 Intermedio

### 6. ¿Qué son los interceptores en Axios?

Son funciones que se ejecutan **antes de enviar una petición o recibir una respuesta**. Se usan para agregar tokens de autenticación, logs, manejo de errores global o modificar datos.

```javascript
axios.interceptors.request.use((config) => {
  config.headers["Authorization"] = "Bearer token123";
  return config;
});
```

### 7. ¿Cómo se configuran headers personalizados en Axios?

```javascript
axios.get("/profile", {
  headers: { Authorization: "Bearer token123" },
});
```

### 8. ¿Qué ventaja ofrece `axios.create(

Permite crear una **instancia personalizada** con configuración global (baseURL, headers, timeout), evitando repetir código en cada solicitud.

### 9. ¿Cómo maneja Axios los errores?

Con `try/catch` o `.catch()`. El error incluye información útil como `error.response`, `error.request` y `error.message`.

```javascript
try {
  const res = await axios.get("/no-existe");
} catch (err) {
  console.error(err.response.status); // 404
}
```

### 10. ¿Cómo enviar parámetros en una petición GET?

```javascript
axios.get("/users", { params: { page: 2, limit: 10 } });
```

---

## 🔴 Avanzado

### 11. ¿Cómo cancelar una petición en Axios?

Mediante `AbortController` (versión moderna) o `CancelToken` (antigua).

```javascript
const controller = new AbortController();
axios.get("/search", { signal: controller.signal });
// Cancelar
controller.abort();
```

### 12. ¿Cómo se integra Axios en un proyecto con React?

Se recomienda usarlo dentro de `useEffect` o crear servicios externos. Ejemplo:

```javascript
useEffect(() => {
  axios.get("/users").then((res) => setUsers(res.data));
}, []);
```

### 13. ¿Qué es el `timeout` en Axios y cómo configurarlo?

Es el tiempo máximo de espera para una respuesta antes de cancelar la petición.

```javascript
axios.get("/slow", { timeout: 5000 });
```

### 14. ¿Cómo manejar múltiples peticiones en paralelo con Axios?

Usando `Promise.all`.

```javascript
const [res1, res2] = await Promise.all([
  axios.get("/users"),
  axios.get("/posts"),
]);
```

### 15. ¿Qué buenas prácticas se recomiendan al usar Axios en proyectos grandes?

- Centralizar configuración con `axios.create()`.
- Usar interceptores para autenticación y logging.
- Manejar errores de forma global.
- Cancelar solicitudes innecesarias en componentes desmontados.
- No hardcodear URLs; usar variables de entorno.

[🔼 temas](#temas)

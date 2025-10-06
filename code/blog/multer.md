---
layout: layout-post.njk
title: Multer
img: /img/portada/multer.avif
description: Maneja archivos en solicitudes multipart/form-data.
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![img]({{img}})

## ¿Qué es {{title}}?

**Multer** es un middleware de Node.js para manejar **multipart/form-data**, que es principalmente usado para subir archivos desde formularios HTML.

#### Diferencia clave:

A diferencia de otros middlewares como `body-parser`, que solo parsean datos JSON o URL-encoded, Multer está especializado en manejar **archivos binarios** y combinarlos con datos de formularios.

> Funciona en conjunto con **Express.js**, integrándose fácilmente en rutas de API.

### 1. ¿Para qué se usa?

Se usa principalmente para **subida de archivos** al servidor: imágenes, documentos, videos, etc.

#### Contextos ideales:

- Aplicaciones web con formularios de subida de archivos.
- APIs que reciben archivos de clientes móviles o frontends.
- Proyectos donde se necesita procesar archivos antes de almacenarlos en un servicio externo (ej. AWS S3, Cloudinary).

#### Permite definir:

- **Destino de almacenamiento** (disco o memoria).
- **Nombre de archivo** y **estructura de carpetas**.
- **Filtros de tipo de archivo** y tamaño máximo.

### 2. ¿Qué puedo construir con {{title}}?

- **Sistemas de gestión de archivos**:\
  subir, renombrar, validar y almacenar archivos.
- **Plataformas de contenido**:\
  blogs, redes sociales, portfolios con subida de imágenes y videos.
- **APIs RESTful**\
  que requieren recibir archivos junto con datos de formularios.
- **Integraciones con servicios en la nube**\
  para almacenamiento de archivos.

### 3. ¿Cuándo es más conveniente usarlo?

#### Úsalo cuando:

- Necesites **procesar archivos en el backend** directamente desde formularios HTML.
- Busques una solución **ligera y específica para Express**.
- Requieras **control sobre almacenamiento temporal o permanente** de archivos antes de enviarlos a otro servicio.

#### Alternativas (como `formidable` o `busboy`) podrían ser más convenientes si:

- Se busca **mayor rendimiento** en aplicaciones con subida masiva de archivos.
- Se necesita integración fuera de Express o control más bajo nivel del streaming de archivos.

## Buenas prácticas recomendadas

- **Validar siempre** los archivos subidos:
  - Tipo MIME
  - Tamaño máximo permitido
- Usar **nombres únicos** para evitar sobreescrituras:

```javascript
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
```

- Manejar **errores de subida** de manera centralizada en middleware.
- Separar **configuración de Multer** del **código de rutas** para mantener limpio el proyecto.
- Considerar **almacenamiento en memoria** solo si vas a procesar archivos inmediatamente (ej. transformar imágenes antes de subir a la nube).

## Resumen rápido

#### ✅ Fortalezas principales:

- Integración sencilla con Express.
- Manejo eficiente de archivos y datos de formularios.
- Configuración flexible de almacenamiento y filtros.

#### ⚠️ Debilidades principales:

- No es ideal para cargas masivas o streaming de archivos de gran tamaño.
- Limitado a Node.js y Express.
- Almacenamiento en disco local puede no ser adecuado para producción en la nube.

#### 🛠️ Cuándo usarlo:

- Subida de archivos desde formularios web.
- APIs REST que requieren recibir archivos de usuario.
- Procesamiento previo a almacenamiento en la nube.

#### 🚫 Cuándo evitarlo:

- Aplicaciones con altos volúmenes de archivos grandes en tiempo real.
- Situaciones donde se necesita streaming avanzado de archivos sin pasar por el servidor.
- Proyectos fuera del ecosistema Express o Node.js.

---

# Temas {#temas#}

- [inicio](#que-es-multer)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de trabajar con **Multer**, es importante conocer algunos conceptos clave que te ayudarán a entender su funcionamiento e integración:

### 1. Express.js:

Framework de Node.js que permite crear aplicaciones y APIs de manera sencilla. Multer funciona como un middleware dentro de Express.

### 2. Middleware:

Funciones que se ejecutan entre la petición (request) y la respuesta (response) en Express. Multer es uno de estos middlewares.

### 3. multipart/form-data:

Tipo de codificación usado en formularios HTML para enviar archivos al servidor.

### 4. Request y Response (req/res):

Objetos de Express que representan la petición del cliente y la respuesta del servidor.

### 5. Almacenamiento (Storage Engine):

Configuración en Multer que define dónde y cómo se guardan los archivos subidos.

### 6. Validación de archivos:

Revisión de tipo MIME, tamaño y extensión antes de aceptar la subida.

### 7. Errores de subida:

Manejo de excepciones cuando un archivo excede los límites o no cumple con las reglas definidas.

### 8. Integración con servicios externos:

Como Amazon S3, Cloudinary o Firebase, cuando no se quiere almacenar en el servidor.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar eficientemente con Multer, se recomienda combinarlo con ciertas herramientas y librerías:

### Node.js + Express.js:

Entorno base para crear servidores y definir rutas donde se procesarán las subidas.

### Nodemon:

Para reiniciar automáticamente el servidor durante el desarrollo.

### Cloudinary / AWS S3 / Firebase Storage:

Servicios externos para almacenamiento en la nube de imágenes, videos o documentos.

### Sharp:

Librería para procesar imágenes (cambio de tamaño, compresión, conversión de formatos).

### dotenv:

Manejo de variables de entorno para almacenar claves de acceso y configuraciones seguras.

### Joi o Zod:

Librerías para validar datos de entrada junto con los archivos subidos.

### Helmet y cors:

Seguridad y control de accesos en aplicaciones Express que manejan archivos.

### Postman o Thunder Client:

Herramientas para probar rutas de subida de archivos de manera sencilla.

### Mongoose / Sequelize:

Si se requiere asociar los archivos subidos con registros en bases de datos MongoDB o SQL.

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código prácticos que suelen usarse con Multer:

### 1. Configuración básica de Multer

```javascript
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
```

### 2. Subir un solo archivo

```javascript
app.post("/upload", upload.single("archivo"), (req, res) => {
  res.send("Archivo subido correctamente");
});
```

### 3. Subir múltiples archivos (mismo campo)

```javascript
app.post("/uploads", upload.array("imagenes", 5), (req, res) => {
  res.send("Imágenes subidas correctamente");
});
```

### 4. Subir múltiples campos

```javascript
app.post(
  "/profile",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "docs", maxCount: 3 },
  ]),
  (req, res) => {
    res.send("Perfil con archivos subido");
  }
);
```

### 5. Almacenamiento personalizado con nombres únicos

```javascript
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const uploadCustom = multer({ storage });
```

---

[🔼 temas](#temas)

---

# Comandos

### Configuración básica (destino directo en carpeta):

```javascript
const upload = multer({ dest: "uploads/" });
```

### Subida de un solo archivo:

```javascript
upload.single("campoDelArchivo");
```

### Subida de varios archivos (mismo campo):

```javascript
upload.array("campo", maxCantidad);
```

### Subida de varios campos diferentes:

```javascript
upload.fields([{ name: "campo1" }, { name: "campo2" }]);
```

### Almacenamiento en disco con configuración personalizada:

```javascript
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });
```

### Validación de tipo de archivo (ejemplo: solo imágenes):

```javascript
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Solo se permiten imágenes"));
  },
});
```

### Límite de tamaño máximo (ejemplo: 2MB):

```javascript
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
});
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es Multer y para qué se utiliza en Node.js?

Multer es un middleware de Node.js que permite manejar `multipart/form-data`, principalmente usado para subir archivos desde formularios HTML a un servidor Express.

### 2. ¿Cuál es la diferencia entre `upload.single()` y `upload.array()` en Multer?

- **`upload.single("campo")`**\
  permite subir un solo archivo de un campo específico, mientras que
- **`upload.array("campo", max)`**\
  permite subir múltiples archivos de un mismo campo, con un límite opcional.

### 3. ¿Qué tipos de almacenamiento soporta Multer?

Multer soporta almacenamiento en **disco** (`diskStorage`) y en **memoria** (`memoryStorage`), permitiendo guardar archivos en el servidor o procesarlos directamente en memoria.

### 4. ¿Cómo validar el tipo de archivo en Multer?

Usando la opción `fileFilter` en la configuración de Multer. Por ejemplo, para aceptar solo imágenes:

```javascript
fileFilter: (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(new Error("Solo imágenes"));
};
```

### 5. ¿Cómo limitar el tamaño máximo de los archivos?

Usando la opción `limits`:

```javascript
limits: {
  fileSize: 2 * 1024 * 1024;
} // 2MB
```

## 🟡 Intermedio

### 6. ¿Qué es `diskStorage` y cómo se configura?

**`diskStorage`** permite definir dónde se guardan los archivos y cómo se nombran:

```javascript
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
```

### 7. ¿Cuándo es recomendable usar `memoryStorage`?

Cuando se necesita procesar los archivos en memoria antes de enviarlos a un servicio externo (por ejemplo, redimensionar imágenes antes de subir a la nube).

### 8. ¿Cómo manejar errores de Multer en Express?

Capturando errores en middleware o rutas:

```javascript
app.post("/upload", upload.single("archivo"),
  (req, res) => {...},
  (err, req, res, next) => {res.status(400).send(err.message);
});
```

### 9. ¿Cómo subir múltiples campos con archivos diferentes?

Usando `upload.fields()`:

```javascript
upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "docs", maxCount: 3 },
]);
```

## 🔴 Avanzado

### 10. ¿Se puede renombrar archivos automáticamente en Multer? ¿Cómo?

Sí, dentro de `diskStorage` usando la función `filename`:

```javascript
filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname);
```

### 11. ¿Cómo integrar Multer con servicios en la nube?

Subiendo archivos a memoria (`memoryStorage`) y luego enviándolos a servicios como AWS S3, Cloudinary o Firebase Storage usando sus SDKs.

### 12. ¿Qué problemas puede causar almacenar archivos grandes en disco local?

Puede llenar rápidamente el almacenamiento del servidor, generar cuellos de botella en rendimiento y no ser escalable en entornos de producción.

### 13. ¿Cómo combinar Multer con validación de datos de formularios?

Usando librerías como **Joi** o **Zod** para validar los campos de texto, mientras Multer maneja los archivos.

### 14. ¿Qué consideraciones de seguridad se deben tener al usar Multer?

Validar tipo de archivo y tamaño, no ejecutar archivos subidos, proteger rutas con autenticación, y evitar sobrescribir archivos existentes.

### 15. ¿Qué limitaciones tiene Multer frente a otros manejadores de archivos como Formidable o Busboy?

Multer es más simple y directo para Express, pero puede ser menos eficiente con cargas masivas de archivos grandes y no ofrece control avanzado de streaming de datos.

[🔼 temas](#temas)

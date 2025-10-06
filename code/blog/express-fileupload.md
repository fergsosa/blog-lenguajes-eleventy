---
layout: layout-post.njk
title: express-fileupload
img: /img/portada/express-fileupload.avif
description: Middleware para subir archivos fácilmente.
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![img]({{img}})

## ¿Qué es {{title}}?

**express-fileupload** es un middleware para **Express.js** que permite manejar fácilmente la **subida de archivos** en aplicaciones web. Su principal ventaja es la simplicidad: se integra con Express sin requerir configuraciones complejas.

#### Diferencias con otros:

- A diferencia de **Multer**, express-fileupload es más ligero y rápido de implementar, pero ofrece menos funcionalidades avanzadas como almacenamiento en disco personalizado o validaciones complejas.
- No requiere definir un esquema de almacenamiento antes de recibir archivos.
- Ideal para proyectos pequeños o medianos donde se necesite subir archivos de forma directa y rápida.

### 1. ¿Para qué se usa?

- **Subida de archivos en formularios web** (_multipart/form-data_).
- **Aplicaciones RESTful** que necesiten recibir archivos temporales para procesamiento.

#### Contextos ideales:

- Proyectos pequeños o prototipos rápidos.
- Aplicaciones donde se manejen archivos de tamaño moderado.
- Integración simple sin necesidad de almacenar archivos de manera compleja en servidores o servicios externos.

### 2. ¿Qué puedo construir con {{title}}?

- **Sistemas de subida de archivos**\
  (imágenes, PDFs, CSVs, etc.).
- **Plataformas de gestión de contenido**\
  donde se agregan documentos o medios.
- **APIs que procesan archivos**\
  para conversión, análisis o almacenamiento temporal.
- **Proyectos de prueba o MVPs**\
  que requieren funcionalidad rápida de subida sin complicaciones.

### 3. ¿Cuándo es más conveniente usarlo?

- Cuando se necesita **implementar subida de archivos rápida y sencilla** sin configuraciones avanzadas.
- Si el proyecto no requiere **almacenamiento complejo**, validaciones extensas o integración con servicios externos.
- Ideal para **proyectos educativos, prototipos o apps pequeñas**.

#### Cuándo preferir alternativas:

- Cuando se necesite control detallado sobre el almacenamiento de archivos.
- Si se requiere **subida de archivos grandes** con streaming eficiente.
- Para proyectos empresariales con alta concurrencia y requisitos de escalabilidad (ahí Multer o servicios como S3 son mejores).

## Buenas prácticas recomendadas

- **Validar archivos**:\
  Tipo, tamaño y extensión antes de procesarlos.
- **Usar rutas temporales o almacenamiento seguro**\
  para evitar riesgos de seguridad.
- **Manejar errores correctamente**:\
  Siempre capturar excepciones de subida.
- **Limitar el tamaño de los archivos**\
  mediante configuración (`limits`).
- **Mantener el middleware separado**:\
  Organizar en rutas o controladores dedicados a la subida.
- **Evitar sobrescribir archivos**:\
  Generar nombres únicos o UUIDs para cada archivo.

## Resumen rápido

#### ✅ Fortalezas principales:

- Fácil de implementar y entender.
- Ligero y rápido para proyectos pequeños.
- Integración directa con Express sin configuraciones complejas.

#### ⚠️ Debilidades principales:

- Funcionalidad limitada comparado con alternativas como Multer.
- No optimizado para archivos grandes o almacenamiento avanzado.
- Menos opciones de validación avanzada y control de almacenamiento.

#### 🛠️ Cuándo usarlo:

- Proyectos pequeños o medianos.
- Prototipos rápidos o MVPs.
- Necesidad de subida simple de archivos.

#### 🚫 Cuándo evitarlo:

- Aplicaciones con alta concurrencia y archivos pesados.
- Proyectos que requieran almacenamiento distribuido o en la nube.
- Escenarios donde se necesita un control exhaustivo de validación y manejo de archivos.

# Temas {#temas#}

- [inicio](#que-es-express-fileupload)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de trabajar con **express-fileupload**, es importante conocer y manejar ciertos conceptos y tecnologías que lo acompañan:

### Express.js:

Framework de Node.js para construir aplicaciones web y APIs. express-fileupload funciona como _middleware_ dentro de Express.

### Middleware:

Funciones intermedias que procesan las peticiones HTTP antes de llegar a las rutas. express-fileupload es un middleware que procesa `multipart/form-data`.

### multipart/form-data:

Tipo de contenido usado por los formularios HTML para enviar archivos junto a otros datos.

### req.files:

Objeto que contiene los archivos subidos en una petición. Es clave para acceder y manipular los archivos.

### Método `.mv()`:

Función integrada en express-fileupload que permite mover un archivo recibido a una ruta del servidor.

### Límites de tamaño:

Parámetros configurables para evitar subidas de archivos demasiado grandes que saturen el servidor.

### Errores comunes:

Peticiones sin archivo, extensiones no válidas, archivos demasiado pesados, rutas inexistentes, etc.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar de manera más productiva y segura con express-fileupload, se recomienda apoyarse en un conjunto de herramientas y librerías:

### Node.js + Express:

Base obligatoria para integrar express-fileupload en el backend.

### Postman / Insomnia:

Para probar endpoints de subida de archivos fácilmente.

### Nodemon:

Reinicio automático del servidor en desarrollo.

### fs (File System):

Módulo nativo de Node.js para manejar archivos y directorios.

### path:

Módulo de Node.js para gestionar rutas de archivos de forma segura.

### uuid / nanoid:

Generadores de identificadores únicos para nombrar archivos y evitar colisiones.

### dotenv:

Para gestionar variables de entorno (como rutas de almacenamiento).

### helmet y cors:

Middleware para reforzar la seguridad de las rutas de subida.

### Servicios externos (opcional):

- _AWS S3, Cloudinary o Firebase Storage_ para almacenamiento en la nube.
- _Multer_ (alternativa) si el proyecto crece y se necesita más control.

> Con estas bases y herramientas, se puede implementar un sistema de subida de archivos robusto, escalable y seguro usando express-fileupload.

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos comunes para trabajar con **express-fileupload**:

### Configuración básica

```javascript
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

app.use(fileUpload());
```

### Subir un archivo

```javascript
app.post("/upload", (req, res) => {
  if (!req.files) return res.status(400).send("No se subió ningún archivo");

  const file = req.files.file;
  file.mv(`./uploads/${file.name}`, (err) => {
    if (err) return res.status(500).send(err);
    res.send("Archivo subido correctamente");
  });
});
```

### Validar tamaño máximo (ejemplo: 5MB)

```javascript
app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    abortOnLimit: true,
  })
);
```

### Subida múltiple de archivos

```javascript
app.post("/multiple", (req, res) => {
  if (!req.files) return res.status(400).send("No se subieron archivos");

  let files = req.files.files; // array
  files.forEach((file) => file.mv(`./uploads/${file.name}`));
  res.send("Archivos subidos!");
});
```

[🔼 temas](#temas)

---

# Comandos

### 1. **Acceder a archivos**

```javascript
req.files; // Objeto con todos los archivos subidos
req.files.file; // Un archivo en particular
```

### 2. **Mover archivo al servidor**

```javascript
req.files.file.mv("./uploads/nuevoNombre.png");
```

### 3. **Configurar límites**

```javascript
fileUpload({ limits: { fileSize: 10 * 1024 * 1024 } }); // 10 MB
```

### 4. **Abortar si excede límite**

```javascript
fileUpload({ abortOnLimit: true });
```

### 5. **Crear carpetas automáticamente**

```javascript
fileUpload({ createParentPath: true });
```

### 6. **Archivos múltiples**

```javascript
Array.isArray(req.files.files); // true si son múltiples
```

> ✅ Estos comandos cubren la mayoría de los casos prácticos al usar
> **express-fileupload**: configuración, acceso, validación y guardado de
> archivos.

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es express-fileupload y para qué se utiliza?

Es un middleware de **Express.js** que permite manejar fácilmente la
subida de archivos enviados mediante formularios con el tipo
`multipart/form-data`. Se usa para guardar o procesar archivos en
aplicaciones web y APIs.

### 2. ¿Cómo se instala express-fileupload?

Se instala con el comando:

```bash
npm install express-fileupload
```

### 3. ¿Cómo se integra express-fileupload en una aplicación de Express?

```javascript
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

app.use(fileUpload());
```

### 4. ¿En qué objeto se almacenan los archivos subidos con express-fileupload?

Los archivos se almacenan en **`req.files`**, donde cada propiedad
corresponde al nombre del campo del formulario.

### 5. ¿Cómo se guarda un archivo en el servidor usando express-fileupload?

Mediante el método `.mv()`:

```javascript
req.files.file.mv("./uploads/nombre.png");
```

---

## 🟡 Intermedio

### 6. ¿Qué sucede si un cliente no envía ningún archivo en la petición?

`req.files` estará vacío o será `undefined`. Se debe validar con:

```javascript
if (!req.files) return res.status(400).send("No se subió ningún archivo");
```

### 7. ¿Cómo se puede limitar el tamaño máximo de los archivos subidos?

Usando la opción `limits`:

```javascript
app.use(fileUpload({ limits: { fileSize: 5 * 1024 * 1024 } })); // 5MB
```

### 8. ¿Qué opción sirve para rechazar automáticamente archivos que exceden el límite de tamaño?

`abortOnLimit: true`

### 9. ¿Cómo manejar múltiples archivos subidos en un mismo campo?

Los archivos estarán en un array dentro de `req.files`. Ejemplo:

```javascript
if (Array.isArray(req.files.files)) {
  req.files.files.forEach((file) => file.mv("./uploads/" + file.name));
}
```

---

## 🔴 Avanzado

### 10. ¿Qué riesgo de seguridad existe al permitir que el usuario suba archivos?

- Posibilidad de subir archivos maliciosos (ej: scripts).\
- Riesgo de sobrescribir archivos existentes.\
- Ataques de denegación de servicio si no se limita el tamaño de
  archivos.

### 11. ¿Qué medidas de seguridad recomiendas al usar express-fileupload?

- Validar extensión y tipo MIME del archivo.\
- Generar nombres únicos para evitar colisiones (ej: con `uuid`).\
- Limitar tamaño de archivo.\
- Subirlos a directorios controlados (no a carpetas críticas del
  sistema).

### 12. ¿Cuál es la diferencia entre express-fileupload y Multer?

- **express-fileupload:**\
  Más simple, ideal para prototipos o proyectos
  pequeños, fácil de configurar.\
- **Multer:**\
  Ofrece mayor control (almacenamiento en disco, memoria,
  streams), más adecuado para proyectos grandes.

### 13. ¿Cómo puedes crear automáticamente las carpetas de destino si no existen?

Con la opción `createParentPath: true`

```javascript
app.use(fileUpload({ createParentPath: true }));
```

### 14. ¿Qué pasa si intentas mover un archivo con `.mv()` a una carpeta inexistente sin usar `createParentPath`?

Se generará un error porque la carpeta de destino no existe.

### 15. ¿Cómo integrar express-fileupload con un servicio de almacenamiento en la nube como AWS S3 o Cloudinary?

En lugar de usar `.mv()` para guardar en el servidor local, se envía el
archivo desde `req.files` al SDK de la nube (ej: `s3.upload()` o
`cloudinary.uploader.upload()`), manejando el buffer o la ruta temporal.

[🔼 temas](#temas)

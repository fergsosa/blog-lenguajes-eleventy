---
layout: layout-post.njk
title: HTML
img: /img/portada/html.avif
description: Ideas principales de HTML
tags: ["blog", "lenguajes"]
date: "2023-02-01"
---

# {{title}}

![{{title}}]({{img}})

# <!--! Que es HTML -->

### ¿Qué es HTML? _(HyperText Markup Language)_

HTML es el **lenguaje estándar para estructurar y organizar contenido en la web**.

 <!-- Permite definir elementos como títulos, párrafos, imágenes, enlaces, formularios y mucho más. -->

No es un lenguaje de programación, sino un **lenguaje de marcado** que describe la estructura y el significado del contenido.

### ¿Para qué sirve HTML?

HTML se utiliza principalmente para **crear la base de una página web**.<br/><br/>

**Con él puedes:**

- Definir la **estructura del contenido** (títulos, párrafos, listas, tablas, etc.).
- Insertar **enlaces, imágenes, videos y audios**.
- Crear **formularios** para recopilar información de los usuarios.
- Integrar otros lenguajes como CSS y JavaScript.
- Mejorar la **accesibilidad y el SEO** (optimización en buscadores).

> Sin HTML, un sitio web no tendría forma ni contenido visible.

### ¿Cómo funciona HTML?

HTML funciona mediante **etiquetas** que el navegador interpreta para mostrar el contenido correctamente.\
Cada etiqueta indica qué tipo de elemento se está creando.  
Las etiquetas normalmente tienen una **apertura** `<p>` y un **cierre** `</p>`:

```html
<p>Este es un párrafo</p>
```

### ¿Por qué usar HTML?

1. **Estándar universal:** Todo navegador entiende HTML, lo que lo hace compatible en cualquier plataforma.

2. **Base de la web:** Es el punto de partida para usar CSS y JavaScript.

3. **Simple y accesible:** Su sintaxis es sencilla de aprender y muy legible.

4. **Personalización:** Permite crear páginas a medida con una gran variedad de elementos.

5. **SEO y accesibilidad:** Bien estructurado, mejora la visibilidad en buscadores y la experiencia de usuarios con discapacidades.

> Sin HTML, simplemente no existiría la web como la conocemos.

---

<!--! # Sintaxis de HTML

## Estructura básica d

Todo documento HTML sigue una estructura básica que el navegador puede interpretar:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es mi primer párrafo en HTML.</p>
    <a href="https://www.ejemplo.com">Visitar página</a>
  </body>
</html>
```

### Explicación:

- `<!DOCTYPE html>` → Indica que el documento está escrito en HTML5.
- `<html lang="es">` → Etiqueta raíz, define el idioma del documento.
- `<head>` → Contiene información **meta** (no visible directamente).
- `<meta charset="UTF-8">` → Define la codificación de caracteres (incluye acentos y ñ).
- `<meta name="viewport">` → Ajusta la visualización en dispositivos móviles.
- `<title>` → Título que aparece en la pestaña del navegador.
- `<body>` → Contenido visible de la página (texto, imágenes, enlaces, etc.).

---

---

---

## 🔻Elemento HTML:

- Unidad básica de construcción en HTML.
- Se define mediante etiquetas.

## 🔻Etiqueta HTML:

- Marcas que rodean el contenido y proporcionan información sobre la estructura del documento.

## 🔻Atributo:

- Proporciona información adicional sobre un elemento.
- Se define dentro de la etiqueta y tiene la forma `"nombre="valor""`.

## 🔻Documento HTML:

- Archivo que contiene el código HTML completo.

## 🔻Encabezado HTML `<head>`:

- Sección del documento que contiene información no visible para el usuario, como meta-etiquetas, enlaces a hojas de estilo y scripts.

## 🔻Cuerpo HTML `<body>`:

- Sección del documento que contiene el contenido visible, como texto, imágenes, enlaces, etc.

## 🔻Título `<title>`:

- Define el título del documento que se muestra en la barra de título del navegador.

## 🔻Párrafo `<p>`:

- Define un párrafo de texto.

## 🔻Encabezados `<h1>, <h2>, ..., <h6>`:

- Definen encabezados de distintos niveles, donde `<h1>` es el más alto y `<h6>` el más bajo.

## 🔻Lista ordenada `<ol>` y lista no ordenada `<ul>`:

- `<ol>` para listas numeradas.
- `<ul>` para listas sin números.
- `<li>` para elementos de la lista.

## 🔻Enlace `<a>`:

- Crea hipervínculos.
- Atributo href especifica la URL de destino.

## 🔻Imagen `<img>`:

- Inserta imágenes.
- Atributo src especifica la ruta de la imagen.

## 🔻Formulario `<form>`:

- Recopila datos del usuario.
- Contiene elementos como campos de texto, botones, etc.

## 🔻Campo de texto `<input type="text">`:

- Permite al usuario ingresar texto.

## 🔻Botón `<button>`:

- Crea botones interactivos.

## 🔻Comentarios `<!-- comentario -- >`:

- Texto que no se muestra en la página, pero que puede ser útil para agregar notas o aclaraciones en el código.

## 🔻Enlace de correo electrónico

- `<a  href="mailto:correo@ejemplo.com">`:

- Crea un enlace que permite a los usuarios enviar correos electrónicos al destinatario especificado.

## 🔻Div `<div>`:

- Un contenedor genérico que se utiliza para agrupar y estructurar otros elementos HTML. Es útil para aplicar estilos o scripts a un conjunto de elementos relacionados.

## 🔻Span `<span>`:

- Similar a `<div>`, pero se utiliza para aplicar estilos o scripts a pequeñas secciones de texto o elementos dentro de un bloque.

## 🔻Tabla `<table>`:

- Define una tabla en HTML.
- Contiene elementos como
- `<tr>` (fila)
- `<td>` (celda de datos)
- `<th>` (celda de encabezado).

## 🔻Encabezado de tabla `<thead>`

## 🔻Cuerpo de tabla `<tbody>`

## 🔻Pie de tabla `<tfoot>`:

- Secciones que ayudan a organizar y estructurar una tabla.

## 🔻Formulario

## 🔻Casillas de verificación `<input type="checkbox">`

## 🔻Botones de radio `<input type="radio">`:

- Permiten al usuario seleccionar opciones en un formulario.

## 🔻Campo de contraseña `<input type="password">`:

- Similar al campo de texto, pero oculta los caracteres ingresados.

## 🔻Desplegable `<select>`:

- Crea un menú desplegable de opciones.
- Contiene elementos `<option>` que representan las opciones seleccionables.

## 🔻Etiqueta de línea `<br>`:

- Inserta un salto de línea o un quiebre de línea dentro del texto.

## 🔻Estilo `<style>`:

- Sección en el encabezado donde se pueden definir reglas de estilo CSS para aplicar estilos a elementos HTML.

## 🔻JavaScript `<script>`:

- Sección en el encabezado o el cuerpo donde se puede incluir código JavaScript para agregar interactividad a la página.

## 🔻Meta-etiquetas `<meta>`:

- Proporcionan información sobre la configuración del documento, como la codificación de caracteres, la descripción y las palabras clave.

## 🔻Atributo id y class:

- **id** se utiliza para identificar de manera única un elemento.
- **class** se utiliza para agrupar elementos y aplicar estilos o scripts a múltiples elementos. -->

# Sintaxis

## HTML y la semántica web

La semántica web implica usar **etiquetas con significado**, de modo que el contenido sea comprensible tanto para humanos como para máquinas (navegadores, buscadores, lectores de pantalla).

---

## Cabecera

La cabecera (`<head>`) contiene **información sobre el documento**, como título, metadatos y enlaces a recursos externos.

### Etiquetas de cabecera

#### 1. ¿Qué son las etiquetas `<head>`?

Son etiquetas que no se muestran en el cuerpo de la página, pero que configuran cómo se interpreta y procesa el sitio.

Estructura básica:

```html
<head>
  <title>Mi sitio web</title>
  <meta charset="UTF-8" />
</head>
```

#### 2. La etiqueta `<title>`

Define el **título de la página**, visible en la pestaña del navegador.

```html
<title>Documentación de HTML5</title>
```

#### 3. La etiqueta `<base>`

Establece una URL base para todas las rutas relativas del documento.

```html
<base href="https://example.com/" />
```

---

### Metadatos

#### 1. La etiqueta `<meta>`

Se usa para definir **información adicional** como codificación, descripción y viewport.

```html
<meta charset="UTF-8" />
<meta name="description" content="Curso completo de HTML5" />
<meta name="keywords" content="HTML, tutorial, curso" />
```

#### 2. Etiquetas para redes sociales

Para mejorar la vista previa en redes sociales:

```html
<meta property="og:title" content="Mi sitio web" />
<meta property="og:image" content="imagen.jpg" />
<meta property="og:description" content="Descripción del sitio" />
```

#### 3. Etiquetas para SEO / Google

```html
<meta name="robots" content="index, follow" />
```

#### 4. Etiqueta para diseño responsive

Permite que la página se adapte a móviles.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

### Recursos externos

#### 1. La etiqueta `<link>`

Sirve para enlazar recursos como hojas de estilo o íconos.

```html
<link rel="stylesheet" href="styles.css" />
```

#### 2. Stylesheet: Hojas de estilo externas

```html
<link rel="stylesheet" href="css/estilos.css" />
```

#### 3. Favicon: El ícono de las pestañas

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```

#### 4. Etiquetas HTML de precarga

Mejoran la performance cargando recursos antes de necesitarlos.

```html
<link rel="preload" href="video.mp4" as="video" />
```

---

## Agrupación

Se usan etiquetas para organizar contenido en bloques, como `<div>,` `<section>` o `<article>.` Facilitan la estructura y el estilo de la página.

### Etiquetas de agrupación

#### 1. Las etiquetas de agrupación

Se usan para **organizar contenido** en bloques lógicos.

#### 2. La etiqueta `<div>`

Elemento genérico de bloque:

```html
<div class="contenedor">Contenido aquí</div>
```

#### 3. La etiqueta `<p>`

Define un párrafo:

```html
<p>Este es un párrafo de texto.</p>
```

#### 4. La etiqueta `<blockquote>`

Para citas extensas:

```html
<blockquote>"El aprendizaje nunca se detiene."</blockquote>
```

#### 5. La etiqueta `<pre>`

Muestra texto con formato preservado:

```html
<pre>
Texto con
espacios y saltos de línea
tal como se escribe
</pre>
```

#### 6. La etiqueta `<dl>`

Listas descriptivas:

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado de hipertexto</dd>
</dl>
```

#### 7. La etiqueta `<figure>`

Se usa para imágenes y contenido asociado:

```html
<figure>
  <img src="foto.jpg" alt="Paisaje" />
  <figcaption>Paisaje de montaña</figcaption>
</figure>
```

---

### Etiquetas multimedia

#### 1. La etiqueta `<img>`

```html
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

#### 2. La etiqueta `<picture>`

Permite imágenes adaptativas:

```html
<picture>
  <source srcset="imagen.webp" type="image/webp" />
  <img src="imagen.jpg" alt="Imagen adaptable" />
</picture>
```

#### 3. La etiqueta `<video>`

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  Tu navegador no soporta video.
</video>
```

#### 4. Formatos multimedia recomendados

- **Imágenes**: WebP, AVIF, JPG, PNG, SVG.
- **Videos**: MP4 (H.264), WebM.
- **Audio**: MP3, OGG.

#### 5. La etiqueta `<track>`

Subtítulos para videos:

```html
<track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español" />
```

#### 6. La etiqueta `<iframe>`

Insertar contenido externo:

```html
<iframe src="https://example.com" title="Contenido externo"></iframe>
```

---

## Texto y formato

Incluye etiquetas para dar estilo y significado al texto, como `<strong>`, `<em>` o `<a>` para enlaces, y también para mostrar código o saltos de línea.

### Etiquetas de formato

#### 1. Etiquetas semánticas de texto

|  Etiqueta  | Descripción                   |
| :--------: | ----------------------------- |
| `<strong>` | Texto importante.             |
|   `<em>`   | Énfasis.                      |
|  `<mark>`  | Resaltado.                    |
|   `<s>`    | Texto incorrecto o eliminado. |

#### 2. La etiqueta `<span>`

Para estilizar texto en línea:

```html
<p>Hola <span class="resaltado">mundo</span></p>
```

#### 3. La etiqueta `<br>` y `<wbr>`

Salto de línea forzado:

```html
Hola<br />Mundo
```

Salto condicional (`<wbr>`) en palabras largas:

```html
supercalifragilistico<wbr />espialidoso
```

---

### Etiquetas de enlaces

#### 1. Enlaces o hipervínculos

```html
<a href="https://example.com">Ir a ejemplo</a>
```

#### 2. Atributos útiles

| Atributo                    | Descripción                    |
| --------------------------- | ------------------------------ |
| `target="_blank"`           | Abre en nueva pestaña.         |
| `rel="noopener noreferrer"` | Seguridad en enlaces externos. |

---

### Etiquetas técnicas

#### 1. `<kbd>` y `<samp>`

| Etiqueta | Descripción            |
| :------: | ---------------------- |
| `<kbd>`  | Entrada de teclado.    |
| `<samp>` | Salida de un programa. |

```html
Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd>
```

#### 2. `<time>` y `<data>`

```html
<time datetime="2025-09-09">9 de septiembre de 2025</time>
<data value="12345">Producto 12345</data>
```

#### 3. `<code>`

```html
<code>console.log("Hola mundo");</code>
```

---

## Semántica

Son etiquetas que dan sentido al contenido, como `<header>`, `<footer>`, `<section>` o `<table>`. Ayudan a la accesibilidad y al SEO.

### Etiquetas semánticas

#### 1. Etiquetas de sección

- `<header>`, `<footer>`
- `<main>`, `<section>`
- `<article>`, `<aside>`

#### 2. Ejemplo:

```html
<article>
  <h2>Noticia</h2>
  <p>Contenido de la noticia...</p>
</article>
```

#### 3. Jerarquía de títulos (`<h1>` a `<h6>`)

Siempre debe existir un solo `<h1>` por página.

---

### Etiquetas de texto semántico

|     Etiqueta      | Descripción                   |
| :---------------: | ----------------------------- |
|       `<q>`       | Citas cortas.                 |
|     `<cite>`      | Referencias.                  |
|     `<small>`     | Texto de menor importancia.   |
|     `<abbr>`      | Abreviaturas con significado. |
| `<ins>` y `<del>` | Texto agregado o eliminado.   |

---

### Etiquetas de tablas

Estructura básica:

```html
<table>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
</table>
```

---

## Formularios

Permiten recoger información del usuario con `<form>`, `<input>`, `<textarea>`, `<select>` y botones, incluyendo validaciones y tipos especiales.

### Etiquetas principales

|        Etiqueta         | Descripción               |
| :---------------------: | ------------------------- |
|        `<form>`         | Contenedor de formulario. |
|        `<input>`        | Campo de entrada.         |
|      `<textarea>`       | Texto largo.              |
| `<select>` y `<option>` | Listas desplegables.      |

---

### Etiquetas especializadas

Ejemplo `<input>` con tipos:

```html
<input type="number" placeholder="Edad" />
<input type="date" />
<input type="checkbox" /> Acepto términos
<input type="color" />
<input type="file" />
```

---

### Envío de formularios

- Botón tradicional:

```html
<input type="submit" value="Enviar" />
```

- Botón personalizado:

```html
<button>Enviar</button>
```

---

### Validaciones básicas

```html
<input type="email" required /> <input type="text" pattern="[A-Za-z]{3,}" />
```

---

## Interactividad

Se usan para hacer la página dinámica, con `<script>` para JavaScript y etiquetas como `<details>`, `<dialog>` o `<template>` para contenido interactivo.

### Etiquetas de scripting

#### 1. `<script>`

```html
<script src="app.js" defer></script>
```

| Etiqueta | Descripción                       |
| :------: | --------------------------------- |
| `defer`  | Ejecuta después de cargar el DOM. |
| `async`  | Ejecuta en paralelo.              |

---

### Etiquetas interactivas

- `<details>` y `<summary>`:

```html
<details>
  <summary>Más información</summary>
  <p>Texto oculto que se despliega al hacer clic.</p>
</details>
```

- `<dialog>`:

```html
<dialog open>Este es un diálogo</dialog>
```

- `<template>` para contenido dinámico:

```html
<template>
  <p>Contenido dinámico</p>
</template>
```

---
layout: layout-post.njk
title: HTML
img: /img/portada/html.avif
description: Estructura web, contenido semántico.
tags: ["blog", "lenguajes"]
date: "2023-03-01"
---

# {{title}}

![{{title}}]({{img}})

[temas](#temas)

## ¿Qué es HTML?

- HTML (**HyperText Markup Language**) es el **lenguaje estándar para estructurar contenido web**.
- No un lenguaje de programación tradicional.
- Su función principal es **estructurar contenido** mediante etiquetas.
- Se diferencia de otros lenguajes porque:
  - No realiza cálculos ni lógica compleja (como JavaScript).
  - No maneja estilos de manera directa (para eso se usa CSS).
  - Sirve como **esqueleto** de páginas web, mientras que otros lenguajes complementan funcionalidad y diseño.

### ¿Para qué se usa?

Se utiliza principalmente para:

- **Uso principal:** Construcción de páginas web y aplicaciones front-end.
- **Contextos ideales:**
  - Sitios informativos estáticos.
  - Plantillas web básicas.
  - Integración con CSS y JavaScript para páginas interactivas.
- HTML es **universal**, compatible con todos los navegadores y dispositivos.

### ¿Qué puedo construir con HTML?

Con HTML puedes construir:

- **Páginas web estáticas:** blogs, portafolios, landing pages.
- **Formularios** de captura de datos.
- **Estructuras complejas combinadas con CSS y JS:** dashboards, aplicaciones web, tiendas online.
- **Contenido multimedia:** imágenes, videos, audio, enlaces y tablas.
- **Plantillas** de correo electrónico.

> Básicamente, cualquier contenido que deba mostrarse en un navegador.

### ¿Cuándo es más conveniente usarlo?

- Ideal cuando se necesita **contenido estructurado y semántico**.
- Cuando se busca compatibilidad y accesibilidad máxima.
- Como base para frameworks modernos (React, Angular, Vue) donde HTML sirve como plantilla.

**No sustituye** lenguajes de programación ni frameworks para lógica compleja o interactividad avanzada.

## Buenas prácticas recomendadas

- **Usa etiquetas semánticas:**\
  (`<header>`, `<main>`, `<article>`, `<footer>`) para mejorar accesibilidad y SEO.
- **Estructura tu HTML como un árbol lógico:**\
  con títulos jerárquicos (`<h1>` a `<h6>`).
- **Organización del código:**\
  identación clara y consistente.
- **Evita contenido repetitivo:**\
  usa plantillas o componentes reutilizables.
- **Evitar inline styles:**\
  usar CSS externo o interno.
- **Comentarios útiles:**\
  para documentar secciones complejas.

> **Pro tip:** Mantén siempre el enfoque en la **semántica y accesibilidad**.

---

## Resumen rápido.

#### ✅ Fortalezas principales:

- Simplicidad y universalidad.
- Semántica clara para contenido.
- Compatible con todos los navegadores y dispositivos.

#### ⚠️ Debilidades principales:

- No maneja lógica por sí mismo.
- Necesita CSS y JS para diseño e interactividad.
- Limitado fuera del contexto web.

#### 🛠️ Cuándo usarlo:

- Para estructurar contenido web.
- Como base de sitios estáticos o dinámicos.

#### 🚫 Cuándo evitarlo:

- Si buscas construir **solo con HTML** una aplicación compleja.
- Si necesitas lógica avanzada sin otros lenguajes.

---

# Temas {#temas#}

- [inicio](#html)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Conceptos Claves](#conceptos-claves)
- [Comandos](#comandos)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Para trabajar con HTML de manera efectiva, es importante conocer algunos conceptos relacionados que te ayudarán a entender cómo se integra en el desarrollo web.

### 1. CSS (Cascading Style Sheets)

CSS se utiliza para **dar estilo y diseño visual** a las páginas creadas con HTML.  
Mientras que HTML define la **estructura**, CSS se encarga de cómo se **ve** el contenido.

> Ejemplo: cambiar colores, fuentes, tamaños, distribución en pantalla, etc.

### 2. JavaScript

JavaScript es el lenguaje que agrega **interactividad y lógica** a la web.  
Con HTML defines la estructura, con CSS el diseño, y con JS haces que la página **reaccione a eventos** como clics, formularios o animaciones.

> Ejemplo: validación de formularios, menús dinámicos, sliders.

### 3. DOM (Document Object Model)

El **DOM** es la representación estructurada de tu documento HTML en memoria.  
Permite que JavaScript **acceda y modifique** elementos HTML en tiempo real.

> Ejemplo: cambiar el texto de un `<p>` o mostrar un popup al presionar un botón.

### 4. SEO (Search Engine Optimization)

El SEO consiste en optimizar el contenido HTML para que **motores de búsqueda** como Google puedan indexarlo correctamente.  
Esto incluye el uso de **etiquetas semánticas**, meta descripciones y títulos jerárquicos.

> Ejemplo: usar `<article>` para contenido principal, `<h1>` para el título principal y `<meta>` para información descriptiva.

### 5. Accesibilidad Web (A11Y)

La accesibilidad busca que **todas las personas**, incluyendo quienes tienen discapacidades, puedan navegar e interactuar con tu contenido.

**Buenas prácticas:**

- Uso correcto de etiquetas semánticas.
- Texto alternativo en imágenes (`alt`).
- Navegación con teclado.
- Contrastes adecuados de color.

### 6. Etiquetas Semánticas

Son etiquetas que **describen el significado** de su contenido, mejorando la legibilidad y accesibilidad.

Ejemplos:

- **`<header>`**: Encabezado de la página o sección.
- **`<main>`**: Contenido principal.
- **`<article>`**: Contenido independiente.
- **`<footer>`**: Pie de página.

---

# Herramientas recomendadas

Estas herramientas te ayudarán a escribir, probar y optimizar tu código HTML de manera más eficiente:

### **1. Editores de código**

- **Visual Studio Code (VSCode):**\
  popular, extensible y con soporte para HTML, CSS y JS.
- **Sublime Text:**\
  rápido y liviano, ideal para proyectos pequeños.
- **Atom:**\
  flexible, aunque menos actualizado.

#### Extensión recomendada en VSCode:

- _HTML CSS Support_ para autocompletado.
- _Prettier_ para formateo automático.
- _Live Server_ para ver cambios en tiempo real.

### **2. Validadores y herramientas de calidad**

- [W3C Validator](https://validator.w3.org/): Validación de HTML según los estándares.
- [WebAIM](https://webaim.org/): Análisis de accesibilidad.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse): Auditoría de SEO, rendimiento y accesibilidad.

### **3. Recursos gráficos y multimedia**

- [Unsplash](https://unsplash.com/): Imágenes libres de uso.
- [Pexels](https://pexels.com/): Videos e imágenes gratuitas.
- [TinyPNG](https://tinypng.com/): Compresión de imágenes sin perder calidad.

### **4. Herramientas para prototipado**

- [Figma](https://figma.com/): Diseño visual y prototipos de interfaces.
- [Canva](https://canva.com/): Creación rápida de diseños simples.

### **5. Herramientas de desarrollo en el navegador**

Todos los navegadores modernos (Chrome, Edge, Firefox) incluyen **DevTools**, útiles para:

- Inspeccionar elementos HTML y CSS.
- Depurar errores en JavaScript.
- Medir rendimiento y accesibilidad.

> Atajo común en navegadores: `F12` o `Ctrl + Shift + I`.

### **6. Frameworks y librerías para HTML**

Si quieres optimizar tu flujo de trabajo con HTML, puedes usar herramientas que te den componentes listos o plantillas:

- **Bootstrap:**\
  Para diseño rápido y responsive.
- **Tailwind CSS:**\
  Estilos utilitarios y personalizables.
- **Materialize:**\
  Basado en Material Design.

> Aunque no reemplazan el HTML, te permiten trabajar más rápido con interfaces modernas.

[🔼 temas](#temas)

---

# Conceptos Claves

### 1. Diferencia entre `<div>` y `<span>`

- **`<div>`**: Es un elemento de **bloque**, ocupa todo el ancho disponible y comienza en una nueva línea.
- **`<span>`**: Es un elemento **en línea**, solo ocupa el espacio de
  su contenido y no fuerza un salto de línea.

### 2. Modelo de caja (Box Model)

Todo elemento en HTML se representa como una caja compuesta por:

- **Content**: El contenido (texto, imagen, etc.).
- **Padding**: Espacio entre el contenido y el borde.
- **Border**: El borde alrededor del padding.
- **Margin**: Espacio externo que separa el elemento de otros.

### 3. Función de `<!DOCTYPE html>`

Indica al navegador qué **versión de HTML** se está utilizando.\
En HTML5 se usa simplemente:

```html
<!DOCTYPE html>
```

Esto asegura que el navegador interprete el documento en **modo
estándar**, evitando errores de compatibilidad.

### 4. Semántica en HTML5

La **semántica** significa usar etiquetas que describan el significado
del contenido.\
Esto mejora la **accesibilidad**, **SEO** y la comprensión del código.

> **Ejemplos:** `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`, `<main>`, `<aside>`.

### 5. Diferencia entre `id` y `class`

- **`id`**: es un identificador único, que no se repite.
- **`class`**: Agrupa elementos con estilos o comportamientos compartidos.

### 6. Insertar una imagen con `<img>`

Etiqueta básica:

```html
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

**Atributos obligatorios:**

- **`src:`** Ruta de la imagen.
- **`alt:`** Texto alternativo (importante para accesibilidad y SEO).

### 7. Uso de `<meta>` y `charset`

- **`<meta>`** define metadatos sobre el documento, como descripción,
  palabras clave o configuración.\
- El atributo **`charset`** indica la codificación de caracteres,
  normalmente UTF-8:

```html
<meta charset="UTF-8" />
```

> Esto evita problemas con caracteres especiales como tildes o eñes.

### 8. Estructura de una tabla en HTML

**Principales etiquetas:**

```html
<table>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>100</td>
    </tr>
  </tfoot>
</table>
```

| Etiqueta  | Descripción          |
| :-------: | -------------------- |
| `<table>` | Tabla.               |
| `<thead>` | Encabezado.          |
| `<tbody>` | Cuerpo.              |
| `<tfoot>` | Pie de tabla.        |
|  `<tr>`   | Fila.                |
|  `<th>`   | Celda de encabezado. |
|  `<td>`   | Celda normal         |

### 9. Propósito de `<script>`

Se utiliza para **agregar JavaScript** a la página.

- **Ubicaciones recomendadas:**
  - Justo antes de `</body>`. Mejor rendimiento porque carga el HTML primero.
  - En `<head>` con el atributo `defer`:

```html
<script src="app.js" defer></script>
```

### 10. Diferencia entre `<b>` y `<strong>`, `<i>` y `<em>`

- **`<b>` y `<i>`:**
  - Solo efectos visuales (**negrita** y _cursiva_).
- **`<strong>` y `<em>`:**
  - Dan **énfasis semántico**, usados por lectores de pantalla y SEO.

```html
<b>Texto importante visualmente</b>
<strong>Texto importante semánticamente</strong>
```

### 11. Atributos globales

Pueden aplicarse a **cualquier etiqueta HTML**.

> **Ejemplos:** - `id` - `class` - `style` - `title` - `hidden` - `lang`

### 12. Diferencia entre `localStorage` y `sessionStorage`

Ambos almacenan datos en el navegador.

| Característica | localStorage                 | sessionStorage               |
| -------------- | ---------------------------- | ---------------------------- |
| Duración       | Permanente (hasta borrar)    | Solo mientras dure la sesión |
| Tamaño aprox.  | 5-10 MB                      | 5-10 MB                      |
| Uso común      | Guardar preferencias, tokens | Datos temporales             |

### 13. Validación de formularios en HTML5

HTML5 incluye atributos que validan datos sin JavaScript:

> **Ejemplo:**

```html
<input type="email" required />
```

| atributo     | descripción                        |
| ------------ | ---------------------------------- |
| `required`   | Campo obligatorio.                 |
| `pattern`    | Validar con expresiones regulares. |
| `min`, `max` | Para números y fechas.             |
| `type`       | `email`, `number`, `url`, etc      |

### 14. Iframe y riesgos

Un **iframe** inserta contenido externo dentro de una página.

```html
<iframe src="https://example.com"></iframe>
```

- **Usos:**
  - Videos de YouTube.
  - Mapas interactivos.
- **Riesgos:**
  - Vulnerable a ataques.
  - Se recomienda usar atributos como: " `sandbox`, `allowfullscreen` o `loading="lazy"` "

[🔼 temas](#temas)

---

# Comandos

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

### Etiquetas de texto semántico

|  Etiqueta  | Descripción                   |
| :--------: | ----------------------------- |
|   `<q>`    | Citas cortas.                 |
|  `<cite>`  | Referencias.                  |
| `<small>`  | Texto de menor importancia.   |
|  `<abbr>`  | Abreviaturas con significado. |
| ``y`<del>` | Texto agregado o eliminado.   |

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

### Etiquetas especializadas

Ejemplo `<input>` con tipos:

```html
<input type="number" placeholder="Edad" />
<input type="date" />
<input type="checkbox" /> Acepto términos
<input type="color" />
<input type="file" />
```

### Envío de formularios

- Botón tradicional:

```html
<input type="submit" value="Enviar" />
```

- Botón personalizado:

```html
<button>Enviar</button>
```

### Validaciones básicas

```html
<input type="email" required /> <input type="text" pattern="[A-Za-z]{3,}" />
```

---

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

[🔼 temas](#temas)

---

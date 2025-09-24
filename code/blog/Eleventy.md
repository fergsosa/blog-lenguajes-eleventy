---
layout: layout-post.njk
title: Eleventy
img: /img/portada/eleventy.avif
description: Generador estático, sitios web rápidos.
tags: ["blog", "frameworks"]
date: "2024-02-22"
---

# {{title}}

![img]({{img}})

Eleventy, conocido también como **11ty**, es un generador de sitios estáticos (SSG - _Static Site Generator_) que se enfoca en la **simplicidad**, la **flexibilidad** y la **velocidad**. Es ideal para desarrolladores que desean crear sitios web rápidos y optimizados sin la complejidad de frameworks más grandes.

---

## 1. ¿Qué es {{title}}?

Eleventy es una herramienta que convierte archivos de contenido como **Markdown**, **HTML**, **Nunjucks**, **Liquid**, entre otros, en un sitio web estático listo para desplegar.

#### Diferencias principales respecto a otros SSGs:

- **Simplicidad:** Configuración mínima para comenzar a trabajar.
- **Flexibilidad:** Soporte para múltiples lenguajes de plantillas sin depender de uno solo.
- **Ligereza:** No requiere un framework completo como React, Vue o Angular.
- **Velocidad:** Generación rápida de sitios estáticos optimizados.

> A diferencia de frameworks como Next.js o Gatsby, Eleventy **no añade JavaScript por defecto**, permitiendo sitios más ligeros y rápidos.

### 2. ¿Para qué se usa?

Eleventy se utiliza principalmente para crear sitios web donde el contenido es estático o no necesita generación dinámica en el servidor.

#### Contextos ideales:

- Blogs personales o corporativos.
- Documentación técnica de proyectos.
- Portfolios y páginas personales.
- Sitios informativos que priorizan la velocidad.
- Proyectos donde se busca simplicidad y bajo mantenimiento.

### 3. ¿Qué puedo construir con {{title}}?

#### Con Eleventy puedes crear una variedad de proyectos web, entre ellos:

- **Blogs** con categorías, etiquetas y RSS.
- **Documentación** para proyectos open source o empresas.
- **Portfolios** minimalistas y optimizados.
- **Landing pages** enfocadas en conversión y SEO.
- **Sitios corporativos** con contenido estático y de fácil gestión.

> Básicamente, cualquier sitio donde **no se requiera lógica compleja de backend**.

### 4. ¿Cuándo es más conveniente usarlo?

#### Eleventy es conveniente cuando buscas:

- **Velocidad de carga extrema**, sin JavaScript innecesario.
- **Facilidad de mantenimiento**, sin una curva de aprendizaje complicada.
- **Compatibilidad con Markdown y contenido estático**.
- **SEO optimizado**, gracias a la generación de páginas limpias y rápidas.
- **Proyectos pequeños o medianos** sin funcionalidades dinámicas complejas.

#### No es recomendable si necesitas:

- Funcionalidades en tiempo real (chat, dashboards, etc.).
- Aplicaciones con muchos datos dinámicos.
- API complejas integradas directamente en el front-end.

## Buenas prácticas recomendadas

#### Para mantener un proyecto Eleventy limpio, escalable y eficiente:

- **Organizar carpetas y plantillas** siguiendo una estructura clara:\
  src/ > \_includes/ \_data/ posts/ styles/ index.md
- **Utilizar layouts** para evitar repetir código HTML.
- **Mantener contenido separado de la lógica** usando Markdown para contenido y plantillas para diseño.
- **Versionar el proyecto** con Git desde el inicio.
- **Optimizar imágenes y recursos estáticos** antes de la generación.
- **Automatizar el deploy** con servicios como Netlify o Vercel.
- **Comentar y documentar** el código para futuros mantenimientos.

---

## Resumen rápido

#### Fortalezas principales:

- Simplicidad y configuración mínima.
- Soporte para múltiples lenguajes de plantillas.
- Sitios rápidos y optimizados por defecto.
- Perfecto para SEO y rendimiento web.

#### Debilidades principales:

- No maneja contenido dinámico de forma nativa.
- Menos popularidad comparado con otros frameworks.
- Requiere conocimiento básico de HTML, CSS y Markdown.

#### Cuándo usarlo:

- Para blogs, portfolios, landing pages y documentación.
- Proyectos donde la velocidad y simplicidad son prioridad.
- Sitios estáticos con contenido frecuente.

#### Cuándo evitarlo:

- Aplicaciones con datos en tiempo real.
- Proyectos con lógica compleja de backend.
- Sistemas que requieren muchas integraciones dinámicas.

---

# Temas {#temas#}

- [inicio](#eleventy)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Estos conceptos son esenciales para trabajar con Eleventy de manera efectiva:

### **Sitios estáticos (Static Sites):**

Páginas web que no dependen de un servidor para generar contenido dinámico. Todo el HTML se genera antes del despliegue.

### **Plantillas (Templates):**

Archivos que definen la estructura de tus páginas. Eleventy soporta varios lenguajes de plantillas como:\
• Nunjucks • Liquid • Handlebars • Mustache • EJS • Markdown

### **Layouts:**

Plantillas base reutilizables que permiten mantener un diseño consistente en varias páginas.

### **Includes (Inclusiones):**

Fragmentos de código que se pueden insertar dentro de plantillas para evitar duplicación.

### **Collections:**

Conjuntos de contenido agrupados por categorías, etiquetas o cualquier criterio personalizado.

### **Front Matter:**

Metadatos escritos en YAML, JSON o JavaScript al inicio de archivos que permiten configurar propiedades de cada página.

### **Data Files:**

Archivos en `_data/` que proporcionan información global o específica de páginas para usar en plantillas.

### **Filters y Shortcodes:**

Funciones que transforman datos o generan contenido dinámico durante la generación del sitio.

### **Markdown:**

Lenguaje de marcado ligero usado para escribir contenido fácilmente, que Eleventy convierte en HTML.

### **Build/Deploy:**

Proceso de generar los archivos estáticos y subirlos a un servidor o servicio de hosting.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Estas herramientas y servicios facilitan la creación, gestión y despliegue de proyectos Eleventy:

### **Node.js:**

- Entorno de ejecución JavaScript necesario para instalar y ejecutar Eleventy.

### **npm o Yarn:**

- Gestores de paquetes para instalar dependencias como Eleventy y plugins.

### **Editor de código (VSCode, Sublime, etc.):**

- Con soporte para plantillas y sintaxis de Markdown.

### **Browsersync:**

- Para recarga automática del navegador durante desarrollo.

### **Netlify / Vercel / GitHub Pages:**

- Plataformas de hosting optimizadas para sitios estáticos.

### **Preprocesadores CSS (Sass, PostCSS):**

- Para estilos más organizados y reutilizables.

### **Plugins de Eleventy:**

- Como `eleventy-plugin-syntaxhighlight` para resaltar código o `eleventy-plugin-seo` para mejorar SEO.

### **Git:**

- Para control de versiones y colaboración en proyectos.

### **Imagemin / TinyPNG:**

- Para optimizar imágenes y reducir el tamaño de los archivos del sitio.

> Combinando estos conceptos y herramientas, podrás construir sitios web **eficientes, rápidos y fáciles de mantener** con Eleventy.

[🔼 temas](#temas)

---

# Snippets rápidos

### 1. Crear un layout base (Nunjucks)

```html
<!-- _includes/layout.njk -->
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>{{ title }}</title>
  </head>
  <body>
    {{ content | safe }}
  </body>
</html>
```

### 2. Página usando layout y front matter

```markdown
---
title: Mi primera página
layout: layout.njk
---

# ¡Hola, mundo!

Este es un ejemplo de contenido en Eleventy.
```

### 3. Crear colección de posts

```javascript
// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });
};
```

### 4. Insertar un include

```html
{% include "header.njk" %}
<h1>Bienvenido</h1>
{% include "footer.njk" %}
```

### 5. Usar un filtro personalizado

```javascript
eleventyConfig.addFilter("upper", function (value) {
  return value.toUpperCase();
});
```

[🔼 temas](#temas)

---

# Comandos

### 1. Instalar Eleventy

```bash
npm install @11ty/eleventy --save-dev
```

### 2. Crear proyecto y estructura inicial

```bash
mkdir mi-proyecto && cd mi-proyecto
npx @11ty/eleventy --init
```

### 3. Generar sitio localmente

```bash
npx eleventy --serve
# Levanta un servidor local con recarga automática
```

### 4. Generar los archivos estáticos

```bash
npx eleventy
# Crea la carpeta _site con todos los archivos finales
```

### 5. Configuración básica en `.eleventy.js`

```javascript
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets"); // Copiar archivos estáticos
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
```

### 6. Ignorar archivos o carpetas

```javascript
eleventyConfig.ignores.add("src/drafts/**/*");
```

### 7. Comando para despliegue rápido (ejemplo con Netlify CLI)

```bash
netlify deploy --prod
```

> Estos snippets y comandos cubren la mayoría de las necesidades iniciales para desarrollar un proyecto con Eleventy de manera rápida y organizada.

[🔼 temas](#temas)

---

# Conceptos Claves

{% raw %}

## 🟢 Nivel Básico

### 1. ¿Qué es Eleventy y en qué se diferencia de otros generadores de sitios estáticos?

Eleventy es un **generador de sitios estáticos (SSG)** que transforma archivos de contenido (Markdown, HTML, etc.) en un sitio optimizado y listo para producción.

**Diferencias principales:**

- Soporta múltiples lenguajes de plantillas sin depender de uno específico.
- No añade JavaScript innecesario por defecto, lo que mejora el rendimiento.
- Configuración mínima y curva de aprendizaje baja.
- Flexibilidad para crear desde blogs hasta sitios corporativos.

---

### 2. Describe la estructura básica de un proyecto Eleventy.

Una estructura común podría ser:

```
mi-proyecto/
│
├── src/                # Carpeta principal del contenido
│   ├── _includes/      # Layouts y plantillas reutilizables
│   ├── _data/          # Datos globales (JSON, YAML, JS)
│   ├── posts/          # Contenido como artículos o páginas
│   └── index.md        # Página de inicio
│
├── .eleventy.js        # Archivo de configuración
├── package.json        # Dependencias y scripts
└── _site/              # Archivos generados (output final)
```

---

### 3. ¿Qué son los templates en Eleventy y cuáles tipos de plantillas soporta?

Los **templates** (plantillas) definen la **estructura y el diseño** de las páginas.  
Eleventy soporta varios lenguajes de plantillas, incluyendo:

- **Markdown** (`.md`)
- **Nunjucks** (`.njk`)
- **Liquid** (`.liquid`)
- **Handlebars** (`.hbs`)
- **EJS**
- **Mustache**
- **Pug** (mediante configuración adicional)

---

### 4. Explica cómo Eleventy maneja los datos globales y cómo se accede a ellos en los templates.

Los **datos globales** se almacenan en la carpeta `_data/` y están disponibles en cualquier plantilla.

**Ejemplo:**

```
src/_data/site.json
```

```json
{
  "title": "Mi Blog",
  "author": "Fernando"
}
```

**Uso en plantilla Nunjucks:**

```html
<h1>{{ site.title }}</h1>
<p>Autor: {{ site.author }}</p>
```

> Eleventy automáticamente expone el contenido de los archivos en `_data/` como variables globales.

---

### 5. Menciona al menos tres ventajas de usar Eleventy frente a un CMS tradicional.

- **Mayor velocidad:** Los sitios estáticos cargan mucho más rápido.
- **Seguridad:** Sin base de datos ni backend que puedan ser atacados.
- **Simplicidad en despliegue:** Basta con subir los archivos generados a un servidor estático.
- **Menor costo:** Hosting económico o gratuito (Netlify, GitHub Pages).

---

## 🟡 Nivel Intermedio

### 6. ¿Cómo se crean y usan collections en Eleventy? Da un ejemplo práctico de uso.

Las **collections** permiten agrupar contenido automáticamente según criterios definidos.

**Ejemplo:**

```javascript
// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });
};
```

**Uso en plantilla:**

```html
<ul>
  {% for post in collections.posts %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>
```

> Esto genera una lista automática con enlaces a cada post.

---

### 7. Explica la diferencia entre filtros (filters) y shortcodes en Eleventy, y cuándo usar cada uno.

- **Filtros (Filters):** Transforman datos en plantillas.

  - Ejemplo: convertir texto a mayúsculas.

```javascript
eleventyConfig.addFilter("upper", (str) => str.toUpperCase());
```

```html
{{ "hola mundo" | upper }}
<!-- Resultado: HOLA MUNDO -->
```

- **Shortcodes:** Insertan bloques de contenido dinámico.

  - Ejemplo: generar una tarjeta de usuario.

```javascript
eleventyConfig.addShortcode("userCard", function (name, role) {
  return `<div class="card"><h2>${name}</h2><p>${role}</p></div>`;
});
```

```html
{% userCard "Fernando", "Desarrollador" %}
```

> **Regla general:**  
> Usa **filters** para modificar datos y **shortcodes** para generar bloques HTML.

---

### 8. Describe cómo se integran datos de archivos JSON o YAML en Eleventy.

- Eleventy detecta automáticamente archivos `.json` o `.yaml` en la carpeta `_data/`.
- Estos datos se convierten en variables disponibles en las plantillas.

**Ejemplo con JSON:**

```json
// src/_data/team.json
[
  { "name": "Ana", "role": "Diseñadora" },
  { "name": "Luis", "role": "Desarrollador" }
]
```

**Uso en plantilla:**

```html
<ul>
  {% for member in team %}
  <li>{{ member.name }} - {{ member.role }}</li>
  {% endfor %}
</ul>
```

---

### 9. ¿Qué es el archivo `.eleventy.js` y qué tipo de configuraciones se pueden definir allí?

Es el **archivo principal de configuración** de Eleventy.  
Permite personalizar el comportamiento del proyecto, como:

- Directorios de entrada y salida.
- Filtros y shortcodes personalizados.
- Configuración de plugins.
- Collections.
- Copia de archivos estáticos.
- Archivos o carpetas a ignorar.

**Ejemplo básico:**

```javascript
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
```

---

### 10. Menciona buenas prácticas para organizar archivos y carpetas en un proyecto Eleventy de mediana escala.

- **Separar contenido de plantillas:**  
  `posts/` para contenido y `_includes/` para layouts.
- **Usar `_data/`** para datos globales y centralizados.
- **Crear subcarpetas temáticas** si el sitio tiene muchas secciones.
- **Nombrar archivos de forma clara y consistente.**
- **Utilizar layouts reutilizables** para no repetir código.
- **Versionar con Git** desde el inicio.
- **Optimizar recursos estáticos** como imágenes y fuentes.

---

## 🔴 Nivel Avanzado

### 11. Explica cómo implementar paginación en Eleventy y proporciona un ejemplo de estructura de archivos necesaria.

La **paginación** divide contenido grande en varias páginas.

**Estructura:**

```
src/
└── posts/
    ├── post1.md
    ├── post2.md
    └── post3.md
└── blog/
    └── index.njk
```

**Ejemplo en `index.njk`:**

```markdown
---
pagination:
  data: collections.posts
  size: 5
  alias: paginatedPosts
layout: layout.njk
---

<ul>
  {% for post in paginatedPosts %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>

<nav>
  {% if pagination.href.previous %}
    <a href="{{ pagination.href.previous }}">Anterior</a>
  {% endif %}
  {% if pagination.href.next %}
    <a href="{{ pagination.href.next }}">Siguiente</a>
  {% endif %}
</nav>
```

---

### 12. ¿Cómo manejar múltiples layouts y plantillas condicionales según la categoría de una página?

- Crear un layout por categoría.
- Usar front matter para asignar el layout dinámicamente.

**Ejemplo:**

```markdown
---
title: Post de diseño
layout: layouts/design.njk
category: design
---
```

O manejarlo en una plantilla con condicionales:

```html
{% if category == "design" %} {% include "layouts/design.njk" %} {% else %} {%
include "layouts/default.njk" %} {% endif %}
```

---

### 13. Describe un caso real donde Eleventy se combine con una API externa para generar contenido dinámico en un sitio estático.

- **Caso:** Crear un blog que muestra precios de criptomonedas en tiempo real.
- **Proceso:**
  1. Hacer una petición a la API desde un archivo en `_data/` usando Node.js.
  2. Generar páginas estáticas con los datos obtenidos.
  3. Regenerar el sitio en cada build para actualizar la información.

**Ejemplo en `_data/crypto.js`:**

```
const fetch = require( " node-fetch " );

module.exports = async function () {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const data = await response.json();
  return data.data.slice(0, 5); // Top 5 criptomonedas
};
```

---

### 14. Explica cómo crear y usar un plugin personalizado en Eleventy.

**1. Crear el plugin:**

```javascript
// plugins/saludo.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("saludo", function (nombre) {
    return `<p>Hola, ${nombre}!</p>`;
  });
};
```

**2. Importarlo en `.eleventy.js`:**

```javascript
const saludo = require("./plugins/saludo");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(saludo);
};
```

**3. Usarlo en plantilla:**

```html
{% saludo "Fernando" %"}
```

---

### 15. ¿Qué técnicas recomiendas para optimizar el rendimiento de un sitio generado con Eleventy?

- **Optimización en build:**

  - Minificar HTML, CSS y JS.
  - Optimizar imágenes (usando Imagemin o TinyPNG).
  - Habilitar generación incremental cuando sea posible.

- **Optimización en tiempo de carga:**

  - Usar lazy loading en imágenes.
  - Implementar caching con headers adecuados.
  - Evitar JavaScript innecesario.
  - Usar fuentes locales optimizadas.

- **Deploy eficiente:**
  - Automatizar despliegue con Netlify o Vercel.
  - Configurar CDN para contenido estático.
  - Mantener actualizadas las dependencias del proyecto.

---

{% endraw %}

[🔼 temas](#temas)

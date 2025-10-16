# 📝 Blog Lenguajes Eleventy

> Guía práctica y técnica sobre **lenguajes, frameworks y herramientas de desarrollo**, construida con **Eleventy (11ty)** — un generador de sitios estáticos rápido, simple y flexible.

---

## 🚀 Descripción del Proyecto

**Blog Lenguajes Eleventy** es un sitio web estático creado con **[Eleventy](https://www.11ty.dev/)**, un _Static Site Generator (SSG)_ que prioriza la simplicidad y la velocidad.

El objetivo del proyecto es documentar, de forma organizada, los principales conceptos que voy aprendiendo sobre distintas áreas del desarrollo web:

- 💻 **Lenguajes y Sintaxis**
- ⚙️ **Frontend y Frameworks**
- 🧠 **Backend y APIs**
- 🗄️ **Bases de Datos**
- 🧰 **Herramientas de Desarrollo**

Cada nota funciona como una **mini-guía completa** que cubre tanto teoría como práctica, ideal para repasar o preparar entrevistas técnicas.

---

## 🎯 Objetivo General

Crear un **repositorio de conocimiento** que ayude a:

- Entender qué es y para qué sirve cada tecnología.
- Conocer buenas prácticas y casos de uso.
- Tener a mano comandos, snippets y configuraciones.
- Practicar entrevistas técnicas de manera progresiva.

---

## 🧩 Estructura de Cada Nota

Cada artículo o guía está dividido en **3 partes complementarias**:

### 1. Introducción

- Qué es y para qué sirve
- Cuándo usarlo o evitarlo
- Buenas prácticas recomendadas

### 2. Referencia Técnica

- Herramientas o dependencias clave
- Códigos esenciales y snippets útiles
- Comandos principales

### 3. Entrevistas

- 15 preguntas técnicas con respuestas
- Desde nivel **básico a avanzado**

🧠 **Objetivo:** servir como una guía completa para **aprender, usar y dominar** cualquier tecnología.

---

## 🏗️ Estructura del Proyecto

```bash
blog-lenguajes-eleventy/
├── code/
│   ├── _data/               # Datos globales del sitio (configuración, variables, etc.)
│   ├── _include/            # Componentes y layouts de Nunjucks
│   │   └── layout-page.njk  # Layout base para las páginas
│   ├── blog/
│   │   └── notas.md         # Notas y artículos del blog
│   └── public/              # Archivos estáticos
│       ├── css/             # Estilos del sitio
│       ├── img/             # Imágenes
│       └── js/              # Scripts
└── .eleventy.js             # Configuración principal de Eleventy
```

## ⚙️ Tecnologías Utilizadas

| Herramienta                                        | Propósito                                  |
| -------------------------------------------------- | ------------------------------------------ |
| [Eleventy (@11ty/eleventy)](https://www.11ty.dev/) | Generador de sitio estático                |
| [Nunjucks](https://mozilla.github.io/nunjucks/)    | Motor de plantillas                        |
| HTML / CSS / JS                                    | Estructura, estilos y funcionalidad básica |
| Markdown (.md)                                     | Creación de notas y artículos              |

---

## 🧰 Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tuusuario/blog-lenguajes-eleventy.git
   cd blog-lenguajes-eleventy
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar el entorno local**

   ```bash
   npx @11ty/eleventy --serve
   ```

   El sitio se abrirá en [http://localhost:8080](http://localhost:8080)

4. **Generar versión de producción**

   ```bash
   npx @11ty/eleventy
   ```

   Los archivos estáticos se generarán en la carpeta `_site/`.

---

## 🏷️ Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
Podés usarlo, modificarlo y compartirlo libremente mencionando la fuente.

## ✨ Autor

**Fernando Sosa**
📘 Blog personal: _Lenguajes, frameworks y herramientas para desarrolladores_
💡 “Aprender, practicar y compartir — una nota a la vez.”

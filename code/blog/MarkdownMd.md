---
layout: layout-post.njk
title: Markdown
img: /img/portada/markdown.avif
description: Ideas principales de Markdown
tags: ["blog", "lenguajes"]
date: "2023-02-03"
---

# {{title}}

![{{title}}]({{img}})

# <!-- Que es -->

## ¿Qué es?

Markdown es un **lenguaje de marcado ligero** que permite dar formato a texto de manera sencilla y legible.  
Se basa en una sintaxis muy simple, utilizando caracteres comunes como `#`, `*` o `-`, lo que hace que el texto sea fácil de leer incluso sin ser procesado.

> _En otras palabras, un archivo `.md` se puede entender como texto plano, pero al renderizarlo se convierte en contenido con estilo como títulos, listas, enlaces o imágenes._

---

## ¿Para qué sirve?

Markdown se utiliza para **crear documentos con formato** sin necesidad de herramientas complejas.  
Es ideal para:

- Documentación técnica y manuales.
- Archivos README.md en proyectos de software.
- Blogs y publicaciones en la web.
- Notas personales y apuntes.
- Creación de contenido para plataformas como GitHub, GitLab, Reddit o Stack Overflow.

Es muy popular en el desarrollo de software por su simplicidad y compatibilidad con múltiples herramientas.

---

## ¿Cómo funciona?

Markdown funciona al **traducir texto plano con sintaxis específica** a HTML u otros formatos visuales.\
Esto se logra porque los caracteres especiales (`#`, `**`, `>`, etc.) indican al procesador cómo interpretar el texto.

---

## ¿Por qué usar?

Algunas ventajas clave de Markdown:

- **Simplicidad:** Es fácil de aprender y usar, incluso para principiantes.

- **Legibilidad:** El texto se entiende tanto en su forma original como procesado.

- **Portabilidad:** Funciona en múltiples plataformas y herramientas, como GitHub, VSCode o Notion.

- **Versatilidad:** Puede generar HTML, PDF y otros formatos.

- **Ligero y rápido:** No necesita software pesado, solo un editor de texto.

> En resumen, Markdown es ideal cuando quieres **crear contenido estructurado y limpio**, sin complicarte con herramientas avanzadas de edición.

# Sintaxis Básica

## Énfasis texto

El énfasis se utiliza para resaltar palabras o frases en el texto.

| Markdown           | Resultado               |
| ------------------ | ----------------------- |
| `_texto_`          | _cursiva_               |
| `**texto**`        | **negrita**             |
| `**_texto_**`      | **_cursiva y negrita_** |
| `~~texto~~`        | ~~Tachado~~             |
| `<ins>texto</ins>` | <ins>Subrayar</ins>     |
| `<sub>texto</sub>` | <sub>subíndice</sub>    |
| `&nbsp;&nbsp;`     | &nbsp;&nbsp; 2 espacios |

## Encabezado

Los encabezados se crean usando `#`.\
Cuantos más `#`, menor nivel de encabezado _(de 1 a 6)_.<br/><br/>

**Tip:** Mantén un espacio entre el `#` y el texto.

| N°  | Markdown | Encabezado               |
| :-: | -------: | ------------------------ |
|  1  |        # | Título principal         |
|  2  |       ## | Tema del documento       |
|  3  |      ### | Sección de un tema       |
|  4  |     #### | Apartado de la sección   |
|  5  |    ##### | Ejemplo del apartado     |
|  6  |   ###### | Sub-Apartado del Ejemplo |

## Párrafos y saltos de línea

Para generar un nuevo **párrafo** en Markdown simplemente separa el texto mediante una línea en blanco.\
Los párrafos cortos son aquellos párrafos que tienen entre tres y seis líneas. Si bien existen párrafos más extensos, que pueden llegar hasta las veinte líneas, lo recomendable es que un párrafo no tenga más de cuatro o cinco oraciones.

## Citas

Las citas se crean con el carácter > al inicio de la línea.\
Para anidar citas, se agrega otro >> adicional.

> ##### \> CITAS ANIDADAS
>
> > \>\> Siempre tienes opción de no tener opinión. - Marcos Aurelio.\
> > \>\> Todo lo que escuchamos es una opinión, no un hecho.\
> > \>\> Todo lo que vemos es una perspectiva, no la verdad.
> >
> > > \>\>\> _Marcos Aurelio_

### Alertas

> \> [!NOTA] _Información útil que los usuarios deben conocer._

> \> [!IMPORTANT] _Información clave que los usuarios deben conocer._

> \> [!WARNING] _Información urgente que requiere la atención del usuario._

> \> [!PRECAUCIÓN] _Advierte sobre los riesgos._

## Listas

### Listas desordenadas

Se crean usando `-`, `*` o `+` antes de cada elemento.

- Elemento de lista
  - Elemento de lista Anidada
    - Elemento de lista Anidada 2
    - Elemento de lista Anidada 2
  - Elemento de lista Anidada
  - Elemento de lista Anidada
- Elemento de lista

### Listas ordenadas

Se crean con números seguidos de un punto `(1.)`.

1. Elemento de lista 01
1. Elemento de lista 02
   - Elemento de lista
     1. Elemento de lista 01
     1. Elemento de lista 02
     1. Elemento de lista 02
   1. Elemento de lista 01
1. Elemento de lista 03

### Listas tareas

- [x] `#739`
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

## Reglas horizontales

Se crean con tres o más `* `,` -` o` _` en una línea para separar secciones de una manera visual.

| `*3`  | `-3`  | `_3`  |
| :---: | :---: | :---: |
| `***` | `---` | `___` |

---

## links

Los enlaces se crean con la siguiente sintaxis:\
`[Texto visible](https://ejemplo.com "título emergente")`

| Enlace Markdown                     | Resultado                                       |
| ----------------------------------- | ----------------------------------------------- |
| `< link_linea >`                    | _<https://www.markdownguide.org>_               |
| `[ referencia ]( link )`            | [Markdown Guide](https://www.markdownguide.org) |
| `[ referencia ]( #titulo )`         | [#Markdown](#Markdown)                          |
| `[ referencia ]( #titulo "hover" )` | [#Markdown](#Markdown "hover")                  |

Documentación Markdown: _[Documentación Github](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)_

## Códigos

### En línea

Úsalo para fragmentos cortos de código rodeando el texto con **`** (backtick).

Aquí un ejemplo de `console.log("Hola mundo");`

### En bloque

Para bloques de código más extensos, utiliza tres backticks y opcionalmente especifica el lenguaje para resaltar la sintaxis. &nbsp; &nbsp;\
 ` ```lenguaje `

```
    Comenzar con cuatro espacios en blanco
```

````
```js
  function sumar(a, b) {
    return a + b; }
```
````

```
<pre> Texto pre-formateado
  <pre> Pre anidado </pre>
  <pre> Pre anidado </pre>
</pre>
```

## Imagines

La sintaxis es similar a los enlaces, pero con un `!` al inicio y Imagen con título

```
![Referencia/Texto alternativo](Ruta/Link)
![JavaScript](ruta/a/la/imagen.svg)
![JavaScript](https://JavaScript-svg.com)
```

![JavaScript](https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_js_official_icon_130509.png)

## Tablas

Las tablas se crean utilizando `|` y `-`.<br/><br/>
**Tip:** Alinea columnas con `:-` | `:-:` | `-:`

| Lenguaje |   Uso principal    | Dificultad |
| -------- | :----------------: | ---------: |
| HTML     |   Estructura web   |      Fácil |
| CSS      |  Estilos visuales  |      Fácil |
| JS       | Interactividad web |      Medio |

## Formulario

Markdown estándar no incluye formularios nativos, pero puedes usar HTML dentro de Markdown.

<form>
  <label for="nombre">Nombre:</label><br>
  <input type="text" id="nombre" name="nombre"><br><br>
  
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>

<input type="submit" value="Enviar"><br><br>

<label for="q"> Buscar </label><br>
<input type="search" name="q" id="q">

</form>

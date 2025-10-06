---
layout: layout-post.njk
title: Zod
img: /img/portada/zod.avif
description: Valida y tipa datos de entrada.
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![img]({{img}})

Zod es una librería de validación y definición de esquemas para **TypeScript y JavaScript**. Permite describir la forma de datos (objetos, arrays, strings, números, etc.) y validarlos de manera **segura, tipada y declarativa**.  
A diferencia de otras alternativas, Zod no solo valida en tiempo de ejecución, sino que también **infiera automáticamente los tipos de TypeScript** a partir de los esquemas.

---

## 1. ¿Qué es {{title}}?

- **Zod** es una librería centrada en la **simplicidad y compatibilidad con TypeScript**.
- No necesita un archivo de configuración externo ni compilación adicional.
- Genera automáticamente tipos de TypeScript a partir de los esquemas definidos.
- A diferencia de librerías como `Joi` o `Yup`, está diseñada desde cero con TypeScript en mente, reduciendo la fricción entre validación y tipado.

### 2. ¿Para qué se usa?

Zod se usa principalmente para:

- **Validación de datos** en formularios, APIs o entradas de usuario.
- **Definición de contratos** en servicios backend y frontend.
- **Tipado automático** en TypeScript para mantener consistencia entre runtime y compile-time.

Se aplica mejor en contextos donde se requiere **confiabilidad en los datos** y donde se trabaja con **TypeScript intensivamente**.

### 3. ¿Qué puedo construir con {{title}}?

Con Zod se pueden construir:

- **Validadores para formularios web** en React, Vue, Angular, etc.
- **Esquemas de validación para APIs REST o GraphQL**.
- **Modelos de datos para aplicaciones de Node.js**.
- **Validaciones de archivos JSON, configuraciones o respuestas de terceros**.

### 4. ¿Cuándo es más conveniente usarlo?

- Cuando se trabaja con **TypeScript** y se busca una integración directa con los tipos.
- Cuando se necesita **tipado automático sin duplicar código** (definir validación y tipos en un solo paso).
- Cuando se requiere una **API sencilla y declarativa** sin dependencias pesadas.
- En proyectos donde se prioriza **desarrollar más rápido con menos errores de tipado**.

## Buenas prácticas recomendadas

- **Centralizar esquemas**: definir todos los esquemas en un módulo común para evitar duplicaciones.
- **Reutilizar validaciones**: crear esquemas base y extenderlos según sea necesario (`.extend()`).
- **Validar siempre entradas externas**: peticiones HTTP, archivos cargados o configuraciones.
- **Usar inferencias de tipos** (`z.infer<typeof esquema>`) para evitar inconsistencias.
- **Componer esquemas complejos** usando objetos anidados y uniones (`z.union`, `z.intersection`).

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Integración nativa con TypeScript.
- Sintaxis clara y declarativa.
- Evita duplicación de código entre validación y tipado.
- Ligero y sin dependencias pesadas.

#### ⚠️ Debilidades principales:

- Menos soporte de ecosistema comparado con librerías más antiguas como `Joi`.
- Algunas validaciones avanzadas requieren composición manual.
- Puede ser excesivo para proyectos muy pequeños en JavaScript puro.

#### 🛠️ Cuándo usarlo:

- En proyectos TypeScript de mediana y gran escala.
- Para validar datos externos (APIs, formularios, configuraciones).
- Cuando se busca mantener consistencia entre **tipado y validación**.

#### 🚫 Cuándo evitarlo:

- En proyectos pequeños sin TypeScript, donde validaciones simples bastan.
- Si ya existe una librería de validación consolidada en el stack del proyecto.
- En casos donde se necesita un ecosistema más amplio de plugins y soporte.

---

# Temas {#temas#}

- [inicio](#que-es-Zod)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de trabajar con Zod, conviene tener claros algunos conceptos básicos:

### TypeScript:

Zod está diseñado para integrarse con TypeScript, generando tipos automáticamente a partir de esquemas. Conocer el tipado de TypeScript (interfaces, tipos, uniones, etc.) es fundamental.

### Esquemas:

Un esquema es una **descripción declarativa de la forma de los datos** (por ejemplo, un objeto con campos obligatorios o un string con un patrón específico).

### Inferencia de tipos:

Usando `z.infer<typeof esquema>`, Zod permite que TypeScript deduzca el tipo exacto del esquema sin tener que escribirlo manualmente.

### Validación en tiempo de ejecución:

Mientras que TypeScript solo valida en tiempo de compilación, Zod valida datos **cuando el programa se ejecuta**, asegurando que las entradas sean correctas.

### Composición de esquemas:

Zod permite combinar, extender o refinar esquemas para crear estructuras más complejas (objetos anidados, uniones, intersecciones, etc.).

[🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar con Zod de manera más productiva, se recomienda apoyarse en:

### TypeScript

La integración nativa es el mayor valor de Zod.

### React Hook Form

Integración directa con Zod para validar formularios en React.

### Next.js / Express.js

Usar Zod para validar parámetros de rutas, queries o cuerpos de solicitudes.

### tRPC

Framework que combina Zod y TypeScript para construir APIs con tipado extremo de extremo.

### Prisma

Aunque es un ORM, suele complementarse con Zod para validar datos antes de persistirlos.

### VSCode + Zod Plugin\*\* (opcional)

Mejora la experiencia de autocompletado y resaltado de errores.

> ⚡ Consejo: La combinación **Zod + TypeScript + tRPC/React Hook Form** es considerada una de las más poderosas para desarrollar aplicaciones seguras y con validación tipada extremo a extremo.

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código comunes que se usan con frecuencia en Zod:

```bash
import { z } from "zod";

const nombre = z.string();                    # String básico
const edad = z.number().min(18).max(65);      # Número con validación
const activo = z.boolean();                   # Booleano
const tags = z.array(z.string());             # Array de strings

const usuario = z.object({                    # Objeto con propiedades
  id: z.string().uuid(),
  email: z.string().email(),
  password: z.string().min(6),
});

usuario.parse({                               # Validación de datos
  id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
  email: "ejemplo@mail.com",
  password: "123456",
});
```

[🔼 temas](#temas)

---

# Comandos

Lista de los métodos y funciones clave, con ejemplos cortos:

```bash

z.string().min(3).max(20);              # string: String entre 3 y 20 caracteres
z.number().int().positive();            # number: Número entero positivo
z.boolean();                            # boolean: true o false
z.array(z.number()).nonempty();         # array: Array de números, no vacío

z.object({                              # object:
  nombre: z.string(),
  edad: z.number().optional(),
});

z.union([z.string(), z.number()]);      # union: Acepta string o número
z.enum(["admin", "user", "guest"]);     # enum: Solo esos valores

z.string().optional();                  # optional: Puede ser string o undefined
z.string().nullable();                  # nullable: Puede ser string o null

esquema.parse(dato);                    # parse: Valida o lanza error
esquema.safeParse(dato);                # safeParse: Devuelve { success, data/error }

type Usuario = z.infer<typeof usuario>; # Inferencia de tipos (TypeScript)
```

> ✅ Con estos snippets y comandos ya podés cubrir **80% de los casos comunes en Zod** de manera rápida y segura.

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es Zod y para qué se utiliza?

Zod es una librería de validación de datos para TypeScript y JavaScript que permite definir esquemas y validar datos de forma declarativa, garantizando consistencia entre tipos y runtime.

### 2. ¿Cómo se define un esquema básico de un string obligatorio?

```ts
const nombre = z.string();
```

### 3. ¿Cuál es la diferencia entre `.parse()` y `.safeParse()` en Zod?

- **`.parse()`**\
  valida y lanza un error si falla;
- **`.safeParse()`**\
  devuelve un objeto `{ success, data | error }` sin lanzar excepciones.

### 4. ¿Qué función cumple `z.infer<typeof esquema>`?

Permite inferir automáticamente el tipo TypeScript a partir de un esquema Zod, evitando duplicar definiciones de tipo.

### 5. ¿Cómo se define un objeto con campos obligatorios y opcionales?

```ts
const usuario = z.object({
  nombre: z.string(),
  edad: z.number().optional(),
});
```

---

## 🟡 Intermedio

### 6. ¿Cómo se valida un array de strings no vacío?

```ts
const tags = z.array(z.string()).nonempty();
```

### 7. Explica la diferencia entre `.optional()` y `.nullable()`.

- **`.optional()`** permite `undefined`,
- **`.nullable()`** permite `null`.

Se pueden combinar si se desea aceptar ambos.

### 8. ¿Cómo combinar esquemas usando `z.union()` y `z.intersection()`?

```ts
const esquemaUnion = z.union([z.string(), z.number()]);
const esquemaInterseccion = z.intersection(
  z.object({ a: z.string() }),
  z.object({ b: z.number() })
);
```

### 9. ¿Qué son las `refinements` y para qué sirven?

Permiten agregar validaciones personalizadas a un esquema, por ejemplo:

```ts
z.string().refine((val) => val.length > 5, {
  message: "Mínimo 6 caracteres",
});
```

### 10. ¿Cómo extender un esquema existente?

```ts
const usuarioExtendido = usuario.extend({ email: z.string().email() });
```

---

## 🔴 Avanzado

### 11. ¿Cómo validar tipos literales o enums con Zod?

```ts
const rol = z.enum(["admin", "user", "guest"]);
```

### 12. ¿Qué ventajas ofrece Zod frente a otras librerías como Joi o Yup en proyectos TypeScript?

Integración nativa con TypeScript, tipado automático, API declarativa y menos necesidad de duplicar tipos.

### 13. ¿Cómo se valida datos dinámicos o dependientes de otros campos?

```ts
z.object({ start: z.date(), end: z.date() }).refine(
  (data) => data.end > data.start,
  { message: "End debe ser mayor que Start" }
);
```

### 14. ¿Se puede usar Zod para validar respuestas de APIs externas? Explica cómo.

Sí, creando un esquema que refleje la estructura esperada y usando `.parse()` o `.safeParse()` sobre la respuesta antes de procesarla.

### 15. Menciona buenas prácticas al usar Zod en proyectos grandes.

- Centralizar esquemas en módulos separados.
- Reutilizar y extender esquemas en lugar de duplicarlos.
- Validar siempre entradas externas.
- Usar inferencias de tipos para mantener consistencia entre runtime y TypeScript.
- Componer esquemas complejos con `union`, `intersection` o anidamientos de objetos.

[🔼 temas](#temas)

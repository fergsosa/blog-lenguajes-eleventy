---
layout: layout-post.njk
title: TypeScript
img: /img/portada/typescript.avif
description: Ideas principales de TypeScript
tags: ["blog", "lenguajes"]
date: "2023-06-02"
---

# {{title}}

![img]({{img}})

## 1. ¿Qué es {{title}}?

TypeScript es un **superset de JavaScript** desarrollado por **Microsoft** que agrega **tipado estático** y **características avanzadas** al lenguaje.  
Esto significa que todo código JavaScript válido también es válido en TypeScript, pero con la ventaja de **detectar errores antes de ejecutar el programa** gracias a su sistema de tipos.

**Diferencias clave respecto a JavaScript:**

- **Tipado estático**: permite definir tipos para variables, parámetros y funciones.
- **Compilación**: el código TypeScript debe compilarse a JavaScript para ser ejecutado.
- **Mejor autocompletado** y **detección temprana de errores** en editores como VSCode.
- Soporte para **características modernas** de ECMAScript antes de que estén disponibles en todos los navegadores.

### 2. ¿Para qué se usa?

TypeScript se utiliza principalmente para **desarrollo a gran escala** donde la **mantenibilidad** y la **calidad del código** son esenciales.

**Contextos ideales:**

- Aplicaciones **web complejas** con frameworks como _React_, _Angular_, _Vue_.
- Proyectos **backend** con _Node.js_.
- Librerías o **SDKs** que serán usadas por otros desarrolladores.
- Sistemas con **equipos grandes** que requieren un código estandarizado y predecible.

### 3. ¿Qué puedo construir con {{title}}?

Con TypeScript puedes desarrollar prácticamente **todo lo que se puede hacer con JavaScript**, pero con mayor robustez y escalabilidad:

- **Aplicaciones web** modernas (SPA, PWA).
- **APIs y microservicios** usando Node.js y Express.
- **Aplicaciones móviles** mediante _React Native_ o _Ionic_.
- **Librerías y herramientas** para la comunidad.
- **Automatizaciones y scripts** con mejor control de errores.

### 4. ¿Cuándo es más conveniente usarlo?

TypeScript es especialmente útil en situaciones donde:

- El **proyecto crecerá con el tiempo** y se integrarán múltiples módulos.
- **Trabajas en equipo**, y el tipado ayuda a entender y documentar el código.
- Necesitas **detectar errores en tiempo de desarrollo**, antes de que lleguen a producción.
- Buscas **mayor productividad** mediante autocompletado, refactorización segura y documentación automática.

> ⚠️ _En proyectos pequeños, prototipos o scripts simples, puede ser excesivo usar TypeScript debido a la configuración y compilación necesarias._

## Buenas prácticas recomendadas

**Buenas prácticas:**

- Usa **tipos explícitos** (`string`, `number`, `boolean`) para mayor claridad.
- Mantén una **estructura clara de carpetas** en el proyecto.
- Activa `"strict": true` en el `tsconfig.json` para aprovechar al máximo el tipado.
- Evita usar `any`, a menos que sea absolutamente necesario.
- Escribe **interfaces y tipos reutilizables** para mayor consistencia.
- Documenta el código usando _JSDoc_ o comentarios claros.

**Patrones recomendados:**

- **Programación modular**: dividir el código en módulos y componentes reutilizables.
- Uso de **interfaces** para definir contratos entre módulos.
- **Inyección de dependencias** en proyectos grandes.
- Aplicar **principios SOLID** para mejorar la arquitectura.

---

## Resumen rápido

> Síntesis rápida de lo aprendido sobre TypeScript.

- **Fortalezas principales:**

  - Tipado estático que reduce errores.
  - Excelente integración con editores como VSCode.
  - Compatible con librerías y frameworks populares.
  - Escalable para proyectos grandes y equipos.

- **Debilidades principales:**

  - Requiere un proceso de compilación.
  - Curva de aprendizaje inicial.
  - Puede ser excesivo para proyectos pequeños.

- **Cuándo usarlo:**

  - Aplicaciones web o backend a gran escala.
  - Proyectos con múltiples desarrolladores.
  - Librerías y SDKs que otros usarán.

- **Cuándo evitarlo:**
  - Prototipos rápidos o pruebas pequeñas.
  - Scripts sencillos donde el tipado no aporta valor.

---

# Temas {#temas#}

- [inicio](#typescript)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Antes de comenzar a trabajar con TypeScript, es importante comprender algunos conceptos clave que te ayudarán a sacarle el máximo provecho al lenguaje.

## 1. JavaScript

TypeScript es un **superset de JavaScript**, por lo que debes conocer:

- **Tipos primitivos**: `string`, `number`, `boolean`, `null`, `undefined`.
- **Funciones y parámetros**.
- **Objetos y arreglos**.
- **Clases y herencia**.
- **Módulos** (`import` y `export`).

> ⚠️ _Sin una base sólida de JavaScript, aprender TypeScript será más complicado._

## 2. Tipado Estático

El **tipado estático** es la base de TypeScript.  
Permite definir y **validar el tipo de datos** en tiempo de desarrollo.

Ejemplo:

```typescript
let edad: number = 25;
edad = "veinticinco"; // ❌ Error: no se puede asignar string a number
```

**Beneficios:**

- Detectar errores antes de ejecutar el programa.
- Mejor autocompletado y documentación.
- Código más legible y seguro.

## 3. Interfaces y Tipos

Permiten **definir la forma de objetos** y estructurar mejor el código.

Ejemplo con `interface`:

```typescript
interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

const user: Usuario = {
  id: 1,
  nombre: "Fernando",
  activo: true,
};
```

## 4. Orientación a Objetos (POO)

TypeScript tiene soporte completo para POO:

- **Clases** (`class`)
- **Herencia** (`extends`)
- **Modificadores de acceso** (`public`, `private`, `protected`)
- **Abstract Classes** y **Interfaces**

Ejemplo:

```typescript
class Animal {
  constructor(public nombre: string) {}

  hacerSonido(): void {
    console.log(`${this.nombre} hace un sonido`);
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log(`${this.nombre} ladra`);
  }
}

const miPerro = new Perro("Firulais");
miPerro.hacerSonido();
```

## 5. Compilación y Transpilación

TypeScript **no se ejecuta directamente** en el navegador o Node.js.  
Debe **compilarse a JavaScript** mediante el comando:

```bash
tsc archivo.ts
```

Esto genera un archivo `.js` listo para ejecutarse.

**Archivos importantes:**

- `tsconfig.json`: archivo de configuración principal.
- `.ts` (código fuente en TypeScript).
- `.js` (código compilado en JavaScript).

## 6. Módulos y Namespaces

Para organizar el código en archivos separados y reutilizables:

```typescript
// archivo saludo.ts
export function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}

// archivo app.ts
import { saludar } from "./saludo";

console.log(saludar("Fernando"));
```

[🔼 temas](#temas)

---

# Herramientas recomendadas

Estas herramientas te ayudarán a trabajar de manera más eficiente y profesional con TypeScript.

## 1. Node.js + NPM

Permite ejecutar y gestionar proyectos de TypeScript.

- Descargar en: [https://nodejs.org](https://nodejs.org)
- Verificar instalación:
  ```bash
  node -v
  npm -v
  ```

## 2. TypeScript Compiler (tsc)

El compilador oficial de TypeScript.

Instalación global:

```bash
npm install -g typescript
```

Verificar versión:

```bash
tsc -v
```

Compilar un archivo:

```bash
tsc index.ts
```

Inicializar proyecto con `tsconfig.json`:

```bash
tsc --init
```

## 3. Visual Studio Code (VSCode)

El editor más popular para trabajar con TypeScript.

Extensiones recomendadas:

- **TypeScript Hero** → Mejora la organización de imports.
- **ESLint** → Mantiene un estilo de código consistente.
- **Prettier** → Formateo automático de código.
- **Error Lens** → Destaca errores directamente en el editor.

## 4. ts-node

Permite ejecutar archivos TypeScript directamente **sin compilar manualmente**.

Instalación:

```bash
npm install -g ts-node
```

Uso:

```bash
ts-node app.ts
```

## 5. ESLint + Prettier

Mantienen el código limpio y legible.

Instalación rápida:

```bash
npm install eslint prettier -D
```

Configura un archivo `.eslintrc.json` y `.prettierrc`.

## 6. Git + GitHub

Para control de versiones y colaboración.

Comandos básicos:

```bash
git init
git add .
git commit -m "Primer commit"
git push origin main
```

## 7. Frameworks y Librerías compatibles

- **React con TypeScript** → Interfaces y props tipadas.
- **Express con TypeScript** → Backend robusto y escalable.
- **NestJS** → Framework orientado a microservicios y POO.
- **TypeORM / Prisma** → Manejo tipado de bases de datos.

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código que se usan **frecuentemente** al trabajar con TypeScript.  
Ideales para copiar y pegar en proyectos.

## 1. Declaración de variables con tipos

```typescript
let nombre: string = "Fernando";
let edad: number = 30;
let activo: boolean = true;
```

## 2. Función con tipado en parámetros y retorno

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}
```

## 3. Interface básica para un objeto

```typescript
interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

const user: Usuario = {
  id: 1,
  nombre: "Fernando",
  activo: true,
};
```

## 4. Clase con constructor y método

```typescript
class Persona {
  constructor(public nombre: string, public edad: number) {}

  saludar(): void {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona = new Persona("Carlos", 28);
persona.saludar();
```

## 5. Uso de `enum`

```typescript
enum EstadoPedido {
  Pendiente,
  EnProceso,
  Entregado,
}

let estado: EstadoPedido = EstadoPedido.Pendiente;
```

## 6. Tipos genéricos

```typescript
function identidad<T>(valor: T): T {
  return valor;
}

console.log(identidad<string>("Hola"));
console.log(identidad<number>(123));
```

## 7. Promesa tipada

```typescript
function obtenerDatos(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos recibidos"), 1000);
  });
}
```

## 8. Import y export

```typescript
// archivo operaciones.ts
export function sumar(a: number, b: number): number {
  return a + b;
}

// archivo app.ts
import { sumar } from "./operaciones";
console.log(sumar(5, 3));
```

[🔼 temas](#temas)

---

# Comandos

Resumen de los **comandos y sintaxis principales** con ejemplos breves.

## 1. Inicializar proyecto TypeScript

Crea un archivo de configuración `tsconfig.json`:

```bash
tsc --init
```

## 2. Compilar un archivo TypeScript

Convierte `.ts` a `.js`:

```bash
tsc archivo.ts
```

## 3. Ejecutar código sin compilar (ts-node)

```bash
ts-node app.ts
```

## 4. Tipos básicos

```typescript
let texto: string = "Hola";
let numero: number = 100;
let esActivo: boolean = false;
```

## 5. Tipo `any` (evitar en lo posible)

```typescript
let variable: any = "Puede ser cualquier cosa";
variable = 42;
```

## 6. Union Types

Permite más de un tipo en una variable.

```typescript
let id: string | number;
id = "abc";
id = 123;
```

## 7. Tipado en funciones

```typescript
function multiplicar(a: number, b: number): number {
  return a * b;
}
```

## 8. Parámetros opcionales

```typescript
function saludar(nombre?: string) {
  console.log(`Hola ${nombre || "desconocido"}`);
}
```

## 9. Interfaces

```typescript
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const item: Producto = { id: 1, nombre: "Laptop", precio: 1500 };
```

## 10. Uso de `readonly` y `optional (?)`

```typescript
interface Config {
  readonly version: string;
  descripcion?: string;
}

const conf: Config = { version: "1.0.0" };
// conf.version = "2.0.0"; ❌ Error
```

## 11. Genéricos

```typescript
function identidad<T>(valor: T): T {
  return valor;
}
```

## 12. Modificadores de clase

```typescript
class Vehiculo {
  public marca: string;
  private motor: string;
  protected modelo: string;

  constructor(marca: string, motor: string, modelo: string) {
    this.marca = marca;
    this.motor = motor;
    this.modelo = modelo;
  }
}
```

## 13. Compilar y vigilar cambios en tiempo real

```bash
tsc --watch
```

## 14. Instalar dependencias en proyecto

```bash
npm install typescript -D
npm install ts-node -D
```

## 15. Ejecutar proyecto con nodemon y ts-node

```bash
npx nodemon --exec ts-node src/index.ts
```

[🔼 temas](#temas)

---

# Conceptos Claves

[🔼 temas](#temas)

# Seccion 03 •

## Conceptos Claves

Genera 15 preguntas de entrevista técnica sobre TypeScript.

- Incluye temas básicos, intermedios y avanzados.
- Mezcla teoría y práctica.
- Cubre sintaxis, estructuras de datos, buenas prácticas y casos reales.
- Redacta las preguntas de forma clara, sin respuestas.

### 🟢 Nivel Básico

1. ¿Qué es TypeScript y en qué se diferencia de JavaScript?
2. Menciona los tipos primitivos en TypeScript y da ejemplos de cada uno.
3. ¿Para qué sirven los interfaces en TypeScript? ¿Cómo se diferencian de los type aliases?
4. ¿Qué son union types y intersection types? Da ejemplos prácticos de cuándo usarías cada uno.
5. ¿Cómo se tipa una función que recibe un objeto como parámetro y retorna un valor? Da un ejemplo.

### 🟡 Nivel Intermedio

6. ¿Qué son los generics? Escribe una función genérica simple que reciba un arreglo de elementos de tipo T y retorne el primero que coincida con un predicado.
7. ¿Qué son los utility types que ofrece TypeScript (por ejemplo Partial, Required, Pick, Omit, Record)? Escoge uno y describe un caso real donde lo usarías.
8. ¿Qué significa tener noImplicitAny habilitado en el archivo de configuración tsconfig.json? ¿Cómo afecta al código?
9. ¿Qué son los type guards y cómo se pueden implementar? Da un ejemplo práctico de función que use type guard para distinguir entre dos posibles tipos.
10. Explícame cómo funcionan los tuples en TypeScript, sus diferencias respecto a un arreglo normal, y cuándo los usarías.

### 🔴 Nivel Avanzado

11. ¿Qué son los decorators en TypeScript? Describe al menos dos tipos de decoradores (por ejemplo de clase, método, propiedad) y un caso de uso real.
12. Explora el concepto de conditional types (tipos condicionales). Da un ejemplo de tipo condicional complejo, y explica qué problemas ayuda a resolver.
13. ¿Qué es never como tipo de retorno y en qué casos se debería usar? Da un ejemplo de función real donde never sea apropiado.
14. Describe cómo manejarías migrar un proyecto grande de JavaScript puro a TypeScript. ¿Qué estrategia seguirías para minimizar riesgos? ¿Qué configuraciones del compilador considerarías estrictas?
15. Imagina que tienes una función asíncrona que devuelve datos de una API con distintos posibles esquemas dependiendo de un campo “type”. ¿Cómo garantizarías con TypeScript que el consumidor de esa función maneje todos los casos correctamente, evitando errores en tiempo de ejecución?

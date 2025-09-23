---
layout: layout-post.njk
title: React
img: /img/portada/react.avif
description: Librería para interfaces de usuario.
tags: ["blog", "frameworks"]
date: "2023-10-01"
---

# {{title}}

![img]({{img}})

React es una de las bibliotecas más populares para construir interfaces de usuario dinámicas y reactivas. Fue desarrollada por **Facebook (Meta)** y actualmente es mantenida por la comunidad y la empresa. Su principal objetivo es **facilitar la creación de interfaces escalables, reutilizables y fáciles de mantener**.

---

## 1. ¿Qué es {{title}}?

React es una **biblioteca de JavaScript** enfocada exclusivamente en la **capa de la vista (UI)** de una aplicación.  
A diferencia de frameworks completos como Angular o Vue, React **no impone una estructura estricta**, permitiendo mayor flexibilidad para integrar librerías externas según las necesidades del proyecto.

#### Diferencias clave frente a otros:

- **Enfocado solo en la UI**: No incluye herramientas integradas para manejo de rutas o estado global (aunque existen librerías externas como React Router o Redux).
- **Componentes reutilizables**: Basado en la construcción de bloques independientes.
- **Virtual DOM**: Optimiza el rendimiento actualizando solo lo necesario en la interfaz.
- **Gran comunidad y ecosistema**: Extensa cantidad de librerías y recursos disponibles.

---

### 2. ¿Para qué se usa?

React se utiliza para **crear interfaces interactivas y dinámicas** en aplicaciones web y móviles.

#### Contextos ideales:

- Aplicaciones web con **interacciones complejas**.
- **Dashboards** o paneles administrativos con datos en tiempo real.
- **Single Page Applications (SPA)** donde se requiere navegación fluida sin recargar la página.
- Aplicaciones móviles usando **React Native**.

---

### 3. ¿Qué puedo construir con {{title}}?

Con React puedes desarrollar prácticamente cualquier tipo de aplicación visual:

- **Sitios web dinámicos**.
- **Plataformas de comercio electrónico**.
- **Aplicaciones móviles** (con React Native).
- **Sistemas internos empresariales**.
- **Landing pages interactivas**.
- **Componentes UI personalizados** que se pueden integrar en otros proyectos.

---

### 4. ¿Cuándo es más conveniente usarlo?

#### React es recomendable cuando:

- Tu proyecto **requiere una interfaz dinámica y reactiva**.
- Necesitas **escalar y mantener** el código a largo plazo.
- Buscas **modularidad y reutilización de componentes**.
- Quieres aprovechar **herramientas del ecosistema**, como:
  - Next.js (SSR y SSG).
  - React Router (navegación).
  - Redux, Zustand, Recoil (estado global).

> ⚠️ _Si tu proyecto es muy simple, como una página estática con HTML y CSS, puede que React sea excesivo y un framework más ligero sea suficiente._

---

## Buenas prácticas recomendadas

#### Para mantener un código limpio y escalable en React, se recomienda:

- **Componentes pequeños y reutilizables**.
- Nombrar archivos y carpetas con **convenciones claras** (ej. PascalCase para componentes).
- **Separar la lógica de negocio de la interfaz**.
- Usar **Hooks** (`useState`, `useEffect`, `useContext`, etc.) en lugar de clases.
- Gestionar el estado global solo cuando sea necesario.
- Mantener una **estructura de carpetas ordenada**:

```
src/
├── components/
├── pages/
├── hooks/
├── context/
├── utils/
└── App.jsx
```

- Implementar **testing** (ej. Jest, React Testing Library).
- Documentar los componentes y funciones clave.

---

## Resumen rápido

#### Fortalezas principales:

- Virtual DOM para alto rendimiento.
- Ecosistema robusto y en constante evolución.
- Gran comunidad y documentación.
- Flexibilidad para integrarse con otras librerías.

#### Debilidades principales:

- Curva de aprendizaje inicial moderada.
- No incluye herramientas integradas para todo (estado global, rutas, etc.).
- Configuración inicial más compleja que frameworks todo-en-uno.

#### Cuándo usarlo:

- Aplicaciones interactivas y dinámicas.
- Proyectos que requieren escalabilidad.
- Sistemas con componentes reutilizables.

#### Cuándo evitarlo:

- Páginas estáticas simples.
- Proyectos con recursos limitados donde la complejidad de React no es necesaria.
- Cuando se busca una solución "todo en uno" sin depender de librerías externas.

---

# Temas {#temas#}

- [inicio](#node-js)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Antes de trabajar con React, es fundamental comprender algunos conceptos que forman la base de su funcionamiento y del desarrollo moderno en JavaScript.

### JavaScript ES6

Nuevas características como `let`, `const`, funciones flecha, `destructuring` y `spread/rest operators`.

### HTML5 y CSS3

Estructura y estilos básicos para la interfaz de usuario.

### JSX

Sintaxis similar a HTML usada dentro de React para definir componentes.

### DOM y Virtual DOM

El DOM representa la estructura HTML, mientras que el Virtual DOM optimiza actualizaciones en React.

### Componentes

Bloques reutilizables que representan partes de la interfaz.

### Props

Datos que se pasan a los componentes como parámetros.

### State

Estado interno de un componente que puede cambiar con el tiempo.

### Hooks

Funciones especiales (`useState`, `useEffect`, etc.) para manejar estado y ciclos de vida.

### Context API

Mecanismo para compartir datos entre componentes sin "prop drilling".

### Single Page Application (SPA

Aplicaciones que cargan una sola página y actualizan dinámicamente la UI sin recargar.

### Node.js

Entorno de ejecución necesario para correr React y gestionar dependencias.

### npm/yarn/pnpm

Gestores de paquetes para instalar librerías y dependencias.

### Babel

Compilador que transforma JSX y código moderno a una versión compatible con navegadores.

### Webpack / Vite

Empaquetadores y servidores de desarrollo para optimizar el proyecto.

### REST API / GraphQL

Métodos para consumir datos externos dentro de una aplicación React.

> 💡 **Consejo:** Tener bases sólidas en **JavaScript moderno** es esencial antes de aprender React.

[🔼 temas](#temas)

---

# Herramientas recomendadas

React por sí solo no incluye todo lo necesario para un proyecto completo. Estas herramientas complementan su desarrollo y ayudan a cubrir necesidades como estado global, enrutamiento, pruebas y optimización.

### **Entorno y gestor de paquetes**

- **Herramientas:** Node.js + npm/yarn/pnpm
- **Uso Principal:** Ejecutar React y manejar dependencias. |

### **Empaquetador / Dev Server**

- **Herramientas:** Vite / Webpack / Parcel
- **Uso Principal:** Optimizar y servir la aplicación durante el desarrollo y producción. |

### **Enrutamiento**

- **Herramientas:** React Router
- **Uso Principal:** Navegación y rutas dentro de la aplicación. |

### **Estado global**

- **Herramientas:** Redux / Zustand / Recoil / Jotai
- **Uso Principal:** Manejar estados compartidos entre múltiples componentes. |

### **Estilos**

- **Herramientas:** Tailwind CSS / Styled Components / Sass
- **Uso Principal:** Estilizar la aplicación de manera escalable. |

### **Testing**

- **Herramientas:** Jest / React Testing Library
- **Uso Principal:** Probar componentes y lógica de la aplicación. |

### **Consumo de APIs**

- **Herramientas:** Axios / Fetch API
- **Uso Principal:** Conectar con servicios externos (REST o GraphQL). |

### **Despliegue**

- **Herramientas:** Vercel / Netlify / Render / GitHub Pages
- **Uso Principal:** Subir la aplicación a producción de forma rápida y sencilla. |

### **Herramientas de desarrollo**

- **Herramientas:** React DevTools
- **Uso Principal:** Depurar componentes y estado desde el navegador. |

### **Documentación**

- **Herramientas:** Storybook / Docz
- **Uso Principal:** Crear y mantener documentación visual de componentes. |

---

[🔼 temas](#temas)

---

# Flujo básico de un proyecto React

### 1. Inicializar proyecto:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

### 2. Estructura recomendada:

```bash
src/
├── components/    # Componentes reutilizables
├── pages/         # Vistas o páginas
├── hooks/         # Custom Hooks
├── context/       # Context API y estados globales
├── utils/         # Funciones auxiliares
├── assets/        # Imágenes y recursos estáticos
└── App.jsx        # Punto principal de la aplicación

```

### 3. Componente básico:

```bash
function Saludo({ nombre }) {
  return <h1>Hola, {nombre} 👋</h1>;
}

export default Saludo;
```

### 4. Uso en la app:

```bash
import Saludo from './components/Saludo';

function App() {
  return (
    <div>
      <Saludo nombre="Fernando" />
    </div>
  );
}

export default App;
```

[🔼 temas](#temas)

---

# Snippets rápidos

Estos fragmentos son patrones comunes que usarás frecuentemente en React.

---

### 1. Componente funcional básico

```jsx
function Saludo() {
  return <h1>¡Hola React! 👋</h1>;
}

export default Saludo;
```

---

### 2. Componente con Props

```jsx
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}

export default Saludo;

// Uso:
<Saludo nombre="Fernando" />;
```

---

### 3. Hook `useState` - Manejo de estado

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}
```

---

### 4. Hook `useEffect` - Ciclo de vida

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  return <h1>Hola Mundo</h1>;
}
```

---

### 5. Evento en JSX

```jsx
function Boton() {
  const handleClick = () => alert("¡Clic!");

  return <button onClick={handleClick}>Presióname</button>;
}
```

---

### 6. Listado con `.map()`

```jsx
const frutas = ["🍎", "🍌", "🍊"];

function ListaFrutas() {
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}
```

---

### 7. Renderizado condicional

```jsx
function Mensaje({ logueado }) {
  return <div>{logueado ? <p>Bienvenido 🎉</p> : <p>Inicia sesión 🔑</p>}</div>;
}
```

---

### 8. Uso básico de Context API

```jsx
import { createContext, useContext } from "react";

const TemaContext = createContext("light");

function Boton() {
  const tema = useContext(TemaContext);
  return <button>{tema === "light" ? "☀️ Claro" : "🌙 Oscuro"}</button>;
}

function App() {
  return (
    <TemaContext.Provider value="dark">
      <Boton />
    </TemaContext.Provider>
  );
}
```

---

### 9. Fetch de datos con `useEffect`

```jsx
import { useState, useEffect } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <ul>
      {usuarios.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### 10. React Router básico

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Página de inicio</h1>} />
        <Route path="/about" element={<h1>Acerca de</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

[🔼 temas](#temas)

---

# Comandos

## Referencia rápida de comandos

```bash
# Crear proyecto con Vite
npm create vite@latest my-app

# Instalar dependencias
npm install

# Ejecutar proyecto en modo desarrollo
npm run dev

# Generar versión de producción
npm run build

# Instalar React Router
npm install react-router-dom

# Instalar Redux Toolkit
npm install @reduxjs/toolkit react-redux

# Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 🔗 Resumen visual

- **React:** Construcción de interfaces reactivas.
- **Vite:** Desarrollo rápido y empaquetado.
- **React Router:** Navegación y rutas.
- **Redux/Zustand:** Manejo de estado global.
- **Tailwind CSS:** Estilización eficiente.
- **Jest + RTL:** Pruebas unitarias y de integración.
- **Vercel/Netlify:** Despliegue en la nube.

> 🚀 Con estas herramientas y conceptos, podrás crear aplicaciones React escalables, rápidas y listas para producción.

[🔼 temas](#temas)

---

## ⌨️ Sintaxis más usados

### **Inicialización y ejecución**

```bash
# Crear nuevo proyecto con Vite
npm create vite@latest my-app

# Entrar al proyecto
cd my-app

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Crear versión de producción
npm run build
```

---

### **Instalación de librerías comunes**

```bash
# React Router (rutas)
npm install react-router-dom

# Redux Toolkit (estado global)
npm install @reduxjs/toolkit react-redux

# Tailwind CSS (estilos)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Axios (consumo de APIs)
npm install axios
```

---

### **JSX básico**

```jsx
// Variables dentro de JSX
<h1>Hola {nombre} 👋</h1>;

// Atributos dinámicos
<img src={imagen} alt="Logo" />;

// Estilos inline
<p style={ color: "red", fontSize: "18px" }>Texto en rojo</p>;
```

---

### **Comandos Git para React**

```bash
# Inicializar repositorio
git init

# Agregar archivos al staging area
git add .

# Confirmar cambios
git commit -m "feat: inicialización proyecto React"

# Subir a GitHub
git remote add origin <URL_REPOSITORIO>
git push -u origin main
```

---

# Conceptos Claves

## 🟢 Básico

### 1. Diferencia entre un componente de clase y un componente funcional

#### Componente de clase:

- Utiliza la sintaxis de clases de JavaScript.
- Requiere el método `render()` para devolver JSX.
- Antes de Hooks, eran necesarios para manejar _state_ y ciclo de vida.

```jsx
class MiComponente extends React.Component {
  render() {
    return <h1>Hola desde clase</h1>;
  }
}
```

#### Componente funcional:

- Es una función que retorna JSX.
- Con los Hooks puede manejar estado y efectos secundarios.
- Más simple y recomendado hoy en día.

```jsx
function MiComponente() {
  return <h1>Hola desde funcional</h1>;
}
```

---

### 2. Virtual DOM y cómo mejora el rendimiento

El **Virtual DOM** es una copia ligera en memoria del DOM real.  
Cuando ocurre un cambio en la UI:

1. React actualiza el Virtual DOM.
2. Compara el Virtual DOM actual con el anterior (**diffing**).
3. Solo actualiza en el DOM real los elementos que cambiaron.

**Beneficio:** mejora el rendimiento porque evita renderizar todo el árbol de componentes.

---

### 3. Props en React: propósito e inmutabilidad

- Los **props** son datos que se **pasan de un componente padre a un hijo**.
- Se usan para:
  - Configurar un componente.
  - Personalizar su comportamiento.
  - Reutilizar componentes.

⚠️ **Inmutabilidad:**

- Un componente **no debe modificar sus props** directamente.
- Esto mantiene un flujo de datos **unidireccional**.

```jsx
function Saludo({ nombre }) {
  return <h1>Hola, {nombre}</h1>;
}
```

---

### 4. Función del método render() en un componente de clase

El método `render()`:

- Genera el **JSX que se mostrará en pantalla**.
- Solo puede devolver un elemento raíz o un **Fragment**.

```jsx
class App extends React.Component {
  render() {
    return <h1>Hola Mundo</h1>;
  }
}
```

---

### 5. State en React: cuándo y cómo usarlo

#### El state:

- Es un objeto interno que guarda datos dinámicos.
- Permite que la UI **se actualice automáticamente** cuando cambia.

**Uso típico:**

- manejar contadores, formularios, filtros, etc.

```jsx
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 🟡 Intermedio

### 6. Ciclo de vida de un componente

En **componentes de clase**, hay tres fases principales:

- **Montaje (Mounting):** se crea el componente y se agrega al DOM.
  - `componentDidMount()`
- **Actualización (Updating):** ocurre cuando cambian `props` o `state`.
  - `componentDidUpdate()`
- **Desmontaje (Unmounting):** se elimina el componente del DOM.
  - `componentWillUnmount()`

---

### 7. Hooks y ejemplos de uso

Los **Hooks** permiten usar características avanzadas en componentes funcionales.

- **useState** → Manejo de estado local.
  ```jsx
  const [contador, setContador] = useState(0);
  ```
- **useEffect** → Ejecutar efectos secundarios como llamadas a APIs.
  ```jsx
  useEffect(() => console.log("Montado"), []);
  ```
- **useContext** → Acceder a datos globales sin _props drilling_.
  ```jsx
  const valor = useContext(MiContexto);
  ```

---

### 8. Cómo funciona useEffect y su arreglo de dependencias

- `useEffect` ejecuta lógica **después de que el componente renderiza**.
- El **arreglo de dependencias** determina cuándo se ejecuta:
  - `[]` → Solo al montar.
  - `[variable]` → Cuando cambia esa variable.
  - Sin arreglo → Cada render.

⚠️ _Problemas si está mal definido:_

- Efectos infinitos.
- Bajo rendimiento.
- Fugas de memoria.

---

### 9. Context API y uso en escenarios reales

El **Context API** permite **compartir datos globales** sin pasar props manualmente por cada nivel.

#### Escenarios típicos:

- Tema oscuro/claro.
- Usuario autenticado.
- Configuración global (ej. idioma).

```jsx
const TemaContext = React.createContext("light");

function App() {
  return (
    <TemaContext.Provider value="dark">
      <MiComponente />
    </TemaContext.Provider>
  );
}
```

---

### 10. useReducer vs useState

- **useReducer:** ideal para **estados complejos** con múltiples transiciones.
- **useState:** adecuado para estados simples.

Ejemplo de `useReducer`:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

## 🔴 Avanzado

### 11. Key en listas y su importancia

- **Key**: identificador único que React usa para diferenciar elementos en listas.
- Sin `key`:
  - React puede renderizar incorrectamente elementos.
  - Problemas con el estado interno de componentes.

```jsx
{
  items.map((item) => <li key={item.id}>{item.nombre}</li>);
}
```

---

### 12. Error Boundaries

- Son componentes que **atrapan errores** en sus componentes hijos sin romper toda la app.
- Se implementan con clases usando:
  - `componentDidCatch()`
  - `getDerivedStateFromError()`

**Útil para:**

- Formularios críticos.
- Secciones importantes como carritos de compras.

---

### 13. Higher-Order Components (HOCs)

- Un **HOC** es una función que **recibe un componente y devuelve otro mejorado**.

#### Ventajas:

- Reutilización de lógica.
- Separación clara de responsabilidades.

#### Desventajas:

- Código más difícil de leer.
- _Wrapper hell_ por demasiadas capas.

Actualmente, los Hooks suelen reemplazarlos por su simplicidad.

---

### 14. Fragments en React

- Permiten devolver múltiples elementos sin añadir un nodo extra al DOM.

```jsx
return (
  <>
    <h1>Título</h1>
    <p>Descripción</p>
  </>
);
```

---

### 15. Estrategias de optimización de rendimiento

1. **React.memo:**  
   Memoriza componentes para evitar renderizados innecesarios.

2. **useCallback y useMemo:**

   - `useCallback` → Memoriza funciones.
   - `useMemo` → Memoriza cálculos costosos.

3. **Code splitting:**  
   Carga diferida de componentes con `React.lazy`.

[🔼 temas](#temas)

<!-- # Seccion 03 •

## Conceptos Claves

Genera 15 preguntas de entrevista técnica sobre React.

- Incluye temas básicos, intermedios y avanzados.
- Mezcla teoría y práctica.
- Cubre sintaxis, estructuras de datos, buenas prácticas y casos reales.
- Redacta las preguntas de forma clara, sin respuestas.

### 🟢 Básico

1. ¿Cuál es la diferencia entre un componente de clase y un componente funcional en React?
2. Explica el concepto de Virtual DOM y cómo mejora el rendimiento de una aplicación React.
3. Qué son los props en React? ¿Cuál es su propósito y por qué se consideran inmutables?
4. ¿Cuál es la función del método render() en un componente de clase y qué debe devolver?
5. Describe qué es el state en React. ¿Cuándo y cómo lo usarías en un componente?

### 🟡 Intermedio

6. Explica el ciclo de vida de un componente de React. Nombra y describe al menos tres de los métodos principales del ciclo de vida.
7. ¿Qué son los Hooks en React? Menciona al menos tres Hooks y describe un caso práctico de uso para cada uno.
8. Explica cómo funciona useEffect y qué papel juega su arreglo de dependencias. ¿Qué problemas puede ocasionar no definir bien ese arreglo?
9. ¿Qué es el Context API? Describe un escenario real donde usarías Context en lugar de pasar props manualmente por muchos componentes.
10. ¿Qué es useReducer y en qué casos lo preferirías sobre useState?

### 🔴 Avanzado

11. ¿Qué es la clave (key) en las listas de React? Explica su importancia y qué problemas puede causar su omisión.
12. ¿Qué son los error boundaries en React? ¿Cómo se implementan y cuándo conviene usarlos?
13. ¿Qué son los Higher-Order Components (HOCs) y qué ventajas/desventajas tienen frente a Hooks o componentes funcionales?
14. ¿Qué son los fragmentos (Fragments) de React y cuándo se deben utilizar?
15. ¿Cómo optimizarías el rendimiento de una aplicación React que tiene un componente que se vuelve a renderizar con frecuencia? Nombra y explica al menos dos estrategias. -->

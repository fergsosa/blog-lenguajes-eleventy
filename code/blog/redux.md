---
layout: layout-post.njk
title: Redux
# img: /img/portada/git.avif
# img: https://placehold.co/784x396
description: Ideas principales de Redux
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![{{title}}](https://placehold.co/784x396)

## Inicio

## ¿Qué es {{title}}?

Redux es una **biblioteca de gestión de estado predecible** para aplicaciones JavaScript.  
Se basa en tres principios clave:

- **Un único store**:\
  toda la información de la aplicación se centraliza en un único objeto de estado.
- **El estado es de solo lectura**:\
  las modificaciones solo se realizan mediante acciones.
- **Los cambios se describen con funciones puras (reducers)**:\
  la lógica de actualización se concentra en funciones deterministas.

A diferencia de otros sistemas de manejo de estado como **Context API** o librerías reactivas, Redux se centra en la **previsibilidad, trazabilidad y escalabilidad** del flujo de datos.

---

### 1. ¿Para qué se usa?

#### Redux se usa para:

- **Gestionar estados globales**\
  compartidos por múltiples componentes.
- **Sincronizar datos**\
  en aplicaciones grandes y complejas.
- **Depurar fácilmente**\
  gracias a su flujo predecible de datos.
- **Mantener historial de estados**\
  útil para funciones como deshacer/rehacer.

#### Contextos ideales:

- Aplicaciones con muchos componentes que necesitan acceder al mismo estado.
- Casos donde el estado cambia con frecuencia y debe ser **consistente y predecible**.

---

### 2. ¿Qué puedo construir con {{title}}?

Con Redux se pueden construir:

- **Aplicaciones web de gran escala**\
  con React, Angular o Vue.
- **Dashboards complejos**\
  donde múltiples vistas dependen de la misma fuente de datos.
- **Aplicaciones móviles**\
  con React Native que requieran sincronización de estado.
- **Sistemas en tiempo real**\
  como chats o paneles colaborativos, siempre que se combine con middlewares adecuados.

---

### 3. ¿Cuándo es más conveniente usarlo?

Es recomendable usar Redux cuando:

- El estado global es **grande, complejo o compartido**.
- Se necesita **control detallado de cambios** y trazabilidad.
- Hay múltiples interacciones simultáneas con el estado (ej. filtros, formularios, listas dinámicas).
- Se requiere trabajar con **middlewares** (ejemplo: `redux-thunk`, `redux-saga`) para manejar lógica asíncrona.

Frente a otras opciones más simples como **useState** o **Context API**, Redux aporta **estructura, escalabilidad y herramientas avanzadas de depuración**.

---

## Buenas prácticas recomendadas

- **Dividir reducers**\
  en funciones pequeñas y específicas (_principio de separación de responsabilidades_).
- **Normalizar el estado**\
  para evitar duplicados y estructuras anidadas complicadas.
- **Usar Redux Toolkit (RTK):**\
  simplifica la sintaxis y evita código repetitivo.
- **Evitar lógica compleja en reducers:**\
  mantenerlos como funciones puras y simples.
- **Aplicar middlewares**\
  para manejar efectos secundarios (async, logging, etc.).
- **Seguir una convención clara de nombres**\
  en acciones y reducers.
- **Probar reducers y acciones**\
  para asegurar que sean predecibles y libres de efectos colaterales.

## Resumen rápido

#### ✅ Fortalezas principales:

- Predecible y centralizado.
- Excelente depuración (Redux DevTools).
- Escalable para aplicaciones grandes.
- Integración con middlewares.

#### ⚠️ Debilidades principales:

- Curva de aprendizaje inicial.
- Verbosidad (aunque RTK la reduce).
- Puede ser excesivo para apps pequeñas.

#### 🛠️ Cuándo usarlo:

- Aplicaciones complejas con muchos estados compartidos.
- Cuando se requiere trazabilidad y depuración avanzada.
- Proyectos de largo plazo que necesitan escalabilidad.

#### 🚫 Cuándo evitarlo:

- Aplicaciones pequeñas o con estados locales simples.
- Proyectos rápidos donde Context API o useState son suficientes.
- Casos en los que el manejo del estado no es un problema central.

---

# Temas {#temas#}

- [inicio](#que-es-redux)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de trabajar con Redux es importante comprender algunos conceptos y fundamentos que lo acompañan:

### Estado (State)

Es el objeto que representa los datos de la aplicación en un momento dado. Redux centraliza este estado en un único store.

### Acciones (Actions)

Son objetos simples que describen un evento o intención de cambio en el estado.

> **Ejemplo:** `{ type: "INCREMENT" }`

### Reducers

Son funciones puras que reciben el estado actual y una acción, y devuelven un nuevo estado.

> **Ejemplo:** `(state, action) => newState`

### Store

Es el contenedor central del estado de la aplicación. Se encarga de almacenar el estado y de notificar a los componentes cuando este cambia.

### Dispatch

Método que permite enviar acciones al store para que sean procesadas por los reducers.

### Suscripción (Subscribe)

Permite a los componentes escuchar los cambios en el estado y actualizarse en consecuencia.

### Inmutabilidad

El estado nunca se modifica directamente; siempre se crea un nuevo estado.

### Middleware

Funciones que interceptan las acciones antes de llegar al reducer, útiles para manejar lógica asíncrona o efectos secundarios.

> **Ejemplo:** `redux-thunk`, `redux-saga`.

### Redux Toolkit (RTK)

Una capa oficial de abstracción sobre Redux que simplifica la creación de stores, reducers y acciones con menos código repetitivo.

---

[🔼 temas](#temas)

---

# Herramientas recomendadas

Estas son las herramientas más utilizadas y recomendadas para trabajar eficientemente con Redux:

### Redux Toolkit (RTK)

- Simplifica la configuración del store.
- Incluye utilidades como `createSlice`, `createAsyncThunk` y `configureStore`.
- Evita la repetición de código.

### Redux DevTools

- Extensión para navegadores que permite inspeccionar el estado, el historial de acciones y depurar de forma visual.
- Muy útil para **time-travel debugging** (viajar en el tiempo entre estados).

### React-Redux

- Librería oficial que conecta Redux con React.
- Proporciona hooks como `useSelector` y `useDispatch` para interactuar con el store de manera sencilla.

### Redux Thunk

- Middleware que permite manejar acciones asíncronas, como llamadas a APIs.
- Ejemplo típico: despachar una acción al iniciar una petición y otra al recibir la respuesta.

### Redux Saga

- Middleware avanzado basado en funciones generadoras.
- Ideal para manejar flujos asíncronos complejos.

### Reselect

- Biblioteca para crear _selectores memoizados_.
- Optimiza el acceso a porciones del estado evitando cálculos innecesarios.

### Immer (incluido en RTK)

- Permite trabajar con estado inmutable de forma más sencilla.
- Internamente aplica inmutabilidad, aunque el código parezca mutar el estado.

Ejemplo de configuración básica con **Redux Toolkit** y **React-Redux**:

```javascript
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

// Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Store
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// Component Example
function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Valor: {value}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        +
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>
    </div>
  );
}

// App Root
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos comunes al trabajar con Redux y React:

### Crear slice con Redux Toolkit

```javascript
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Exportar acciones
export const { increment, decrement } = counterSlice.actions;

// Exportar reducer
export default counterSlice.reducer;
```

### Configurar store

```javascript
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

### Usar en componente con React-Redux

```javascript
const value = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

<button onClick={() => dispatch(increment())}>+</button>
<button onClick={() => dispatch(decrement())}>-</button>
```

---

[🔼 temas](#temas)

---

# Comandos

### Crear store

```javascript
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ reducer: rootReducer });
```

### Definir slice

```javascript
import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});
```

### Obtener estado

```javascript
const todos = useSelector((state) => state.todos);
```

### Despachar acción

```javascript
dispatch(addTodo("Aprender Redux"));
```

### Suscribirse a cambios del store (JS puro)

```javascript
store.subscribe(() => console.log(store.getState()));
```

### Acciones asíncronas con Thunk

```javascript
export const fetchData = () => async (dispatch) => {
  const res = await fetch("/api/data");
  const data = await res.json();
  dispatch(setData(data));
};
```

### Combinación de reducers

```javascript
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
```

### Acceder al estado global

```javascript
console.log(store.getState());
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es Redux y cuáles son sus principios fundamentales?

Redux es una biblioteca para manejar el estado de aplicaciones JavaScript de manera predecible. Sus principios son:

- Un **único store** centralizado.
- El **estado es inmutable** y solo se modifica mediante acciones.
- Los cambios se realizan con **reducers**, funciones puras que determinan el nuevo estado.

### 2. ¿Cuál es la diferencia entre estado local y estado global?

El estado local se gestiona dentro de un componente (ej. `useState` en React) y no es compartido. El estado global, manejado con Redux, es accesible por cualquier componente conectado al store.

### 3. ¿Qué es una acción en Redux?

Una acción es un objeto JavaScript que describe un evento que quiere cambiar el estado. Siempre tiene una propiedad `type` y puede tener un `payload` con datos adicionales.

```javascript
{
  type: "INCREMENT";
}
```

### 4. ¿Qué es un reducer y cómo funciona?

Es una función pura que recibe el estado actual y una acción, y devuelve un nuevo estado. Nunca debe mutar directamente el estado.

```javascript
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
};
```

### 5. ¿Qué es el store en Redux?

Es el contenedor central del estado de la aplicación. Se crea usando `createStore` o `configureStore` (Redux Toolkit) y expone métodos como `dispatch`, `getState` y `subscribe`.

---

## 🟡 Intermedio

### 6. ¿Cómo se despacha una acción en Redux?

Se utiliza `dispatch` para enviar una acción al store, que luego será procesada por los reducers.

```javascript
dispatch({ type: "INCREMENT" });
```

### 7. ¿Qué es Redux Toolkit (RTK) y por qué se recomienda?

Es una capa oficial que simplifica Redux: reduce la verbosidad, maneja la inmutabilidad con Immer, y facilita la creación de slices, reducers y acciones.

### 8. ¿Qué es un middleware y para qué se usa en Redux?

Es una función que intercepta acciones antes de llegar al reducer. Se usa para lógica asíncrona, logging, o modificar acciones. Ejemplos: `redux-thunk`, `redux-saga`.

### 9. ¿Qué son selectores y por qué son útiles?

Funciones que extraen porciones del estado de forma encapsulada. Con librerías como Reselect se pueden memoizar para mejorar el rendimiento.

### 10. ¿Cómo manejarías un estado asíncrono (ej. petición a API) en Redux?

Usando middlewares como Thunk o Saga para despachar acciones antes y después de la petición.

```javascript
export const fetchData = () => async (dispatch) => {
  const res = await fetch("/api/data");
  const data = await res.json();
  dispatch(setData(data));
};
```

---

## 🔴 Avanzado

### 11. ¿Qué es la inmutabilidad en Redux y cómo se asegura?

Significa que nunca se modifica directamente el estado original. Se puede lograr usando spread operators, métodos que devuelven nuevos arrays/objetos, o Immer (incluido en RTK).

### 12. ¿Cómo combinar varios reducers en Redux?

Con `combineReducers`, se crean múltiples reducers especializados y se combinan en uno principal.

```javascript
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
```

### 13. ¿Qué es el time-travel debugging y cómo se aplica en Redux?

Funcionalidad que permite ir hacia adelante y atrás entre los estados anteriores usando Redux DevTools, útil para depuración y pruebas.

### 14. Menciona buenas prácticas para organizar un proyecto con Redux.

- Dividir reducers por dominios o features.
- Normalizar el estado para evitar datos duplicados.
- Mantener reducers puros.
- Usar Redux Toolkit para reducir boilerplate.
- Documentar y nombrar acciones claramente.

### 15. ¿Cuándo NO conviene usar Redux?

- Aplicaciones pequeñas o con poco estado compartido.
- Cuando `useState` o Context API son suficientes.
- Proyectos donde la complejidad de Redux agrega más carga que beneficio.

[🔼 temas](#temas)

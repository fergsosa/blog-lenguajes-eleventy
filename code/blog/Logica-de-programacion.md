---
layout: layout-post.njk
title: Logica de programación
img: /img/portada/logica-de-programacion.avif
description: Ideas principales de Logica de programación
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![img]({{img}})

La **lógica de programación** es la base sobre la cual se construye cualquier aplicación o sistema informático. No se trata de un lenguaje específico, sino de un conjunto de principios, estructuras y métodos que permiten a una persona **resolver problemas de manera ordenada y eficiente a través del código**.

## ¿Qué es {{title}}?

- La **lógica de programación** es la capacidad de **analizar, estructurar y secuenciar instrucciones** de manera coherente para que una computadora pueda ejecutarlas.
- A diferencia de un **lenguaje de programación** (como JavaScript, Python o C++), la lógica no depende de una sintaxis particular, sino de **cómo se organizan los pasos para resolver un problema**.
- En otras palabras: la lógica es el **qué** y el **cómo**, mientras que el lenguaje es el **medio**.

---

### 1. ¿Para qué se usa?

#### Se utiliza para:

- **Resolver problemas** de forma sistemática.
- **Diseñar algoritmos** que luego serán traducidos a código real.
- **Aprender a pensar como programador**, sin depender aún de un lenguaje.

#### Se aplica mejor en:

- La **formación inicial** de estudiantes de programación.
- El diseño previo a la implementación de software.
- La resolución de **problemas complejos** que requieren pasos claros y ordenados.

---

### 2. ¿Qué puedo construir con {{title}}?

- Algoritmos de todo tipo: búsqueda, ordenamiento, cálculos matemáticos.
- Simulaciones de procesos o flujos de trabajo.
- Soluciones a problemas cotidianos, como:
  - _¿Cómo encontrar el número mayor en una lista?_
  - _¿Cómo calcular el cambio de una compra?_
- Aunque no genera productos finales por sí sola, es la **base necesaria** para luego construir aplicaciones, videojuegos, páginas web y sistemas completos.

---

### 3. ¿Cuándo es más conveniente usarlo?

- Cuando estás **aprendiendo a programar** y aún no dominas un lenguaje.
- Cuando necesitas **estructurar un problema complejo** antes de escribir código real.
- Al trabajar en equipo, como paso previo para diseñar diagramas de flujo, pseudocódigo o documentación.
- Cuando buscas **maximizar la claridad** en la resolución de problemas.

---

## Buenas prácticas recomendadas

- **Dividir problemas grandes en partes pequeñas** (descomposición).
- Usar **estructuras de control claras**: condicionales, bucles y secuencias.
- **Nombrar adecuadamente** las variables y elementos del pseudocódigo.
- Aplicar el principio de **KISS (Keep It Simple, Stupid)**: mantener la solución lo más simple posible.
- Seguir el patrón **Entrada → Proceso → Salida** en la construcción de algoritmos.

```plaintext
Ejemplo (pseudocódigo):
Inicio
   Leer número1
   Leer número2
   suma = número1 + número2
   Escribir "La suma es:", suma
Fin
```

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Base fundamental para cualquier lenguaje de programación.
- Facilita la resolución de problemas de forma estructurada.
- Independencia de la sintaxis.

#### ⚠️ Debilidades principales:

- No produce aplicaciones finales por sí sola.
- Requiere práctica constante para internalizar los conceptos.

#### 🛠️ Cuándo usarlo:

- Al aprender a programar desde cero.
- En la planificación de algoritmos y estructuras de software.
- En la resolución de problemas matemáticos y lógicos.

#### 🚫 Cuándo evitarlo:

- Cuando ya se necesita implementar directamente en un lenguaje específico.
- Si se requiere desarrollar un sistema real y funcional, más allá de la teoría.

---

# Temas {#temas#}

- [inicio](#que-es-logica-de-programacion)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes o junto al estudio de un lenguaje, es importante dominar los siguientes fundamentos:

### Algoritmo:

Conjunto de pasos ordenados y finitos para resolver un problema.

### Pseudocódigo:

Representación textual y simplificada de un algoritmo, sin necesidad de un lenguaje formal.

### Diagramas de flujo:

Representación gráfica de un proceso usando símbolos estandarizados (inicio, proceso, decisión, etc.).

### Estructuras de control:

| Estructura de control             | descripción             |
| --------------------------------- | ----------------------- |
| **Secuencia**                     | pasos lineales.         |
| **Condicionales (if, else)**      | toma de decisiones.     |
| **Bucles (for, while, do-while)** | repetición de procesos. |

### Variables y constantes:

Espacios en memoria para almacenar valores temporales o fijos.

### Operadores:

|  operadores  | símbolos               |
| :----------: | ---------------------- |
| Aritméticos  | (+, -, \*, /, %)       |
| Relacionales | (>, <, ==, !=, >=, <=) |
|   Lógicos    | (AND, OR, NOT)         |

### Funciones/procedimientos:

Bloques de instrucciones que cumplen una tarea específica y reutilizable.

### Entrada/Proceso/Salida (E-P-S):

Patrón fundamental para diseñar programas.

### Depuración:

Técnica de identificar y corregir errores en un algoritmo o programa.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Aunque la lógica puede practicarse con papel y lápiz, existen herramientas que facilitan su aprendizaje y práctica:

### Editores de pseudocódigo y diagramas de flujo:

- [PSeInt](http://pseint.sourceforge.net/)\
  ideal para practicar algoritmos en pseudocódigo.
- [Flowgorithm](http://www.flowgorithm.org/)\
  para crear diagramas de flujo ejecutables.

### Lenguajes de iniciación (para poner en práctica la lógica):

- **Python**\
  sintaxis simple, perfecto para aprender lógica sin complicaciones.
- **JavaScript**\
  ideal para ver resultados en la web rápidamente.
- **C**\
  muy útil para aprender cómo funcionan estructuras a bajo nivel.

### Entornos de práctica online:

- [Replit](https://replit.com/)\
  ejecutar código en múltiples lenguajes sin instalar nada.
- [Jupyter Notebook](https://jupyter.org/)\
  perfecto para practicar con Python.
- [Codewars](https://www.codewars.com/) o [HackerRank](https://www.hackerrank.com/)\
  resolver retos de programación.

### Técnicas de apoyo:

- **Divide y vencerás**\
  dividir problemas grandes en pequeños.
- **Prueba de escritorio**\
  simular manualmente un algoritmo paso a paso.
- **Diagramas UML básicos**\
  representar estructuras y flujos de manera clara.

[🔼 temas](#temas)

---

# Snippets rápidos

### Entrada y salida

```plaintext
Leer nombre
Escribir "Hola", nombre
```

### Suma de dos números

```plaintext
Leer a
Leer b
resultado = a + b
Escribir "La suma es:", resultado
```

### Condicional simple

```plaintext
Si edad >= 18 Entonces
   Escribir "Eres mayor de edad"
Sino
   Escribir "Eres menor de edad"
FinSi
```

### Bucle contado (For)

```plaintext
Para i = 1 Hasta 5 Hacer
   Escribir "Iteración:", i
FinPara
```

### Bucle condicional (While)

```plaintext
Mientras numero != 0 Hacer
   Leer numero
   Escribir "Ingresaste:", numero
FinMientras
```

### Función básica

```plaintext
Funcion Sumar(x, y)
   devolver x + y
FinFuncion
```

[🔼 temas](#temas)

---

# Comandos

### Leer

recibe datos de entrada.

```plaintext
Leer nombre
```

### Escribir

muestra datos en pantalla.

```plaintext
Escribir "Hola, mundo"
```

### Asignación

guarda un valor en una variable.

```plaintext
x = 10
```

### Condicional (Si/Sino)

permite tomar decisiones.

```plaintext
Si x > 0 Entonces
   Escribir "Positivo"
Sino
   Escribir "Negativo o cero"
FinSi
```

### Bucle Para

ejecuta un bloque un número definido de veces.

```plaintext
Para i = 1 Hasta 10 Hacer
   Escribir i
FinPara
```

### Bucle Mientras

ejecuta un bloque mientras se cumpla la condición.

```plaintext
Mientras contador < 5 Hacer
   Escribir contador
   contador = contador + 1
FinMientras
```

### Funciones/Procedimientos

reutilizan bloques de lógica.

```plaintext
Procedimiento Saludar()
   Escribir "Hola!"
FinProcedimiento
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es un algoritmo?

Un algoritmo es un conjunto de pasos ordenados y finitos que permiten resolver un problema o realizar una tarea específica.

### 2. ¿Qué diferencia hay entre pseudocódigo y un lenguaje de programación?

El pseudocódigo es una forma informal y legible de expresar un algoritmo, sin reglas estrictas de sintaxis, mientras que un lenguaje de programación tiene una sintaxis formal que la computadora entiende.

### 3. ¿Qué son las estructuras de control?

Son instrucciones que permiten alterar el flujo normal de ejecución de un programa. Los principales tipos son: **secuencia**, **decisión (if/else)** y **repetición (for, while)**.

### 4. ¿Qué diferencia hay entre una variable y una constante?

Una **variable** almacena valores que pueden cambiar durante la ejecución, mientras que una **constante** mantiene el mismo valor durante todo el programa.

### 5. ¿Qué es un diagrama de flujo y para qué sirve?

Es una representación gráfica de un algoritmo, usando símbolos estandarizados para mostrar procesos, decisiones y flujos de información.

---

## 🟡 Intermedio

### 6. ¿Qué significa el patrón Entrada → Proceso → Salida (E-P-S)?

Es la forma más simple de estructurar un algoritmo: **Entrada** (datos recibidos), **Proceso** (operaciones realizadas con esos datos), y **Salida** (resultado final).

### 7. ¿Cuál es la diferencia entre un bucle `for` y un bucle `while`?

Un `for` se usa cuando se conoce el número exacto de repeticiones, mientras que un `while` se usa cuando no se sabe cuántas veces se repetirá y depende de una condición lógica.

### 8. ¿Qué son los operadores lógicos y cuál es su utilidad?

Son operadores que permiten evaluar expresiones booleanas: **AND (y)**, **OR (o)** y **NOT (no)**. Se usan en condiciones para tomar decisiones más complejas.

### 9. ¿Qué es un procedimiento y en qué se diferencia de una función?

Ambos son bloques de código reutilizables. La diferencia es que la **función devuelve un valor**, mientras que el **procedimiento solo ejecuta instrucciones** sin retornar nada.

### 10. ¿Qué es la recursividad en lógica de programación?

Es una técnica en la que una función se llama a sí misma para resolver un problema dividiéndolo en subproblemas más pequeños, hasta alcanzar un caso base.

---

## 🔴 Avanzado

### 11. ¿Cómo detectarías y corregirías un bucle infinito en un algoritmo?

Revisando que la condición de salida del bucle se cumpla correctamente. Para corregirlo, se debe asegurar que **las variables que afectan la condición se modifiquen dentro del bucle**.

### 12. ¿Qué importancia tiene la complejidad algorítmica en la lógica de programación?

La complejidad determina el **tiempo y memoria** que consume un algoritmo. Un algoritmo con mala eficiencia puede ser impráctico en problemas grandes.

### 13. ¿Cómo aplicarías la técnica “Divide y vencerás” en lógica de programación?

Dividiendo un problema grande en partes más pequeñas y fáciles de resolver, solucionando cada una por separado y luego combinando los resultados. Ejemplo: el algoritmo de ordenamiento **Merge Sort**.

### 14. ¿Cuál es la diferencia entre validación y verificación en la lógica de programación?

- **Verificación:**\
  comprobar si el programa cumple con los pasos diseñados.
- **Validación:**\
  comprobar si el programa resuelve correctamente el problema planteado.

### 15. Si un programa funciona pero es difícil de leer, ¿qué problemas puede causar a futuro?

Puede generar **dificultad en el mantenimiento**, mayor probabilidad de errores, duplicación de código y falta de colaboración en equipos. Por eso se recomienda escribir **código limpio y bien documentado**.

[🔼 temas](#temas)

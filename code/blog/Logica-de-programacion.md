---
layout: layout-post.njk
title: Lógica de programación
img: /img/portada/logica-de-programacion.avif
description: Base del razonamiento algorítmico estructurado.
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
- [Conceptos Fundamentales](#conceptos-fundamentales)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos Fundamentales

## Programación y Programador

**Programación** es el proceso de crear instrucciones que le dicen a una **computadora** cómo realizar una **tarea específica**. Estas instrucciones se escriben en un lenguaje que la computadora pueda entender, conocido como lenguaje de programación. La **programación** implica la resolución de problemas, el diseño de algoritmos y la traducción de esos algoritmos en un código que la máquina pueda ejecutar.

Ser un **programador** significa ser la persona que diseña, escribe, prueba y mantiene el **código** que permite que los **programas de computadora** funcionen. Los **programadores** no solo crean soluciones técnicas, sino que también aplican lógica y pensamiento crítico para resolver problemas de manera eficiente, traduciendo ideas abstractas en instrucciones precisas que una computadora puede seguir

### Pensamiento Computacional

Es un enfoque de **resolución de problemas** que implica **descomponer** un **problema complejo** en partes más pequeñas y manejables, identificar patrones, abstraer losaspectos esenciales, y desarrollar algoritmos o instrucciones paso a paso para resolverlo.
Este tipo de **pensamiento** no se limita a la **programación**, sino que puede aplicarse en diversas áreas para analizar y abordar **problemas** de manera lógica y eficiente, similar acómo lo haría una **computadora**.

- Descomposición de problemas
- Identificación de patrones
- Enfoque en lo esencial (Abstracción)
- Desarrollo de algoritmos
- Análisis y mejora de soluciones (Evaluación)

### ¿Qué es un patrón?

Un patrón es una repetición identificable y predecible de elementos o características en un conjunto de datos, situaciones o fenómenos.

- **Repetición:**\
  Los patrones son secuencias o características que se repiten de manera constante.
- **Discernibilidad:**\
  Los patrones pueden ser reconocidos y destacados dentro de un conjunto de datos o situaciones.
- **Predictibilidad:**\
  Los patrones permiten anticipar comportamientos o resultados futuros basados en observaciones anteriores.
- **Regularidad:**\
  Los patrones presentan una disposición consistente de sus elementos a lo largo del tiempo o del espacio.
- **Abstracción:**\
  Los patrones se pueden simplificar para representar información de forma más clara y manejable

### ¿Qué es un algoritmo?

Un algoritmo es un conjunto de instrucciones precisas y ordenadas que se siguen para realizar una tarea específica o resolver un problema.

- **Secuencia de pasos:**\
  Una serie lógica de pasos que deben seguirse en un orden específico para lograr un objetivo.
- **Precisión:**\
  Cada paso debe ser definido y comprensible para una ejecución precisa y consistente.
- **Finitud:**\
  Los algoritmos deben tener un número finito de pasos, terminando una vez alcanzado el objetivo o después de un número determinado de pasos.
- **Solución de problemas:**\
  Diseñados para resolver problemas específicos.
- **Eficiencia:**\
  Un buen algoritmo no solo logra el resultado deseado, sino que lo hace de manera eficiente, optimizando el uso de recursos como tiempo y memoria

## Analisis de un problema

Es el proceso de comprender completamente un **problema** antes de **diseñar una solución**. Implica descomponer el problema en partes más manejables, identificar sus causas subyacentes y establecer un enfoque claro para resolverlo de manera efectiva.

1. **_Identificar y comprender el problema_**
2. **_Establecer objetivos claros_**
3. **_Identificar requisitos y restricciones_**
4. **_Analizar las causas subyacentes_**
5. **_Explorar soluciones alternativas_**
6. **_Establecer criterios de éxito_**

- **1. Identificar el problema**\
  Es fundamental entender en qué consiste exactamente el problema. Esto implica identificar todos los detalles relevantes, las entradas y salidas esperadas, así como cualquier restricción o limitación que pueda
  existir.
- **2. Establecer objetivos**\
  ¿Cuál es el propósito final de resolver este problema? Definir claramente los objetivos ayuda a mantener el enfoque y a diseñar una solución efectiva que cumpla con las expectativas.
- **3. Requisitos y restricciones**\
  Es importante tener en cuenta las necesidades y expectativas de los usuarios o stakeholders involucrados en el problema. ¿Qué funciones o características son esenciales para ellos?
- **4. Causas subyacentes**\
  En ocasiones, un problema puede ser solo un síntoma de una causa subyacente más profunda. Identificar y abordar esta causa raíz es fundamental para evitar que el problema resurja en el futuro.
- **5. Soluciones alternativas**\
  Antes de comprometerse con una solución específica, es útil considerar diferentes enfoques y evaluar sus ventajas y desventajas. Esto puede ayudar a encontrar la mejor manera de abordar el problema.

- **6. Criterios de éxito**\
  Definir claramente lo que constituirá una solución exitosa es crucial para evaluar el progreso y el rendimiento del programa una vez implementado. Estos criterios pueden incluir medidas de rendimiento, calidad, eficiencia, etc

## Estructuras de control

Las estructuras de control son un conjunto de instrucciones en un programa que permiten alterar el flujo de ejecución de las operaciones, es decir, dictan cómo y cuándo se deben ejecutar las distintas partes del código. Estas estructuras son fundamentales en la programación, ya que sin ellas, los programas seguirían una ejecución secuencial y lineal, sin poder realizar decisiones, repeticiones o desviaciones en el flujo del programa

- ### Estructuras Condicionales
  Las estructuras condicionales permiten que el programa tome decisiones y ejecute ciertas instrucciones solo si se cumplen ciertas condiciones. Esto se logra utilizando sentencias como if, else if (o elif en algunos lenguajes), y else.
- ### Estructuras de Iteración
  Los bucles son estructuras de control que permiten repetir una o varias instrucciones múltiples veces, hasta que se cumpla una condición específica. Existen varios tipos de bucles, siendo los más comunes while, for, y do-while

## Variables

Son contenedores que almacenan datos que pueden cambiar a lo largo del programa. Se declaran, se les asignan valores y se utilizan para realizar operaciones.

- ### Tipo de Datos

  Definen la naturaleza de los valores que pueden ser manipulados en un programa. Los tipos más comunes incluyen enteros, decimales, cadenas de texto y booleanos.

- ### Operaciones

  Permiten manipular y comparar los datos almacenados en variables para producir nuevos valores, tomar decisiones y controlar el flujo del programa

  |  operadores  | símbolos               |
  | :----------: | ---------------------- |
  | Aritméticos  | (+, -, \*, /, %)       |
  | Relacionales | (>, <, ==, !=, >=, <=) |
  |   Lógicos    | (AND, OR, NOT)         |

- ### Funciones

  Las funciones o procedimientos son bloques de código que realizan una tarea específica y que pueden ser reutilizados a lo largo del programa. Su uso permite mejorar la organización, la legibilidad y la mantenibilidad del código.

- ### Modularidad
  La modularidad se refiere a la práctica de dividir un programa en partes más pequeñas y manejables, llamadas módulos o funciones. Esto tiene varios beneficios

## Estructura de Datos:

La Estructura de Datos en programación es una manera organizada y eficiente de almacenar, manipular y acceder a datos en una computadora. Las estructuras de datos permiten que los programas manejen grandes cantidades de información de manera eficiente y efectiva, facilitando operaciones como búsqueda, inserción, eliminación y modificación de datos

- **Arreglos (Arrays):**\
  Colección de elementos del mismo tipo almacenados en ubicaciones de memoria contiguas. Permiten acceso rápido por índice.
- **Listas Enlazadas (Linked Lists):**\
  Una serie de nodos donde cada nodo contiene un dato y una referencia al siguiente nodo en la secuencia.
- **Pilas (Stacks):**\
  Colección de elementos que sigue el principio LIFO (Last In, First Out).
- **Colas (Queues):**\
  Colección de elementos que sigue el principio FIFO (First In, First Out).
- **Árboles (Trees):**\
  Estructura jerárquica donde cada nodo tiene un valor y referencia a uno o más nodos hijos. Un tipo común es el Árbol Binario.
- **Grafos (Graphs):**\
  Conjunto de nodos conectados por aristas (edges), útil para representar relaciones complejas entre datos.

- **Hash Tables:**\
  Estructura que almacena pares clave-valor, permitiendo un acceso rápido a los datos a través de una función hash

## Paradigmas de programación

Un paradigma de programación es un enfoque o estilo particular de programación que guía y estructura el desarrollo de software. Un paradigma define la manera en que los programadores conceptualizan y organizan los problemas que deben resolver, y dicta cómo se deben estructurar las soluciones en términos de lenguajes de programación y metodologías.

- **Programación Imperativa:**\
  Enfocada en ejecutar instrucciones secuenciales que modifican el estado del
  programa.
- **Programación Orientada a Objetos (OOP):**\
  Organiza el software en objetos que encapsulan datos y
  comportamientos. _Ejemplos:_ Java
- **Programación Funcional:**\
  Se basa en funciones puras, evitando el estado mutable y los efectos secundarios.

- **Programación Declarativa:**\
  El programador especifica qué se debe hacer, no cómo hacerlo. Ejemplos: SQL

## PseudoCódigo

El pseudocódigo es una forma de escribir algoritmos utilizando un lenguaje informal y cercano al lenguaje humano, sin seguir la sintaxis específica de ningún lenguaje de programación en particular. Es una herramienta útil para planificar y diseñar soluciones antes de implementarlas en un código real.

- **Lenguaje informal:**\
  Utiliza un lenguaje que es fácil de entender, parecido al lenguaje natural.
- **Independiente de la sintaxis:**\
  No sigue las reglas de sintaxis de ningún lenguaje de programación específico.
- **Facilita la planificación:**\
  Ayuda a diseñar y organizar el algoritmo antes de escribir el código.
- **Accesible para todos:**\
  Puede ser entendido tanto por programadores como por personas sin conocimientos técnicos.
- **Estructuras lógicas:**\
  Emplea estructuras como condicionales, bucles y asignaciones de manera simple y directa.

- **Enfoque en la lógica:**\
  Se concentra en la lógica y secuencia de pasos más que en detalles técnicos

> Representación textual y simplificada de un algoritmo, sin necesidad de un lenguaje formal.

## Diagramas de Flujo

Un diagrama de flujo es una representación gráfica de un
proceso o algoritmo, donde se utilizan símbolos y flechas para
mostrar la secuencia de pasos y la relación entre ellos. Es una
herramienta visual que facilita la comprensión, el análisis y la
comunicación de procesos complejos.

- **Visualización clara:**\
  Representa procesos de manera visual, lo que facilita la comprensión.
- **Símbolos estándar:**\
  Usa símbolos estandarizados, como óvalos para inicio/fin, rectángulos para procesos, rombos para decisiones, y flechas para indicar el flujo.
- **Secuencia de pasos:**\
  Muestra el orden en que se deben realizar los pasos de un proceso.
- **Identificación de problemas:**\
  Ayuda a identificar cuellos de botella, redundancias y otros problemas en un proceso.
- **Facilita la comunicación:**\
  Es útil para explicar procesos a personas de diferentes niveles de conocimiento.

- **Aplicaciones variadas:**\
  Se usa en diferentes campos, como programación, ingeniería, administración y más.

> Representación gráfica de un proceso usando símbolos estandarizados (inicio, proceso, decisión, etc.).

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

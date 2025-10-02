---
layout: layout-post.njk
title: Bcrypt
# img: /img/portada/git.avif
# img: https://placehold.co/784x396
description: Ideas principales de Bcrypt
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![{{title}}](https://placehold.co/784x396)

## ¿Qué es {{title}}?

**Bcrypt** es una función de _hashing_ diseñada para proteger contraseñas de manera segura.  
Se diferencia de otros algoritmos como **MD5** o **SHA-1** porque:

- **Incluye un salt único** por cada hash, evitando ataques de tablas rainbow.
- **Usa un factor de costo configurable (salt rounds)** que ralentiza el proceso de cálculo, dificultando ataques de fuerza bruta.
- Está específicamente orientado a **seguridad de contraseñas**, no solo a verificación de integridad de datos.

### 1. ¿Para qué se usa?

#### Bcrypt se utiliza principalmente para:

- **Almacenar contraseñas en bases de datos** de forma segura.
- **Autenticación de usuarios** en sistemas de login.
- **Protección de credenciales** en aplicaciones web, móviles o APIs.

#### Se aplica mejor en:

- **Aplicaciones con registro e inicio de sesión**.
- **Sistemas con múltiples usuarios y roles**.
- **Servicios que manejan datos sensibles** y requieren evitar fugas de contraseñas.

### 2. ¿Qué puedo construir con {{title}}?

#### Con Bcrypt puedes implementar:

- **Módulos de autenticación** seguros.
- **Gestión de usuarios** en backends.
- **Mecanismos de verificación de credenciales** en tiempo real.

### 3. ¿Cuándo es más conveniente usarlo?

#### Es recomendable usar Bcrypt cuando:

- **La seguridad de contraseñas es crítica**.
- Se requiere un **balance entre seguridad y rendimiento**.
- La aplicación **maneja muchos usuarios** y necesita resistencia frente a ataques comunes.

#### Comparado con otras opciones:

- **Argon2** es más moderno y recomendado en entornos de máxima seguridad.
- **SHA-256** y similares son más rápidos, pero _no son seguros para contraseñas_.

## Buenas prácticas recomendadas

- **Usar al menos 10 salt rounds** (ajustar según capacidad del servidor).
- **Nunca guardar contraseñas en texto plano**.
- **Mantener la lógica de hashing en utilidades independientes**.
- **Combinar con otras medidas de seguridad** como HTTPS, JWT, validación de inputs y limitación de intentos fallidos.
- **Actualizar la dificultad periódicamente** según aumente la potencia del hardware disponible.

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Seguro frente a ataques de fuerza bruta y tablas rainbow.
- Configuración flexible mediante salt rounds.
- Ampliamente soportado en múltiples lenguajes y frameworks.

#### ⚠️ Debilidades principales:

- Más lento que otros algoritmos por diseño.
- No es el estándar más reciente (Argon2 lo supera en ciertos escenarios).

#### 🛠️ Cuándo usarlo:

- Para proteger contraseñas en bases de datos.
- En sistemas de autenticación de usuarios.
- En aplicaciones donde la seguridad es prioritaria.

#### 🚫 Cuándo evitarlo:

- En proyectos que requieren velocidad extrema en el procesamiento.
- Cuando tu organización ya ha adoptado Argon2 como estándar.

---

# Temas {#temas#}

- [inicio](#que-es-Bcrypt)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de usar **Bcrypt**, es importante conocer algunos conceptos clave
que se relacionan directamente con su funcionamiento:

### Hashing

Proceso unidireccional que convierte un dato en una cadena de
longitud fija. A diferencia de la encriptación, no se puede revertir
al valor original.

### Salt

Valor aleatorio que se añade a la contraseña antes de generar el
hash. Esto garantiza que dos contraseñas iguales no produzcan el
mismo hash.

### Salt Rounds (factor de costo)

Número de veces que Bcrypt aplica el proceso de hashing. A mayor
número, más seguro, pero también más lento el cálculo.

### Comparación de hashes

Proceso que permite verificar si una contraseña ingresada
corresponde al hash almacenado.

### Fuerza bruta

Método de ataque donde un sistema prueba múltiples combinaciones
posibles hasta encontrar la contraseña correcta. Bcrypt ayuda a
mitigarlo al ser computacionalmente costoso.

[🔼 temas](#temas)

---

# Herramientas recomendadas

### 1. Node.js con la librería `bcrypt`

- Permite integrar Bcrypt fácilmente en proyectos backend.
- Se instala con:

```bash
npm install bcrypt
```

- Ejemplo básico:

```javascript
const bcrypt = require("bcrypt");
const hash = await bcrypt.hash("miClave123", 10);
```

### 2. Librería `bcryptjs` (alternativa en JavaScript)

- Implementación pura en JavaScript, sin dependencias nativas.\
- Ideal para entornos donde `bcrypt` no compila bien.\
- Se instala con:

```bash
npm install bcryptjs
```

- Ejemplo básico:

```javascript
const bcrypt = require("bcryptjs");
const hash = await bcrypt.hash("miClave123", 10);
```

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código que puedes reutilizar frecuentemente con
**Bcrypt**:

### Importar librería

```javascript
const bcrypt = require("bcrypt");
```

### Generar hash

```javascript
const hash = await bcrypt.hash("miClave123", 10);
```

### Comparar contraseña

```javascript
const isMatch = await bcrypt.compare("miClave123", hash);
```

### Generar salt manualmente

```javascript
const salt = await bcrypt.genSalt(12);
const hash = await bcrypt.hash("otraClave456", salt);
```

### Verificar coincidencia

```javascript
if (await bcrypt.compare("otraClave456", hash)) {
  console.log("✅ Coinciden");
} else {
  console.log("❌ No coinciden");
}
```

[🔼 temas](#temas)

---

# Comandos

### 1. **Generar hash con número de salt rounds**

```javascript
const hash = await bcrypt.hash("password", 10);
```

- `"password"`\
  contraseña original.
- `10`\
  número de salt rounds (factor de costo).

### 2. **Generar salt y luego el hash**

```javascript
const salt = await bcrypt.genSalt(12);
const hash = await bcrypt.hash("password", salt);
```

- `genSalt(12)` → crea un salt con un costo de 12.
- Se usa luego en `hash()`.

### 3. **Comparar contraseña con hash almacenado**

```javascript
const isMatch = await bcrypt.compare("password", hash);
```

Devuelve `true` si coinciden, `false` si no.

### 4. **Versión síncrona (bloqueante, solo si es necesario)**

```javascript
const hash = bcrypt.hashSync("password", 10);
const isMatch = bcrypt.compareSync("password", hash);
```

Útil en scripts pequeños o sin operaciones asíncronas.

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es Bcrypt y para qué se utiliza?

Bcrypt es una función de hashing diseñada específicamente para proteger
contraseñas. Se utiliza en aplicaciones web, móviles y sistemas que
requieren almacenamiento seguro de credenciales.

### 2. ¿Cuál es la diferencia entre hashing y encriptación?

- **Hashing:**\
  Es un proceso unidireccional, no reversible, ideal para
  almacenar contraseñas.
- **Encriptación:**\
  Es reversible, diseñada para recuperar el texto
  original mediante una clave.

### 3. ¿Qué son los "salt rounds" en Bcrypt?

Son el número de iteraciones que el algoritmo aplica al hash. A mayor
número, mayor seguridad, pero también más consumo de recursos y tiempo
de procesamiento.

### 4. ¿Por qué es importante usar un "salt" en el hash?

El salt evita que contraseñas iguales produzcan el mismo hash, lo que
protege contra ataques con tablas rainbow.

### 5. ¿Cómo se genera un hash básico con Bcrypt en Node.js?

```javascript
const bcrypt = require("bcrypt");
const hash = await bcrypt.hash("password123", 10);
```

---

## 🟡 Intermedio

### 6. ¿Cómo se compara una contraseña con su hash en Bcrypt?

```javascript
const isMatch = await bcrypt.compare("password123", hash);
```

Retorna `true` si coinciden, `false` en caso contrario.

### 7. ¿Qué pasa si se usan muy pocos salt rounds (ej. 1 o 2)?

El proceso de hashing se vuelve muy rápido y fácil de romper con ataques
de fuerza bruta.

### 8. ¿Qué pasa si se usan demasiados salt rounds (ej. 20+)?

El hash se vuelve extremadamente seguro, pero también muy lento,
afectando el rendimiento de la aplicación.

### 9. ¿Qué diferencia hay entre `bcrypt` y `bcryptjs`?

- **bcrypt:**\
  Depende de compilaciones nativas, más rápido.
- **bcryptjs:**\
  Implementación pura en JavaScript, más portable pero
  algo más lenta.

### 10. ¿Por qué nunca se deben almacenar contraseñas en texto plano?

Porque si la base de datos es comprometida, las contraseñas quedan
expuestas sin protección, generando un riesgo crítico de seguridad.

---

## 🔴 Avanzado

### 11. ¿Cómo garantizar que un sistema con Bcrypt siga siendo seguro en el tiempo?

- Aumentar periódicamente los salt rounds.\
- Usar prácticas seguras de gestión de credenciales.\
- Mantener librerías actualizadas.

### 12. ¿Qué sucede si se genera un nuevo hash para la misma contraseña?

El hash será diferente porque el salt generado es único en cada ocasión.

### 13. ¿Cómo combinar Bcrypt con otras medidas de seguridad?

- Usar HTTPS para transmitir credenciales.
- Implementar autenticación basada en tokens (ej. JWT).
- Limitar intentos de login (rate limiting).

### 14. ¿Cuándo conviene usar Argon2 en lugar de Bcrypt?

Argon2 es más moderno y resistente a ataques de hardware especializado
(como GPUs o ASICs). Conviene en entornos que requieren máxima
seguridad.

### 15. ¿Cuál es una buena práctica para manejar Bcrypt en proyectos grandes?

Centralizar la lógica de hashing en un servicio o módulo de utilidades,
evitando duplicar código y asegurando un control unificado sobre la
configuración de seguridad.

[🔼 temas](#temas)

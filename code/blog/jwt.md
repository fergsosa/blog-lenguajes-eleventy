---
layout: layout-post.njk
title: jsonwebtoken
# img: /img/portada/git.avif
# img: https://placehold.co/784x396
description: Ideas principales de jsonwebtoken
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![{{title}}](https://placehold.co/784x396)

## ¿Qué es {{title}}??

**jsonwebtoken (JWT)** es una librería que implementa el estándar [JSON Web Token](https://jwt.io/).  
Un JWT es un **formato de token seguro, compacto y auto-contenido**, que permite transmitir información entre partes de forma confiable.

#### Se diferencia de otras soluciones como **cookies de sesión** o **tokens opacos** porque:

- **Incluye la información dentro del token**\
  (claims), evitando la necesidad de guardar estado en el servidor.
- **Es independiente de la base de datos**\
  la verificación se hace con una clave secreta o par de claves (HS256, RS256, etc.).
- **Está estandarizado y ampliamente adoptado**\
  a diferencia de soluciones personalizadas.

### 1. ¿Para qué se usa??

Se usa principalmente para **autenticación y autorización**.

#### Los contextos más comunes son:

- **Aplicaciones web y móviles:**\
  validar la identidad de usuarios sin mantener sesiones pesadas.
- **APIs REST y GraphQL:**\
  otorgar acceso a recursos mediante un token portátil.
- **Microservicios:**\
  intercambio de credenciales confiables entre servicios distribuidos.

### 2. ¿Qué puedo construir con {{title}}??

Con JWT puedes construir:

- **Sistemas de autenticación de usuarios**\
  login / logout.
- **Autorización basada en roles**\
  ejemplo: admin, user.
- **APIs seguras**\
  que validen acceso con tokens en cabeceras HTTP.
- **Single Sign-On (SSO)**\
  para aplicaciones distribuidas.
- **Sistemas sin estado (stateless)**\
  en servidores, lo que mejora la escalabilidad.

### 3. ¿Cuándo es más conveniente usarlo??

Es conveniente usar JWT cuando:

- Quieres una **solución sin estado (stateless)** en lugar de mantener sesiones en memoria/BD.
- Necesitas **interoperabilidad** entre diferentes lenguajes, servicios o plataformas.
- El sistema requiere **escalar horizontalmente**, y las sesiones tradicionales serían un cuello de botella.
- Buscas un **formato estándar y seguro**, compatible con librerías en múltiples entornos.

> En cambio, para **aplicaciones pequeñas y simples**, donde el manejo de sesiones no es un problema, podría ser mejor usar **cookies de sesión**.

## Buenas prácticas recomendadas?

- **Usar algoritmos de firma seguros**\
  (HS256 o RS256, evitar `none`).
- **Definir tiempos de expiración (`exp`)**\
  para reducir riesgos de tokens robados.
- **Guardar los tokens en un lugar seguro**:
  - _En cliente web_: `httpOnly cookies` (más seguras que localStorage).
  - _En móviles_: almacenamiento seguro (Keychain/Keystore).
- **No almacenar información sensible**\
  en el payload (ejemplo: contraseñas).
- **Rotar claves periódicamente**\
  para mayor seguridad.
- **Validar siempre la firma y expiración**\
  del token antes de confiar en él.
- **Dividir responsabilidades:**\
  un servicio emite tokens (auth service) y otros servicios los verifican.

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Compacto, seguro y auto-contenido.
- Independiente del servidor y escalable.
- Amplia compatibilidad y estándar de la industria.

#### ⚠️ Debilidades principales:

- Difícil invalidar tokens antes de su expiración.
- Mal uso puede llevar a vulnerabilidades (ejemplo: guardar datos sensibles).
- Requiere atención especial en el almacenamiento en cliente.

#### 🛠️ Cuándo usarlo:

- Autenticación y autorización en APIs.
- Sistemas distribuidos o microservicios.
- Casos donde se busca escalabilidad y ausencia de estado en el servidor.

#### 🚫 Cuándo evitarlo:

- Aplicaciones pequeñas donde una sesión en servidor es suficiente.
- Cuando necesitas invalidación inmediata de tokens sin infraestructura extra.
- Si no cuentas con experiencia en manejo de seguridad de tokens.

---

# Temas {#temas#}

- [inicio](#que-es-jsonwebtoken)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de trabajar con **jsonwebtoken (JWT)**, conviene entender los siguientes conceptos:

### JWT (JSON Web Token):

Un estándar abierto (RFC 7519) que define un formato compacto y seguro para transmitir información entre partes.

### Header (Encabezado):

Contiene el algoritmo de firma (ejemplo: `HS256`, `RS256`) y el tipo de token (`JWT`).

### Payload (Cuerpo o claims):

Datos que el token transporta, como `userId`, `role`, `exp` (expiración), entre otros.  
 _Importante: no almacenar información sensible aquí._

### Signature (Firma):

Se genera a partir del header, payload y una clave secreta/privada.  
 Sirve para verificar que el token no fue manipulado.

### Claims:

Son las declaraciones dentro del payload.

- _Registered claims:_ estándar como `exp` (expira), `iat` (emitido en), `iss` (emisor).
- _Custom claims:_ definidos por el desarrollador (ejemplo: `role`, `permissions`).

### Token stateless:

JWT es un mecanismo **sin estado**; no requiere guardar sesiones en el servidor.

### Secret o Private Key:

Clave usada para firmar y verificar el token. Puede ser simétrica (`HS256`) o asimétrica (`RS256`).

### Expiración (`exp`):

Tiempo límite de validez del token. Control esencial para la seguridad.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar con JWT de forma más eficiente y segura, se recomienda:

### Librerías principales:

- [**`jsonwebtoken`**](https://www.npmjs.com/package/jsonwebtoken) (Node.js)**:**\
  la más utilizada en entornos JavaScript.
- [**`express-jwt`**](https://www.npmjs.com/package/express-jwt)**:**\
  middleware para integrar JWT fácilmente en Express.
- [**`passport-jwt`**](http://www.passportjs.org/packages/passport-jwt/)**:**\
  estrategia JWT para el framework de autenticación Passport.

### Utilidades de depuración:

- [**jwt.io**](https://jwt.io/)**:** herramienta online para decodificar, verificar y generar tokens.
- Extensiones de navegador como **JWT Debugger**.

### Gestión de claves y secretos:

- **dotenv:** para manejar claves secretas en archivos `.env` sin exponerlas en el código.
- **Vault** o **AWS Secrets Manager:** almacenamiento seguro de claves en producción.

### Buenas prácticas en integración:

- Uso de **middlewares** en Express u otros frameworks para validar tokens automáticamente.
- **Rotación de claves** para mitigar riesgos.
- Configuración de **tiempos de expiración cortos** y uso de **refresh tokens**.

```javascript
// Ejemplo de middleware Express para validar JWT
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token requerido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Se adjunta info del usuario al request
    next();
  } catch (err) {
    return res.status(403).json({ error: "Token inválido o expirado" });
  }
}

module.exports = authMiddleware;
```

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código comunes que se reutilizan con frecuencia:

### Generar un token con expiración

```javascript
const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});
```

### Verificar y decodificar un token

```javascript
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

### Decodificar un token sin verificar la firma (útil solo para debug)

```javascript
const payload = jwt.decode(token);
```

### Middleware típico en Express

```javascript
app.use((req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Token requerido");

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).send("Token inválido o expirado");
  }
});
```

[🔼 temas](#temas)

---

# Comandos

### 1. Generar un token

```javascript
jwt.sign(payload, secretOrPrivateKey, [options, callback]);
```

Ejemplo:

```javascript
const token = jwt.sign({ id: 10 }, "mi_secreto", { expiresIn: "2h" });
```

### 2. Verificar un token

```javascript
jwt.verify(token, secretOrPublicKey, [options, callback]);
```

Ejemplo:

```javascript
try {
  const decoded = jwt.verify(token, "mi_secreto");
  console.log(decoded);
} catch (err) {
  console.error("Token inválido");
}
```

### 3. Decodificar un token (sin validar firma)

```javascript
jwt.decode(token, [options]);
```

Ejemplo:

```javascript
const data = jwt.decode(token);
console.log(data); // Solo payload, no verifica seguridad
```

### 4. Opciones más comunes en `sign`

- `expiresIn`: define el tiempo de vida (`"1h"`, `"7d"`, `60` segundos).
- `audience`: define quién debe usar el token.
- `issuer`: quién emitió el token.
- `subject`: a quién pertenece el token.

Ejemplo:

```javascript
const token = jwt.sign({ role: "admin" }, "mi_secreto", {
  expiresIn: "30m",
  issuer: "miApp",
});
```

[🔼 temas](#temas)

---

# Conceptos Claves

### 🟢 Básico

### 1. ¿Qué es un JSON Web Token (JWT)?

Un JWT es un estándar abierto (RFC 7519) que define un formato compacto y auto-contenido para transmitir información de forma segura entre partes, usando una firma digital.

### 2. ¿Cuáles son las tres partes principales de un JWT?

- **Header:**\
  algoritmo y tipo de token.
- **Payload:**\
  datos o _claims_.
- **Signature:**\
  firma generada para verificar integridad y autenticidad.

### 3. ¿Qué diferencia existe entre `jwt.decode()` y `jwt.verify()`?

- `jwt.decode()`\
  solo lee el contenido del token, **sin validar la firma ni la expiración**.
- `jwt.verify()`\
  valida la firma y revisa los tiempos (`exp`, `iat`), garantizando que el token sea confiable.

### 4. ¿Qué es un claim en JWT?

Un **claim** es un dato dentro del payload. Puede ser:

- **Registered claims:** estándar (ejemplo: `exp`, `iat`, `sub`).
- **Public claims:** definidos por terceros.
- **Custom claims:** definidos por el desarrollador (ejemplo: `role`, `permissions`).

### 5. ¿Cómo se genera un token en Node.js usando `jsonwebtoken`?

```javascript
const jwt = require("jsonwebtoken");
const token = jwt.sign({ userId: 1 }, "mi_secreto", { expiresIn: "1h" });
```

---

### 🟡 Intermedio

### 6. ¿Cuál es la diferencia entre algoritmos de firma simétrica y asimétrica en JWT?

- **Simétrica (HS256):**\
  usa la misma clave para firmar y verificar.
- **Asimétrica (RS256):**\
  usa una clave privada para firmar y una clave pública para verificar, lo que aumenta seguridad en sistemas distribuidos.

### 7. ¿Qué sucede si un token expira?

El método `jwt.verify()` lanza un error (`TokenExpiredError`) y el servidor debe pedir al cliente que renueve el token (normalmente mediante un _refresh token_).

### 8. ¿Dónde se recomienda almacenar un JWT en una aplicación web?

- Lo más seguro es en **cookies con httpOnly** y `Secure`.
- Alternativas como `localStorage` son menos seguras frente a ataques XSS.

### 9. ¿Cómo invalidar un JWT antes de su expiración?

JWT por sí mismo es **stateless**, no puede invalidarse. Para hacerlo se necesita:

- **Lista negra (blacklist)** en el servidor.
- **Rotación de tokens** (generar nuevos y revocar antiguos).
- Uso de **refresh tokens**.

### 10. ¿Qué es el `expiresIn` y por qué es importante?

Es la duración de validez del token. Importante porque:

- Reduce riesgos si el token es robado.
- Permite balancear seguridad y experiencia de usuario.  
  Ejemplo: `{ expiresIn: "1h" }`.

---

### 🔴 Avanzado

### 11. ¿Qué ventajas ofrece JWT frente a las sesiones tradicionales en servidor?

- Escalabilidad (no requiere almacenar sesiones).
- Interoperabilidad entre sistemas.
- Menor carga en memoria del servidor.  
  Pero sacrifica la capacidad de invalidación inmediata.

### 12. ¿Qué problemas de seguridad pueden ocurrir si guardas datos sensibles en el payload de un JWT?

El payload no está cifrado, solo codificado en Base64.  
Cualquiera que tenga el token puede leerlo, por lo tanto **no deben incluirse contraseñas, tarjetas o datos privados**.

### 13. ¿Qué es el ataque “alg=none” en JWT?

Es una vulnerabilidad donde un atacante manipula el header para establecer `alg: none`, logrando que el servidor acepte el token sin validación de firma.

> **Solución:** configurar librerías para aceptar solo algoritmos seguros (`HS256`, `RS256`).

### 14. ¿Cómo se maneja la autorización basada en roles con JWT?

- Se agrega un **claim** en el payload, por ejemplo: `{ role: "admin" }`.
- En cada request, el middleware verifica el token y valida si el rol tiene permisos para acceder a la ruta.

Ejemplo:

```javascript
if (req.user.role !== "admin") return res.status(403).send("Acceso denegado");
```

### 15. ¿Qué son los Refresh Tokens y por qué se usan con JWT?

Un **refresh token** es un token de larga duración que sirve para **obtener nuevos JWT de acceso** sin que el usuario deba loguearse otra vez.  
Se usan porque los JWT de acceso deben tener corta expiración por seguridad, y el refresh token permite renovar sin perder usabilidad.

[🔼 temas](#temas)

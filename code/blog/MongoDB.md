---
layout: layout-post.njk
title: MongoDB
img: /img/portada/mongodb.avif
description: Base no relacional, documentos.
tags: ["blog", "bases_de_datos"]
date: "2024-09-01"
---

# {{title}}

![img]({{img}})

## 1. ¿Qué es {{title}}?

MongoDB es un **sistema de gestión de bases de datos NoSQL** que almacena la información en **documentos BSON** (una extensión de JSON).

#### Se diferencia de bases de datos relacionales como **MySQL** o **PostgreSQL** en varios aspectos clave:

- **Estructura flexible:**  
  No requiere un esquema fijo como las tablas en SQL.  
  Cada documento puede tener campos distintos y anidados.
- **Alta escalabilidad horizontal:**  
  Permite distribuir datos en múltiples servidores (**sharding**) para manejar grandes volúmenes.
- **Consultas potentes:**  
  Uso de operadores avanzados para búsquedas complejas sin necesidad de `JOIN`.
- **Velocidad en datos no estructurados:**  
  Ideal para datos que cambian con frecuencia o no tienen una estructura definida.

### 2. ¿Para qué se usa?

MongoDB es ideal para proyectos que requieren **agilidad** y **flexibilidad en el modelado de datos**, como:

- Aplicaciones web y móviles con datos dinámicos.
- Sistemas que manejan **grandes volúmenes de datos** (Big Data).
- Proyectos con **esquemas que cambian con frecuencia**.
- **APIs REST o GraphQL** donde se trabaja con documentos JSON.
- Aplicaciones que necesitan **escalar rápidamente** con alto tráfico.

> Ejemplo: redes sociales, plataformas de e-commerce, aplicaciones de streaming o sistemas de IoT.

### 3. ¿Qué puedo construir con {{title}}?

Con MongoDB puedes crear desde **aplicaciones simples** hasta **sistemas empresariales complejos**.  
Algunos ejemplos incluyen:

- **E-commerce:**  
  Gestión de productos, carritos de compra y pedidos.
- **Sistemas de mensajería:**  
  Chats en tiempo real con datos no estructurados.
- **Plataformas de análisis:**  
  Procesamiento de datos de sensores o transacciones.
- **APIs modernas:**  
  Backends escalables para apps móviles y web.
- **Sistemas de recomendación:**  
  Basados en datos de usuarios y patrones de uso.

### 4. ¿Cuándo es más conveniente usarlo?

MongoDB sobresale en escenarios donde:

- El **esquema de datos cambia constantemente** o es flexible.
- Se manejan **datos no estructurados o semiestructurados**, como JSON.
- Se espera **crecimiento rápido y escalabilidad**.
- El rendimiento en **lectura y escritura** es más importante que la integridad referencial compleja.
- El proyecto necesita **desarrollos ágiles** y prototipado rápido.

> Si necesitas relaciones complejas y fuertes restricciones de integridad, una base SQL podría ser mejor.

## Buenas prácticas recomendadas

Para trabajar eficientemente con MongoDB, sigue estas recomendaciones:

#### **Estructura y diseño**

- **Modela los datos según cómo serán consultados**, no solo cómo se almacenan.
- Usa **subdocumentos y arrays** para datos relacionados en lugar de múltiples colecciones cuando sea posible.
- Evita documentos demasiado grandes (límite recomendado: **16MB por documento**).

#### **Rendimiento**

- **Crea índices adecuados** para optimizar consultas frecuentes.
- Utiliza **paginación con `limit` y `skip`** para manejar grandes conjuntos de resultados.
- Monitorea el tamaño de la base y planifica el **sharding** cuando sea necesario.

#### **Código limpio**

- Centraliza la lógica de conexión y configuración.
- Utiliza **variables de entorno** para credenciales y configuración.
- Implementa **validaciones de datos** antes de guardarlos.
- Mantén **nombres claros y consistentes** para colecciones y campos.

#### **Seguridad**

- Configura usuarios con **roles y permisos adecuados**.
- Habilita **autenticación y cifrado** de datos.
- Nunca expongas la base de datos directamente a internet sin protección.

---

## Resumen rápido

> Síntesis rápida de lo aprendido sobre MongoDB.

#### Fortalezas principales:

- Flexibilidad en el esquema de datos.
- Escalabilidad horizontal eficiente.
- Alto rendimiento con datos no estructurados.
- Integración natural con aplicaciones modernas (JSON).

#### Debilidades principales:

- No es ideal para relaciones complejas.
- Puede consumir más espacio en disco que SQL.
- Requiere diseño cuidadoso para evitar consultas ineficientes.

#### Cuándo usarlo:

- Proyectos que necesitan crecer rápido.
- Datos que cambian con frecuencia.
- Aplicaciones web/móviles con estructuras dinámicas.

#### Cuándo evitarlo:

- Sistemas financieros o con **alta integridad transaccional**.
- Proyectos con **relaciones complejas** y normalización estricta.
- Cuando la estructura de datos es muy estable y no requiere flexibilidad.

---

# Temas {#temas#}

- [inicio](#node-js)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Antes de trabajar con MongoDB, es importante entender los siguientes conceptos:

### **1. Documentos**

- Unidad básica de datos en MongoDB.
- Se almacenan en formato **BSON** (Binary JSON).
- Similar a un objeto en JavaScript.

```json
{
  "nombre": "Fernando",
  "edad": 28,
  "email": "fernando@example.com"
}
```

### **2. Colecciones**

- Conjunto de documentos relacionados, equivalente a una tabla en SQL.
- Ejemplo: una colección llamada `usuarios` que contiene varios documentos con información de usuarios.

### **3. Base de datos**

- Contenedor de colecciones.
- Cada aplicación puede tener una o varias bases de datos según la necesidad.

### **4. BSON**

- Formato binario basado en JSON.
- Permite almacenar tipos de datos más complejos, como:
  - `ObjectId`
  - `Date`
  - `Binary`
  - `Decimal128`

### **5. ObjectId**

- Identificador único para cada documento.
- Se genera automáticamente al insertar un documento.

```json
{
  "_id": "651c5f4b8d0f5e9d12345678",
  "nombre": "Producto 1",
  "precio": 1500
}
```

### **6. CRUD**

Operaciones esenciales que se realizan en una base de datos:

| operación    | acción                 |
| ------------ | ---------------------- |
| **C**_reate_ | Crear documentos.      |
| **R**_ead_   | Leer datos.            |
| **U**_pdate_ | Actualizar documentos. |
| **D**_elete_ | Eliminar documentos.   |

### **7. Índices**

- Mejoran la **velocidad de búsqueda** y consultas.
- Sin índices, MongoDB recorre toda la colección (**full scan**).

> Ejemplo: indexar el campo `email` en una colección de usuarios.

```js
db.usuarios.createIndex({ email: 1 });
```

### **8. Agregaciones (`Aggregation Pipeline`)**

- Herramienta poderosa para **procesar y transformar datos**.
- Funciona en etapas (`stages`) como un flujo de trabajo.

Ejemplo básico: contar usuarios por país.

```js
db.usuarios.aggregate([
  { $group: { _id: "$pais", totalUsuarios: { $sum: 1 } } },
]);
```

### **9. Replica Set**

- Grupo de servidores MongoDB que mantienen copias sincronizadas de los datos.
- Brinda **alta disponibilidad** y **resiliencia**.

### **10. Sharding**

- Técnica de **escalamiento horizontal**.
- Distribuye datos en múltiples servidores para manejar grandes volúmenes.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar con MongoDB de forma eficiente, estas son las herramientas más importantes:

### **1. MongoDB Compass**

- Interfaz gráfica oficial de MongoDB.
- Permite **visualizar datos, crear índices y ejecutar consultas** sin usar la terminal.
- Ideal para desarrolladores que prefieren trabajar visualmente.

> Descarga: [https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass)

### **2. MongoDB Atlas**

Plataforma en la nube para gestionar bases de datos MongoDB.

#### Características clave:

- Escalabilidad automática.
- Backups automáticos.
- Alta disponibilidad global.
- Seguridad integrada.

> Uso recomendado: hosting de bases de datos para producción y pruebas.  
> Registro gratuito: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

### **3. Extensión MongoDB for VS Code**

- Permite **conectarse a bases de datos** directamente desde Visual Studio Code.
- Ejecuta consultas y explora colecciones sin salir del editor.

> Instalar desde el Marketplace de VS Code:  
> `MongoDB for VS Code`

### **4. Mongoose (ODM para Node.js)**

Librería para interactuar con MongoDB en proyectos de **Node.js**.

#### Beneficios:

- Definir **esquemas y modelos** para los datos.
- Validación automática.
- Simplificación en consultas y operaciones complejas.

```bash
npm install mongoose
```

### **5. Robo 3T (alternativa a Compass)**

- Cliente liviano para administrar bases de datos MongoDB.
- Ideal para usuarios que buscan una herramienta **rápida y minimalista**.

> Descarga: [https://robomongo.org/](https://robomongo.org/)

### **6. Node.js + Express**

MongoDB se integra perfectamente con **Node.js** y **Express** para construir APIs y aplicaciones backend modernas.

> Paquete oficial de MongoDB para Node.js:

```bash
npm install mongodb
```

### **7. Docker**

- Permite levantar un contenedor de MongoDB en segundos para desarrollo o pruebas.

```bash
docker run -d -p 27017:27017 --name my-mongo mongo
```

### **8. Mongosh**

- Shell interactivo para trabajar con MongoDB desde la terminal.
- Reemplazo moderno del clásico `mongo shell`.

> Instalación: [https://www.mongodb.com/try/download/shell](https://www.mongodb.com/try/download/shell)

---

## 📌 Resumen rápido de herramientas

| Herramienta           | Uso principal                       | Tipo           |
| --------------------- | ----------------------------------- | -------------- |
| **MongoDB Compass**   | Visualización y gestión de datos    | GUI            |
| **MongoDB Atlas**     | Base de datos en la nube            | Cloud Service  |
| **Mongoose**          | ODM para Node.js                    | Librería       |
| **VS Code Extension** | Conectar MongoDB desde el editor    | Extensión      |
| **Robo 3T**           | Cliente ligero de MongoDB           | GUI            |
| **Docker**            | MongoDB en contenedor               | Virtualización |
| **Mongosh**           | Interacción con MongoDB en terminal | CLI            |

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código para tareas comunes en **Node.js** con MongoDB.

### **1. Conexión básica con Mongoose**

```js
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/mi_base")
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión", err));
```

### **2. Definir un modelo**

```js
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, required: true },
  edad: Number,
});

const Usuario = mongoose.model("Usuario", usuarioSchema);
```

### **3. Crear un documento**

```js
const nuevoUsuario = new Usuario({
  nombre: "Ana",
  email: "ana@example.com",
  edad: 25,
});
await nuevoUsuario.save();
```

### **4. Consultar documentos**

```js
const usuarios = await Usuario.find(); // Todos los usuarios
const ana = await Usuario.findOne({ nombre: "Ana" }); // Un usuario específico
```

### **5. Actualizar un documento**

```js
await Usuario.updateOne({ nombre: "Ana" }, { edad: 26 });
```

### **6. Eliminar un documento**

```js
await Usuario.deleteOne({ nombre: "Ana" });
```

### **7. Conexión nativa sin Mongoose**

```js
import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb://localhost:27017");
await cliente.connect();

const db = cliente.db("mi_base");
const coleccion = db.collection("usuarios");

await coleccion.insertOne({ nombre: "Carlos", edad: 30 });
```

[🔼 temas](#temas)

---

# Comandos

Comandos básicos para trabajar desde **mongosh** o la terminal.

### **1. Conectarse a MongoDB**

```bash
mongosh
```

> Si está en otro host/puerto:

```bash
mongosh "mongodb://localhost:27017"
```

### **2. Mostrar bases de datos**

```bash
show dbs
```

### **3. Crear o usar una base de datos**

```bash
use mi_base
```

### **4. Mostrar colecciones**

```bash
show collections
```

### **5. Insertar documentos**

```js
db.usuarios.insertOne({ nombre: "Ana", edad: 25 });
db.usuarios.insertMany([
  { nombre: "Luis", edad: 30 },
  { nombre: "Carla", edad: 22 },
]);
```

### **6. Consultar documentos**

```js
db.usuarios.find(); // Todos
db.usuarios.find({ edad: { $gt: 25 } }); // Condición
db.usuarios.findOne({ nombre: "Ana" }); // Solo uno
```

### **7. Actualizar documentos**

```js
db.usuarios.updateOne({ nombre: "Ana" }, { $set: { edad: 26 } });

db.usuarios.updateMany({ edad: { $lt: 18 } }, { $set: { estado: "menor" } });
```

### **8. Eliminar documentos**

```js
db.usuarios.deleteOne({ nombre: "Ana" });
db.usuarios.deleteMany({ edad: { $lt: 18 } });
```

### **9. Crear índice**

```js
db.usuarios.createIndex({ email: 1 });
```

### **10. Contar documentos**

```js
db.usuarios.countDocuments();
```

### **11. Agregaciones básicas**

Contar usuarios por país:

```js
db.usuarios.aggregate([{ $group: { _id: "$pais", total: { $sum: 1 } } }]);
```

### **12. Exportar e importar datos**

Exportar colección:

```bash
mongoexport --db mi_base --collection usuarios --out usuarios.json
```

Importar colección:

```bash
mongoimport --db mi_base --collection usuarios --file usuarios.json
```

## 📌 Resumen rápido de comandos

| Acción             | Comando                                       |
| ------------------ | --------------------------------------------- |
| Ver bases de datos | `show dbs`                                    |
| Usar base de datos | `use mi_base`                                 |
| Ver colecciones    | `show collections`                            |
| Insertar           | `db.usuarios.insertOne({nombre: "Ana"})`      |
| Consultar          | `db.usuarios.find({edad: {$gt: 25}})`         |
| Actualizar         | `db.usuarios.updateOne({...}, {$set: {...}})` |
| Eliminar           | `db.usuarios.deleteOne({...})`                |
| Crear índice       | `db.usuarios.createIndex({email: 1})`         |
| Contar documentos  | `db.usuarios.countDocuments()`                |
| Agregar datos      | `db.usuarios.aggregate([...])`                |

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### **1. Estructura principal: Documentos y Colecciones**

- **Documento:**\
  Es la unidad básica de almacenamiento en MongoDB. Está representado en formato **BSON** (similar a JSON).
- **Colección:**\
  Conjunto de documentos relacionados, similar a una tabla en bases de datos relacionales.

**Ejemplo de documento:**

```json
{
  "nombre": "Ana",
  "edad": 25,
  "email": "ana@example.com"
}
```

**Colección:** `usuarios` puede contener miles de documentos similares.

### **2. BSON vs JSON**

- **BSON (Binary JSON):**\
  Es el formato binario que usa MongoDB internamente.
  - Soporta **tipos de datos adicionales** como `ObjectId`, `Date`, `Decimal128`, `Binary`.
  - Más eficiente en almacenamiento y velocidad.
- **JSON:**\
  Solo texto plano, más limitado en tipos de datos.

**MongoDB usa BSON** porque optimiza la lectura y escritura de datos, y soporta tipos que JSON no maneja.

### **3. Operaciones CRUD básicas**

| Operación      | Sintaxis ejemplo                                                   |
| -------------- | ------------------------------------------------------------------ |
| **Insertar**   | `db.usuarios.insertOne({ nombre: "Ana", edad: 25 })`               |
| **Buscar**     | `db.usuarios.find({ nombre: "Ana" })`                              |
| **Actualizar** | `db.usuarios.updateOne({ nombre: "Ana" }, { $set: { edad: 26 } })` |
| **Eliminar**   | `db.usuarios.deleteOne({ nombre: "Ana" })`                         |

### **4. ObjectID**

Es el identificador único que MongoDB asigna automáticamente a cada documento en el campo `_id`.

#### Tiene **12 bytes**, distribuidos así:

- **4 bytes**\
  Marca de tiempo (timestamp).
- **5 bytes**\
  Identificador de máquina y proceso.
- **3 bytes**\
  Contador incremental.

Esto asegura **unicidad global** sin necesidad de un servidor central.

> **Ejemplo:**  
> `64f83d2a8d9b4e7cbb123456`

### **5. Crear un índice**

```js
db.usuarios.createIndex({ email: 1 });
```

- **`1`** = Orden ascendente.
- **`-1`** = Orden descendente.

> **Importancia:**  
> Los índices aceleran la búsqueda de documentos, evitando que MongoDB recorra toda la colección (**full collection scan**).

---

## 🟡 Intermedio

### **6. Tipos de índices y casos de uso**

| Tipo             | Descripción                   | Ejemplo de uso                                      |
| ---------------- | ----------------------------- | --------------------------------------------------- |
| **Single-field** | Índice en un solo campo.      | `db.usuarios.createIndex({ email: 1 })`             |
| **Compound**     | Índice en múltiples campos.   | `db.usuarios.createIndex({ nombre: 1, edad: -1 })`  |
| **Text**         | Búsqueda de texto.            | `db.posts.createIndex({ contenido: "text" })`       |
| **Geoespacial**  | Para ubicaciones y mapas.     | `db.tiendas.createIndex({ ubicacion: "2dsphere" })` |
| **Hashed**       | Para sharding basado en hash. | `db.usuarios.createIndex({ userId: "hashed" })`     |

### **7. Documentos embebidos vs Referencias**

#### Embebidos (Embedded):\*\*

- Toda la información está en el mismo documento.
- Más rápido para lecturas frecuentes.
- Ideal para datos que siempre se consultan juntos.

**Ejemplo:**

```json
{
  "nombre": "Ana",
  "direccion": {
    "calle": "Av. Siempre Viva",
    "ciudad": "Springfield"
  }
}
```

#### Referencias (Referencing):\*\*

- Documentos separados que se relacionan mediante un `ObjectId`.
- Útil cuando los datos cambian con frecuencia o se comparten entre colecciones.

**Ejemplo:**

```json
{
  "nombre": "Ana",
  "direccionId": ObjectId("64f83d2a8d9b4e7cbb123456")
}
```

### **8. Diferencia entre $set, $inc y $push**

| Operador  | Uso                                        | Ejemplo                                                                      |
| --------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| **$set**  | Actualiza el valor de un campo.            | `db.usuarios.updateOne({ nombre: "Ana" }, { $set: { edad: 30 } })`           |
| **$inc**  | Incrementa o decrementa un valor numérico. | `db.usuarios.updateOne({ nombre: "Ana" }, { $inc: { puntos: 5 } })`          |
| **$push** | Agrega un elemento a un arreglo.           | `db.usuarios.updateOne({ nombre: "Ana" }, { $push: { hobbies: "correr" } })` |

### **9. Schemas en MongoDB**

MongoDB es **schema-less** (sin esquema rígido), pero **se pueden definir esquemas opcionales** usando librerías como **Mongoose**.

#### Beneficios:

- Validación de datos.
- Estandarización.
- Prevención de errores.

#### Buenas prácticas:

- Mantener consistencia en los campos.
- Definir reglas claras para documentos.
- Usar validaciones al insertar datos.

### **10. Replica set**

Grupo de servidores que mantienen **copias sincronizadas** de los datos.

#### Funciones clave:

- Alta disponibilidad.
- Recuperación automática ante fallos (**failover**).

#### Funcionamiento:

1. Un **Primary** recibe todas las escrituras.
2. Los **Secondaries** replican los datos.
3. Si el Primary falla, uno de los Secondaries es elegido automáticamente como nuevo Primary.

---

## 🔴 Avanzado

### **11. Join entre colecciones con $lookup**

```js
db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "_id",
      as: "infoCliente",
    },
  },
]);
```

> Similar a un **LEFT JOIN** en SQL.

### **12. Estrategias de escalabilidad horizontal**

#### Sharding:

- Divide la base de datos en fragmentos distribuidos en varios servidores.
- Mejora el rendimiento con grandes volúmenes de datos.

#### Replica Sets:

- Multiplica copias de los datos para mejorar disponibilidad y tolerancia a fallos.

### **13. Transacciones en MongoDB**

- Permiten ejecutar múltiples operaciones **como una sola unidad atómica**.
- Útiles en operaciones financieras o multi-documento.

**Ejemplo básico:**

```js
const session = client.startSession();
session.startTransaction();

try {
  await db
    .collection("cuentas")
    .updateOne({ _id: 1 }, { $inc: { saldo: -100 } }, { session });

  await db
    .collection("cuentas")
    .updateOne({ _id: 2 }, { $inc: { saldo: 100 } }, { session });

  await session.commitTransaction();
} catch (e) {
  await session.abortTransaction();
}
```

### **14. Consulta optimizada para los 10 documentos más recientes**

#### Estrategia:

1. _Crear un índice en el campo `fecha`:_
   ```js
   db.posts.createIndex({ fecha: -1 });
   ```
2. _Consulta optimizada:_
   ```js
   db.posts.find().sort({ fecha: -1 }).limit(10);
   ```

Esto evita un **full collection scan** y utiliza el índice directamente.

### **15. Modelado de datos para red social**

**Colección `usuarios`:**

```json
{
  "_id": ObjectId("..."),
  "nombre": "Ana",
  "amigos": [ObjectId("..."), ObjectId("...")]
}
```

**Colección `posts`:**

```json
{
  "_id": ObjectId("..."),
  "usuarioId": ObjectId("..."),
  "contenido": "Mi primer post",
  "likes": [ObjectId("..."), ObjectId("...")]
}
```

#### Estrategia:

- **Amigos:**\
  Array embebido, porque suele consultarse junto al perfil.
- **Likes:**\
  Guardar solo los IDs para evitar duplicidad y mantener la consulta rápida.

[🔼 temas](#temas)

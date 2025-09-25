---
layout: layout-post.njk
title: Base de Datos
img: /img/portada/base_de_datos.avif
description: Almacén datos, consulta eficiente.
tags: ["blog", "bases_de_datos"]
date: "2024-08-01"
---

# {{title}}

![img]({{img}})

## 1. ¿Qué es {{title}}?

Una **base de datos** es un sistema que **almacena información de manera estructurada** para que pueda ser consultada, actualizada y administrada fácilmente.  
Su objetivo principal es **centralizar datos** y permitir que múltiples usuarios o sistemas accedan a ellos de forma **segura y coherente**.

> Ejemplo: Una tienda en línea utiliza una base de datos para guardar información de usuarios, productos, pedidos y pagos.

### 2. ¿Para qué se usa?

Las bases de datos se usan para **gestionar información crítica** en diferentes entornos.  
Son especialmente útiles cuando se requiere:

- **Almacenamiento centralizado y persistente** de datos.
- **Manejo de grandes volúmenes** de información.
- **Acceso concurrente** por varios usuarios o aplicaciones.
- **Seguridad y control de datos** mediante permisos y roles.
- **Integridad y consistencia** en los datos.

**Contextos comunes:**

- Aplicaciones web y móviles.
- Sistemas bancarios y financieros.
- Plataformas de e-commerce.
- Gestión hospitalaria y de pacientes.
- Sistemas de seguimiento y analítica de datos.
- Redes sociales y mensajería.

### 3. ¿Qué puedo construir con {{title}}?

Con bases de datos se pueden construir aplicaciones que **gestionen información dinámica**.  
Algunos ejemplos prácticos:

- **Gestión de usuarios:**\
  Registro, inicio de sesión y permisos.
- **Aplicaciones de ventas:**\
  Catálogo de productos y control de stock.
- **Plataformas de contenido:**\
  Blogs, foros y redes sociales.
- **Sistemas administrativos:**\
  Control de inventario y facturación.
- **Aplicaciones de analítica:**\
  Reportes y estadísticas en tiempo real.
- **Sistemas distribuidos:**\
  Aplicaciones que requieren sincronización entre múltiples servidores.

### 4. ¿Cuándo es más conveniente usarlo?

#### Es recomendable usar una base de datos cuando:

- Se necesita **persistencia de datos** más allá de la memoria temporal de una aplicación.
- Hay **muchos usuarios o procesos accediendo simultáneamente** a la información.
- Se requiere **escalabilidad** para manejar datos crecientes.
- La **integridad y consistencia** de la información es crítica.
- Se necesita **seguridad** y **gestión de permisos** para el acceso a los datos.

#### Alternativas que podrías considerar:

- **Archivos de texto o JSON:**\
  Útiles para datos simples y temporales.
- **Almacenamiento en memoria (ej. Redis):**\
  Para datos de rápido acceso pero no críticos.
- **APIs externas:**\
  Cuando no es necesario gestionar datos internamente.

> **Regla general:**  
> Si tu aplicación depende de datos que deben **perdurar y mantenerse organizados**, utiliza una base de datos.

## Buenas prácticas recomendadas

Para trabajar con bases de datos de forma eficiente y segura, se recomienda seguir estas **buenas prácticas**:

#### Diseño

- Planifica la **estructura de la base de datos** antes de implementarla.
- Utiliza **normalización** para evitar redundancia y mejorar la integridad.
- Define **relaciones claras** entre tablas o colecciones.

#### Seguridad

- Implementa **roles y permisos** para controlar el acceso.
- Nunca almacenes **contraseñas en texto plano**, usa _hashing_ seguro (ej. bcrypt).
- Protege la base de datos contra **inyecciones SQL o NoSQL** mediante consultas preparadas.

#### Rendimiento

- Usa **índices** en columnas o campos que se consulten con frecuencia.
- Optimiza las consultas para evitar operaciones costosas.
- Evita cargar datos innecesarios (usa `SELECT` con campos específicos).

#### Mantenimiento

- Crea **copias de seguridad** regularmente (_backups_).
- Documenta la estructura y las relaciones de la base de datos.
- Realiza **monitoreo y auditorías** para detectar problemas a tiempo.

#### Patrones de desarrollo

- **Repository Pattern:** Para separar la lógica de acceso a datos del resto de la aplicación.
- **Migration System:** Para llevar control de cambios en la estructura de la base de datos.
- **ORM (Object Relational Mapping):** Facilita la interacción entre el código y la base de datos.

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Manejo eficiente de grandes volúmenes de datos.
- Integridad y consistencia garantizadas.
- Acceso seguro y concurrente.
- Herramientas para respaldo y recuperación de información.
- Escalabilidad a medida que la aplicación crece.

#### ⚠️ Debilidades principales:

- Puede ser complejo de configurar y mantener.
- Requiere **planificación inicial sólida** para evitar problemas futuros.
- Consumo de recursos en servidores de alto tráfico.
- Necesita conocimientos técnicos para optimización avanzada.

#### 🛠️ Cuándo usarlo:

- Cuando los datos deben **persistir a largo plazo**.
- Si se necesita **multiusuario** con acceso simultáneo.
- Cuando la **seguridad y consistencia** son una prioridad.
- En aplicaciones que crecerán en volumen y complejidad.

#### 🚫 Cuándo evitarlo:

- Para **prototipos simples** que no requieren persistencia.
- Cuando se manejan **datos estáticos** que no cambian con frecuencia.
- En proyectos pequeños donde un archivo JSON o CSV es suficiente.

---

# Temas {#temas#}

- [inicio](#base-de-datos)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Antes de trabajar con bases de datos, es importante conocer ciertos conceptos que te permitirán comprender mejor su funcionamiento:

<!-- | **Concepto**                      | **Descripción**                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------ |
| **Dato**                          | Unidad mínima de información almacenada en la base de datos.                               |
| **Registro (Row)**                | Conjunto de datos relacionados que representan una entidad, como un usuario o un producto. |
| **Tabla (Table)**                 | Estructura que organiza registros en filas y columnas (modelo relacional).                 |
| **Campo (Column)**                | Atributo o propiedad de una tabla, como `nombre`, `precio` o `email`.                      |
| **Clave primaria (PK)**           | Identificador único para cada registro en una tabla.                                       |
| **Clave foránea (FK)**            | Campo que establece una relación entre dos tablas.                                         |
| **Relación**                      | Conexión lógica entre tablas para vincular datos.                                          |
| **Query (Consulta)**              | Instrucción para recuperar, insertar, actualizar o eliminar datos.                         |
| **Transacción**                   | Conjunto de operaciones que se ejecutan como una unidad, asegurando integridad de datos.   |
| **Normalización**                 | Proceso de organizar datos para evitar duplicidad y mejorar la consistencia.               |
| **Índice (Index)**                | Estructura que acelera la búsqueda y consulta de información.                              |
| **Backup**                        | Copia de seguridad de los datos para prevenir pérdidas.                                    |
| **Motor de Base de Datos (DBMS)** | Software que gestiona la base de datos, como MySQL, PostgreSQL o MongoDB.                  | -->

### Dato

Unidad mínima de información almacenada en la base de datos. |

### Registro (Row)

Conjunto de datos relacionados que representan una entidad, como un usuario o un producto. |

### Tabla (Table)

Estructura que organiza registros en filas y columnas (modelo relacional). |

### Campo (Column)

Atributo o propiedad de una tabla, como `nombre`, `precio` o `email`. |

### Clave primaria (PK)

Identificador único para cada registro en una tabla. |

### Clave foránea (FK)

Campo que establece una relación entre dos tablas. |

### Relación

Conexión lógica entre tablas para vincular datos. |

### Query (Consulta)

Instrucción para recuperar, insertar, actualizar o eliminar datos. |

### Transacción

Conjunto de operaciones que se ejecutan como una unidad, asegurando integridad de datos. |

### Normalización

Proceso de organizar datos para evitar duplicidad y mejorar la consistencia. |

### Índice (Index)

Estructura que acelera la búsqueda y consulta de información. |

### Backup

Copia de seguridad de los datos para prevenir pérdidas. |

### Motor de Base de Datos (DBMS

Software que gestiona la base de datos, como MySQL, PostgreSQL o MongoDB. |

[🔼 temas](#temas)

---

# Herramientas recomendadas

Estas son herramientas fundamentales para **desarrollar, administrar y optimizar** bases de datos. Se dividen según su uso:

### 1. Motores de Base de Datos (DBMS)

Son el corazón de la base de datos. Cada uno tiene características únicas.

| **Tipo**                  | **Ejemplos**               | **Uso principal**                             |
| ------------------------- | -------------------------- | --------------------------------------------- |
| **SQL (Relacional)**      | MySQL, PostgreSQL, MariaDB | Datos estructurados y relaciones complejas    |
| **NoSQL (No Relacional)** | MongoDB, Redis, Cassandra  | Datos flexibles, documentos, alto rendimiento |
| **En memoria**            | Redis, Memcached           | Caché y datos temporales de rápido acceso     |

### 2. Clientes y Consolas

Para interactuar directamente con la base de datos:

- **MySQL Workbench:**\
  Interfaz visual para MySQL/MariaDB.
- **pgAdmin:**\
  Cliente oficial para PostgreSQL.
- **MongoDB Compass:**\
  Cliente visual para MongoDB.
- **DBeaver:**\
  Cliente universal compatible con múltiples DBMS.
- **HeidiSQL:**\
  Cliente ligero para MySQL y PostgreSQL.
- **Terminal / CLI:**\
  Ideal para administración rápida y scripting.

### 3. Herramientas de Monitoreo y Optimización

Sirven para **analizar el rendimiento** y mantener la base de datos en buen estado.

- **Prometheus + Grafana:**\
  Métricas y visualización en tiempo real.
- **Percona Toolkit:**\
  Optimización y diagnósticos para MySQL y MariaDB.
- **New Relic:**\
  Supervisión del rendimiento.
- **Elastic Stack (ELK:)**\
  Análisis y visualización de logs.

### 4. Gestión de Migraciones y Modelado

Facilitan el control de cambios en la estructura de la base de datos:

- **Prisma:**\
  ORM moderno para Node.js.
- **Sequelize:**\
  ORM popular para Node.js con SQL.
- **Knex.js:**\
  Construcción de queries SQL en JavaScript.
- **Liquibase:**\
  Control de versiones y migraciones de bases de datos.
- **ERD Tools:**\
  Herramientas para diagramar bases de datos (dbdiagram.io, Draw.io).

### 5. Backup y Recuperación

Herramientas para copias de seguridad y restauración:

- `mysqldump` → Exportar bases de datos MySQL.
- `pg_dump` → Exportar bases de datos PostgreSQL.
- **MongoDB Atlas Backup:**\
  Copias automáticas en la nube.
- **Duplicati:**\
  Backups programados y cifrados.

### 6. Extensiones y Plugins para VSCode

Facilitan la integración del desarrollo con la base de datos:

- **SQLTools:**\
  Conexión directa a bases de datos SQL.
- **MongoDB for VSCode:**\
  Soporte oficial para MongoDB.
- **Database Client:**\
  Exploración y ejecución de queries.
- **Prisma Extension:**\
   Integración para trabajar con Prisma ORM.
  [🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos de código que se usan con frecuencia en proyectos de bases de datos:

### 1. Conexión a MySQL (Node.js con `mysql2`)

```js
import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mi_base",
});

console.log("Conectado a la base de datos");
```

### 2. Conexión a MongoDB (Node.js con `mongoose`)

```js
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/mi_base")
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((err) => console.error("Error de conexión", err));
```

### 3. Crear Modelo con Mongoose

```js
const Usuario = mongoose.model("Usuario", {
  nombre: String,
  email: { type: String, unique: true },
  activo: { type: Boolean, default: true },
});
```

### 4. Insertar Registro SQL

```sql
INSERT INTO usuarios (nombre, email)
VALUES ('Ana López', 'ana@example.com');
```

### 5. Consulta Básica con Filtro SQL

```sql
SELECT nombre, email FROM usuarios WHERE activo = 1;
```

### 6. Búsqueda de Documento en MongoDB

```js
const usuario = await Usuario.findOne({ email: "ana@example.com" });
console.log(usuario);
```

[🔼 temas](#temas)

---

# Comandos

Lista de comandos clave resumidos con ejemplos cortos.

### Gestión de Bases de Datos

```sql
CREATE DATABASE mi_base;   -- Crear base de datos
SHOW DATABASES;            -- Listar bases de datos
USE mi_base;               -- Seleccionar base de datos
DROP DATABASE mi_base;     -- Eliminar base de datos
```

### Tablas

```sql
CREATE TABLE productos (  -- Crear tabla
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100),
  precio DECIMAL(10,2)
);

SHOW TABLES;               -- Listar tablas
DESCRIBE productos;        -- Ver estructura de la tabla
DROP TABLE productos;      -- Eliminar tabla
```

### CRUD Básico (Create, Read, Update, Delete)

```sql
-- Crear
INSERT INTO productos (nombre, precio) VALUES ('Teclado', 50.00);

-- Leer
SELECT * FROM productos;
SELECT nombre, precio FROM productos WHERE precio > 20;

-- Actualizar
UPDATE productos SET precio = 45.00 WHERE id = 1;

-- Eliminar
DELETE FROM productos WHERE id = 1;
```

### Relaciones y Claves

```sql
ALTER TABLE pedidos
ADD FOREIGN KEY (producto_id) REFERENCES productos(id);  -- Clave foránea

CREATE INDEX idx_precio ON productos(precio);            -- Crear índice
DROP INDEX idx_precio ON productos;                      -- Eliminar índice
```

### Transacciones

```sql
START TRANSACTION;
UPDATE productos SET precio = precio - 5 WHERE id = 1;
UPDATE productos SET precio = precio + 5 WHERE id = 2;
COMMIT;   -- Confirmar cambios
ROLLBACK; -- Deshacer cambios
```

### Backup y Restauración

```bash
# Exportar base de datos MySQL
mysqldump -u root -p mi_base > backup.sql

# Importar base de datos MySQL
mysql -u root -p mi_base < backup.sql
```

### Comandos Básicos de MongoDB (CLI)

```bash
show dbs                     # Listar bases de datos
use mi_base                  # Seleccionar base
db.createCollection("users") # Crear colección
db.users.insertOne({nombre: "Ana", edad: 30})  # Insertar documento
db.users.find()              # Consultar documentos
db.users.updateOne({nombre: "Ana"}, {$set: {edad: 31}})  # Actualizar
db.users.deleteOne({nombre: "Ana"})  # Eliminar
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. Conceptos fundamentales

**Diferencia entre base de datos relacional y no relacional:**

#### Base de datos relacional (SQL):

- Organiza la información en **tablas con filas y columnas**.
- Usa **relaciones** (claves primarias y foráneas) para conectar datos.
- Ejemplo: MySQL, PostgreSQL, Oracle Database.

#### Base de datos no relacional (NoSQL):

- Almacena datos en formatos **flexibles**, como documentos, grafos o pares clave-valor.
- No requiere un esquema fijo.
- Ejemplo: MongoDB, Redis, Cassandra.

> **Resumen:**  
> SQL → Datos estructurados y relaciones complejas.  
> NoSQL → Datos flexibles y escalabilidad horizontal.

### 2. Normalización

La **normalización** es el proceso de **organizar datos** para minimizar la redundancia y mejorar la integridad.

**Formas normales:**

#### 1FN (Primera Forma Normal):

- Cada campo debe contener un **valor atómico** (sin listas o conjuntos).
- Ejemplo: En lugar de `telefonos: "123, 456"`, tener una tabla separada de teléfonos.

#### 2FN (Segunda Forma Normal):

- Cumple la 1FN y **todos los campos dependen de la clave primaria**.

#### 3FN (Tercera Forma Normal):

- Cumple la 2FN y **no tiene dependencias transitivas**, es decir, que un campo no dependa de otro campo no clave.

> **Importancia:**  
> Reduce redundancia, evita inconsistencias y mejora el rendimiento.

### 3. Tipos de relaciones

#### Uno a uno (1:1):

- Un registro en una tabla se relaciona con **solo un registro** en otra.
- _Ejemplo:_ Cada usuario tiene un único perfil.

```sql
usuarios.id = perfiles.usuario_id
```

#### Uno a muchos (1:N):

- Un registro en una tabla se relaciona con **varios registros** en otra.
- _Ejemplo:_ Un cliente puede tener varios pedidos.

```sql
clientes.id = pedidos.cliente_id
```

#### Muchos a muchos (N:M):

- Varios registros de una tabla se relacionan con **varios registros** de otra.
- _Ejemplo:_ Estudiantes y cursos (un estudiante puede inscribirse en muchos cursos y viceversa).  
  Se necesita una **tabla intermedia**:

```sql
estudiante_curso (estudiante_id, curso_id)
```

### 4. Tipos de datos (CHAR vs VARCHAR)

#### CHAR(n):

- Tamaño fijo.
- Si el dato es más corto, se rellena con espacios.
- **Uso:** Códigos de longitud fija como DNI, CUIL.

#### VARCHAR(n):

- Tamaño variable.
- Más eficiente para textos de longitud variable.
- **Uso:** Nombres, direcciones, correos electrónicos.

> **Regla general:**\
>  Usa `CHAR` para valores de longitud fija y `VARCHAR` para texto variable.

### 5. Consultas simples

**Consulta SQL:**

```sql
SELECT nombre, correo
FROM clientes
WHERE estado = 'Activo'
ORDER BY nombre ASC;
```

---

## 🟡 Intermedio

### 6. Índices

Un **índice** es una estructura que **acelera la búsqueda de datos** en una tabla, similar a un índice en un libro.

**Ventajas:**

- Mejora el rendimiento en consultas de lectura (`SELECT`).

**Desventajas:**

- Consume espacio adicional en disco.
- Puede **ralentizar operaciones de escritura** (`INSERT`, `UPDATE`, `DELETE`).

> **Consejo:**  
> Usa índices en columnas que se consulten frecuentemente, pero no abuses de ellos.

### 7. Transacciones y Propiedades ACID

Las **transacciones** son conjuntos de operaciones que se ejecutan como una sola unidad lógica.

**Propiedades ACID:**

- **A - Atomicidad:**\
  Todas las operaciones se completan o ninguna se aplica.
- **C - Consistencia:**\
  La base de datos pasa de un estado válido a otro.
- **I - Aislamiento:**\
  Las transacciones no interfieren entre sí.
- **D - Durabilidad:**\
  Los cambios persisten incluso ante fallas.

**Ejemplo en operación bancaria:**

- Transferencia de $100:
  1. Debitar $100 de la cuenta A.
  2. Acreditar $100 en la cuenta B.
  3. Si falla alguna operación, se **revierte todo**.

### 8. Joins

**Diferencias:**

- **INNER JOIN:**\
  Solo devuelve registros que existen en ambas tablas.
- **LEFT JOIN:**\
  Devuelve todos los registros de la tabla izquierda, aunque no haya coincidencias en la derecha.
- **RIGHT JOIN:**\
  Devuelve todos los registros de la tabla derecha, aunque no haya coincidencias en la izquierda.
- **FULL OUTER JOIN:**\
  Devuelve todos los registros de ambas tablas, coincidan o no.

**Consulta: Pedidos con clientes (incluyendo clientes faltantes):**

```sql
SELECT p.id_pedido, p.fecha, c.nombre
FROM pedidos p
LEFT JOIN clientes c ON p.cliente_id = c.id;
```

### 9. Consultas anidadas

**Empleados con salario superior al promedio:**

```sql
SELECT nombre
FROM empleados
WHERE salario > (SELECT AVG(salario) FROM empleados);
```

### 10. Modelado (Sistema de vuelos)

Criterios a considerar:

- **Entidades principales:**\
  vuelos, aviones, aeropuertos, pasajeros, reservas.
- **Relaciones:**
  - Un vuelo tiene un avión asignado (1:1).
  - Un vuelo puede tener múltiples reservas (1:N).
- **Integridad:**\
  Uso de claves primarias y foráneas.
- **Escalabilidad:**\
  Capacidad de crecer sin perder rendimiento.
- **Seguridad:**\
  Control de accesos y roles.
- **Normalización:**\
  Evitar redundancia en datos como aeropuertos o pasajeros.

---

## 🔴 Avanzado

### 11. Optimización de rendimiento

Pasos para diagnosticar un reporte lento:

1. **Analizar la consulta con `EXPLAIN`** para ver cómo se ejecuta.
2. Revisar si existen **índices adecuados**.
3. Verificar el **hardware y recursos disponibles**.
4. Reducir datos innecesarios (uso de `LIMIT`, paginación).
5. **Optimizar joins** y subconsultas.
6. Considerar **caché** o materialización de vistas.

### 12. Sharding vs Replicación

#### Sharding:

- Divide los datos en **múltiples servidores**.
- Mejora la **escalabilidad horizontal**.
- _Ejemplo:_ Distribuir usuarios según regiones: América en un servidor, Europa en otro.

#### Replicación:

- Copia exacta de la base de datos en diferentes servidores.
- Mejora **disponibilidad y tolerancia a fallos**.
- _Ejemplo:_ Tener un servidor principal y varios de solo lectura.

### 13. Integridad referencial

Garantiza que las relaciones entre tablas sean **coherentes**.

**Ejemplo: Clientes y Pedidos**

```sql
CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nombre VARCHAR(100)
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY,
  cliente_id INT,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

> Así, no se puede crear un pedido con un cliente inexistente.

### 14. Gestión de concurrencia

#### Problemas comunes:

- **Dirty read:**\
  Leer datos no confirmados por otra transacción.
- **Lost update:**\
  Dos transacciones sobrescriben cambios sin darse cuenta.

#### Estrategias:

- **Bloqueos (Locks):**\
  Exclusivos o compartidos para evitar conflictos.
- **Versionado (MVCC):**\
  Cada transacción ve una copia consistente de los datos.
- **Optimistic Locking:**\
  Se asume que no habrá conflictos y se validan antes de confirmar.

### 15. Migraciones y versiones

Buenas prácticas para manejar cambios en producción:

- Usar **sistemas de migraciones** (Prisma, Sequelize, Liquibase).
- Mantener los cambios en **archivos versionados** en Git.
- Probar migraciones en un **entorno de staging** antes de producción.
- Realizar **backups** antes de aplicar cambios.
- Documentar cada modificación estructural.

> **Regla de oro:** Nunca modificar una base de datos en producción sin respaldo y sin pruebas previas.

[🔼 temas](#temas)

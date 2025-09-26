---
layout: layout-post.njk
title: MySQL
img: /img/portada/mysql.avif
description: Base de datos relacional, consultas SQL.
tags: ["blog", "bases_de_datos"]
date: "2024-08-02"
---

# {{title}}

![img]({{img}})

## ¿Qué es {{title}}?

**MySQL** es un RDBMS **open source** que utiliza el **lenguaje SQL (Structured Query Language)** para gestionar y manipular datos.  
Se destaca por su **velocidad, estabilidad y facilidad de uso**, lo que lo convierte en una opción sólida tanto para proyectos pequeños como para aplicaciones empresariales.

#### Diferencias clave frente a otros sistemas:

- **MySQL vs PostgreSQL**
  - MySQL suele ser más rápido en **lecturas y consultas simples**.
  - PostgreSQL es mejor para **consultas complejas y estructuras avanzadas**.
- **MySQL vs MongoDB (NoSQL)**
  - MySQL organiza datos en **tablas y relaciones**, ideal para datos estructurados.
  - MongoDB usa **documentos JSON**, más flexible para datos no estructurados.
- **MySQL vs SQLite**
  - MySQL está orientado a **aplicaciones web y multiusuario**.
  - SQLite es más simple y usado en **apps locales o móviles**.

### 2. ¿Para qué se usa?

MySQL se utiliza principalmente para **almacenar, organizar y gestionar datos estructurados**.  
Es especialmente útil en proyectos donde la **integridad de datos y las relaciones entre ellos son fundamentales**.

**Contextos ideales:**

- Sitios web con contenido dinámico (blogs, foros, tiendas online).
- Aplicaciones empresariales que requieren datos consistentes.
- Sistemas con **alta concurrencia de usuarios**.
- Proyectos con **integridad referencial** (relaciones claras entre entidades).

### 3. ¿Qué puedo construir con {{title}}?

#### Con MySQL puedes desarrollar una amplia variedad de soluciones, tales como:

- **Sistemas de gestión de usuarios:**\
  registro, login y control de roles.
- **E-commerce:**\
  catálogos de productos, carritos de compra y órdenes.
- **Sistemas de reservas:**\
  hoteles, vuelos, turnos médicos, etc.
- **Gestión de contenidos:**\
  blogs, portales de noticias o sitios corporativos.
- **Aplicaciones SaaS:**\
  paneles de administración y sistemas de seguimiento.

> 💡 _MySQL es la base de datos detrás de plataformas como WordPress, Shopify y Facebook (en sus inicios)._

### 4. ¿Cuándo es más conveniente usarlo?

**MySQL es más conveniente cuando:**

- El proyecto requiere **alta confiabilidad e integridad de datos**.
- Necesitas **consultas rápidas y optimizadas**.
- Trabajas con **relaciones claras entre entidades**.
- El equipo está familiarizado con **SQL**.
- El proyecto crecerá a mediano o gran escala.

**Alternativas que podrían ser mejores:**

- **MongoDB:**\
  cuando los datos son muy **flexibles y no estructurados**.
- **PostgreSQL:**\
  para **consultas complejas** y datos muy relacionados.
- **SQLite:**\
  en **aplicaciones locales o prototipos**.

## Buenas prácticas recomendadas

Para escribir buen código en MySQL y mantener una base de datos escalable y segura, sigue estas recomendaciones:

#### Diseño y estructura

- Normaliza tus tablas hasta al menos la **3ª forma normal (3NF)**.
- Usa **nombres descriptivos** para tablas y columnas.
- Define **tipos de datos adecuados** (ejemplo: `INT` para IDs, `VARCHAR` para textos cortos).

#### Rendimiento

- Usa **índices** en columnas que se consulten frecuentemente.
- Evita el uso excesivo de `SELECT *`, especifica solo las columnas necesarias.
- Optimiza las consultas con **joins eficientes** y filtros adecuados.

#### Seguridad

- Nunca almacenes contraseñas sin **hashing seguro** (`bcrypt` o similar).
- Usa **usuarios y roles** con permisos limitados.
- Evita la inyección SQL utilizando **consultas preparadas**.

#### Mantenimiento

- Realiza **respaldos periódicos** (`mysqldump`).
- Monitorea el **rendimiento y uso de recursos**.
- Documenta la base de datos y su esquema.

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Rápido, estable y ampliamente soportado.
- Ideal para datos estructurados y relaciones complejas.
- Gran comunidad y abundante documentación.

#### ⚠️ Debilidades principales:

- Menos flexible que bases NoSQL como MongoDB.
- No tan avanzado como PostgreSQL en consultas complejas.
- Puede requerir optimización manual en proyectos grandes.

#### 🛠️ Cuándo usarlo:

- Sitios web dinámicos.
- Aplicaciones empresariales con datos consistentes.
- Sistemas que requieran integridad referencial.

#### 🚫 Cuándo evitarlo:

- Proyectos con datos no estructurados.
- Aplicaciones muy pequeñas o locales (SQLite es más simple).
- Cuando necesitas funcionalidades avanzadas de PostgreSQL.

---

# Temas {#temas#}

- [inicio](#que-es-mysql)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Snippets rápidos](#snippets-rapidos)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de comenzar a trabajar con MySQL, es importante familiarizarse con ciertos conceptos fundamentales que facilitarán el diseño y manejo de bases de datos.

### **1. Base de Datos (Database)**

Un contenedor que organiza y almacena datos relacionados.  
Ejemplo: una base de datos para un e-commerce podría contener tablas como `usuarios`, `productos` y `pedidos`.

### **2. Tabla (Table)**

Estructura que almacena datos en **filas (rows)** y **columnas (columns)**.  
Cada fila es un registro y cada columna representa un atributo.

> _Ejemplo: una tabla `usuarios` con columnas como `id`, `nombre`, `email`._

### **3. Fila (Row) / Registro (Record)**

Representa una entrada individual de datos dentro de una tabla.

> Ejemplo en tabla `usuarios`:
>
> ```
> id | nombre  | email
> 1  | Ana     | ana@email.com
> ```

### **4. Columna (Column) / Campo (Field)**

Representa un tipo de dato específico en la tabla.

> Ejemplo: la columna `email` en la tabla `usuarios` almacena direcciones de correo.

### **5. Llave Primaria (Primary Key)**

Columna o conjunto de columnas que **identifican de forma única** a cada registro en una tabla.  
Generalmente se llama `id`.

> _Ejemplo: `id` en la tabla `usuarios`._

### **6. Llave Foránea (Foreign Key)**

Columna que **establece una relación** con una clave primaria en otra tabla.

> Ejemplo:
>
> - Tabla `pedidos` tiene `usuario_id` que se relaciona con `id` de la tabla `usuarios`.

### **7. Tipos de Datos**

Definen el tipo de valor que se puede almacenar en una columna. Algunos tipos comunes en MySQL:

- **Numéricos:** `INT`, `FLOAT`, `DECIMAL`
- **Texto:** `CHAR`, `VARCHAR`, `TEXT`
- **Fecha y hora:** `DATE`, `DATETIME`, `TIMESTAMP`
- **Booleanos:** `BOOLEAN` (`TRUE` o `FALSE`)

### **8. Consultas SQL (Queries)**

Instrucciones para interactuar con la base de datos.  
Los principales tipos son:

- **DDL (Data Definition Language):** definir y estructurar datos.  
  Ejemplo: `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`.

- **DML (Data Manipulation Language):** manipular datos.  
  Ejemplo: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.

- **DCL (Data Control Language):** permisos y control de acceso.  
  Ejemplo: `GRANT`, `REVOKE`.

### **9. Índices (Indexes)**

Estructuras que **mejoran la velocidad de búsqueda** en una tabla, similar a un índice en un libro.

> _Se recomienda crear índices en columnas que se consulten frecuentemente._

### **10. Joins**

Combinan datos de varias tablas basadas en una relación común:

- **INNER JOIN:** devuelve coincidencias exactas.
- **LEFT JOIN:** devuelve todos los registros de la tabla izquierda y coincidencias de la derecha.
- **RIGHT JOIN:** inverso del LEFT JOIN.
- **FULL JOIN:** devuelve todos los registros de ambas tablas (no soportado directamente en MySQL).
  [🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar de forma eficiente con MySQL, estas son las herramientas clave que deberías conocer:

### **1. MySQL Workbench** _(Oficial)_

- Herramienta gráfica oficial de MySQL.
- Ideal para diseñar, administrar y ejecutar consultas visualmente.
- Incluye funciones para modelado de datos.

> 🔗 [Descargar MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

### **2. phpMyAdmin**

- Interfaz web para gestionar bases de datos MySQL.
- Muy usada en entornos de hosting compartido y desarrollo web.
- Requiere un servidor web como **Apache o Nginx**.

> 🔗 [Sitio oficial phpMyAdmin](https://www.phpmyadmin.net/)

### **3. DBeaver**

- Cliente universal para bases de datos.
- Compatible con MySQL y otros motores como PostgreSQL y MongoDB.
- Interfaz amigable con muchas opciones de productividad.

> 🔗 [Descargar DBeaver](https://dbeaver.io/)

### **4. CLI - MySQL Command Line Client**

- Herramienta en terminal para ejecutar comandos SQL directamente.
- Perfecta para administración avanzada y scripts automatizados.

> Ejemplo:
>
> ```bash
> mysql -u root -p
> ```

### **5. VS Code + Extensiones SQL**

#### Usar Visual Studio Code con extensiones de SQL permite:

- Resaltar sintaxis SQL.
- Autocompletado.
- Ejecución directa de consultas conectadas a la base.

#### Extensiones recomendadas:

- _SQLTools_
- _MySQL Syntax Highlighting_

### **6. Docker**

- Ideal para levantar un **entorno aislado** de MySQL sin instalarlo en tu máquina.
- Facilita la creación de entornos reproducibles para desarrollo y testing.

> Ejemplo rápido:
>
> ```bash
> docker run --name mysql-dev -e MYSQL_ROOT_PASSWORD=1234 -p 3306:3306 -d mysql:latest
> ```

### **Resumen de Herramientas**

| Herramienta       | Tipo             | Uso Principal                                |
| ----------------- | ---------------- | -------------------------------------------- |
| MySQL Workbench   | Gráfica Oficial  | Administración y modelado visual             |
| phpMyAdmin        | Web              | Gestión en entornos web y hosting            |
| DBeaver           | Escritorio       | Multi-base de datos y visualización avanzada |
| CLI MySQL         | Terminal         | Administración avanzada y scripting          |
| VS Code + Plugins | Editor de código | Consultas y edición de scripts SQL           |
| Docker            | Virtualización   | Entornos de desarrollo aislados              |

[🔼 temas](#temas)

---

# Snippets rápidos

Fragmentos que se utilizan frecuentemente en el desarrollo con MySQL.

### **1. Crear Base de Datos y Usarla**

```sql
CREATE DATABASE tienda;
USE tienda;
```

### **2. Crear Tabla con Clave Primaria**

```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  email VARCHAR(100) UNIQUE
);
```

### **3. Insertar Datos**

```sql
INSERT INTO usuarios (nombre, email)
VALUES ('Ana Pérez', 'ana@email.com');
```

### **4. Consultar Datos**

```sql
SELECT * FROM usuarios;           -- Todos los registros
SELECT nombre, email FROM usuarios; -- Columnas específicas
SELECT * FROM usuarios WHERE id = 1;
```

### **5. Actualizar Datos**

```sql
UPDATE usuarios SET nombre = 'Ana Gómez'
WHERE id = 1;
```

### **6. Eliminar Datos**

```sql
DELETE FROM usuarios WHERE id = 1;
```

### **7. Crear Índice**

```sql
CREATE INDEX idx_email ON usuarios(email);
```

### **8. Relaciones entre Tablas (FK)**

```sql
CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  fecha DATETIME,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

### **9. Join Básico**

```sql
SELECT usuarios.nombre, pedidos.fecha
FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.usuario_id;
```

### **10. Respaldo y Restauración**

```bash
mysqldump -u root -p tienda > backup.sql    # Crear respaldo
mysql -u root -p tienda < backup.sql        # Restaurar respaldo
```

[🔼 temas](#temas)

---

# Comandos

Resumen de comandos clave con ejemplos **cortos y directos**.

| Comando / Acción           | Ejemplo                                             | Descripción                        |
| -------------------------- | --------------------------------------------------- | ---------------------------------- |
| **Crear base de datos**    | `CREATE DATABASE tienda;`                           | Crea una nueva base de datos.      |
| **Usar base de datos**     | `USE tienda;`                                       | Selecciona la base activa.         |
| **Crear tabla**            | `CREATE TABLE productos (...);`                     | Define una nueva tabla.            |
| **Insertar datos**         | `INSERT INTO productos VALUES (...);`               | Agrega un nuevo registro.          |
| **Consultar datos**        | `SELECT * FROM productos;`                          | Lee datos de una tabla.            |
| **Filtrar datos**          | `SELECT * FROM productos WHERE stock > 0;`          | Filtra resultados con condición.   |
| **Actualizar datos**       | `UPDATE productos SET stock = 20 WHERE id=1;`       | Modifica registros existentes.     |
| **Eliminar datos**         | `DELETE FROM productos WHERE id=1;`                 | Borra registros de la tabla.       |
| **Crear índice**           | `CREATE INDEX idx_nombre ON productos(nombre);`     | Mejora la búsqueda en una columna. |
| **Agregar FK**             | `FOREIGN KEY (usuario_id) REFERENCES usuarios(id);` | Crea relación entre tablas.        |
| **Join**                   | `SELECT ... FROM A INNER JOIN B ON ...;`            | Une datos de varias tablas.        |
| **Eliminar tabla**         | `DROP TABLE productos;`                             | Borra una tabla completa.          |
| **Eliminar base de datos** | `DROP DATABASE tienda;`                             | Borra la base de datos.            |

## 🚀 Mini Cheat Sheet Visual

```sql
-- Base de datos
CREATE DATABASE nombre;   -- Crear base
USE nombre;               -- Seleccionar base
DROP DATABASE nombre;     -- Eliminar base

-- Tablas
CREATE TABLE tabla (...); -- Crear tabla
ALTER TABLE tabla ...;    -- Modificar tabla
DROP TABLE tabla;         -- Eliminar tabla

-- CRUD
INSERT INTO tabla (...) VALUES (...);   -- Crear
SELECT * FROM tabla;                    -- Leer
UPDATE tabla SET columna=valor WHERE id=1; -- Actualizar
DELETE FROM tabla WHERE id=1;           -- Eliminar

-- Relaciones
FOREIGN KEY (columna) REFERENCES otra_tabla(id);

-- Consultas avanzadas
SELECT columna FROM tabla WHERE condicion;   -- Filtro
SELECT columna, COUNT(*) FROM tabla GROUP BY columna; -- Agrupar
SELECT * FROM A INNER JOIN B ON A.id = B.a_id; -- Joins
```

> 💡 _Consejo:_ Usa `LIMIT` para limitar resultados:
>
> ```sql
> SELECT * FROM usuarios LIMIT 5;
> ```
>
> [🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. Diferencia entre DELETE, TRUNCATE y DROP

- **DELETE:**\
  Elimina filas específicas de una tabla usando una condición `WHERE`. Mantiene la estructura y permite deshacer la operación si está dentro de una transacción.  
  _Uso:_ Cuando necesitas borrar datos específicos.

  ```sql
  DELETE FROM usuarios WHERE id = 1;
  ```

- **TRUNCATE:**\
  Elimina _todos los registros_ de una tabla de forma rápida y resetea el contador de auto incremento. No se puede usar con `WHERE`.
  _Uso:_ Cuando quieres limpiar completamente una tabla, pero mantener su estructura.

  ```sql
  TRUNCATE TABLE usuarios;
  ```

- **DROP:**\
  Elimina por completo una tabla, incluyendo su estructura y datos.
  _Uso:_ Cuando ya no necesitas la tabla ni sus datos.
  ```sql
  DROP TABLE usuarios;
  ```

### 2. Clave primaria (PRIMARY KEY) vs clave foránea (FOREIGN KEY)

- **PRIMARY KEY:**\
  Identifica de manera única cada registro en una tabla. No permite valores duplicados ni nulos.
- **FOREIGN KEY:**\
  Establece una relación entre dos tablas, garantizando la integridad referencial.

```sql
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(50)
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY,
  usuario_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

### 3. Diferencia entre VARCHAR y CHAR

- **CHAR(n):**\
  Guarda cadenas con longitud fija. Completa con espacios si el valor es más corto.  
  _Uso:_ Ideal para campos con longitud constante (códigos, abreviaturas).

- **VARCHAR(n):**\
  Guarda cadenas con longitud variable. Solo utiliza el espacio necesario.  
  _Uso:_ Ideal para campos como nombres, correos o direcciones.

| Tipo        | Tamaño fijo | Tamaño variable |
| ----------- | ----------- | --------------- |
| **CHAR**    | Sí          | No              |
| **VARCHAR** | No          | Sí              |

### 4. Diferencia entre WHERE y HAVING

- **WHERE:**\
  Filtra filas antes de agrupar los datos (`GROUP BY`).
- **HAVING:**\
  Filtra resultados _después_ de aplicar funciones de agregación.

**Ejemplo:**

```sql
-- Mostrar productos con stock promedio mayor a 50
SELECT categoria, AVG(stock) AS promedio_stock
FROM productos
GROUP BY categoria
HAVING promedio_stock > 50;
```

### 5. Función del JOIN en SQL

`JOIN` combina datos de varias tablas basándose en una relación.

Tipos más comunes:

- **INNER JOIN:**\
  Devuelve solo registros coincidentes en ambas tablas.
- **LEFT JOIN:**\
  Devuelve todos los registros de la tabla izquierda y los coincidentes de la derecha.
- **RIGHT JOIN:**\
  Igual que LEFT pero en sentido opuesto.
- **FULL JOIN:**\
  Devuelve todos los registros coincidentes o no (no soportado nativamente en MySQL).

```sql
SELECT u.nombre, p.fecha
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;
```

---

## 🟡 Intermedio

### 6. Índices en MySQL

- **Definición:**\
  Estructuras que optimizan la búsqueda de datos.
- **Beneficio:**\
  Aceleran las consultas `SELECT` y búsquedas con `WHERE`.
- **Desventaja:**\
  Ocupan espacio y pueden ralentizar `INSERT`, `UPDATE` y `DELETE`.

```sql
CREATE INDEX idx_email ON usuarios(email);
```

### 7. Diferencia entre InnoDB y MyISAM

| Característica                  | **InnoDB** | **MyISAM** |
| ------------------------------- | ---------- | ---------- |
| **Transacciones**               | Sí         | No         |
| **Integridad referencial (FK)** | Sí         | No         |
| **Bloqueo**                     | Por fila   | Por tabla  |
| **Velocidad en lecturas**       | Media      | Alta       |

_Elección recomendada:_ **InnoDB**, especialmente en aplicaciones web con muchas operaciones simultáneas.

### 8. Transacciones ACID

- **ACID:**
  - Atomicidad, Consistencia, Aislamiento y Durabilidad.
  - Garantizan que las operaciones en la base de datos sean **seguras y confiables**.

```sql
START TRANSACTION;
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
COMMIT; -- o ROLLBACK si algo falla
```

### 9. Stored Procedure

- **Definición:**\
  Bloque de SQL almacenado en la base para reutilización.
- **Uso:**\
  Automatizar procesos repetitivos o complejos.

```sql
DELIMITER //
CREATE PROCEDURE obtenerUsuarios()
BEGIN
  SELECT * FROM usuarios;
END //
DELIMITER ;
```

### 10. Normalización de Bases de Datos

Proceso para **organizar datos** y evitar redundancia.

- **1FN:**\
  Cada campo debe contener solo valores atómicos.
- **2FN:**\
  Cada campo debe depender completamente de la clave primaria.
- **3FN:**\
  Elimina dependencias transitivas.

**Importancia:** Mejora la integridad y eficiencia de la base.

---

## 🔴 Avanzado

### 11. Subconsulta correlacionada vs subconsulta normal

- **Subconsulta normal:**\
  Se ejecuta una sola vez antes de la consulta principal.
- **Subconsulta correlacionada:**\
  Se ejecuta para cada fila procesada por la consulta externa.

**Ejemplo correlacionada:**

```sql
SELECT nombre
FROM usuarios u
WHERE saldo > (SELECT AVG(saldo) FROM cuentas c WHERE c.usuario_id = u.id);
```

### 12. Replicación en MySQL

Proceso de copiar datos de un servidor a otro.

#### Tipos de replicación:

- **Maestro-Esclavo:** Copia unidireccional.
- **Maestro-Maestro:** Copia bidireccional.
- **Basada en GTID:** Más moderna y confiable.

**Uso:** Balanceo de carga, copias de seguridad en tiempo real.

### 13. Control de concurrencia

Permite que múltiples usuarios accedan a la base **sin conflictos**.

#### Problemas comunes:

- _Dirty Reads_
- _Lost Updates_
- _Deadlocks_

**Solución en MySQL:** Bloqueos por fila (InnoDB) y niveles de aislamiento.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

### 14. Particionamiento de datos

Divide una tabla grande en **partes más pequeñas** para mejorar rendimiento.

- **Beneficios:**\
  Consultas más rápidas y administración más sencilla.
- **Desventajas:**\
  Mayor complejidad en el diseño.

```sql
CREATE TABLE ventas (
  id INT,
  fecha DATE
)
PARTITION BY RANGE (YEAR(fecha)) (
  PARTITION p2023 VALUES LESS THAN (2024),
  PARTITION p2024 VALUES LESS THAN (2025)
);
```

### 15. Trigger en MySQL

Bloque de código que se ejecuta **automáticamente** ante eventos `INSERT`, `UPDATE` o `DELETE`.

**Ejemplo: Registro automático en tabla de auditoría**

```sql
CREATE TRIGGER registro_insert
AFTER INSERT ON usuarios
FOR EACH ROW
INSERT INTO auditoria (usuario_id, accion, fecha)
VALUES (NEW.id, 'INSERT', NOW());
```

[🔼 temas](#temas)

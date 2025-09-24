---
layout: layout-post.njk
title: Terminal Bash
img: /img/portada/terminal-bash.avif
description: Línea comandos, administración sistema.
tags: ["blog", "herramientas"]
date: "2024-05-01"
---

# {{title}}

![img]({{img}})

## 1. ¿Qué es {{title}}?

**Bash (Bourne Again SHell)** es un **intérprete de comandos** que se ejecuta en una terminal.

#### Se diferencia de otros terminales porque:

- Es **estándar en sistemas Unix/Linux** y también funciona en macOS y Windows (mediante WSL o Git Bash).
- Permite **automatizar tareas** mediante scripts.
- Su sintaxis es **simple y directa**, enfocada en eficiencia y rapidez.
- Es altamente **personalizable** mediante variables, alias y configuraciones.

> En resumen, Bash no es solo un lugar para escribir comandos, sino también un **lenguaje de scripting**.

### 2. ¿Para qué se usa?

Bash se utiliza para **administrar, automatizar y ejecutar procesos en el sistema operativo**.

#### Algunos contextos ideales:

- **Desarrollo de software**: ejecutar scripts de despliegue, gestionar dependencias y entornos.
- **DevOps y servidores**: automatizar configuraciones y despliegues en la nube.
- **Manejo de archivos y directorios**: copiar, mover, comprimir y buscar archivos de forma eficiente.
- **Procesamiento de datos**: manipular logs, filtrar información y realizar tareas repetitivas.
- **Educación y aprendizaje**: entender cómo funcionan los sistemas operativos a bajo nivel.
  ### 3. ¿Qué puedo construir con {{title}}?

Con Bash puedes **crear herramientas y automatizaciones** para mejorar la productividad.

#### Ejemplos:

- Scripts para **automatizar tareas repetitivas** (backups, limpieza de archivos, actualizaciones).
- **Pipelines de datos** usando comandos como `grep`, `awk`, `sed`.
- Pequeños **programas CLI** (Command Line Interface).
- Flujos de **despliegue continuo (CI/CD)** para proyectos.
- Utilidades personalizadas para **trabajar con proyectos en Git**, Docker, Node.js, etc.
  ### 4. ¿Cuándo es más conveniente usarlo?

#### Usa Bash cuando:

- Necesitas **automatizar tareas rápidas** sin instalar herramientas externas.
- Trabajas en **entornos Linux/Unix**, donde Bash es nativo.
- Quieres **control total** sobre procesos y archivos.
- Requieres **procesamiento de texto** con herramientas integradas (`cat`, `grep`, `awk`, `sed`).
- Buscas **integración con otros programas** y comandos de sistema.

#### No es la mejor opción cuando:

- Necesitas **interfaces gráficas** o aplicaciones complejas.
- El proyecto requiere **mucha lógica avanzada** (en ese caso, lenguajes como Python o Node.js son más adecuados).
  ## Buenas prácticas recomendadas

Escribir scripts en Bash requiere **orden y claridad**. Algunas recomendaciones:

- **Usar comentarios** para explicar secciones del script:
  ```bash
  # Este script limpia archivos temporales
  rm -rf /tmp/*
  ```
- Validar entradas y salidas para evitar errores inesperados.
- Utilizar variables descriptivas:

  ```bash
  LOG_DIR="/var/log/mi_app"
  ```

- Controlar errores con if, &&, || o set -e:

```bash
cp archivo.txt respaldo/ && echo "Copia exitosa"
```

- Evitar escribir comandos largos en una sola línea, usar pipes (|) y funciones.
- Mantener scripts modulares y reutilizables.

---

## Resumen rápido

#### Fortalezas principales:

- Ligero y rápido, sin depender de interfaces gráficas.
- Integración directa con el sistema operativo.
- Potente para automatización y scripting.
- Compatible con la mayoría de sistemas Unix/Linux y Windows (WSL).

#### Debilidades principales:

- Curva de aprendizaje inicial moderada.
- Sintaxis menos amigable comparada con otros lenguajes.
- Limitado para proyectos con lógica compleja o estructuras avanzadas.

#### Cuándo usarlo:

-Tareas repetitivas y automatización.

- Administración de servidores y entornos de desarrollo.
- Procesamiento rápido de texto y archivos.
- Integración con herramientas como Git, Docker o Node.js.

#### Cuándo evitarlo:

- Aplicaciones con interfaces gráficas.
- Sistemas que requieren cálculos complejos o programación orientada a objetos.
- Proyectos donde la legibilidad del código sea prioritaria.

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

Antes de usar Bash de forma efectiva, es importante comprender algunos conceptos esenciales:

### Shell:

Programa que interpreta los comandos que escribes en la terminal. Bash es un tipo de shell.

### Comando:

Instrucción que le das al sistema operativo a través de la terminal (`ls`, `cd`, `rm`, etc.).

### Script:

Archivo de texto con una serie de comandos que Bash ejecuta de forma secuencial.

### Path / Ruta:

Ubicación de un archivo o directorio dentro del sistema de archivos.

### Variables:

Almacenan información que puedes reutilizar dentro de scripts (`USER="Fernando"`).

### Alias:

Atajo para comandos largos o frecuentes (`alias ll="ls -la"`).

### Permisos de archivos:

Controlan quién puede leer, escribir o ejecutar un archivo (`chmod`, `chown`).

### Pipes (`|`):

Permiten encadenar la salida de un comando a la entrada de otro (`cat archivo.txt | grep "error"`).

### Redirecciones:

Envían la salida de comandos a archivos o toman entrada desde archivos (`>`, `>>`, `<`).

### Funciones:

Bloques de código reutilizables dentro de scripts.

### Procesos y jobs:

Programas que se ejecutan en el sistema; se pueden controlar con `ps`, `kill`, `bg`, `fg`.

### Comodines / Wildcards:

Símbolos que representan uno o varios caracteres (`*`, `?`) en nombres de archivos.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Para trabajar de manera eficiente con Bash, estas herramientas son fundamentales:

### Git:

Control de versiones desde la terminal (`git clone`, `git commit`).

### grep:

Buscar texto dentro de archivos (`grep "texto" archivo.txt`).

### awk:

Procesamiento y análisis de texto en columnas.

### sed:

Edición de texto desde la línea de comandos.

### curl / wget:

Descargar archivos y datos desde URLs.

### tar / zip / unzip:

Comprimir y descomprimir archivos y carpetas.

### nano / vim / vi:

Editores de texto integrados para scripts.

### htop / top:

Monitoreo de procesos en tiempo real.

### chmod / chown:

Cambiar permisos y propietarios de archivos.

### ssh:

Conexión remota a otros sistemas.

### tmux / screen:

Multiplexores de terminal para sesiones persistentes.

### alias y functions:

Personalización y optimización de comandos repetitivos.

### history:

Ver el historial de comandos ejecutados.

### find:

Buscar archivos y directorios según criterios específicos.

> Estas herramientas permiten **maximizar la eficiencia en la línea de comandos**, automatizar tareas y trabajar en entornos de desarrollo y administración de sistemas de forma profesional.

[🔼 temas](#temas)

---

# Snippets rápidos

#### Algunos fragmentos de código útiles que se usan frecuentemente:

```bash
# Crear un directorio y moverse a él
mkdir proyecto && cd proyecto

# Copiar archivos a otra carpeta
cp archivo.txt /ruta/destino/

# Mover o renombrar archivos
mv archivo.txt /ruta/destino/nuevo_nombre.txt

# Eliminar archivos o carpetas
rm archivo.txt
rm -rf carpeta/

# Listar archivos y carpetas
ls
ls -la        # Mostrar todos los archivos, incluidos ocultos, con detalles

# Buscar texto dentro de archivos
grep "texto" archivo.txt

# Redireccionar salida a un archivo
echo "Hola mundo" > archivo.txt        # Crear o sobrescribir
echo "Hola otra vez" >> archivo.txt    # Agregar al final

# Variables
NOMBRE="Fernando"
echo "Hola $NOMBRE"

# Función simple
saludo() {
    echo "Hola $1"
}
saludo Fernando

# Ejecutar un script
bash script.sh
```

[🔼 temas](#temas)

---

# Comandos

| Comando   | Función               | Ejemplo                        |
| --------- | --------------------- | ------------------------------ |
| `cd`      | Cambiar de directorio | `cd /home/user/proyecto`       |
| `pwd`     | Mostrar ruta actual   | `pwd`                          |
| `ls`      | Listar archivos       | `ls -la`                       |
| `mkdir`   | Crear directorio      | `mkdir nueva_carpeta`          |
| `rm`      | Eliminar archivos     | `rm archivo.txt`               |
| `cp`      | Copiar archivos       | `cp origen.txt destino.txt`    |
| `mv`      | Mover o renombrar     | `mv viejo.txt nuevo.txt`       |
| `touch`   | Crear archivo vacío   | `touch archivo.txt`            |
| `cat`     | Mostrar contenido     | `cat archivo.txt`              |
| `echo`    | Mostrar texto         | `echo "Hola mundo"`            |
| `grep`    | Buscar texto          | `grep "error" archivo.log`     |
| `chmod`   | Cambiar permisos      | `chmod +x script.sh`           |
| `chown`   | Cambiar propietario   | `chown user:grupo archivo.txt` |
| `history` | Ver historial         | `history`                      |
| `alias`   | Crear atajos          | `alias ll='ls -la'`            |

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Nivel Básico

### 1. Comandos esenciales

- **`ls`**: Lista los archivos y carpetas del directorio actual.
- **`ls -l`**: Lista con detalles como permisos, propietario, tamaño y fecha.
- **`ls -a`**: Lista todos los archivos, incluidos los ocultos (que comienzan con `.`).  
  **Uso:**
- `ls` para ver rápidamente contenido.
- `ls -l` para inspeccionar propiedades de archivos.
- `ls -a` para mostrar archivos ocultos de configuración.

---

### 2. Directorios

- **Rutas relativas**: Dependen del directorio actual (`./carpeta/archivo.txt`).
- **Rutas absolutas**: Parten desde la raíz `/` (`/home/user/carpeta/archivo.txt`).

**Ejemplo:**

```bash
cd ./documentos          # Relativa
cd /home/usuario/documentos  # Absoluta
```

---

### 3. Permisos de archivos

- **Salida de `ls -l`:**

```
-rw-r--r-- 1 user grupo 1234 sep 22 archivo.txt
```

- \***\*`-`:\*\*** tipo de archivo (`-` archivo, `d` directorio)
- \***\*`rw-`:\*\*** permisos del propietario (lectura y escritura)
- \***\*`r--`:\*\*** permisos del grupo (solo lectura)
- \***\*`r--`:\*\*** permisos de otros (solo lectura)
- Cambiar permisos para que solo el propietario pueda leer y escribir:

```bash
chmod 600 archivo.txt
```

---

### 4. Redirección de salida

- **`>:`** sobrescribe un archivo con la salida.
- **`>>:`** agrega la salida al final de un archivo.
- **`2>:`** redirige errores a un archivo.
- **`&>:`** redirige salida estándar y errores al mismo archivo.

**Ejemplos:**

```bash
echo "Hola" > archivo.txt       # Sobrescribe
echo "Más texto" >> archivo.txt # Agrega
ls archivo_inexistente 2> error.log # Errores
comando &> salida.log           # Todo redirigido
```

---

### 5. Variables de entorno

- **PATH**: Lista de directorios donde Bash busca comandos.
- Agregar carpeta personalizada:

```bash
export PATH=$PATH:/home/user/mis_comandos
```

---

## 🟡 Nivel Intermedio

### 6. Combinación de comandos

- `;` ejecuta todos los comandos en secuencia, aunque uno falle.
- `&&` ejecuta el siguiente solo si el anterior tuvo éxito.
- `||` ejecuta el siguiente solo si el anterior falla.

**Ejemplo:**

```bash
echo "Inicio"; ls -l
mkdir nueva && cd nueva
comando_inexistente || echo "Falló"
```

---

### 7. Procesos

- **`&`:** Ejecuta proceso en segundo plano.
- **`fg`:** Trae un proceso de fondo al primer plano.
- **`bg`:** Continúa un proceso detenido en segundo plano.
- **`jobs`:** Lista procesos en segundo plano.
- **`kill`:** Termina un proceso.

**Caso práctico:** Ejecutar un script largo en segundo plano:

```bash
./script_largo.sh &
jobs
fg %1
kill 1234
```

---

### 8. Filtros y pipes

- **`grep`:** Filtra líneas que coinciden con un patrón.
- **`awk`:** Procesa texto por columnas.
- **`sed`:** Edita texto en flujo.

**Ejemplo combinando grep y sed:**

```bash
grep "ERROR" log.txt | sed 's/ERROR/ALERTA/g'
```

---

### 9. Búsqueda de archivos

- **`find`:** Busca en tiempo real según criterios.
- **`locate`:** Busca en base de datos indexada (más rápido pero no siempre actualizado).

**Preferencia:** `find` para precisión en tiempo real, `locate` para búsquedas rápidas.

---

### 10. Expansiones en Bash

- **Llaves `{}`**: Expandir múltiples opciones.
  ```bash
  echo file{1,2,3}.txt  # file1.txt file2.txt file3.txt
  ```
- **Globbing `*`**: Coincide con cualquier número de caracteres.
  ```bash
  ls *.txt
  ```
- **Command substitution `$()`**: Ejecuta un comando y usa su salida.
  ```bash
  hoy=$(date)
  echo "Hoy es $hoy"
  ```

---

## 🔴 Nivel Avanzado

### 11. Scripting básico

```bash
#!/bin/bash
archivo=$1
wc $archivo
```

> **Uso:** `bash contar.sh archivo.txt` → muestra líneas, palabras y caracteres.

---

### 12. Condicionales en Bash

```bash
if [ -r "$archivo" ]; then
  echo "El archivo existe y es legible"
elif [ -e "$archivo" ]; then
  echo "El archivo existe pero no es legible"
else
  echo "El archivo no existe"
fi
```

---

### 13. Bucles

```bash
for f in *.txt; do
  echo "Procesando $f"
done
```

---

### 14. Optimización y buenas prácticas

1. Comentar el código para claridad.
2. Validar entradas y errores (`if`, `||`, `set -e`).
3. Mantener scripts modulares y funciones reutilizables.

---

### 15. Depuración de scripts

- **`set -x`**: Muestra cada comando antes de ejecutarlo.
- **`PS4`**: Personaliza prefijo de depuración.

**Ejemplo:**

```bash
#!/bin/bash
PS4='+ ${BASH_SOURCE}:${LINENO}:${FUNCNAME[0]}: '
set -x
echo "Depuración activa"
ls archivo_inexistente
```

> La salida mostrará línea por línea cómo se ejecutan los comandos, facilitando la detección de errores.

[🔼 temas](#temas)

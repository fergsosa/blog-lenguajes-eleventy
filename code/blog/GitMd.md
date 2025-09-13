---
layout: layout-post.njk
title: Git
img: /img/portada/git.avif
description: Ideas principales de Git
tags: ["blog", "lenguajes"]
date: "2023-06-01"
---

# {{title}}

![{{title}}]({{img}})

[temas](#temas)

## ¿Qué es Git?

**Git** es un **sistema de control de versiones distribuido** que permite gestionar y rastrear los cambios realizados en archivos y proyectos a lo largo del tiempo.  
Fue creado por **Linus Torvalds** en 2005 para el desarrollo del kernel de Linux.

**Diferencias con otros sistemas de control de versiones:**

- **Distribuido:** Cada desarrollador tiene una copia completa del repositorio, con todo el historial de cambios, a diferencia de sistemas centralizados como **Subversion (SVN)**.
- **Rápido y eficiente:** Opera de manera local para la mayoría de las acciones, lo que mejora el rendimiento.
- **Seguridad:** Utiliza **hashes SHA-1/SHA-256** para asegurar la integridad de los datos.
- **Ramas (branches) ligeras:** Permite crear y fusionar ramas de forma sencilla y eficiente.
- **Popularidad y soporte:** Git es el estándar de facto en la industria, lo que asegura herramientas y documentación abundantes.

### ¿Para qué se usa?

Git se utiliza principalmente para:

- **Control de versiones:** Mantener un historial claro y seguro de cambios en proyectos de software.
- **Colaboración en equipo:** Permite que varios desarrolladores trabajen en paralelo sin interferir entre sí.
- **Gestión de ramas y características:** Facilita la creación de ramas para desarrollar nuevas funciones, corregir errores o experimentar sin afectar la rama principal.
- **Despliegue y automatización:** Integración con **CI/CD** y herramientas como GitHub Actions, GitLab CI o Jenkins.

**Contextos ideales:**

- Proyectos de **desarrollo de software profesional**.
- Equipos distribuidos o remotos que necesitan trabajar en simultáneo.
- Proyectos **open source** donde muchas personas contribuyen desde distintos lugares.
- Control de versiones para documentación, configuraciones o infraestructura como código (IaC).

### ¿Qué puedo construir con Git?

Aunque Git no es un lenguaje de programación ni una herramienta de construcción de software, **sirve como base para organizar cualquier proyecto**.  
Con Git puedes estructurar y versionar proyectos como:

- **Aplicaciones web** y móviles.
- **Microservicios** en backend.
- **Documentación técnica** y manuales.
- **Infraestructura como código (IaC)**.
- **Bibliotecas y frameworks**.
- **Configuraciones de entornos y scripts**.

En otras palabras, **Git no construye el proyecto**, pero **lo mantiene organizado, versionado y seguro**.

### ¿Cuándo es más conveniente usarlo?

Git es más conveniente cuando:

- Trabajas en proyectos **colaborativos** con varias personas.
- Necesitas **historial detallado** de cambios y revertir versiones fácilmente.
- Quieres implementar **flujo de trabajo con ramas** (Git Flow, GitHub Flow, Trunk-Based Development, etc.).
- Necesitas **integración con plataformas populares** como GitHub, GitLab o Bitbucket.
- Trabajas con **despliegues automatizados** o integración continua.

Puede no ser necesario si:

- El proyecto es **pequeño, individual y temporal**, donde un control de versiones puede ser innecesario.
- Necesitas algo extremadamente simple como un **backup puntual**, donde bastaría con copias manuales.

### Buenas prácticas recomendadas

Para mantener un flujo de trabajo eficiente y limpio, sigue estas prácticas:

### **Buenas prácticas:**

1. **Commits pequeños y descriptivos:**

   - Mensajes claros que describan _qué_ y _por qué_ se hizo el cambio.
   - Ejemplo: `fix: corrige bug en login por credenciales inválidas`.

2. **Uso adecuado de ramas:**

   - `main` o `master`: rama estable y lista para producción.
   - `develop`: para integrar nuevas funcionalidades.
   - `feature/*`: para nuevas características.
   - `hotfix/*`: para correcciones urgentes en producción.

3. **Evitar subir archivos innecesarios:**

   - Configurar `.gitignore` para excluir archivos como `node_modules`, logs, builds, etc.

4. **Actualizar tu rama antes de fusionar (pull/rebase):**

   - Evitar conflictos integrando cambios recientes antes de hacer un merge.

5. **Revisar código antes de fusionar (Pull Request/Code Review):**
   - Mantener la calidad y coherencia del proyecto.

---

### Resumen final

> Síntesis rápida de lo aprendido sobre Git.

- **Fortalezas principales:**

  - Distribuido, rápido y seguro.
  - Excelente manejo de ramas.
  - Gran comunidad y herramientas compatibles.

- **Debilidades principales:**

  - Curva de aprendizaje inicial.
  - Posibles conflictos al fusionar cambios.
  - Puede ser complejo para proyectos extremadamente simples.

- **Cuándo usarlo:**

  - Proyectos colaborativos, open source o con despliegues continuos.
  - Necesidad de control detallado del historial de cambios.

- **Cuándo evitarlo:**
  - Proyectos muy pequeños o temporales.
  - Situaciones donde la complejidad de Git no justifica su uso.

---

# Temas {#temas#}

- [inicio](#git)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Conceptos Claves](#conceptos-claves)
- [Comandos](#comandos)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Al trabajar con Git, es importante conocer algunos conceptos clave que forman la base del control de versiones:

- **Repositorio (Repository):**  
  Espacio donde se almacena el historial completo de un proyecto, incluyendo archivos, commits, ramas y etiquetas.  
  Puede ser:

  - **Local:** Guardado en tu computadora.
  - **Remoto:** Guardado en la nube o servidor, como GitHub o GitLab.

- **Commit:**  
  Un "snapshot" o captura del estado de los archivos en un momento específico.  
  Cada commit incluye un mensaje descriptivo y un identificador único.

- **Branch (Rama):**  
  Línea de desarrollo independiente que permite trabajar en nuevas características o correcciones sin afectar la rama principal.

- **Merge (Fusión):**  
  Proceso de unir los cambios de una rama a otra, normalmente para integrar nuevas funcionalidades o arreglos.

- **Pull y Push:**

  - **Push:** Enviar cambios locales a un repositorio remoto.
  - **Pull:** Obtener cambios desde el repositorio remoto al local, combinándolos con tu trabajo.

- **Clone:**  
  Crear una copia completa de un repositorio remoto en tu máquina local.

- **Fork:**  
  Copiar un proyecto a tu cuenta para trabajar en él de forma independiente, útil en proyectos open source.

- **Stash:**  
  Guardar temporalmente cambios no confirmados para trabajar en otra tarea y luego recuperarlos.

- **Tag (Etiqueta):**  
  Marca utilizada para señalar puntos importantes en el historial, como versiones estables (`v1.0.0`).

- **.gitignore:**  
  Archivo que define qué elementos no deben ser rastreados por Git, como dependencias o archivos temporales.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Existen diversas herramientas que facilitan el uso de Git y mejoran la productividad, tanto en entornos gráficos como en línea de comandos:

### **Plataformas en la nube**

- **GitHub:**  
  La plataforma más popular para alojar repositorios y colaborar en proyectos open source y privados.
- **GitLab:**  
  Ofrece repositorios privados gratuitos, herramientas de CI/CD integradas y mayor control sobre la privacidad.

- **Bitbucket:**  
  Integración nativa con herramientas de Atlassian como Jira y Trello.

### **Clientes de escritorio**

- **GitHub Desktop:** Interfaz sencilla y amigable para principiantes que trabajan con GitHub.
- **Sourcetree:** Herramienta visual con soporte para Git y Mercurial, ideal para flujos más avanzados.
- **GitKraken:** Interfaz potente y visual, enfocada en equipos que manejan proyectos complejos.

### **CLI y terminal**

- **Git CLI:**  
  El cliente oficial de línea de comandos, fundamental para tareas avanzadas y automatización.

- **Oh My Zsh con plugin de Git:**  
  Mejora la experiencia en la terminal con autocompletado, alias y atajos.

- **Git Bash (Windows):**  
  Proporciona una terminal similar a Linux para trabajar con Git en sistemas Windows.

### **Complementos para editores y entornos de desarrollo (IDE)**

- **Visual Studio Code:**

  - Extensiones recomendadas:
    - _GitLens:_ Muestra información detallada sobre commits y autores.
    - _GitHub Pull Requests & Issues:_ Gestión directa de PRs e issues desde el editor.
    - _Git Graph:_ Visualización gráfica de ramas y commits.

- **JetBrains (WebStorm, IntelliJ, PyCharm, etc.):**  
  Integración de Git nativa con soporte visual y herramientas avanzadas.

### **Herramientas de integración y automatización**

- **GitHub Actions:** Automatización de flujos como pruebas, despliegues y validaciones.
- **GitLab CI/CD:** Pipelines integrados directamente con tus repositorios en GitLab.
- **Jenkins:** Integración continua para equipos que requieren mayor personalización.

[🔼 temas](#temas)

---

# Conceptos Claves

## 1. Diferencia entre Git y GitHub

- **Git:**  
  Herramienta de control de versiones distribuido. Permite rastrear cambios en archivos y coordinar trabajo entre desarrolladores.

  - Se instala en tu computadora.
  - Funciona sin internet para la mayoría de sus tareas.
  - Administra repositorios localmente y remotamente.

- **GitHub:**  
  Plataforma en la nube para alojar repositorios Git y facilitar la colaboración.
  - Ofrece herramientas como _pull requests_, _issues_ y _actions_.
  - Necesita internet para interactuar con repositorios alojados en la plataforma.

> **Resumen:**  
> Git es la **herramienta**, GitHub es **el servicio donde puedes alojar y gestionar repositorios Git**.

## 2. Diferencia entre `git fetch` y `git pull`

- **git fetch:**  
  Descarga cambios desde el repositorio remoto **sin aplicarlos automáticamente**.

  - Sirve para revisar primero los cambios antes de integrarlos.
  - No altera tu rama actual.

- **git pull:**  
  Hace lo mismo que `git fetch` pero **fusiona inmediatamente los cambios** en tu rama activa.
  - Puede generar conflictos si hay diferencias con tu trabajo local.

> **Resumen:**  
> Usa `git fetch` para **observar y revisar cambios**, y `git pull` para **actualizar tu rama directamente**.

## 3. Flujo de trabajo básico de Git

Flujo típico para trabajar en un proyecto con Git:

1. **Clonar el repositorio:**

   ```bash
   git clone <URL-del-repositorio>
   ```

2. **Crear una rama para trabajar:**

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **Hacer cambios en los archivos.**

4. **Agregar cambios al staging area:**

   ```bash
   git add .
   ```

5. **Confirmar los cambios con un commit:**

   ```bash
   git commit -m "feat: agrega nueva funcionalidad"
   ```

6. **Subir cambios al repositorio remoto:**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

## 4. Merge conflict y cómo resolverlo

Un **merge conflict** ocurre cuando Git no puede combinar automáticamente cambios de dos ramas porque:

- La misma línea de un archivo fue editada de forma diferente.
- Un archivo fue eliminado en una rama y modificado en otra.

**Pasos para resolverlo:**

1. Git marcará el conflicto en el archivo:

   ```
   <<<<<<< HEAD
   código actual
   =======
   código de la otra rama
   >>>>>>> rama-remota
   ```

2. Edita el archivo y deja solo la versión correcta.

3. Marca como resuelto:

   ```bash
   git add archivo_conflicto.js
   ```

4. Finaliza el merge:
   ```bash
   git commit
   ```

## 5. Staging area (o índice) en Git

El **staging area** es un espacio intermedio donde Git guarda los cambios que se incluirán en el próximo commit.

- Permite **seleccionar** qué cambios van a confirmarse.
- Evita enviar modificaciones incompletas o incorrectas al historial.

**Flujo:**

```bash
git add archivo.js                # Mueve cambios al staging area
git commit -m "feat: agrega nueva función"
```

> **Analogía:**  
> Es como un "carrito de compras" donde eliges qué cambios llevar antes de "pagar" (commit).

## 6. Diferencia entre `git rebase` y `git merge`

- **git merge:**

  - Combina el historial de dos ramas creando un **nuevo commit de merge**.
  - Mantiene el historial tal como ocurrió.
  - Ideal para preservar el contexto histórico.

- **git rebase:**
  - Toma los commits de una rama y los "reaplica" sobre otra.
  - Genera un historial **lineal y limpio**.
  - Útil para simplificar antes de integrar ramas.

> **Resumen:**
>
> - `merge` → mantiene el historial original.
> - `rebase` → reescribe historial para mayor claridad.

## 7. Uso de `git stash`

`git stash` guarda temporalmente los cambios no confirmados para que puedas:

- Cambiar de rama sin hacer un commit.
- Probar algo nuevo sin perder tu progreso.

**Comandos:**

```bash
git stash                            # Guarda cambios
git stash pop                        # Recupera cambios guardados
```

## 8. Revertir un commit ya subido al repositorio remoto

### **git revert**

- Crea un **nuevo commit que deshace los cambios** de uno anterior.
- Seguro para repositorios compartidos porque no reescribe historial.

```bash
git revert <ID-del-commit>
```

### **git reset**

- Reescribe el historial, eliminando commits.
- Puede causar problemas si otros ya descargaron esos commits.
- Usar solo en ramas personales.

```bash
git reset --hard <ID-del-commit>
git push origin main --force
```

> **Regla de oro:**
>
> - `git revert` → repositorios compartidos.
> - `git reset` → uso local y controlado.

## 9. Qué es una rama en Git y su utilidad

Una **rama (branch)** es una línea de desarrollo independiente.

- Permite trabajar en nuevas funciones o arreglos sin afectar el código principal.
- Facilita la colaboración y el control de versiones.

**Crear una rama:**

```bash
git checkout -b feature/login
```

## 10. Eliminar archivos no rastreados (untracked files)

Para eliminar archivos que Git no está rastreando:

```bash
git clean -f
```

Para eliminar también carpetas:

```bash
git clean -fd
```

> **Precaución:** Esto elimina archivos permanentemente.

## 11. Qué es HEAD en Git

**HEAD** es un puntero que indica **en qué commit y rama estás trabajando**.

- Apunta normalmente al último commit de la rama activa.
- Cambia cuando te mueves de rama.

**Ejemplo:**

```bash
git checkout main # HEAD ahora apunta a la rama main
```

## 12. Uso de `git cherry-pick`

`git cherry-pick` aplica un commit específico de otra rama en la rama actual.

**Situaciones útiles:**

- Traer un bugfix sin fusionar toda la rama.
- Integrar una funcionalidad concreta.

**Ejemplo:**

```bash
git cherry-pick <ID-del-commit>
```

## 13. Ver historial de cambios de un archivo específico

Ver historial simple:

```bash
git log -- <archivo>
```

Ver historial con detalles:

```bash
git log -p -- <archivo>
```

## 14. Concepto de tags y cuándo se usan

Los **tags (etiquetas)** marcan puntos importantes en el historial, como versiones estables.

**Tipos de tags:**

- **Lightweight Tag:** Etiqueta simple que apunta a un commit.
- **Annotated Tag:** Incluye información adicional como autor y fecha.

**Ejemplo:**

```bash
git tag v1.0.0
git push origin v1.0.0
```

**Uso común:**

- Versionado de lanzamientos (`v1.0.0`).
- Marcar hitos importantes en el desarrollo.

[🔼 temas](#temas)

---

# Comandos

Esta sección resume los comandos más comunes de Git, agrupados por categorías, con ejemplos y explicaciones rápidas.

### **1. Configuración inicial**

```bash
# Configura Git antes de usarlo por primera vez:
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"

# Ver la configuración actual:
git config --list

# Definir editor por defecto (opcional):
git config --global core.editor "code --wait"
```

### **2. Crear o clonar repositorios**

```bash
git init                          # Inicializar un repositorio nuevo.
git clone <URL-del-repositorio>   # Clonar un repositorio existente.
```

### **3. Estados y seguimiento de cambios**

```bash
git status                    # Ver el estado actual del repositorio.
git diff                      # Ver los cambios en archivos.
git diff --staged             # Ver cambios en el staging area.
```

### **4. Staging area y commits**

```bash
git add archivo.js                         # Agregar archivos al staging area.
git add .                                  # Agregar todos los archivos modificados.
git commit -m "feat: nueva funcionalidad"  # Confirmar cambios con un mensaje.
git commit --amend                         # Modificar el último commit (sin crear uno nuevo.
```

### **5. Ramas (branches)**

```bash
git branch                             # Ver todas las ramas
git branch nombre-rama                 # Crear una nueva rama
git checkout -b nombre-rama            # Crear y cambiar a una nueva rama
git checkout nombre-rama               # Cambiar de rama
git branch -d nombre-rama              # Eliminar una rama local

```

### **6. Sincronización con repositorio remoto**

```bash
git remote -v                                # Ver repositorios remotos
git remote add origin <URL-del-repositorio>  # Agregar un repositorio remoto
git fetch                                    # Descargar cambios sin fusionar
git pull origin main                         # Descargar y fusionar cambios
git push origin nombre-rama                  # Subir cambios a la rama remota
git push --all origin                        # Subir todas las ramas locales

```

### **7. Fusión e integración**

```bash
git merge nombre-rama        # Fusionar una rama en la actual
git rebase main              # Rebase (reestructurar historial)
git add archivo_conflicto.js # Resolver conflictos después de merge/rebase
git commit
```

### **8. Stash (guardar cambios temporalmente)**

```bash
git stash                       # Guardar cambios sin hacer commit
git stash list                  # Ver lista de stashes guardados
git stash pop                   # Recuperar y aplicar el último stash
git stash apply stash@{0}       # Aplicar un stash específico (sin borrarlo)
```

### **9. Logs e historial**

```bash
git log                         # Ver historial de commits
git log --oneline               # Historial resumido
git log --oneline --graph --all # Ver historial con gráfico
git log -- archivo.js           # Ver cambios en un archivo específico
```

### **10. Reset y revert**

```bash
git checkout -- archivo.js        # Deshacer cambios en archivos sin stage
git reset archivo.js              # Quitar archivos del staging area (sin borrar cambios)
git revert <ID-del-commit>        # Revertir un commit seguro (repositorio compartido)
git reset --hard <ID-del-commit>  # Reset para volver a un commit previo (destructivo)
```

### **11. Limpiar archivos no rastreados**

```bash
git clean -f                         # Eliminar archivos no rastreados
git clean -fd                        # Eliminar también carpetas
```

> ⚠️ **Precaución:** Estos archivos se eliminan permanentemente.

### **12. Tags (etiquetas)**

```bash
git tag v1.0.0                        # Crear un tag
git tag -a v1.0.0 -m "Versión 1.0.0"  # Crear un tag con mensaje (annotated tag)
git tag                               # Listar tags existentes
git push origin --tags                # Subir tags al remoto
```

### **13. Cherry-pick**

Aplicar un commit específico de otra rama:

```bash
git cherry-pick <ID-del-commit>
```

### **14. Alias útiles**

Simplificar comandos con alias globales:

```bash
git config --global alias.st status
git config --global alias.cm "commit -m"
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --all"
```

**Uso ejemplo:**

```bash
git st    # en lugar de git status
git cm "mensaje"
git lg
```

---

## Resumen rápido

| Acción                           | Comando rápido                          |
| -------------------------------- | --------------------------------------- |
| Clonar repositorio               | `git clone <url>`                       |
| Ver estado actual                | `git status`                            |
| Agregar archivos                 | `git add .`                             |
| Confirmar cambios                | `git commit -m "mensaje"`               |
| Subir cambios                    | `git push origin main`                  |
| Descargar cambios                | `git pull origin main`                  |
| Crear nueva rama                 | `git checkout -b nombre-rama`           |
| Fusionar ramas                   | `git merge nombre-rama`                 |
| Deshacer commit (seguro)         | `git revert <ID-commit>`                |
| Resetear commit (destructivo)    | `git reset --hard <ID-commit>`          |
| Ver historial                    | `git log --oneline --graph --all`       |
| Limpiar archivos no rastreados   | `git clean -fd`                         |
| Aplicar un commit específico     | `git cherry-pick <ID-commit>`           |
| -------------------------------- | --------------------------------------- |

[🔼 temas](#temas)

## Comandos Git

```bash
mkdir                       # crear carpeta
rmdir                       # eliminar carpeta
ls                          # contenido de carpeta
git init                    # inicializar
git add                     # AGREGA a staged
git status                  # estado
git rm --cached             # quita del area de staged
git commit -m               # REGISTRA el cambio al repositorio Local
git                         # inicializar
```

## diff

```bash
 git show                      # muestra los ÚLTIMOS cambios
 git diff --staged             # muestra las diferencias cuando esta en STAGED
 git diff id1 id2              # muestra las diferencias ENTRE los archivos
 git diff --name-only id1 id2  # muestra los ARCHIVOS que modificaron
 git diff --word-diff id1 id2  # muestra las LINEAS modificadas
```

## Modifico commit

```bash
 git commit --amend     # vuelvo al ultimo commit y lo puedo modificar el NOMBRE/DESCRIPCIÓN
 git rebase -i head~3   # te muestra los ultimo commit a los que puedes volver / edit: para volver
```

```bash
 pick 8442d96 commit 03
 edit a6863b6 commit 04 # vuelve
 pick f8284fe Ultimo commit
```

```
 git rebase --continue      # inicializar
```

## Estados

- 1er lugar > add STAGED
- 2er lugar > sin add PC
- vació lugar > commit HEAD
- ?? archivo > nvo a agregar / SIN add / modificado?

| 1er | 2do | add | commit                                           |
| :-: | :-: | :-: | ------------------------------------------------ |
|  A  | \-  | ✅  | nvo a agregar                                    |
|  A  |  M  | ✅  | nvo a agregar / pos modificado                   |
| \-  |  M  | ⛔  | modificado                                       |
|  M  | \-  | ✅  | modificado                                       |
|  M  |  m  | ✅  | commit? / modificado // SIN add / pos modificado |
|  D  | \-  | ⛔  | eliminado                                        |
| \-  |  D  | ✅  | eliminado                                        |
|  R  | \-  | ⛔  | cambio nombre                                    |
| \-  |  D  | ✅  | cambio nombre                                    |
| \-  | \-  | ⛔  | vació lugar commit/HEAD                          |

## Deshacer commit

```bash
git reset id                             # vuelve al commit del id
git reset --soft id                      # staging / con add
git reset --mixed id                     # pc / sin add
git reset --hard id                      # commit sin modificar vació
```

## Reflog

```bash
git reset --hard idBorrar   # vuelve al id
git reset --hard idBorrado  # con el id se puede volver al hard
git reset --hard idReflog   # recuperas el estado donde estaba el archivo
git reflog                  # muestra todos los lugares donde el HEAD apunto
```

## Ramas

```bash
 git branch                     # VER ramas
 git branch -d nomRama          # BORRAR notas
 git branch -m nomNvo           # RENOMBRAR rama / posicionado en la rama
 git branch -m nomViejo nomNvo  # RENOMBRAR rama / posicionado en otras rama

 git switch                     # MOVER de rama
 git switch -c nomb             # crear y mover de rama

 git merge nomRama              # fusionar ramas / posicionado en la rama
```

## Stash

```bash
 git stash             # Guardar temporalmente los cambios de la rama
 git stash list        # Guardar temporalmente los cambios de la rama
 git stash pop         # para volver al commit guardado
```

[\
🔼 Regresar](#temas)

## ✅ Flujo de trabaja GitFlow {#flujo-de-trabaja-git-flow#}

|  ramas  | componente                        |
| :-----: | --------------------------------- |
|  main   | v0.1 Rama principal               |
| hotfix  | v0.2 Corregir error rápidamente   |
| release | v1.0 publicación                  |
| develop | integra todas las funcionalidades |
| feature | funcionalidades                   |

[\
🔼 Regresar](#temas)

## ✅ Comandos para la terminal {#comandos-para-la-terminal#}

```
 pwd               # MUESTRA la carpeta actual
 pwd --help        # MUESTRA los comandos existentes

 clear             # LIMPIAR los comandos
 ls                # MUESTRA archivos de la carpeta
 ls -l             # MUESTRA "mas" archivos de la carpeta
 ls -a             # MUESTRA archivos "ocultos" de la carpeta
 ls -la            # MUESTRA "combinación" de lo anterior
 ls --help         # MUESTRA total de los comandos
 cd                # cambiar de directorio
 cd nombCarp       # CAMBIA de carpeta
 cd mouse          # arrastra la capeta a la que CAMBIAS
 cd ~              # cambiar a la carpeta INICIAL
 cd .              # directorio ACTUAL
 cd ..             # cambia a capeta ANTERIOR/PADRE
 cd /              # cambia capeta RAÍZ (disco duro c)
 cd c              # cambia disco duro C
 cd -              # regresa a la carpeta ANTERIOR
 cd "nomb capeta"  # si tiene espacios USAR ""

 touch nA          # CREA un archivo nuevo
 mkdir nC          # CREA una carpeta
 echo "contenido   # nombArchivo - CREA un archivo con contenido
 cat nombArch      # MUESTRA el contenido del archivo

 rm                # ELIMINA archivos
 rmdir             # ELIMINA una carpeta vacía
 rm -r nombCarp    # ELIMINA carpeta con contenido
 rm -rf nombCarp   # forzar la ELIMINA carpeta con contenido

 mv nombArch nombCarpeta  # MOVER archivo a carpeta
 mv nombArch nvoNombArch  # RENOMBRAR archivo

 cp nombArch nombCarpeta  # COPIAR archivo a carpeta
 cp nombArch nombCarpeta/nvoNombArch  # COPIAR archivo a carpeta con nuevo nombre
 cp -r nombCarp nombCarp  # COPIAR carpeta con contenido

 find J\*                 # BUSCA todos los archivos que empiecen con j
```

[\
🔼 Regresar](#temas)

## ✅ ps > procesos {#ps-procesos#}

```bash
 kill nroProcesoId                 # ELIMINA el proceso
 code .                            # ABRE el archivo visual studio code
 code ubiArch                      # ABRE archivo en visual studio code
 alias                             # MUESTRA los alias existentes
 alias nombAlias="contenido"       # CREA un alias
 alias nombAlias="touch Hola.txt"  # CREA un alias
 unalias                           # ELIMINA el alias
```

[\
🔼 Regresar](#temas)

## ✅ configuración GLOBAL inicial de git {#configuración-global-inicial-de-git#}

```bash
 git config --global user.name "FerSosa"              # NOMBRE de usuario
 git config --global user.email "user@fer"            # EMAIL
 git config --global user.email "fer.9cba2@gmail.com" # EMAIL
 git config --global core.editor "code --await"       # INDICA nuestro editor por defecto
 git config --global -e                               # MUESTRA las configuración global
 git config --global core autocrlf true/input         # como TRATAR lo saltos de linea con windows/mac
 git config --global -h                               # LISTA de todas las configuraciones
```

[\
🔼 Regresar](#temas)

## ✅ 🔻 Comandos para GIT {#comandos-para-git#}

reps (repositorio) | nA/nC (nombre Archivo/Carpeta)

### FLUJOS DE TRABAJO > SUS ESTADOS

| directorio/miPc | index/staging   | HEAD/local       | GitHub/remote |
| --------------- | --------------- | ---------------- | ------------- |
| modified (add)  | staged (commit) | committed (push) | remote (pull) |

```bash
 git init               # INICIA un repositorio git en directorio
 git status             # VERIFICA el estado del repositorio

 git status -s          # RESUME de verificación el estado del reps
 git diff               # MUESTRA los cambios realizados

 git diff --staged      # MUESTRA los cambios realizados detallados
 git add nomAr          # AGREGA a staged

 git rm nomAr           # ELIMINA el archivo sin tener que declarar

 git rm --cachet "nA"   # VUELVE al directorio
 git mv nomAr nomAr-nvo # RENOMBRA archivo sin tener que declarar

 git log                # MUESTRA historial de commit hechos

 git log --oneline      # MUESTRA historial de commit en una linea-
 git log -p             # MUESTRA historial de commit y los cambios

 git commit                           # REGISTRA el cambio
 git commit -m "mensaje"              # AGREGA al repositorio con msj
 git commit --amend -m "nvo mensaje`  # CAMBIA el msj de commit (hacer solo e repositorio local y el mas reciente)
 git commit --amend --no-edit         # GUARDA los cambios sin editar el ultimo msj de commit subir
```

[\
🔼 Regresar](#temas)

## ✅ Tipos de commits {#tipos-de-commits#}

| Commits  | Características                           |
| :------: | ----------------------------------------- |
|   Feat   | Nueva característica                      |
|   Fix    | Corrección de errores                     |
|  Merge   | Combinación de ramas                      |
|  Delete  | Archivos borrados                         |
|   Docs   | Documentación                             |
|  Style   | Cambios de estilo (formateo, comas, etc.) |
| Refactor | Refactorización del código                |
|   Test   | Añadir o corregir tests                   |
|  Chore   | Tareas de mantenimiento                   |

```bash
 git reset --hard HEAD~1  # DESHACER(elimina) el ultimo registro/commit
 git reset --soft HEAD~1  # DESHACER(elimina) el ultimo registro/commit
 soft                     # MANTIENE los cambios de los archivos
 hard                     # MANTIENE los cambios de los archivos
 HEAD                     # ULTIMO realizado
 ~1                       # CANTIDAD de pasos en el historial
```

```bash
 git branch                   # MUESTRA ramas (nomR = nombreDeRama)
 git branch nomR              # CREA una rama nueva
 git branch -d nomR           # ELIMINA rama desde otra rama en (directorio)
 git branch -m nomR_nva       # CAMBIA nombre de rama dentro de la rama
 git branch -m nomR nomR_nva  # CAMBIA nombre por nombre nuevo

 git checkout "nomR"          # CAMBIA de rama
 git checkout main            # CAMBIA de rama inicial
 git checkout -b "nomR"       # CREA, NOMBRA y se COLOCA en la rama nueva

 git switch "nomR"            # CAMBIA de rama
 git switch nomR              # CAMBIA de rama

 git marge nomR               # COMBINA rama (a la rama donde se encuentra)
 git marge --continue         # RESUELVE CONFLICTO una vez aceptado

 git clonar link              # CLONAR el repositorio de GitHub

 git remote                   # MUESTRA el nombre del repositorio remoto
 git remote -v                # MUESTRA mas detalles del repositorio remoto

 git push origin main         # ENVIAR cambios de repositorio local a GitHub
 git push -u origin nomR      # ENVIAR cambios de repositorio local a GitHub
 git push origin nomR         # ELIMINA rama de repositorio local a GitHub
 git push origin --delete html
 origin = NOMBRE asignado al repositorio remoto clonado
 main = NOMBRE de rama modificada

 git pull                     # DESCARGAR cambios del contenido de GitHub

 git fetch origin             # VERIFICAR cambios del contenido de GitHub
 git checkout origin/main     # CAMBIAR de la rama loca a la rama del repositorio remoto

 bifurca/fork (un repositorio) crear una copiar del repositorio remoto de tu cuenta GitHub

 pull request                 # solicitud de combinar tus cambios con el repositorio original del proyecto
 git remote                   # MUESTRA los orígenes remotos del repositorio
```

```bash
 git tag                          # MUESTRA las etiquetas
 git tag nroVersion               # CREA las etiquetas
 git tag -d nroVersion            # ELIMINA las etiquetas
 git show nroVersion              # MUESTRA info de una etiquetas

 git reflog
```

## Para desactivar el paginado globalmente para diff:

```bash
 git config --global pager.diff false
```

### Alias

🔻log-simple

```
  git config --global alias.log-simple "log --oneline --graph --all"
```

🔻log-mejorado

```
  git config --global alias.log-mejorado "log --oneline --all --graph --pretty=format:'%C(auto)%h%d %s %C(black)%C(bold)%cr'"
```

[\
🔼 Regresar](#temas)

## ✅ GitHub {#git-hub#}

## Creado de GitHub a Local

```bash
 git clone https://github.com/fergsosa/clon-carpeta.git     # clonar carpeta
 git push origin main                               # subir archivo a GitHub
 git pull        # trae actualización/cambios del repositorio Remoto a Local
 🔺🔺🔺         # trae repositorio y fusiona (merge) a la rama actual

 git fetch       # trae actualización/cambios del repositorio Remoto a Local
 🔺🔺🔺         # trae repositorio y fusiona (merge) a la rama actual
 git switch --detach origin/main  # muestra las modificaciones antes del pull

 git push origin --delete ramaBorrar            # borrar rama de forma remota
```

[\
🔼 Regresar](#temas)

## ✅ Creado de Local a GitHub {#creado-de-Local-a-git-hub#}

- se crea repositorio vació

### 🔻comando de conecta repositorio local con github

```bash
git remote add origin https://github.com/fergsosa/repositorio-subido-local.git
git branch -M main
git push -u origin main  # configura para usar solo "git push"
git remote -v            # muestra lo que se puede hacer con remote
```

### 🔻comando de cambie repositorio ya configurado

```bash
git remote add origin https://github.com/fergsosa/repo-VIEJO.git`
git remote set-url origin https://github.com/fergsosa/repo-NUEVO.git`

git push -u origin main                # configura para usar solo "git push"
git push --set-upstream origin ramaMia # subir rama creada al GitHub que no tenia

git                            # inicializar
```

## Proceso: Pull Request

```bash
1. git clone` # Clonar el Repositorio
```

- **Objetivo:** Obtener una copia local del repositorio remoto.
- **Resultado:** Directorio local con el contenido del repositorio remoto.

```bash
2. git checkout -b` 🔸 Crear una Nueva Rama
```

- **Obj:** Trabajar en cambios de forma aislada sin afectar la rama principal.
- **Res:** Nueva rama creada y activada para realizar cambios.

```bash
3. git add y git commit` 🔸 Hacer Cambios y Confirmarlos
```

- **Obj:** Realizar y registrar cambios en el código.
- **Res:** Cambios preparados (git add) y confirmados (git commit) en la nueva rama.

```bash
4. git push origin nombre-de-la-rama` 🔸 Subir la Rama al Repositorio Remoto
```

- **Obj:** Subir los cambios de la nueva rama al repositorio remoto para compartirlos.
- **Res:** Nueva rama con los cambios subida al repositorio remoto.

```
5.  Crear el Pull Request en GitHub
```

- A. Navegar al repositorio en GitHub:
  - **Obj:** Acceder a la interfaz web del repositorio para crear el pull request.
  - **Res:** Pantalla del repositorio en GitHub.
- B. Hacer clic en "Compare & pull request" o ir a `"Pull requests" > "New pull request"`:
  - **Obj:** Iniciar el proceso de creación del pull request.
  - **Res:** Formulario para comparar ramas y crear el pull request.
- C. Seleccionar la rama de base y la de comparación:
  - **Obj:** Definir las ramas involucradas en el pull request.
  - **Res:** Ramas seleccionadas para revisión.
- D. Añadir un título y una descripción:
  - **Obj:** Proveer información clara y detallada sobre los cambios realizados.
  - **Res:** Pull request con título y descripción informativa.
- E. Hacer clic en `"Create pull request"`:
  - **Obj:** Enviar el pull request para revisión.
  - **Res:** Pull request creado y listo para ser revisado por otros colaboradores.

## Notas Adicionales

### Mantener la Rama Actualizada:

- **Obj:** Asegurar que la rama de trabajo está sincronizada con la rama base.
- **Comandos:** git rebase o git merge
- **Res:** Rama de trabajo actualizada con los últimos cambios de la rama base.

### Resolver Conflictos:

- **Obj:** Solucionar discrepancias entre cambios en diferentes ramas.
- **Comandos:** Dependiendo del conflicto, usar herramientas de merge conflict y comandos como git add y git commit.
- **Res:** Conflictos resueltos y cambios preparados para ser fusionados.

Estas características te ayudarán a entender cada paso del proceso y su importancia en la creación y envío de un pull request en GitHub.

[🔼 temas](#temas)

---

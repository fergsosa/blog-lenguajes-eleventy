---
layout: layout-post.njk
title: Git
img: /img/portada/git.avif
description: Control versiones, historial código.
tags: ["blog", "herramientas"]
date: "2023-07-01"
---

# {{title}}

![{{title}}]({{img}})

[temas](#temas)

## ¿Qué es Git?

**Git** es un **sistema de control de versiones distribuido** que permite gestionar y rastrear los cambios realizados en archivos y proyectos a lo largo del tiempo.  
Fue creado por **Linus Torvalds** en 2005 para el desarrollo del kernel de Linux.

#### Diferencias con otros sistemas de control de versiones:

- **Distribuido:**\
  Cada desarrollador tiene una copia completa del repositorio, con todo el historial de cambios, a diferencia de sistemas centralizados como **Subversion (SVN)**.
- **Rápido y eficiente:**\
  Opera de manera local para la mayoría de las acciones, lo que mejora el rendimiento.
- **Seguridad:**\
  Utiliza **hashes SHA-1/SHA-256** para asegurar la integridad de los datos.
- **Ramas (branches) ligeras:**\
  Permite crear y fusionar ramas de forma sencilla y eficiente.
- **Popularidad y soporte:**\
  Git es el estándar de facto en la industria, lo que asegura herramientas y documentación abundantes.

### ¿Para qué se usa?

#### Git se utiliza principalmente para:

- **Control de versiones:**\
  Mantener un historial claro y seguro de cambios en proyectos de software.
- **Colaboración en equipo:**\
  Permite que varios desarrolladores trabajen en paralelo sin interferir entre sí.
- **Gestión de ramas y características:**\
  Facilita la creación de ramas para desarrollar nuevas funciones, corregir errores o experimentar sin afectar la rama principal.
- **Despliegue y automatización:**\
  Integración con **CI/CD** y herramientas como GitHub Actions, GitLab CI o Jenkins.

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

## Buenas prácticas recomendadas

Para mantener un flujo de trabajo eficiente y limpio, sigue estas prácticas:

#### 1. Commits pequeños y descriptivos:

- Mensajes claros que describan _qué_ y _por qué_ se hizo el cambio.
- Ejemplo: `fix: corrige bug en login por credenciales inválidas`.

#### 2. Uso adecuado de ramas:

- `main` o `master`: rama estable y lista para producción.
- `develop`: para integrar nuevas funcionalidades.
- `feature/*`: para nuevas características.
- `hotfix/*`: para correcciones urgentes en producción.

#### 3. Evitar subir archivos innecesarios:

- Configurar `.gitignore` para excluir archivos como `node_modules`, logs, builds, etc.

#### 4. Actualizar tu rama antes de fusionar (pull/rebase):

- Evitar conflictos integrando cambios recientes antes de hacer un merge.

#### 5. Revisar código antes de fusionar (Pull Request/Code Review):

- Mantener la calidad y coherencia del proyecto.

---

### Resumen final

#### ✅ Fortalezas principales:

- Distribuido, rápido y seguro.
- Excelente manejo de ramas.
- Gran comunidad y herramientas compatibles.

#### ⚠️ Debilidades principales:

- Curva de aprendizaje inicial.
- Posibles conflictos al fusionar cambios.
- Puede ser complejo para proyectos extremadamente simples.

#### 🛠️ Cuándo usarlo:

- Proyectos colaborativos, open source o con despliegues continuos.
- Necesidad de control detallado del historial de cambios.

#### 🚫 Cuándo evitarlo:

- Proyectos muy pequeños o temporales.
- Situaciones donde la complejidad de Git no justifica su uso.

---

# Temas

- [Inicio](#git)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

---

# Conceptos relacionados

Al trabajar con Git, es importante conocer algunos conceptos clave que forman la base del control de versiones:

### Repositorio (Repository):

Espacio donde se almacena el historial completo de un proyecto, incluyendo archivos, commits, ramas y etiquetas.  
 Puede ser:

- **Local:** Guardado en tu computadora.
- **Remoto:** Guardado en la nube o servidor, como GitHub o GitLab.

### Commit:

Un "snapshot" o captura del estado de los archivos en un momento específico.  
 Cada commit incluye un mensaje descriptivo y un identificador único.

### Branch (Rama):

Línea de desarrollo independiente que permite trabajar en nuevas características o correcciones sin afectar la rama principal.

### Merge (Fusión):

Proceso de unir los cambios de una rama a otra, normalmente para integrar nuevas funcionalidades o arreglos.

### Pull y Push:

- **Push:** Enviar cambios locales a un repositorio remoto.
- **Pull:** Obtener cambios desde el repositorio remoto al local, combinándolos con tu trabajo.

### Clone:

Crear una copia completa de un repositorio remoto en tu máquina local.

### Fork:

Copiar un proyecto a tu cuenta para trabajar en él de forma independiente, útil en proyectos open source.

### Stash:

Guardar temporalmente cambios no confirmados para trabajar en otra tarea y luego recuperarlos.

### Tag (Etiqueta):

Marca utilizada para señalar puntos importantes en el historial, como versiones estables (`v1.0.0`).

### .gitignore:

Archivo que define qué elementos no deben ser rastreados por Git, como dependencias o archivos temporales.

[🔼 temas](#temas)

---

# Herramientas recomendadas

Existen diversas herramientas que facilitan el uso de Git y mejoran la productividad, tanto en entornos gráficos como en línea de comandos:

### Plataformas en la nube

- **GitHub:**  
  La plataforma más popular para alojar repositorios y colaborar en proyectos open source y privados.
- **GitLab:**  
  Ofrece repositorios privados gratuitos, herramientas de CI/CD integradas y mayor control sobre la privacidad.
- **Bitbucket:**  
  Integración nativa con herramientas de Atlassian como Jira y Trello.

### Clientes de escritorio

- **GitHub Desktop:**\
  Interfaz sencilla y amigable para principiantes que trabajan con GitHub.
- **Sourcetree:**\
  Herramienta visual con soporte para Git y Mercurial, ideal para flujos más avanzados.
- **GitKraken:**\
  Interfaz potente y visual, enfocada en equipos que manejan proyectos complejos.

### CLI y terminal

- **Git CLI:**  
  El cliente oficial de línea de comandos, fundamental para tareas avanzadas y automatización.
- **Oh My Zsh con plugin de Git:**  
  Mejora la experiencia en la terminal con autocompletado, alias y atajos.
- **Git Bash (Windows):**  
  Proporciona una terminal similar a Linux para trabajar con Git en sistemas Windows.

### Complementos para editores y entornos de desarrollo (IDE)

#### Visual Studio Code:

- Extensiones recomendadas:
  - _GitLens:_ Muestra información detallada sobre commits y autores.
  - _GitHub Pull Requests & Issues:_ Gestión directa de PRs e issues desde el editor.
  - _Git Graph:_ Visualización gráfica de ramas y commits.

#### JetBrains (WebStorm, IntelliJ, PyCharm, etc.):

Integración de Git nativa con soporte visual y herramientas avanzadas.

### Herramientas de integración y automatización

- **GitHub Actions:**\
  Automatización de flujos como pruebas, despliegues y validaciones.
- **GitLab CI/CD:**\
  Pipelines integrados directamente con tus repositorios en GitLab.
- **Jenkins:**\
  Integración continua para equipos que requieren mayor personalización.

[🔼 temas](#temas)

---

# Comandos

Esta sección resume los comandos más comunes de Git, agrupados por categorías, con ejemplos y explicaciones rápidas.

### 1. Configuración inicial

```bash
# Configura Git antes de usarlo por primera vez:
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"

# Ver la configuración actual:
git config --list

# Definir editor por defecto (opcional):
git config --global core.editor "code --wait"
```

### 2. Crear o clonar repositorios

```bash
git init                          # Inicializar un repositorio nuevo.
git clone <URL-del-repositorio>   # Clonar un repositorio existente.
```

### 3. Estados y seguimiento de cambios

```bash
git status                    # Ver el estado actual del repositorio.
git diff                      # Ver los cambios en archivos.
git diff --staged             # Ver cambios en el staging area.
```

### 4. Staging area y commits

```bash
git add archivo.js                         # Agregar archivos al staging area.
git add .                                  # Agregar todos los archivos modificados.
git commit -m "feat: nueva funcionalidad"  # Confirmar cambios con un mensaje.
git commit --amend                         # Modificar el último commit (sin crear uno nuevo.
```

### 5. Ramas (branches)

```bash
git branch                      # Ver todas las ramas
git branch nombre-rama          # Crear una nueva rama
git branch -d nombre-rama       # Eliminar una rama local
git branch -m nomViejo nomNvo   # RENOMBRAR rama / posicionado en otras rama

git checkout -b nombre-rama     # Crear y cambiar a rama nueva
git switch -c nomb              #
git checkout nombre-rama        # Cambiar de rama
git switch                      #
```

### 6. Sincronización con repositorio remoto

```bash
git remote -v                                # Ver repositorios remotos
git remote add origin <URL-del-repositorio>  # Agregar un repositorio remoto
git fetch                                    # Descargar cambios sin fusionar
git pull origin main                         # Descargar y fusionar cambios
git push origin nombre-rama                  # Subir cambios a la rama remota
git push --all origin                        # Subir todas las ramas locales

```

### 7. Fusión e integración

```bash
git merge nombre-rama        # Fusionar una rama en la actual
git rebase main              # Rebase (reestructurar historial)
git add archivo_conflicto.js # Resolver conflictos después de merge/rebase
git commit
```

### 8. Stash (guardar cambios temporalmente)

```bash
git stash                       # Guardar cambios sin hacer commit
git stash list                  # Ver lista de stashes guardados
git stash pop                   # Recuperar y aplicar el último stash
git stash apply stash@{0}       # Aplicar un stash específico (sin borrarlo)
```

### 9. Logs e historial

```bash
git log                         # Ver historial de commits
git log --oneline               # Historial resumido
git log --oneline --graph --all # Ver historial con gráfico
git log -- archivo.js           # Ver cambios en un archivo específico
```

### 10. Reset y revert

```bash
git checkout -- archivo.js        # Deshacer cambios en archivos sin stage
git reset archivo.js              # Quitar archivos del staging area (sin borrar cambios)
git revert <ID-del-commit>        # Revertir un commit seguro (repositorio compartido)
git reset --hard <ID-del-commit>  # Reset para volver a un commit previo (destructivo)
```

### 11. Limpiar archivos no rastreados

```bash
git clean -f                         # Eliminar archivos no rastreados
git clean -fd                        # Eliminar también carpetas
```

> ⚠️ **Precaución:** Estos archivos se eliminan permanentemente.

### 12. Tags (etiquetas)

```bash
git tag v1.0.0                        # Crear un tag
git tag -a v1.0.0 -m "Versión 1.0.0"  # Crear un tag con mensaje (annotated tag)
git tag                               # Listar tags existentes
git push origin --tags                # Subir tags al remoto
```

### 13. Cherry-pick

Aplicar un commit específico de otra rama:

```bash
git cherry-pick <ID-del-commit>
```

### 14. Alias útiles

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

### 15. Modifico commit

```bash
 git commit --amend     # vuelvo al ultimo commit y lo puedo modificar el NOMBRE/DESCRIPCIÓN
 git rebase -i head~3   # te muestra los ultimo commit a los que puedes volver / edit: para volver

 pick 8442d96 commit 03
 edit a6863b6 commit 04 # vuelve
 pick f8284fe Ultimo commit

 git rebase --continue      # inicializar
```

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. Qué es Git y en qué se diferencia de otros sistemas de control de versiones como SVN o Mercurial?

Git es un **sistema de control de versiones distribuido** que permite a múltiples desarrolladores trabajar en el mismo proyecto sin depender de un único servidor central.

#### A diferencia de SVN o Mercurial, Git:

- No necesita conexión constante a un servidor central.
- Cada clon del repositorio contiene **todo el historial**.
- Ofrece ramas (branches) **ligeras y rápidas**, facilitando la experimentación y trabajo paralelo.

### 2. Explica la diferencia entre los estados de un archivo en Git: untracked, modified, staged y committed.

- **Untracked**: El archivo no está siendo seguido por Git.
- **Modified**: El archivo fue modificado pero aún no está preparado para un commit.
- **Staged**: El archivo está listo para ser incluido en el próximo commit (`git add`).
- **Committed**: El archivo ya está guardado en el historial del repositorio.

### 3. ¿Cuál es la diferencia entre git clone y git fork y en qué contexto usarías cada uno?

- **`git clone`**: Crea una copia **local** de un repositorio remoto.
- **`git fork`**: Duplica un repositorio **en tu cuenta de GitHub u otra plataforma**, para luego clonar y trabajar en tu propia copia.

#### Uso recomendado:

- `clone`: Cuando tienes permisos directos sobre el repositorio original.
- `fork`: Cuando deseas contribuir a un proyecto sin modificar el original directamente.

### 4. Describe la función de los comandos git fetch, git pull y git push.

- **`git fetch`**: Descarga cambios del remoto pero **no los fusiona** automáticamente.
- **`git pull`**: Hace un `fetch` + `merge` para actualizar tu rama local.
- **`git push`**: Sube tus commits locales al repositorio remoto.

### 5. Si accidentalmente borras un archivo en tu proyecto, ¿cómo lo recuperarías usando Git?

```bash
git checkout -- nombre_del_archivo
```

O si el archivo estaba eliminado pero no has hecho commit:

```bash
git restore nombre_del_archivo
```

Si ya hiciste commit y lo subiste, puedes usar:

```bash
git checkout commit_id -- nombre_del_archivo
```

---

## 🟡 Intermedio

### 6. Explica la diferencia entre git merge y git rebase. ¿En qué situaciones usarías uno u otro?

- **`git merge`**: Une ramas creando un **commit de merge**, conservando el historial completo.
- **`git rebase`**: Reaplica los commits de una rama sobre otra, **reescribiendo el historial**.

**Uso recomendado:**

- `merge`: Ideal para preservar la historia de cambios en equipos grandes.
- `rebase`: Para mantener un historial **lineal y limpio**.
  ### 7. Tienes un commit con un mensaje incorrecto y aún no lo has subido al repositorio remoto. ¿Cómo lo corregirías?

```bash
git commit --amend -m "Nuevo mensaje corregido"
```

### 8. Durante un git pull, encuentras un conflicto de merge. Describe el proceso paso a paso para resolverlo correctamente.

1. Identificar archivos en conflicto:
   ```bash
   git status
   ```
2. Editar manualmente los archivos para resolver conflictos.
3. Marcar los archivos como resueltos:
   ```bash
   git add archivo_resuelto
   ```
4. Completar el merge:
   ```bash
   git commit
   ```

### 9. ¿Qué hace el comando git stash y cómo se recupera el trabajo guardado en un stash específico?

- **`git stash`** guarda cambios sin comprometerlos en un commit.
- Para ver los stashes disponibles:
  ```bash
  git stash list
  ```
- Para aplicar un stash específico:
  ```bash
  git stash apply stash@{n}
  ```
- Para aplicar y eliminarlo:
  ```bash
  git stash pop stash@{n}
  ```
  ### 10. Explica qué es un detached HEAD en Git y cómo volver al flujo normal de trabajo después de estar en ese estado.

Un **detached HEAD** ocurre cuando revisas un commit directamente en lugar de una rama.  
Para volver a una rama normal:

```bash
git checkout nombre_de_rama
```

---

## 🔴 Avanzado

### 11. ¿Cuál es la diferencia entre un branch local y uno remoto? ¿Cómo sincronizarías un branch local que está desactualizado respecto al remoto?

- **Branch local**: Rama que existe solo en tu máquina.
- **Branch remoto**: Rama alojada en un servidor como GitHub.

Para sincronizar:

```bash
git fetch
git merge origin/nombre_de_rama
```

O directamente:

```bash
git pull
```

### 12. ¿Cómo usarías git bisect para encontrar un commit que introdujo un bug en el proyecto?

1. Iniciar bisect:
   ```bash
   git bisect start
   ```
2. Marcar commit bueno:
   ```bash
   git bisect good commit_id
   ```
3. Marcar commit malo:
   ```bash
   git bisect bad commit_id
   ```
4. Git va probando commits hasta encontrar el problemático.
5. Finalizar:
   ```bash
   git bisect reset
   ```

### 13. Explica la diferencia entre git reset, git revert y git restore. ¿En qué casos elegirías cada uno?

- **`git reset`**: Deshace commits y puede modificar el historial. **Peligroso** si ya se subió al remoto.
- **`git revert`**: Crea un commit nuevo que revierte cambios **sin alterar el historial**.
- **`git restore`**: Restaura archivos individuales a un estado previo.

**Uso recomendado:**

- `reset`: Para trabajo local no compartido.
- `revert`: Para revertir commits en repositorios compartidos.
- `restore`: Para restaurar archivos específicos.

### 14. En un proyecto con muchos colaboradores, ¿qué estrategias seguirías para mantener un historial de commits limpio y entendible?

- Usar **commits atómicos y descriptivos**.
- Adoptar una convención como **Conventional Commits**.
- Hacer `rebase` antes de `merge` para evitar merges innecesarios.
- Revisar cambios mediante **Pull Requests**.
- Hacer limpieza periódica de ramas obsoletas.

### 15. Describe cómo configurar y usar hooks en Git, y da un ejemplo práctico de un hook que podría mejorar la calidad del código.

Los **hooks** son scripts que se ejecutan automáticamente en ciertos eventos de Git.

**Configuración:**

1. Ubicación: `.git/hooks/`
2. Crear un archivo como `pre-commit` y darle permisos de ejecución:
   ```bash
   chmod +x .git/hooks/pre-commit
   ```

**Ejemplo práctico (validar lint antes de commit):**

```bash
#!/bin/sh
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ Lint falló. Corrige los errores antes de hacer commit."
  exit 1
fi
```

Esto evita que se suba código con errores de estilo.

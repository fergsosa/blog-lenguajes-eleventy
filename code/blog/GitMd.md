---
layout: layout-post.njk
title: Git
img: /img/portada/git.avif
description: Ideas principales de Git
tags: ["blog", "lenguajes"]
date: "2023-02-04"
---

# {{title}}

![{{title}}]({{img}})

<!-- [🔼 Regresar](#temas) -->

## Temas {#temas#}

- [Flujo de trabaja GitFlow](#flujo-de-trabaja-git-flow)
- [Comandos para la terminal](#comandos-para-la-terminal)
- [ps > procesos](#ps-procesos)
- [configuración GLOBAL inicial de git](#configuración-global-inicial-de-git)
- [Comandos para GIT](#comandos-para-git)
- [Tipos de commits](#tipos-de-commits)
- [GitHub](#git-hub)
- [Creado de Local a GitHub](#creado-de-Local-a-git-hub)

## Comandos Git

```bash
mkdir            # crear carpeta
rmdir            # eliminar carpeta
ls               # contenido de carpeta
git init         # inicializar
git add          # AGREGA a staged
git status       # estado
git rm --cached  # quita del area de staged
git commit -m    # REGISTRA el cambio al repositorio Local
git              # inicializar
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
 git rebase --continue # inicializar
```

---

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
git reset id          # vuelve al commit del id
git reset --soft id   # staging / con add
git reset --mixed id  # pc / sin add
git reset --hard id   # commit sin modificar vació
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
 git stash       # Guardar temporalmente los cambios de la rama
 git stash list  # Guardar temporalmente los cambios de la rama
 git stash pop   # para volver al commit guardado
```

[\
🔼 Regresar](#temas)

# Flujo de trabaja GitFlow {#flujo-de-trabaja-git-flow#}

|  ramas  | componente                        |
| :-----: | --------------------------------- |
|  main   | v0.1 Rama principal               |
| hotfix  | v0.2 Corregir error rápidamente   |
| release | v1.0 publicación                  |
| develop | integra todas las funcionalidades |
| feature | funcionalidades                   |

[\
🔼 Regresar](#temas)

# Comandos para la terminal {#comandos-para-la-terminal#}

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

# ps > procesos {#ps-procesos#}

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

# configuración GLOBAL inicial de git {#configuración-global-inicial-de-git#}

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

# 🔻 Comandos para GIT {#comandos-para-git#}

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

# Tipos de commits {#tipos-de-commits#}

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

---

```bash
 git reset --hard HEAD~1  # DESHACER(elimina) el ultimo registro/commit
 git reset --soft HEAD~1  # DESHACER(elimina) el ultimo registro/commit
 soft                     # MANTIENE los cambios de los archivos
 hard                     # MANTIENE los cambios de los archivos
 HEAD                     # ULTIMO realizado
 ~1                       # CANTIDAD de pasos en el historial
```

---

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

---

```bash
 git tag                # MUESTRA las etiquetas
 git tag nroVersion     # CREA las etiquetas
 git tag -d nroVersion  # ELIMINA las etiquetas
 git show nroVersion    # MUESTRA info de una etiquetas

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

# GitHub {#git-hub#}

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

# Creado de Local a GitHub {#creado-de-Local-a-git-hub#}

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

git   # inicializar
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

[🔼 Regresar](#temas)

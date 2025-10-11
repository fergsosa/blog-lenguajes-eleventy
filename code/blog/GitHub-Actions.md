---
layout: layout-post.njk
title: GitHub Actions
img: /img/portada/github-actions.avif
description: Una automatización de flujo de trabajo continua e integrada.
tags: ["blog", "herramientas"]
date: "2020-12-11"
---

# {{title}}

![img]({{img}})

## ¿Qué es {{title}}?

**GitHub Actions** es una plataforma de automatización integrada en GitHub que permite crear flujos de trabajo (workflows) para ejecutar tareas automáticamente en respuesta a eventos del repositorio, como _push_, _pull request_ o _release_.

**A diferencia de otras herramientas** de CI/CD como Jenkins, GitLab CI o CircleCI, GitHub Actions está completamente integrada con el ecosistema de GitHub, eliminando la necesidad de configuraciones externas y ofreciendo un entorno inmediato para ejecutar procesos directamente sobre el código fuente.

### 1. ¿Para qué se usa?

Se usa principalmente para **automatizar procesos de desarrollo**:

- **Integración continua (CI):**\
  ejecutar tests, linting, compilaciones y validaciones antes de fusionar código.
- **Despliegue continuo (CD):**\
  publicar aplicaciones en servidores, contenedores o servicios cloud.
- **Mantenimiento del proyecto:**\
  generar documentación, limpiar ramas, gestionar versiones o ejecutar scripts programados.

> Funciona mejor en **repositorios alojados en GitHub** donde se busca **automatizar tareas repetitivas** sin depender de infraestructura externa.

### 2. ¿Qué puedo construir con {{title}}?

Con GitHub Actions puedes crear:

- **Workflows personalizados:**\
  combinaciones de pasos que responden a eventos específicos.
- **Acciones reutilizables:**\
  piezas de código compartidas que pueden usarse en múltiples proyectos.
- **Pipelines de CI/CD completos:**\
  para compilar, probar y desplegar aplicaciones automáticamente.
- **Automatizaciones internas:**\
  como etiquetar issues, asignar revisores o sincronizar ramas.

> Los flujos se definen en archivos `.yml` dentro de `.github/workflows/`, lo que permite versionarlos junto al código.

### 3. ¿Cuándo es más conveniente usarlo?

Usar GitHub Actions es más conveniente cuando:

- El código ya está alojado en **GitHub**.
- Se busca una **configuración rápida y simple** sin servidores adicionales.
- Se necesitan **acciones reutilizables** o compartir automatizaciones entre proyectos.
- Se requiere **escalabilidad automática** sin gestionar infraestructura.

> Sin embargo, si se necesita un control muy fino sobre los servidores o entornos de ejecución, puede convenir más una herramienta dedicada como Jenkins o un sistema de CI interno.

## Buenas prácticas recomendadas

- **Mantener los workflows simples y modulares:**\
  dividir tareas grandes en archivos separados.
- **Usar variables y secretos**\
  mediante `env` y `secrets` para proteger credenciales.
- **Reutilizar acciones existentes**\
  del marketplace antes de crear nuevas.
- **Evitar duplicar código**\
  usando `jobs` y `composite actions`.
- **Probar localmente**\
  con herramientas como `act` antes de subir cambios.
- **Usar nombres descriptivos**\
  en pasos y jobs para facilitar la lectura.
- **Documentar los workflows**\
  y mantener versiones actualizadas de las dependencias.

---

## Resumen rápido

#### ✅ Fortalezas principales:

- Integración nativa con GitHub.
- Fácil configuración y despliegue.
- Amplio ecosistema de acciones reutilizables.
- Escalabilidad y soporte multiplataforma.

#### ⚠️ Debilidades principales:

- Menor control sobre la infraestructura.
- Límites de uso en planes gratuitos.
- Menor flexibilidad para entornos complejos.

#### 🛠️ Cuándo usarlo:

- En proyectos alojados en GitHub.
- Cuando se busca automatizar CI/CD de forma rápida.
- Para mantener tareas repetitivas automatizadas.

#### 🚫 Cuándo evitarlo:

- Si se requiere infraestructura dedicada o privada.
- Cuando el código no está en GitHub.
- Si los pipelines son altamente personalizados o demandan control avanzado.

---

# Temas {#temas#}

- [inicio](#que-es-github-actions)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Variables más utilizadas](#variables-mas-utilizadas)
- [Estructura básica](#estructura-basica)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#otros-articulos)

---

# Conceptos relacionados

Antes de trabajar con GitHub Actions, es importante conocer algunos **conceptos clave** que ayudan a entender su funcionamiento y aprovechar todo su potencial:

### Repositorio:

espacio donde se almacena el código y la configuración de los workflows.

### Workflow:

conjunto de procesos automatizados definidos en archivos YAML dentro de `.github/workflows/`.

### Job:

bloque de ejecución dentro de un workflow que agrupa varios pasos y se ejecuta en un entorno aislado.

### Step:

instrucción o comando individual dentro de un job (por ejemplo, ejecutar un script o usar una acción).

### Action:

tarea reutilizable que puede provenir del marketplace o ser personalizada (por ejemplo, configurar Node.js, subir artefactos, etc.).

### Runner:

máquina (virtual o propia) donde se ejecutan los jobs. GitHub ofrece _runners hospedados_ y permite _runners autogestionados_.

### Event:

disparador que inicia el workflow (como `push`, `pull_request`, `schedule`, `release`, etc.).

### Context:

variables de entorno que almacenan información sobre el workflow, el repositorio o el evento.

### Secret:

valores cifrados usados para proteger tokens, contraseñas o credenciales.

### Artifact:

archivos generados por un workflow que pueden almacenarse o compartirse entre jobs.

### Matrix:

técnica que permite ejecutar el mismo job en múltiples combinaciones de versiones o entornos (por ejemplo, distintas versiones de Node.js).

[🔼 temas](#temas)

---

# Herramientas recomendadas

Estas herramientas y servicios complementan o mejoran el desarrollo, depuración y mantenimiento de workflows:

### VSCode

Editor ideal para trabajar con archivos YAML y repositorios GitHub.

### act

Ejecuta workflows de GitHub Actions localmente, útil para probar sin hacer push.

### GitHub CLI (`gh`)

Permite interactuar con GitHub desde la terminal (crear workflows, revisar logs, etc.).

### GitHub Marketplace

Repositorio oficial de acciones reutilizables listas para integrar.

### GitHub Secrets

Sistema integrado para gestionar variables sensibles de forma segura.

### Actions Dashboard

Interfaz visual en GitHub para ver ejecuciones, logs y errores de workflows.

### Docker

Base de muchas acciones que requieren entornos personalizados o dependencias específicas.

### YAML Linter

Extensiones o herramientas (como _YAML Validator_) que ayudan a validar la sintaxis de los archivos `.yml`.

### GitHub REST y GraphQL API

Para extender la automatización e integrar GitHub Actions con otros sistemas.

### GitHub Environments

Permiten gestionar despliegues controlados por entorno (staging, producción, etc.).

> Esta referencia técnica te proporciona los fundamentos y herramientas esenciales para **entender, crear y mantener** flujos de trabajo eficientes en GitHub Actions.

[🔼 temas](#temas)

---

# Variables más utilizadas

### Top 10 en la práctica

{% raw %}

```bash
1.  ${{ github.repository }}    # Repositorio actual completo
2.  ${{ github.ref_name }}      # Rama o etiqueta
3.  ${{ github.sha }}           # Commit ID único
4.  ${{ github.actor }}         # Iniciador del flujo
5.  ${{ github.event_name }}    # Evento que activó
6.  ${{ github.workflow }}      # Nombre del archivo
7.  ${{ github.run_number }}    # Número de ejecución
8.  ${{ runner.os }}            # Sistema operativo runner
9.  ${{ GITHUB_WORKSPACE }}     # Directorio de trabajo
10. ${{ job.status }}           # Estado de la tarea
```

{% endraw %}

---

### Contexto del repositorio

| Variable            | Descripción                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| `github.repository` | Nombre completo del repositorio (`usuario/repositorio`).               |
| `github.ref`        | Referencia del evento (por ejemplo: `refs/heads/main`).                |
| `github.sha`        | Hash del commit actual que disparó el workflow.                        |
| `github.actor`      | Usuario que ejecutó la acción (quien hizo el push, PR, etc.).          |
| `github.event_name` | Tipo de evento que disparó el workflow (`push`, `pull_request`, etc.). |
| `github.workflow`   | Nombre del workflow que se está ejecutando.                            |
| `github.run_id`     | ID único del flujo actual.                                             |
| `github.run_number` | Número incremental del run (útil para versiones automáticas).          |

### Contexto del job y pasos

| Variable                    | Descripción                                                 |
| --------------------------- | ----------------------------------------------------------- |
| `job.status`                | Estado del job (`success`, `failure`, `cancelled`).         |
| `steps.<id>.outputs.<name>` | Accede a la salida (`output`) de un paso anterior.          |
| `runner.os`                 | Sistema operativo del runner (`Linux`, `Windows`, `macOS`). |
| `runner.arch`               | Arquitectura del runner (`X64`, `ARM`, etc.).               |
| `runner.name`               | Nombre del runner asignado.                                 |

### Entorno y rutas

| Variable             | Descripción                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `GITHUB_WORKSPACE`   | Ruta del directorio donde se clona el repositorio.                        |
| `GITHUB_ACTION_PATH` | Ruta del action actual (si es un action personalizado).                   |
| `GITHUB_PATH`        | Archivo donde puedes añadir rutas al `$PATH`.                             |
| `GITHUB_ENV`         | Archivo donde puedes definir variables de entorno para pasos posteriores. |

### Branch y tags

| Variable          | Descripción                                              |
| ----------------- | -------------------------------------------------------- |
| `github.head_ref` | Branch fuente de un `pull_request`.                      |
| `github.base_ref` | Branch destino de un `pull_request`.                     |
| `github.ref_name` | Nombre limpio de la referencia (`main`, `v1.0.0`, etc.). |
| `github.ref_type` | Tipo de referencia (`branch` o `tag`).                   |

### Salidas y resultados

| Variable                        | Descripción                                 |
| ------------------------------- | ------------------------------------------- |
| `outputs.<name>`                | Salida definida por un job o step.          |
| `needs.<job_id>.outputs.<name>` | Accede a la salida de otro job dependiente. |

### Variables útiles de entorno

| Variable | Descripción                                       |
| -------- | ------------------------------------------------- |
| `CI`     | Siempre se establece en `true` en GitHub Actions. |
| `HOME`   | Directorio home del runner.                       |
| `PATH`   | Variable PATH estándar del sistema.               |
| `PWD`    | Directorio actual de trabajo.                     |

[🔼 temas](#temas)

---

# Estructura básica

Estructura básica de un archivo de GitHub Action (`.yml`)

```bash
# 🔻nombre del workflow (identificador general)
name:       # "Identifica el flujo"


# 🔻 Eventos que activan el workflow
on:         # "Dispara la acción"
  push:     # "Evento de push"
    branches: ["main"]  # "Solo se ejecuta en main"


# 🔻conjunto de tareas a ejecutar
jobs:       # "Define los trabajos"

  # 🔻nombre del job
  build:    # "Etiqueta del trabajo"

    # 🔻Sistema del runner
    runs-on: ubuntu-latest

    # 🔻lista de pasos
    steps:  # "Secuencia de comandos"

      - name: Checkout código     # Nombre de paso
        uses: actions/checkout@v4 # Clona el repositorio

      - name: Instalar dependencias
        run: npm install          # Ejecuta comandos

      - name: Ejecutar tests
        run: npm test             # Prueba el proyecto

      - name: Subir artefactos
        uses: actions/upload-artifact@v4
        with:                     # Define configuraciones
          name: build
          path: dist/             # Guarda resultados
```

#### 🧩 Resumen rápido:

| Elemento  | Ejemplo                   | Función (3 palabras)   |
| --------- | ------------------------- | ---------------------- |
| `name`    | `CI Pipeline`             | Identifica el flujo    |
| `on`      | `push`, `pull_request`    | Dispara la acción      |
| `jobs`    | `build`, `test`, `deploy` | Define los trabajos    |
| `runs-on` | `ubuntu-latest`           | Sistema del runner     |
| `steps`   | lista de pasos            | Secuencia de comandos  |
| `uses`    | `actions/checkout@v4`     | Usa acción externa     |
| `run`     | `npm install`             | Ejecuta comandos       |
| `with`    | parámetros opcionales     | Define configuraciones |
| `env`     | variables globales        | Configura entorno      |

[🔼 temas](#temas)

---

# Comandos

A continuación se muestran **fragmentos de código cortos y directos** para las operaciones más comunes:

### 1. Definir un workflow básico

```yaml
name: CI Workflow
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Instalar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"
      - run: npm install
      - run: npm test
```

### 2. Usar secretos

```yaml
- name: Usar token secreto
  run: echo "TOKEN=$SECRET_TOKEN"
  env:
    SECRET_TOKEN: ${{ secrets.MY_SECRET }}
```

### 3. Ejecutar comandos de shell

```yaml
- name: Limpiar proyecto
  run: |
    rm -rf dist
    mkdir dist
```

### 4. Matrices (matrix) para múltiples entornos

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm test
```

### 5. Subir artefactos

```yaml
- name: Subir resultados de prueba
  uses: actions/upload-artifact@v3
  with:
    name: test-results
    path: ./tests/results
```

### 6. Descargar artefactos

```yaml
- name: Descargar resultados
  uses: actions/download-artifact@v3
  with:
    name: test-results
    path: ./downloaded
```

### 7. Condiciones (`if`)

```yaml
- name: Solo en main
  if: github.ref == 'refs/heads/main'
  run: echo "Deploy en rama principal"
```

### 8. Notificaciones por Slack (ejemplo con acción existente)

```yaml
- name: Notificar Slack
  uses: slackapi/slack-github-action@v1.23.0
  with:
    channel-id: "C123456"
    slack-message: "Build terminado!"
  env:
    SLACK_BOT_TOKEN: ${{ secrets.SLACK_TOKEN }}
```

### 9. Ejecutar en un cron schedule

```yaml
on:
  schedule:
    - cron: "0 0 * * *" # todos los días a medianoche
```

### 10. Reutilizar workflows (`workflow_call`)

```yaml
on:
  workflow_call:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Este workflow puede ser llamado desde otro workflow"
```

> Estos snippets proporcionan una **referencia rápida y práctica** para la mayoría de tareas comunes en GitHub Actions, desde la ejecución básica hasta la automatización avanzada.

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Qué es GitHub Actions y cuál es su propósito principal?

GitHub Actions es una plataforma de automatización integrada en GitHub que permite ejecutar flujos de trabajo (workflows) automáticamente ante eventos del repositorio, como _push_ o _pull request_. Su objetivo es facilitar CI/CD y tareas repetitivas sin infraestructura externa.

### 2. ¿Dónde se definen los workflows de GitHub Actions?

En archivos YAML ubicados dentro del directorio `.github/workflows/` del repositorio.

### 3. ¿Qué es un job dentro de un workflow?

Un **job** es un conjunto de pasos que se ejecutan en un mismo entorno (runner). Cada job puede ejecutarse en paralelo o depender de otros jobs.

### 4. ¿Qué hace la instrucción `uses:` en un step?

`uses:` indica que se está utilizando una **acción predefinida** (propia o del marketplace), en lugar de ejecutar un comando directo con `run:`.

### 5. ¿Qué diferencia hay entre `run:` y `uses:`?

- **`run:`**\
  ejecuta comandos de shell directamente.
- **`uses:`**\
  ejecuta una acción existente o definida por otro repositorio.

---

## 🟡 Intermedio

### 6. ¿Qué es un runner y qué tipos existen?

Un **runner** es la máquina donde se ejecuta el workflow.\
Tipos:

- **GitHub-hosted runners:**\
  provistos por GitHub (Ubuntu, Windows, macOS).
- **Self-hosted runners:**\
  configurados por el usuario, permiten mayor control sobre el entorno.

### 7. ¿Qué es un evento (event) en GitHub Actions?

Es el **disparador** que inicia un workflow, como `push`, `pull_request`, `release`, `workflow_dispatch`, o `schedule`.

### 8. ¿Cómo se accede a un secreto dentro de un workflow?

A través de la sintaxis `${{ secrets.NOMBRE_DEL_SECRETO }}` dentro de un `env:` o `run:`.

### 9. ¿Qué es un contexto (`context`) en GitHub Actions?

Un contexto es un objeto que almacena información sobre el workflow, el evento o el repositorio. Ejemplos: `github`, `env`, `job`, `runner`.
Ejemplo: `${{ github.ref }}` devuelve la rama que activó el workflow.

### 10. ¿Cómo se pueden compartir artefactos entre jobs?

Usando las acciones `upload-artifact` y `download-artifact`.
Ejemplo:

```yaml
- uses: actions/upload-artifact@v3
  with:
    name: build-output
    path: ./dist
```

---

## 🔴 Avanzado

### 11. ¿Qué es una estrategia de matriz (`matrix strategy`) y para qué sirve?

Permite ejecutar un mismo job en múltiples combinaciones de entornos (por ejemplo, distintas versiones de Node.js o sistemas operativos).
Ejemplo:

```yaml
strategy:
  matrix:
    node: [18, 20]
```

### 12. ¿Cómo se puede ejecutar un workflow de manera manual?

Definiendo el evento `workflow_dispatch`, que habilita un botón “Run workflow” en GitHub.

### 13. ¿Qué son las acciones compuestas (`composite actions`)?

Son acciones personalizadas que agrupan varios pasos (`steps`) y pueden reutilizarse en distintos workflows. Se definen en el repositorio bajo `.github/actions/`.

### 14. ¿Cómo puedes condicionar la ejecución de un step o job?

Usando la propiedad `if:`.
Ejemplo:

```yaml
if: github.ref == 'refs/heads/main'
```

Esto hace que el paso se ejecute solo si la rama activa es `main`.

### 15. ¿Qué buenas prácticas se deben seguir al escribir workflows en GitHuActions?

- Mantener los workflows modulares y claros.
- Usar secretos para credenciales.
- Reutilizar acciones existentes.
- Probar localmente con `act`.
- Evitar pasos innecesarios y documentar cada job.
- Fijar versiones (`@v3`) para evitar fallos por actualizaciones automáticas.

> Estas preguntas cubren la comprensión general, el uso técnico y las buenas prácticas necesarias para desenvolverse con soltura en **GitHub Actions**, tanto en entornos de desarrollo como de despliegue automatizado.

[🔼 temas](#temas)

---
layout: layout-post.njk
title: GitHub
img: /img/portada/github.avif
description: Repositorios remotos, colaboración código.
tags: ["blog", "herramientas"]
date: "2023-07-02"
---

# {{title}}

![img]({{img}})

## 1. ¿Qué es {{title}}?

**GitHub** es una plataforma basada en la nube para el control de versiones y la colaboración en proyectos de software.  
Está construida sobre **Git**, un sistema de control de versiones distribuido, y añade funcionalidades como:

- **Interfaz web** para gestionar repositorios.
- Herramientas de **colaboración**: issues, pull requests y revisiones de código.
- Integración con **CI/CD** (acciones automatizadas).
- **Gestión de equipos y organizaciones**.
- **Hosting gratuito** para proyectos de código abierto.

**Diferencias frente a otros:**

- GitHub vs **GitLab**: GitLab tiene más herramientas integradas (DevOps completo), mientras que GitHub destaca por su comunidad y ecosistema.
- GitHub vs **Bitbucket**: Bitbucket se integra mejor con el ecosistema Atlassian (Jira, Trello), GitHub es más universal y popular.

---

### 2. ¿Para qué se usa?

GitHub se utiliza principalmente para:

- **Control de versiones** y seguimiento de cambios en proyectos.
- **Trabajo colaborativo** entre desarrolladores, diseñadores y equipos técnicos.
- **Revisión y mejora de código** mediante _pull requests_.
- **Automatización de flujos de trabajo** como pruebas, despliegues y documentación.
- **Portafolios profesionales** para mostrar proyectos y habilidades.

**Contextos ideales:**

- Equipos distribuidos trabajando en un mismo proyecto.
- Proyectos de código abierto con múltiples colaboradores.
- Empresas que requieren trazabilidad y control de cambios.
- Estudiantes y desarrolladores que buscan aprender y compartir código.

---

### 3. ¿Qué puedo construir con {{title}}?

Con GitHub puedes crear y gestionar prácticamente cualquier tipo de proyecto:

- **Aplicaciones web** y móviles.
- **Librerías o frameworks** para comunidades de desarrolladores.
- **Documentación técnica** utilizando Markdown.
- **Automatizaciones y flujos DevOps** con GitHub Actions.
- **Páginas web** mediante GitHub Pages.

> _Ejemplo: alojar un portafolio personal con GitHub Pages._

---

### 4. ¿Cuándo es más conveniente usarlo?

Usar GitHub es más recomendable cuando:

- Buscas **colaboración y comunidad**, ya que es la plataforma con más usuarios activos.
- Tu proyecto necesita **visibilidad pública**, como proyectos open source.
- Quieres integrar herramientas de automatización y despliegue rápido.
- Trabajas con equipos que requieren una **historia detallada** de cambios y revisiones.

No es la mejor opción si:

- Tu empresa necesita **privacidad total y control local** sin depender de un servicio en la nube.
- Buscas una herramienta **todo en uno** con DevOps integrado como GitLab.

---

## Buenas prácticas recomendadas

---

- **Nombres descriptivos** para commits y ramas.
- Mensajes de commit claros y estructurados, por ejemplo:
  - `feat`: agregar funcionalidad de login
  - `fix`: corregir error en validación de email
  - `docs`: actualizar guía de instalación
- **Uso de ramas** para organizar el flujo de trabajo:
  - `main` o `master`: versión estable y lista para producción.
  - `develop`: rama de integración para desarrollo.
  - `feature/nombre`: nuevas funcionalidades.
  - `hotfix/nombre`: correcciones urgentes.
- Revisar el código mediante **pull requests** antes de fusionar.
- Mantener **documentación actualizada** dentro del repositorio.
- Usar **Issues y Projects** para gestionar tareas y bugs.
- Integrar **pruebas automáticas** y despliegues continuos cuando sea posible.

## Resumen rápido

> **GitHub** es la plataforma más popular para gestionar proyectos de software de forma colaborativa, ofreciendo control de versiones, automatización y visibilidad pública.

- **Fortalezas principales:**
  - Gran comunidad y soporte.
  - Integración con herramientas externas y CI/CD.
  - Ideal para proyectos open source.
  - Funciones gratuitas muy completas.
- **Debilidades principales:**
  - Menor privacidad en la versión gratuita.
  - Dependencia de la nube.
  - Algunas herramientas avanzadas requieren plan pago.
- **Cuándo usarlo:**
  - Proyectos colaborativos y de código abierto.
  - Creación de portafolios y muestras de trabajo.
  - Automatización de flujos de desarrollo y despliegue.
- **Cuándo evitarlo:**
  - Proyectos ultra confidenciales sin conexión a internet.
  - Empresas que prefieren soluciones auto hospedadas.
  - Casos donde se requiera un sistema DevOps más integrado.

---

# Temas {#temas#}

- [inicio](#node-js)
- [Conceptos relacionados](#conceptos-relacionados)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Comandos](#comandos)
- [Conceptos Claves](#conceptos-claves)
- [Otros artículos](#categorias)

IMPORTANTE: Formatea toda la respuesta usando **exclusivamente Markdown**. Incluye títulos, subtítulos, listas, negritas y cursivas donde sea apropiado para mejorar la legibilidad y estructura.

Lenguaje: TypeScript (7)

---

# Conceptos relacionados

Antes de usar GitHub de forma efectiva, es importante conocer algunos conceptos clave que se relacionan directamente con la plataforma y su funcionamiento.

### 1. **Git**

Sistema de **control de versiones distribuido** que permite registrar cambios en el código, trabajar de forma colaborativa y mantener un historial completo de modificaciones.

> _Git es la base sobre la que se construye GitHub._

---

### 2. **Repositorio (Repo)**

Espacio donde se almacena el proyecto, incluyendo:

- Código fuente.
- Archivos de configuración.
- Documentación.
- Historial de cambios (commits).

Puede ser **público** (visible para todos) o **privado** (acceso restringido).

---

### 3. **Commit**

Registro puntual de cambios realizados en el proyecto.

- Incluye un **mensaje descriptivo** sobre qué se modificó.
- Funciona como un _checkpoint_ en la evolución del código.

> Ejemplo de mensaje de commit:  
> `feat: agregar formulario de registro`

---

### 4. **Branch (Rama)**

Versión paralela del proyecto que permite trabajar en nuevas funciones o correcciones sin afectar la rama principal.

Flujo común de ramas:

- `main`: Versión estable.
- `develop`: Integración de cambios en desarrollo.
- `feature/nombre`: Nuevas funcionalidades.
- `hotfix/nombre`: Correcciones urgentes.

---

### 5. **Pull Request (PR)**

Solicitud para fusionar cambios de una rama en otra, generalmente revisada por otros miembros del equipo antes de aprobarla.

- Permite **revisar código**, **discutir cambios** y **mantener calidad**.

---

### 6. **Issue**

Herramienta para **registrar tareas, bugs o mejoras** dentro de un proyecto.

- Puede asignarse a usuarios específicos.
- Facilita la organización y seguimiento de problemas.

---

### 7. **Fork**

Copia de un repositorio en tu propia cuenta para:

- Probar cambios sin afectar el original.
- Contribuir a proyectos open source.

---

### 8. **Merge**

Proceso de **fusionar cambios** de una rama a otra.

Tipos comunes de merge:

- **Merge commit:** conserva el historial completo.
- **Squash and merge:** combina varios commits en uno solo.
- **Rebase and merge:** integra cambios de forma lineal.

---

### 9. **Markdown**

Lenguaje de marcado ligero usado en GitHub para:

- Documentación (`README.md`).
- Issues y Pull Requests.
- Wikis y páginas web.

---

### 10. **GitHub Actions**

Sistema de **automatización** para ejecutar flujos de trabajo como:

- Pruebas automáticas.
- Despliegues a producción.
- Análisis de calidad de código.

---

### 11. **GitHub Pages**

Servicio gratuito de GitHub para **publicar sitios web estáticos** directamente desde un repositorio.

---

### 12. **Licencias**

Definen cómo otros pueden usar, modificar y distribuir tu código.

Ejemplo:

- `MIT`: Libre uso con atribución.
- `GPL`: Uso libre, pero derivados deben ser open source.

[🔼 temas](#temas)

---

# Herramientas recomendadas

[🔼 temas](#temas)

---

# Snippets rápidos

## Snippets Rápidos

Fragmentos de código y configuraciones que se utilizan con frecuencia en proyectos de GitHub.

### 1. **Estructura básica de README.md**

Archivo principal para documentar un proyecto en GitHub.

````markdown
# Nombre del Proyecto

Descripción breve de lo que hace el proyecto y su propósito.

## Instalación

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
npm install
```
````

## Uso

```bash
npm run dev
```

## Contribuir

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcion`).
3. Realiza tus cambios y haz commit (`git commit -m 'feat: descripción del cambio'`).
4. Haz push a la rama (`git push origin feature/nueva-funcion`).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.

```

---

### 2. **.gitignore básico para Node.js**
Evitar subir archivos innecesarios al repositorio.


node_modules/
.env
dist/
coverage/

```

---

### 3. **Flujo típico de ramas en GitHub**

Estructura recomendada para ramas en proyectos colaborativos.

```

main # Versión estable lista para producción
develop # Rama de integración para desarrollo
feature/ # Nuevas funcionalidades
hotfix/ # Correcciones urgentes
release/ # Versión previa a producción

```

---

### 4. **Template para Issues**

Archivo `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
## Descripción del bug

Explica claramente el problema.

## Pasos para reproducir

1. Ir a...
2. Hacer clic en...
3. Ver error.

## Comportamiento esperado

Explica lo que debería suceder.

## Información adicional

Capturas de pantalla, versiones, etc.
```

---

### 5. **Template para Pull Requests**

Archivo `.github/PULL_REQUEST_TEMPLATE.md`

```markdown
## Descripción

Breve resumen de los cambios realizados.

## Tipo de cambio

- [ ] Nueva funcionalidad
- [ ] Corrección de bug
- [ ] Mejora de documentación
- [ ] Refactor

## Checklist

- [ ] El código sigue las convenciones del proyecto.
- [ ] Los tests se han ejecutado correctamente.
- [ ] La documentación se ha actualizado si es necesario.
```

---

[🔼 temas](#temas)

---

# Comandos

[🔼 temas](#temas)

---

# Conceptos Claves

## 🟢 Básico

### 1. ¿Cuál es la diferencia fundamental entre Git y GitHub?

- **Git** es un sistema de control de versiones distribuido que se ejecuta localmente para gestionar el historial de cambios de un proyecto.
- **GitHub** es una plataforma en la nube que utiliza Git para alojar repositorios, facilitar la colaboración y proporcionar herramientas adicionales como _pull requests_, _issues_ y _actions_.

---

### 2. Explica el propósito de un "pull request" (solicitud de extracción) y describe el proceso general para crear uno.

Un _pull request_ (PR) es una solicitud para fusionar cambios de una rama a otra en un repositorio. Sirve para revisar, discutir y aprobar cambios antes de integrarlos.

**Proceso:**

1. Crear una rama para los cambios:
   ```bash
   git checkout -b feature/nueva-funcion
   ```
2. Hacer commits con las modificaciones.
3. Subir la rama al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcion
   ```
4. En GitHub, crear un _Pull Request_ desde la rama hacia `main` o `develop`.
5. Solicitar revisiones y, una vez aprobado, fusionar.

---

### 3. ¿Cómo se clona un repositorio de GitHub a tu máquina local? ¿Qué comandos de Git utilizarías?

Para clonar un repositorio:

```bash
git clone https://github.com/usuario/repo.git
cd repo
```

Este comando descarga el repositorio y configura automáticamente el remoto llamado `origin`.

---

### 4. Describe la diferencia entre git fetch, git pull y git merge. ¿Cuándo usarías cada uno?

- `git fetch`: Descarga cambios remotos **sin fusionarlos**. Útil para revisar cambios antes de integrarlos.
- `git pull`: Descarga y **fusiona** cambios automáticamente (fetch + merge).
- `git merge`: Fusiona manualmente ramas ya descargadas.

**Uso recomendado:**

- `fetch` → cuando quieres inspeccionar cambios antes de aplicarlos.
- `pull` → cuando quieres mantener tu rama actual actualizada rápidamente.
- `merge` → cuando integras ramas de forma controlada.

---

### 5. ¿Qué es el archivo .gitignore y por qué es importante en un proyecto? Da un ejemplo de su contenido.

El archivo `.gitignore` especifica qué archivos o carpetas **no deben ser rastreados** por Git, evitando subir información sensible o archivos innecesarios.

**Ejemplo:**

```
node_modules/
.env
dist/
*.log
```

---

## 🟡 Intermedio

### 6. Explica el concepto de "rebase" en Git y cómo se diferencia de git merge. ¿Cuándo sería apropiado usar rebase?

- `git rebase` reorganiza la historia de commits, aplicando tus cambios **encima** de otra rama, creando un historial lineal.
- `git merge` combina dos ramas preservando la historia completa, incluyendo ramas y bifurcaciones.

**Cuándo usar rebase:**

- Para mantener un historial limpio y lineal en proyectos colaborativos.
- Antes de crear un _Pull Request_.

**Ejemplo:**

```bash
git checkout feature
git rebase main
```

---

### 7. ¿Qué es un "fork" en GitHub y en qué situaciones lo utilizarías? ¿Cuál es el proceso para mantener tu "fork" sincronizado con el repositorio original?

- Un **fork** es una copia completa de un repositorio en tu cuenta de GitHub.
- Es útil para **contribuir a proyectos open source** sin afectar el repositorio original.

**Proceso para sincronizar:**

```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

### 8. ¿Para qué sirve git revert vs git reset? Explica diferencias entre sus modos (--soft, --mixed, --hard).

- `git revert`: Crea un commit que **revierte cambios previos** sin modificar la historia.
- `git reset`: **Retrocede en la historia**, modificando el estado de commits y el área de staging.

**Modos de reset:**

- `--soft`: Mantiene cambios en staging.
- `--mixed`: Mantiene cambios en el directorio de trabajo, pero limpia el staging.
- `--hard`: Elimina cambios por completo.

---

### 9. ¿Qué son los tags en Git? ¿Cómo los usarías para marcar versiones estables en un proyecto?

- Los **tags** son marcadores que señalan commits específicos, comúnmente usados para identificar **versiones estables**.

**Ejemplo:**

```bash
git tag -a v1.0.0 -m "Versión estable inicial"
git push origin v1.0.0
```

Esto permite rastrear versiones y generar releases en GitHub.

---

### 10. ¿Cómo se gestionan las ramas en GitHub? Describe el flujo de trabajo de ramas que consideras una buena práctica.

Flujo recomendado (_Git Flow_ simplificado):

- `main`: Rama estable para producción.
- `develop`: Rama para integrar cambios en desarrollo.
- `feature/*`: Nuevas funcionalidades.
- `hotfix/*`: Correcciones urgentes en producción.
- `release/*`: Preparación previa a producción.

---

## 🔴 Avanzado

### 11. Describe cómo se puede proteger una rama principal (por ejemplo main o master) usando políticas de GitHub.

En GitHub se puede proteger una rama mediante la sección **Branch Protection Rules**:

- Requerir _Pull Requests_ antes de hacer merge.
- Exigir revisiones de código y aprobaciones.
- Bloquear _force pushes_ y borrado de la rama.
- Configurar integración con tests automáticos que deben aprobarse antes de fusionar.

---

### 12. ¿Qué son los submodules en Git y cuándo sería útil utilizarlos en un repositorio de GitHub?

- Los **submodules** permiten incluir un repositorio Git dentro de otro.
- Útiles cuando necesitas **dependencias versionadas** que se actualicen por separado.

**Ejemplo:**

```bash
git submodule add https://github.com/usuario/lib.git libs/lib
```

---

### 13. Menciona al menos dos estrategias avanzadas de branching y cuándo conviene utilizarlas.

- **Git Flow**: Ideal para proyectos grandes con ciclos definidos de desarrollo, pruebas y releases.
- **Trunk Based Development**: Para equipos ágiles que integran cambios frecuentemente en una sola rama principal.

---

### 14. Explica cómo auditar el historial de cambios de un repositorio grande para identificar cuándo se introdujo un bug o una característica específica.

- Usar `git log` para inspeccionar cambios:
  ```bash
  git log --oneline --grep="mensaje relacionado"
  ```
- Usar `git blame` para ver quién modificó una línea específica:
  ```bash
  git blame archivo.js
  ```
- Usar `git bisect` para encontrar el commit exacto que introdujo un bug:
  ```bash
  git bisect start
  git bisect bad
  git bisect good commit_id
  ```

---

### 15. Explica el concepto de "GitHub Actions" y describe un flujo de trabajo de integración continua/despliegue continuo (CI/CD) que podrías implementar con él.

- **GitHub Actions** es una herramienta de automatización integrada en GitHub para ejecutar flujos de trabajo como pruebas, builds y despliegues.

**Ejemplo de flujo CI/CD:**

1. Cuando se hace _push_ a la rama `main`, se ejecutan pruebas automáticas.
2. Si las pruebas pasan, se genera un build de la aplicación.
3. El build se despliega automáticamente a un servidor o plataforma como Heroku o AWS.

Archivo `.github/workflows/ci.yml`:

```yaml
name: CI Pipeline
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Instalar dependencias
        run: npm install
      - name: Ejecutar pruebas
        run: npm test
```

Esto asegura calidad y despliegues automáticos de forma segura.

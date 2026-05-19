# Guía de contenido

Este portfolio centraliza todo el contenido editable en dos lugares:

- **`src/data/`** — datos estructurales que no cambian por idioma (URLs, fechas, tech stack, IDs)
- **`src/i18n/locales/en.json`** y **`src/i18n/locales/es.json`** — strings traducibles, en el mismo orden que los datos

La regla es simple: si es igual en inglés y español, va en `src/data/`. Si se traduce, va en los locales.

---

## Proyectos

### Agregar un proyecto

**1. Agregar los datos estructurales en `src/data/projects.ts`:**

```ts
"mi-proyecto": {
  year: "2025",
  type: "personal",           // "openSource" | "personal" | "ongoing" | "clubProject"
  status: "completed",        // "ongoing" | "completed"
  madeAt: "Personal",
  stack: ["React", "FastAPI"],
  links: {
    github: "https://github.com/ElPitagoras14/mi-proyecto",
    live: null,               // URL del deploy, o null
    liveLabel: null,          // Texto del botón live, ej. "PyPI", o null
  },
  featured: false,
},
```

**2. Agregar los strings en ambos locales.**

En `src/i18n/locales/en.json` (dentro de `projectsPage.projects`):

```json
{
  "id": "mi-proyecto",
  "title": "Mi Proyecto",
  "role": "Fullstack Developer",
  "tagline": "Short tagline shown in the header",
  "shortDescription": "One-sentence description for the table and cards.",
  "narrative": {
    "problem": "What problem did you solve?",
    "approach": "How did you approach it?",
    "learned": "What did you learn?"
  }
}
```

En `src/i18n/locales/es.json` (mismo lugar, misma posición en el array):

```json
{
  "id": "mi-proyecto",
  "title": "Mi Proyecto",
  "role": "Desarrollador Fullstack",
  "tagline": "Tagline corto que aparece en el encabezado",
  "shortDescription": "Una oración de descripción para la tabla y las cards.",
  "narrative": {
    "problem": "¿Qué problema resolviste?",
    "approach": "¿Cómo lo abordaste?",
    "learned": "¿Qué aprendiste?"
  }
}
```

> El orden del array en los locales define el orden en que aparecen los proyectos en la tabla y el detalle.

### Cambiar los proyectos destacados (home)

El home muestra automáticamente todos los proyectos con `featured: true` en `src/data/projects.ts`. Para cambiar cuáles aparecen:

```ts
// Mostrar en home
featured: true,

// No mostrar en home (solo en /projects)
featured: false,
```

El orden en el home sigue el orden del array de locales, filtrando solo los que tienen `featured: true`.

### Agregar imágenes a la galería

En `src/data/projects.ts`, agrega el campo `gallery` con rutas relativas a `public/`:

```ts
"mi-proyecto": {
  // ...
  gallery: ["/gallery/mi-proyecto/screenshot-1.png", "/gallery/mi-proyecto/screenshot-2.png"],
},
```

---

## Experiencia laboral

### Agregar un trabajo

**1. Agregar los datos estructurales en `src/data/experience.ts`:**

```ts
"mi-empresa": {
  company: "Mi Empresa S.A.",
  period: { start: "2025-03", end: "present" }, // o "2026-01" si ya terminó
},
```

El formato de fecha es `"YYYY-MM"` o `"present"`. Se formatea automáticamente según el idioma ("Mar 2025" / "mar. 2025").

**2. Agregar los strings en ambos locales** (dentro de `aboutPage.experienceSection.jobs`):

```json
{
  "id": "mi-empresa",
  "role": "Software Engineer",
  "location": "Guayaquil, Ecuador",
  "metric": "One-line impact statement",
  "activities": [
    "First bullet point describing your main contribution.",
    "Second bullet point."
  ]
}
```

> El orden del array en los locales define el orden en que aparecen los trabajos. Pon el más reciente primero.

---

## Educación

### Agregar un ítem educativo

**1. En `src/data/education.ts`:**

```ts
"mi-universidad": {
  school: "MIT",
  period: { start: "2020-08", end: "2024-05" },
},
```

**2. En ambos locales** (dentro de `aboutPage.educationSection.items`):

```json
{
  "id": "mi-universidad",
  "degree": "BSc in Computer Science",
  "location": "Cambridge, USA",
  "description": "Descripción detallada del programa..."
}
```

---

## Skills

### Agregar una tecnología a una categoría existente

Solo edita el array en `src/data/skills.ts`:

```ts
languages: {
  skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Go"], // agrega aquí
},
```

Los IDs de categoría disponibles son: `languages`, `web-frontend`, `backend-data`, `devops-infra`, `ai-automation`.

### Agregar una nueva categoría de skills

**1. En `src/data/skills.ts`:**

```ts
"cloud-native": {
  skills: ["AWS", "GCP", "Azure", "Pulumi"],
},
```

**2. En ambos locales** (dentro de `aboutPage.skillsSection.categories`), agregar una entrada con el mismo `id`:

```json
{ "id": "cloud-native", "title": "Cloud Native" }
```

```json
{ "id": "cloud-native", "title": "Cloud Nativo" }
```

---

## Premios y certificaciones

### Agregar un premio

**1. En `src/data/awards.ts`** (dentro de `awards`):

```ts
"nombre-del-premio": {
  issuer: "Organización emisora",
  date: "2025-06",       // "YYYY-MM", "YYYY", o { start: "YYYY", end: "present" }
},
```

**2. En ambos locales** (dentro de `aboutPage.awardsSection.awards`):

```json
{ "id": "nombre-del-premio", "title": "Nombre del Premio" }
```

### Agregar una certificación

**1. En `src/data/awards.ts`** (dentro de `certifications`):

```ts
"mi-cert": {
  issuer: "Entidad certificadora",
  date: "2025-03",
},
```

**2. En ambos locales** (dentro de `aboutPage.awardsSection.certifications`):

```json
{ "id": "mi-cert", "title": "Nombre de la Certificación" }
```

---

## Datos de contacto

### Cambiar los links de contacto (email, GitHub, LinkedIn)

Edita `src/data/contact.ts`. Los valores de `href` se usan en el footer, la página de contacto y el perfil:

```ts
export const contactLinks: Record<string, { href: string; icon: string }> = {
  email: { href: "mailto:tu@email.com", icon: "Mail" },
  github: { href: "https://github.com/tu-usuario", icon: "Github" },
  linkedin: { href: "https://www.linkedin.com/in/tu-perfil", icon: "Linkedin" },
};
```

`socialMedia` se deriva automáticamente de `contactLinks`, no hay que tocarlo.

Los labels visibles (lo que aparece en la UI) se editan en los locales, dentro de `contactPage.info.links`:

```json
"links": [
  { "id": "email", "label": "tu@email.com" },
  { "id": "github", "label": "github.com/tu-usuario" },
  { "id": "linkedin", "label": "linkedin.com/in/tu-perfil" }
]
```

### Cambiar la URL del CV

Edita `resumeUrl` en `src/data/contact.ts`:

```ts
export const resumeUrl = "https://nueva-url-del-cv.com";
```

Aparece en el botón "Download CV" del hero y en la sección de contacto del home.

# Yaniel Fundora Curbelo · Historial de trabajo frontend

Página estática que resume mi historial de commits entre julio de 2023 y octubre de 2026: 1860 commits en 26 repositorios, repartidos entre AboveSports (SaaS de analítica de patrocinio deportivo) y proyectos de clientes en ShareIT.

Incluye métricas generales, commits por mes, cronología de proyectos, resumen de lo construido en cada proyecto, ritmo de trabajo y un buscador sobre todo el log.

## Enlaces

| Idioma | URL |
|---|---|
| Inglés (por defecto) | https://fun2ra.github.io/shareit-work-record/ |
| Español | https://fun2ra.github.io/shareit-work-record/es/ |
| Portugués (pt-PT) | https://fun2ra.github.io/shareit-work-record/pt/ |

## Estructura

```
index.html              página en inglés
es/index.html           página en español
pt/index.html           página en portugués
assets/
  style.css             estilos compartidos (tema claro y oscuro)
  data.js               los commits: lista de repos (RAW.r) y [fecha, repo, mensaje] (RAW.c)
  app.js                gráficos, textos traducidos (I18N) y lógica del buscador
  img/
    favicon.svg         favicon (onda analógica → digital)
    apple-touch-icon.png  el mismo icono en PNG 180×180 para iOS
    avatar-400.webp/.jpg  foto del encabezado
    avatar-600.jpg      foto para datos estructurados y sitemap
    og-image.jpg        vista previa al compartir (1200×630)
scripts/prerender.js    vuelca el contenido generado por JS dentro de cada HTML
sitemap.xml             sitemap con alternativas de idioma e imagen
.nojekyll               GitHub Pages sirve los archivos tal cual, sin Jekyll
```

No hay dependencias ni paso de build obligatorio: son archivos estáticos.

## Idiomas

- Cada página declara su idioma en `<html lang="…">` y `app.js` elige con eso los textos de la tabla `I18N` (`en`, `es`, `pt`).
- Se traducen los textos de la interfaz, las métricas, los tooltips, las notas y las descripciones de cada proyecto. Los mensajes de commit, los nombres de proyecto y las tecnologías se mantienen en el original.
- Los números, meses y días de la semana usan el formato de cada idioma (`en-US`, `es-ES`, `pt-PT`).
- El texto fijo (títulos, introducción, descripciones de sección) está directamente en cada `index.html`.
- Un selector EN / ES / PT en el encabezado enlaza las tres versiones.

Para añadir un idioma: copia una de las carpetas `es/` o `pt/`, traduce el HTML, añade su bloque en `I18N` dentro de `assets/app.js`, añade la página en `PAGES` de `scripts/prerender.js` y añade su URL a los `hreflang` de todas las páginas y a `sitemap.xml`.

## Actualizar los datos

1. Edita `assets/data.js` (o los textos de `assets/app.js`).
2. Ejecuta el prerender:

   ```
   node scripts/prerender.js
   ```

3. Haz commit y push a `main`.

El paso 2 es necesario: si no se ejecuta, el HTML que leen los buscadores conserva los datos antiguos aunque la página en el navegador muestre los nuevos.

Si cambian las cifras principales (commits, repositorios, años), actualiza también a mano la `meta description`, `og:description` y la fecha `dateModified` del `<head>` de las tres páginas, y `lastmod` en `sitemap.xml`.

## Despliegue

GitHub Pages publica la rama `main` desde la raíz del repositorio. Cada push a `main` despliega en 1–2 minutos; el progreso se ve en la pestaña **Actions** ("pages build and deployment").

## SEO

### Contenido indexable

El contenido de la página (métricas, resúmenes de proyectos, notas, los 150 commits más recientes y el pie) lo genera JavaScript. Para que los buscadores lo lean sin ejecutar JS, `scripts/prerender.js` ejecuta el mismo `app.js` en Node con un DOM simulado y escribe el resultado dentro de cada HTML, entre marcadores `<!--pre:id-->…<!--/pre:id-->`.

Al cargar la página, `app.js` vuelve a generar exactamente lo mismo, así que no hay cambios visibles. Cada página trae unas 2500 palabras de texto en el HTML y funciona también sin JavaScript. Los gráficos SVG no se prerenderizan; llevan `aria-label` descriptivos.

### Metadatos en cada página

- `<title>` y `meta description` propios de cada idioma, con nombre completo, puesto y tecnologías.
- `canonical` con URL absoluta.
- `hreflang` para `en`, `es`, `pt` y `x-default` (inglés), con URLs absolutas, para que Google trate las tres versiones como traducciones y no como contenido duplicado.
- `meta robots` `index, follow` y `author`.
- `<link rel="me">` a LinkedIn y GitHub.
- `theme-color` para tema claro y oscuro.

### Redes sociales

- Open Graph tipo `profile` con título, descripción, URL, idioma (`og:locale` y alternativos) y nombre.
- `og:image` con `assets/img/og-image.jpg`, con tipo, dimensiones y texto alternativo.
- Twitter/X: tarjeta `summary_large_image` con la misma imagen.

### Datos estructurados (JSON-LD)

Cada página incluye un `ProfilePage` cuyo `mainEntity` es un `Person` con:

- `name`, `alternateName`, `jobTitle` (traducido) y `worksFor` (ShareIT)
- `image` (`assets/img/avatar-600.jpg`)
- `sameAs`: LinkedIn y GitHub
- `knowsAbout`: Vue 3, Next.js, React, TypeScript, Nuxt, Ionic, Capacitor, ECharts, Storybook, Tailwind CSS, Umbraco, design systems

Además: `primaryImageOfPage`, `inLanguage` y `dateModified`.

### Imágenes

Todas están en `assets/img/`.

| Archivo | Uso |
|---|---|
| `og-image.jpg` | Vista previa al compartir (LinkedIn, WhatsApp, Slack, X) e imagen principal de la página |
| `avatar-600.jpg` | Foto en los datos estructurados y en el sitemap de imágenes |
| `avatar-400.webp` / `avatar-400.jpg` | Foto del encabezado (WebP con JPG de respaldo, `width`/`height` fijos para evitar saltos de layout) |
| `favicon.svg` | Favicon; al ser vectorial sirve para cualquier tamaño |
| `apple-touch-icon.png` | Icono de pantalla de inicio en iOS, que no admite SVG. Generado a partir de `favicon.svg`; si cambias el favicon, regenéralo |

### Sitemap

`sitemap.xml` lista las tres URLs, cada una con sus alternativas `hreflang` y la imagen de perfil.

No hay `robots.txt`: solo funciona en la raíz del dominio (`fun2ra.github.io/robots.txt`), no dentro de `/shareit-work-record/`.

### Rendimiento

- `preconnect` a `fonts.googleapis.com` y `fonts.gstatic.com`; fuentes con `display=swap`.
- La foto del encabezado carga con `fetchpriority="high"` y dimensiones fijas.
- Los 1860 commits viven una sola vez en `assets/data.js`, compartido y cacheado entre las tres páginas.

### Pendiente

- Registrar el sitio en [Google Search Console](https://search.google.com/search-console) como propiedad de prefijo de URL (`https://fun2ra.github.io/shareit-work-record/`). Para verificarla, añade la etiqueta `<meta name="google-site-verification" …>` que da Search Console en el `<head>` de `index.html`.
- Enviar el sitemap en Search Console: `https://fun2ra.github.io/shareit-work-record/sitemap.xml`.
- Opcional: enlazar la página desde LinkedIn (sección Destacados o Contacto) y desde el perfil de GitHub, para que Google la descubra antes.

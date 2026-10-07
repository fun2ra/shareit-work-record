// UI strings per language. Commit messages, project names and tech stack stay as written.
const I18N = {
  en: {
    locale: "en-US",
    mon: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wk: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    names: {
      "AboveSports/api_testing": "AboveSports API testing",
      "ShareIT Core/Spsbarrilero-repo": "SPS Barrilero (template)",
      "ShareIT Core/email_templates": "Email signatures",
    },
    clientSites: "Client websites",
    range: (a, b, n) =>
      `<span>First commit <b>${a}</b></span><span>Last commit <b>${b}</b></span><span><b>${n}</b> calendar months</span>`,
    kpi: {
      commits: "commits",
      uniq: (n) => `${n} unique after branch duplicates`,
      days: "active days",
      perDay: (n) => `${n} commits per active day`,
      repos: "repositories",
      split: (a, s) => `${a} AboveSports · ${s} ShareIT`,
      peak: "busiest month",
      peakSub: (m) => `${m}, all on VWV`,
      above: "on AboveSports web",
      aboveSub: "the longest-running project, 3+ years",
    },
    aria: {
      month: "Stacked bar chart of commits per month by project",
      timeline: "Timeline of active days per repository",
      hour: "Commits by hour of day",
      week: "Commits by day of week",
      verb: "Most common first words of commit messages",
    },
    total: "Total",
    commitsLbl: "Commits",
    activeDays: "Active days",
    nCommits: (n) => `${n} commits`,
    noteHour: (p, h) => `${p}% of commits land between 10:00 and 18:00, peaking at ${h}:00.`,
    noteWeek: (n, p) => `${n} weekend commits (${p}%).`,
    eras: {
      "AboveSports/web": {
        role: "Sports-sponsorship analytics SaaS",
        pts: [
          "Logo Search: exposure timeline, video player with playlist mode, seeking and click-to-second",
          "Cross-customer exposure tracker with customer and sub-customer selection",
          "Report Builder wizard that captures ECharts views as images and assembles PPTX slides",
          "Social Media overview and Top Posts with post-maturation charts",
          "TV Module: sunburst networks and channels, demographics tooltips, streaming estimates",
          "Inventory overview: editable investment value and contract-expiry chart",
          "2026: Vitest harness, CI test gate before deploy, first ADR, tested number formatting",
        ],
      },
      "ShareIT Core/vwv": {
        role: "Law-firm website, built from an empty repo",
        pts: [
          "Next.js app with dynamic routes fed by a headless Umbraco API",
          "Module system: CMS rows and components imported dynamically by name",
          "12-column grid, desktop mega menu and multi-level mobile navigation",
          "Parallax and clip-path hero animations",
          "Contact, login, create-account, forgot and reset password forms with validation",
          "Resource hub, listings, locations with maps, documents and downloads",
        ],
      },
      "ShareIT Core/sogenave-app": {
        role: "B2B ordering app for iOS and Android",
        pts: [
          "Favourites lists, order history with filters, reorder and order detail",
          "Pickup points, checkout calendar limited to route days and holidays",
          "Push notifications with badge handling and detail navigation",
          "Biometric login (Face ID, fingerprint) with a PIN in secure storage",
          "Firebase Analytics on Android and iOS with a login event builder",
          "Long tail of iOS safe-area, keyboard and webview fixes; handover documentation",
        ],
      },
      "ShareIT Core/shareit-enterprise-platform": {
        role: "Shared frontend foundation for web and mobile",
        pts: [
          "pnpm workspace with a shared UI package used by web and mobile apps",
          "Design tokens from Figma DS-Core v1.0 wired into Tailwind",
          "Unified Storybook for both apps, with tests and token stories",
          "Twenty-plus CO* CMS modules: hero, team grid, timeline, FAQ, form block",
          "API models generated with Orval; accessibility fixes across modules",
        ],
      },
      "ShareIT Core/balanco-social": {
        role: "Social-report publication site",
        pts: [
          "Hero banner with video dialog, image-text and category card modules",
          "Article, database and demographics detail pages with anchor navigation",
          "Dynamic 404 and server error pages, share page",
          "GA4 event tracking; fixed a stale-results race in report filters",
        ],
      },
    },
    sites: [
      ["ACIF", "header, footer, slideshow, card, timeline, accordion and download modules"],
      ["Natixis", "careers site components: styled and connected cards, committee, press, publications"],
      ["Avizi", "login, register and email verification, wiki and media pages, email templates"],
      ["SPS Barrilero", "launch fixes: typography, ticket cards, breakpoints, deploy"],
      ["Waratah", "Examine indexer fix, exclusive priority sort, SonarCloud pipeline"],
      ["Bicredit", "layout polish, SEO titles, image alt fallbacks, swipeable images"],
      ["Madeira Cable Car", "palette, animations, ticket pages"],
      ["Verlingue", "responsive email templates tested for Outlook"],
      ["EuroAtlantic", "booking passenger validation"],
      ["Amorim Luxury, Savoy, Stay Upon, Cuidem-me and others", "responsive and layout fixes"],
    ],
    sitesMeta: (n) => `${n} repositories, mostly Umbraco CMS`,
    allProjects: (n) => `All projects (${n})`,
    noMatch: (q) => `No commits match “${q}”. Try a shorter word or pick All projects.`,
    logCount: (a, b) => `${a} of ${b} commits`,
    foot: (n, r, d) =>
      `Source: mis_logs.txt, ${n} commits across ${r} repositories. About ${d} entries repeat a message on the same day in the same repo, usually one change committed to two branches; counts include them.`,
  },

  es: {
    locale: "es-ES",
    mon: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    wk: ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"],
    names: {
      "AboveSports/api_testing": "AboveSports API testing",
      "ShareIT Core/Spsbarrilero-repo": "SPS Barrilero (plantilla)",
      "ShareIT Core/email_templates": "Firmas de email",
    },
    clientSites: "Webs de clientes",
    range: (a, b, n) =>
      `<span>Primer commit <b>${a}</b></span><span>Último commit <b>${b}</b></span><span><b>${n}</b> meses naturales</span>`,
    kpi: {
      commits: "commits",
      uniq: (n) => `${n} únicos sin duplicados entre ramas`,
      days: "días activos",
      perDay: (n) => `${n} commits por día activo`,
      repos: "repositorios",
      split: (a, s) => `${a} AboveSports · ${s} ShareIT`,
      peak: "mes con más actividad",
      peakSub: (m) => `${m}, todo en VWV`,
      above: "en AboveSports web",
      aboveSub: "el proyecto más largo, más de 3 años",
    },
    aria: {
      month: "Gráfico de barras apiladas de commits por mes y proyecto",
      timeline: "Cronología de días activos por repositorio",
      hour: "Commits por hora del día",
      week: "Commits por día de la semana",
      verb: "Primeras palabras más frecuentes en los mensajes de commit",
    },
    total: "Total",
    commitsLbl: "Commits",
    activeDays: "Días activos",
    nCommits: (n) => `${n} commits`,
    noteHour: (p, h) => `El ${p}% de los commits cae entre las 10:00 y las 18:00, con el pico a las ${h}:00.`,
    noteWeek: (n, p) => `${n} commits en fin de semana (${p}%).`,
    eras: {
      "AboveSports/web": {
        role: "SaaS de analítica de patrocinio deportivo",
        pts: [
          "Logo Search: línea temporal de exposición, reproductor de vídeo con modo playlist, búsqueda y clic al segundo",
          "Tracker de exposición entre clientes con selección de cliente y subcliente",
          "Asistente Report Builder que captura vistas de ECharts como imágenes y monta diapositivas PPTX",
          "Resumen de Redes Sociales y Top Posts con gráficos de maduración de publicaciones",
          "Módulo TV: sunburst de cadenas y canales, tooltips demográficos, estimaciones de streaming",
          "Resumen de inventario: valor de inversión editable y gráfico de vencimiento de contratos",
          "2026: entorno de Vitest, tests obligatorios en CI antes del deploy, primer ADR, formateo de números con tests",
        ],
      },
      "ShareIT Core/vwv": {
        role: "Web de un despacho de abogados, creada desde un repo vacío",
        pts: [
          "App Next.js con rutas dinámicas alimentadas por una API headless de Umbraco",
          "Sistema de módulos: filas y componentes del CMS importados dinámicamente por nombre",
          "Grid de 12 columnas, mega menú de escritorio y navegación móvil multinivel",
          "Animaciones de hero con parallax y clip-path",
          "Formularios de contacto, login, registro y recuperación de contraseña con validación",
          "Centro de recursos, listados, ubicaciones con mapas, documentos y descargas",
        ],
      },
      "ShareIT Core/sogenave-app": {
        role: "App de pedidos B2B para iOS y Android",
        pts: [
          "Listas de favoritos, historial de pedidos con filtros, repetir pedido y detalle",
          "Puntos de recogida, calendario de checkout limitado a días de ruta y festivos",
          "Notificaciones push con gestión de badge y navegación al detalle",
          "Login biométrico (Face ID, huella) con PIN en almacenamiento seguro",
          "Firebase Analytics en Android e iOS con un constructor de eventos de login",
          "Larga cola de arreglos en iOS (safe-area, teclado, webview); documentación de traspaso",
        ],
      },
      "ShareIT Core/shareit-enterprise-platform": {
        role: "Base frontend compartida para web y móvil",
        pts: [
          "Workspace pnpm con un paquete de UI compartido por las apps web y móvil",
          "Design tokens de Figma DS-Core v1.0 integrados en Tailwind",
          "Storybook unificado para ambas apps, con tests e historias de tokens",
          "Más de veinte módulos CMS CO*: hero, grid de equipo, timeline, FAQ, bloque de formulario",
          "Modelos de API generados con Orval; mejoras de accesibilidad en todos los módulos",
        ],
      },
      "ShareIT Core/balanco-social": {
        role: "Sitio de publicación del informe social",
        pts: [
          "Banner hero con diálogo de vídeo, módulos de imagen-texto y tarjetas de categoría",
          "Páginas de detalle de artículo, base de datos y demografía con navegación por anclas",
          "Páginas dinámicas de 404 y error de servidor, página de compartir",
          "Seguimiento de eventos con GA4; corregida una condición de carrera con resultados obsoletos en los filtros",
        ],
      },
    },
    sites: [
      ["ACIF", "módulos de header, footer, slideshow, tarjeta, timeline, acordeón y descargas"],
      ["Natixis", "componentes del sitio de empleo: tarjetas, comité, prensa, publicaciones"],
      ["Avizi", "login, registro y verificación de email, páginas de wiki y media, plantillas de email"],
      ["SPS Barrilero", "arreglos de lanzamiento: tipografía, tarjetas de entradas, breakpoints, deploy"],
      ["Waratah", "arreglo del indexador Examine, orden por prioridad exclusiva, pipeline de SonarCloud"],
      ["Bicredit", "pulido de maquetación, títulos SEO, alt de imágenes por defecto, imágenes deslizables"],
      ["Madeira Cable Car", "paleta, animaciones, páginas de entradas"],
      ["Verlingue", "plantillas de email responsive probadas en Outlook"],
      ["EuroAtlantic", "validación de pasajeros en reservas"],
      ["Amorim Luxury, Savoy, Stay Upon, Cuidem-me y otros", "arreglos de responsive y maquetación"],
    ],
    sitesMeta: (n) => `${n} repositorios, sobre todo Umbraco CMS`,
    allProjects: (n) => `Todos los proyectos (${n})`,
    noMatch: (q) => `Ningún commit coincide con “${q}”. Prueba una palabra más corta o elige Todos los proyectos.`,
    logCount: (a, b) => `${a} de ${b} commits`,
    foot: (n, r, d) =>
      `Fuente: mis_logs.txt, ${n} commits en ${r} repositorios. Unas ${d} entradas repiten un mensaje el mismo día en el mismo repo, normalmente un mismo cambio subido a dos ramas; se incluyen en los recuentos.`,
  },

  pt: {
    locale: "pt-PT",
    mon: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    wk: ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"],
    names: {
      "AboveSports/api_testing": "AboveSports API testing",
      "ShareIT Core/Spsbarrilero-repo": "SPS Barrilero (template)",
      "ShareIT Core/email_templates": "Assinaturas de email",
    },
    clientSites: "Sites de clientes",
    range: (a, b, n) =>
      `<span>Primeiro commit <b>${a}</b></span><span>Último commit <b>${b}</b></span><span><b>${n}</b> meses de calendário</span>`,
    kpi: {
      commits: "commits",
      uniq: (n) => `${n} únicos sem duplicados entre branches`,
      days: "dias ativos",
      perDay: (n) => `${n} commits por dia ativo`,
      repos: "repositórios",
      split: (a, s) => `${a} AboveSports · ${s} ShareIT`,
      peak: "mês mais ativo",
      peakSub: (m) => `${m}, tudo no VWV`,
      above: "no AboveSports web",
      aboveSub: "o projeto mais longo, mais de 3 anos",
    },
    aria: {
      month: "Gráfico de barras empilhadas de commits por mês e projeto",
      timeline: "Cronologia de dias ativos por repositório",
      hour: "Commits por hora do dia",
      week: "Commits por dia da semana",
      verb: "Primeiras palavras mais frequentes nas mensagens de commit",
    },
    total: "Total",
    commitsLbl: "Commits",
    activeDays: "Dias ativos",
    nCommits: (n) => `${n} commits`,
    noteHour: (p, h) => `${p}% dos commits acontecem entre as 10:00 e as 18:00, com pico às ${h}:00.`,
    noteWeek: (n, p) => `${n} commits ao fim de semana (${p}%).`,
    eras: {
      "AboveSports/web": {
        role: "SaaS de analítica de patrocínio desportivo",
        pts: [
          "Logo Search: timeline de exposição, leitor de vídeo com modo playlist, seeking e clique ao segundo",
          "Tracker de exposição entre clientes com seleção de cliente e subcliente",
          "Assistente Report Builder que captura vistas ECharts como imagens e monta slides PPTX",
          "Visão geral de Redes Sociais e Top Posts com gráficos de maturação de publicações",
          "Módulo TV: sunburst de redes e canais, tooltips demográficos, estimativas de streaming",
          "Visão geral de inventário: valor de investimento editável e gráfico de fim de contratos",
          "2026: ambiente Vitest, testes obrigatórios no CI antes do deploy, primeiro ADR, formatação de números com testes",
        ],
      },
      "ShareIT Core/vwv": {
        role: "Site de um escritório de advogados, criado a partir de um repo vazio",
        pts: [
          "App Next.js com rotas dinâmicas alimentadas por uma API headless do Umbraco",
          "Sistema de módulos: linhas e componentes do CMS importados dinamicamente pelo nome",
          "Grelha de 12 colunas, mega menu em desktop e navegação mobile multinível",
          "Animações de hero com parallax e clip-path",
          "Formulários de contacto, login, criação de conta e recuperação de palavra-passe com validação",
          "Centro de recursos, listagens, localizações com mapas, documentos e downloads",
        ],
      },
      "ShareIT Core/sogenave-app": {
        role: "App de encomendas B2B para iOS e Android",
        pts: [
          "Listas de favoritos, histórico de encomendas com filtros, repetir encomenda e detalhe",
          "Pontos de recolha, calendário de checkout limitado a dias de rota e feriados",
          "Notificações push com gestão de badge e navegação para o detalhe",
          "Login biométrico (Face ID, impressão digital) com PIN em armazenamento seguro",
          "Firebase Analytics em Android e iOS com um construtor de eventos de login",
          "Longa lista de correções em iOS (safe-area, teclado, webview); documentação de passagem",
        ],
      },
      "ShareIT Core/shareit-enterprise-platform": {
        role: "Base frontend partilhada para web e mobile",
        pts: [
          "Workspace pnpm com um pacote de UI partilhado pelas apps web e mobile",
          "Design tokens do Figma DS-Core v1.0 integrados no Tailwind",
          "Storybook unificado para as duas apps, com testes e stories de tokens",
          "Mais de vinte módulos CMS CO*: hero, grelha de equipa, timeline, FAQ, bloco de formulário",
          "Modelos de API gerados com Orval; melhorias de acessibilidade em todos os módulos",
        ],
      },
      "ShareIT Core/balanco-social": {
        role: "Site de publicação do balanço social",
        pts: [
          "Banner hero com diálogo de vídeo, módulos de imagem-texto e cartões de categoria",
          "Páginas de detalhe de artigo, base de dados e demografia com navegação por âncoras",
          "Páginas dinâmicas de 404 e erro de servidor, página de partilha",
          "Tracking de eventos com GA4; corrigida uma race condition com resultados desatualizados nos filtros",
        ],
      },
    },
    sites: [
      ["ACIF", "módulos de header, footer, slideshow, cartão, timeline, acordeão e downloads"],
      ["Natixis", "componentes do site de carreiras: cartões, comité, imprensa, publicações"],
      ["Avizi", "login, registo e verificação de email, páginas de wiki e media, templates de email"],
      ["SPS Barrilero", "correções de lançamento: tipografia, cartões de bilhetes, breakpoints, deploy"],
      ["Waratah", "correção do indexador Examine, ordenação por prioridade exclusiva, pipeline SonarCloud"],
      ["Bicredit", "afinação de layout, títulos SEO, alt de imagens por omissão, imagens deslizáveis"],
      ["Madeira Cable Car", "paleta, animações, páginas de bilhetes"],
      ["Verlingue", "templates de email responsive testados no Outlook"],
      ["EuroAtlantic", "validação de passageiros nas reservas"],
      ["Amorim Luxury, Savoy, Stay Upon, Cuidem-me e outros", "correções de responsive e layout"],
    ],
    sitesMeta: (n) => `${n} repositórios, sobretudo Umbraco CMS`,
    allProjects: (n) => `Todos os projetos (${n})`,
    noMatch: (q) => `Nenhum commit corresponde a “${q}”. Experimente uma palavra mais curta ou escolha Todos os projetos.`,
    logCount: (a, b) => `${a} de ${b} commits`,
    foot: (n, r, d) =>
      `Fonte: mis_logs.txt, ${n} commits em ${r} repositórios. Cerca de ${d} entradas repetem uma mensagem no mesmo dia no mesmo repo, normalmente a mesma alteração enviada para dois branches; estão incluídas nas contagens.`,
  },
};
const L = I18N[document.documentElement.lang] || I18N.en;

const NAMES = {
  "AboveSports/web": "AboveSports web",
  "ShareIT Core/vwv": "VWV",
  "ShareIT Core/sogenave-app": "Sogenave app",
  "ShareIT Core/sogenave": "Sogenave portal",
  "ShareIT Core/shareit-enterprise-platform": "Enterprise platform",
  "ShareIT Core/balanco-social": "Balanço Social",
  "ShareIT Core/acif": "ACIF",
  "ShareIT Core/natixis": "Natixis",
  "ShareIT Core/avizi": "Avizi",
  "ShareIT Core/sps-barrilero": "SPS Barrilero",
  "ShareIT Core/stayupon": "Stay Upon",
  "ShareIT Core/waratah": "Waratah",
  "ShareIT Core/verlingue": "Verlingue",
  "ShareIT Core/bicredit": "Bicredit",
  "ShareIT Core/madeira-cablecar": "Madeira Cable Car",
  "ShareIT Core/cuidem-me": "Cuidem-me",
  "ShareIT Core/amorim-luxury-jncquoi": "Amorim Luxury JNcQUOI",
  "ShareIT Core/euroatlantic": "EuroAtlantic",
  "ShareIT Core/savoy-hotels": "Savoy Hotels",
  "ShareIT Core/editory-hotels": "Editory Hotels",
  "ShareIT Core/tratolixo": "Tratolixo",
  "ShareIT Core/haitong-bank": "Haitong Bank",
  "ShareIT Core/td-hotels": "TD Hotels",
  ...L.names,
};
const GROUPS = [
  {
    key: "above",
    name: "AboveSports web",
    c: "--s1",
    repos: ["AboveSports/web", "AboveSports/api_testing"],
  },
  { key: "vwv", name: "VWV", c: "--s2", repos: ["ShareIT Core/vwv"] },
  {
    key: "sog",
    name: "Sogenave app",
    c: "--s3",
    repos: ["ShareIT Core/sogenave-app"],
  },
  {
    key: "ent",
    name: "Enterprise platform",
    c: "--s4",
    repos: ["ShareIT Core/shareit-enterprise-platform"],
  },
  {
    key: "bal",
    name: "Balanço Social",
    c: "--s5",
    repos: ["ShareIT Core/balanco-social"],
  },
  { key: "oth", name: L.clientSites, c: "--s6", repos: [] },
];
const groupOf = (r) =>
  GROUPS.find((g) => g.repos.includes(r)) || GROUPS[5];
const nm = (r) => NAMES[r] || r.split("/").pop();
const css = (v) =>
  getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const fmt = (n) => n.toLocaleString(L.locale);
const MON = L.mon;
const monLabel = (k) => MON[+k.slice(5, 7) - 1] + " " + k.slice(0, 4);

const C = RAW.c.map(([t, ri, m]) => ({
  t,
  d: t.slice(0, 10),
  mo: t.slice(0, 7),
  h: +t.slice(11, 13),
  r: RAW.r[ri],
  m,
}));
const days = new Set(C.map((c) => c.d));
const months = [];
{
  let [y, m] = C[0].mo.split("-").map(Number);
  const [ey, em] = C[C.length - 1].mo.split("-").map(Number);
  while (y < ey || (y === ey && m <= em)) {
    months.push(`${y}-${String(m).padStart(2, "0")}`);
    m++;
    if (m > 12) {
      m = 1;
      y++;
    }
  }
}
const byMonth = {};
months.forEach(
  (k) => (byMonth[k] = Object.fromEntries(GROUPS.map((g) => [g.key, 0]))),
);
C.forEach((c) => byMonth[c.mo][groupOf(c.r).key]++);
const monthTot = (k) =>
  Object.values(byMonth[k]).reduce((a, b) => a + b, 0);
const peak = months.reduce(
  (a, k) => (monthTot(k) > monthTot(a) ? k : a),
  months[0],
);
const repoStats = {};
C.forEach((c) => {
  const s = (repoStats[c.r] ||= {
    n: 0,
    first: c.d,
    last: c.d,
    days: new Set(),
  });
  s.n++;
  s.last = c.d;
  s.days.add(c.d);
});
const uniq = new Set(C.map((c) => c.d + c.r + c.m)).size;

// tooltip
const tip = document.getElementById("tip");
function showTip(e, html) {
  tip.innerHTML = html;
  tip.hidden = false;
  moveTip(e);
}
function moveTip(e) {
  const w = tip.offsetWidth,
    h = tip.offsetHeight;
  let x = e.clientX + 14,
    y = e.clientY + 14;
  if (x + w > innerWidth - 8) x = e.clientX - w - 14;
  if (y + h > innerHeight - 8) y = e.clientY - h - 14;
  tip.style.left = Math.max(8, x) + "px";
  tip.style.top = Math.max(8, y) + "px";
}
function hideTip() {
  tip.hidden = true;
}
const svgEl = (tag, attrs = {}) => {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
};
function bindTip(el, html) {
  el.addEventListener("pointerenter", (e) => showTip(e, html()));
  el.addEventListener("pointermove", moveTip);
  el.addEventListener("pointerleave", hideTip);
}
const topRound = (x, y, w, h, r) => {
  r = Math.min(r, w / 2, h);
  return `M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z`;
};
const rightRound = (x, y, w, h, r) => {
  r = Math.min(r, h / 2, w);
  return `M${x},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h - r}Q${x + w},${y + h} ${x + w - r},${y + h}H${x}Z`;
};

// header + kpis
const aboveN = C.filter((c) => c.r.startsWith("AboveSports")).length;
document.getElementById("range").innerHTML = L.range(
  C[0].t.replace("T", " "),
  C[C.length - 1].t.replace("T", " "),
  months.length,
);
const kpis = [
  [fmt(C.length), L.kpi.commits, L.kpi.uniq(fmt(uniq))],
  [
    fmt(days.size),
    L.kpi.days,
    L.kpi.perDay(
      (C.length / days.size).toLocaleString(L.locale, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }),
    ),
  ],
  [
    Object.keys(repoStats).length,
    L.kpi.repos,
    L.kpi.split(fmt(aboveN), fmt(C.length - aboveN)),
  ],
  [monthTot(peak), L.kpi.peak, L.kpi.peakSub(monLabel(peak))],
  [fmt(repoStats["AboveSports/web"].n), L.kpi.above, L.kpi.aboveSub],
];
document.getElementById("kpis").innerHTML = kpis
  .map(
    ([v, l, s]) =>
      `<div class="kpi"><div class="v">${v}</div><div class="l">${l}</div><div class="s">${s}</div></div>`,
  )
  .join("");

// monthly stacked bars
document.getElementById("legend-month").innerHTML = GROUPS.map(
  (g) => `<span><i style="background:var(${g.c})"></i>${g.name}</span>`,
).join("");
function drawMonth() {
  const host = document.getElementById("chart-month");
  host.innerHTML = "";
  const W = Math.max(640, host.clientWidth),
    H = 280,
    m = { t: 12, r: 8, b: 30, l: 34 };
  const iw = W - m.l - m.r,
    ih = H - m.t - m.b,
    max = 100;
  const svg = svgEl("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": L.aria.month,
  });
  for (let v = 0; v <= max; v += 25) {
    const y = m.t + ih - (v / max) * ih;
    svg.append(
      svgEl("line", {
        x1: m.l,
        x2: W - m.r,
        y1: y,
        y2: y,
        stroke: css(v ? "--grid" : "--rule"),
        "stroke-width": 1,
      }),
    );
    const t = svgEl("text", {
      x: m.l - 8,
      y: y + 4,
      "text-anchor": "end",
    });
    t.textContent = v;
    svg.append(t);
  }
  const bw = iw / months.length,
    w = Math.max(3, bw - Math.max(2, bw * 0.28));
  months.forEach((k, i) => {
    const x = m.l + i * bw + (bw - w) / 2;
    let y0 = m.t + ih;
    const segs = GROUPS.filter((g) => byMonth[k][g.key]);
    segs.forEach((g, j) => {
      const h = (byMonth[k][g.key] / max) * ih,
        top = j === segs.length - 1;
      const hh = Math.max(0.5, h - (top ? 0 : 2));
      y0 -= h;
      svg.append(
        top
          ? svgEl("path", {
              d: topRound(x, y0, w, hh, 3),
              fill: css(g.c),
            })
          : svgEl("rect", {
              x,
              y: y0 + 2,
              width: w,
              height: hh,
              fill: css(g.c),
            }),
      );
    });
    if (k.endsWith("-01") || i === 0) {
      const t = svgEl("text", {
        x: m.l + i * bw + bw / 2,
        y: H - 10,
        "text-anchor": "middle",
      });
      t.textContent = k.endsWith("-01")
        ? k.slice(0, 4)
        : MON[+k.slice(5) - 1];
      svg.append(t);
      svg.append(
        svgEl("line", {
          x1: m.l + i * bw,
          x2: m.l + i * bw,
          y1: m.t + ih,
          y2: m.t + ih + 5,
          stroke: css("--rule"),
        }),
      );
    }
    if (k === peak) {
      const t = svgEl("text", {
        x: x + w / 2,
        y: m.t + ih - (monthTot(k) / max) * ih - 6,
        "text-anchor": "middle",
        class: "val",
      });
      t.textContent = monthTot(k);
      svg.append(t);
    }
    const hit = svgEl("rect", {
      x: m.l + i * bw,
      y: m.t,
      width: bw,
      height: ih,
      fill: "transparent",
    });
    bindTip(
      hit,
      () =>
        `<div class="t">${monLabel(k)}</div>` +
        GROUPS.filter((g) => byMonth[k][g.key])
          .map(
            (g) =>
              `<div class="r"><span><i style="background:var(${g.c})"></i>${g.name}</span><span class="mono">${byMonth[k][g.key]}</span></div>`,
          )
          .join("") +
        `<div class="r tot"><span>${L.total}</span><span class="mono">${monthTot(k)}</span></div>`,
    );
    svg.append(hit);
  });
  host.append(svg);
}

// timeline
function drawTimeline() {
  const host = document.getElementById("chart-timeline");
  host.innerHTML = "";
  const repos = Object.keys(repoStats).sort((a, b) =>
    repoStats[a].first.localeCompare(repoStats[b].first),
  );
  const W = Math.max(680, host.clientWidth),
    rh = 24,
    m = { t: 8, r: 54, b: 26, l: 178 },
    H = m.t + repos.length * rh + m.b,
    iw = W - m.l - m.r;
  const t0 = Date.parse(months[0] + "-01"),
    t1 = Date.parse(C[C.length - 1].d) + 864e5 * 20,
    X = (d) => m.l + ((Date.parse(d) - t0) / (t1 - t0)) * iw;
  const svg = svgEl("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": L.aria.timeline,
  });
  ["2024", "2025", "2026"].forEach((y) => {
    const x = X(y + "-01-01");
    svg.append(
      svgEl("line", {
        x1: x,
        x2: x,
        y1: m.t,
        y2: H - m.b,
        stroke: css("--grid"),
      }),
    );
    const t = svgEl("text", { x, y: H - 8, "text-anchor": "middle" });
    t.textContent = y;
    svg.append(t);
  });
  repos.forEach((r, i) => {
    const s = repoStats[r],
      y = m.t + i * rh,
      g = groupOf(r),
      col = css(g.c);
    const lab = svgEl("text", {
      x: m.l - 12,
      y: y + rh / 2 + 4,
      "text-anchor": "end",
      class: "lbl",
    });
    lab.textContent = nm(r);
    svg.append(lab);
    svg.append(
      svgEl("line", {
        x1: X(s.first),
        x2: Math.max(X(s.last), X(s.first) + 1),
        y1: y + rh / 2,
        y2: y + rh / 2,
        stroke: col,
        "stroke-opacity": 0.35,
        "stroke-width": 2,
      }),
    );
    s.days.forEach((d) =>
      svg.append(
        svgEl("rect", {
          x: X(d) - 1,
          y: y + 5,
          width: 2,
          height: rh - 10,
          rx: 1,
          fill: col,
        }),
      ),
    );
    const n = svgEl("text", {
      x: W - m.r + 8,
      y: y + rh / 2 + 4,
      class: "val",
    });
    n.textContent = s.n;
    svg.append(n);
    const hit = svgEl("rect", {
      x: 0,
      y,
      width: W,
      height: rh,
      fill: "transparent",
    });
    bindTip(
      hit,
      () =>
        `<div class="t">${s.first} → ${s.last}</div><div class="r"><span><i style="background:${col}"></i>${nm(r)}</span></div><div class="r"><span>${L.commitsLbl}</span><span class="mono">${s.n}</span></div><div class="r"><span>${L.activeDays}</span><span class="mono">${s.days.size}</span></div>`,
    );
    svg.append(hit);
  });
  const h = svgEl("text", {
    x: W - m.r + 8,
    y: m.t - 0,
    "font-size": 10,
  });
  svg.append(h);
  host.append(svg);
}

// simple bar charts
function vbars(id, labels, vals, ariaLabel, tickEvery = 1) {
  const host = document.getElementById(id);
  host.innerHTML = "";
  const W = Math.max(260, host.clientWidth),
    H = 170,
    m = { t: 18, r: 4, b: 24, l: 4 },
    iw = W - m.l - m.r,
    ih = H - m.t - m.b,
    max = Math.max(...vals);
  const svg = svgEl("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": ariaLabel,
  });
  svg.append(
    svgEl("line", {
      x1: m.l,
      x2: W - m.r,
      y1: m.t + ih,
      y2: m.t + ih,
      stroke: css("--rule"),
    }),
  );
  const bw = iw / vals.length,
    w = Math.max(3, bw - Math.max(2, bw * 0.25)),
    mi = vals.indexOf(max);
  vals.forEach((v, i) => {
    const h = (v / max) * ih,
      x = m.l + i * bw + (bw - w) / 2;
    if (v)
      svg.append(
        svgEl("path", {
          d: topRound(x, m.t + ih - h, w, h, 3),
          fill: css("--s1"),
          "fill-opacity": i === mi ? 1 : 0.55,
        }),
      );
    if (i % tickEvery === 0) {
      const t = svgEl("text", {
        x: x + w / 2,
        y: H - 8,
        "text-anchor": "middle",
      });
      t.textContent = labels[i];
      svg.append(t);
    }
    if (i === mi) {
      const t = svgEl("text", {
        x: x + w / 2,
        y: m.t + ih - h - 5,
        "text-anchor": "middle",
        class: "val",
      });
      t.textContent = v;
      svg.append(t);
    }
    const hit = svgEl("rect", {
      x: m.l + i * bw,
      y: m.t,
      width: bw,
      height: ih,
      fill: "transparent",
    });
    bindTip(
      hit,
      () =>
        `<div class="r"><span>${labels[i]}</span><span class="mono">${L.nCommits(v)}</span></div>`,
    );
    svg.append(hit);
  });
  host.append(svg);
}
function hbars(id, rows, ariaLabel) {
  const host = document.getElementById(id);
  host.innerHTML = "";
  const W = Math.max(260, host.clientWidth),
    rh = 22,
    m = { l: 66, r: 40 },
    H = rows.length * rh,
    iw = W - m.l - m.r,
    max = rows[0][1];
  const svg = svgEl("svg", {
    width: W,
    height: H,
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": ariaLabel,
  });
  rows.forEach(([k, v], i) => {
    const y = i * rh,
      w = Math.max(2, (v / max) * iw);
    const t = svgEl("text", {
      x: m.l - 8,
      y: y + rh / 2 + 4,
      "text-anchor": "end",
      class: "lbl",
    });
    t.textContent = k;
    svg.append(t);
    svg.append(
      svgEl("path", {
        d: rightRound(m.l, y + 5, w, rh - 10, 3),
        fill: css("--s1"),
        "fill-opacity": i ? 0.55 : 1,
      }),
    );
    const n = svgEl("text", {
      x: m.l + w + 6,
      y: y + rh / 2 + 4,
      class: "val",
    });
    n.textContent = v;
    svg.append(n);
  });
  host.append(svg);
}
const hours = Array(24).fill(0);
C.forEach((c) => hours[c.h]++);
const hr = hours.map((_, i) => i).slice(7, 24);
const week = Array(7).fill(0);
C.forEach((c) => week[(new Date(c.d + "T12:00:00").getDay() + 6) % 7]++);
const verbs = {};
C.forEach((c) => {
  const v = (c.m.trim().split(/\s+/)[0] || "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  verbs[v] = (verbs[v] || 0) + 1;
});
const verbRows = Object.entries(verbs)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 7);
const core = hours.slice(10, 18).reduce((a, b) => a + b, 0),
  weekend = week[5] + week[6];
document.getElementById("note-hour").textContent = L.noteHour(
  Math.round((core / C.length) * 100),
  hours.indexOf(Math.max(...hours)),
);
document.getElementById("note-week").textContent = L.noteWeek(
  weekend,
  ((weekend / C.length) * 100).toLocaleString(L.locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }),
);

function drawAll() {
  drawMonth();
  drawTimeline();
  vbars(
    "chart-hour",
    hr.map((h) => String(h).padStart(2, "0")),
    hr.map((h) => hours[h]),
    L.aria.hour,
    2,
  );
  vbars("chart-week", L.wk, week, L.aria.week);
  hbars("chart-verb", verbRows, L.aria.verb);
}

// eras
const ERAS = [
  {
    r: "AboveSports/web",
    title: "AboveSports web",
    tech: [
      "Vue 3",
      "TypeScript",
      "ECharts",
      "Vite",
      "Tailwind",
      "Segment",
      "html2canvas",
      "Vitest",
    ],
  },
  {
    r: "ShareIT Core/vwv",
    title: "VWV",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Umbraco headless",
      "SCSS",
      "Tailwind",
    ],
  },
  {
    r: "ShareIT Core/sogenave-app",
    title: "Sogenave app",
    tech: ["Vue", "Nuxt", "Ionic", "Capacitor", "Firebase", "Umbraco"],
  },
  {
    r: "ShareIT Core/shareit-enterprise-platform",
    title: "Enterprise platform",
    tech: [
      "pnpm",
      "Storybook",
      "Design tokens",
      "Tailwind",
      "Orval",
      "Figma",
    ],
  },
  {
    r: "ShareIT Core/balanco-social",
    title: "Balanço Social",
    tech: ["Umbraco", "GA4", "Responsive"],
  },
].map((e) => ({ ...e, ...L.eras[e.r] }));
const SITES = L.sites;
const sw = (r) =>
  `<span class="swatch" style="background:var(${groupOf(r).c})"></span>`;
document.getElementById("eras").innerHTML =
  ERAS.map((e) => {
    const s = repoStats[e.r];
    return `<article class="panel era"><div class="era-top"><div class="who"><h3>${sw(e.r)}${e.title}</h3><div class="meta">${e.role}</div><div class="meta">${s.first} → ${s.last}</div></div><div class="count">${fmt(s.n)}<small>commits</small></div></div><ul>${e.pts.map((p) => `<li>${p}</li>`).join("")}</ul><div class="chips">${e.tech.map((t) => `<span class="chip">${t}</span>`).join("")}</div></article>`;
  }).join("") +
  (() => {
    const other = C.filter((c) => groupOf(c.r).key === "oth").length;
    return `<article class="panel era"><div class="era-top"><div class="who"><h3><span class="swatch" style="background:var(--s6)"></span>${L.clientSites}</h3><div class="meta">${L.sitesMeta(Object.keys(repoStats).filter((r) => groupOf(r).key === "oth").length)}</div></div><div class="count">${fmt(other)}<small>commits</small></div></div><div class="sites">${SITES.map(([a, b]) => `<div><b>${a}</b>: ${b}</div>`).join("")}</div><div class="chips"><span class="chip">Umbraco</span><span class="chip">LESS</span><span class="chip">Email HTML</span><span class="chip">Bitbucket Pipelines</span></div></article>`;
  })();

// log
const repoSel = document.getElementById("repo"),
  q = document.getElementById("q"),
  body = document.getElementById("log-body"),
  more = document.getElementById("more");
repoSel.innerHTML =
  `<option value="">${L.allProjects(Object.keys(repoStats).length)}</option>` +
  Object.keys(repoStats)
    .sort((a, b) => repoStats[b].n - repoStats[a].n)
    .map(
      (r) => `<option value="${r}">${nm(r)} · ${repoStats[r].n}</option>`,
    )
    .join("");
let limit = 150;
const esc = (s) =>
  s.replace(
    /[&<>"]/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch],
  );
function renderLog() {
  const term = q.value.trim().toLowerCase(),
    r = repoSel.value;
  const rows = C.filter(
    (c) =>
      (!r || c.r === r) &&
      (!term ||
        c.m.toLowerCase().includes(term) ||
        nm(c.r).toLowerCase().includes(term)),
  ).reverse();
  const hl = (s) => {
    const e = esc(s);
    if (!term) return e;
    const i = e.toLowerCase().indexOf(esc(term));
    return i < 0
      ? e
      : e.slice(0, i) +
          "<mark>" +
          e.slice(i, i + esc(term).length) +
          "</mark>" +
          e.slice(i + esc(term).length);
  };
  body.innerHTML =
    rows
      .slice(0, limit)
      .map(
        (c) =>
          `<tr><td class="d">${c.t.replace("T", " ")}</td><td class="p">${sw(c.r)}${esc(nm(c.r))}</td><td class="m">${hl(c.m)}</td></tr>`,
      )
      .join("") ||
    `<tr><td class="m" colspan="3">${L.noMatch(esc(q.value))}</td></tr>`;
  document.getElementById("log-count").textContent = L.logCount(
    fmt(Math.min(limit, rows.length)),
    fmt(rows.length),
  );
  more.hidden = rows.length <= limit;
}
q.addEventListener("input", () => {
  limit = 150;
  renderLog();
});
repoSel.addEventListener("change", () => {
  limit = 150;
  renderLog();
});
more.addEventListener("click", () => {
  limit += 300;
  renderLog();
});
renderLog();

document.getElementById("foot").textContent = L.foot(
  fmt(C.length),
  Object.keys(repoStats).length,
  fmt(C.length - uniq),
);

drawAll();
let rt;
addEventListener("resize", () => {
  clearTimeout(rt);
  rt = setTimeout(drawAll, 120);
});
matchMedia("(prefers-color-scheme: dark)").addEventListener(
  "change",
  drawAll,
);
new MutationObserver(drawAll).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

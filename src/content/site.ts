export type Lang = "es" | "en";

type Metric = { value: string; label: string };
type Product = {
  name: string;
  kind: string;
  body: string;
  metrics: Metric[];
  stack: string;
};
type Role = {
  period: string;
  company: string;
  title: string;
  summary: string;
  detail?: string;
};
type StackGroup = { label: string; items: string };

export type Copy = {
  htmlLang: string;
  metaTitle: string;
  nav: { work: string; experience: string; stack: string; contact: string };
  switchLabel: string;
  hero: {
    role: string;
    availability: string;
    intro: string;
    location: string;
    ctaCv: string;
    ctaContact: string;
    cvHref: string;
  };
  proof: {
    label: string;
    items: Metric[];
  };
  work: {
    index: string;
    label: string;
    title: string;
    note: string;
    privateNote: string;
    products: Product[];
  };
  experience: {
    index: string;
    label: string;
    title: string;
    note: string;
    roles: Role[];
  };
  stack: {
    index: string;
    label: string;
    title: string;
    note: string;
    groups: StackGroup[];
  };
  contact: {
    index: string;
    label: string;
    title: string;
    body: string;
    email: string;
    links: { label: string; href: string }[];
    cvLabel: string;
    cvHref: string;
  };
  footer: { rights: string; built: string };
};

export const copy: Record<Lang, Copy> = {
  es: {
    htmlLang: "es",
    metaTitle: "Juan Quiroz — Fundador técnico e ingeniero full-stack",
    nav: {
      work: "Trabajo",
      experience: "Experiencia",
      stack: "Stack",
      contact: "Contacto",
    },
    switchLabel: "Cambiar idioma",
    hero: {
      role: "Fundador técnico · Ingeniero full-stack",
      availability: "Disponible para roles remotos",
      intro:
        "Cinco años construyendo productos completos: backend, frontend, datos e infraestructura. Dos están en producción hoy, construidos y mantenidos en solitario.",
      location: "Carabobo, Venezuela\nUTC−4 · Remoto",
      ctaCv: "Descargar CV",
      ctaContact: "Escribime",
      cvHref: "/cv/juan-quiroz-cv-es.pdf",
    },
    proof: {
      label: "Construido y mantenido en solitario",
      items: [
        { value: "2", label: "productos en producción" },
        { value: "67K", label: "líneas de código" },
        { value: "303", label: "rutas HTTP" },
        { value: "59", label: "módulos de ERP" },
      ],
    },
    work: {
      index: "01",
      label: "Trabajo seleccionado",
      title: "Dos productos en producción.",
      note: "Ambos son privados: contienen datos de clientes y pacientes. Puedo recorrer la arquitectura y las decisiones técnicas en una llamada.",
      privateNote: "Código privado",
      products: [
        {
          name: "Cocolu Ventas",
          kind: "SaaS B2B · Ventas, inventario y contabilidad",
          body: "Para PYMES de LATAM. Backend hexagonal en TypeScript con seis módulos acotados, esquema de 41 tablas y 303 rutas HTTP. Bot de pedidos por WhatsApp que consulta stock y confirma pagos, cobro multimoneda (Zelle, PayPal, Pago Móvil, efectivo), panel React 18 con roles y 349 archivos de prueba. El producto completo se construyó en 8 semanas.",
          metrics: [
            { value: "67 mil", label: "líneas de TypeScript" },
            { value: "303", label: "rutas HTTP" },
            { value: "41", label: "tablas" },
            { value: "349", label: "archivos de prueba" },
          ],
          stack:
            "TypeScript · Node.js · Express · React 18 · SQLite · Baileys · Docker",
        },
        {
          name: "SOS Dental",
          kind: "ERP clínico · Flutter Web + Rust",
          body: "59 módulos para una clínica odontológica: pacientes, citas, odontograma, pagos, nómina, inventario, farmacia y analítica. Servicio ML en Rust (axum + ONNX) que predice churn, LTV y cancelación de citas, integrado al panel. Interfaz en español, inglés y árabe; auditoría y acceso por roles.",
          metrics: [
            { value: "59", label: "módulos" },
            { value: "328 mil", label: "líneas de Dart" },
            { value: "3", label: "idiomas" },
            { value: "Rust", label: "servicio ML" },
          ],
          stack: "Flutter · Dart · PocketBase · Rust · axum · ONNX · Docker",
        },
      ],
    },
    experience: {
      index: "02",
      label: "Experiencia",
      title: "Cinco años construyendo software que mueve dinero.",
      note: "FinTech, automatización de procesos y ERP. De la arquitectura al despliegue, con equipos pequeños y ciclos cortos.",
      roles: [
        {
          period: "2025 — Presente",
          company: "Ember Drago",
          title: "Fundador & Ingeniero de Software",
          summary:
            "Dos productos en producción, de la arquitectura al despliegue y la operación.",
        },
        {
          period: "2025 — Presente",
          company: "UNITEC",
          title: "Asistente de Vice Rectorado",
          summary:
            "Portal Drupal y Excel para Vice-Rectorado; biblioteca y repositorio con DSpace, OJS y CRIS-lite.",
        },
        {
          period: "oct 2023 — Presente",
          company: "MotoStudio",
          title: "Líder Técnico Fraccional & Arquitecto",
          summary:
            "Motor de crédito, conciliación bancaria y pasarelas PCI DSS para una financiera de vehículos.",
        },
        {
          period: "oct 2024 — mar 2025",
          company: "Daka",
          title: "Consultor de Desarrollo de Aplicaciones",
          summary:
            "Integraciones SAP HANA y reportes SQL para el brazo tecnológico de un grupo retail.",
        },
        {
          period: "oct 2023 — jun 2024",
          company: "Empresys",
          title: "Líder Full Stack & Ingeniero RPA",
          summary:
            "RPA a escala para un socio logístico asiático: 100% de la ingesta y los reportes automatizados.",
        },
        {
          period: "2022 — 2023",
          company: "NoCountry",
          title: "Líder Técnico",
          summary:
            "Squad de frontend a backend: entrega 30% más rápida y mentoría en XP y TDD.",
        },
      ],
    },
    stack: {
      index: "03",
      label: "Stack",
      title: "Lo que uso para llevar una idea a producción.",
      note: "Cada tecnología de esta lista tiene código detrás: producto propio, cliente o repositorio público.",
      groups: [
        {
          label: "Lenguajes",
          items: "TypeScript, JavaScript, Python, Java, Ruby, Dart, Rust, SQL",
        },
        {
          label: "Backend",
          items: "Node.js, Express, NestJS, REST, GraphQL, arquitectura hexagonal",
        },
        {
          label: "Frontend",
          items: "React, Next.js, Vue, Svelte, Astro, Flutter",
        },
        {
          label: "Datos",
          items: "PostgreSQL, MySQL, SQLite, MongoDB, SAP HANA, Prisma",
        },
        {
          label: "Infraestructura",
          items: "Docker, Linux, CI/CD, AWS, Vercel, Sentry, Litestream",
        },
        {
          label: "Automatización",
          items: "WhatsApp (Baileys, BotBuilder), RPA, bots sincronizados con SAP",
        },
      ],
    },
    contact: {
      index: "04",
      label: "Contacto",
      title: "¿Construimos algo?",
      body: "Busco un rol de founding engineer o senior full-stack con ownership real de producto. Trabajo remoto desde Venezuela, con solapamiento completo con US Eastern.",
      email: "juanquirozsana@gmail.com",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/dreyz" },
        { label: "GitHub", href: "https://github.com/juanquiro" },
      ],
      cvLabel: "CV en español",
      cvHref: "/cv/juan-quiroz-cv-es.pdf",
    },
    footer: {
      rights: "Juan Quiroz · Carabobo, Venezuela",
      built: "Hecho con Next.js y Fira Sans",
    },
  },

  en: {
    htmlLang: "en",
    metaTitle: "Juan Quiroz — Technical founder & full-stack engineer",
    nav: {
      work: "Work",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
    },
    switchLabel: "Switch language",
    hero: {
      role: "Technical founder · Full-stack engineer",
      availability: "Open to remote roles",
      intro:
        "Five years building complete products — backend, frontend, data, and infrastructure. Two are in production today, both built and maintained solo.",
      location: "Carabobo, Venezuela\nUTC−4 · Remote",
      ctaCv: "Download CV",
      ctaContact: "Get in touch",
      cvHref: "/cv/juan-quiroz-cv-en.pdf",
    },
    proof: {
      label: "Built and maintained solo",
      items: [
        { value: "2", label: "products in production" },
        { value: "67K", label: "lines of code" },
        { value: "303", label: "HTTP routes" },
        { value: "59", label: "ERP modules" },
      ],
    },
    work: {
      index: "01",
      label: "Selected work",
      title: "Two products in production.",
      note: "Both are private: they hold client and patient data. I'm happy to walk through the architecture and trade-offs on a call.",
      privateNote: "Private code",
      products: [
        {
          name: "Cocolu Ventas",
          kind: "B2B SaaS · Sales, inventory & accounting",
          body: "Built for LATAM small businesses. Hexagonal TypeScript backend across six bounded modules, a 41-table schema, and 303 HTTP routes. WhatsApp ordering bot that checks stock and confirms payments, multi-currency checkout (Zelle, PayPal, Pago Móvil, cash), React 18 admin with roles, and 349 test files. The whole product shipped in 8 weeks.",
          metrics: [
            { value: "67k", label: "lines of TypeScript" },
            { value: "303", label: "HTTP routes" },
            { value: "41", label: "tables" },
            { value: "349", label: "test files" },
          ],
          stack:
            "TypeScript · Node.js · Express · React 18 · SQLite · Baileys · Docker",
        },
        {
          name: "SOS Dental",
          kind: "Clinic ERP · Flutter Web + Rust",
          body: "59 modules for a dental clinic: patients, appointments, odontogram, payments, payroll, inventory, pharmacy, and analytics. A Rust ML service (axum + ONNX) predicts churn, LTV, and appointment cancellation, wired into the dashboard. Spanish, English, and Arabic UI; audit logging and role-based access.",
          metrics: [
            { value: "59", label: "modules" },
            { value: "328k", label: "lines of Dart" },
            { value: "3", label: "languages" },
            { value: "Rust", label: "ML service" },
          ],
          stack: "Flutter · Dart · PocketBase · Rust · axum · ONNX · Docker",
        },
      ],
    },
    experience: {
      index: "02",
      label: "Experience",
      title: "Five years building software that moves money.",
      note: "FinTech, process automation, and ERP. From architecture to deployment, with small teams and short cycles.",
      roles: [
        {
          period: "2025 — Present",
          company: "Ember Drago",
          title: "Founder & Software Engineer",
          summary:
            "Two products in production, from architecture through deployment and operations.",
        },
        {
          period: "2025 — Present",
          company: "UNITEC",
          title: "Assistant to the Vice-Rector",
          summary:
            "Drupal portal and Excel for the Vice-Rector's office; library and repository work with DSpace, OJS, and CRIS-lite.",
        },
        {
          period: "Oct 2023 — Present",
          company: "MotoStudio",
          title: "Fractional Technical Lead & Architect",
          summary:
            "Credit engine, bank reconciliation, and PCI DSS gateways for a vehicle financing platform.",
        },
        {
          period: "Oct 2024 — Mar 2025",
          company: "Daka",
          title: "Application Development Consultant",
          summary:
            "SAP HANA integrations and SQL reporting for the technology arm of a retail group.",
        },
        {
          period: "Oct 2023 — Jun 2024",
          company: "Empresys",
          title: "Full Stack Lead & RPA Engineer",
          summary:
            "Enterprise RPA for a major Asian logistics partner: 100% of ingestion and reporting automated.",
        },
        {
          period: "2022 — 2023",
          company: "NoCountry",
          title: "Technical Lead",
          summary:
            "Squad from frontend to backend: 30% faster delivery and mentoring in XP and TDD.",
        },
      ],
    },
    stack: {
      index: "03",
      label: "Stack",
      title: "What I use to take an idea to production.",
      note: "Every technology on this list has code behind it: my own product, a client, or a public repository.",
      groups: [
        {
          label: "Languages",
          items: "TypeScript, JavaScript, Python, Java, Ruby, Dart, Rust, SQL",
        },
        {
          label: "Backend",
          items: "Node.js, Express, NestJS, REST, GraphQL, hexagonal architecture",
        },
        {
          label: "Frontend",
          items: "React, Next.js, Vue, Svelte, Astro, Flutter",
        },
        {
          label: "Data",
          items: "PostgreSQL, MySQL, SQLite, MongoDB, SAP HANA, Prisma",
        },
        {
          label: "Infrastructure",
          items: "Docker, Linux, CI/CD, AWS, Vercel, Sentry, Litestream",
        },
        {
          label: "Automation",
          items: "WhatsApp (Baileys, BotBuilder), RPA, SAP-synced bots",
        },
      ],
    },
    contact: {
      index: "04",
      label: "Contact",
      title: "Let's build something.",
      body: "I'm looking for a founding engineer or senior full-stack role with real product ownership. Working remote from Venezuela, with full overlap with US Eastern.",
      email: "juanquirozsana@gmail.com",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/dreyz" },
        { label: "GitHub", href: "https://github.com/juanquiro" },
      ],
      cvLabel: "English CV",
      cvHref: "/cv/juan-quiroz-cv-en.pdf",
    },
    footer: {
      rights: "Juan Quiroz · Carabobo, Venezuela",
      built: "Built with Next.js and Fira Sans",
    },
  },
};

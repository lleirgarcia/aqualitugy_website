import './styles.css';
import profileImage from './public/me.png';
import vegaImage from './public/vega.png';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  count: string;
}

interface Service {
  title: string;
  tagline: string;
  features: string[];
  price: string;
  buttonText?: string;
  disabled?: boolean;
}

interface Project {
  title: string;
  description: string;
  url?: string;
  image?: string;
  socialIcons?: string[];
  inConstruction?: boolean;
}

const app = document.getElementById('app')!;

const socialLinks: SocialLink[] = [
  { name: 'Twitter', icon: '𝕏', url: '#', count: '2.5K' },
  { name: 'LinkedIn', icon: 'in', url: '#', count: '1.2K' },
  { name: 'GitHub', icon: '{}', url: '#', count: '850' },
  { name: 'Instagram', icon: '📷', url: '#', count: '3.1K' },
  { name: 'TikTok', icon: '🎵', url: '#', count: '2.2K' },
];

const services: Service[] = [
  {
    title: 'espabila',
    tagline: 'Quiero un curro y futuro encaminado',
    features: [
      'Consultoría de 3 horas al mes conmigo',
      'Estrategias para mejorar como profesional',
      'Cómo encontrar un mejor trabajo y salario',
      'Empieza a pensar como senior',
      'Adapta tu perfil y tu speech',
      'Enfocado a juniors y middles',
      'Desarrollo de habilidades clave'
    ],
    price: '€XXX/mes',
    buttonText: 'empecemos por algo',
    disabled: false
  },
  {
    title: 'creetelo',
    tagline: 'Da el salto al 1% - Solo para Seniors',
    features: [
      'Consultoría de 5 horas al mes',
      'Contacto directo conmigo',
      'Ayuda a pasar de 45k a 70k',
      'Encontrar trabajo en UK',
      'Creamos al profesional que contratan',
      'Enfocado a personas senior',
      'Estrategias de crecimiento avanzadas'
    ],
    price: '€XXX/mes',
    buttonText: 'quiero mas',
    disabled: false
  },
  {
    title: 'comunidad',
    tagline: 'Acceso a comunidad y charlas',
    features: [
      'Acceso al canal de Discord',
      'Charlas semanales grupales conmigo',
      'Networking con otros profesionales',
      'Recursos y contenido exclusivo',
      'Plan básico de comunidad'
    ],
    price: '€XXX/mes',
    buttonText: 'acceder',
    disabled: true
  },
];

const projects: Project[] = [
  {
    title: 'SDET at Vega',
    description: 'No es un proyecto propio pero invierto 8 horas de mi día en una startup Fintech con $20M de Serie A financiada por Apollo, solo ellos manejan 1.3 billones en un mercado total de trillones de dólares.',
    url: '#',
    image: vegaImage,
  },
  {
    title: 'Redes Sociales',
    description: 'Comparto mi visión de forma semanal sobre la industria IT, lo bueno, lo malo y consejos para ser mejor profesional, ser más listo y ganar más dinero.',
    url: '#',
    socialIcons: [
      'https://www.youtube.com/@aqualityguy',
      'https://www.instagram.com/aqualityguy',
      'https://www.tiktok.com/@aqualityguy',
      'https://www.linkedin.com/in/lleirgarcia'
    ],
  },
  {
    title: 'Vuild in Public',
    description: 'Aplicativo web y canal de YouTube enfocado a construir software lo más rápido posible, con o sin utilidad, apalancándome de IA con la idea de generar contenido, ideas y crear una comunidad al día del potencial existente.',
    url: '#',
    inConstruction: true,
  },
];

function createTopBar(): string {
  return `
    <div class="top-bar">
      <span>software engineer</span>
      <span class="separator">|</span>
      <span>+11 años experiencia</span>
      <span class="separator">|</span>
      <span>+13 proyectos</span>
      <span class="separator">|</span>
      <span>+50 personas ayudadas</span>
      <span class="separator">|</span>
      <span>+18 mil seguidores</span>
    </div>
  `;
}

function createWhoIAmSection(): string {
  return `
    <div class="section">
      <div class="profile-header">
        <img src="${profileImage}" alt="aqualityguy" class="profile-image" />
        <div>
          <div class="profile-name">aqualityguy</div>
          <div class="section-intro">
            Hola, soy Lleïr Garcia y me he dedicado más de 11 años a la industria del software como Desarrollador, QA y Lead. Además, creo contenido en redes sociales según mi experiencia vivida con el objetivo de motivar a las personas a ser mejores profesionales, obtener mejores trabajos y ganar más dinero.
          </div>
        </div>
      </div>
      <div class="section-title">
        <svg class="section-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>quien soy</span>
      </div>
      <div class="about-content">
        <p>
          Soy una persona extrovertida y ambiciosa que nunca pensó en quedarse en una PIME por un miserable sueldo de 11 mil euros al año limitando mis conocimientos.
        </p>
        <p>
          Es por eso que en estos 11 años en la industria, en el área de calidad del software (donde también se programa!) he desarrollado mi carrera, crecido, estudiado y ganado más dinero año tras año.
        </p>
        <p>
          Soy un lector, devoro libros y también va por épocas, pero los libros y podcast me convirtieron la persona que soy hoy.
        </p>
        <p>
          En mis redes sociales expongo mis opiniones sin filtros, hablo de lo que debes hacer si quieres un mejor trabajo, despedir a tu jefe, ganar más dinero y no quedarte obsoleto. A la mayoría no le gusta porque no son perezosos.
        </p>
      </div>
    </div>
  `;
}


function createWhereToFindMeSection(): string {
  const socialHTML = socialLinks
    .map(
      (social) => `
      <a href="${social.url}" class="social-item" target="_blank" rel="noopener noreferrer">
        <div class="social-icon">${social.icon}</div>
        <div class="social-count">${social.count}</div>
      </a>
    `
    )
    .join('');

  return `
    <div class="section">
      <div class="section-title">donde puedes encontrarme?</div>
      <div class="social-links">
        ${socialHTML}
      </div>
    </div>
  `;
}

function createServicesSection(): string {
  const servicesHTML = services
    .map(
      (service, index) => {
        const featuresHTML = service.features
          .map(feature => `<li>${feature}</li>`)
          .join('');
        
        const disabledClass = service.disabled ? 'service-disabled' : '';
        const separator = index < services.length - 1 ? '<div class="service-separator"></div>' : '';
        const buttonText = service.buttonText || (service.disabled ? service.price : 'a ver si encaja');
        const comingSoonOverlay = service.disabled ? '<div class="service-coming-soon">construyendo algo chulo</div>' : '';
        
        return `
        <div class="service-item ${disabledClass}">
          ${comingSoonOverlay}
          <div class="service-title">${service.title}</div>
          <div class="service-tagline">${service.tagline}</div>
          <ul class="service-features">
            ${featuresHTML}
          </ul>
          <a href="/form.html?service=${service.title}" class="service-button" ${service.disabled ? 'style="pointer-events: none;"' : ''}>${buttonText}</a>
        </div>
        ${separator}
      `;
      }
    )
    .join('');

  return `
    <div class="section services-section">
      <div class="section-title">
        <svg class="section-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>si todo esto resuena contigo, puedo ayudarte</span>
      </div>
      <div class="services-description">
        ¿Por qué creo que puedo ayudarte? No me considero ni mejor ni peor que nadie, pero mis más de 14 proyectos, 11 años de experiencia y mi ambición por crecer me han hecho probar diferentes estrategias y he creado una forma de ser que atrae oportunidades sin buscarlas.
      </div>
      <div class="services">
        ${servicesHTML}
      </div>
    </div>
  `;
}

function createProjectsSection(): string {
  const youtubeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
  
  const instagramIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="url(#instagram-gradient)"><defs><linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#833AB4;stop-opacity:1" /><stop offset="50%" style="stop-color:#E1306C;stop-opacity:1" /><stop offset="100%" style="stop-color:#FCAF45;stop-opacity:1" /></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
  
  const tiktokIcon = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#25F4EE"/><path d="M16.82 2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FF0050"/></svg>`;
  
  const linkedinIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  const projectsHTML = projects
    .map(
      (project) => {
        let imageHTML = '';
        let socialIconsHTML = '';

        if (project.image) {
          imageHTML = `<img src="${project.image}" alt="${project.title}" class="project-image" />`;
        }

        if (project.socialIcons && project.socialIcons.length > 0) {
          const icons = [
            { url: project.socialIcons[0], icon: youtubeIcon, name: 'YouTube' },
            { url: project.socialIcons[1], icon: instagramIcon, name: 'Instagram' },
            { url: project.socialIcons[2], icon: tiktokIcon, name: 'TikTok' },
            { url: project.socialIcons[3], icon: linkedinIcon, name: 'LinkedIn' }
          ];
          
          socialIconsHTML = `
            <div class="project-social-icons">
              ${icons.map(icon => `
                <a href="${icon.url}" target="_blank" rel="noopener noreferrer" class="project-social-icon" title="${icon.name}">
                  ${icon.icon}
                </a>
              `).join('')}
            </div>
          `;
        }

        const constructionLabel = project.inConstruction ? '<div class="construction-label">en construcción</div>' : '';
        
        return `
      <div class="service-item">
        <div class="service-title">${project.title}</div>
        ${constructionLabel}
        ${imageHTML}
        ${socialIconsHTML}
        <div class="service-description">${project.description}</div>
      </div>
    `;
      }
    )
    .join('');

  return `
    <div class="section">
      <div class="section-title">
        <svg class="section-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span>mis proyectos</span>
      </div>
      <div class="services">
        ${projectsHTML}
      </div>
    </div>
  `;
}

function createSalaryProgressionSection(): string {
  // Datos: años y salarios
  const salaryData = [
    { year: 0, salary: 11000 },
    { year: 1, salary: 11000 },
    { year: 2, salary: 22000 },
    { year: 3, salary: 27000 },
    { year: 4, salary: 32000 },
    { year: 5, salary: 38000 },
    { year: 6, salary: 45000 },
    { year: 7, salary: 46000 },
    { year: 8, salary: 57000 },
    { year: 9, salary: 57000 },
    { year: 10, salary: 85000, blur: true },
  ];

  const maxSalary = 100000; // Tope en 100.000€
  const chartWidth = 800;
  const chartHeight = 350;
  const padding = 70;
  const graphWidth = chartWidth - padding * 2;
  const graphHeight = chartHeight - padding * 2;

  // Generar puntos de la línea
  const points = salaryData.map((data) => {
    const x = padding + (data.year / 10) * graphWidth;
    const y = padding + graphHeight - (data.salary / maxSalary) * graphHeight;
    return { x, y, blur: data.blur || false };
  });

  // Generar línea del gráfico (con blur en el último segmento)
  const normalPoints = points.filter(p => !p.blur);
  const blurPoint = points.find(p => p.blur);
  const lastNormalPoint = normalPoints[normalPoints.length - 1];
  
  // Línea principal sin blur
  const pathD = points
    .filter(p => !p.blur)
    .map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`))
    .join(' ');
  
  // Último segmento con blur
  const blurPath = blurPoint && lastNormalPoint 
    ? `<path d="M ${lastNormalPoint.x},${lastNormalPoint.y} L ${blurPoint.x},${blurPoint.y}" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.2" filter="url(#blur)" />`
    : '';

  // Generar puntos/círculos (sin salario encima)
  const circles = salaryData
    .map((data, index) => {
      const x = padding + (data.year / 10) * graphWidth;
      const y = padding + graphHeight - (data.salary / maxSalary) * graphHeight;
      if (data.blur) {
        // Último punto clickeable
        return `<circle cx="${x}" cy="${y}" r="8" fill="#ffffff" opacity="0.3" filter="url(#blur)" class="clickable-point" style="cursor: pointer;" data-point-index="${index}" />`;
      }
      return `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="#ffffff" stroke-width="2" />`;
    })
    .join('');

  // Generar etiquetas de años
  const yearLabels = salaryData
    .map((data) => {
      const x = padding + (data.year / 10) * graphWidth;
      return `<text x="${x}" y="${chartHeight - 20}" text-anchor="middle" fill="#888" font-size="12" font-family="Space Grotesk">${data.year}</text>`;
    })
    .join('');

  // Líneas de guía horizontales de 20 en 20k hasta 100k, incluyendo 0k
  const salaryLines = [0, 20000, 40000, 60000, 80000, 100000];
  const gridLines = salaryLines
    .map((value) => {
      const y = padding + graphHeight - (value / maxSalary) * graphHeight;
      return `<line x1="${padding}" y1="${y}" x2="${chartWidth - padding}" y2="${y}" stroke="#1a1a1a" stroke-width="1" />`;
    })
    .join('');

  // Etiquetas orientativas de salario en el eje Y (de 15 en 15k)
  const salaryLabels = salaryLines
    .map((value) => {
      const y = padding + graphHeight - (value / maxSalary) * graphHeight;
      const formattedValue = `${value / 1000}k`;
      return `<text x="${padding - 10}" y="${y + 4}" text-anchor="end" fill="#666" font-size="11" font-family="Space Grotesk">€${formattedValue}</text>`;
    })
    .join('');

  return `
    <div class="section">
      <div class="section-title">
        <svg class="section-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
        <span>esta es mi progresión salarial</span>
      </div>
      <div class="chart-hint">* haz click en el último punto de mi progresión salarial</div>
      <div class="chart-container">
        <svg width="${chartWidth}" height="${chartHeight}" viewBox="0 0 ${chartWidth} ${chartHeight}">
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
            </filter>
          </defs>
          ${gridLines}
          ${salaryLabels}
          <path d="${pathD}" fill="none" stroke="#ffffff" stroke-width="2" />
          ${blurPath}
          ${circles}
          ${yearLabels}
          <text x="${chartWidth / 2}" y="${chartHeight - 5}" text-anchor="middle" fill="#888" font-size="12" font-family="Space Grotesk">Años de experiencia</text>
          <text x="${padding - 50}" y="${chartHeight / 2}" text-anchor="middle" fill="#888" font-size="12" font-family="Space Grotesk" transform="rotate(-90 ${padding - 50} ${chartHeight / 2})">Salario</text>
        </svg>
        <div class="chart-legend">
          <div class="legend-item">
            <div class="legend-line"></div>
            <span>Progresión salarial</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createFooter(): string {
  const currentYear = new Date().getFullYear();
  const heartIcon = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin: 0 2px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  return `
    <div class="footer">
      <div>
        © 2026 AQUALITIGUY. Todos los derechos reservados. · Hecho por Lleïr con ${heartIcon} y Vibe Code
      </div>
      <div class="footer-links">
        <a href="/aviso-legal.html">Aviso Legal</a>
        <span>·</span>
        <a href="/politica-de-privacidad.html">Política de Privacidad</a>
        <span>·</span>
        <a href="/terminos-y-condiciones.html">Términos y Condiciones</a>
      </div>
    </div>
  `;
}

function createModal(): string {
  return `
    <div id="salaryModal" class="modal">
      <div class="modal-content">
        <button class="modal-close" aria-label="Cerrar">&times;</button>
        <h2 class="modal-title">Mi nómina actual</h2>
        <p class="modal-description">
          Si quieres saber lo que gana un residente español trabajando desde Londres, rellena esto 
          <span style="display: inline-block; font-size: 16px;">↓</span>
        </p>
        <form id="salaryForm" class="salary-form">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div class="form-group">
            <label for="edad">Edad</label>
            <input type="number" id="edad" name="edad" min="13" max="99" required />
          </div>
          <div class="form-group">
            <label for="pais">País</label>
            <select id="pais" name="pais" required>
              <option value="">Selecciona un país</option>
              <option value="ES">España</option>
              <option value="US">Estados Unidos</option>
              <option value="GB">Reino Unido</option>
              <option value="DE">Alemania</option>
              <option value="FR">Francia</option>
              <option value="IT">Italia</option>
              <option value="NL">Países Bajos</option>
              <option value="BE">Bélgica</option>
              <option value="CH">Suiza</option>
              <option value="AT">Austria</option>
              <option value="SE">Suecia</option>
              <option value="NO">Noruega</option>
              <option value="DK">Dinamarca</option>
              <option value="FI">Finlandia</option>
              <option value="IE">Irlanda</option>
              <option value="PT">Portugal</option>
              <option value="CA">Canadá</option>
              <option value="AU">Australia</option>
              <option value="NZ">Nueva Zelanda</option>
              <option value="JP">Japón</option>
              <option value="CN">China</option>
              <option value="IN">India</option>
              <option value="BR">Brasil</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CL">Chile</option>
              <option value="CO">Colombia</option>
              <option value="PE">Perú</option>
              <option value="ZA">Sudáfrica</option>
              <option value="SG">Singapur</option>
              <option value="AE">Emiratos Árabes Unidos</option>
              <option value="IL">Israel</option>
              <option value="KR">Corea del Sur</option>
              <option value="TW">Taiwán</option>
              <option value="HK">Hong Kong</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dedicacion">Dedicación / Especialización</label>
            <input type="text" id="dedicacion" name="dedicacion" required />
          </div>
          <div class="form-group">
            <label>Trabajando</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="trabajando" value="si" required />
                <span>Sí</span>
              </label>
              <label class="radio-label">
                <input type="radio" name="trabajando" value="no" required />
                <span>No</span>
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="experiencia">Experiencia laboral</label>
            <input type="number" id="experiencia" name="experiencia" min="0" max="60" required />
          </div>
          <div class="form-group">
            <label for="salarioActual">Salario actual</label>
            <input type="number" id="salarioActual" name="salarioActual" min="20000" max="300000" step="10000" required />
          </div>
          <div class="form-group">
            <label for="salarioDeseado">Salario deseado</label>
            <input type="number" id="salarioDeseado" name="salarioDeseado" min="20000" max="300000" step="10000" required />
          </div>
          <div class="form-privacy">
            <p class="form-privacy-text">
              Los datos proporcionados serán tratados conforme a nuestra <a href="/politica-de-privacidad.html" target="_blank">Política de Privacidad</a> y <a href="/terminos-y-condiciones.html" target="_blank">Términos y Condiciones</a>.
            </p>
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" id="modalPrivacyAccept" name="modalPrivacyAccept" required />
                <span>He leído y acepto la <a href="/politica-de-privacidad.html" target="_blank">Política de Privacidad</a> *</span>
              </label>
            </div>
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" id="modalMarketingAccept" name="modalMarketingAccept" />
                <span>Quiero recibir comunicaciones comerciales y promocionales</span>
              </label>
            </div>
            <input type="text" name="website_modal" id="website_modal" style="position: absolute; left: -9999px; opacity: 0;" tabindex="-1" autocomplete="off" />
          </div>
          <button type="submit" class="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  `;
}

function createTopSocialBar(): string {
  const youtubeIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
  
  const instagramIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
  
  const tiktokIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>`;
  
  const linkedinIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>`;
  
  const topSocialLinks = [
    { name: 'YouTube', icon: youtubeIcon, url: 'https://www.youtube.com/@aqualityguy', count: '3K' },
    { name: 'Instagram', icon: instagramIcon, url: 'https://www.instagram.com/aqualityguy', count: '1.7K' },
    { name: 'TikTok', icon: tiktokIcon, url: 'https://www.tiktok.com/@aqualityguy', count: '14K' },
    { name: 'LinkedIn', icon: linkedinIcon, url: 'https://www.linkedin.com/in/lleirgarcia', count: '2.5K' }
  ];
  
  const socialHTML = topSocialLinks
    .map(
      (social) => `
      <a href="${social.url}" class="social-item-top" target="_blank" rel="noopener noreferrer">
        <div class="social-icon-top">${social.icon}</div>
        <div class="social-count-top">${social.count}</div>
      </a>
    `
    )
    .join('');

  return `
    <div class="top-social-bar">
      <div class="social-links-top">
        ${socialHTML}
      </div>
    </div>
  `;
}

app.innerHTML = `
  <div class="container">
    ${createTopBar()}
    ${createTopSocialBar()}
    ${createWhoIAmSection()}
    ${createProjectsSection()}
    ${createSalaryProgressionSection()}
    ${createServicesSection()}
    ${createFooter()}
  </div>
  ${createModal()}
`;

// Generar posiciones aleatorias para las estrellas del fondo
function generateRandomStarPositions() {
  const generateGradients = (count: number) => {
    const gradients = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 300;
      const y = Math.random() * 300;
      const size = Math.random() * 2 + 0.5; // Tamaño entre 0.5px y 2.5px
      const opacity = Math.random() * 0.3 + 0.5; // Opacidad entre 0.5 y 0.8
      gradients.push(`radial-gradient(${size}px ${size}px at ${x}px ${y}px, rgba(255, 255, 255, ${opacity}), transparent)`);
    }
    return gradients.join(', ');
  };

  const layer1 = document.querySelector('.stars-layer-1') as HTMLElement;
  const layer2 = document.querySelector('.stars-layer-2') as HTMLElement;
  const layer3 = document.querySelector('.stars-layer-3') as HTMLElement;

  if (layer1) {
    layer1.style.backgroundImage = generateGradients(4);
  }
  if (layer2) {
    layer2.style.backgroundImage = generateGradients(4);
  }
  if (layer3) {
    layer3.style.backgroundImage = generateGradients(4);
  }
}

// Aplicar posiciones aleatorias a las estrellas al cargar
setTimeout(() => {
  generateRandomStarPositions();
}, 0);

// Funcionalidad del modal - se ejecuta después de que el DOM esté listo
setTimeout(() => {
  const modal = document.getElementById('salaryModal') as HTMLElement;
  const closeBtn = document.querySelector('.modal-close') as HTMLElement;
  const clickablePoint = document.querySelector('.clickable-point') as SVGCircleElement;
  const form = document.getElementById('salaryForm') as HTMLFormElement;

  if (clickablePoint) {
    clickablePoint.addEventListener('click', () => {
      if (modal) modal.style.display = 'flex';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });
  }

  // Cerrar al hacer click fuera del modal
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Manejar envío del formulario
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validar honeypot
      const honeypotInput = document.getElementById('website_modal') as HTMLInputElement;
      if (honeypotInput && honeypotInput.value !== '') {
        console.log('Spam detectado');
        return;
      }
      
      // Validar checkbox obligatorio
      const privacyCheckbox = document.getElementById('modalPrivacyAccept') as HTMLInputElement;
      if (!privacyCheckbox || !privacyCheckbox.checked) {
        alert('Debes aceptar la Política de Privacidad para continuar');
        privacyCheckbox?.focus();
        return;
      }
      
      // Aquí puedes añadir la lógica para enviar el formulario
      console.log('Formulario enviado');
      alert('Formulario enviado (funcionalidad pendiente de implementar)');
    });
  }

  // Validación en tiempo real para edad (13-99)
  const edadInput = document.getElementById('edad') as HTMLInputElement;
  if (edadInput) {
    edadInput.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (isNaN(value) || value < 13 || value > 99) {
        (e.target as HTMLInputElement).value = '';
      }
    });
  }

  // Validación en tiempo real para experiencia (0-60)
  const experienciaInput = document.getElementById('experiencia') as HTMLInputElement;
  if (experienciaInput) {
    experienciaInput.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (isNaN(value) || value < 0 || value > 60) {
        (e.target as HTMLInputElement).value = '';
      }
    });
  }

  // Validación en tiempo real para salario actual (20000-300000, step 10000)
  const salarioActualInput = document.getElementById('salarioActual') as HTMLInputElement;
  if (salarioActualInput) {
    salarioActualInput.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (isNaN(value) || value < 20000 || value > 300000 || value % 10000 !== 0) {
        (e.target as HTMLInputElement).value = '';
      }
    });
  }

  // Validación en tiempo real para salario deseado (20000-300000, step 10000)
  const salarioDeseadoInput = document.getElementById('salarioDeseado') as HTMLInputElement;
  if (salarioDeseadoInput) {
    salarioDeseadoInput.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (isNaN(value) || value < 20000 || value > 300000 || value % 10000 !== 0) {
        (e.target as HTMLInputElement).value = '';
      }
    });
  }
}, 100);

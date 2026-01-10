import './styles/main.css';

const app = document.getElementById('app')!;

// Datos fake de cursos con videos
const cursos = [
  {
    id: 1,
    title: 'Introducción a Testing Automatizado',
    description: 'Aprende los fundamentos del testing automatizado desde cero',
    videos: [
      {
        id: 1,
        title: '¿Qué es el Testing Automatizado?',
        duration: '15:30',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+1'
      },
      {
        id: 2,
        title: 'Configuración del Entorno',
        duration: '22:45',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+2'
      },
      {
        id: 3,
        title: 'Primeros Tests con Selenium',
        duration: '18:20',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+3'
      },
      {
        id: 4,
        title: 'Page Object Model',
        duration: '25:10',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+4'
      }
    ],
    downloads: [
      {
        id: 1,
        title: 'Guía de Inicio Rápido',
        type: 'PDF',
        size: '2.3 MB',
        icon: '📄'
      },
      {
        id: 2,
        title: 'Código de Ejemplo',
        type: 'ZIP',
        size: '5.1 MB',
        icon: '📦'
      },
      {
        id: 3,
        title: 'Cheat Sheet de Comandos',
        type: 'PDF',
        size: '890 KB',
        icon: '📋'
      }
    ]
  },
  {
    id: 2,
    title: 'API Testing Avanzado',
    description: 'Domina el testing de APIs REST y GraphQL',
    videos: [
      {
        id: 1,
        title: 'Fundamentos de API Testing',
        duration: '20:15',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+1'
      },
      {
        id: 2,
        title: 'Testing con Postman',
        duration: '28:40',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+2'
      },
      {
        id: 3,
        title: 'Automatización con RestAssured',
        duration: '32:25',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+3'
      }
    ],
    downloads: [
      {
        id: 1,
        title: 'Colección de Postman',
        type: 'JSON',
        size: '1.2 MB',
        icon: '🔗'
      },
      {
        id: 2,
        title: 'Ejemplos de Tests',
        type: 'ZIP',
        size: '3.8 MB',
        icon: '💻'
      }
    ]
  },
  {
    id: 3,
    title: 'Carrera en QA: De Junior a Senior',
    description: 'Estrategias para crecer profesionalmente en el área de calidad',
    videos: [
      {
        id: 1,
        title: 'Roadmap de Carrera',
        duration: '25:50',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+1'
      },
      {
        id: 2,
        title: 'Habilidades Clave a Desarrollar',
        duration: '30:20',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+2'
      },
      {
        id: 3,
        title: 'Negociación Salarial',
        duration: '22:15',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+3'
      },
      {
        id: 4,
        title: 'Preparación para Entrevistas',
        duration: '35:45',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+4'
      },
      {
        id: 5,
        title: 'Networking y Comunidad',
        duration: '18:30',
        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/06b6d4?text=Video+5'
      }
    ],
    downloads: [
      {
        id: 1,
        title: 'Plantilla de CV para QA',
        type: 'DOCX',
        size: '1.5 MB',
        icon: '📝'
      },
      {
        id: 2,
        title: 'Lista de Preguntas de Entrevista',
        type: 'PDF',
        size: '950 KB',
        icon: '❓'
      },
      {
        id: 3,
        title: 'Guía de Networking',
        type: 'PDF',
        size: '1.8 MB',
        icon: '🤝'
      },
      {
        id: 4,
        title: 'Roadmap Visual',
        type: 'PNG',
        size: '2.1 MB',
        icon: '🗺️'
      }
    ]
  }
];

function createTopBar(): string {
  return `
    <div class="top-social-bar">
      <a href="/" class="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>volver</span>
      </a>
      <div class="social-links-top">
        <a href="https://www.youtube.com/@aqualityguy" target="_blank" rel="noopener noreferrer" class="social-item-top">
          <div class="social-icon-top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <span class="social-count-top">YouTube</span>
        </a>
        <a href="https://www.linkedin.com/in/lleirgarcia" target="_blank" rel="noopener noreferrer" class="social-item-top">
          <div class="social-icon-top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077B5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <span class="social-count-top">LinkedIn</span>
        </a>
      </div>
    </div>
  `;
}

function createCursosPage(): string {
  const cursosHTML = cursos.map(curso => {
    const videosHTML = curso.videos.map(video => `
      <div class="video-item">
        <div class="video-thumbnail-wrapper">
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail" />
          <div class="video-play-overlay">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="white" opacity="0.9">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <div class="video-duration">${video.duration}</div>
        </div>
        <div class="video-info">
          <h4 class="video-title">${video.title}</h4>
        </div>
      </div>
    `).join('');

    const downloadsHTML = curso.downloads.map(download => `
      <div class="download-item">
        <div class="download-icon">${download.icon}</div>
        <div class="download-info">
          <div class="download-title">${download.title}</div>
          <div class="download-meta">${download.type} • ${download.size}</div>
        </div>
        <button class="download-button" data-download="${download.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
      </div>
    `).join('');

    return `
      <div class="section curso-section">
        <div class="section-title">
          <svg class="section-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <span>${curso.title}</span>
        </div>
        <div class="curso-description">${curso.description}</div>
        
        <div class="curso-subsection">
          <div class="subsection-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            <span>videos</span>
          </div>
          <div class="videos-grid">
            ${videosHTML}
          </div>
        </div>

        <div class="curso-subsection">
          <div class="subsection-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>descargas</span>
          </div>
          <div class="downloads-list">
            ${downloadsHTML}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="container">
      <div class="cursos-page">
        ${createTopBar()}
        <div class="section">
          <div class="section-title">
            <svg class="section-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <span>mis cursos</span>
          </div>
          <div class="section-intro">
            Aquí encontrarás todos mis cursos y recursos educativos. Cada curso incluye videos explicativos y materiales descargables para que puedas aprender a tu ritmo.
          </div>
        </div>
        ${cursosHTML}
      </div>
    </div>
  `;
}

app.innerHTML = createCursosPage();

// Manejo de clicks en botones de descarga
setTimeout(() => {
  const downloadButtons = document.querySelectorAll('.download-button');
  downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const downloadId = (button as HTMLElement).getAttribute('data-download');
      console.log('Descarga iniciada:', downloadId);
      // Aquí iría la lógica real de descarga
      alert('Descarga iniciada (simulación)');
    });
  });

  // Manejo de clicks en videos (placeholder)
  const videoItems = document.querySelectorAll('.video-item');
  videoItems.forEach(item => {
    item.addEventListener('click', () => {
      console.log('Video clickeado');
      // Aquí iría la lógica para abrir el video
      alert('Reproducir video (simulación)');
    });
  });
}, 100);

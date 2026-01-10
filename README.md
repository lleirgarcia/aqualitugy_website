# AqualityGuy - Personal Website

Página web personal profesional para promocionar servicios de consultoría, mostrar experiencia y conectar con profesionales del sector tech.

## 🚀 Características Implementadas

### Página Principal
- **Diseño oscuro y minimalista** con efectos de estrellas animadas
- **Sección "Quién soy"** con información personal y profesional
- **Servicios de consultoría** con tres planes:
  - **Espabila**: Para juniors y middles que buscan crecer profesionalmente
  - **Crételo**: Para seniors que quieren dar el salto al siguiente nivel
  - **Comunidad**: Acceso a comunidad y charlas grupales
- **Gráfico de progresión salarial** interactivo con Chart.js mostrando el crecimiento profesional
- **Enlaces a redes sociales** (Twitter/X, LinkedIn, GitHub)
- **Navegación fluida** con scroll suave y animaciones

### Formulario de Contacto
- Formulario funcional para consultas y contacto
- Validación de campos en cliente y servidor
- Almacenamiento de datos en base de datos Supabase (PostgreSQL)
- Protección anti-spam con honeypot
- Diseño coherente con el estilo general

### Páginas Legales
- **Aviso Legal**
- **Política de Privacidad**
- **Términos y Condiciones**
- Navegación integrada entre páginas legales

### Estructura del Proyecto
- **Organización modular** con separación de estilos, tipos y configuración
- **TypeScript** para type safety
- **Assets organizados** en carpetas dedicadas
- **Configuración de Vercel** para despliegue

## 🛠️ Tecnologías

- **TypeScript** - Lenguaje principal
- **Vite** - Build tool y dev server
- **Chart.js** - Gráficos interactivos
- **Supabase** - Base de datos PostgreSQL para formularios
- **Vercel** - Hosting y despliegue (Serverless Functions)
- **HTML5/CSS3** - Estructura y estilos

## 📦 Instalación

```bash
# Instalar dependencias
npm install
```

## 🏃 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El servidor se iniciará en `http://localhost:5173`

## 🏗️ Build

```bash
# Compilar para producción
npm run build

# Verificar tipos TypeScript
npm run type-check

# Preview de la build
npm run preview
```

## 🚢 Despliegue

El proyecto está configurado para desplegarse en Vercel:

### Despliegue Automático Completo

El script `deploy:full` automatiza todo el proceso: commit, push a develop, build y deploy:

```bash
# Despliegue completo automático (commit + push + build + deploy)
npm run deploy:full

# Con mensaje personalizado de commit
npm run deploy:full -- --message "Descripción de los cambios"
```

Ver [scripts/README.md](./scripts/README.md) para más opciones y detalles.

### Despliegue Manual

```bash
# Desplegar a producción (solo build + deploy)
npm run deploy

# Desplegar preview
npm run deploy:preview
```

## 📁 Estructura del Proyecto

```
├── api/                 # Vercel Serverless Functions
│   └── submit-form.ts   # API endpoint para formularios
├── supabase/            # Scripts de base de datos
│   └── schema.sql       # Esquema de base de datos
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── config/          # Archivos de configuración
│   ├── styles/          # Estilos CSS
│   ├── types/           # Definiciones de tipos TypeScript
│   ├── form.ts          # Lógica del formulario
│   ├── legal-pages.ts   # Manejo de páginas legales
│   └── main.ts          # Punto de entrada principal
├── scripts/             # Scripts de automatización
│   ├── deploy.js        # Script de despliegue automático
│   └── README.md        # Documentación del script
├── index.html           # Página principal
├── form.html            # Página de formulario
├── aviso-legal.html     # Aviso legal
├── politica-de-privacidad.html
├── terminos-y-condiciones.html
├── vercel.json          # Configuración de Vercel
├── DATABASE_SETUP.md    # Guía de configuración de base de datos
└── package.json
```

## 🗄️ Base de Datos

El proyecto utiliza **Supabase (PostgreSQL)** para almacenar los datos de los formularios.

### Configuración

Consulta **[DATABASE_SETUP.md](./DATABASE_SETUP.md)** para la guía completa de configuración.

**Resumen rápido:**
1. Crea un proyecto en [Supabase](https://supabase.com)
2. Ejecuta el script `supabase/schema.sql` en el SQL Editor
3. Configura las variables de entorno en Vercel:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Estructura

Los datos del formulario se almacenan en la tabla `form_submissions` con:
- Información personal y de contacto
- Situación laboral actual
- Objetivos y metas
- Consentimientos y metadatos

## 🔮 Próximas Funcionalidades

Para ver las ideas y funcionalidades planificadas para el futuro, consulta el archivo **[IDEAS.md](./IDEAS.md)** que contiene:
- Portafolio de proyectos
- Sistema de calendario para charlas
- Integración con Stripe para pagos
- Plataforma de cliente
- Y más...

## 📝 Notas

- El diseño mantiene una estética oscura y minimalista en todas las secciones
- Los componentes son modulares y fáciles de mantener
- El código está tipado con TypeScript para mayor seguridad

## 📄 Licencia

Este proyecto es personal y privado.

---

Desarrollado con ❤️ por AqualityGuy

# Guía de Deploy a Vercel

## Prerrequisitos

1. **Instalar Vercel CLI globalmente:**
   ```bash
   npm install -g vercel
   ```

2. **Iniciar sesión en Vercel:**
   ```bash
   vercel login
   ```

## Deploy desde Local

### Primera vez (Setup inicial)

```bash
# Enlazar el proyecto con Vercel (solo la primera vez)
vercel

# Seguir las instrucciones:
# - Set up and deploy? Y
# - Which scope? (tu cuenta)
# - Link to existing project? N (crear nuevo)
# - Project name? aqualityguy (o el que prefieras)
# - Directory? ./
# - Override settings? N
```

### Deploy a Producción

```bash
# Deploy a producción (dominio principal)
npm run deploy

# O directamente:
vercel --prod
```

### Deploy a Preview

```bash
# Deploy a preview (URL temporal para testing)
npm run deploy:preview

# O directamente:
vercel
```

## Control de Accesos y Visualizaciones

### Opción 1: Vercel Analytics (Recomendado - Gratis)

Vercel Analytics es gratuito y se integra automáticamente.

**Pasos:**

1. **Habilitar Analytics en el Dashboard de Vercel:**
   - Ve a tu proyecto en https://vercel.com
   - Settings → Analytics
   - Activa "Web Analytics"

2. **Añadir el script a tu HTML:**

   Edita `index.html` y añade antes de `</head>`:
   ```html
   <script>
     window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
   </script>
   <script defer src="/_vercel/insights/script.js"></script>
   ```

3. **Ver estadísticas:**
   - Ve a tu proyecto en Vercel Dashboard
   - Pestaña "Analytics"
   - Verás: visitas, páginas vistas, países, dispositivos, navegadores, etc.

### Opción 2: Google Analytics 4 (Alternativa)

Si prefieres Google Analytics:

1. **Crear cuenta en Google Analytics:**
   - https://analytics.google.com
   - Crear propiedad GA4
   - Obtener Measurement ID (G-XXXXXXXXXX)

2. **Añadir a tu HTML:**

   En `index.html`, antes de `</head>`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Ver estadísticas:**
   - Dashboard de Google Analytics
   - Reportes en tiempo real y históricos

### Opción 3: Plausible Analytics (Privacidad-friendly)

Alternativa respetuosa con la privacidad:

1. **Crear cuenta en Plausible:**
   - https://plausible.io
   - Añadir tu dominio
   - Obtener el script

2. **Añadir a tu HTML:**

   En `index.html`, antes de `</head>`:
   ```html
   <script defer data-domain="tudominio.com" src="https://plausible.io/js/script.js"></script>
   ```

## Recomendación

**Usa Vercel Analytics** porque:
- ✅ Es gratuito
- ✅ Se integra automáticamente
- ✅ No requiere configuración adicional
- ✅ Respeta la privacidad (no usa cookies)
- ✅ Dashboard integrado en Vercel

## Comandos Útiles

```bash
# Ver logs de deploy
vercel logs

# Ver información del proyecto
vercel inspect

# Listar todos los deploys
vercel ls

# Ver variables de entorno
vercel env ls

# Añadir variable de entorno
vercel env add VARIABLE_NAME
```

## Variables de Entorno (si las necesitas)

Si necesitas variables de entorno (ej: email para formularios):

```bash
# Añadir variable de entorno
vercel env add CONTACT_EMAIL

# O desde el Dashboard de Vercel:
# Settings → Environment Variables
```

## Notas Importantes

- El build se ejecuta automáticamente en Vercel usando `npm run build`
- Los archivos estáticos se sirven desde `/dist`
- Las rutas SPA funcionan gracias a los rewrites en `vercel.json`
- Cada deploy genera una URL única para preview
- El dominio de producción se configura en Vercel Dashboard

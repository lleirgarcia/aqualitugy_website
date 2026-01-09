# Configuración de Base de Datos - Formularios

Esta guía explica cómo configurar Supabase para almacenar los datos de los formularios.

## 📋 Requisitos Previos

- Cuenta en [Supabase](https://supabase.com) (gratis)
- Proyecto desplegado en Vercel

## 🚀 Pasos de Configuración

### 1. Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta (si no la tienes)
2. Crea un nuevo proyecto
3. Anota el nombre del proyecto y la región

### 2. Configurar la Base de Datos

1. En el dashboard de Supabase, ve a **SQL Editor**
2. Abre el archivo `supabase/schema.sql` de este proyecto
3. Copia y pega todo el contenido en el SQL Editor
4. Ejecuta el script (botón "Run" o `Cmd/Ctrl + Enter`)

Esto creará:
- La tabla `form_submissions` con todos los campos necesarios
- Índices para optimizar búsquedas
- Triggers para actualizar timestamps automáticamente

### 3. Obtener Credenciales de Supabase

1. En el dashboard de Supabase, ve a **Settings** > **API**
2. Encuentra:
   - **Project URL**: Copia esta URL (ej: `https://xxxxx.supabase.co`)
   - **service_role key**: Copia esta key (manténla secreta, solo para servidor)

### 4. Configurar Variables de Entorno en Vercel

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com)
2. Ve a **Settings** > **Environment Variables**
3. Añade las siguientes variables:

```
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
```

4. Asegúrate de que estén configuradas para:
   - ✅ Production
   - ✅ Preview
   - ✅ Development (opcional, para desarrollo local)

### 5. Configurar Variables de Entorno Local (Opcional)

Para desarrollo local, crea un archivo `.env.local` en la raíz del proyecto:

```bash
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
```

**⚠️ Importante**: Añade `.env.local` a `.gitignore` para no subir las credenciales.

### 6. Instalar Dependencias

```bash
npm install
```

Esto instalará:
- `@supabase/supabase-js` - Cliente de Supabase
- `@vercel/node` - Tipos para Vercel Serverless Functions

### 7. Verificar la Configuración

1. Despliega el proyecto en Vercel
2. Prueba enviar un formulario desde la página
3. Ve a Supabase > **Table Editor** > `form_submissions` para ver los datos

## 📊 Estructura de la Base de Datos

### Tabla: `form_submissions`

La tabla almacena todos los datos del formulario con los siguientes campos principales:

- **Información personal**: nombre, edad, país, email, teléfono
- **Situación actual**: trabajando, experiencia, rol, salario
- **Objetivos**: objetivo, nivel, salarios deseados, habilidades, desafíos
- **Metadatos**: servicio, consentimientos, timestamps, IP, user-agent

### Consultas Útiles

```sql
-- Ver todas las submisiones
SELECT * FROM form_submissions ORDER BY created_at DESC;

-- Contar submisiones por servicio
SELECT service, COUNT(*) as total 
FROM form_submissions 
GROUP BY service;

-- Submisiones del último mes
SELECT * FROM form_submissions 
WHERE created_at >= NOW() - INTERVAL '1 month'
ORDER BY created_at DESC;
```

## 🔒 Seguridad

- ✅ La `service_role` key solo se usa en el servidor (API route)
- ✅ Validación de datos en el servidor antes de insertar
- ✅ Honeypot anti-spam implementado
- ✅ Validación de email y campos requeridos
- ✅ Los datos sensibles (IP, user-agent) son opcionales

## 🧪 Testing

Para probar localmente con Vercel CLI:

```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Iniciar servidor de desarrollo con variables de entorno
vercel dev
```

## 📝 Notas

- El plan gratuito de Supabase incluye 500MB de base de datos y es suficiente para empezar
- Puedes exportar los datos desde Supabase en cualquier momento
- Los índices están optimizados para búsquedas por email, servicio y fecha

## 🆘 Troubleshooting

### Error: "Missing Supabase environment variables"
- Verifica que las variables de entorno estén configuradas en Vercel
- Asegúrate de que los nombres sean exactos: `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`

### Error: "Database error" al enviar formulario
- Verifica que el esquema SQL se haya ejecutado correctamente
- Revisa los logs en Vercel para ver el error específico
- Verifica que la `service_role` key sea correcta

### No se guardan los datos
- Verifica los permisos de la tabla en Supabase
- Asegúrate de que la API route esté desplegada correctamente
- Revisa la consola del navegador para errores de red

# Script de Despliegue Automático

Este script automatiza el proceso completo de despliegue:
1. **Commit** de cambios pendientes
2. **Push** a la rama `develop`
3. **Build** del proyecto
4. **Deploy** en producción en Vercel

## Uso Básico

```bash
npm run deploy:full
```

Este comando ejecutará todos los pasos automáticamente con el mensaje de commit por defecto: "Deploy: actualización automática"

## Uso con Mensaje Personalizado

```bash
npm run deploy:full -- --message "Tu mensaje de commit aquí"
```

O directamente:

```bash
node scripts/deploy.js --message "Tu mensaje de commit aquí"
```

## Opciones Avanzadas

El script soporta varias opciones para omitir pasos específicos:

### Omitir Commit

Si ya hiciste commit manualmente:

```bash
node scripts/deploy.js --skip-commit
```

### Omitir Push

Si solo quieres hacer deploy sin push:

```bash
node scripts/deploy.js --skip-push
```

### Omitir Build

Si el build ya está hecho:

```bash
node scripts/deploy.js --skip-build
```

### Combinar Opciones

```bash
node scripts/deploy.js --message "Nuevas características" --skip-build
```

## Flujo Completo

1. **Verificación de rama**: El script verifica que estés en la rama `develop` (muestra advertencia si no)
2. **Commit automático**: Agrega todos los cambios (`git add -A`) y hace commit
3. **Push a develop**: Sube los cambios a `origin/develop`
4. **Build**: Ejecuta `npm run build` para compilar el proyecto
5. **Deploy**: Ejecuta `vercel --prod` para desplegar en producción

## Requisitos

- Git configurado y con acceso a `origin/develop`
- Vercel CLI instalado (`npm i -g vercel` o `vercel` disponible en PATH)
- Estar en la rama `develop` (recomendado)

## Notas

- El script requiere permisos de escritura en Git
- Asegúrate de tener las credenciales de Vercel configuradas
- El script fallará si hay errores en cualquier paso

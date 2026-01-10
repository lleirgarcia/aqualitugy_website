#!/usr/bin/env node

const { execSync } = require('child_process');
const { readFileSync } = require('fs');

function exec(command, options = {}) {
  try {
    return execSync(command, {
      encoding: 'utf-8',
      stdio: options.stdio || 'inherit',
      cwd: options.cwd || process.cwd(),
    });
  } catch (error) {
    console.error(`❌ Error ejecutando: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

function getCurrentBranch() {
  return exec('git rev-parse --abbrev-ref HEAD', { stdio: 'pipe' }).trim();
}

function hasChanges() {
  try {
    const status = exec('git status --porcelain', { stdio: 'pipe' });
    return status.trim().length > 0;
  } catch {
    return false;
  }
}

function hasStagedChanges() {
  try {
    const diff = exec('git diff --cached --name-only', { stdio: 'pipe' });
    return diff.trim().length > 0;
  } catch {
    return false;
  }
}

function deploy(options = {}) {
  const {
    message = 'Deploy: actualización automática',
    skipCommit = false,
    skipBuild = false,
    skipPush = false,
  } = options;

  console.log('🚀 Iniciando proceso de despliegue...\n');

  // Verificar que estamos en la rama develop
  const currentBranch = getCurrentBranch();
  if (currentBranch !== 'develop') {
    console.warn(`⚠️  Advertencia: No estás en la rama 'develop' (estás en '${currentBranch}')`);
    console.warn('   El despliegue continuará, pero asegúrate de estar en la rama correcta.\n');
  }

  // Paso 1: Commit de cambios (si hay cambios y no se omite)
  if (!skipCommit) {
    if (hasChanges()) {
      console.log('📝 Preparando cambios para commit...');
      
      // Agregar todos los cambios
      exec('git add -A');
      
      // Verificar si hay cambios staged
      if (hasStagedChanges()) {
        console.log(`💾 Haciendo commit con mensaje: "${message}"`);
        exec(`git commit -m "${message}"`);
        console.log('✅ Commit realizado exitosamente\n');
      } else {
        console.log('ℹ️  No hay cambios para hacer commit\n');
      }
    } else {
      console.log('ℹ️  No hay cambios pendientes\n');
    }
  } else {
    console.log('⏭️  Omitiendo commit (skipCommit=true)\n');
  }

  // Paso 2: Push a develop (si no se omite)
  if (!skipPush) {
    console.log('📤 Haciendo push a origin/develop...');
    exec('git push origin develop');
    console.log('✅ Push realizado exitosamente\n');
  } else {
    console.log('⏭️  Omitiendo push (skipPush=true)\n');
  }

  // Paso 3: Build (si no se omite)
  if (!skipBuild) {
    console.log('🔨 Construyendo proyecto...');
    exec('npm run build');
    console.log('✅ Build completado exitosamente\n');
  } else {
    console.log('⏭️  Omitiendo build (skipBuild=true)\n');
  }

  // Paso 4: Deploy a Vercel
  console.log('🌐 Desplegando en Vercel (producción)...');
  exec('vercel --prod');
  console.log('✅ Despliegue completado exitosamente\n');

  console.log('🎉 ¡Proceso de despliegue completado!');
}

// Parsear argumentos de línea de comandos
const args = process.argv.slice(2);
const options = {};

let messageIndex = args.indexOf('--message');
if (messageIndex !== -1 && args[messageIndex + 1]) {
  options.message = args[messageIndex + 1];
}

if (args.includes('--skip-commit')) {
  options.skipCommit = true;
}

if (args.includes('--skip-build')) {
  options.skipBuild = true;
}

if (args.includes('--skip-push')) {
  options.skipPush = true;
}

// Ejecutar deploy
try {
  deploy(options);
} catch (error) {
  console.error('❌ Error durante el despliegue:', error);
  process.exit(1);
}

-- Esquema de base de datos para formularios de AqualityGuy
-- Ejecutar este script en Supabase SQL Editor

-- Tabla principal para almacenar los datos del formulario
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service VARCHAR(50) NOT NULL, -- 'espabila' o 'creetelo'
  
  -- Información personal
  nombre VARCHAR(255) NOT NULL,
  edad INTEGER NOT NULL,
  pais VARCHAR(10) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50),
  
  -- Situación actual
  trabajando BOOLEAN NOT NULL,
  experiencia INTEGER NOT NULL,
  rol_actual VARCHAR(255),
  salario_actual INTEGER,
  
  -- Objetivos y detalles específicos (almacenados como JSON para flexibilidad)
  objetivo TEXT NOT NULL,
  nivel VARCHAR(50), -- 'junior' o 'middle' (solo para espabila)
  salario_deseado INTEGER,
  habilidades TEXT,
  salario_actual_senior INTEGER, -- Para creetelo
  salario_deseado_senior INTEGER, -- Para creetelo
  experiencia_senior INTEGER, -- Para creetelo
  desafios TEXT, -- Para creetelo
  
  -- Información adicional
  como_conociste VARCHAR(50),
  mensaje TEXT,
  
  -- Consentimientos
  privacy_accept BOOLEAN NOT NULL DEFAULT false,
  marketing_accept BOOLEAN NOT NULL DEFAULT false,
  
  -- Metadatos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET, -- Para tracking (opcional, considerar privacidad)
  user_agent TEXT -- Para tracking (opcional)
);

-- Índices para búsquedas comunes
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_form_submissions_service ON form_submissions(service);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at DESC);

-- Índice compuesto para búsquedas por servicio y fecha
CREATE INDEX IF NOT EXISTS idx_form_submissions_service_date ON form_submissions(service, created_at DESC);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at
CREATE TRIGGER update_form_submissions_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comentarios para documentación
COMMENT ON TABLE form_submissions IS 'Almacena todas las submisiones de formularios de los servicios';
COMMENT ON COLUMN form_submissions.service IS 'Tipo de servicio: espabila o creetelo';
COMMENT ON COLUMN form_submissions.objetivo IS 'Objetivo principal del usuario';
COMMENT ON COLUMN form_submissions.privacy_accept IS 'Consentimiento de política de privacidad (obligatorio)';
COMMENT ON COLUMN form_submissions.marketing_accept IS 'Consentimiento para comunicaciones comerciales (opcional)';

// API Route para Vercel Serverless Functions
// Maneja el envío de formularios y los guarda en Supabase

import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

// Tipos para los datos del formulario
interface FormSubmission {
  service: string;
  nombre: string;
  edad: number;
  pais: string;
  email: string;
  telefono?: string;
  trabajando: boolean;
  experiencia: number;
  rol_actual?: string;
  salario_actual?: number;
  objetivo: string;
  nivel?: string;
  salario_deseado?: number;
  habilidades?: string;
  salario_actual_senior?: number;
  salario_deseado_senior?: number;
  experiencia_senior?: number;
  desafios?: string;
  como_conociste?: string;
  mensaje?: string;
  privacy_accept: boolean;
  marketing_accept: boolean;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validar variables de entorno
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error',
        message: 'Database connection not configured'
      });
    }

    // Inicializar cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Validar honeypot (anti-spam)
    if (req.body.website && req.body.website !== '') {
      console.log('Spam detected: honeypot field filled');
      return res.status(400).json({ error: 'Invalid submission' });
    }

    // Validar datos requeridos
    const requiredFields = ['service', 'nombre', 'edad', 'pais', 'email', 'trabajando', 'experiencia', 'objetivo', 'privacy_accept'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ 
          error: 'Missing required field',
          field 
        });
      }
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Preparar datos para insertar
    const formData: FormSubmission = {
      service: req.body.service,
      nombre: req.body.nombre.trim(),
      edad: parseInt(req.body.edad),
      pais: req.body.pais,
      email: req.body.email.toLowerCase().trim(),
      telefono: req.body.telefono?.trim() || null,
      trabajando: req.body.trabajando === 'si' || req.body.trabajando === true,
      experiencia: parseInt(req.body.experiencia),
      rol_actual: req.body.rolActual?.trim() || null,
      salario_actual: req.body.salarioActual ? parseInt(req.body.salarioActual) : null,
      objetivo: req.body.objetivo.trim(),
      nivel: req.body.nivel || null,
      salario_deseado: req.body.salarioDeseado ? parseInt(req.body.salarioDeseado) : null,
      habilidades: req.body.habilidades?.trim() || null,
      salario_actual_senior: req.body.salarioActualSenior ? parseInt(req.body.salarioActualSenior) : null,
      salario_deseado_senior: req.body.salarioDeseadoSenior ? parseInt(req.body.salarioDeseadoSenior) : null,
      experiencia_senior: req.body.experienciaSenior ? parseInt(req.body.experienciaSenior) : null,
      desafios: req.body.desafios?.trim() || null,
      como_conociste: req.body.comoConociste || null,
      mensaje: req.body.mensaje?.trim() || null,
      privacy_accept: req.body.privacyAccept === true || req.body.privacyAccept === 'on',
      marketing_accept: req.body.marketingAccept === true || req.body.marketingAccept === 'on',
    };

    // Obtener IP y User-Agent (opcional, para tracking)
    const ipAddress = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          ...formData,
          ip_address: ipAddress ? String(ipAddress).split(',')[0] : null,
          user_agent: userAgent || null,
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ 
        error: 'Database error',
        message: 'Failed to save submission'
      });
    }

    // Éxito
    return res.status(200).json({ 
      success: true,
      message: 'Form submitted successfully',
      id: data.id
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'An unexpected error occurred'
    });
  }
}

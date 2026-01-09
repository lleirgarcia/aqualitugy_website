import './styles.css';

const app = document.getElementById('app')!;

// Obtener el servicio desde la URL
const urlParams = new URLSearchParams(window.location.search);
const service = urlParams.get('service') || 'espabila';

const serviceNames: { [key: string]: string } = {
  'espabila': 'espabila',
  'creetelo': 'creetelo'
};

const serviceName = serviceNames[service] || 'espabila';

function createFormSection(): string {
  return `
    <div class="container">
      <div class="form-page">
        <div class="section">
          <div class="section-title">
            <svg class="section-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>formulario - ${serviceName}</span>
          </div>
          
          <form id="serviceForm" class="service-form">
            <!-- Preguntas Comunes -->
            <div class="form-section">
              <h3 class="form-section-title">Información personal</h3>
              
              <div class="form-group">
                <label for="nombre">Nombre completo *</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
              </div>
              
              <div class="form-group">
                <label for="edad">Edad *</label>
                <input type="number" id="edad" name="edad" min="13" max="99" required placeholder="Tu edad" />
              </div>
              
              <div class="form-group">
                <label for="pais">País de residencia *</label>
                <select id="pais" name="pais" required>
                  <option value="">Selecciona un país</option>
                  <option value="ES">España</option>
                  <option value="UK">Reino Unido</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CL">Chile</option>
                  <option value="PE">Perú</option>
                  <option value="DE">Alemania</option>
                  <option value="FR">Francia</option>
                  <option value="IT">Italia</option>
                  <option value="PT">Portugal</option>
                  <option value="NL">Países Bajos</option>
                  <option value="BE">Bélgica</option>
                  <option value="CH">Suiza</option>
                  <option value="AT">Austria</option>
                  <option value="SE">Suecia</option>
                  <option value="NO">Noruega</option>
                  <option value="DK">Dinamarca</option>
                  <option value="FI">Finlandia</option>
                  <option value="IE">Irlanda</option>
                  <option value="PL">Polonia</option>
                  <option value="CZ">República Checa</option>
                  <option value="BR">Brasil</option>
                  <option value="OT">Otro</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required placeholder="tu@email.com" />
              </div>
              
              <div class="form-group">
                <label for="telefono">Teléfono (opcional)</label>
                <input type="tel" id="telefono" name="telefono" placeholder="+34 600 000 000" />
              </div>
            </div>
            
            <!-- Preguntas Comunes sobre Situación Actual -->
            <div class="form-section">
              <h3 class="form-section-title">Tu situación actual</h3>
              
              <div class="form-group">
                <label for="trabajando">¿Estás trabajando actualmente? *</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" name="trabajando" value="si" required /> Sí
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="trabajando" value="no" /> No
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label for="experiencia">Años de experiencia laboral *</label>
                <input type="number" id="experiencia" name="experiencia" min="0" max="60" required placeholder="0" />
              </div>
              
              <div class="form-group">
                <label for="rolActual">Rol actual / Posición</label>
                <input type="text" id="rolActual" name="rolActual" placeholder="Ej: Junior Developer, QA Engineer, etc." />
              </div>
              
              <div class="form-group">
                <label for="salarioActual">Salario actual (€/año)</label>
                <input type="number" id="salarioActual" name="salarioActual" min="20000" max="300000" step="10000" placeholder="Ej: 35000" />
              </div>
            </div>
            
            <!-- Preguntas Específicas por Servicio -->
            ${service === 'espabila' ? `
              <div class="form-section">
                <h3 class="form-section-title">Sobre tu objetivo</h3>
                
                <div class="form-group">
                  <label for="objetivo">¿Qué quieres conseguir? *</label>
                  <textarea id="objetivo" name="objetivo" rows="4" required placeholder="Cuéntame qué buscas: un mejor trabajo, aumentar tu salario, mejorar tus habilidades..."></textarea>
                </div>
                
                <div class="form-group">
                  <label for="nivel">¿Cómo te consideras? *</label>
                  <div class="radio-group">
                    <label class="radio-label">
                      <input type="radio" name="nivel" value="junior" required /> Junior
                    </label>
                    <label class="radio-label">
                      <input type="radio" name="nivel" value="middle" /> Middle
                    </label>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="salarioDeseado">Salario deseado (€/año)</label>
                  <input type="number" id="salarioDeseado" name="salarioDeseado" min="20000" max="300000" step="10000" placeholder="Ej: 45000" />
                </div>
                
                <div class="form-group">
                  <label for="habilidades">¿Qué habilidades quieres desarrollar?</label>
                  <textarea id="habilidades" name="habilidades" rows="3" placeholder="Menciona las habilidades o áreas que te gustaría mejorar"></textarea>
                </div>
              </div>
            ` : `
              <div class="form-section">
                <h3 class="form-section-title">Sobre tu objetivo</h3>
                
                <div class="form-group">
                  <label for="objetivo">¿Qué quieres conseguir? *</label>
                  <textarea id="objetivo" name="objetivo" rows="4" required placeholder="Cuéntame tu objetivo: pasar de 45k a 70k, cambiar de empresa, mejorar tu posición..."></textarea>
                </div>
                
                <div class="form-group">
                  <label for="salarioActualSenior">Salario actual (€/año) *</label>
                  <input type="number" id="salarioActualSenior" name="salarioActualSenior" min="40000" max="300000" step="10000" required placeholder="Ej: 45000" />
                </div>
                
                <div class="form-group">
                  <label for="salarioDeseadoSenior">Salario objetivo (€/año) *</label>
                  <input type="number" id="salarioDeseadoSenior" name="salarioDeseadoSenior" min="50000" max="300000" step="10000" required placeholder="Ej: 70000" />
                </div>
                
                <div class="form-group">
                  <label for="experienciaSenior">Años de experiencia en tu área actual</label>
                  <input type="number" id="experienciaSenior" name="experienciaSenior" min="0" max="60" placeholder="Años en tu especialización" />
                </div>
                
                <div class="form-group">
                  <label for="desafios">¿Cuáles son tus principales desafíos o bloqueos?</label>
                  <textarea id="desafios" name="desafios" rows="3" placeholder="Qué te está impidiendo alcanzar tu objetivo"></textarea>
                </div>
              </div>
            `}
            
            <!-- Preguntas Adicionales -->
            <div class="form-section">
              <h3 class="form-section-title">Información adicional</h3>
              
              <div class="form-group">
                <label for="comoConociste">¿Cómo conociste mis servicios?</label>
                <select id="comoConociste" name="comoConociste">
                  <option value="">Selecciona una opción</option>
                  <option value="redes">Redes sociales (Instagram, TikTok, YouTube)</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="recomendacion">Recomendación</option>
                  <option value="buscador">Buscador (Google, etc.)</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="mensaje">Mensaje adicional (opcional)</label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Cualquier cosa que quieras contarme..."></textarea>
              </div>
            </div>
            
            <div class="form-privacy">
              <p class="form-privacy-text">
                Los datos proporcionados serán tratados conforme a nuestra <a href="/politica-de-privacidad.html" target="_blank">Política de Privacidad</a> y <a href="/terminos-y-condiciones.html" target="_blank">Términos y Condiciones</a>.
              </p>
              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" id="privacyAccept" name="privacyAccept" required />
                  <span>He leído y acepto la <a href="/politica-de-privacidad.html" target="_blank">Política de Privacidad</a> *</span>
                </label>
              </div>
              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" id="marketingAccept" name="marketingAccept" />
                  <span>Quiero recibir comunicaciones comerciales y promocionales</span>
                </label>
              </div>
              <input type="text" name="website" id="website" style="position: absolute; left: -9999px; opacity: 0;" tabindex="-1" autocomplete="off" />
            </div>
            <div class="form-actions">
              <button type="submit" class="submit-button">Enviar formulario</button>
              <a href="/" class="cancel-link">Volver a inicio</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

app.innerHTML = createFormSection();

// Validación en tiempo real
setTimeout(() => {
  const edadInput = document.getElementById('edad') as HTMLInputElement;
  if (edadInput) {
    edadInput.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (isNaN(value) || value < 13 || value > 99) {
        (e.target as HTMLInputElement).value = '';
      }
    });
  }

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

  // Validación para salario actual senior (40000-300000, step 10000)
  const salarioActualSeniorInput = document.getElementById('salarioActualSenior') as HTMLInputElement;
  if (salarioActualSeniorInput) {
    salarioActualSeniorInput.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (isNaN(value) || value < 40000 || value > 300000 || value % 10000 !== 0) {
        (e.target as HTMLInputElement).value = '';
      }
    });
  }

  // Validación para salario deseado senior (50000-300000, step 10000)
  const salarioDeseadoSeniorInput = document.getElementById('salarioDeseadoSenior') as HTMLInputElement;
  if (salarioDeseadoSeniorInput) {
    salarioDeseadoSeniorInput.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      if (isNaN(value) || value < 50000 || value > 300000 || value % 10000 !== 0) {
        (e.target as HTMLInputElement).value = '';
      }
    });
  }

  // Validación del honeypot (anti-spam)
  const honeypotInput = document.getElementById('website') as HTMLInputElement;
  
  // Manejo del formulario
  const form = document.getElementById('serviceForm') as HTMLFormElement;
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validar honeypot
      if (honeypotInput && honeypotInput.value !== '') {
        console.log('Spam detectado');
        return;
      }
      
      // Validar checkbox obligatorio
      const privacyCheckbox = document.getElementById('privacyAccept') as HTMLInputElement;
      if (!privacyCheckbox || !privacyCheckbox.checked) {
        alert('Debes aceptar la Política de Privacidad para continuar');
        privacyCheckbox?.focus();
        return;
      }
      
      // Aquí iría la lógica de envío del formulario
      alert('Formulario enviado (esto es un ejemplo)');
    });
  }
}, 100);

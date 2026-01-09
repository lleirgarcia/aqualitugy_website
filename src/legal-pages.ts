import './styles.css';
import { LEGAL } from './config/legal';

const app = document.getElementById('app')!;

// Obtener la página desde la URL
const path = window.location.pathname;
let pageContent = '';

function createLegalPage(title: string, content: string): string {
  return `
    <div class="container">
      <div class="legal-page">
        <div class="section">
          <h1 class="legal-title">${title}</h1>
          <div class="legal-content">
            ${content}
          </div>
        </div>
        <div class="legal-footer-links">
          <a href="/">← Volver al inicio</a>
        </div>
      </div>
    </div>
  `;
}

if (path.includes('aviso-legal')) {
  pageContent = createLegalPage('Aviso Legal', `
    <h2>1. Identificación del titular</h2>
    <p>
      En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que el titular de este sitio web es:
    </p>
    <ul>
      <li><strong>Nombre:</strong> ${LEGAL.ownerName}</li>
      <li><strong>Actividad:</strong> ${LEGAL.activityDescription}</li>
      <li><strong>Dirección:</strong> ${LEGAL.contactAddress}</li>
      <li><strong>País:</strong> ${LEGAL.country}</li>
      <li><strong>Email de contacto:</strong> ${LEGAL.contactEmail}</li>
    </ul>

    <h2>2. Objeto</h2>
    <p>
      El presente aviso legal regula el uso del sitio web <strong>${LEGAL.siteName}</strong> (en adelante, el "Sitio Web"), propiedad de ${LEGAL.ownerName}.
    </p>
    <p>
      El acceso y uso del Sitio Web implica la aceptación de las condiciones establecidas en este aviso legal.
    </p>

    <h2>3. Propiedad intelectual e industrial</h2>
    <p>
      Todos los contenidos del Sitio Web, incluyendo textos, gráficos, logotipos, iconos, imágenes, archivos de audio, descargas digitales y compilaciones de datos, son propiedad de ${LEGAL.ownerName} o de sus proveedores de contenido y están protegidos por las leyes de propiedad intelectual e industrial.
    </p>
    <p>
      Queda prohibida la reproducción, distribución, comunicación pública y transformación de los contenidos del Sitio Web sin la autorización expresa del titular.
    </p>

    <h2>4. Responsabilidad</h2>
    <p>
      ${LEGAL.ownerName} no se hace responsable de la información y contenidos almacenados en foros, chats, generadores de blogs, comentarios o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en el Sitio Web.
    </p>
    <p>
      Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSI-CE, ${LEGAL.ownerName} se compromete a retirar o, en su caso, bloquear aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, derechos de terceros o la moral y el orden público.
    </p>

    <h2>5. Enlaces externos</h2>
    <p>
      El Sitio Web puede contener enlaces a sitios web de terceros. ${LEGAL.ownerName} no ejerce ningún control sobre dichos sitios y no se responsabiliza de sus contenidos ni de las condiciones de acceso a los mismos.
    </p>

    <h2>6. Legislación aplicable y jurisdicción</h2>
    <p>
      Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de ${LEGAL.country}.
    </p>

    <p class="legal-updated">Última actualización: ${LEGAL.lastUpdated}</p>
  `);
} else if (path.includes('politica-de-privacidad')) {
  pageContent = createLegalPage('Política de Privacidad', `
    <h2>1. Responsable del tratamiento</h2>
    <p>
      El responsable del tratamiento de los datos personales es:
    </p>
    <ul>
      <li><strong>Nombre:</strong> ${LEGAL.ownerName}</li>
      <li><strong>Dirección:</strong> ${LEGAL.contactAddress}</li>
      <li><strong>Email de contacto:</strong> ${LEGAL.contactEmail}</li>
      <li><strong>País:</strong> ${LEGAL.country}</li>
    </ul>

    <h2>2. Datos que recogemos</h2>
    <p>
      A través de los formularios de contacto y solicitud de servicios, recopilamos los siguientes datos personales:
    </p>
    <ul>
      <li>Nombre completo</li>
      <li>Dirección de correo electrónico</li>
      <li>Teléfono (opcional)</li>
      <li>Edad</li>
      <li>País de residencia</li>
      <li>Información profesional (experiencia, salario, objetivos, etc.)</li>
      <li>Cualquier otra información que el usuario proporcione voluntariamente en los mensajes</li>
    </ul>

    <h2>3. Finalidad del tratamiento</h2>
    <p>
      Los datos personales recogidos se utilizan para las siguientes finalidades:
    </p>
    <ul>
      <li>Gestionar y responder a las consultas y solicitudes de información</li>
      <li>Proporcionar los servicios de consultoría y mentoría solicitados</li>
      <li>Mantener comunicación con el usuario durante el proceso de prestación del servicio</li>
      <li>En caso de consentimiento expreso, enviar comunicaciones comerciales y promocionales</li>
    </ul>

    <h2>4. Base legal</h2>
    <p>
      El tratamiento de sus datos personales se basa en:
    </p>
    <ul>
      <li><strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones comerciales (cuando se haya marcado la casilla correspondiente)</li>
      <li><strong>Ejecución de medidas precontractuales:</strong> Para responder a consultas y gestionar solicitudes de servicios</li>
      <li><strong>Ejecución de contrato:</strong> Para la prestación de los servicios contratados</li>
    </ul>

    <h2>5. Conservación de datos</h2>
    <p>
      Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
    </p>
    <p>
      En el caso de datos recogidos para la prestación de servicios, se conservarán durante la duración de la relación contractual y, posteriormente, durante los plazos legalmente establecidos.
    </p>

    <h2>6. Destinatarios de los datos</h2>
    <p>
      Los datos personales no serán comunicados a terceros, salvo:
    </p>
    <ul>
      <li>Cuando sea necesario para la prestación del servicio (proveedores de hosting, email, etc.) que actúan como encargados de tratamiento</li>
      <li>Cuando exista una obligación legal</li>
      <li>Cuando el usuario haya dado su consentimiento expreso</li>
    </ul>
    <p>
      Los proveedores de servicios que pueden tener acceso a los datos como encargados de tratamiento son:
    </p>
    <ul>
      <li><strong>Hosting:</strong> ${LEGAL.hostingProvider}</li>
      <li><strong>Email:</strong> ${LEGAL.emailProvider}</li>
      <li><strong>Analítica:</strong> ${LEGAL.analyticsProvider}</li>
    </ul>

    <h2>7. Derechos del interesado</h2>
    <p>
      Usted tiene derecho a:
    </p>
    <ul>
      <li><strong>Acceso:</strong> Obtener información sobre sus datos personales que estamos tratando</li>
      <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
      <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
      <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias</li>
      <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento en determinados casos</li>
      <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado y de uso común</li>
      <li><strong>Retirar el consentimiento:</strong> En cualquier momento, sin afectar a la licitud del tratamiento basado en el consentimiento previo a su retirada</li>
    </ul>
    <p>
      Para ejercer estos derechos, puede dirigirse a ${LEGAL.contactEmail} indicando el derecho que desea ejercer y aportando la documentación necesaria para acreditar su identidad.
    </p>
    <p>
      También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
    </p>

    <h2>8. Seguridad</h2>
    <p>
      Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
    </p>

    <h2>9. Contacto</h2>
    <p>
      Para cualquier consulta relacionada con esta política de privacidad o el tratamiento de sus datos personales, puede contactarnos en:
    </p>
    <ul>
      <li><strong>Email:</strong> ${LEGAL.contactEmail}</li>
    </ul>

    <p class="legal-updated">Última actualización: ${LEGAL.lastUpdated}</p>
  `);
} else if (path.includes('terminos-y-condiciones')) {
  pageContent = createLegalPage('Términos y Condiciones', `
    <h2>1. Descripción del servicio</h2>
    <p>
      ${LEGAL.siteName} ofrece servicios de ${LEGAL.activityDescription} a través de este sitio web.
    </p>
    <p>
      Los servicios incluyen consultoría personalizada, mentoría profesional y acceso a comunidades y recursos educativos, según el plan contratado.
    </p>

    <h2>2. Proceso de contratación</h2>
    <p>
      Para contratar nuestros servicios:
    </p>
    <ol>
      <li>El usuario completa el formulario de contacto o solicitud de servicio disponible en el sitio web</li>
      <li>Se realiza una llamada previa de 15 minutos (si aplica) para conocer las necesidades del cliente</li>
      <li>Se envía una propuesta personalizada con los detalles del servicio, precios y condiciones</li>
      <li>Una vez aceptada la propuesta, se procede al pago y activación del servicio</li>
    </ol>

    <h2>3. Precios y pagos</h2>
    <p>
      Los precios de los servicios se indican en la propuesta personalizada y pueden variar según las necesidades específicas de cada cliente.
    </p>
    <p>
      Los pagos se realizarán según las condiciones acordadas en la propuesta, generalmente mediante suscripción mensual o pago único, según el servicio contratado.
    </p>
    <p>
      Todos los precios se expresan en euros (€) e incluyen los impuestos aplicables según la legislación vigente.
    </p>

    <h2>4. Cancelaciones y reembolsos</h2>
    <p>
      El usuario puede cancelar su suscripción en cualquier momento. La cancelación será efectiva al finalizar el período de facturación en curso.
    </p>
    <p>
      En caso de cancelación anticipada, no se realizará reembolso por el período ya facturado, salvo que se acuerde lo contrario en la propuesta específica.
    </p>
    <p>
      Para servicios de pago único, los reembolsos se evaluarán caso por caso según las circunstancias específicas y el tiempo transcurrido desde el inicio del servicio.
    </p>

    <h2>5. Limitación de responsabilidad</h2>
    <p>
      ${LEGAL.ownerName} se compromete a proporcionar los servicios con la máxima diligencia y profesionalidad. Sin embargo:
    </p>
    <ul>
      <li>No garantizamos resultados específicos, ya que estos dependen en gran medida del esfuerzo y compromiso del cliente</li>
      <li>No nos hacemos responsables de decisiones tomadas por el cliente basadas en nuestros consejos</li>
      <li>La información proporcionada tiene carácter orientativo y no sustituye el asesoramiento legal, fiscal o financiero profesional cuando sea necesario</li>
    </ul>

    <h2>6. Propiedad intelectual</h2>
    <p>
      Todos los materiales, recursos, metodologías y contenidos proporcionados durante la prestación del servicio son propiedad de ${LEGAL.ownerName} y están protegidos por derechos de propiedad intelectual.
    </p>
    <p>
      El cliente tiene derecho a utilizar estos materiales únicamente para su uso personal y profesional, quedando prohibida su reproducción, distribución o comercialización sin autorización expresa.
    </p>

    <h2>7. Soporte y comunicación</h2>
    <p>
      El soporte se proporciona según las condiciones acordadas en cada plan de servicio:
    </p>
    <ul>
      <li>Consultoría: Horas mensuales según el plan contratado</li>
      <li>Comunidad: Acceso a canales de comunicación y recursos compartidos</li>
      <li>El tiempo de respuesta puede variar según el plan y la carga de trabajo</li>
    </ul>

    <h2>8. Modificaciones de los términos</h2>
    <p>
      ${LEGAL.ownerName} se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán comunicadas a los usuarios con la debida antelación.
    </p>
    <p>
      El uso continuado del servicio tras la notificación de cambios implica la aceptación de los nuevos términos.
    </p>

    <h2>9. Ley aplicable y jurisdicción</h2>
    <p>
      Estos términos y condiciones se rigen por la legislación española. Para cualquier controversia derivada de estos términos, las partes se someten a los Juzgados y Tribunales de ${LEGAL.country}.
    </p>

    <h2>10. Contacto</h2>
    <p>
      Para cualquier consulta sobre estos términos y condiciones, puede contactarnos en:
    </p>
    <ul>
      <li><strong>Email:</strong> ${LEGAL.contactEmail}</li>
    </ul>

    <p class="legal-updated">Última actualización: ${LEGAL.lastUpdated}</p>
  `);
}

app.innerHTML = pageContent;

// Generar posiciones aleatorias para las estrellas del fondo
function generateRandomStarPositions() {
  const generateGradients = (count: number) => {
    const gradients = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 300;
      const y = Math.random() * 300;
      const size = Math.random() * 2 + 0.5;
      const opacity = Math.random() * 0.3 + 0.5;
      gradients.push(`radial-gradient(${size}px ${size}px at ${x}px ${y}px, rgba(255, 255, 255, ${opacity}), transparent)`);
    }
    return gradients.join(', ');
  };

  const layer1 = document.querySelector('.stars-layer-1') as HTMLElement;
  const layer2 = document.querySelector('.stars-layer-2') as HTMLElement;
  const layer3 = document.querySelector('.stars-layer-3') as HTMLElement;

  if (layer1) layer1.style.backgroundImage = generateGradients(4);
  if (layer2) layer2.style.backgroundImage = generateGradients(4);
  if (layer3) layer3.style.backgroundImage = generateGradients(4);
}

setTimeout(() => {
  generateRandomStarPositions();
}, 0);

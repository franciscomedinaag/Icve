import { HeroSection } from "./HeroSection";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <main className="container mx-auto px-4 py-12">

        <section className="prose max-w-2xl mx-auto text-gray-700 text-justify">
         <h1>Aviso de Privacidad</h1>
         <p>
           En <strong>JR Volt</strong>, con domicilio en Guadalajara, Jalisco, México, estamos comprometidos con la protección de los datos personales de nuestros clientes, prospectos y usuarios de nuestro sitio web.
         </p>

         <h2 className="mt-[30px]">1. Datos personales que recabamos</h2>
         <p>
           Podemos recopilar la siguiente información cuando usted utiliza nuestros formularios de contacto o se comunica con nosotros:
         </p>
         <ul>
           <li>Nombre completo</li>
           <li>Número telefónico</li>
           <li>Correo electrónico</li>
           <li>Ciudad o ubicación del proyecto</li>
           <li>Información relacionada con los servicios solicitados</li>
           <li>Cualquier otra información que usted decida proporcionarnos</li>
         </ul>

         <h2 className="mt-[30px]">2. Finalidades del tratamiento de los datos</h2>
         <p>
           Los datos personales recabados serán utilizados para las siguientes finalidades:
         </p>
         <ul>
           <li>Atender solicitudes de información y cotizaciones.</li>
           <li>Contactar a clientes potenciales.</li>
           <li>Dar seguimiento a proyectos y servicios contratados.</li>
           <li>Brindar soporte y atención al cliente.</li>
           <li>Enviar información relacionada con nuestros servicios.</li>
           <li>Cumplir con obligaciones legales aplicables.</li>
         </ul>

         <h2 className="mt-[30px]">3. Transferencia de datos</h2>
         <p>
           JR Volt no vende, renta ni comparte sus datos personales con terceros, excepto cuando sea necesario para cumplir obligaciones legales o para la prestación de los servicios solicitados por el titular.
         </p>

         <h2 className="mt-[30px]">4. Protección de la información</h2>
         <p>
           Implementamos medidas de seguridad administrativas, técnicas y físicas razonables para proteger la información personal contra pérdida, uso indebido, acceso no autorizado, alteración o divulgación.
         </p>

         <h2 className="mt-[30px]">5. Derechos ARCO</h2>
         <p>
           Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO), así como revocar el consentimiento otorgado para su tratamiento.
         </p>
         <p>
           Para ejercer estos derechos puede enviar una solicitud al correo: <a href="mailto:contacto@jrvolt.mx">contacto@jrvolt.mx</a>
         </p>

         <h2 className="mt-[30px]">6. Cookies y tecnologías similares</h2>
         <p>
           Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación, obtener estadísticas de uso y optimizar nuestros servicios.
         </p>

         <h2 className="mt-[30px]">7. Cambios al aviso de privacidad</h2>
         <p>
           JR Volt se reserva el derecho de modificar o actualizar el presente Aviso de Privacidad en cualquier momento. Las modificaciones serán publicadas en este mismo sitio web.
         </p>

         <h2 className="mt-[30px]">8. Contacto</h2>
         <p>
           Si tiene dudas sobre este Aviso de Privacidad o sobre el tratamiento de sus datos personales, puede contactarnos a través de:
         </p>
         <ul>
           <li>Correo electrónico: contacto@jrvolt.mx</li>
           <li>Ubicación: Guadalajara, Jalisco, México</li>
         </ul>

         <div className="mt-6 text-center">
           <Link to="/" className="inline-block bg-[#8bbb2b] text-white px-4 py-2 rounded hover:opacity-90">Volver al inicio</Link>
         </div>

          <p className="mt-6 text-sm text-gray-500">Última actualización: {new Date().getFullYear()}</p>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}

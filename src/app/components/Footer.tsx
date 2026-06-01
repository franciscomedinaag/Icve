import { Mail, MapPin, Phone } from "lucide-react";
import logoImg from "../../imports/not_padding_Logo_-_ICVE-removebg-preview.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--icve-dark-gray)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img src={logoImg} alt="ICVE Logo" className="h-30 mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Instalación profesional de cargadores para vehículos eléctricos en Guadalajara y todo México.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#servicios" className="hover:text-[#5DBB63] transition-colors">Instalación residencial</a></li>
              <li><a href="#servicios" className="hover:text-[#5DBB63] transition-colors">Instalación comercial</a></li>
              <li><a href="#servicios" className="hover:text-[#5DBB63] transition-colors">Diagnóstico eléctrico</a></li>
              <li><a href="#servicios" className="hover:text-[#5DBB63] transition-colors">Mantenimiento</a></li>
              <li><a href="#servicios" className="hover:text-[#5DBB63] transition-colors">Asesoría</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#5DBB63]" />
                <a href="tel:+523331314101" className="hover:text-[#5DBB63] transition-colors">
                  +52 (33) 3131-4101
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#5DBB63] flex-shrink-0 mt-0.5" />
                <span> Plaza Pabellón, Av. Acueducto 2380, Colinas de San Javier, 44665 Guadalajara, Jal.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ICVE - Instalación de Cargadores para Vehículos Eléctricos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

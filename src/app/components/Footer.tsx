import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoImg from "../../imports/jr-volt-minimal-removebg-preview.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--icve-dark-gray)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img src={logoImg} alt="ICVE Logo" className="h-30 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Instalación profesional de cargadores para vehículos eléctricos en Guadalajara y todo México.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#servicios" className="hover:text-[#8bbb2b] transition-colors">Instalación residencial</a></li>
              <li><a href="#servicios" className="hover:text-[#8bbb2b] transition-colors">Instalación comercial</a></li>
              <li><a href="#servicios" className="hover:text-[#8bbb2b] transition-colors">Diagnóstico eléctrico</a></li>
              <li><a href="#servicios" className="hover:text-[#8bbb2b] transition-colors">Mantenimiento</a></li>
              <li><a href="#servicios" className="hover:text-[#8bbb2b] transition-colors">Asesoría</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#8bbb2b]" />
                <a href="tel:+523329544065" className="hover:text-[#8bbb2b] transition-colors">
                  +52 (33) 2954-4065
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#8bbb2b]" />
                <a href="mailto:ventas@jrvolt.com" className="hover:text-[#8bbb2b] transition-colors">
                  ventas@jrvolt.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#8bbb2b]" />
                <a href="mailto:atencionalcliente@jrvolt.com" className="hover:text-[#8bbb2b] transition-colors">
                  atencionalcliente@jrvolt.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-[#8bbb2b]" />
                <a href="https://www.facebook.com/profile.php?id=61591546138542" target="_blank" rel="noopener noreferrer" className="hover:text-[#8bbb2b] transition-colors">
                  JR Volt | Guadalajara
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#8bbb2b]" />
                <a href="https://www.instagram.com/jrvoltgdl/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8bbb2b] transition-colors">
                  jrvoltgdl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#8bbb2b]" aria-hidden="true">
                  <path fill="currentColor" d="M16.6 3.5a5.5 5.5 0 0 0 3.9 1.6v2.8a8.2 8.2 0 0 1-3.9-1.1v7.1a5.2 5.2 0 1 1-5.2-5.2c.2 0 .4 0 .6.1v2.8a2.4 2.4 0 1 0 1.7 2.3V3.5h1.9Z" />
                </svg>
                <a href="https://www.tiktok.com/@jrvolt_gdl?_r=1&_t=ZS-980L2qwbeA3" target="_blank" rel="noopener noreferrer" className="hover:text-[#8bbb2b] transition-colors">
                  @jrvolt_gdl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#8bbb2b] flex-shrink-0 mt-0.5" />
                <span> Plaza Pabellón, Av. Acueducto 2380, Colinas de San Javier, 44665 Guadalajara, Jal.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} JR Volt. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <a href="/aviso-de-privacidad" className="hover:text-[#8bbb2b] transition-colors">Aviso de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";

const cities = [
  { name: "Guadalajara", position: { top: "45%", left: "25%" } },
  { name: "Zapopan", position: { top: "43%", left: "24%" } },
  { name: "Tlaquepaque", position: { top: "47%", left: "26%" } },
  { name: "Tlajomulco", position: { top: "49%", left: "25%" } },
  { name: "Puerto Vallarta", position: { top: "42%", left: "18%" } },
  { name: "Monterrey", position: { top: "30%", left: "48%" } },
  { name: "CDMX", position: { top: "42%", left: "45%" } },
  { name: "Querétaro", position: { top: "38%", left: "44%" } }
];

export function CoverageSection() {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--icve-light-gray)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--icve-dark-gray)' }}>
            Cobertura
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos proyectos en Guadalajara y otras ciudades de México
          </p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <a href="tel:+523331314101" className="text-lg text-gray-600 hover:text-[#5DBB63] transition-colors">
              <Phone className="inline h-4 w-4 mr-2" /> +52 (33) 3131-4101
            </a>
            <a href="mailto:ventas@jrvolt.com" className="text-lg text-gray-600 hover:text-[#5DBB63] transition-colors">
              <Mail className="inline h-4 w-4 mr-2" /> ventas@jrvolt.com
            </a>
            <a href="mailto:atencionalcliente@jrvolt.com" className="text-lg text-gray-600 hover:text-[#5DBB63] transition-colors">
              <Mail className="inline h-4 w-4 mr-2" /> atencionalcliente@jrvolt.com
            </a>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            {/* Map Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1774812809517-f48aa1ac9551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXhpY28lMjBtYXAlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzgwMzM4OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mapa de cobertura México"
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            {/* Coverage Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-center p-6 rounded-2xl" style={{ backgroundColor: 'var(--icve-forest-green)' }}
            >
              <p className="text-white text-lg">
                <span className="font-semibold">Contáctanos</span> – atendemos proyectos en la ZMG y otras ubicaciones
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ClipboardCheck, Search, FileText, Wrench, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Solicita tu evaluación",
    description: "Contáctanos por teléfono, WhatsApp o nuestro formulario"
  },
  {
    number: "02",
    icon: Search,
    title: "Analizamos tu instalación eléctrica",
    description: "Visitamos tu propiedad para evaluar la infraestructura"
  },
  {
    number: "03",
    icon: FileText,
    title: "Recibes tu cotización",
    description: "Te entregamos una cotización detallada y personalizada"
  },
  {
    number: "04",
    icon: Wrench,
    title: "Instalamos tu cargador",
    description: "Realizamos la instalación profesional y certificada"
  },
  {
    number: "05",
    icon: Zap,
    title: "Comienzas a cargar tu vehículo",
    description: "Disfruta de tu nuevo cargador con total seguridad"
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--icve-dark-gray)' }}>
            Nuestro Proceso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y transparente de principio a fin
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 rounded-full" style={{ backgroundColor: 'var(--icve-light-gray)' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: 'var(--icve-electric-green)' }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg" style={{ backgroundColor: 'var(--icve-forest-green)' }}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>

                {/* Number Badge */}
                <div className="text-4xl font-bold mb-4" style={{ color: 'var(--icve-electric-green)' }}>
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-center mb-2" style={{ color: 'var(--icve-dark-gray)' }}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'var(--icve-forest-green)' }}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-1 mt-4 rounded-full" style={{ backgroundColor: 'var(--icve-light-gray)', minHeight: '60px' }} />
                )}
              </div>

              <div className="flex-1 pb-8">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--icve-electric-green)' }}>
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--icve-dark-gray)' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

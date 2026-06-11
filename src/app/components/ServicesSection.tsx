import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Home, Building2, Gauge, ShoppingCart, Wrench, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Instalación residencial",
    description: "Instalación de cargadores para tu hogar con la máxima seguridad y eficiencia."
  },
  {
    icon: Building2,
    title: "Instalación comercial",
    description: "Soluciones de carga para empresas, edificios y estacionamientos comerciales."
  },
  {
    icon: Gauge,
    title: "Diagnóstico eléctrico",
    description: "Evaluación completa de tu instalación eléctrica antes de la instalación."
  },
  {
    icon: ShoppingCart,
    title: "Venta e instalación de cargadores",
    description: "Equipos de las mejores marcas con instalación profesional incluida."
  },
  {
    icon: Wrench,
    title: "Mantenimiento preventivo",
    description: "Servicio de mantenimiento para garantizar el óptimo funcionamiento."
  },
  {
    icon: Lightbulb,
    title: "Asesoría para proyectos de electromovilidad",
    description: "Consultoría especializada para proyectos de infraestructura de carga."
  }
];

export function ServicesSection() {
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
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones completas de carga para vehículos eléctricos adaptadas a tus necesidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-[#8bbb2b] rounded-2xl group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'var(--icve-light-gray)' }}>
                    <service.icon className="h-7 w-7" style={{ color: 'var(--icve-forest-green)' }} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

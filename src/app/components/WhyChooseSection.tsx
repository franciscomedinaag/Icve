import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Award, Shield, Clock, BadgeCheck, MapPin, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Técnicos especializados",
    description: "Personal certificado con amplia experiencia en instalaciones eléctricas y carga de VE."
  },
  {
    icon: Shield,
    title: "Instalaciones seguras y normativas",
    description: "Cumplimos con todas las normas de seguridad eléctrica mexicanas e internacionales."
  },
  {
    icon: Clock,
    title: "Atención rápida",
    description: "Respuesta en menos de 24 horas y programación flexible para tu conveniencia."
  },
  {
    icon: BadgeCheck,
    title: "Equipos de alta calidad",
    description: "Trabajamos con las mejores marcas de cargadores del mercado."
  },
  {
    icon: MapPin,
    title: "Cobertura en Guadalajara y México",
    description: "Servicio en toda el área metropolitana de Guadalajara y principales ciudades."
  },
  {
    icon: CheckCircle,
    title: "Garantía en instalación",
    description: "Todas nuestras instalaciones incluyen garantía de mano de obra y materiales."
  }
];

export function WhyChooseSection() {
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
            ¿Por qué elegir JR Volt?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos expertos en instalación de cargadores para vehículos eléctricos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 rounded-2xl border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'var(--icve-forest-green)' }}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--icve-dark-gray)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

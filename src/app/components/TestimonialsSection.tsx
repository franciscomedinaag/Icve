import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Hernández",
    role: "Propietario de Tesla Model 3",
    location: "Guadalajara, Jalisco",
    rating: 5,
    text: "Excelente servicio. El equipo de ICVE instaló mi cargador en casa de manera profesional y rápida. Ahora cargo mi Tesla todas las noches sin problemas. Totalmente recomendados.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "María Elena Rodríguez",
    role: "Gerente de Operaciones",
    location: "Zapopan, Jalisco",
    rating: 5,
    text: "Necesitábamos instalar cargadores para nuestra flota de vehículos eléctricos en la empresa. ICVE nos asesoró desde el principio y la instalación fue impecable. Muy profesionales.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Roberto Sánchez",
    role: "Propietario de BYD Dolphin",
    location: "Tlaquepaque, Jalisco",
    rating: 5,
    text: "Desde la cotización hasta la instalación final, todo fue transparente y profesional. Me explicaron cada detalle del proceso y el cargador funciona perfecto. Muy satisfecho con el servicio.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  }
];

export function TestimonialsSection() {
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
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-[#8bbb2b]">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#8bbb2b] text-[#8bbb2b]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold" style={{ color: 'var(--icve-dark-gray)' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs" style={{ color: 'var(--icve-forest-green)' }}>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

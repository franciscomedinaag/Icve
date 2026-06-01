import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    ciudad: "",
    tipoProyecto: "",
    mensaje: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu solicitud! Te contactaremos pronto.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--icve-dark-gray)' }}>
            Solicita una Cotización
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y te responderemos en menos de 24 horas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      className="mt-2 rounded-xl"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        className="mt-2 rounded-xl"
                        placeholder="(33) 1234-5678"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-2 rounded-xl"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ciudad">Ciudad *</Label>
                      <Input
                        id="ciudad"
                        type="text"
                        required
                        value={formData.ciudad}
                        onChange={(e) => handleChange("ciudad", e.target.value)}
                        className="mt-2 rounded-xl"
                        placeholder="Guadalajara, Jalisco"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tipoProyecto">Tipo de proyecto *</Label>
                      <Select onValueChange={(value) => handleChange("tipoProyecto", value)}>
                        <SelectTrigger className="mt-2 rounded-xl">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residencial">Instalación residencial</SelectItem>
                          <SelectItem value="comercial">Instalación comercial</SelectItem>
                          <SelectItem value="diagnostico">Diagnóstico eléctrico</SelectItem>
                          <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                          <SelectItem value="asesoria">Asesoría</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      className="mt-2 rounded-xl min-h-[120px]"
                      placeholder="Cuéntanos más sobre tu proyecto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl text-lg py-6"
                    style={{ backgroundColor: 'var(--icve-electric-green)' }}
                  >
                    Enviar Solicitud
                  </Button>

                  <p className="text-sm text-center text-gray-600">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Te responderemos en menos de 24 horas
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl p-8 h-full flex flex-col justify-center" style={{ backgroundColor: 'var(--icve-forest-green)' }}>
              <h3 className="text-2xl font-bold text-white mb-8">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#5DBB63]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 mb-1">Teléfono</div>
                    <a href="tel:+523312345678" className="text-white text-lg hover:text-[#5DBB63] transition-colors">
                      +52 (33) 1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-[#5DBB63]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 mb-1">WhatsApp</div>
                    <a 
                      href="https://wa.me/523312345678" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-lg hover:text-[#5DBB63] transition-colors"
                    >
                      +52 (33) 1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#5DBB63]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 mb-1">Correo electrónico</div>
                    <a href="mailto:contacto@icve.mx" className="text-white text-lg hover:text-[#5DBB63] transition-colors break-all">
                      contacto@icve.mx
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#5DBB63]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 mb-1">Dirección</div>
                    <p className="text-white text-lg">
                      Guadalajara, Jalisco<br />
                      México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#5DBB63]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300 mb-1">Horario</div>
                    <p className="text-white text-lg">
                      Lunes a Viernes: 8:00 - 18:00<br />
                      Sábados: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

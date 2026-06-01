import { motion } from "motion/react";

const brands = [
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "BYD", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/BYD_Company%2C_Ltd._-_Logo.svg" },
  { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" },
  { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
  { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },
];

export function EVBrandsSection() {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--icve-dark-gray)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Compatible con las principales marcas
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nuestros cargadores son compatibles con todos los estándares de carga actuales, 
            incluyendo Type 1 (J1772), Type 2 (Mennekes), CCS, CHAdeMO y Tesla. 
            Tu vehículo eléctrico estará listo para cargar sin importar la marca.
          </p>
        </motion.div>

        {/* Brand Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center max-w-5xl mx-auto"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-xl hover:shadow-xl transition-all duration-300 aspect-square"
            >
              {brand.logo ? (
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-full h-full object-contain p-2"
                  style={{ filter: 'grayscale(100%)' }}
                />
              ) : (
                <div className="text-center font-bold text-gray-800" style={{ fontSize: 'clamp(0.6rem, 2vw, 0.9rem)' }}>
                  {brand.text}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ backgroundColor: 'var(--icve-forest-green)' }}>
            <Zap className="h-5 w-5 text-[#5DBB63]" />
            <span className="text-white">Compatible con todos los estándares de carga</span>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ¿No ves tu marca? No te preocupes, trabajamos con todas las marcas de vehículos eléctricos e híbridos enchufables del mercado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

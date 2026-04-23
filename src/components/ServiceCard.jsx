import { motion } from 'framer-motion'

const ServiceCard = ({ service, onClick }) => {
  const IconComponent = service.icon
  
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => service.detailedInfo && onClick(service)}
      className="group relative overflow-hidden bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-6 hover:border-gold/70 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] shadow-lg shadow-gold/10 cursor-pointer touch-target"
      data-aos="fade-up"
    >
      {/* Premium hover light sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-[1px] rounded-2xl border border-gold/40"></div>
        <div className="absolute -left-1/3 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-gold/25 to-transparent rotate-12 service-card-light"></div>
      </div>

      <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
        {IconComponent && <IconComponent className="w-12 h-12" />}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export default ServiceCard
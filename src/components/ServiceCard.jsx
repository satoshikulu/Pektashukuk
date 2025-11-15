import { motion } from 'framer-motion'

const ServiceCard = ({ service, onClick }) => {
  const IconComponent = service.icon
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => service.detailedInfo && onClick(service)}
      className="group bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-6 hover:scale-105 hover:border-gold hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] shadow-lg shadow-gold/10 cursor-pointer touch-target"
      data-aos="fade-up"
    >
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
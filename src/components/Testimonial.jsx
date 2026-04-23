import { Star } from 'lucide-react'

const Testimonial = ({ testimonial }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-gold/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
      {/* Video/Quote Style Header */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs md:text-sm font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Kısa Müvekkil Görüşü
        </span>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-gold text-gold" />
        ))}
      </div>
      
      {/* Comment */}
      <p className="text-gray-300 text-lg md:text-xl mb-8 italic leading-relaxed text-center">
        "{testimonial.comment}"
      </p>
      
      {/* Name and Service */}
      <div className="text-center">
        <p className="text-gold font-semibold text-xl">
          {testimonial.name}
        </p>
        <p className="text-gray-500">
          {testimonial.service}
        </p>
      </div>
    </div>
  )
}

export default Testimonial
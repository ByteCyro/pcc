import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "JEE Advanced AIR 152",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "PCC transformed my approach to problem-solving. The faculty's dedication and innovative teaching methods helped me crack JEE Advanced with flying colors. The personalized attention I received was exceptional.",
      rating: 5,
      course: "JEE Preparation"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "NEET AIR 89",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The comprehensive study material and regular mock tests at PCC gave me the confidence to excel in NEET. The doubt-clearing sessions were incredibly helpful in strengthening my concepts.",
      rating: 5,
      course: "NEET Preparation"
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Board Topper - 98.2%",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "PCC's board exam program is outstanding. The systematic approach and regular practice tests helped me achieve 98.2% in my boards. I'm grateful for the excellent guidance provided by all teachers.",
      rating: 5,
      course: "Board Excellence"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Foundation Student",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The foundation course at PCC built my concepts from ground up. The interactive teaching style made learning fun and engaging. Now I feel confident about tackling competitive exams.",
      rating: 5,
      course: "Foundation Course"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "JEE Main 99.8 Percentile",
      image: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The crash course program was a game-changer for me. In just 3 months, I could revise all important topics and improve my score significantly. Highly recommend PCC to all aspirants.",
      rating: 5,
      course: "Crash Course"
    },
    {
      id: 6,
      name: "Ananya Gupta",
      role: "Online Student",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The online live classes are as effective as offline ones. The recorded sessions helped me revise concepts multiple times. The 24/7 doubt support is amazing and very responsive.",
      rating: 5,
      course: "Online Classes"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students who achieved their dreams with PCC's guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/50"
                      />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-blue-400 text-sm font-medium">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="px-6 pb-6">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-400/20" />
                    <p className="text-gray-300 leading-relaxed italic pl-6 relative z-10">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1 rounded-full text-xs text-blue-300 border border-blue-400/30">
                        {testimonial.course}
                      </span>
                      <div className="text-xs text-gray-400">Verified Student</div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-6">Join thousands of successful students who achieved their dreams with PCC</p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-2xl text-white font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
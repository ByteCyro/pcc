import { Target, Award, Users, Lightbulb } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering students to achieve academic excellence through innovative teaching methodologies"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in education with proven track record of success"
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Personalized attention and customized learning paths for every individual student"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Integrating modern technology and creative approaches in traditional education"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About PrakashConceptClasses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over a decade, PCC has been at the forefront of educational excellence, 
            shaping bright minds and creating success stories that inspire generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Pioneering Education Since 2010
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                PrakashConceptClasses was founded with a vision to revolutionize education 
                by making quality learning accessible to every student. We believe that with 
                the right guidance and innovative teaching methods, every student can achieve 
                their dreams.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our comprehensive approach combines traditional teaching wisdom with modern 
                technology, creating an environment where students don't just learn—they thrive.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-blue-400 mb-1">12+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-purple-400 mb-1">25+</div>
                <div className="text-gray-400 text-sm">Courses Offered</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-10 h-10 text-blue-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Our Vision</h4>
                  <p className="text-gray-300">Creating tomorrow's leaders through innovative education</p>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
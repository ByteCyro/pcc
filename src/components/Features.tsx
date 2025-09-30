import { Brain, Users, Clock, Trophy, BookOpen, Video, Phone, Award, Target, Lightbulb, LineChart as ChartLine, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized study plans and adaptive learning paths powered by artificial intelligence",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry experts and experienced educators with proven teaching methodologies",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Choose from multiple batch timings and study at your own pace with recorded sessions",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "98% success rate with thousands of students achieving their dream careers",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Video,
      title: "Live & Recorded Classes",
      description: "Interactive live sessions with recording facility for revision and missed classes",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Well-researched notes, practice questions, and exam-focused study resources",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Phone,
      title: "24/7 Doubt Support",
      description: "Round-the-clock doubt clearing sessions and academic support for all students",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: ChartLine,
      title: "Performance Analytics",
      description: "Detailed performance tracking and analytics to monitor your progress continuously",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Mock Tests",
      description: "Regular mock tests and practice sessions designed to simulate real exam conditions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovative Teaching",
      description: "Creative teaching methods using technology and interactive learning techniques",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Scholarship Programs",
      description: "Merit-based scholarships and financial assistance for deserving students",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Strict quality standards and continuous improvement in teaching methodologies",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Why Choose PCC?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our cutting-edge features and personalized approach 
            that sets us apart from traditional coaching institutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                15K+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Happy Students</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-400 text-sm md:text-base">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Expert Teachers</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                12+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { ArrowRight, Play, Star, Users, Trophy, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <div
  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%234f46e5\\' fill-opacity=\\'0.05\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'2\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
></div>

        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-60 right-40 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-blue-300">Leading Coaching Institute</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Future Today
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join PrakashConceptClasses and unlock your potential with cutting-edge education, 
              expert mentorship, and innovative learning methodologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <div className="text-gray-400">Students Trained</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-400/30 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Expert Faculty</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
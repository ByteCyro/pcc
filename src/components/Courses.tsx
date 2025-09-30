import { BookOpen, Users, Clock, Star, ArrowRight } from 'lucide-react'

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "JEE Main & Advanced",
      description: "Comprehensive preparation for India's most competitive engineering entrance exams with expert guidance and proven strategies.",
      duration: "2 Years",
      students: "2,500+",
      rating: "4.9",
      price: "₹85,000",
      features: ["Live Classes", "Mock Tests", "Personal Mentoring", "Study Material"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "NEET Preparation",
      description: "Complete medical entrance exam preparation with focused approach on Biology, Chemistry, and Physics concepts.",
      duration: "2 Years",
      students: "1,800+",
      rating: "4.8",
      price: "₹78,000",
      features: ["Expert Faculty", "Regular Tests", "Doubt Clearing", "Lab Sessions"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Board Exam Excellence",
      description: "Score maximization program for Class 10th & 12th boards with concept clarity and exam techniques.",
      duration: "1 Year",
      students: "3,200+",
      rating: "4.7",
      price: "₹45,000",
      features: ["Board Focus", "Previous Papers", "Concept Videos", "Regular Practice"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Foundation Course",
      description: "Build strong fundamentals for students in Classes 8th, 9th & 10th with interactive learning methods.",
      duration: "1 Year",
      students: "2,100+",
      rating: "4.6",
      price: "₹35,000",
      features: ["Interactive Classes", "Fun Learning", "Skill Development", "Regular Assessment"],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Crash Course",
      description: "Intensive revision and exam preparation for last-minute preparation with high-yield topics coverage.",
      duration: "3 Months",
      students: "1,500+",
      rating: "4.5",
      price: "₹25,000",
      features: ["Quick Revision", "High-Yield Topics", "Mock Tests", "Strategy Sessions"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Online Live Classes",
      description: "Flexible learning with live interactive sessions, recorded lectures, and 24/7 doubt support.",
      duration: "Flexible",
      students: "4,000+",
      rating: "4.4",
      price: "₹20,000",
      features: ["Live Sessions", "Recorded Lectures", "24/7 Support", "Mobile App"],
      color: "from-violet-600 to-purple-600"
    }
  ]

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Our Courses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of courses designed to help you achieve 
            academic excellence and career success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                {/* Header */}
                <div className={`bg-gradient-to-r ${course.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-5 h-5 text-white" />
                        <span className="text-white/80 text-sm font-medium">Course</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />
                        <span className="text-white text-sm">{course.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{course.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{course.students}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Features Included:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">{course.price}</div>
                      <div className="text-gray-400 text-sm">Per Year</div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group">
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Not sure which course is right for you?</h3>
            <p className="text-gray-300 mb-6">Book a free consultation with our academic counselors</p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
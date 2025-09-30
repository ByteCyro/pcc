import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const courses = [
    { name: 'JEE Preparation', href: '#courses' },
    { name: 'NEET Preparation', href: '#courses' },
    { name: 'Board Excellence', href: '#courses' },
    { name: 'Foundation Course', href: '#courses' },
    { name: 'Online Classes', href: '#courses' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    PCC
                  </span>
                  <p className="text-xs text-gray-400 -mt-1">PrakashConceptClasses</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering students to achieve their dreams through innovative education 
                and personalized mentorship since 2010.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Our Courses</h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{course.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      123 Education Street<br />
                      Knowledge City, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">+91 98765 43210</p>
                    <p className="text-gray-400 text-sm">+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">info@prakashconceptclasses.com</p>
                    <p className="text-gray-400 text-sm">admissions@pcc.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-400">Get latest updates about courses, admissions, and success tips.</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PrakashConceptClasses. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
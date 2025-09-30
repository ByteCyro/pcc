import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })
    alert('Thank you for your inquiry! We will contact you soon.')
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Education Street", "Knowledge City, State 12345"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@prakashconceptclasses.com", "admissions@pcc.edu"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Sat: 8:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey to success? Contact us today and let our expert counselors 
            guide you towards achieving your academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-400 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-4 rounded-2xl text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Request Callback</span>
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 px-6 py-4 rounded-2xl text-white font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Live Chat</span>
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Interactive Map</p>
                  <p className="text-gray-400 text-sm">Find our location easily</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Course Interest</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                >
                  <option value="">Select a course</option>
                  <option value="jee">JEE Main & Advanced</option>
                  <option value="neet">NEET Preparation</option>
                  <option value="board">Board Exam Excellence</option>
                  <option value="foundation">Foundation Course</option>
                  <option value="crash">Crash Course</option>
                  <option value="online">Online Live Classes</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your academic goals and any specific questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-2xl text-white font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
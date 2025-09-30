import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
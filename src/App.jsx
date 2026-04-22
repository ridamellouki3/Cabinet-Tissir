import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import FacialEsthetics from './components/FacialEsthetics'
import Urgences from './components/Urgences'
import VideoConsultation from './components/VideoConsultation'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingPhone from './components/FloatingPhone'
import UrgencePopup from './components/UrgencePopup'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <FacialEsthetics />
      <Urgences />
      <VideoConsultation />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingPhone />
      <UrgencePopup />
    </LanguageProvider>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Section1 from './components/Section1'
import Included from './components/Included'
import ModelOneVTwo from './components/ModelOneVTwo'
import Video from './components/Video'
import RunYourOwn from './components/RunYourOwn'
import Image from './components/Image'
import Features from './components/Features'
import SmoothScroll from './components/SmoothScroll'
import Footer from './components/Footer' 

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans antialiased selection:bg-amber-500/30">
      {/* 1. Iniciamos el motor de scroll suave */}
      <SmoothScroll />
      
      <Navbar />      
      
      <main className="w-full">
        {/* Todas estas secciones ahora tienen 'Reveal' automático 
          porque heredan del SectionWrapper que modificamos.
        */}
        <Banner />
        <Section1 />
        <Included />
        <ModelOneVTwo />
        <Video />
        <RunYourOwn />
        <Image />
        <Features />
      </main>

      <Footer />
    </div>
  )
}

export default App
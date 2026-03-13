import React, { Suspense, lazy } from 'react' // Importamos las herramientas de carga diferida
import './App.css'

// 1. CARGA CRÍTICA: Se cargan de inmediato porque el usuario las ve al entrar
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import SmoothScroll from './components/SmoothScroll'

// 2. CARGA DIFERIDA (Lazy): Se cargan en segundo plano
// Esto reduce el tamaño del archivo inicial drásticamente
const Section1 = lazy(() => import('./components/Section1'))
const Included = lazy(() => import('./components/Included'))
const ModelOneVTwo = lazy(() => import('./components/ModelOneVTwo'))
const Video = lazy(() => import('./components/Video'))
const RunYourOwn = lazy(() => import('./components/RunYourOwn'))
const Image = lazy(() => import('./components/Image'))
const Features = lazy(() => import('./components/Features'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-[100dvh] bg-black text-zinc-50 font-sans antialiased selection:bg-amber-500/30">
      <SmoothScroll />
      <Navbar />      
      
      <main className="w-full">
        {/* El Banner se renderiza de inmediato para el LCP */}
        <Banner />

        {/* Suspense envuelve todo lo que es "lazy". 
          Mientras se cargan las secciones, puede mostrar un espacio vacío 
          o un pequeño spinner (fallback).
        */}
        <Suspense fallback={<div className="bg-black h-screen" />}>
          <Section1 />
          <Included />
          <ModelOneVTwo />
          <Video />
          <RunYourOwn />
          <Image />
          <Features />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
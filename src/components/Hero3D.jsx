import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Float, Environment, Preload } from '@react-three/drei'
import { Model } from './ModelTwo'

useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')

// 1. Ahora el modelo recibe la variable "isVisible" desde afuera
function RotatingModel({ isVisible }) {
  const groupRef = useRef()
  const { viewport } = useThree()
  const scale = Math.min(viewport.width / 7, viewport.height / 5, 1.0)

  useFrame((state, delta) => {
    // Si el div es visible en el navegador, aplicamos la rotación
    if (groupRef.current && isVisible) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={groupRef} scale={scale} rotation={[0.42, 0.6, 0]}>
      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.08} floatingRange={[-0.04, 0.04]}>
        <Model />
      </Float>
    </group>
  )
}

const Hero3D = () => {
  const [shouldRender, setShouldRender] = useState(false)
  
  // 2. Creamos los estados para vigilar el <div> de HTML
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef()

  // Defer la carga del Canvas hasta después del primer paint
  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // 3. El Vigilante HTML: Es mil veces más rápido que vigilar el objeto 3D
  useEffect(() => {
    if (!containerRef.current) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0 } // Se activa apenas asoma 1 píxel en la pantalla
    )
    
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [shouldRender])

  if (!shouldRender) return (
    <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    // 4. Conectamos el ref a este div principal
    <div ref={containerRef} className="w-full h-[400px] md:h-[600px] lg:h-[700px]">
      <Canvas
        shadows={false}
        camera={{ position: [0, 2, 10], fov: 40 }}
        gl={{ 
          antialias: true,
          toneMapping: 4,
          toneMappingExposure: 1.0,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}  // Limita pixel ratio — enorme diferencia en mobile
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Environment preset="studio" environmentIntensity={0.6} />
          <directionalLight position={[-3, 6, 4]} intensity={1.8} />
          <directionalLight position={[-4, 2, -2]} intensity={0.3} />
          <pointLight position={[0, -1, -4]} intensity={0.6} color="#ff6600" />
          
          {/* Le pasamos el aviso de si se está viendo o no */}
          <RotatingModel isVisible={isVisible} />
          
          <Preload all />
        </Suspense>

        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  )
}

export default Hero3D
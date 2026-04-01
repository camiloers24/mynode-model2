import React, { Suspense, useRef, useEffect, useState } from 'react'
import { useGLTF, OrbitControls, Float, Environment, Preload } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Model } from './ModelTwo'

useGLTF.setDecoderPath('/draco/')

// 1. Ahora el modelo recibe la variable "isVisible" desde afuera
function RotatingModel({ isVisible }) {
  const groupRef = useRef()
  const { viewport } = useThree()
  const scale = Math.min(viewport.width / 7, viewport.height / 5, 1.0)

  useFrame((state, delta) => {    
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

// 2. Componente espía que nos avisa EXACTAMENTE cuando todo terminó de cargar
function LoadingManager({ onLoaded }) {
  useEffect(() => {
    onLoaded()
  }, [onLoaded])
  return null
}

const Hero3D = () => {
  const [shouldRender, setShouldRender] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false) // <--- Nuevo estado para saber si el 3D ya cargó
  
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef()

  // Defer la carga del Canvas hasta después del primer paint
  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // El Vigilante HTML: Es mil veces más rápido que vigilar el objeto 3D
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

    return (
        <div ref={containerRef} className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">        
            {/* 1. EL PÓSTER PERFECTO: Desvanecimiento ultra rápido */}
            <picture className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-100 ease-out ${
                isLoaded ? 'opacity-0' : 'opacity-100'
            }`}>
                {/* Móvil: Pantallas menores a 768px */}
                <source media="(max-width: 767px)" srcSet="/poster-mobile.webp" />
                
                {/* Desktop: Pantallas grandes (tu póster original) */}
                <img 
                src="/model-two-revb.webp" 
                alt="Model Two" 
                className="w-full h-full object-contain"
                />
            </picture>
            {/* 2. EL MOTOR 3D: Arranca invisiblemente y se dibuja encima de la foto */}
            {shouldRender && (
                <div className="absolute inset-0 z-10">
                <Canvas
                    shadows={false}
                    camera={{ position: [0, 2, 10], fov: 40 }}
                    gl={{ 
                    antialias: true,
                    toneMapping: 4,
                    toneMappingExposure: 1.0,
                    powerPreference: 'high-performance',                    
                    }}
                    dpr={[1, 1.5]}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Suspense fallback={null}>
                    <Environment preset="studio" environmentIntensity={0.6} resolution={256} />
                    <directionalLight position={[-3, 6, 4]} intensity={1.8} />
                    <directionalLight position={[-4, 2, -2]} intensity={0.3} />
                    <pointLight position={[0, -1, -4]} intensity={0.6} color="#ff6600" />
                    
                    <RotatingModel isVisible={isVisible} />                    
                    
                    {/* Le avisamos al componente padre que ya terminamos de cargar */}
                    <LoadingManager onLoaded={() => setIsLoaded(true)} />
                    
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
            )}
        </div>
    )
}

export default Hero3D
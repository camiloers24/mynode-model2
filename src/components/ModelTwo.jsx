import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const MODEL_PATH = '/model-two-v2.glb'

export function Model(props) {
  const { nodes, materials } = useGLTF(MODEL_PATH)

  const matTopCover = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#0a0a0a',
    metalness: 0.0,
    roughness: 0.08,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    reflectivity: 0.8,
  }), [])

  const matHeatSink = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1c1c1c',
    metalness: 0.85,
    roughness: 0.55,
  }), [])


  const matOrange = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#f97316',
    emissive: '#c45a00',
    emissiveIntensity: 0.4,
    metalness: 0.0,
    roughness: 0.4,
  }), [])

  const matYellow = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#eab308',
    emissive: '#a07800',
    emissiveIntensity: 0.4,
    metalness: 0.0,
    roughness: 0.4,
  }), [])

  const matWhite = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#cccccc',
    emissive: '#888888',
    emissiveIntensity: 0.2,
    metalness: 0.0,
    roughness: 0.5,
  }), [])

  return (
    <group {...props} dispose={null}>
      {/* Heatsink / cooler */}
      <mesh geometry={nodes.Cooler019.geometry} material={matHeatSink} position={[-0.085, 0.32, -0.996]} />
      <mesh geometry={nodes.Vent_2001.geometry} material={matHeatSink} position={[2.147, -0.031, -0.039]} />
      <mesh geometry={nodes.Vent_2007.geometry} material={matHeatSink} position={[-2.17, -0.031, -0.039]} />

      <group position={[-0.023, -0.284, -0.032]} rotation={[-Math.PI, 0, -Math.PI]} scale={-2.077}>
        {/* Cuerpo principal */}
        <mesh geometry={nodes.Case_Base013.geometry} material={materials['Model Two Case']} />
        {/* Tapa superior — clearcoat premium */}
        <mesh geometry={nodes.Case_Base013_1.geometry} material={matTopCover} />

        {/* Bitcoin Logo */}
        <mesh geometry={nodes.Bitcoin_Logo009.geometry} material={matWhite} position={[-0.011, -0.83, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={-9.097} />

        {/* Botón */}
        <group position={[0.607, -0.065, 1.003]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.091}>
          <mesh geometry={nodes.Circle117.geometry} material={materials['Case Button']} />
          <mesh geometry={nodes.Circle117_1.geometry} material={materials['Button Light']} />
        </group>

        {/* Puerto USB frontal - carcasa */}
        <mesh geometry={nodes.Front_USB_Ports_Case009.geometry} material={materials['Model Two USB Case']} position={[-0.087, -0.062, 1.08]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={-0.477} />

        {/* MyNode Logo */}
        <group position={[-0.011, -0.728, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={-9.097}>
          <mesh geometry={nodes.Curve198.geometry} material={matOrange} />
          <mesh geometry={nodes.Curve198_1.geometry} material={matYellow} />
        </group>
      </group>

      {/* Tapa inferior + rubberfeet */}
      <mesh geometry={nodes.Case_Bottom__Cover009.geometry} material={materials['Bottom Case']} position={[-0.201, -0.711, -0.032]} rotation={[-Math.PI, 0, -Math.PI]} scale={-2.077}>
        <mesh geometry={nodes.Buttom_Rubs003.geometry} material={materials['Buttom Rubs']} position={[1.016, 0.019, 0.85]} rotation={[-Math.PI, 0, -Math.PI]} scale={-0.076} />
      </mesh>

      {/* Puertos USB frontales */}
      <group position={[0.245, -0.101, 1.79]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.057}>
        <mesh geometry={nodes.Mesh219.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Mesh219_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Mesh219_2.geometry} material={materials['Material.003']} />
      </group>

      {/* AUX */}
      <mesh geometry={nodes.Aux009.geometry} material={materials.AUX} position={[0.929, 0.046, -1.877]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.027} />

      {/* Power plug */}
      <mesh geometry={nodes.Power_Plug001.geometry} material={materials.AUX} position={[-21.278, -0.792, -0.493]} />

      {/* Jack / barrel */}
      <group position={[1.615, -0.244, -1.744]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cylinder066.geometry} material={materials.AUX} />
        <mesh geometry={nodes.Cylinder066_1.geometry} material={materials['USB Gold']} />
      </group>

      {/* HDMI x2 */}
      <group position={[0.921, -0.155, -2.155]} rotation={[-3.124, 0, 0]} scale={0.412}>
        <mesh geometry={nodes['11602_HDMI_Type_A_v1_l3010'].geometry} material={materials.AUX} />
        <mesh geometry={nodes['11602_HDMI_Type_A_v1_l3010_1'].geometry} material={materials['USB Gray']} />
        <mesh geometry={nodes['11602_HDMI_Type_A_v1_l3010_2'].geometry} material={materials['USB Gold']} />
      </group>
      <group position={[-1.489, -0.155, -2.155]} rotation={[-3.124, 0, 0]} scale={0.412}>
        <mesh geometry={nodes['11602_HDMI_Type_A_v1_l3010'].geometry} material={materials.AUX} />
        <mesh geometry={nodes['11602_HDMI_Type_A_v1_l3010_1'].geometry} material={materials['USB Gray']} />
        <mesh geometry={nodes['11602_HDMI_Type_A_v1_l3010_2'].geometry} material={materials['USB Gold']} />
      </group>

      {/* Puertos USB traseros */}
      <group position={[-0.619, -0.426, -1.883]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.057}>
        <mesh geometry={nodes.Mesh220.geometry} material={materials['USB Gray']} />
        <mesh geometry={nodes.Mesh220_1.geometry} material={materials['USB Blue']} />
        <mesh geometry={nodes.Mesh220_2.geometry} material={materials['USB Gold']} />
      </group>
      <mesh geometry={nodes.USB_Back_2001.geometry} material={materials['Model Two USB Case.001']} position={[-0.618, -0.193, -1.953]} scale={[1.126, 1.137, 1.137]} />

      {/* Ethernet + LEDs */}
      <group position={[-0.129, 0.085, -2.127]} rotation={[Math.PI, 0, 0]} scale={0.031}>
        <mesh geometry={nodes.Group1004.geometry} material={materials.Ethernet} />
        <mesh geometry={nodes.Group1004_1.geometry} material={materials.AUX} />
        <mesh geometry={nodes.Group1004_2.geometry} material={materials['Glass LED']} />
        <mesh geometry={nodes.LED_Ambar.geometry} material={materials['Amber Light']} position={[13.434, 14.215, -1.214]} scale={0.635} />
        <mesh geometry={nodes.LED_Green.geometry} material={materials['Green Light']} position={[2.995, 14.215, -1.214]} scale={0.635} />
        <mesh geometry={nodes.Pins.geometry} material={materials['USB Gold']} />
      </group>
    </group>
  )
}

useGLTF.preload(MODEL_PATH)

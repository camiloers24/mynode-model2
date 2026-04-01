import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model-two.glb')

  // Top cover premium — lacado oscuro con reflejo sutil
  const matTopCover = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#0a0a0a',
    metalness: 0.0,
    roughness: 0.08,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    reflectivity: 0.8,
  }), [])

  // Heatsink — metal mate oscuro
  const matHeatSink = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1c1c1c',
    metalness: 0.85,
    roughness: 0.55,
  }), [])

  // Logo naranja — emissive para que no se apague con la luz ambiente
  const matOrange = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#f97316',
    emissive: '#c45a00',
    emissiveIntensity: 0.4,
    metalness: 0.0,
    roughness: 0.4,
  }), [])

  // Logo amarillo
  const matYellow = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#eab308',
    emissive: '#a07800',
    emissiveIntensity: 0.4,
    metalness: 0.0,
    roughness: 0.4,
  }), [])

  // Logo blanco — gris muy claro para que no destaque tanto
  const matWhite = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#cccccc',
    emissive: '#888888',
    emissiveIntensity: 0.2,
    metalness: 0.0,
    roughness: 0.5,
  }), [])

  

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.053, -0.379]} rotation={[-Math.PI, 0, -Math.PI]} scale={-2.077}>
        <mesh geometry={nodes.Case_Base013.geometry} material={materials['Model Two Case']} />
        <mesh geometry={nodes.Case_Base013_1.geometry} material={matTopCover} />
        <mesh geometry={nodes.Case_Base013_2.geometry} material={matHeatSink} />
        <mesh geometry={nodes.Case_Base013_3.geometry} material={materials['Buttom Rubs']} />
        <mesh geometry={nodes.Case_Base013_4.geometry} material={materials['Case Button']} />
        <mesh geometry={nodes.Case_Base013_5.geometry} material={materials['Button Light']} />
        <mesh geometry={nodes.Case_Base013_6.geometry} material={materials['Bottom Case']} />
        <mesh geometry={nodes.Case_Base013_7.geometry} material={matWhite} />
        <mesh geometry={nodes.Case_Base013_8.geometry} material={matOrange} />
        <mesh geometry={nodes.Case_Base013_9.geometry} material={matYellow} />
        <mesh geometry={nodes.Case_Base013_10.geometry} material={materials['Model Two USB Case']} />
        <mesh geometry={nodes.Case_Base013_11.geometry} material={materials['USB Gray']} />
        <mesh geometry={nodes.Case_Base013_12.geometry} material={materials['USB Blue']} />
        <mesh geometry={nodes.Case_Base013_13.geometry} material={materials['USB Gold']} />
        <mesh geometry={nodes.Case_Base013_14.geometry} material={materials.AUX} />
        <mesh geometry={nodes.Case_Base013_15.geometry} material={materials['USB Gray']} />
        <mesh geometry={nodes.Case_Base013_16.geometry} material={materials['USB Gold']} />
        <mesh geometry={nodes.Case_Base013_17.geometry} material={materials['USB Blue']} />
        <mesh geometry={nodes.Case_Base013_18.geometry} material={materials['Model Two USB Case.001']} />
        <mesh geometry={nodes.Case_Base013_19.geometry} material={materials.Ethernet} />
        <mesh geometry={nodes.Case_Base013_20.geometry} material={materials['Glass LED']} />
        <mesh geometry={nodes.Case_Base013_21.geometry} material={materials['Amber Light']} />
        <mesh geometry={nodes.Case_Base013_22.geometry} material={materials['Green Light']} />
      </group>
    </group>
  )
}

useGLTF.preload('/model-two.glb')
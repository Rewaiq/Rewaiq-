"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, OrbitControls, Sphere, Text } from "@react-three/drei"
import { useRef, useState, useEffect, useMemo } from "react"
import * as THREE from "three"
import { TypewriterText } from "./typewriter-text" // Import TypewriterText component

const AFRICAN_COUNTRIES = [
  { name: "Nigeria", lat: 9.082, lon: 8.6753, flag: "🇳🇬", order: 1, colors: ["#008751", "#ffffff", "#008751"] },
  { name: "Ghana", lat: 7.9465, lon: -1.0232, flag: "🇬🇭", order: 2, colors: ["#CE1126", "#FCD116", "#006B3F"] },
  { name: "Kenya", lat: -0.0236, lon: 37.9062, flag: "🇰🇪", order: 3, colors: ["#000000", "#BB0000", "#006600"] },
  {
    name: "South Africa",
    lat: -30.5595,
    lon: 22.9375,
    flag: "🇿🇦",
    order: 4,
    colors: ["#E03C31", "#001489", "#007A4D"],
  },
  { name: "Egypt", lat: 26.8206, lon: 30.8025, flag: "🇪🇬", order: 5, colors: ["#CE1126", "#ffffff", "#000000"] },
  { name: "Morocco", lat: 31.7917, lon: -7.0926, flag: "🇲🇦", order: 6, colors: ["#C1272D", "#006233"] },
  { name: "Ethiopia", lat: 9.145, lon: 40.4897, flag: "🇪🇹", order: 7, colors: ["#078930", "#FCDD09", "#DA121A"] },
  { name: "Tanzania", lat: -6.369, lon: 34.8888, flag: "🇹🇿", order: 8, colors: ["#1EB53A", "#FCD116", "#00A3DD"] },
  { name: "Algeria", lat: 28.0339, lon: 1.6596, flag: "🇩🇿", order: 9, colors: ["#006233", "#ffffff", "#D21034"] },
  { name: "Uganda", lat: 1.3733, lon: 32.2903, flag: "🇺🇬", order: 10, colors: ["#000000", "#FCDC04", "#D90000"] },
  { name: "Senegal", lat: 14.4974, lon: -14.4524, flag: "🇸🇳", order: 11, colors: ["#00853F", "#FDEF42", "#E31B23"] },
  { name: "Cameroon", lat: 7.3697, lon: 12.3547, flag: "🇨🇲", order: 12, colors: ["#007A5E", "#CE1126", "#FCD116"] },
  { name: "Rwanda", lat: -1.9403, lon: 29.8739, flag: "🇷🇼", order: 13, colors: ["#00A1DE", "#FAD201", "#20603D"] },
  { name: "Tunisia", lat: 33.8869, lon: 9.5375, flag: "🇹🇳", order: 14, colors: ["#E70013", "#ffffff"] },
  { name: "Zimbabwe", lat: -19.0154, lon: 29.1549, flag: "🇿🇼", order: 15, colors: ["#319B42", "#FFD200", "#DA2428"] },
  { name: "Zambia", lat: -13.1339, lon: 27.8493, flag: "🇿🇲", order: 16, colors: ["#198A00", "#EF7D00", "#DE2010"] },
  { name: "Botswana", lat: -22.3285, lon: 24.6849, flag: "🇧🇼", order: 17, colors: ["#75AADB", "#000000", "#ffffff"] },
  { name: "Namibia", lat: -22.9576, lon: 18.4904, flag: "🇳🇦", order: 18, colors: ["#003580", "#C8102E", "#009543"] },
  { name: "Mauritius", lat: -20.1609, lon: 57.5012, flag: "🇲🇺", order: 19, colors: ["#EA2839", "#1A206D", "#FFD500"] },
  { name: "Ivory Coast", lat: 7.54, lon: -5.5471, flag: "🇨🇮", order: 20, colors: ["#F77F00", "#ffffff", "#009E60"] },
  { name: "Madagascar", lat: -18.7669, lon: 46.8691, flag: "🇲🇬", order: 21, colors: ["#FC3D32", "#007E3A", "#ffffff"] },
  { name: "Mozambique", lat: -18.6657, lon: 35.5296, flag: "🇲🇿", order: 22, colors: ["#007168", "#FCDD09", "#000000"] },
  { name: "Angola", lat: -11.2027, lon: 17.8739, flag: "🇦🇴", order: 23, colors: ["#CE1126", "#000000", "#FCD116"] },
  { name: "Benin", lat: 9.3077, lon: 2.3158, flag: "🇧🇯", order: 24, colors: ["#008751", "#FCD116", "#E8112D"] },
  {
    name: "Burkina Faso",
    lat: 12.2383,
    lon: -1.5616,
    flag: "🇧🇫",
    order: 25,
    colors: ["#EF2B2D", "#009E49", "#FCD116"],
  },
  { name: "Burundi", lat: -3.3731, lon: 29.9189, flag: "🇧🇮", order: 26, colors: ["#CE1126", "#1EB53A", "#ffffff"] },
  { name: "Cape Verde", lat: 16.5388, lon: -23.0418, flag: "🇨🇻", order: 27, colors: ["#003893", "#ffffff", "#CF2027"] },
  { name: "Chad", lat: 15.4542, lon: 18.7322, flag: "🇹🇩", order: 28, colors: ["#002664", "#FECB00", "#C60C30"] },
  { name: "Comoros", lat: -11.6455, lon: 43.3333, flag: "🇰🇲", order: 29, colors: ["#FFD100", "#ffffff", "#CE1126"] },
  { name: "Congo", lat: -4.0383, lon: 21.7587, flag: "🇨🇬", order: 30, colors: ["#009543", "#FBDE4A", "#DC241F"] },
  { name: "DR Congo", lat: -4.0383, lon: 21.7587, flag: "🇨🇩", order: 31, colors: ["#007FFF", "#F7D618", "#CE1021"] },
  { name: "Djibouti", lat: 11.8251, lon: 42.5903, flag: "🇩🇯", order: 32, colors: ["#6AB2E7", "#12AD2B", "#ffffff"] },
  {
    name: "Equatorial Guinea",
    lat: 1.6508,
    lon: 10.2679,
    flag: "🇬🇶",
    order: 33,
    colors: ["#3E9A00", "#ffffff", "#E32118"],
  },
  { name: "Eritrea", lat: 15.1794, lon: 39.7823, flag: "🇪🇷", order: 34, colors: ["#12AD2B", "#1189CB", "#E8112D"] },
  { name: "Eswatini", lat: -26.5225, lon: 31.4659, flag: "🇸🇿", order: 35, colors: ["#3E5EB9", "#FFD900", "#B10C0C"] },
  { name: "Gabon", lat: -0.8037, lon: 11.6094, flag: "🇬🇦", order: 36, colors: ["#009E60", "#FCD116", "#3A75C4"] },
  { name: "Gambia", lat: 13.4432, lon: -15.3101, flag: "🇬🇲", order: 37, colors: ["#CE1126", "#0C1C8C", "#3A7728"] },
  { name: "Guinea", lat: 9.9456, lon: -9.6966, flag: "🇬🇳", order: 38, colors: ["#CE1126", "#FCD116", "#009460"] },
  {
    name: "Guinea-Bissau",
    lat: 11.8037,
    lon: -15.1804,
    flag: "🇬🇼",
    order: 39,
    colors: ["#CE1126", "#FCD116", "#009E49"],
  },
  { name: "Lesotho", lat: -29.61, lon: 28.2336, flag: "🇱🇸", order: 40, colors: ["#00209F", "#ffffff", "#009543"] },
  { name: "Liberia", lat: 6.4281, lon: -9.4295, flag: "🇱🇷", order: 41, colors: ["#BF0A30", "#ffffff", "#002868"] },
  { name: "Libya", lat: 26.3351, lon: 17.2283, flag: "🇱🇾", order: 42, colors: ["#E70013", "#000000", "#239E46"] },
  { name: "Malawi", lat: -13.2543, lon: 34.3015, flag: "🇲🇼", order: 43, colors: ["#000000", "#CE1126", "#339E35"] },
  { name: "Mali", lat: 17.5707, lon: -3.9962, flag: "🇲🇱", order: 44, colors: ["#14B53A", "#FCD116", "#CE1126"] },
  { name: "Mauritania", lat: 21.0079, lon: -10.9408, flag: "🇲🇷", order: 45, colors: ["#00A854", "#FFD700"] },
  { name: "Niger", lat: 17.6078, lon: 8.0817, flag: "🇳🇪", order: 46, colors: ["#E05206", "#ffffff", "#0DB02B"] },
  { name: "Seychelles", lat: -4.6796, lon: 55.492, flag: "🇸🇨", order: 47, colors: ["#003F87", "#FCD856", "#D62828"] },
  {
    name: "Sierra Leone",
    lat: 8.4606,
    lon: -11.7799,
    flag: "🇸🇱",
    order: 48,
    colors: ["#1EB53A", "#ffffff", "#0072C6"],
  },
  { name: "Somalia", lat: 5.1521, lon: 46.1996, flag: "🇸🇴", order: 49, colors: ["#4189DD", "#ffffff"] },
  { name: "South Sudan", lat: 6.877, lon: 31.307, flag: "🇸🇸", order: 50, colors: ["#000000", "#DA121A", "#078930"] },
  { name: "Sudan", lat: 12.8628, lon: 30.2176, flag: "🇸🇩", order: 51, colors: ["#D21034", "#ffffff", "#000000"] },
  { name: "Togo", lat: 8.6195, lon: 0.8248, flag: "🇹🇬", order: 52, colors: ["#006A4E", "#FFCE00", "#D21034"] },
]

function latLonToVector3(lat: number, lon: number, radius: number) {
  const safeLat = typeof lat === "number" && !isNaN(lat) ? lat : 0
  const safeLon = typeof lon === "number" && !isNaN(lon) ? lon : 0

  const phi = (90 - safeLat) * (Math.PI / 180)
  const theta = (safeLon + 180) * (Math.PI / 180)

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)

  // Ensure all components are finite numbers
  return new THREE.Vector3(Number.isFinite(x) ? x : 0, Number.isFinite(y) ? y : 0, Number.isFinite(z) ? z : 0)
}

function CountryTerritory({
  country,
  isActive,
  radius,
}: { country: (typeof AFRICAN_COUNTRIES)[0]; isActive: boolean; radius: number }) {
  const meshRef = useRef<THREE.Group>(null)

  // Use useMemo for position to prevent unnecessary re-calculations
  const position = useMemo(() => {
    return latLonToVector3(country.lat, country.lon, radius)
  }, [country.lat, country.lon, radius])

  const countryShape = useMemo(() => {
    const shape = new THREE.Shape()
    const size = 0.15 // Reduced size for cleaner appearance

    // Create more regular polygon for clearer flag display
    const points = 6
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * Math.PI * 2
      const x = Math.cos(angle) * size
      const y = Math.sin(angle) * size
      if (i === 0) shape.moveTo(x, y)
      else shape.lineTo(x, y)
    }
    shape.closePath()
    return shape
  }, [])

  useFrame((state) => {
    if (meshRef.current && isActive) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.03 + 1
      meshRef.current.scale.set(pulse, pulse, pulse)
    }
  })

  if (!isActive || isNaN(position.x) || isNaN(position.y) || isNaN(position.z)) return null

  // Calculate rotation to align with globe surface
  const normal = position.clone().normalize()
  const rotationMatrix = new THREE.Matrix4()
  rotationMatrix.lookAt(new THREE.Vector3(0, 0, 0), normal, new THREE.Vector3(0, 1, 0))
  const euler = new THREE.Euler()
  euler.setFromRotationMatrix(rotationMatrix)

  return (
    <group ref={meshRef} position={[position.x, position.y, position.z]} rotation={[euler.x, euler.y, euler.z]}>
      {country.colors.map((color, idx) => {
        const totalColors = country.colors.length
        const stripeHeight = 0.3 / totalColors
        const offsetY = (idx - totalColors / 2 + 0.5) * stripeHeight

        return (
          <mesh key={idx} position={[0, offsetY, 0.01]}>
            <extrudeGeometry
              args={[
                countryShape,
                {
                  depth: 0.02,
                  bevelEnabled: false,
                },
              ]}
            />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.6}
              transparent
              opacity={0.95}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>
        )
      })}

      {/* Country label with flag emoji */}
      <Text
        position={[0, -0.25, 0.05]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {country.flag}
      </Text>
    </group>
  )
}

function Globe({ expansionProgress }: { expansionProgress: number }) {
  const globeRef = useRef<THREE.Mesh>(null)

  const texture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 2048
    canvas.height = 1024
    const ctx = canvas.getContext("2d")!

    // Dark base
    ctx.fillStyle = "rgba(10, 20, 50, 0.3)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Africa outline (enhanced)
    ctx.strokeStyle = "rgba(79, 127, 255, 0.8)"
    ctx.lineWidth = 4
    ctx.shadowColor = "#4F7FFF"
    ctx.shadowBlur = 15
    ctx.beginPath()
    // Simplified Africa shape
    const africaOutline = [
      [0.52, 0.2],
      [0.58, 0.18],
      [0.62, 0.22],
      [0.64, 0.26],
      [0.63, 0.3],
      [0.66, 0.36],
      [0.65, 0.42],
      [0.63, 0.48],
      [0.65, 0.54],
      [0.63, 0.6],
      [0.61, 0.66],
      [0.58, 0.72],
      [0.54, 0.76],
      [0.5, 0.74],
      [0.48, 0.7],
      [0.46, 0.64],
      [0.44, 0.58],
      [0.42, 0.52],
      [0.44, 0.46],
      [0.42, 0.42],
      [0.44, 0.36],
      [0.42, 0.32],
      [0.44, 0.26],
      [0.48, 0.22],
    ]
    africaOutline.forEach(([x, y], i) => {
      const px = x * canvas.width
      const py = y * canvas.height
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    })
    ctx.closePath()
    ctx.stroke()

    // Fill Africa with gradient
    const gradient = ctx.createLinearGradient(canvas.width * 0.4, 0, canvas.width * 0.65, canvas.height)
    gradient.addColorStop(0, "rgba(79, 127, 255, 0.25)")
    gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)")
    gradient.addColorStop(1, "rgba(79, 127, 255, 0.3)")
    ctx.fillStyle = gradient
    ctx.fill()

    // Grid lines
    ctx.strokeStyle = "rgba(79, 127, 255, 0.12)"
    ctx.lineWidth = 1
    ctx.shadowBlur = 0
    for (let i = 0; i <= 10; i++) {
      ctx.beginPath()
      ctx.moveTo(0, (canvas.height / 10) * i)
      ctx.lineTo(canvas.width, (canvas.height / 10) * i)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo((canvas.width / 20) * i, 0)
      ctx.lineTo((canvas.width / 20) * i, canvas.height)
      ctx.stroke()
    }

    return new THREE.CanvasTexture(canvas)
  }, [])

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.15 // Smooth auto-rotation
    }
  })

  const countriesLit = Math.max(0, Math.floor(expansionProgress * AFRICAN_COUNTRIES.length))

  return (
    <group>
      <Sphere ref={globeRef} args={[2.2, 64, 64]}>
        <meshStandardMaterial map={texture} metalness={0.3} roughness={0.5} transparent opacity={0.4} />
      </Sphere>

      {/* Wireframe overlay for better visibility */}
      <Sphere args={[2.21, 32, 32]}>
        <meshBasicMaterial color="#4F7FFF" wireframe opacity={0.15} transparent />
      </Sphere>

      {/* Render country territories with flag colors */}
      {AFRICAN_COUNTRIES.slice(0, countriesLit).map((country) => (
        <CountryTerritory key={country.name} country={country} isActive={true} radius={2.22} />
      ))}
    </group>
  )
}

function FlyingLetter({
  char,
  index,
  totalLetters,
}: {
  char: string
  index: number
  totalLetters: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [phase, setPhase] = useState<"waiting" | "flying" | "landed">("waiting")
  const [currentColor, setCurrentColor] = useState("#ffffff")

  const targetPosition = useMemo(() => {
    const spacing = 0.4
    const startX = -((totalLetters - 1) * spacing) / 2
    return new THREE.Vector3(startX + index * spacing, 0, 0)
  }, [index, totalLetters])

  const startPosition = useMemo(() => {
    const angle = (index / totalLetters) * Math.PI * 2
    return new THREE.Vector3(Math.cos(angle) * 15, Math.sin(angle) * 8, -12 - index * 2)
  }, [index, totalLetters])

  const delay = index * 0.5
  const startTime = useRef(Date.now() + delay * 1000)
  const flightDuration = 2.8

  useFrame((state) => {
    if (!meshRef.current) return

    const now = Date.now()
    const elapsed = (now - startTime.current) / 1000

    if (elapsed < 0) {
      setPhase("waiting")
      meshRef.current.position.set(startPosition.x, startPosition.y, startPosition.z)
      meshRef.current.scale.set(0, 0, 0)
      return
    }

    if (elapsed < flightDuration) {
      setPhase("flying")
      const progress = elapsed / flightDuration
      const eased = 1 - Math.pow(1 - progress, 3)

      const arcHeight = Math.sin(progress * Math.PI) * 4
      const currentPos = new THREE.Vector3()
      currentPos.lerpVectors(startPosition, targetPosition, eased)
      currentPos.y += arcHeight * (1 - eased)
      meshRef.current.position.set(currentPos.x, currentPos.y, currentPos.z)

      const scaleValue = THREE.MathUtils.lerp(0.1, 0.35, eased)
      meshRef.current.scale.set(scaleValue, scaleValue, scaleValue)

      meshRef.current.rotation.x = (1 - eased) * Math.PI * 3
      meshRef.current.rotation.y = (1 - eased) * Math.PI * 4
      meshRef.current.rotation.z = (1 - eased) * Math.PI * 2
    } else {
      setPhase("landed")
      meshRef.current.rotation.set(0, 0, 0)

      const floatY = Math.sin(state.clock.elapsedTime * 1.5 + index * 0.6) * 0.06
      const floatX = Math.cos(state.clock.elapsedTime * 1.1 + index * 0.4) * 0.02
      meshRef.current.position.set(targetPosition.x + floatX, targetPosition.y + floatY, targetPosition.z)

      const pulse = Math.sin(state.clock.elapsedTime * 2.5 + index) * 0.03 + 1
      const scaleValue = 0.35 * pulse
      meshRef.current.scale.set(scaleValue, scaleValue, scaleValue)

      const colorTime = state.clock.elapsedTime * 0.5 + index * 0.3
      const colorPhase = (Math.sin(colorTime) + 1) / 2
      const colors = ["#ffffff", "#4F7FFF", "#00d4ff", "#8B5CF6", "#60A5FA"]
      const colorIndex = Math.floor(colorPhase * colors.length) % colors.length
      setCurrentColor(colors[colorIndex])
    }
  })

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/Inter_Bold.json"
      size={1}
      height={0.3}
      curveSegments={16}
      bevelEnabled
      bevelThickness={0.03}
      bevelSize={0.02}
      bevelSegments={8}
      position={[startPosition.x, startPosition.y, startPosition.z]}
    >
      {char}
      <meshStandardMaterial
        color={phase === "landed" ? currentColor : "#00d4ff"}
        metalness={0.8}
        roughness={0.1}
        emissive={phase === "landed" ? currentColor : "#8B5CF6"}
        emissiveIntensity={phase === "landed" ? 3.5 : 1.2}
        toneMapped={false}
      />
    </Text3D>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 250

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.012
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.006
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#4F7FFF" transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function Scene({ expansionProgress }: { expansionProgress: number }) {
  const letters = "REWAIQ".split("")

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 8]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-8, -8, -6]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[0, 0, 5]} intensity={2.0} color="#4F7FFF" distance={12} />
      <pointLight position={[0, 0, 0]} intensity={2.5} color="#ffffff" distance={8} />
      <pointLight position={[0, 0, -3]} intensity={1.5} color="#8B5CF6" distance={10} />

      <Globe expansionProgress={expansionProgress} />

      {letters.map((char, index) => (
        <FlyingLetter key={index} char={char} index={index} totalLetters={letters.length} />
      ))}

      <Particles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.7}
      />
    </>
  )
}

export function Rewaiq3D() {
  const [mounted, setMounted] = useState(false)
  const [expansionProgress, setExpansionProgress] = useState(0)
  const [currentCountry, setCurrentCountry] = useState("")

  useEffect(() => {
    setMounted(true)

    const expansionDelay = setTimeout(() => {
      let progress = 0
      const interval = setInterval(() => {
        progress += 0.02
        if (progress >= 1) {
          progress = 1
          clearInterval(interval)
        }
        setExpansionProgress(progress)

        const countryIndex = Math.floor(progress * AFRICAN_COUNTRIES.length)
        if (countryIndex >= 0 && countryIndex < AFRICAN_COUNTRIES.length) {
          const country = AFRICAN_COUNTRIES[countryIndex]
          if (country?.name) {
            setCurrentCountry(country.name)
          }
        }
      }, 200)

      return () => clearInterval(interval)
    }, 5000)

    return () => clearTimeout(expansionDelay)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[500px] md:h-[650px] flex items-center justify-center bg-background">
        <div className="text-4xl font-bold text-primary animate-pulse">REWAIQ</div>
      </div>
    )
  }

  const countriesLit = Math.floor(expansionProgress * AFRICAN_COUNTRIES.length)

  return (
    <div className="w-full h-[500px] md:h-[650px] relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ background: "transparent" }}>
        <Scene expansionProgress={expansionProgress} />
      </Canvas>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="absolute top-6 md:top-10 left-0 right-0 text-center pointer-events-none px-4">
        <p className="text-muted-foreground/60 text-xs tracking-[0.3em] uppercase">
          Where Creativity Meets Opportunity
        </p>
      </div>

      {expansionProgress > 0 && expansionProgress < 1 && (
        <div className="absolute top-20 md:top-24 left-0 right-0 text-center pointer-events-none animate-pulse px-4">
          {(() => {
            const idx = Math.floor(expansionProgress * AFRICAN_COUNTRIES.length)
            // Ensure index is within bounds and not NaN
            if (isNaN(idx) || idx < 0 || idx >= AFRICAN_COUNTRIES.length) return null
            const country = AFRICAN_COUNTRIES[idx]
            return country ? (
              <>
                <p className="text-primary text-sm font-medium flex items-center justify-center gap-2">
                  <span className="text-2xl">{country.flag}</span>
                  Expanding to {country.name}...
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  {countriesLit} of {AFRICAN_COUNTRIES.length} countries connected
                </p>
              </>
            ) : null
          })()}
        </div>
      )}

      {expansionProgress >= 1 && (
        <div className="absolute top-20 md:top-24 left-0 right-0 text-center pointer-events-none px-4">
          <TypewriterText text="🌍 Connected Across Africa" />
          <p className="text-white font-semibold text-lg md:text-xl tracking-wide">Discover. Earn. Influence.</p>
          <p className="text-primary/90 text-sm md:text-base tracking-widest uppercase">
            Africa's #1 Digital Earning Platform
          </p>
          <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto px-4 leading-relaxed">
            Where every stream, view, and action becomes income for creators, students, and dreamers across Africa
          </p>
        </div>
      )}

      <div className="absolute bottom-12 md:bottom-16 left-0 right-0 text-center pointer-events-none space-y-2 md:space-y-3 px-4">
        <TypewriterText text="Turn Your Passion Into Profit" />
        <p className="text-white font-semibold text-lg md:text-xl tracking-wide">Discover. Earn. Influence.</p>
        <p className="text-primary/90 text-sm md:text-base tracking-widest uppercase">
          Africa's #1 Digital Earning Platform
        </p>
        <p className="text-muted-foreground text-xs md:text-sm max-w-lg mx-auto px-4 leading-relaxed">
          Where every stream, view, and action becomes income for creators, students, and dreamers across Africa
        </p>
      </div>
    </div>
  )
}

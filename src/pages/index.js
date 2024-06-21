import Main from "@/components/Main";
import { Canvas } from "@react-three/fiber";
import { Sky, OrbitControls, useGLTF } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <Canvas camera={{position:[0,0,3]}} 
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'darkslategray'
      }}>
        <Sky />
        <OrbitControls />
        <Model />
      </Canvas>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        <Main />
      </div>
    </>
  );
}

function Model() {
  const {nodes, materials} = useGLTF('/gltf/scene.gltf')
  console.log('nodes', nodes)
  console.log('material', materials)

  return (
    <mesh geometry={nodes.defaultMaterial.geometry} dispose={null}>
      <meshBasicMaterial map={materials.None.map} />
    </mesh>
  )
}

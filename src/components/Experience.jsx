import {
  Environment,
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Model } from "./Supplement";
export const Experience = (props) => {
  const { section } = props;
  return (
    <>
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enableDamping={false}
        enablePan={false}
      />
      <Stats />
      <Environment preset="warehouse" />
      <ambientLight intensity={0.2} />
      <motion.group
        animate={{
          z: section === 0 ? 0 : 1,
          x: section === 1 ? 0.5 : 1,
          y: section === 1 ? -0.2 : 0,
        }}
        position={[1, 0, 0]}
      >
        <Float speed={5}>
          <Model section={section} position={[0, 0, 1]} />
        </Float>
        <Float>
          <mesh position={[0.3, 0.3, 0]} scale={0.4}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"#FFFFFF"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[-0.1, -0.5, 0]} scale={0.4}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"#93261B"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[-0.6, 0.1, 0]} scale={0.4}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"#FFC906"}
            />
          </mesh>
        </Float>{" "}
      </motion.group>
    </>
  );
};

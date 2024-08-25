import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";

function App() {
  const [section, setSection] = useState(0);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        mass: 5,
        stiffness: 500,
        damping: 50,
        restDelta: 0.0001,
      }}
    >
      <Canvas shadows camera={{ fov: 30 }}>
        <color attach="background" args={["#f9f5f2"]} />
        <ScrollControls pages={2} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience section={section} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>{" "}
    </MotionConfig>
  );
}

export default App;

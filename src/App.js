import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

// Components
import GridHelper from "./components/GridHelper/GridHelper";
import Controls from "./components/Controls/Controls";
import Triangle from "./components/Triangle/Triangle";

// Styles
import "./styles.css";

export default function App() {
  const vertices = [
    new THREE.Vector3(0, 20, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(20, 0, 0)
  ];

  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 50, 50] }}
      onCreated={({ gl }) => gl.setClearColor("#f0f0f0")}
    >
      <Triangle vertices={vertices} />
      <GridHelper />
      <Controls />
    </Canvas>
  );
}

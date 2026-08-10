"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useColorTheme } from "@/context/ColorThemeContext";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activePreset } = useColorTheme();
  const activeColorHexRef = useRef<number>(activePreset.threeHex);

  useEffect(() => {
    activeColorHexRef.current = activePreset.threeHex;
  }, [activePreset]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Central AI Core Geometry (Icosahedron & Octahedron)
    const coreGroup = new THREE.Group();
    rootGroup.add(coreGroup);

    const outerCoreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const outerWireframeGeo = new THREE.WireframeGeometry(outerCoreGeo);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(activeColorHexRef.current),
      transparent: true,
      opacity: 0.75,
    });
    const outerCoreMesh = new THREE.LineSegments(outerWireframeGeo, coreMaterial);
    coreGroup.add(outerCoreMesh);

    const innerCoreGeo = new THREE.OctahedronGeometry(0.9, 0);
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(activeColorHexRef.current),
      emissive: new THREE.Color(activeColorHexRef.current),
      emissiveIntensity: 0.4,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerMaterial);
    coreGroup.add(innerCoreMesh);

    // AI Neural Nodes & Synaptic Connections Graph
    const nodesGroup = new THREE.Group();
    rootGroup.add(nodesGroup);

    const nodeCount = 32;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activeColorHexRef.current),
      roughness: 0.2,
      metalness: 0.9,
    });

    for (let i = 0; i < nodeCount; i++) {
      const radius = 2.5 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const pos = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      nodePositions.push(pos);

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      nodesGroup.add(nodeMesh);
    }

    // Synaptic Connection Lines Between Nearby Neural Nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(activeColorHexRef.current),
      transparent: true,
      opacity: 0.25,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 2.4) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }

    linesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const connectionLines = new THREE.LineSegments(linesGeometry, lineMaterial);
    nodesGroup.add(connectionLines);

    // Particle Starfield Aura
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 16;
      particlePos[i + 1] = (Math.random() - 0.5) * 16;
      particlePos[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: new THREE.Color(activeColorHexRef.current),
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(activeColorHexRef.current, 3, 25);
    mainLight.position.set(4, 4, 5);
    scene.add(mainLight);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0005;
      mouseY = (event.clientY - windowHalfY) * 0.0005;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let targetColor = new THREE.Color(activeColorHexRef.current);
    let currentColor = new THREE.Color(activeColorHexRef.current);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp colors smoothly
      targetColor.setHex(activeColorHexRef.current);
      currentColor.lerp(targetColor, 0.08);

      coreMaterial.color.copy(currentColor);
      innerMaterial.color.copy(currentColor);
      innerMaterial.emissive.copy(currentColor);
      nodeMat.color.copy(currentColor);
      lineMaterial.color.copy(currentColor);
      particleMat.color.copy(currentColor);
      mainLight.color.copy(currentColor);

      // Rotations
      coreGroup.rotation.x += 0.005;
      coreGroup.rotation.y += 0.008;

      nodesGroup.rotation.y -= 0.003;
      nodesGroup.rotation.x += 0.002;
      particles.rotation.y -= 0.0006;

      // Mouse Parallax Tilt
      rootGroup.rotation.y += (mouseX - rootGroup.rotation.y) * 0.06;
      rootGroup.rotation.x += (mouseY - rootGroup.rotation.x) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      outerCoreGeo.dispose();
      outerWireframeGeo.dispose();
      coreMaterial.dispose();
      innerCoreGeo.dispose();
      innerMaterial.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] sm:min-h-[460px] relative flex items-center justify-center pointer-events-none"
    />
  );
}

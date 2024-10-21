"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import  cn  from "../../lib/utils";

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  // baseColor: [78 / 255, 60 / 255, 140 / 255],
  baseColor: [164 / 255, 70 / 255, 503 / 255],
  markerColor: [236 / 255, 72 / 255, 153 / 255],
  glowColor: [78 / 255, 60 / 255, 140 / 255],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(false);
  const pointerInteractionMovement = useRef(0);
  const phi = useRef(0);
  const [r, setR] = useState(0);
  const width = useRef(0);

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current) {
      const delta = clientX - pointerInteractionMovement.current;
      pointerInteractionMovement.current = clientX;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state) => {
      if (!pointerInteracting.current) phi.current += 0.005;
      state.phi = phi.current + r;
      state.width = width.current * 2;
      state.height = width.current * 2;
    },
    [r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width.current = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        ...config,
        width: width.current * 2,
        height: width.current * 2,
        onRender,
      });

      setTimeout(() => (canvasRef.current.style.opacity = "1"));

      return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
      };
    }
  }, [config, onRender]);

  return (
    <div
    className={cn(
        "absolute mx-auto aspect-[1/1] w-full overflow-hidden",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          updatePointerInteraction(true);
          pointerInteractionMovement.current = e.clientX;
        }}
        onPointerUp={() => updatePointerInteraction(false)}
        onPointerOut={() => updatePointerInteraction(false)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => {
          if (e.touches[0]) updateMovement(e.touches[0].clientX);
        }}
      />
    </div>
  );
}

export default Globe;

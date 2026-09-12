import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] select-none overflow-hidden"
    >
      <svg
        className="w-full h-full opacity-[0.035] contrast-125 brightness-100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grainNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainNoise)" />
      </svg>
    </div>
  );
};

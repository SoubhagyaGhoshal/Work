import React, { useRef, useState, type MouseEvent, type ReactNode, type CSSProperties } from 'react';

interface TiltWrapperProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number; // Maximum tilt angle in degrees
  scale?: number; // Scale on hover
  glare?: boolean; // Enable glare effect
}

const TiltWrapper: React.FC<TiltWrapperProps> = ({
  children,
  className = '',
  style = {},
  maxTilt = 8,
  scale = 1.02,
  glare = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-1 to 1)
    const rotateXPercent = (mouseY / height - 0.5) * 2;
    const rotateYPercent = (mouseX / width - 0.5) * 2;

    // Apply max tilt
    setRotateX(-rotateXPercent * maxTilt);
    setRotateY(rotateYPercent * maxTilt);

    if (glare) {
      setGlarePos({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const currentTransform = isHovered
    ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        ...style,
        transform: currentTransform,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-50 rounded-xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default TiltWrapper;

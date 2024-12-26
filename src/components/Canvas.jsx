import React, { useState, useEffect } from "react";

export const Canvas = ({
  count,
  color = "white",
  size = { width: 288, height: 388 },
  interactive = false, // Add interactive prop
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (count > 0 && interactive) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000); // Animate for 1 second
    }
  }, [count, interactive]);

  const lines = [
    { condition: count > 0, x1: 50, y1: 0, x2: 52, y2: 100 }, // Rope
    { condition: count > 2, x1: 51, y1: 144, x2: 51, y2: 210 }, // Body
    { condition: count > 3, x1: 51, y1: 158, x2: 63, y2: 190 }, // Right Arm
    { condition: count > 4, x1: 51, y1: 158, x2: 38, y2: 190 }, // Left Arm
    { condition: count > 5, x1: 51, y1: 210, x2: 66, y2: 246 }, // Right Leg
    { condition: count > 6, x1: 51, y1: 210, x2: 36, y2: 246 }, // Left Leg
  ];

  const svgStyle = {
    width: size.width,
    height: size.height,
    stroke: color,
    strokeWidth: interactive ? 5 : 2, // Thicker stroke on interaction
    strokeLinecap: "round", // Rounded line caps for smoother look
    fill: "none", // Avoid unnecessary fill
  };

  return (
    <svg viewBox={`0 0 ${size.width} ${size.height}`} style={svgStyle}>
      {/* Stage */}
      <line x1="2" y1="385" x2="286" y2="385" />
      {/* Pole */}
      <line x1="200" y1="0" x2="200" y2="385" />
      {/* Top */}
      <line x1="50" y1="2" x2="200" y2="2" />
      {/* Rib */}
      <line x1="160" y1="0" x2="200" y2="40" />
      {/* Conditional elements */}
      {lines.map((line, index) =>
        line.condition ? (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
          />
        ) : null
      )}
      {/* Head (conditionally bold on animation) */}
      {count > 1 && (
        <circle
          cx="52"
          cy="122"
          r="20"
          style={{ strokeWidth: isAnimating ? 4 : 2 }} // Bold head during animation
        />
      )}
    </svg>
  );
};

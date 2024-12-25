import { motion } from "framer-motion";

export const Canvas = ({
  count,
  color = "#363636",
  size = { width: 288, height: 388 },
}) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1 },
        opacity: { duration: 0.2 },
      },
    },
  };

  const lines = [
    { condition: count > 0, x1: 50, y1: 0, x2: 52, y2: 100 }, // Rope
    { condition: count > 2, x1: 51, y1: 144, x2: 51, y2: 210 }, // Body
    { condition: count > 3, x1: 51, y1: 158, x2: 63, y2: 190 }, // Right Arm
    { condition: count > 4, x1: 51, y1: 158, x2: 38, y2: 190 }, // Left Arm
    { condition: count > 5, x1: 51, y1: 210, x2: 66, y2: 246 }, // Right Leg
    { condition: count > 6, x1: 51, y1: 210, x2: 36, y2: 246 }, // Left Leg
  ];

  return (
    <motion.svg
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      initial="hidden"
      animate="visible"
    >
      {/* Stage */}
      <motion.line x1="2" y1="385" x2="286" y2="385" stroke={color} />

      {/* Pole */}
      <motion.line
        x1="200"
        y1="0"
        x2="200"
        y2="385"
        stroke={color}
        strokeWidth={5}
      />

      {/* Top */}
      <motion.line x1="50" y1="2" x2="200" y2="2" stroke={color} />

      {/* Rib */}
      <motion.line x1="160" y1="0" x2="200" y2="40" stroke={color} />

      {/* Conditional elements */}
      {lines.map((line, index) =>
        line.condition ? (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={color}
            variants={draw}
          />
        ) : null
      )}

      {/* Head */}
      {count > 1 && (
        <motion.circle cx="52" cy="122" r="20" stroke={color} variants={draw} />
      )}
    </motion.svg>
  );
};

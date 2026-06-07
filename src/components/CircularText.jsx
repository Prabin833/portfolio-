import { useEffect, useRef } from "react";
import { motion, useAnimation } from "motion/react";

export default function CircularText({
  text = "",
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const currentRotation = useRef(0);

  const startSpin = (duration) => {
    controls.start({
      rotate: [currentRotation.current, currentRotation.current + 360],
      transition: {
        ease: "linear",
        duration,
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startSpin(spinDuration);
  }, [spinDuration]);

  const handleHoverStart = () => {
    if (onHover === "pause") controls.stop();
    else if (onHover === "speedUp") startSpin(spinDuration / 4);
    else if (onHover === "slowDown") startSpin(spinDuration * 3);
    else if (onHover === "goBonkers") startSpin(spinDuration / 20);
  };

  const handleHoverEnd = () => {
    startSpin(spinDuration);
  };

  return (
    <motion.div
      className={`circular-text ${className}`}
      animate={controls}
      onUpdate={(latest) => {
        currentRotation.current = latest.rotate ?? 0;
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `rotate(${angle}deg) translateY(-110px) translateX(-50%)`,
              transformOrigin: "center top",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
}
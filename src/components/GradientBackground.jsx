import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function GradientBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="gradient-bg" aria-hidden="true">
      {/* Primary orb — follows mouse subtly */}
      <motion.div
        className="gradient-orb gradient-orb-1"
        animate={{
          x: mouse.x * 80 - 40,
          y: mouse.y * 80 - 40,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 50 }}
      />
      {/* Secondary orb — inverse mouse movement */}
      <motion.div
        className="gradient-orb gradient-orb-2"
        animate={{
          x: -mouse.x * 60 + 30,
          y: -mouse.y * 60 + 30,
        }}
        transition={{ type: 'spring', damping: 60, stiffness: 40 }}
      />
      {/* Tertiary accent orb */}
      <motion.div
        className="gradient-orb gradient-orb-3"
        animate={{
          x: mouse.x * 40 - 20,
          y: -mouse.y * 40 + 20,
        }}
        transition={{ type: 'spring', damping: 70, stiffness: 30 }}
      />
    </div>
  );
}

export default GradientBackground;

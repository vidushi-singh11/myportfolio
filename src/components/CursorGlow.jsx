import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    const isTouch = 'ontouchstart' in window;
    if (isTouch) return;

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleEnterInteractive = () => setIsHovering(true);
    const handleLeaveInteractive = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);

    // Track hover on interactive elements
    const observer = new MutationObserver(() => {
      attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    function attachListeners() {
      const interactives = document.querySelectorAll(
        'a, button, .project-card, .skill-chip, .contact-link-item, .form-group input, .form-group textarea'
      );
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnterInteractive);
        el.removeEventListener('mouseleave', handleLeaveInteractive);
        el.addEventListener('mouseenter', handleEnterInteractive);
        el.addEventListener('mouseleave', handleLeaveInteractive);
      });
    }
    attachListeners();

    return () => {
      window.removeEventListener('mousemove', handleMove);
      observer.disconnect();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: pos.x - 200,
          y: pos.y - 200,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.12 : 0.07,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 400,
          mass: 0.2,
        }}
      />
    </>
  );
}

export default CursorGlow;

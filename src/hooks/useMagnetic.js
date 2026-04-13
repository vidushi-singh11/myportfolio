import { useRef, useState, useEffect } from 'react';

/**
 * Hook that makes an element follow the cursor magnetically when hovered.
 * @param {number} strength — how strongly the element follows (0-1), default 0.3
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      setTransform({ x: dx * strength, y: dy * strength });
    };

    const handleLeave = () => {
      setTransform({ x: 0, y: 0 });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  const style = {
    transform: `translate(${transform.x}px, ${transform.y}px)`,
    transition: transform.x === 0 ? 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
  };

  return { ref, style };
}

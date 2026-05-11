import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.2 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    setEnabled(media.matches);
    window.addEventListener('mousemove', handleMove);

    const handleChange = (event) => setEnabled(event.matches);
    media.addEventListener('change', handleChange);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      media.removeEventListener('change', handleChange);
    };
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Box
        component={motion.div}
        style={{ x: springX, y: springY }}
        sx={{
          position: 'fixed',
          left: -16,
          top: -16,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.7)',
          pointerEvents: 'none',
          zIndex: 1400,
          mixBlendMode: 'difference',
        }}
      />
      <Box
        component={motion.div}
        style={{ x: springX, y: springY }}
        sx={{
          position: 'fixed',
          left: -3,
          top: -3,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 1401,
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
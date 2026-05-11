import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 25, restDelta: 0.001 });

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        height: 4,
        zIndex: 1301,
        background: 'rgba(255,255,255,0.04)',
      }}
    >
      <Box
        component={motion.div}
        style={{ scaleX }}
        sx={{
          height: '100%',
          transformOrigin: '0% 50%',
          background: 'linear-gradient(90deg, #ff7aa8 0%, #60e6d9 50%, #ffb36b 100%)',
          boxShadow: '0 0 24px rgba(255,122,168,0.4)',
        }}
      />
    </Box>
  );
}
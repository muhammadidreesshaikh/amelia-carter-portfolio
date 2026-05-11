import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const bubbles = [
  { size: 220, x: '6%', y: '8%', color: 'rgba(255,122,168,0.24)', duration: 18 },
  { size: 300, x: '82%', y: '10%', color: 'rgba(96,230,217,0.18)', duration: 24 },
  { size: 180, x: '76%', y: '72%', color: 'rgba(255,179,107,0.16)', duration: 22 },
  { size: 140, x: '12%', y: '78%', color: 'rgba(124,140,255,0.18)', duration: 20 },
];

export default function FloatingBackground() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: 'inherit',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black 55%, transparent 100%)',
          opacity: 0.32,
        },
      }}
    >
      {bubbles.map((bubble, index) => (
        <Box
          key={bubble.x + bubble.y}
          component={motion.div}
          animate={{ y: [0, -26, 0], x: [0, 14, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: bubble.duration, repeat: Infinity, ease: 'easeInOut', delay: index * 1.8 }}
          sx={{
            position: 'absolute',
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${bubble.color} 0%, transparent 72%)`,
            filter: 'blur(10px)',
          }}
        />
      ))}
    </Box>
  );
}
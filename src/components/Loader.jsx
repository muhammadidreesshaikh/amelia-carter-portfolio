import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1600,
        display: 'grid',
        placeItems: 'center',
        background:
          'radial-gradient(circle at center, rgba(255,122,168,0.18), transparent 24%), linear-gradient(180deg, rgba(5,10,17,0.98), rgba(7,17,31,0.98))',
        backdropFilter: 'blur(24px)',
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          sx={{
            width: 96,
            height: 96,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.12)',
            borderTopColor: 'primary.main',
            borderRightColor: 'secondary.main',
            boxShadow: '0 0 36px rgba(255,122,168,0.22)',
          }}
        />
        <Stack spacing={1} alignItems="center">
          <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '0.18em' }}>
            AMELIA CARTER
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            Crafting premium motion and design
          </Typography>
        </Stack>
        <Box sx={{ width: 240, display: 'grid', gap: 1 }}>
          {[0, 1, 2].map((index) => (
            <Box
              key={index}
              component={motion.div}
              animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: index * 0.18 }}
              sx={{
                height: 5,
                borderRadius: 999,
                background: 'linear-gradient(90deg, rgba(255,122,168,0.3), rgba(96,230,217,0.9), rgba(255,179,107,0.35))',
                transformOrigin: 'center',
              }}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
import { Box, Card, CardContent, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';

export default function ProjectCard({ title, description, image, to, accent, glow }) {
  return (
    <Card
      component={motion.div}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 1,
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(8,16,27,0.85)',
        boxShadow: '0 24px 70px rgba(0,0,0,0.4)',
        p: 0.5,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        minWidth: 0,
      }}
    >
      <Box component={RouterLink} to={to} sx={{ display: 'block', height: '100%', color: 'inherit' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(180deg, rgba(4,8,15,0.1), rgba(4,8,15,0.78)), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.02)',
            transition: 'transform 0.8s ease',
            '&:hover': {
              transform: 'scale(1.08)',
            },
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${alpha(accent, 0.26)}, transparent 40%, ${alpha(glow, 0.08)})`,
          }}
        />

        <CardContent
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            p: { xs: 3, md: 3.5 },
            flex: 1,
          }}
        >
          <Box
            sx={{
              width: 'fit-content',
              px: 1.5,
              py: 0.8,
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.16)',
              backgroundColor: alpha('#ffffff', 0.06),
              backdropFilter: 'blur(14px)',
              color: 'secondary.light',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              mt: 0.5,
            }}
          >
            Portfolio View
          </Box>

          <Typography variant="h3" sx={{ mt: 2, fontSize: { xs: 34, md: 48 } }}>
            {title}
          </Typography>

          <Typography sx={{ mt: 1.2, maxWidth: 500, color: 'text.secondary', lineHeight: 1.8 }}>
            {description}
          </Typography>

          <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1.2, color: 'primary.light', fontWeight: 800 }}>
            Explore category
            <ArrowForwardRounded fontSize="small" />
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
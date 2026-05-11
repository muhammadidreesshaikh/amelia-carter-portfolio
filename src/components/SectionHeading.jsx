import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <Stack spacing={2} sx={{ textAlign: align, maxWidth: 820, mx: align === 'center' ? 'auto' : 0 }}>
      {eyebrow ? (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          sx={{
            alignSelf: align === 'center' ? 'center' : 'flex-start',
            px: 2,
            py: 0.8,
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 999,
            background: 'linear-gradient(135deg, rgba(255,122,168,0.12), rgba(96,230,217,0.08))',
            color: 'secondary.light',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontSize: 12,
            fontWeight: 800,
            width: 'fit-content',
          }}
        >
          {eyebrow}
        </Box>
      ) : null}

      <Typography variant="h2" sx={{ fontSize: { xs: 42, md: 64 } }}>
        {title}
      </Typography>

      {description ? (
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 17, lineHeight: 1.8 }}>
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
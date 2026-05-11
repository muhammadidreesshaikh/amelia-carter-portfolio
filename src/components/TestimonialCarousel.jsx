import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import StarRounded from '@mui/icons-material/StarRounded';

export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Card
        sx={{
          borderRadius: 5,
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 24px 90px rgba(0,0,0,0.34)',
          p: 0.5,
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Stack direction="row" spacing={0.4} sx={{ color: '#ffd166', mb: 3 }}>
            {[0, 1, 2, 3, 4].map((item) => (
              <StarRounded key={item} fontSize="small" />
            ))}
          </Stack>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              <Typography variant="h4" sx={{ fontSize: { xs: 28, md: 38 }, lineHeight: 1.25 }}>
                “{current.quote}”
              </Typography>
              <Stack sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 800 }}>{current.name}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{current.role}</Typography>
              </Stack>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      <Box sx={{ display: 'grid', gap: 1.2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={testimonial.name}
            component={motion.div}
            onClick={() => setActive(index)}
            whileHover={{ y: -4 }}
            sx={{
              cursor: 'pointer',
              p: 2.6,
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.08)',
              background: active === index ? alpha('#ff7aa8', 0.12) : alpha('#ffffff', 0.04),
            }}
          >
            <Typography sx={{ fontWeight: 800 }}>{testimonial.name}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {testimonial.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
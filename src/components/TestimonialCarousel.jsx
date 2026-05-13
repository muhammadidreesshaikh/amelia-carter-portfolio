import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Stack, Typography, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import StarRounded from '@mui/icons-material/StarRounded';
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';

export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  const handlePrevious = () => {
    setActive((value) => (value - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActive((value) => (value + 1) % testimonials.length);
  };

  return (
    <Box sx={{ display: 'grid', gap: 3 }}>
      <Box sx={{ position: 'relative' }}>
        <Card
          sx={{
            borderRadius: 1,
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
                <Typography variant="h4" sx={{ fontSize: { xs: 16, md: 20 }, lineHeight: 1.25 }}>
                  "{current.quote}"
                </Typography>
                <Stack sx={{ mt: 3 }}>
                  <Typography sx={{ fontWeight: 800 }}>{current.name}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{current.role}</Typography>
                </Stack>
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Navigation Arrows */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            top: 24,
            right: 24,
            zIndex: 2,
          }}
        >
          <IconButton
            onClick={handlePrevious}
            size="small"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: alpha('#ffffff', 0.04),
              color: 'secondary.light',
              transition: 'all 0.22s ease',
              '&:hover': {
                borderColor: alpha('#60e6d9', 0.55),
                backgroundColor: alpha('#ffffff', 0.08),
                transform: 'translateY(-4px)',
              },
            }}
          >
            <ArrowBackRounded fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            size="small"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: alpha('#ffffff', 0.04),
              color: 'secondary.light',
              transition: 'all 0.22s ease',
              '&:hover': {
                borderColor: alpha('#60e6d9', 0.55),
                backgroundColor: alpha('#ffffff', 0.08),
                transform: 'translateY(-4px)',
              },
            }}
          >
            <ArrowForwardRounded fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

import { useMemo, useState } from 'react';
import { Box, Card, CardActionArea, Container, Dialog, DialogContent, Grid, IconButton, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CloseRounded from '@mui/icons-material/CloseRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import { categoryProjects } from '../data/portfolioData';

export default function CategoryPage({ categoryKey }) {
  const category = categoryProjects[categoryKey];
  const [selected, setSelected] = useState(null);

  const motionConfig = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.55 } }),
    }),
    [],
  );

  if (!category) {
    return null;
  }

  return (
    <>
      <Seo title={`${category.title} | Amelia Carter Portfolio`} description={category.description} />

      <Box component="section" sx={{ position: 'relative', py: { xs: 6, md: 9 } }}>
        <Container maxWidth="xl">
          <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 8, minHeight: { xs: 380, md: 520 }, border: '1px solid rgba(255,255,255,0.08)', background: `linear-gradient(135deg, ${alpha(category.accent, 0.22)}, rgba(8,16,27,0.72) 45%, ${alpha(category.glow, 0.16)})`, backdropFilter: 'blur(18px)', display: 'grid', alignItems: 'end', p: { xs: 3, md: 5 } }}>
            <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.24 }} />
            <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 840 }}>
              <Typography component={motion.span} variants={motionConfig} initial="hidden" animate="visible" custom={0.1} sx={{ display: 'inline-flex', px: 2, py: 1, borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)', backgroundColor: alpha('#ffffff', 0.06), letterSpacing: '0.18em', textTransform: 'uppercase', color: 'secondary.light', fontSize: 12, fontWeight: 800 }}>
                Dedicated Portfolio
              </Typography>

              <Typography variant="h1" sx={{ mt: 2, fontSize: { xs: 50, md: 92 } }}>{category.title}</Typography>

              <Typography sx={{ mt: 2, maxWidth: 760, color: 'text.secondary', fontSize: { xs: 16, md: 18 }, lineHeight: 1.9 }}>{category.description}</Typography>

              <Stack direction="row" spacing={1.2} sx={{ mt: 3, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 999, backgroundColor: alpha('#ffffff', 0.06) }}>Motion-first presentation</Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 999, backgroundColor: alpha('#ffffff', 0.06) }}>Hover zoom previews</Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 1, borderRadius: 999, backgroundColor: alpha('#ffffff', 0.06) }}>High-end visual mood</Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      <AnimatedSection>
        <Container maxWidth="xl">
          <SectionHeading eyebrow={category.subtitle} title="Featured projects with expandable previews and animated presentation." description="Each image opens in a lightbox so visitors can inspect the design in a polished, distraction-free view." />

          <Grid container spacing={3} sx={{ mt: 1 }}>
            {category.projects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={project.title}>
                <Card component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} transition={{ duration: 0.45, delay: index * 0.04 }} viewport={{ once: true }} sx={{ borderRadius: 5, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(8,16,27,0.78)', overflow: 'hidden' }}>
                  <CardActionArea onClick={() => setSelected(project)} sx={{ height: '100%' }}>
                    <Box sx={{ position: 'relative', aspectRatio: '4 / 5', backgroundImage: `linear-gradient(180deg, rgba(4,8,15,0.05), rgba(4,8,15,0.72)), url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.75s ease', '&:hover': { transform: 'scale(1.07)' } }}>
                      <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 32%, ${alpha(project.accent, 0.22)})` }} />
                      <Box sx={{ position: 'absolute', left: 18, right: 18, bottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, px: 2, py: 1.5, borderRadius: 4, backgroundColor: alpha('#0a1322', 0.72), border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
                        <Box>
                          <Typography sx={{ fontWeight: 800 }}>{project.title}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Click to preview</Typography>
                        </Box>
                        <ArrowForwardRounded />
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AnimatedSection>

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} fullWidth maxWidth="lg" PaperProps={{ sx: { background: 'rgba(6,10,18,0.95)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(28px)', overflow: 'hidden' } }}>
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {selected ? (
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ width: '100%', aspectRatio: { xs: '4 / 5', md: '16 / 9' }, backgroundImage: `url(${selected.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
              <IconButton onClick={() => setSelected(null)} sx={{ position: 'absolute', top: 16, right: 16, backgroundColor: alpha('#0a1322', 0.8), border: '1px solid rgba(255,255,255,0.1)' }}>
                <CloseRounded />
              </IconButton>
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ fontSize: { xs: 28, md: 42 } }}>{selected.title}</Typography>
                <Typography sx={{ mt: 1.2, color: 'text.secondary' }}>{selected.subtitle}</Typography>
              </Box>
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
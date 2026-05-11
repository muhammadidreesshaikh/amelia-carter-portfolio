import { useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import Instagram from '@mui/icons-material/Instagram';
import AnimatedSection from '../components/AnimatedSection';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { counters, heroCopy, projectHighlights, socialLinks, skills, testimonials } from '../data/portfolioData';

const floatingVariants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

function HeroVisual() {
  return (
    <Box sx={{ position: 'relative', minHeight: { xs: 420, md: 640 }, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))', backdropFilter: 'blur(24px)', boxShadow: '0 30px 120px rgba(0,0,0,0.45)', overflow: 'hidden' }}>
      <Box component={motion.div} animate={{ y: [0, -16, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(255,122,168,0.3), transparent 26%), radial-gradient(circle at 80% 15%, rgba(96,230,217,0.22), transparent 24%), linear-gradient(180deg, rgba(10,17,29,0.3), rgba(5,10,17,0.9))' }} />
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '48px 48px', opacity: 0.35 }} />

      <Box sx={{ position: 'relative', zIndex: 1, height: '100%', p: { xs: 2.5, md: 4 } }}>
        <Stack spacing={2} sx={{ height: '100%', justifyContent: 'space-between' }}>
          <Paper elevation={0} sx={{ width: 'fit-content', px: 2, py: 1, borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', backgroundColor: alpha('#ffffff', 0.05) }}>
            <Typography variant="caption" sx={{ letterSpacing: '0.2em', textTransform: 'uppercase', color: 'secondary.light' }}>
              Available for freelance work
            </Typography>
          </Paper>

          <Box sx={{ position: 'relative', alignSelf: 'center', width: { xs: 240, md: 340 }, mt: { xs: 1, md: 2 } }}>
            <Box component={motion.div} animate={{ rotate: [0, 2, 0, -2, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} sx={{ position: 'relative', width: '100%', borderRadius: '50%', aspectRatio: '1 / 1', background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.28), transparent 18%), linear-gradient(145deg, rgba(255,122,168,0.8), rgba(96,230,217,0.45))', boxShadow: '0 0 80px rgba(255,122,168,0.24)', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', inset: 14, borderRadius: '50%', background: 'linear-gradient(180deg, rgba(9,17,30,0.2), rgba(9,17,30,0.72)), radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 25%)', border: '1px solid rgba(255,255,255,0.12)', display: 'grid', placeItems: 'center' }}>
                <Typography variant="h3" sx={{ fontSize: { xs: 46, md: 62 }, textAlign: 'center' }}>
                  Amelia
                </Typography>
              </Box>
            </Box>

            <Box component={motion.div} variants={floatingVariants} initial="initial" animate="animate" custom={0.2} sx={{ position: 'absolute', right: -10, top: 22, px: 2, py: 1.2, borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(8,16,27,0.76)', backdropFilter: 'blur(18px)' }}>
              <Typography sx={{ fontWeight: 800 }}>Motion-ready identity</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Elegant, playful, precise</Typography>
            </Box>

            <Box component={motion.div} variants={floatingVariants} initial="initial" animate="animate" custom={0.45} sx={{ position: 'absolute', left: -6, bottom: 24, px: 2.2, py: 1.2, borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(8,16,27,0.76)', backdropFilter: 'blur(18px)' }}>
              <Typography sx={{ fontWeight: 800 }}>100+ brand stories</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Logos, banners, and animations</Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={1.2} sx={{ flexWrap: 'wrap' }}>
            {['Branding', 'Motion Graphics', 'Thumbnails', 'Illustration'].map((tag) => (
              <Chip key={tag} label={tag} sx={{ backgroundColor: alpha('#ffffff', 0.05), border: '1px solid rgba(255,255,255,0.1)', color: 'text.primary' }} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const skillGroups = useMemo(() => skills, []);

  return (
    <>
      <Seo
        title="Amelia Carter | Graphic Designer & Animator"
        description="Premium portfolio website for Amelia Carter, a freelance graphic designer and animator with 7+ years of experience in branding, logo design, animation, thumbnails, backgrounds, and digital visuals."
      />

      <Box component="section" sx={{ position: 'relative', minHeight: { xs: 'auto', md: 'calc(100vh - 88px)' }, py: { xs: 5, md: 9 } }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} lg={6}>
              <Stack spacing={3}>
                <Box component={motion.div} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} sx={{ width: 'fit-content', px: 2, py: 1, borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', backgroundColor: alpha('#ffffff', 0.04), color: 'secondary.light', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 12, fontWeight: 800 }}>
                  {heroCopy.eyebrow}
                </Box>

                <Typography variant="h1" sx={{ fontSize: { xs: 54, sm: 74, md: 96 } }}>{heroCopy.headline}</Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: 16, md: 18 }, lineHeight: 1.9, maxWidth: 720 }}>{heroCopy.description}</Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button variant="contained" size="large" href="#work" endIcon={<ArrowForwardRounded />}>View My Work</Button>
                  <Button variant="outlined" size="large" href="#contact">Contact Me</Button>
                </Stack>

                <Stack direction="row" spacing={1.4} sx={{ flexWrap: 'wrap', pt: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                    <EmailRounded fontSize="small" /> hello@ameliacarter.design
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                    <Instagram fontSize="small" /> @ameliacarterart
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} lg={6}>
              <HeroVisual />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <AnimatedSection>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box sx={{ minHeight: 520, borderRadius: 8, overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)), radial-gradient(circle at top, rgba(255,122,168,0.22), transparent 35%)', display: 'grid', placeItems: 'center' }}>
                <Avatar alt="Amelia Carter placeholder" sx={{ width: { xs: 220, md: 300 }, height: { xs: 220, md: 300 }, bgcolor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.35), transparent 18%), linear-gradient(135deg, rgba(255,122,168,0.9), rgba(96,230,217,0.45))', boxShadow: '0 24px 90px rgba(0,0,0,0.4)', fontSize: 80, fontWeight: 900 }}>AC</Avatar>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <SectionHeading eyebrow="About" title="A creative partner for brands that want visual identity with depth." description="I blend graphic design, motion, and storytelling to create high-end visuals that feel refined, feminine, and memorable. Every asset is designed to elevate a brand’s presence across digital and social channels." />

              <Grid container spacing={2.2} sx={{ mt: 1 }}>
                {counters.map((counter, index) => (
                  <Grid item xs={12} sm={4} key={counter.label}>
                    <Card component={motion.div} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index * 0.1 }} viewport={{ once: true }} sx={{ p: 0, borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(18px)' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h3" sx={{ fontSize: 42 }}>{counter.value}</Typography>
                        <Typography sx={{ color: 'text.secondary', mt: 1 }}>{counter.label}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container maxWidth="xl">
          <SectionHeading eyebrow="Skills" title="An expansive toolkit, refined for branding, motion, and content creation." description="Each skill is represented as a crafted visual bar to show depth, precision, and consistency across creative disciplines." />

          <Grid container spacing={2.5} sx={{ mt: 1 }}>
            {skillGroups.map((skill, index) => (
              <Grid item xs={12} sm={6} lg={4} key={skill.name}>
                <Card component={motion.div} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} transition={{ duration: 0.45, delay: index * 0.03 }} viewport={{ once: true }} sx={{ p: 0, height: '100%', borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))', backdropFilter: 'blur(16px)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography sx={{ fontWeight: 800 }}>{skill.name}</Typography>
                      <Typography sx={{ color: 'secondary.light', fontWeight: 800 }}>{skill.level}%</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={skill.level} sx={{ mt: 2, height: 10, borderRadius: 999, backgroundColor: alpha('#ffffff', 0.06), '& .MuiLinearProgress-bar': { borderRadius: 999, background: 'linear-gradient(90deg, #ff7aa8, #60e6d9, #ffb36b)' } }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="work">
        <Container maxWidth="xl">
          <SectionHeading eyebrow="Portfolio" title="Some past projects crafted for strong identity, motion, and visual engagement." description="Click a project card to enter a dedicated portfolio page for that category." />

          <Grid container spacing={3.5} sx={{ mt: 1 }}>
            {projectHighlights.map((project) => (
              <Grid item xs={12} lg={4} key={project.title}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </AnimatedSection>

      <AnimatedSection>
        <Container maxWidth="xl">
          <SectionHeading eyebrow="Testimonials" title="Client feedback that reflects the level of care behind every detail." description="The testimonials auto-cycle while keeping the presentation calm, premium, and easy to read." />
          <Box sx={{ mt: 1.5 }}>
            <TestimonialCarousel testimonials={testimonials} />
          </Box>
        </Container>
      </AnimatedSection>

      <AnimatedSection id="contact">
        <Container maxWidth="xl">
          <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(135deg, rgba(255,122,168,0.14), rgba(255,255,255,0.04) 32%, rgba(96,230,217,0.12))', backdropFilter: 'blur(24px)', p: { xs: 3, md: 5 } }}>
            <Box sx={{ position: 'absolute', inset: 'auto -8% -12% auto', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,122,168,0.36), transparent 68%)', filter: 'blur(16px)' }} />

            <Grid container spacing={4} alignItems="flex-start" sx={{ position: 'relative', zIndex: 1 }}>
              <Grid item xs={12} md={5}>
                <SectionHeading eyebrow="Let’s Build Your Business Together" title="A polished visual identity starts with a conversation." description="Tell me about your brand, your audience, and the feeling you want to create. I’ll help translate it into design and motion that feels distinctive and premium." />

                <Stack spacing={1.2} sx={{ mt: 3 }}>
                  {socialLinks.map((item) => (
                    <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, py: 1.5, px: 2, borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)', backgroundColor: alpha('#ffffff', 0.04) }}>
                      <Typography sx={{ fontWeight: 800 }}>{item.label}</Typography>
                      <Typography sx={{ color: 'text.secondary', textAlign: 'right' }}>{item.value}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={7}>
                <Card sx={{ borderRadius: 5, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(8,16,27,0.68)', backdropFilter: 'blur(20px)' }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box component="form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} sx={{ display: 'grid', gap: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField label="Your Name" placeholder="Enter your full name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField label="Email Address" placeholder="you@example.com" />
                        </Grid>
                      </Grid>
                      <TextField label="Project Brief" placeholder="Share a few details about your brand or campaign" multiline minRows={5} />
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
                        <Button type="submit" variant="contained" size="large" endIcon={<ArrowForwardRounded />}>Send Enquiry</Button>
                        {submitted ? (
                          <Typography sx={{ color: 'secondary.light', fontWeight: 700 }}>Thanks. I’ll review the brief and reply soon.</Typography>
                        ) : (
                          <Typography sx={{ color: 'text.secondary' }}>Usually replies within 24 hours.</Typography>
                        )}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AnimatedSection>
    </>
  );
}
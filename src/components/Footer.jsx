import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import EmailRounded from '@mui/icons-material/EmailRounded';
import WorkOutlineRounded from '@mui/icons-material/WorkOutlineRounded';
import { alpha } from '@mui/material/styles';

const socials = [
  { icon: <EmailRounded />, label: 'Email' },
  { icon: <Instagram />, label: 'Instagram' },
  { icon: <WorkOutlineRounded />, label: 'Behance' },
  { icon: <WhatsApp />, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 5, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <Container maxWidth="xl">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: '0.14em' }}>
              AMELIA CARTER
            </Typography>
            <Typography sx={{ color: 'text.secondary', mt: 0.8 }}>
              Premium design, branding, and animation with a creative edge.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            {socials.map((social) => (
              <IconButton
                key={social.label}
                sx={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: alpha('#ffffff', 0.03),
                  transition: 'transform 0.25s ease, background-color 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    backgroundColor: alpha('#ff7aa8', 0.15),
                  },
                }}
                aria-label={social.label}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Typography sx={{ mt: 4, color: 'text.secondary' }}>
          © {new Date().getFullYear()} Amelia Carter. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
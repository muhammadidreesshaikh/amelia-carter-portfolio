import { Box, Container, IconButton, Stack, Typography } from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import EmailRounded from '@mui/icons-material/EmailRounded';
import WorkOutlineRounded from '@mui/icons-material/WorkOutlineRounded';
import { alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const socials = [
  { icon: <EmailRounded />, label: 'Email' },
  { icon: <Instagram />, label: 'Instagram' },
  { icon: <WorkOutlineRounded />, label: 'Behance' },
  { icon: <WhatsApp />, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <Container maxWidth="xl">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between" alignItems={{ xs: 'center', md: 'center' }}>
          <Box component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'inherit', textAlign: { xs: 'left', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: '0.14em' }}>
              AMELIA CARTER
            </Typography>
            <Typography sx={{ color: 'text.secondary', mt: 0.8 }}>
              Premium design, branding, and animation with a creative edge.
            </Typography>
          </Box>

          <Typography sx={{ color: 'text.secondary', textAlign: { xs: 'center', md: 'right' } }}>
          © {new Date().getFullYear()} Amelia Carter. All rights reserved.
        </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
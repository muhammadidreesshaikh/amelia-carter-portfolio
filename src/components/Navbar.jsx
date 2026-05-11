import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuRounded from '@mui/icons-material/MenuRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import Instagram from '@mui/icons-material/Instagram';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { Link as RouterLink } from 'react-router-dom';

const quickLinks = [
  { label: 'Email', value: 'hello@ameliacarter.design', icon: <EmailRounded fontSize="small" /> },
  { label: 'Instagram', value: '@ameliacarterart', icon: <Instagram fontSize="small" /> },
  { label: 'WhatsApp', value: '+1 (555) 014-2211', icon: <WhatsApp fontSize="small" /> },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 74, md: 86 }, px: { xs: 2, md: 4 } }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.4,
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff7aa8, #60e6d9)',
              boxShadow: '0 0 32px rgba(255,122,168,0.35)',
            }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 900, letterSpacing: '0.12em', lineHeight: 1.1 }}>
              AMELIA CARTER
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Graphic Designer & Animator
            </Typography>
          </Box>
        </Box>

        <Stack direction="row" spacing={1.2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box
            sx={{
              px: 2,
              py: 1,
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: alpha('#ffffff', 0.03),
              color: 'text.secondary',
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Creative Portfolio
          </Box>
          <Button variant="contained" component={RouterLink} to="/" state={{ scrollTo: 'contact' }} size="small">
            Contact
          </Button>
        </Stack>

        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'text.primary' }}
          aria-label="Open contact drawer"
        >
          <MenuRounded />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 380 },
            background: 'linear-gradient(180deg, rgba(8,17,29,0.98), rgba(6,10,18,0.98))',
            backdropFilter: 'blur(28px)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Quick Contact
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseRounded />
            </IconButton>
          </Stack>

          <List disablePadding sx={{ display: 'grid', gap: 1.5 }}>
            {quickLinks.map((item) => (
              <ListItemButton
                key={item.label}
                sx={{
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: alpha('#ffffff', 0.03),
                }}
              >
                <Box sx={{ mr: 1.5, display: 'flex', color: 'secondary.light' }}>{item.icon}</Box>
                <ListItemText primary={item.label} secondary={item.value} />
              </ListItemButton>
            ))}
          </List>

          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.08)' }} />

          <Button variant="contained" fullWidth component={RouterLink} to="/" state={{ scrollTo: 'contact' }} onClick={() => setDrawerOpen(false)}>
            Let’s Build Your Business Together
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
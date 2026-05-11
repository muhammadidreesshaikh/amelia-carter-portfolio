import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import CustomCursor from './CustomCursor';
import FloatingBackground from './FloatingBackground';

export default function Layout({ children }) {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Box sx={{ position: 'fixed', inset: 0, zIndex: -2, opacity: 0.7, background: 'radial-gradient(circle at 10% 20%, rgba(255,122,168,0.1), transparent 22%), radial-gradient(circle at 90% 20%, rgba(96,230,217,0.08), transparent 16%), radial-gradient(circle at 50% 90%, rgba(255,179,107,0.08), transparent 22%)' }} />
      <Box sx={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <FloatingBackground />
      </Box>
      <Box component="main" sx={{ pt: { xs: 11, md: 13 } }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
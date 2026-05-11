import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Loader from './components/Loader';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;

    requestAnimationFrame(() => {
      if (scrollTarget) {
        const targetElement = document.getElementById(scrollTarget);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [location.key, location.pathname, location.state]);

  return (
    <Layout>
      {loading ? <Loader /> : null}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5 }}
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route path="/logos-banners" element={<CategoryPage categoryKey="logos-banners" />} />
          <Route path="/models" element={<CategoryPage categoryKey="models" />} />
          <Route path="/backgrounds-thumbnails" element={<CategoryPage categoryKey="backgrounds-thumbnails" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
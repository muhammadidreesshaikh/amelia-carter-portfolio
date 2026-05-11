import { motion } from 'framer-motion';

export default function AnimatedSection({ children, id, sx, delay = 0, ...props }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={sx}
      {...props}
    >
      {children}
    </motion.section>
  );
}
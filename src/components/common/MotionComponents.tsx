'use client';

import { m, AnimatePresence } from 'framer-motion';

export const MotionDiv = m.div;
export const MotionSection = m.section;
export { AnimatePresence };

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

import React from 'react';
import { motion } from 'framer-motion';

export function PanelContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.15 }}>
      <div
        className="flex min-h-[calc(100vh-60px)] w-full items-start justify-center overflow-auto pt-6 sm:pt-12 md:pt-20 lg:pt-24 pb-6 lg:pb-0"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        {children}
      </div>
    </motion.div>
  );
}

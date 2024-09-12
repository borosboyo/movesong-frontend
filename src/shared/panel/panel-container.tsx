import React from 'react';
import { motion } from 'framer-motion';

export function PanelContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15 }}
    >
      <div className={`flex justify-center items-start w-full overflow-auto`} style={{ height: 'calc(100vh - 60px)', paddingTop: '5rem' }}>
        {children}
      </div>
    </motion.div>
  );
}

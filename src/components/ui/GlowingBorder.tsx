import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function GlowingBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('relative group', className)}>
      <motion.div
        className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-50 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ backgroundSize: '200% auto' }}
      />
      <div className="relative h-full w-full bg-surface rounded-2xl">
        {children}
      </div>
    </div>
  );
}

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({ className, children, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={cn(
        'relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

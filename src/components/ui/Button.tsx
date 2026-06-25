import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(126,20,255,0.4)] hover:shadow-[0_0_30px_rgba(126,20,255,0.6)]': variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(71,191,255,0.3)]': variant === 'secondary',
            'border border-white/20 bg-transparent hover:bg-white/10 text-white': variant === 'outline',
            'hover:bg-white/10 hover:text-white text-zinc-300': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-8 text-base': size === 'md',
            'h-14 px-10 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
};
Button.displayName = 'Button';

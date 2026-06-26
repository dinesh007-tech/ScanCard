import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

export interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  withGlow?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  withGlow = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "relative rounded-3xl overflow-hidden border border-white",
        "bg-surface-container-low shadow-[0_20px_40px_rgba(26,27,31,0.04)]",
        "transition-shadow hover:shadow-[0_30px_60px_rgba(26,27,31,0.08)]",
        className
      )}
      {...props}
    >
      {withGlow && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,95,170,0.15)_0%,rgba(255,255,255,0)_70%)] rounded-full pointer-events-none z-0" />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

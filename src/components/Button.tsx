import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-label-md rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  
  const variants = {
    primary: "bg-primary text-on-primary shadow-lg shadow-primary/20 hover:bg-on-primary-fixed-variant",
    secondary: "bg-white text-on-surface border border-outline-variant hover:bg-surface-container-low",
    ghost: "bg-transparent text-on-surface hover:bg-surface-container-low hover:text-primary",
    icon: "bg-white/90 backdrop-blur-md text-primary shadow-2xl border border-white/20 hover:bg-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-label-sm",
    md: "px-6 py-2 md:px-8 md:py-4 text-label-md",
    lg: "px-8 py-4 text-body-lg",
    icon: "w-20 h-20"
  };

  return (
    <motion.button
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 flex items-center">{icon}</span>}
    </motion.button>
  );
};

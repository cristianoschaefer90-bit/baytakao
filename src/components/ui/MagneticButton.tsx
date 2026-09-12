import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'flame' | 'amber' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  target,
  rel,
  variant = 'flame',
  size = 'md',
  children,
  className = '',
  onClick,
  ...props
}) => {
  const magneticRef = useMagnetic<HTMLAnchorElement & HTMLButtonElement>({
    strength: 0.3,
  });

  const baseStyles =
    'relative inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F5A524] focus:ring-offset-2 focus:ring-offset-[#0A0A0B] overflow-hidden group';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs rounded-full',
    md: 'px-7 py-3.5 text-sm tracking-widest rounded-full',
    lg: 'px-10 py-5 text-base tracking-widest rounded-full font-extrabold',
  };

  const variantStyles = {
    flame:
      'bg-[#E4322B] text-[#FFF6E8] hover:bg-[#c9251f] shadow-[0_0_25px_rgba(228,50,43,0.35)] hover:shadow-[0_0_35px_rgba(228,50,43,0.6)] border border-[#E4322B]',
    amber:
      'bg-[#F5A524] text-[#0A0A0B] hover:bg-[#df8e13] shadow-[0_0_25px_rgba(245,165,36,0.35)] hover:shadow-[0_0_35px_rgba(245,165,36,0.6)] border border-[#F5A524]',
    outline:
      'bg-transparent text-[#FFF6E8] border border-white/20 hover:border-[#F5A524] hover:text-[#F5A524] hover:bg-[#141416]',
    ghost:
      'bg-transparent text-[#FFF6E8] hover:text-[#F5A524] hover:bg-white/5',
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Light sheen effect on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
      />
    </>
  );

  if (href) {
    return (
      <a
        ref={magneticRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={magneticRef as React.RefObject<HTMLButtonElement>}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

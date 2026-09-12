import React from 'react';
import { useOpenStatus } from '../../hooks/useOpenStatus';

interface OpenStatusBadgeProps {
  className?: string;
  showNextInfo?: boolean;
}

export const OpenStatusBadge: React.FC<OpenStatusBadgeProps> = ({
  className = '',
  showNextInfo = true,
}) => {
  const { isOpen, statusText, nextInfo } = useOpenStatus();

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141416]/90 border border-white/10 backdrop-blur-md text-xs font-medium tracking-wide text-[#FFF6E8] ${className}`}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            isOpen ? 'bg-emerald-400' : 'bg-[#E4322B]'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isOpen ? 'bg-emerald-500' : 'bg-[#E4322B]'
          }`}
        />
      </span>
      <span className="font-semibold">{statusText}</span>
      {showNextInfo && nextInfo && (
        <>
          <span className="text-white/20">•</span>
          <span className="text-[#8A8A8F]">{nextInfo}</span>
        </>
      )}
    </div>
  );
};

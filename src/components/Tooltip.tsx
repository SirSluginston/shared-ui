import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}
// Tooltip: Shows popup when you hover on its child.
export const Tooltip = ({ content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="tooltip-wrapper" 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <span
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '100%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
            padding: 'var(--space-xs) var(--space-sm)',
            background: 'var(--dark-color)',
            color: 'var(--light-color)',
            borderRadius: 'var(--radius-master)',
            zIndex: 9999,
            whiteSpace: 'nowrap',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.92em',
            pointerEvents: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
          className="tooltip"
        >
          {content}
        </span>
      )}
    </span>
  );
};


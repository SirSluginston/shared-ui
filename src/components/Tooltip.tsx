import React from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}
// Tooltip: Shows popup when you hover on its child.
export const Tooltip = ({ content, children }: TooltipProps) => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    {children}
    <span
      style={{
        display: 'none',
        position: 'absolute',
        left: '50%',
        top: '-32px',
        transform: 'translateX(-50%)',
        padding: 'var(--space-xs) var(--space-sm)',
        background: 'var(--dark-color)',
        color: 'var(--light-color)',
        borderRadius: 'var(--radius-master)',
        zIndex: 50,
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.92em',
        pointerEvents: 'none',
      }}
      className="tooltip"
    >
      {content}
    </span>
    <style>{`
      span:hover > .tooltip { display: block; }
    `}</style>
  </span>
);


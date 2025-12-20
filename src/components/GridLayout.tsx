import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
}

// GridLayout: Responsive arrangement for cards/blocks.
export const GridLayout = ({ children, columns = 3, gap = 'var(--space-lg)' }: GridLayoutProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap,
      width: '100%',
    }}
  >
    {children}
  </div>
);


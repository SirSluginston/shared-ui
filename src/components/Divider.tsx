import React from 'react';

interface DividerProps {
  vertical?: boolean;
  size?: string;
}
// Divider: horizontal/vertical spacing gap.
export const Divider = ({ vertical = false, size = 'var(--space-lg)' }: DividerProps) => (
  <div
    style={vertical ? {
      width: '1px',
      height: size,
      background: 'var(--accent-color)',
      display: 'inline-block',
      margin: '0 var(--space-sm)',
    } : {
      width: '100%',
      height: '1px',
      background: 'var(--accent-color)',
      margin: `${size} 0`,
      display: 'block',
    }}
  />
);


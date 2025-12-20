import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'filled' | 'outline';
}

export const Badge = ({ label, variant = 'filled' }: BadgeProps) => {
  // Use only theme tokens; avoid fixed px units where possible.
  const styles: React.CSSProperties = {
    padding: 'var(--space-xs) var(--space-md)', // theme-based spacing
    borderRadius: '20px', // pill shape
    fontSize: '0.75rem',
    fontWeight: 'bold',
    display: 'inline-block',
    fontFamily: 'var(--font-sans)',
    backgroundColor: variant === 'filled' ? 'var(--brand-color)' : 'transparent',
    color: variant === 'filled' ? 'var(--light-color)' : 'var(--brand-color)',
    border: variant === 'outline' ? '1px solid var(--brand-color)' : 'none',
    lineHeight: '1',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap'
  };

  return <span style={styles}>{label}</span>;
};
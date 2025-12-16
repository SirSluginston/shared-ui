import React from 'react';

interface BadgeProps {
  label: string;
  color?: string; // Hex or CSS variable
  variant?: 'filled' | 'outline';
}

export const Badge = ({ label, color = 'var(--brand-color)', variant = 'filled' }: BadgeProps) => {
  const isFilled = variant === 'filled';
  
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      backgroundColor: isFilled ? color : 'transparent',
      color: isFilled ? 'white' : color,
      border: `1.5px solid ${color}`,
      fontFamily: 'var(--font-sans)',
      verticalAlign: 'middle'
    }}>
      {label}
    </span>
  );
};
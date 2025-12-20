import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  // All styling uses CSS token system.
  return (
    <div style={{ marginBottom: 'var(--space-md)', width: '100%' }}>
      {label && (
        <label style={{
          display: 'block',
          marginBottom: 'var(--space-xs)',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          fontFamily: 'var(--font-sans)',
          color: 'var(--dark-color)'
        }}>
          {label}
        </label>
      )}
      <input
        {...props}
        style={{
          width: '100%',
          padding: 'var(--space-sm)',
          borderRadius: 'var(--radius-master)',
          border: '1px solid var(--dark-color)',
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          outlineColor: 'var(--brand-color)',
          backgroundColor: 'var(--light-color)',
          color: 'var(--dark-color)',
          boxSizing: 'border-box',
          ...props.style
        }}
      />
    </div>
  );
};
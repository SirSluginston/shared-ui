import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
}

// ProgressBar: Visual loading bar, e.g. status or charge.
export const ProgressBar = ({ value, label }: ProgressBarProps) => (
  <div style={{ width: '100%', margin: 'var(--space-sm) 0' }}>
    {label && <div style={{ fontFamily: 'var(--font-sans)', marginBottom: 'var(--space-xs)', color: 'var(--dark-color)' }}>{label}</div>}
    <div
      style={{
        width: '100%',
        background: 'var(--light-color)',
        borderRadius: 'var(--radius-master)',
        overflow: 'hidden',
        border: '1px solid var(--dark-color)'
      }}
    >
      <div
        style={{
          width: `${Math.max(0, Math.min(value, 100))}%`,
          background: 'var(--brand-color)',
          height: '10px',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  </div>
);


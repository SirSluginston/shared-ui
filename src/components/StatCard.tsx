import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// StatCard: Showcases a single metric with decoration.
export const StatCard = ({ label, value, icon, className, style }: StatCardProps) => (
  <div
    className={className}
    style={{
      padding: 'var(--space-lg)',
      borderRadius: 'var(--radius-master)',
      background: 'var(--light-color)',
      border: '2.5px solid var(--shared-border-color)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 'var(--space-md)',
      transition: 'all 0.3s ease',
      ...style,
    }}
  >
    {icon && <span style={{ fontSize: '2rem' }}>{icon}</span>}
    <div>
      <div style={{ fontWeight: 'bold', color: 'var(--brand-color)', fontSize: '1.25rem' }}>{value}</div>
      <div style={{ color: 'var(--dark-color)', fontFamily: 'var(--font-sans)' }}>{label}</div>
    </div>
  </div>
);


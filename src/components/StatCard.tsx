import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

// StatCard: Showcases a single metric with decoration.
export const StatCard = ({ label, value, icon }: StatCardProps) => (
  <div
    style={{
      padding: 'var(--space-lg)',
      borderRadius: 'var(--radius-master)',
      background: 'var(--light-color)',
      border: '2px solid var(--accent-color)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 'var(--space-md)'
    }}
  >
    {icon && <span style={{ fontSize: '2rem' }}>{icon}</span>}
    <div>
      <div style={{ fontWeight: 'bold', color: 'var(--brand-color)', fontSize: '1.25rem' }}>{value}</div>
      <div style={{ color: 'var(--dark-color)', fontFamily: 'var(--font-sans)' }}>{label}</div>
    </div>
  </div>
);


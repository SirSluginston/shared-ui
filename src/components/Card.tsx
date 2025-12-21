import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  // All styles leverage CSS variables for full theming compatibility.
  return (
    <div
      style={{
        backgroundColor: 'var(--light-color)',
        borderRadius: 'var(--radius-master)',
        padding: 'var(--space-lg)',
        border: '2.5px solid var(--shared-border-color)',
        color: 'var(--dark-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
        transition: 'all 0.3s ease',
        marginTop: 0
      }}
    >
      {title && (
        <h3
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: 'var(--brand-color)',
            borderBottom: '2px solid var(--brand-color)',
            paddingBottom: 'var(--space-xs)',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            background: 'none'
          }}
        >
          {title}
        </h3>
      )}
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          lineHeight: '1.5',
          color: 'var(--dark-color)', // Ensuring direct CSS var
          background: 'none',
          marginTop: 0
        }}
      >
        {children}
      </div>
    </div>
  );
};

import React from 'react';
import '../styles/theme.css';

interface Props {
  children: React.ReactNode;
  useSerif?: boolean; // False = Roboto; True = Lora
}

export const PageContainer = ({ children, useSerif = false }: Props) => {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center',
      fontFamily: useSerif ? 'var(--font-serif)' : 'var(--font-sans)',
      paddingTop: 'var(--space-lg)'
    }}>
      <div style={{ width: '90%', maxWidth: '1400px' }}>
        {children}
      </div>
    </div>
  );
};
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

export const PageContainer = ({ children, darkMode = false }: PageContainerProps) => {
  // Uses only theme tokens; prepares for context-driven, global dark mode in the future.
  const themeVariables: React.CSSProperties = darkMode
    ? {
        backgroundColor: 'var(--dark-color)',
        color: 'var(--light-color)',
        //@ts-ignore
        '--light-color': 'var(--dark-color)', // Invert for descendants
        '--dark-color': 'var(--light-color)',
      }
    : {
        backgroundColor: 'var(--light-color)',
        color: 'var(--dark-color)',
      };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        margin: 0,
        overflowX: 'hidden',
        transition: 'all 0.3s ease',
        ...themeVariables,
      }}
    >
      {/* Reset typography margins for tight, consistent layouts. */}
      <style>{`
        h1, h2, h3, h4, p {
          margin-top: 0;
          margin-bottom: var(--space-md);
        }
        h1:first-child, p:first-child {
          margin-top: var(--space-md);
        }
      `}</style>

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto', // Center the demo area only
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          gap: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
  width?: string;
  /**
   * The border color. Defaults to var(--shared-border-color) which is set by CSS for theme mode.
   */
  borderColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Sidebar: Modern card for filters, navigation, widgets.
export const Sidebar = ({
  children,
  width = '280px',
  borderColor = 'var(--shared-border-color)',
  className,
  style,
}: SidebarProps) => {
  return (
    <aside
      className={className}
      style={{
        width,
        background: 'var(--light-color)',
        padding: 'var(--space-lg)',
        border: `2.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-master)',
        minHeight: '60vh',
        fontFamily: 'var(--font-sans)',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
        ...style,
      }}
    >
      {children}
    </aside>
  );
};

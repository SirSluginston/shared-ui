import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
  width?: string;
}

// Sidebar: Vertical stack for filters, navigation, ads, or widgets.
export const Sidebar = ({ children, width = '280px' }: SidebarProps) => (
  <aside
    style={{
      width,
      background: 'var(--light-color)',
      padding: 'var(--space-lg)',
      borderRight: '2px solid var(--accent-color)',
      borderRadius: '0 var(--radius-master) var(--radius-master) 0',
      minHeight: '60vh',
      fontFamily: 'var(--font-sans)'  
    }}
  >
    {children}
  </aside>
);


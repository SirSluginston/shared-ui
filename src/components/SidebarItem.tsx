import React from 'react';

interface SidebarItemProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

// SidebarItem: Individual item within a Sidebar, with selected state styling
export const SidebarItem = ({
  children,
  selected = false,
  onClick,
  className,
  style,
}: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        padding: 'var(--space-sm) var(--space-md)',
        marginBottom: 'var(--space-xs)',
        textAlign: 'left',
        background: selected ? 'var(--accent-color)' : 'var(--light-color)',
        color: selected ? 'var(--light-color)' : 'var(--dark-color)',
        border: '2.5px solid var(--shared-border-color)',
        borderRadius: 'var(--radius-master)',
        cursor: onClick ? 'pointer' : 'default',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'bold',
        transition: 'all 0.2s ease',
        boxShadow: selected
          ? '0 2px 8px rgba(0,0,0,0.15), 0 0 0 2px var(--accent-color)'
          : 'none',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!selected && onClick) {
          e.currentTarget.style.background = 'var(--accent-color)';
          e.currentTarget.style.color = 'var(--light-color)';
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.background = 'var(--light-color)';
          e.currentTarget.style.color = 'var(--dark-color)';
        }
      }}
    >
      {children}
    </button>
  );
};


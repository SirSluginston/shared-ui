import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string | number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * MobileMenu: A slide-out menu overlay for mobile devices
 * Uses consistent styling with Card/Sidebar components
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  children,
  width = 250,
  style,
  className,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 199,
          transition: 'opacity 0.3s ease',
        }}
      />
      
      {/* Menu panel */}
      <div
        className={className}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: typeof width === 'number' ? `${width}px` : width,
          height: '100vh',
          background: 'var(--light-color)',
          border: '2.5px solid var(--shared-border-color)',
          borderLeft: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          borderRadius: '0 var(--radius-master) var(--radius-master) 0',
          zIndex: 200,
          boxShadow: '4px 0 18px rgba(0,0,0,0.15)',
          padding: 'var(--space-lg)',
          paddingTop: 'var(--space-xl)',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          overflowY: 'auto',
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};


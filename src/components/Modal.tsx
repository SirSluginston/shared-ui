import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Modal: For dialogs that overlay the app, e.g. confirmations, forms, or info.
export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--light-color)',
          padding: 'var(--space-xl)',
          borderRadius: 'var(--radius-master)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};


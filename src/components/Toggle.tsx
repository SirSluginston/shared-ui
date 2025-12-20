import React from 'react';

interface ToggleProps {
  label?: string;
  isOn: boolean;
  onToggle: () => void;
}

export const Toggle = ({ label, isOn, onToggle }: ToggleProps) => {
  // Uses only theme tokens, and color for the disabled/off state.
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}
      onClick={onToggle}
    >
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'bold',
            color: 'var(--dark-color)',
            userSelect: 'none',
          }}
        >
          {label}
        </span>
      )}
      <div
        style={{
          width: '50px',
          height: '26px',
          borderRadius: '13px',
          backgroundColor: isOn ? 'var(--brand-color)' : 'var(--accent-color)', // accent for off
          position: 'relative',
          transition: 'background-color 0.3s ease',
          border: '1px solid var(--dark-color)',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'var(--light-color)',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: isOn ? '27px' : '3px',
            transition: 'left 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </div>
  );
};
import React from 'react';

interface AlertProps {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

// Alert: For banner messages, inline error or status feedback.
const colors = {
  info: 'var(--brand-color)',
  success: 'seagreen',
  warning: 'orange',
  error: 'crimson'
};
const overlays = {
  info: 'rgba(210,105,30,0.28)',
  success: 'rgba(46,139,87,0.24)',
  warning: 'rgba(255,215,0,0.32)',
  error: 'rgba(220,20,60,0.26)'
};
const borders = {
  info: 'var(--brand-color)',
  success: 'seagreen',
  warning: 'orange',
  error: 'crimson'
};
export const Alert = ({ message, type = 'info' }: AlertProps) => (
  <div
    style={{
      background: overlays[type],
      borderLeft: `5px solid ${borders[type]}`,
      color: 'var(--dark-color)',
      padding: 'var(--space-md) var(--space-lg)',
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-master)',
      margin: 'var(--space-md) 0',
      fontWeight: 'bold',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
    }}
    role="alert"
    tabIndex={0}
    aria-live="polite"
  >
    {message}
  </div>
);


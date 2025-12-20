import React from 'react';

interface ProjectTitleProps {
  title: string;
}

export const ProjectTitle = ({ title }: ProjectTitleProps) => (
  <div
    style={{
      width: '100%',
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '2.25rem',
      color: 'var(--brand-color)',
      letterSpacing: '0.12em',
      padding: 'var(--space-xs) 0',
      lineHeight: 1.2,
      background: 'var(--brand-color)',
      color: 'var(--project-color)',
      boxShadow: '0 1px 8px rgba(0,0,0,0.035)',
      zIndex: 100,
      position: 'relative',
    }}
  >
    {title}
  </div>
);


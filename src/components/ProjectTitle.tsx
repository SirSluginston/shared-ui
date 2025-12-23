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
      color: 'inherit', // Inherit from parent (will be project-color in Shell)
      letterSpacing: '0.12em',
      padding: 'var(--space-xs) 0',
      lineHeight: 1.2,
      background: 'transparent',
      position: 'relative',
    }}
  >
    {title}
  </div>
);


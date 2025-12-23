interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  // Fully token-based spacing, color, and font. Ready for dark mode.
  return (
    <header
      style={{
        marginBottom: 'var(--space-lg)',
        borderBottom: '2.5px solid var(--shared-border-color)',
        paddingBottom: 'var(--space-md)',
        width: '100%',
        marginTop: 0
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--brand-color)',
          fontSize: '2.5rem',
          margin: 0,
          background: 'none'
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--dark-color)',
            margin: 0,
            paddingTop: 'var(--space-xs)',
            opacity: 0.8,
            background: 'none',
            fontSize: '1.1rem'
          }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
};
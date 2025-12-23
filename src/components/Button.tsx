interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  label: string;
}


export const Button = ({ variant = 'primary', label, ...props }: ButtonProps) => {
  // All styles use CSS variables with zero hardcoded colors.
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--brand-color)',
          border: '2px solid var(--dark-color)',
          boxShadow: '2px 2px 0px var(--dark-color)',
          color: 'var(--button-text)'
        };
      case 'secondary': {
        return {
          backgroundColor: 'var(--project-color)',
          border: '2px solid var(--dark-color)',
          boxShadow: '2px 2px 0px var(--dark-color)',
          color: 'var(--button-text)'
        };
      }
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--brand-color)',
          border: '2px solid var(--brand-color)',
          boxShadow: 'none'
        };
      default:
        return {};
    }
  };

  // Only filled buttons use light text. Outline uses brand color for text for best contrast.
  // const isFilled = variant === 'primary' || variant === 'secondary';

  return (
    <button
      {...props}
      tabIndex={0}
      aria-label={label}
      style={{
        padding: 'var(--space-sm) var(--space-md)',
        borderRadius: 'var(--radius-master)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all 0.1s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        ...getStyles(),
        ...props.style
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translate(1px, 1px)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        const styles = getStyles();
        if (styles.boxShadow) e.currentTarget.style.boxShadow = styles.boxShadow as string;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
        const styles = getStyles();
        if (styles.boxShadow) e.currentTarget.style.boxShadow = styles.boxShadow as string;
      }}
    >
      {label}
    </button>
  );
};
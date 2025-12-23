interface AvatarProps {
  src?: string; // If not provided, uses fallback initials or icon
  alt?: string;
  size?: number; // px
  fallback?: string;
}

// Avatar: User photo or fallback icon/initials in a circle.
export const Avatar = ({ src, alt = '', size = 40, fallback }: AvatarProps) => (
  <div
    tabIndex={0}
    aria-label={alt || fallback || 'User avatar'}
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--accent-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontWeight: 'bold',
      fontFamily: 'var(--font-sans)',
      color: 'var(--light-color)',
      fontSize: size * 0.4,
      userSelect: 'none',
    }}
  >
    {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} /> : fallback || '?'}
  </div>
);


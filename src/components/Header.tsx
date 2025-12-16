
interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header style={{
      width: '100%',
      backgroundColor: 'var(--project-color)', // Dynamic from your DB logic
      color: 'var(--light-color)',
      padding: 'var(--space-md) 0',
      borderBottom: `4px solid var(--brand-color)` // Your signature burnt orange
    }}>
      <div style={{ width: '90%', maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>{title}</h1>
          {subtitle && <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>{subtitle}</p>}
        </div>
        <div style={{ fontWeight: 'bold', letterSpacing: '1px' }}>SIR SLUGINSTON</div>
      </div>
    </header>
  );
};
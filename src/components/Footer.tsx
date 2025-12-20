import React from 'react';

// Footer: Simple site-level info, copyright, links.
export const Footer = () => (
  <footer
    style={{
      width: '100%',
      marginTop: 'var(--space-xl)',
      padding: 'var(--space-lg)',
      background: 'var(--brand-color)',
      color: 'var(--light-color)',
      borderTop: '2px solid var(--accent-color)',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)'
    }}
  >
    © {new Date().getFullYear()} SirSluginston Co. | Powered by SirSluginston Co.
  </footer>
);

